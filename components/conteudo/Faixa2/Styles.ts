import styled from "styled-components";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

import Title from "@/components/ui/tipografia/Title";

export const Faixa2Wrapper = styled(FaixaWrapperSimples)`
background:url("/images/faixa2/background.png") no-repeat center bottom;
background-size:cover;
padding-bottom:8rem;
position:relative;
z-index:2;

@media (max-width:900px) {
  background:none;
}
`;

export const Faixa2ImagensWrapper = styled.div`
align-items:center;
display:flex;
justify-content:space-between;
margin-top:-23rem;
`;

export const CoposAcaiContainer = styled.div`
width:328px;
`;

export const SeloContainer = styled.div`
width:243px;
`;

export const Faixa2Titulo = styled(Title)`
color:${(props) => props.theme.client.colors.white};

@media (max-width:900px) {
  text-align:center;
}
`;

export const Faixa2Texto = styled.p`
color:${(props) => props.theme.client.colors.white};
font-size:16px;
line-height:1.5;
margin-bottom:15px;

@media (max-width:900px) {
  text-align:center;
}
@media (max-width:600px) {
  br {
    display:none;
  }
}
`;

export const Faixa2TextoImagem = styled.div`
position:relative;
width:420px;
`;

export const TijelaAcaiWrapper = styled.div`
position:relative;
max-width:804px;
width:40vw;
`;

export const ListaItens = styled.div`
display:flex;
flex-direction:column;
gap:2rem 0;
margin:2rem 0;
`;
