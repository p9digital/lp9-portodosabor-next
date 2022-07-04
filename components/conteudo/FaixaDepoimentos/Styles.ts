import styled from "styled-components";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";
import { ButtonWrapper } from "../Faixa1/Styles";
import { Coluna5 } from "@/components/ui/colunas/Colunas";

export const FaixaDepoimentoWrapper = styled(FaixaWrapperSimples)`
background-color:${(props) => props.theme.client.colors.vanilla};
`;

export const FaixaDepoimentoConteudo = styled.div`
display:flex;
flex-direction:column;

@media (max-width:900px) {
  ${Coluna5} {
    text-align:center;
    width:100%;
  }
}
`;

export const FaixaDepoimentoVideo = styled.div`
margin-top:-100px;
iframe {
  height:352px;
  max-width:625px;
  width:100%;

  @media (max-width:1140px) {
    height:30vw;
  }
  @media (max-width:900px) {
    height: calc(58vw - 4rem);
    max-height:352px;
  }
}

@media (max-width:900px) {
  text-align:center;
}
`;

export const FaixaDepoimentoTitulo = styled.h2`
color:${(props) => props.theme.client.colors.primary};
font-weight:normal;
margin-bottom:15px;
text-transform:uppercase;

strong {
  font-weight:900;
}
@media (max-width:768px) {
  text-align:center;
}
@media (max-width:600px) {
  font-size:2.4rem;

  br {
    display:none;
  }
}
`;

export const FaixaDepoimentoSubtitulo = styled.p`
color:${(props) => props.theme.client.colors.black};
font-size:16px;
font-weight:normal;
margin-bottom:15px;

@media (max-width:768px) {
  text-align:center;
}
@media (max-width:600px) {
  font-size:2rem;
}
`;

export const FaixaDepoimentoTituloPill = styled.span`
background-color:#FFFFFF;
border-radius:10px;
color:#EE2277;
display:inline-block;
padding:2px 5px;
`;

export const FaixaDepoimentoTexto = styled.p`
color:black;
font-size:16px;
line-height:1.5;
`;

export const DepoimentosContainer = styled.div`
align-items:center;
display: flex;
gap: 3rem;
margin-bottom:5rem;
margin-top:5rem;
max-width:945px;
width: 100%;

@media (max-width: 900px) {
  align-items: center;
  flex-wrap:wrap;
  justify-content: center;
}
@media (max-width:768px) {
  flex-direction: column;
}
`;

export const Depoimento = styled.div`
align-items:center;
margin-bottom:5rem;
`;

export const FaixaDepoimentoDepointe = styled.div`
align-items:center;
display:flex;
gap:2rem;
justify-content:space-between;
margin:2rem 0;

@media (max-width:768px) {
  flex-direction:column;
}
`;

export const FaixaDepoimentoDepointeFoto = styled.div`
width:150px;
`;

export const FaixaDepoimentoDepointeTexto = styled.div`
background:url("/images/aspas.png") no-repeat top left;
padding-left:50px;
padding-top:10px;
width:calc(100% - 150px);

@media (max-width:768px) {
  max-width:500px;
  width:100%;
}
`;

export const FaixaDepoimentoCaption = styled.p`
color:black;
font-size:16px;
line-height:1.5;

@media (max-width:768px) {
  text-align:center;
}
`;

export const FaixaDepoimentoDepointeVideo = styled.div`
iframe {
  height:352px;
  max-width:625px;
  width:100%;

  @media (max-width:1140px) {
    height:30vw;
  }
  @media (max-width:900px) {
    height: calc(58vw - 4rem);
    max-height:352px;
  }
}

@media (max-width:900px) {
  text-align:center;
}
`;

export const FaixaDepoimentoButtonWrapper = styled(ButtonWrapper)`
align-items:center;
`;
