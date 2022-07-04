import Image from "next/image";
import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";
import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa9Wrapper = styled(FaixaWrapperSimples)`
background-color:#012A08;
padding:100px 0;
position:relative;

@media (max-width:600px) {
  padding:50px 0;
}
`;

export const Faixa9SetaWrapper = styled.div`
left:100%;
position:absolute;
top:30%;
transform:translate(-20%, 0);
width:304px;

@media (max-width:992px) {
  top:50%;
}
@media (max-width:900px) {
  display:none;
}
`;

export const Faixa9Seta = styled(Image)`
`;

export const Faixa9Titulo = styled(Title)`
color:${(props) => props.theme.client.colors.white};
font-size:40px;
font-weight:bold;

@media (max-width:600px) {
  font-size:2.4rem;
}
`;

export const Faixa9Texto = styled.p`
color:white;
font-size:30px;
margin-bottom:4rem;

@media (max-width:600px) {
  font-size:2rem;
}
`;
