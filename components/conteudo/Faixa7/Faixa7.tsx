import Image from "next/image";

import Container from "../../ui/containers/Container";

import {
  FaixaConteudoResponsive,
  Faixa1Textos,
} from "../Faixa1/Styles";
import {
  Faixa7TextoImagem,
  Faixa7Texto, Faixa7Titulo, Faixa7Wrapper
} from "./Styles";

function Faixa7() {
  return (
    <Faixa7Wrapper>
      <Container>
        <FaixaConteudoResponsive>
          <Faixa1Textos>
            <Faixa7TextoImagem>
              <Image
                alt="Texto Porto do Sabor na mídia"
                src="/images/faixa7/texto-porto-do-sabor-na-midia.png"
                width="355"
                height="88"
              />
            </Faixa7TextoImagem>

            <Faixa7Titulo fontColor="secondary" margem="0 0 2rem">
              Conheça o melhor açaí
              {" "}
              <br />
              da zona sul carioca!
            </Faixa7Titulo>
            <Faixa7Texto>
              “A franquia Porto do Sabor possui um cardápio elaborado com ingredientes cuidadosamente selecionados. Esse cuidado e seleção fazem com que seus itens tenham uma excelente qualidade, contribuindo para a saúde.”
            </Faixa7Texto>
          </Faixa1Textos>
        </FaixaConteudoResponsive>
      </Container>
    </Faixa7Wrapper>
  );
}

export default Faixa7;
