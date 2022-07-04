import styled from "styled-components";
import Container from "../containers/Container";

export const FaixaConteudo = styled.div`
align-items: flex-start;
display: flex;
justify-content: center;
max-width: calc(50% - 1rem);
padding: 4rem 0;
width: 100%;

@media (max-width: 900px) {
  flex-direction: column;
  max-width: 100%;
}
`;

export const FaixaTextos = styled.div`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`;

export const FaixaWrapperSimples = styled.div`
display: flex;
padding: 5rem 1rem;
position: relative;
`;

export const FaixaContainer = styled(Container)`
display: flex;
flex-direction: column;

@media (max-width: 900px) {
  align-items: center;
}
`;
