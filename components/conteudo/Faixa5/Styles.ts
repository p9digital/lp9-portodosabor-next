import styled from "styled-components";
import Title from "@/components/ui/tipografia/Title";
import Paragraph from "@/components/ui/tipografia/Paragraph";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa5Wrapper = styled(FaixaWrapperSimples)`
background: url("/images/faixa5/background-detalhe.png") no-repeat center right;
background-color:#012A08;
background-size:contain;
position:relative;
`;

export const Faixa5Titulo = styled(Title)`
font-size:30px;
@media (max-width:600px) {
  font-size:25px;
}
`;

export const Faixa5Subtitulo = styled(Title)`
background: #DE9D45;
background: linear-gradient(to right, #DE9D45 0%, #f2bf81 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size:25px;
text-transform:uppercase;

@media (max-width:600px) {
  br {
    display:none;
  }
}
`;

export const Faixa5Texto = styled(Paragraph)`
color:white;
margin-bottom:2rem;
`;

export const ListaItens = styled.div`
display:flex;
flex-direction:column;
gap:2rem;
margin-bottom:5rem;
`;
