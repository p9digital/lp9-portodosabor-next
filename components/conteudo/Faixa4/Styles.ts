import styled from "styled-components";

export const Faixa4Wrapper = styled.div`
background:url("/images/faixa4/background.jpg") no-repeat center center;
background-size:cover;
margin-top:-1px;
position:relative;
`;

export const Faixa4Conteudo = styled.div`
align-items:center;
display:flex;
flex-direction:column;
justify-content:center;
padding:20rem 0;

@media (max-width:992px) {
  padding:10rem 0;
}
`;

export const Faixa4Texto = styled.p`
background: ${(props) => props.theme.client.colors.secondary};
border-radius:25px;
color:white;
display:inline-block;
font-size:30px;
font-weight:bold;
margin:2px 0;
padding:10px 20px;
text-align:center;

@media (max-width:900px) {
  font-size:20px;
}
`;
