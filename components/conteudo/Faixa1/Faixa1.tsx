import Image from "next/image";

import Container from "@/components/ui/containers/Container";
import {
  Faixa1Textos,
  Faixa1Texto,
  Faixa1Titulo,
  Faixa1Wrapper,
  FaixaConteudoResponsive,
  ModeloContainer,
  Faixa1Splash
} from "./Styles";

function Faixa1() {
  return (
    <Faixa1Wrapper>
      <Container>
        <ModeloContainer>
          <Image
            src="/images/faixa1/modelo.png"
            alt="Modelo"
            width="389"
            height="638"
          />
        </ModeloContainer>
        <FaixaConteudoResponsive>
          <Faixa1Textos>
            <Faixa1Splash>
              <Faixa1Titulo fontColor="white" margem="0 0 2rem">
                FATURE, EM
                {" "}
                <br />
                MÉDIA, R$ 120
                {" "}
                <br />
                MIL POR MÊS
              </Faixa1Titulo>
              <Faixa1Texto>
                COM UMA FRANQUIA DE
                {" "}
                <br />
                ALIMENTAÇÃO SAUDÁVEL
                {" "}
                <br />
                E AÇAÍ CONSOLIDADA!
              </Faixa1Texto>
            </Faixa1Splash>
          </Faixa1Textos>
        </FaixaConteudoResponsive>
      </Container>
    </Faixa1Wrapper>
  );
}

export default Faixa1;
