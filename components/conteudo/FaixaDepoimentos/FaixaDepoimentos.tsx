import Image from "next/image";

import Container from "../../ui/containers/Container";
import { Coluna7, Colunas } from "@/components/ui/colunas/Colunas";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";

import {
  Depoimento,
  FaixaDepoimentoConteudo,
  FaixaDepoimentoTexto,
  FaixaDepoimentoTitulo,
  FaixaDepoimentoSubtitulo,
  FaixaDepoimentoWrapper,
  FaixaDepoimentoDepointe,
  FaixaDepoimentoDepointeFoto,
  FaixaDepoimentoDepointeTexto,
  FaixaDepoimentoVideo,
  FaixaDepoimentoDepointeVideo,
  FaixaDepoimentoCaption
} from "./Styles";
import { ButtonWrapper } from "../Faixa1/Styles";

type Props = {
  callForm: () => void
}

function FaixaDepoimentos({ callForm }: Props) {
  const modelos = [
    {
      id: 1,
      header: "Não é dentista, <strong>mas quer faturar <br />com o lucrativo</strong> setor da saúde?",
      subheader: "Na Porto do Sabor, você não precisa ser dentista para entrar no nosso time!<br /><strong>Confira o depoimento do franqueado Luiz Nieto:</strong>",
      foto: "/images/faixa-depoimentos/foto-depointe1.png",
      fotoSize: { height: "150", width: "150" },
      depoimento: "Sou franqueado Porto do Sabor há 5 anos e possuo 9 unidades em andamento. Eu não sou dentista, sou administrador de empresas e meu sócio é dentista.”",
      video: "https://www.youtube.com/embed/rtt833rVfQg",
      caption: "<strong>Luiz Nieto</strong> - franqueado Porto do Sabor e administrador de empresas - Estado de SP",
    },
    {
      id: 2,
      header: "Já tem um consultório, mas busca uma solução para <strong>melhorar a gestão e o faturamento?</strong>",
      subheader: "<strong>Confira o que nosso franqueado Felipe diz sobre a Porto do Sabor:</strong>",
      foto: "/images/faixa-depoimentos/foto-depointe2.png",
      fotoSize: { height: "150", width: "150" },
      depoimento: "Possuo 32 unidades em funcionamento e 10 em implantação. O principal motivo de eu ter entrado na Porto do Sabor foi o negócio já com processos formados.”",
      video: "https://www.youtube.com/embed/JMSluXNUuaY",
      caption: "<strong>Felipe Rodrigues</strong> - dentista e franqueado de Goiânia/GO",
    },
    {
      id: 3,
      header: "É dentista e busca montar uma clínica própria e <strong>oferecer um atendimento humanizado e de qualidade?</strong>",
      subheader: "Transforme vidas através do sorriso com a sua franquia Porto do Sabor, <strong>confira<br />o depoimento de Luiz Felipe:</strong>",
      foto: "/images/faixa-depoimentos/foto-depointe3.png",
      fotoSize: { height: "150", width: "150" },
      depoimento: "Sou franqueado desde 2013. Tenho 21 unidades compradas: 12 em funcionamento e 9 em construção.”",
      video: "https://www.youtube.com/embed/mLDrVnzibHo",
      caption: "<strong>Luiz Felipe Durand</strong> - dentista franqueado de Santa Maria/RS",
    },
  ];

  return (
    <FaixaDepoimentoWrapper id="faixaDepoimento">
      <Container>
        <Colunas>
          <Coluna7>
            <FaixaDepoimentoConteudo>
              <FaixaDepoimentoVideo>
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/ZimpB_f0cS4?rel=0&loop=1&controls=0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </FaixaDepoimentoVideo>
              <br />

              <ButtonWrapper>
                <ButtonPulse
                  backColor="primary"
                  fontColor="white"
                  backPulse="primary"
                  onClick={() => callForm()}
                >
                  <span>SAIBA TUDO SOBRE O NEGÓCIO</span>
                </ButtonPulse>
              </ButtonWrapper>
              <br />
              <br />

              {
                modelos.map((item) => (
                  <Depoimento key={item.id}>
                    <FaixaDepoimentoTitulo dangerouslySetInnerHTML={{ __html: item.header }} />
                    <FaixaDepoimentoSubtitulo dangerouslySetInnerHTML={{ __html: item.subheader }} />

                    <FaixaDepoimentoDepointe>
                      <FaixaDepoimentoDepointeFoto>
                        <Image
                          src={item.foto}
                          width={item.fotoSize.width}
                          height={item.fotoSize.height}
                        />
                      </FaixaDepoimentoDepointeFoto>

                      <FaixaDepoimentoDepointeTexto>
                        <FaixaDepoimentoTexto dangerouslySetInnerHTML={{ __html: item.depoimento }} />
                      </FaixaDepoimentoDepointeTexto>
                    </FaixaDepoimentoDepointe>

                    <FaixaDepoimentoDepointeVideo>
                      <iframe
                        title={`video${item.id}`}
                        src={`${item.video}?rel=0&loop=1&controls=0`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </FaixaDepoimentoDepointeVideo>

                    <FaixaDepoimentoCaption dangerouslySetInnerHTML={{ __html: item.caption }} />
                  </Depoimento>
                ))
              }

              <ButtonWrapper>
                <ButtonPulse
                  backColor="primary"
                  fontColor="white"
                  backPulse="primary"
                  onClick={() => callForm()}
                >
                  <span>SEJA UM FRANQUEADO(A) AGORA!</span>
                </ButtonPulse>
              </ButtonWrapper>
            </FaixaDepoimentoConteudo>
          </Coluna7>
        </Colunas>
      </Container>
    </FaixaDepoimentoWrapper>
  );
}

export default FaixaDepoimentos;
