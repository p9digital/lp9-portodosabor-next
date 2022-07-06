import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Element, scroller } from 'react-scroll';
import styled from 'styled-components';
import Head from 'next/head';

import Header from '@/components/layout/Header';
import Faixa1 from '@/components/conteudo/Faixa1';
import Faixa2 from '@/components/conteudo/Faixa2';
import FormularioHome from '@/components/formulario/FormularioHome';

import { getSessao } from '@/helpers/session';
import { tags } from '@/helpers/dados';

const Faixa3 = dynamic(() => import('@/components/conteudo/Faixa3'));
const Faixa4 = dynamic(() => import('@/components/conteudo/Faixa4'));
const Faixa5 = dynamic(() => import('@/components/conteudo/Faixa5'));
const Faixa6 = dynamic(() => import('@/components/conteudo/Faixa6'));
const Faixa7 = dynamic(() => import('@/components/conteudo/Faixa7'));
const Faixa8 = dynamic(() => import('@/components/conteudo/Faixa8'));
const Faixa9 = dynamic(() => import('@/components/conteudo/Faixa9'));

const MascaraCallForm = styled.div<{ativo: boolean}>`
background-color: ${(props) => (props.ativo ? 'rgba(0,0,0,0.5)' : 'inherit')};
display: ${(props) => (props.ativo ? 'block' : 'none')};
height: 100%;
position: fixed;
right: 0;
top: 0;
transition: all 0.3s;
width: 100%;
z-index: 99;
`;

const FormWrapper = styled.div<{fixar: boolean}>`
position: ${(props) => (props.fixar ? 'fixed' : 'absolute')};
left:calc(50% + 180px);
top: ${(props) => (props.fixar ? '5rem' : '14rem')};
z-index: 100;

@media (max-width: 1140px) {
  left:initial;
  right: 2rem;
}
@media (max-width: 900px) {
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 0;
  position: inherit;
}
`;

export const FormMobile = styled.div`
align-items:center;
display:none;
justify-content:center;
padding:2rem 0;

@media (max-width:900px) {
  display:flex;
}
`;

function Home() {
  const router = useRouter();
  const [destaqueForm, setDestaqueForm] = useState(false);
  const [FormFixo, setFormFixo] = useState(true);

  function callForm() {
    setDestaqueForm(true);
    if (window.innerWidth <= 900) {
      scroller.scrollTo('form', {
        duration: 1400,
        delay: 100,
        smooth: 'easeInOutQuart',
      });
    }
    setTimeout(() => {
      setDestaqueForm(false);
    }, 5000);
  }

  useEffect(() => {
    async function buscaSession() {
      const hoje = new Date();
      const session = await getSessao();
      if (session && session.lead_expire >= JSON.stringify(hoje)) {
        router.push('/sucesso');
      }
    }
    buscaSession();

    window.addEventListener('scroll', () => {
      let faixa5Top = 0;
      let faixa5Bottom = 0;
      const recuo = 150;
      const recuoTopo = 300;
      const faixa5 = document.getElementById("faixa5");
      if (faixa5) {
        faixa5Top = faixa5.offsetTop - recuoTopo;
        faixa5Bottom = faixa5.offsetHeight + recuo;
      }
      const srollTop = document.documentElement.scrollTop;
      if (
        window.innerWidth > 900
        && srollTop > 90
        && (
          srollTop < faixa5Top
          || srollTop > (faixa5Top + faixa5Bottom)
        )
      ) {
        setFormFixo(true);
      } else {
        setFormFixo(false);
      }
    });
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

      <Header home />
      <Faixa1 />
      <Faixa2 callForm={callForm} />
      <Faixa3 callForm={callForm} />

      <Element name="form">
        <FormWrapper fixar={FormFixo}>
          <FormularioHome />
        </FormWrapper>
      </Element>

      <Faixa4 callForm={callForm} />
      <Faixa5 callForm={callForm} />
      <Faixa6 callForm={callForm} />
      <Faixa7 />
      <Faixa8 callForm={callForm} />
      <Faixa9 callForm={callForm} />

      <MascaraCallForm ativo={destaqueForm} />
    </>
  );
}

export default Home;
