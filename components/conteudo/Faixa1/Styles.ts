import styled from "styled-components";

import Container from "@/components/ui/containers/Container";
import {
  FaixaWrapperSimples,
  FaixaConteudo,
  FaixaTextos,
} from '@/components/ui/faixas/FaixaStyles';
import Title from "@/components/ui/tipografia/Title";

export const Faixa1Wrapper = styled(FaixaWrapperSimples)`
background:url('/images/faixa1/background.jpg') no-repeat center center;
background-size:cover;
flex-wrap:wrap;
padding-bottom:5rem;
padding-top:25rem;

@media (max-width: 900px) {
  padding-top:12rem;
}
`;

export const TopoContainer = styled(Container)`
width: 50%;
position: relative;

@media (max-width: 900px) {
  width: 100%;
}
`;

export const BackgroundLateral = styled.div`
background: url('/images/tmp/quadrado1.png') no-repeat center right;
background-size: cover;
margin: 0 -1rem;
width: calc(50% + 2rem);

@media (max-width: 900px) {
  display: none;
}
`;

export const FaixaConteudoResponsive = styled(FaixaConteudo)`
padding: 0;
position:relative;
z-index:1;
`;

export const ModeloContainer = styled.div`
bottom:-6px;
left:calc(50%);
position:absolute;
transform:translate(-50%);
width:389px;
z-index:2;

@media (max-width: 1200px) {
  transform:translate(-120px);
}
@media (max-width: 900px) {
  transform:translate(0);
  width:389px;
}
@media (max-width:600px) {
}
`;

export const LogoContainer = styled.div`
width:378px;
`;

export const Faixa1Splash = styled.div`
align-items:center;
background:url("/images/faixa1/background-splash.png") no-repeat center center;
background-size:cover;
display:flex;
flex-direction:column;
height:485px;
justify-content:center;
margin-left:-5rem;
padding-bottom:5rem;
width:587px;

@media (max-width: 900px) {
  margin-left:-35rem;
}
@media (max-width:600px) {
}
`;

export const ButtonWrapper = styled.div<{ margem?: string }>`
align-items: flex-start;
display: flex;
flex-direction: column;
justify-content: center;
margin: ${(props) => props.margem || "0"};
position: relative;

@media (max-width: 900px) {
  align-items: center;
  width: 100%;
}
`;

export const Faixa1ButtonWrapper = styled(ButtonWrapper)`
`;

export const Faixa1ButtonWrapperMobile = styled(ButtonWrapper)`
display:none;
margin:2rem 0;

@media (max-width:900px) {
  display:flex;
}
`;

export const Faixa1Titulo = styled(Title)`
font-size:35px;
font-weight:bold;
text-align:center;

@media (max-width:600px) {
  font-size:25px;
}
`;

export const Faixa1Textos = styled(FaixaTextos)`
align-items: flex-start;
position: relative;
text-align: left;
width: 100%;
z-index: 10;

@media (max-width: 900px) {
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 55rem;
  text-align: center;
}
`;

export const Faixa1Texto = styled.p`
color:white;
font-size:20px;
line-height:1.5;
text-align:center;
text-transform:uppercase;

strong {
  font-size:25px;
  font-style:italic;
}
@media (max-width:600px) {
  font-size:20px;

  br {
    display:none;
  }
}
`;

export const SelosContainer = styled.div`
width:243px;
`;

export const ArquivoSeguroContent = styled.div`
text-align: center;
display: flex;
align-items: center;
`;

export const ArquivoSeguro = styled.p`
color: white;
font-size: 1.4rem;
font-weight: 300;
margin-left: 0.5rem;
`;

export const MarkedText = styled.span`
background: #DE9D45;
background: linear-gradient(to right, #DE9D45 0%, #f2bf81 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size:36px;
font-weight:900;

@media (max-width:600px) {
  font-size:30px;
}
`;
