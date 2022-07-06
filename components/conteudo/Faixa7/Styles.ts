import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa7Wrapper = styled(FaixaWrapperSimples)`
background:url("/images/faixa7/background.jpg") no-repeat center center;
background-size:100% 100%;
margin-top:-3rem;
padding:10rem 0 20rem;
position:relative;

@media (max-width:900px) {
  background-size:cover;
}
@media (max-width:600px) {
  padding:10rem 0 25rem;
}
`;

export const Faixa7TextoImagem = styled.div`
margin-bottom:2rem;
width:355px;

@media (max-width:600px) {
  font-size:2.4rem;
}
`;

export const Faixa7Titulo = styled(Title)`
font-size:30px;
font-weight:bold;
text-transform:uppercase;

@media (max-width:600px) {
  font-size:2.4rem;
}
`;

export const Faixa7Texto = styled.p`
color:black;
font-size:20px;
font-weight:bold;
margin-bottom:4rem;

@media (max-width:600px) {
  font-size:2rem;
}
`;
