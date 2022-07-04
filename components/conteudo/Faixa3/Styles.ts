import styled from "styled-components";
import Title from "@/components/ui/tipografia/Title";

export const Faixa3Wrapper = styled.div`
background:url("/images/faixa3/background.png") no-repeat center center;
background-size:cover;
padding-top:10rem;
position:relative;

@media (max-width:900px) {
  background:url("/images/faixa3/background-mobile.png") no-repeat center top;
}
`;

export const Faixa3Conteudo = styled.div`
align-items:flex-start;
display:flex;
flex-direction:column;
justify-content:center;
padding:10rem 0 5rem;

@media (max-width:900px) {
  padding:5rem 0;
}
`;

export const Faixa3Titulo = styled(Title)`
color:white;
font-size:30px;
font-weight:900;
text-transform:initial;

@media (max-width:900px) {
  margin:0 auto 2rem;
  text-align:center;
}
@media (max-width:600px) {
  font-size:25px;
}
`;

export const Faixa3Texto = styled.p`
color:black;
font-size:15px;
line-height:1.5;
margin-bottom:2rem;

@media (max-width:900px) {
  margin:0 auto 2rem;
  max-width:500px;
  text-align:center;
}
`;

export const ModeloContainerWrapper = styled.div`
bottom:0;
left:calc(50% - 90px);
position:absolute;
width:370px;

@media (max-width:900px) {
  background:url("/images/faixa3/background-mobile-fachada.png") no-repeat center center;
  background-size:cover;
  left:-1rem;
  position:relative;
  width:calc(100% + 2rem);
}
`;

export const ModeloContainer = styled.div`
bottom:0;
left:calc(50% - 90px);
position:absolute;
width:370px;

@media (max-width:900px) {
  left:calc(50% - 40px);
  position:relative;
  width:200px;
}
`;
