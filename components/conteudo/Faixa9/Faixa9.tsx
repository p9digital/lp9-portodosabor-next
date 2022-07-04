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
  Faixa9Seta,
  Faixa9SetaWrapper,
  Faixa9Texto, Faixa9Titulo, Faixa9Wrapper
} from "./Styles";

type Props = {
  callForm: () => void
}

function Faixa9({ callForm }: Props) {
  return (
    <Faixa9Wrapper>
      <Container>
        <FaixaConteudoResponsive>
          <Faixa1Textos>
            <Faixa9SetaWrapper>
              <Faixa9Seta
                alt="Seta"
                src="/images/seta.png"
                width="304"
                height="166"
              />
            </Faixa9SetaWrapper>

            <Faixa9Titulo fontColor="preto" margem="0 0 2rem">
              FAÇA PARTE DA
              {" "}
              EM IMPLANTES DO BRASIL!
            </Faixa9Titulo>
            <Faixa9Texto>
              Tenha sua própria clínica odontológica
              lucrativa e rentável com Porto do Sabor.
            </Faixa9Texto>

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
    </Faixa9Wrapper>
  );
}

export default Faixa9;
