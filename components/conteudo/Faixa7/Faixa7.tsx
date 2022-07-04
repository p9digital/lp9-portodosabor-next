import Image from "next/image";

import Container from "../../ui/containers/Container";
import ButtonPulse from "../../ui/buttons/ButtonPulse";

import {
  FaixaConteudoResponsive,
  Faixa1Textos,
  ButtonWrapper,
  SelosContainer,
} from "../Faixa1/Styles";
import {
  Faixa7Seta,
  Faixa7SetaWrapper,
  Faixa7Texto, Faixa7Titulo, Faixa7Wrapper
} from "./Styles";

type Props = {
  callForm: () => void
}

function Faixa7({ callForm }: Props) {
  return (
    <Faixa7Wrapper>
      <Container>
        <FaixaConteudoResponsive>
          <Faixa1Textos>
            <Faixa7SetaWrapper>
              <Faixa7Seta
                alt="Seta"
                src="/images/seta.png"
                width="304"
                height="166"
              />
            </Faixa7SetaWrapper>

            <Faixa7Titulo fontColor="preto" margem="0 0 2rem">
              FAÇA PARTE DA
              {" "}
              EM IMPLANTES DO BRASIL!
            </Faixa7Titulo>
            <Faixa7Texto>
              Tenha sua própria clínica odontológica
              lucrativa e rentável com Porto do Sabor.
            </Faixa7Texto>

            <ButtonWrapper>
              <ButtonPulse
                backColor="vanilla"
                fontColor="primary"
                backPulse="vanilla"
                onClick={() => callForm()}
              >
                <span>Fale com um expansionista</span>
              </ButtonPulse>
            </ButtonWrapper>
            <br />
            <br />

            <SelosContainer>
              <Image
                src="/images/selos-abf.png"
                alt="Selos ABF"
                layout="responsive"
                width="243"
                height="135"
              />
            </SelosContainer>
          </Faixa1Textos>
        </FaixaConteudoResponsive>
      </Container>
    </Faixa7Wrapper>
  );
}

export default Faixa7;
