import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';

import Icon from '@/components/ui/icons/Icon';
import Link from '@/components/ui/buttons/Link';
import Title from '@/components/ui/tipografia/Title';

import { FaixaTextos, FaixaWrapperSimples } from '@/components/ui/faixas/FaixaStyles';

import { getSessao } from '@/helpers/session';
import { tags } from '@/helpers/dados';
import Header from '@/components/layout/Header';

export const FaixaWrapperFinal = styled(FaixaWrapperSimples)`
align-items: center;
background: url("/images/background-finalizado.jpg") no-repeat center center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
padding:0;
position: relative;

${FaixaTextos} {
  max-width: 900px;
  padding:2rem 0 0;
}
`;

export const LogoWrapper = styled.div`
background-color:${(props) => props.theme.client.colors.primary};
margin-bottom: 5rem;
padding:20px 0;
width: 100%;
`;

export const LogoContainer = styled.div`
margin:auto;
width: 240px;
`;

export const LinkWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`;

export const TitleFinalizado = styled(Title)`
border: none;
font-size:35px;
font-weight: 400;
text-align: center;
text-transform:uppercase;

span {
  color: ${(props) => props.theme.client.colors.laranja};
}
strong {
  color: ${(props) => props.theme.client.colors.laranja};
}

@media (max-width:600px) {
  font-size:25px;
}
`;

export const FinalizadoTexto = styled.p`
color: ${(props) => props.theme.client.colors.laranja};
font-size:18px;
margin-bottom:20px;

span {
  color: ${(props) => props.theme.client.colors.preto};
}
@media (max-width:600px) {
  font-size:16px;
}
`;

export const LinkDownload = styled(Link)`
margin: 0;
margin-bottom: 5rem;
padding: 1.5rem 4rem;
transition: all 0.2s ease 0s;

border-radius: 100px;

&:hover {
  transform: scale(1.1);
}

@media (max-width: 500px) {
  p {
    width: 95%;
  }
}
`;

export const FaixaWrapperRedes = styled(FaixaWrapperSimples)`
align-items: center;
background-color: ${(props) => props.theme.client.colors.primary};
display: flex;
flex-direction: column;
justify-content: center;
padding:5rem 0;
position: relative;

${FaixaTextos} {
  max-width: 900px;
}
`;

export const RedesWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
width: 100%;

a {
  align-items: center;
  color: white;
  display: flex;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-out;
    transform: scale(1.1);
  }
}

@media (max-width: 768px) {
  flex-wrap: wrap;
}
`;

function Finalizado() {
  const router = useRouter();
  // const [apresentacao, setApresentacao] = useState("");
  const [leadNome, setLeadNome] = useState({
    nome: "",
    donoLead: {
      id: "",
      link: "",
      numero: "",
      email: "",
    }
  });

  useEffect(() => {
    async function buscaSession() {
      // const wwidth = window.innerWidth;
      const session = await getSessao();

      if (session) {
        setLeadNome(session.lead_body);
      } else {
        router.push("/sucesso");
      }

      // if (wwidth < 768) {
      //   setApresentacao("");
      // }
    }

    buscaSession();
    // setInterval(() => {
    //   router.push(
    //     "https://wa.me/55/?text=" +
    //       encodeURI(
    //         `[] Olá, quero mais informações sobre a franquia.`
    //       )
    //   );
    // }, 7000);
  }, []);

  return (
    <>
      <Head>
        <title>{tags.title}</title>
        <meta name="description" content={tags.description} />
        <meta name="keywords" content={tags.keyWords} />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />

        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${tags.url}/static/img/og.png`} />
        <meta property="og:title" content={tags.title} />
        <meta property="og:description" content={tags.description} />
        <meta property="og:url" content={tags.url} />
      </Head>
      <FaixaWrapperFinal>
        <Header home={false} />

        <FaixaTextos style={{ minHeight: "calc(100vh - 525px)" }}>
          <TitleFinalizado fontColor="laranja" margem="0 0 2rem">
            <strong>
              Recebemos seus dados,
              {" "}
              {leadNome && leadNome.nome ? leadNome.nome.split(' ')[0] : ''}!
            </strong>
          </TitleFinalizado>
          <FinalizadoTexto>
            <span>
              Em breve entraremos em contato com você.
            </span>
          </FinalizadoTexto>

          {/* <FinalizadoTexto>
            <strong>
              Você pode fazer o download da apresentação do nosso modelo de negócio no botão abaixo:
            </strong>
          </FinalizadoTexto>
          <LinkWrapper>
            <LinkDownload
              backColor="secondary"
              fontColor="white"
              center="center"
              href="https://leadsp9-public-resources.s3.sa-east-1.amazonaws.com/arquivos-apresentacao/.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <strong>RECEBA A APRESENTAÇÃO</strong>
              </p>
            </LinkDownload>
          </LinkWrapper> */}

          {/* <FinalizadoTexto>
            <span>
              Clique no botão abaixo e receba a apresentação do nosso modelo de negócio pelo WhatsApp!
            </span>
          </FinalizadoTexto>

          <LinkWrapper>
            <LinkDownload
              backColor="verde"
              fontColor="white"
              center="center"
              href={
                `https://wa.me/${leadNome.donoLead.link}/?text=${encodeURI(`[Porto do Sabor] Olá, sou ${leadNome ? leadNome.nome.split(' ')[0] : ''} e quero saber mais sobre a franquia Porto do Sabor.`)}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                cor="#FFFFFF"
                tamanho="2.5rem"
                icon="whatsapp"
                margem="0 1rem 0 0"
                tipo="svg"
              />
              <p>
                <strong>Chamar no WhatsApp {leadNome.donoLead.numero}</strong>
              </p>
            </LinkDownload>
          </LinkWrapper> */}
        </FaixaTextos>
      </FaixaWrapperFinal>

      <FaixaWrapperRedes>
        <FaixaTextos>
          <TitleFinalizado fontColor="white" margem="0 0 5rem">
            SIGA O <strong>Porto do Sabor</strong> NAS REDES SOCIAIS:
          </TitleFinalizado>

          <RedesWrapper>
            <a
              href="https://www.facebook.com/portodosabor "
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                tamanho="3.5rem"
                cor="#FFFFFF"
                icon="facebook-square"
              />
              /portodosabor
            </a>
            <a
              href="https://www.instagram.com/portodosabor_oficial"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                tamanho="3.5rem"
                cor="#FFFFFF"
                icon="instagram2"
              />
              /portodosabor_oficial
            </a>
          </RedesWrapper>
          <br />
          <RedesWrapper>
            <a href="https://portodosabor.com.br/" target="_blank" rel="noreferrer">
              <Icon
                tamanho="3.5rem"
                cor="#FFFFFF"
                icon="world"
              />
              portodosabor.com.br
            </a>
          </RedesWrapper>
        </FaixaTextos>
      </FaixaWrapperRedes>
    </>
  );
}

export default Finalizado;
