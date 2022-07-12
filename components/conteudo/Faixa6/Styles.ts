import styled from "styled-components";

import Title from "@/components/ui/tipografia/Title";

import { FaixaWrapperSimples } from "@/components/ui/faixas/FaixaStyles";

export const Faixa6Wrapper = styled(FaixaWrapperSimples)`
  background-color: ${(props) => props.theme.client.colors.secondary};
  margin-top: -3px;
  padding-bottom: 0;
  padding-top: 10rem;
  position: relative;
  z-index: 1;
`;

export const Faixa6TextoTitulo = styled.div`
  margin-bottom: 5rem;
  width: min(100%, 306px);

  @media (max-width: 900px) {
    margin: 2rem auto 5rem;
  }
`;

export const Faixa6Titulo = styled(Title)`
  color: white;
  font-size: 26px;
  text-transform: uppercase;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const Faixa6Texto = styled.p`
  color: white;
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 15px;

  strong {
    font-weight: 900;
  }
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 25px;
    br {
      display: none;
    }
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  width: min(100%, 450px);
  position: relative;
  display: flex;

  @media (max-width: 500px) {
    width: min(100%, 300px);
    flex-direction: column;
  }
`;

export const CardImage = styled.div`
  width: 60%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const CardText = styled.div`
  width: 40%;
  padding: 50px 20px;
  @media (max-width: 500px) {
    width: 100%;
    padding: 20px;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;

  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  p {
    background-color: ${(props) => props.theme.client.colors.primary};
    padding: 5px 10px;

    color: #fff;
    font-size: 19px;
    font-weight: bold;

    @media (max-width: 500px) {
      padding: 10px 20px;
      width: fit-content;
      font-size: 24px;

      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  span {
    display: block;
    font-size: 21px;
    font-weight: bold;
    color: #000;
  }
`;
