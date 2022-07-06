import Image from "next/image";

import Container from "../../ui/containers/Container";
import ButtonPulse from "../../ui/buttons/ButtonPulse";

import {
  FaixaConteudoResponsive,
  Faixa1Textos,
  ButtonWrapper,
} from "../Faixa1/Styles";
import {
  Faixa8Monitor,
  Faixa8Texto, Faixa8TextoCardapio, Faixa8Titulo, Faixa8Wrapper, ListaImagemItem, ListaImagens
} from "./Styles";

type Props = {
  callForm: () => void
}

function Faixa8({ callForm }: Props) {
  return (
    <Faixa8Wrapper>
      <Faixa1Textos>
        <Container>
          <FaixaConteudoResponsive>
            <Faixa1Textos>
              <Faixa8Monitor>
                <Image
                  alt="Monitor"
                  src="/images/faixa8/monitor.png"
                  width="395"
                  height="376"
                />
              </Faixa8Monitor>

              <ButtonWrapper>
                <ButtonPulse
                  backColor="primary"
                  fontColor="white"
                  backPulse="primary"
                  onClick={() => callForm()}
                >
                  <span>Seja um franqueado(a) agora!</span>
                </ButtonPulse>
              </ButtonWrapper>
              <br />
              <br />

              <Faixa8TextoCardapio>
                <Image
                  alt="Texto cardápio"
                  src="/images/faixa8/texto-cardapio.png"
                  width="235"
                  height="54"
                />
              </Faixa8TextoCardapio>
              <Faixa8Titulo fontColor="secondary" margem="0 0 2rem">
                COM PRODUTOS DE
                {" "}
                <br />
                QUALIDADE E SABOR
              </Faixa8Titulo>
              <Faixa8Texto>
                Receba seus clientes o dia todo com as variadas opções que vão desde o café da manhã até o jantar!
              </Faixa8Texto>
            </Faixa1Textos>
          </FaixaConteudoResponsive>
        </Container>

        <ListaImagens>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item, index) => (
              <ListaImagemItem>
                <Image
                  key={index}
                  src={`/images/faixa8/imagem${item}.jpg`}
                  width="232"
                  height="229"
                />
              </ListaImagemItem>
            ))
          }
        </ListaImagens>
      </Faixa1Textos>
    </Faixa8Wrapper>
  );
}

export default Faixa8;
