import Image from "next/image";
import Container from "@/components/ui/containers/Container";

import {
  Faixa3Conteudo, Faixa3Texto, Faixa3Titulo, Faixa3Wrapper, ModeloContainer, ModeloContainerWrapper
} from "./Styles";
import { ButtonWrapper } from "../Faixa1/Styles";

import { Coluna5, Colunas } from "@/components/ui/colunas/Colunas";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";

type Props = {
  callForm: () => void
}

function Faixa3({ callForm }: Props) {
  return (
    <Faixa3Wrapper>
      <Container>
        <Colunas>
          <Coluna5>
            <Faixa3Conteudo>
              <Faixa3Texto>
                A Porto do Sabor é referência no Rio de Janeiro, com 25 lojas
                {" "}
                <br />
                em operação e modelo de negócio com formatação sólida!
              </Faixa3Texto>
              <Faixa3Titulo fontColor="primary" margem="0 0 2rem">
                Faça parte de uma rede com mais
                {" "}
                <br />
                de 20 anos de experiência no ramo
                {" "}
                <br />
                e que oferece sabor com
              </Faixa3Titulo>

              <ButtonWrapper>
                <ButtonPulse
                  backColor="primary"
                  fontColor="white"
                  backPulse="primary"
                  onClick={() => callForm()}
                >
                  <span>SEJA UM FRANQUEADO</span>
                </ButtonPulse>
              </ButtonWrapper>
            </Faixa3Conteudo>
          </Coluna5>
        </Colunas>

        <ModeloContainerWrapper>
          <ModeloContainer>
            <Image
              src="/images/faixa3/modelo.png"
              alt="Modelo"
              layout="responsive"
              width="378"
              height="707"
            />
          </ModeloContainer>
        </ModeloContainerWrapper>
      </Container>
    </Faixa3Wrapper>
  );
}

export default Faixa3;
