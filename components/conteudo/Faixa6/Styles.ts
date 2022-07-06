import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";

import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa6Wrapper = styled(FaixaWrapperSimples)`
background-color:${(props) => props.theme.client.colors.secondary};
margin-top:-3px;
padding-bottom:0;
padding-top:10rem;
position:relative;
z-index:1;
`;

export const Faixa6TextoTitulo = styled.div`
margin-bottom:5rem;
width:306px;

@media (max-width: 900px) {
  margin:2rem auto 5rem;
}
`;

export const Faixa6Titulo = styled(Title)`
color:white;
font-size:26px;
text-transform:uppercase;
@media (max-width: 900px) {
  text-align:center;
}
@media (max-width: 600px) {
  font-size:22px;
}
`;

export const Faixa6Texto = styled.p`
color:white;
font-size:16px;
line-height:1.2;
margin-bottom:15px;

strong {
  font-weight:900;
}
@media (max-width:900px) {
  text-align:center;
}
@media (max-width:600px) {
  font-size:25px;
  br {
    display:none;
  }
}
`;

export const ListaItens = styled.div`
display:grid;
gap:5rem 0;
grid-template:"grid1 grid2"
"grid3 grid4";
margin-bottom:5rem;

@media (max-width:600px) {
  gap:2rem 0;
  grid-template:"grid1"
  "grid2"
  "grid3"
  "grid4";
}
`;

export const ListaItemModelo = styled.div`
display:flex;
flex-direction:column;
max-width:250px;

@media (max-width:600px) {
  margin:auto;
}
`;

export const ListaItemModeloFotoWrapper = styled.div`
background-color:${(props) => props.theme.client.colors.primary};
margin-bottom:5rem;
`;

export const ListaItemModeloFotoTitulo = styled.p`
color:white;
font-weight:bold;
padding:1rem 2rem;
text-transform:uppercase;
`;

export const ListaItemModeloFoto = styled.div`
margin-bottom:-4rem;
margin-left:2rem;
margin-right:-4rem;
`;

export const ListaItemModeloTextos = styled.div`
border:2px solid ${(props) => props.theme.client.colors.terciary};
padding:0.5rem 0;
`;

export const ListaItemModeloTexto = styled.p`
color:white;
font-weight:bold;
text-align:center;
text-transform:uppercase;
`;
