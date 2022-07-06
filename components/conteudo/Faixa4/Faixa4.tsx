import Container from "@/components/ui/containers/Container";

import { Faixa4Conteudo, Faixa4Texto, Faixa4Wrapper } from "./Styles";

type Props = {
  callForm: () => void
}

function Faixa4({ callForm }: Props) {
  return (
    <Faixa4Wrapper>
      <Container>
        <Faixa4Conteudo>
          <Faixa4Texto onClick={() => callForm()}>
            <span>TENHA SEU PRÓPRIO NEGÓCIO COM A PORTO DO SABOR!</span>
          </Faixa4Texto>
        </Faixa4Conteudo>
      </Container>
    </Faixa4Wrapper>
  );
}

export default Faixa4;
