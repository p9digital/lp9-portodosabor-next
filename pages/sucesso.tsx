import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';

import Container from '@/components/ui/containers/Container';
import Title from '@/components/ui/tipografia/Title';
import FormularioContinue from '@/components/formulario/FormularioContinue';

import { FaixaTextos, FaixaWrapperSimples } from '@/components/ui/faixas/FaixaStyles';

import { tags } from '@/helpers/dados';
import { getSessao } from '@/helpers/session';

const FaixaWrapperSucesso = styled(FaixaWrapperSimples)`
background:url("/images/background-sucesso.jpg") no-repeat center center;
background-size:cover;
display:flex;
flex-direction:column;
padding:0 0 50px;
`;

const LogoWrapper = styled.div`
align-items:center;
background-color:${(props) => props.theme.client.colors.primary};
display:flex;
justify-content:center;
margin-bottom: 2rem;
padding:20px 0;
width: 100%;
`;

const LogoContainer = styled.div`
height:61px;
margin:auto;
width:240px;
`;

const FaixaTextoSucesso = styled(FaixaTextos)`
margin: 0 auto;
max-width: 900px;
position: relative;
`;

const TitleSucesso = styled(Title)`
border: none;
font-size:30px;
font-weight: 400;
text-align: center;

span {
  text-transform: uppercase;
  color: ${(props) => props.theme.client.colors.primary};
}
`;

const TextoSucesso = styled.p`
color:#000000;
margin: 0 auto 30px;
max-width: 900px;
position: relative;
`;

function Continue() {
  const [leadNome, setNome] = useState<string>();

  useEffect(() => {
    async function buscaSession() {
      const session = await getSessao();

      if (session) {
        setNome(session.lead_body.nome);
      }
    }

    buscaSession();
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

      <FaixaWrapperSucesso>
        <LogoWrapper>
          <Container>
            <LogoContainer>
              <Image
                src="/images/logo.png"
                alt="Logo Porto do Sabor"
                layout="responsive"
                width="240"
                height="61"
                priority
              />
            </LogoContainer>
          </Container>
        </LogoWrapper>

        <Container>
          <FaixaTextoSucesso>
            <TitleSucesso fontColor="primary" margem="0 0 2rem">
              <strong>
                Falta pouco,
                {" "}
                <span>{leadNome ? leadNome.split(" ")[0] : ""}</span>!
              </strong>
            </TitleSucesso>
            <TextoSucesso>
              <strong>Conclua seu cadatro</strong>
              , preencha os dados abaixo e tenha acesso a todo material da franquia.
            </TextoSucesso>

            <FormularioContinue />
          </FaixaTextoSucesso>
        </Container>
      </FaixaWrapperSucesso>
    </>
  );
}

export default Continue;
