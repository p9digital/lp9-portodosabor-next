import Image from "next/image";

import Container from "../../ui/containers/Container";
// import ButtonPulse from "../../ui/buttons/ButtonPulse";

// import { ButtonWrapper } from "../Faixa1/Styles";
import {
  Faixa6Texto,
  Faixa6TextoVideo,
  Faixa6TextoVideoSeta,
  Faixa6Titulo,
  Faixa6Wrapper,
  ListaItens,
  ModeloContainer
} from "./Styles";
import { Coluna5, Colunas } from "@/components/ui/colunas/Colunas";
import { ListaItem } from "@/components/ui/listas/ListaItem";

function Faixa6() {
  const listaIcones = [
    {
      id: 1,
      fontSize: "18px",
      icone: "/images/faixa6/icone1.png",
      iconeSize: { height: "54", width: "54" },
      size: "100%",
      texto: "Infraestrutura moderna e completa",
      textColor: "black"
    },
    {
      id: 2,
      fontSize: "18px",
      icone: "/images/faixa6/icone2.png",
      iconeSize: { height: "53", width: "47" },
      size: "100%",
      texto: "Pioneirismo em odontologia digital",
      textColor: "black"
    },
    {
      id: 3,
      fontSize: "18px",
      icone: "/images/faixa6/icone3.png",
      iconeSize: { height: "60", width: "60" },
      size: "100%",
      texto: "Tecnologia de ponta",
      textColor: "black"
    },
    {
      id: 4,
      fontSize: "18px",
      icone: "/images/faixa6/icone4.png",
      iconeSize: { height: "57", width: "57" },
      size: "100%",
      texto: "Equipamentos de última geração",
      textColor: "black"
    },
    {
      id: 5,
      fontSize: "18px",
      icone: "/images/faixa6/icone5.png",
      iconeSize: { height: "58", width: "54" },
      size: "100%",
      texto: "Troca de bandeira: rápida adaptação e implantação da clínica.",
      textColor: "black"
    },
  ];

  return (
    <Faixa6Wrapper id="faixa6">
      <Container>
        <Colunas>
          <Coluna5>
            <Faixa6Titulo fontColor="primary" margem="0 0 3rem">
              CONHEÇA NOSSO MODELO
              {" "}
              <br />
              <strong>DE CLÍNICA ODONTOLÓGICA</strong>
            </Faixa6Titulo>

            <ListaItens>
              {
                listaIcones.map((item) => <ListaItem key={item.id} item={item} />)
              }
            </ListaItens>

            <Faixa6TextoVideo>
              <Faixa6Texto>
                Assista ao vídeo e
                {" "}
                <strong>
                  confira
                  {" "}
                  <br />
                  como é uma clínica Porto do Sabor!
                </strong>
              </Faixa6Texto>
              <Faixa6TextoVideoSeta>
                <Image
                  src="/images/seta-video.png"
                  alt="Seta"
                  layout="responsive"
                  width="139"
                  height="120"
                />
              </Faixa6TextoVideoSeta>
            </Faixa6TextoVideo>

            <ModeloContainer>
              <Image
                src="/images/faixa6/modelo.png"
                alt="Modelo"
                layout="responsive"
                width="700"
                height="787"
              />
            </ModeloContainer>

            {/* <ButtonWrapper>
              <ButtonPulse
                backColor="primary"
                fontColor="white"
                backPulse="primary"
                onClick={() => callForm()}
              >
                <span>SEJA FRANQUEADO(A)!</span>
              </ButtonPulse>
            </ButtonWrapper> */}
          </Coluna5>
        </Colunas>
      </Container>
    </Faixa6Wrapper>
  );
}

export default Faixa6;
