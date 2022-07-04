import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";
import {
  browserName,
  deviceDetect,
  isMobile,
  osName,
} from "react-device-detect";

import Status from "./Status";
import Loader from "./Loader";
import Select from "./Select";
import Input from "./Input";
import InputMasked from "./InputMasked";
import {
  FormContainer,
  Form,
  FormHeader,
  FormButton,
  FormFooter,
  FormInputsMenor,
  StatusWrapper
} from "../ui/formulario/FormStyles";

import { capitais, whatsapps } from "../../helpers/dados";
import {
  validacao,
  infosErro,
  validaNomeCompleto,
  validaTelefone,
  validaEmail,
} from "../../helpers/formulario";
import { celularMask } from "@/helpers/masks";
import { setSessao } from "@/helpers/session";

function FormularioHome() {
  const router = useRouter();
  const outroValor = "Informar outro valor:";
  const [lead, setLead] = useState({
    nome: "",
    email: "",
    celular: "",
    capital: "",
    outroCapital: "",
  });
  const [controleForm, setControleForm] = useState({
    carregando: "dias",
    valido: true,
    enviando: false,
    erro: false,
    sucesso: false,
  });

  const handleInput = ({ currentTarget: { name, value } }: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setLead({ ...lead, [name]: value });
  };

  const donoLead = async () => {
    console.log(whatsapps[0]);
    return whatsapps[0];
    // const response = await fetch("/api/leads");
    // const dados = await response.json();
    // const contador = dados % whatsapps.length;
    // return whatsapps[contador];
  };

  const buscaIp = async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    const result = await response.json();

    return result.ip;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validouCampos = validacao(lead);
    const validouNome = validaNomeCompleto(lead.nome);
    const validouEmail = validaEmail(lead.email);
    const validouCelular = validaTelefone(lead.celular);

    if (!validouCampos || !validouNome || !validouEmail || !validouCelular) {
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

    if (lead.capital == outroValor && lead.outroCapital != "") {
      lead.capital = lead.outroCapital;
    } else if (lead.capital == outroValor && lead.outroCapital == "") {
      lead.capital = "Capital não informado";
    }

    const queryParams = queryString.parse(window.location.search);
    const dadosDono = await donoLead();
    const ip = await buscaIp();
    const device = isMobile ? `Mobile / ${osName}` : `Desktop / ${browserName}`;
    const ua = await deviceDetect("");

    try {
      const apiUrl = process.env.API_URL;
      if (apiUrl) {
        const sendLead = {
          client_id: process.env.CLIENT_ID,
          campaign_id: process.env.CAMPAIGN_ID,
          nome: lead.nome,
          email: lead.email,
          celular: lead.celular,
          capital: lead.capital,
          marca: 'Porto do Sabor',
          identificador: 'Porto do Sabor',
          dono_lead: `${dadosDono.nome} ${dadosDono.numero}`,
          // dono_lead_id: dadosDono.id,
          ip: ip,
          device: device,
          userAgent: ua.userAgent,
          referrer: document.referrer,
          queryParams: queryParams,
          ...queryParams,
        };

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendLead),
        });
        const data = await response.json();

        if (data) {
          setControleForm({
            ...controleForm,
            sucesso: true,
          });

          const hoje = new Date();
          const dados = {
            lead_body: {
              nome: lead.nome,
              email: lead.email,
              celular: lead.celular,
              capital: lead.capital,
              donoLead: dadosDono
            },
            queryParams: queryParams,
            lead_id: data._id,
            lead_expire: hoje
          };

          setSessao(dados);

          router.push("/sucesso");
        }
      }
    } catch (err) {
      setControleForm({
        ...controleForm,
        sucesso: false,
        enviando: false,
        erro: true,
      });
    }

    setControleForm({
      ...controleForm,
      sucesso: false,
      enviando: false,
      erro: true,
    });
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
          <Form onSubmit={handleSubmit}>
            <FormHeader>
              <h2>Preencha o formulário para receber a apresentação de negócio!</h2>
            </FormHeader>
            <FormInputsMenor>
              <Input
                nome="nome"
                placeholder="Nome Completo"
                handleInput={handleInput}
                valor={lead.nome}
                valido={controleForm.valido}
                className="select-input--sucesso"
                tipo="text"
                custom={lead.nome ? validaNomeCompleto(lead.nome) : true}
              />
              <Input
                nome="email"
                placeholder="E-mail"
                handleInput={handleInput}
                valor={lead.email}
                valido={controleForm.valido}
                className="select-input--sucesso"
                tipo="email"
                statusEmail={lead.email ? validaEmail(lead.email) : true}
              />
              <InputMasked
                mask={celularMask}
                nome="celular"
                placeholder="Celular com DDD"
                handleInput={handleInput}
                valor={lead.celular}
                valido={controleForm.valido}
                className="select-input--sucesso"
                tipo="tel"
                custom={lead.celular ? validaTelefone(lead.celular) : true}
              />
              <Select
                nome="capital"
                placeholder="Capital disponível para investimento"
                handleInput={handleInput}
                valor={lead.capital}
                valores={capitais}
                valido={controleForm.valido}
                className="select-input--sucesso"
              />
              {lead.capital && lead.capital == outroValor && (
                <Input
                  nome="outroCapital"
                  placeholder="Digite aqui o valor disponível: R$"
                  handleInput={handleInput}
                  valor={lead.outroCapital}
                  valido
                  className="select-input--sucesso"
                  tipo="text"
                  custom
                />
              )}
            </FormInputsMenor>
            <FormFooter>
              <FormButton
                type="submit"
                backColor="vanilla"
                fontColor="primary"
              >
                BAIXAR APRESENTAÇÃO
              </FormButton>
            </FormFooter>
          </Form>
        </FormContainer>
      )}
    </>
  );
}

export default FormularioHome;
