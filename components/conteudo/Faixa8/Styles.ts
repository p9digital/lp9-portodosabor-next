import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa8Wrapper = styled(FaixaWrapperSimples)`
padding:100px 0 0;
position:relative;
`;

export const Faixa8Monitor = styled.div`
margin-bottom:5rem;
margin-top:-30rem;
width:395px;
`;

export const Faixa8TextoCardapio = styled.div`
width:235px;
`;

export const Faixa8Titulo = styled(Title)`
font-size:40px;
font-weight:bold;
padding-left:2rem;

@media (max-width:600px) {
  font-size:2.4rem;
}
`;

export const Faixa8Texto = styled.p`
color:black;
font-size:20px;
margin-bottom:4rem;

@media (max-width:600px) {
  font-size:2rem;
}
`;

export const ListaImagens = styled.div`
display:grid;
gap:5px 10px;
grid-template-columns: repeat(8, 1fr);
justify-content:space-between;

@media (max-width:992px) {
  grid-template-columns: repeat(4, 1fr);
}
`;

export const ListaImagemItem = styled.div`
`;
