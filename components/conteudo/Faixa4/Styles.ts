import styled from "styled-components";

export const Faixa4Wrapper = styled.div`
background:url("/images/faixa4/background.jpg") no-repeat center center;
background-size:cover;
box-shadow:1px 1px 20px rgba(0,0,0,0.4);
margin:2rem 0;
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
text-align:center;

span {
  background: rgb(244,161,65);
  background: linear-gradient(90deg, rgba(244,161,65,1) 0%, rgba(255,187,122,1) 100%);
  color:white;
  display:inline-block;
  font-size:50px;
  font-weight:900;
  margin:2px 0;
  padding:4px 10px;

  @media (max-width:768px) {
    font-size:30px;
  }
}
`;
