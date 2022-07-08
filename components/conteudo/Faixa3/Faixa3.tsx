import Image from "next/image";

import Container from "@/components/ui/containers/Container";
import { Coluna7, Colunas } from "@/components/ui/colunas/Colunas";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";

import {
  Faixa3Conteudo,
  Faixa3Lista,
  Faixa3ListaItem,
  Faixa3ListaItemIcone,
  Faixa3ListaItemTexto,
  Faixa3Texto,
  Faixa3Titulo,
  Faixa3Video,
  Faixa3Wrapper,
} from "./Styles";
import { ButtonWrapper } from "../Faixa1/Styles";

type Props = {
  callForm: () => void;
};

function Faixa3({ callForm }: Props) {
  const itens = [
    {
      id: 1,
      texto: "3 milhões <br />de clientes <br />por ano",
    },
    {
      id: 2,
      texto: "280 <br />colaboradores",
    },
    {
      id: 3,
      texto: "25 lojas <br />no Rio <br />de janeiro",
    },
  ];

  return (
    <Faixa3Wrapper>
      <Container>
        <Colunas>
          <Coluna7>
            <Faixa3Conteudo>
              <Faixa3Titulo fontColor="primary" margem="0 0 2rem">
                O PORTO DO SABOR É{" "}
                <strong>
                  MARCA <br />
                  RECONHECIDA EM ALIMENTAÇÃO <br />
                  SAUDÁVEL E AÇAÍ
                </strong>{" "}
                NO RIO DE JANEIRO!
              </Faixa3Titulo>
              <Faixa3Texto>
                Quando uma empresa é administrada e operada com seriedade e
                comprometimento pela própria família, o sucesso é certo! Há 25
                anos, a família Wolfram abriu sua primeira unidade no RJ e,
                desde então, vem conquistando mais clientes, que elegeram o
                nosso açaí como o <strong>“melhor do Rio de Janeiro”</strong>!
              </Faixa3Texto>

              <Faixa3Lista>
                {itens.map((item, index) => (
                  <Faixa3ListaItem key={index}>
                    <Faixa3ListaItemIcone>
                      <Image
                        src="/images/icone-check.png"
                        width="52"
                        height="52"
                      />
                    </Faixa3ListaItemIcone>

                    <Faixa3ListaItemTexto
                      dangerouslySetInnerHTML={{ __html: item.texto }}
                    />
                  </Faixa3ListaItem>
                ))}
              </Faixa3Lista>

              <Faixa3Video>
                <video width="320" height="240" controls>
                  <source src="/videos/video.mp4" type="video/mp4" />
                  <track kind="captions" />
                </video>
              </Faixa3Video>

              <ButtonWrapper>
                <ButtonPulse
                  backColor="primary"
                  fontColor="white"
                  backPulse="primary"
                  onClick={() => callForm()}
                >
                  <span>SEJA UM FRANQUEADO!</span>
                </ButtonPulse>
              </ButtonWrapper>
            </Faixa3Conteudo>
          </Coluna7>
        </Colunas>
      </Container>
    </Faixa3Wrapper>
  );
}

export default Faixa3;
