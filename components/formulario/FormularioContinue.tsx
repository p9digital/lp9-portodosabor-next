import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Status from './Status';
import Loader from './Loader';
import Select from './Select';
import Input from './Input';
import InputMasked from './InputMasked';
import Textarea from './Textarea';

import {
  FormContainer,
  Form,
  FormButton,
  FormFooter,
  FormInputsMenor,
  StatusWrapper,
  FormRow
} from '../ui/formulario/FormStyles';

import { tempos, experiencias, estados } from '../../helpers/dados';
import {
  infosErro,
  validacaoContinue,
  validaTelefone,
} from '../../helpers/formulario';
import { celularMask } from '@/helpers/masks';
import { getSessao, setSessao } from '@/helpers/session';

const SelectEstado = styled(Select)``;

const SelectCidade = styled(Select)`
min-width: 32rem;
@media (max-width: 410px) {
  min-width: initial;
  max-width: 23rem;
}
`;

const FormFooterSucesso = styled(FormFooter)`
margin: 0;
width: 100%;
`;

const FormButtonSucesso = styled(FormButton)`
border-radius: 100px;
justify-content: center;
margin: 0 auto;
max-width: 40rem;

@media (max-width: 500px) {
  max-width: 30rem;
}
&::after {
  border-radius: 100px;
  background-color: ${(props) => props.theme.client.colors.primary};
}
&:hover {
  background-color: ${(props) => props.theme.client.colors.vanilla};
  color: ${(props) => props.theme.client.colors.primary};
}
`;

function FormularioContinue() {
  const router = useRouter();
  const [session, setSession] = useState({
    lead_id: "",
    queryParams: {}
  });
  const [lead, setLead] = useState({
    whatsapp: '',
    estado: '',
    cidade: '',
    experiencia: '',
    profissao: '',
    tempo: '',
    porque: '',
  });

  const [cidades, setCidades] = useState([]);

  const [controleForm, setControleForm] = useState({
    carregando: 'dias',
    valido: true,
    enviando: false,
    erro: false,
    sucesso: false,
  });

  const handleInput = ({ currentTarget: { name, value } }: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setLead({ ...lead, [name]: value });
  };

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    const validou = validacaoContinue(lead);
    const validouTelefone = validaTelefone(lead.whatsapp);

    if (!validou || !validouTelefone) {
      setControleForm({
        ...controleForm,
        valido: false,
      });

      return false;
    }

    setControleForm({
      ...controleForm,
      enviando: true,
    });

    const apiUrl = process.env.API_URL;
    if (session && apiUrl) {
      try {
        const sendLead = {
          _id: session.lead_id,
          client_id: process.env.CLIENT_ID,
          campaign_id: process.env.CAMPAIGN_ID,
          whatsapp: lead.whatsapp,
          uf: lead.estado,
          cidade: lead.cidade,
          experiencia: lead.experiencia,
          profissao: lead.profissao,
          tempo: lead.tempo,
          porque: lead.porque,
          queryParams: session.queryParams
        };

        await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendLead),
        });

        setControleForm({
          ...controleForm,
          sucesso: true,
        });

        setSessao({ ...session, lead_sucesso: true });

        router.push('/finalizado');
      } catch (err) {
        setControleForm({
          ...controleForm,
          sucesso: false,
          enviando: false,
          erro: true,
        });
      }
    } else {
      setControleForm({
        ...controleForm,
        sucesso: false,
        enviando: false,
        erro: true,
      });
    }
  };

  useEffect(() => {
    async function buscaSession() {
      const storageSession = await getSessao();
      if (!storageSession) {
        router.push('/');
      }
      setSession(storageSession);
    }

    buscaSession();
  }, []);

  const handleEstado = async ({ currentTarget: { name, value } }: FormEvent<HTMLSelectElement>) => {
    setLead({ ...lead, [name]: value, cidade: '' });
    setControleForm({ ...controleForm, carregando: 'cidade' });
    setCidades([]);

    try {
      const res = await fetch(`${process.env.CIDADES_URL}${value}.json`);
      const data = await res.json();

      setControleForm({ ...controleForm, carregando: 'dias' });
      setCidades(data);
    } catch (error) {
      setControleForm({
        ...controleForm,
        sucesso: false,
        enviando: false,
        erro: true,
      });
    }
  };

  return (
    <>
      {controleForm.enviando && !controleForm.erro && (
        <StatusWrapper>
          <p>
            <strong>Carregando...</strong>
          </p>
          <Loader />
        </StatusWrapper>
      )}
      {controleForm.erro && !controleForm.sucesso && (
        <StatusWrapper>
          <Status infos={infosErro} />
        </StatusWrapper>
      )}
      {!controleForm.enviando && !controleForm.erro && !controleForm.sucesso && (
        <FormContainer>
          <Form className="continue" onSubmit={handleSubmit}>
            <FormInputsMenor className="continue">
              <InputMasked
                mask={celularMask}
                nome="whatsapp"
                placeholder="Qual seu WhatsApp (DDD + Número)? "
                handleInput={handleInput}
                valor={lead.whatsapp}
                valido={controleForm.valido}
                custom={lead.whatsapp ? validaTelefone(lead.whatsapp) : true}
                className="select-input--sucesso"
                tipo="tel"
              />
              <FormRow className="sucesso">
                <SelectEstado
                  nome="estado"
                  placeholder="UF"
                  handleInput={handleEstado}
                  valor={lead.estado}
                  valores={estados}
                  valido={controleForm.valido}
                  className="select-input--sucesso"
                />
                <SelectCidade
                  nome="cidade"
                  placeholder="Selecione uma Cidade"
                  handleInput={handleInput}
                  valor={lead.cidade}
                  valores={cidades}
                  valido={controleForm.valido}
                  className="select-input--sucesso"
                />
              </FormRow>
              <Select
                nome="experiencia"
                placeholder="Possui experiência em gestão de franquia ou outros negócios?"
                handleInput={handleInput}
                valor={lead.experiencia}
                valores={experiencias}
                valido={controleForm.valido}
                className="select-input--sucesso"
              />
              <Input
                nome="profissao"
                placeholder="Qual sua profissão?"
                handleInput={handleInput}
                valor={lead.profissao}
                valido={controleForm.valido}
                className="select-input--sucesso"
              />
              <Select
                nome="tempo"
                placeholder="Em quanto tempo pretende adquirir sua franquia?"
                handleInput={handleInput}
                valor={lead.tempo}
                valores={tempos}
                valido={controleForm.valido}
                className="select-input--sucesso"
              />
              <Textarea
                nome="porque"
                placeholder="Por que você quer ser franqueado?"
                handleInput={handleInput}
                valor={lead.porque}
                valido={controleForm.valido}
                className="text-area text-area--sucesso"
              />
            </FormInputsMenor>
            <FormFooterSucesso>
              <FormButtonSucesso
                type="submit"
                backColor="primary"
                fontColor="vanilla"
              >
                CONCLUIR CADASTRO!
              </FormButtonSucesso>
            </FormFooterSucesso>
          </Form>
        </FormContainer>
      )}
    </>
  );
}

export default FormularioContinue;
