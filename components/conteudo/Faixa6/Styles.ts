import styled from "styled-components";

import { Coluna5 } from "@/components/ui/colunas/Colunas";
import Title from "@/components/ui/tipografia/Title";

import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa6Wrapper = styled(FaixaWrapperSimples)`
overflow:hidden;
padding-bottom:90px;

${Coluna5} {
  @media (max-width:992px) {
    width:50%;
  }
  @media (max-width:900px) {
    width:60%;
  }
  @media (max-width:768px) {
    width:70%;
  }
  @media (max-width:600px) {
    width:100%;
  }
}

@media (max-width:900px) {
  padding-bottom:200px;
}
`;

export const Faixa6Titulo = styled(Title)`
strong {
  font-weight:900;
}
@media (max-width: 900px) {
  text-align:center;
}
`;

export const Faixa6TituloPill = styled.span`
background-color:#ee2277;
color:#FFFFFF;
border-radius:10px;
display:inline-block;
padding:2px 5px;
`;

export const Faixa6Texto = styled.p`
color:${(props) => props.theme.client.colors.primary};
font-size:28px;
line-height:1.2;
margin-bottom:15px;
text-transform:uppercase;

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
"grid3 grid4"
"grid5 grid5";
margin-bottom:5rem;

@media (max-width:600px) {
  gap:2rem 0;
  grid-template:"grid1"
  "grid2"
  "grid3"
  "grid4"
  "grid5";
}
`;

export const Faixa6TextoVideo = styled.div`
position:relative;
`;

export const Faixa6TextoVideoSeta = styled.div`
position:absolute;
right:0;
top:0;
transform:translate(90%);
width:139px;

@media (max-width:900px) {
  right:50%;
  transform:translate(50%);
  top:calc(100% + 2rem);
}
`;

export const ModeloContainer = styled.div`
bottom:0;
height:100%;
left:50%;
position:absolute;
transform:translate(-20%, 0);
width:600px;

@media (max-width:900px) {
  display:none;
}
`;
