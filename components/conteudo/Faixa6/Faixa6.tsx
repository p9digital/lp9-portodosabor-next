import Image from "next/image";

import Container from "../../ui/containers/Container";
// import ButtonPulse from "../../ui/buttons/ButtonPulse";

// import { ButtonWrapper } from "../Faixa1/Styles";
import {
  Faixa6Texto,
  Faixa6TextoTitulo,
  Faixa6Titulo,
  Faixa6Wrapper,
  CardsContainer,
  Card,
  CardImage,
  CardText,
} from "./Styles";
import { Coluna7, Colunas } from "@/components/ui/colunas/Colunas";
import { ButtonWrapper } from "../Faixa1/Styles";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";

type Props = {
  callForm: () => void;
};

function Faixa6({ callForm }: Props) {
  const listaIcones = [
    {
      id: 1,
      fontSize: "18px",
      icone: "/images/faixa6/modelo1.jpg",
      iconeSize: { height: "204", width: "238" },
      size: "100%",
      modelo: "Container",
      texto: "A partir de 280 mil",
      textColor: "black",
    },
    {
      id: 2,
      fontSize: "18px",
      icone: "/images/faixa6/modelo2.jpg",
      iconeSize: { height: "204", width: "238" },
      size: "100%",
      modelo: "Food Truck",
      texto: "A partir de 180 mil",
      textColor: "black",
    },
    {
      id: 3,
      fontSize: "18px",
      icone: "/images/faixa6/modelo3.jpg",
      iconeSize: { height: "204", width: "238" },
      size: "100%",
      modelo: "Loja",
      texto: "A partir de 470 mil",
      textColor: "black",
    },
    {
      id: 4,
      fontSize: "18px",
      icone: "/images/faixa6/modelo4.jpg",
      iconeSize: { height: "204", width: "238" },
      size: "100%",
      modelo: "Quiosque",
      texto: "A partir de 218 mil",
      textColor: "black",
    },
  ];

  return (
    <Faixa6Wrapper id="faixa6">
      <Container>
        <Colunas>
          <Coluna7>
            <Faixa6TextoTitulo>
              <Image
                src="/images/faixa6/texto-modelo-de-negocio.png"
                width="306"
                height="79"
              />
            </Faixa6TextoTitulo>

            <Faixa6Texto>
              Escolha o melhor modelo para as necessidades de mercado locais.
            </Faixa6Texto>
            <Faixa6Titulo fontColor="primary" margem="0 0 3rem">
              Já estão inclusos os valores com <br />
              taxa de franquia e estoque inicial!
            </Faixa6Titulo>

            <CardsContainer>
              {listaIcones.map((item) => (
                <Card key={item.id}>
                  <CardImage>
                    <Image
                      src={item.icone}
                      width={item.iconeSize.width}
                      height={item.iconeSize.height}
                      layout="responsive"
                    />
                  </CardImage>
                  <CardText>
                    <p>{item.modelo}</p>
                    <span>{item.texto}</span>
                  </CardText>
                </Card>
              ))}
            </CardsContainer>

            <ButtonWrapper margem="0 0 -3rem">
              <ButtonPulse
                backColor="primary"
                fontColor="white"
                backPulse="primary"
                onClick={() => callForm()}
              >
                <span>Saiba tudo sobre o negócio</span>
              </ButtonPulse>
            </ButtonWrapper>
          </Coluna7>
        </Colunas>
      </Container>
    </Faixa6Wrapper>
  );
}

export default Faixa6;
