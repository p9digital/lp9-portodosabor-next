import Image from "next/image";

import Container from "@/components/ui/containers/Container";
import ButtonPulse from "@/components/ui/buttons/ButtonPulse";

import { ButtonWrapper } from "../Faixa1/Styles";
import {
  Faixa2Wrapper, Faixa2Texto, Faixa2Titulo, ListaItens, SeloContainer, Faixa2ImagensWrapper, CoposAcaiContainer, Faixa2TextoImagem, TijelaAcaiWrapper
} from "./Styles";
import { Coluna5, Coluna7, Colunas } from "@/components/ui/colunas/Colunas";
import { FormMobile } from "@/pages";
import FormularioHome from "@/components/formulario/FormularioHome";
import { ListaItem } from "@/components/ui/listas/ListaItem";

type Props = {
  callForm: () => void
}

function Faixa2({ callForm }: Props) {
  const listaIcones = [
    {
      id: 1,
      icone: "/images/faixa2/icone1.png",
      iconeSize: { height: "37", width: "41" },
      texto: "Investimento a partir de R$ 150 mil"
    },
    {
      id: 2,
      icone: "/images/faixa2/icone2.png",
      iconeSize: { height: "39", width: "37" },
      texto: "Fabricação própria de alimentos e fornecedores homologados"
    },
    {
      id: 3,
      icone: "/images/faixa2/icone3.png",
      iconeSize: { height: "39", width: "35" },
      texto: "Suporte completo no início até o dia a dia do negócio"
    },
    {
      id: 4,
      icone: "/images/faixa2/icone4.png",
      iconeSize: { height: "38", width: "38" },
      texto: "Produtos de qualidade com ótimo custo benefício"
    },
    {
      id: 5,
      icone: "/images/faixa2/icone5.png",
      iconeSize: { height: "40", width: "28" },
      texto: "Cardápio variado e que atende aos diversos tipos de clientes o dia todo"
    },
    {
      id: 6,
      icone: "/images/faixa2/icone6.png",
      iconeSize: { height: "41", width: "41" },
      texto: "Treinamentos especializados para o franqueado e sua equipe"
    },
  ];

  return (
    <Faixa2Wrapper id="faixa2">
      <Container>
        <Colunas>
          <Coluna7>
            <Faixa2ImagensWrapper>
              <CoposAcaiContainer>
                <Image
                  src="/images/faixa2/copos-acai.png"
                  alt="Copos Açaí"
                  layout="responsive"
                  width="328"
                  height="379"
                />
              </CoposAcaiContainer>
              <SeloContainer>
                <Image
                  src="/images/faixa2/selos-abf.png"
                  alt="Selos ABF 2019, 2020 e 2022"
                  layout="responsive"
                  width="243"
                  height="135"
                />
              </SeloContainer>
            </Faixa2ImagensWrapper>

            <FormMobile>
              <FormularioHome />
            </FormMobile>

            <Faixa2Texto>
              A Porto do Sabor é referência no Rio de Janeiro, com 25 lojas
              {" "}
              <br />
              em operação e modelo de negócio com formatação sólida!
            </Faixa2Texto>
            <Faixa2Titulo fontColor="primary" margem="0 0 2rem">
              Faça parte de uma rede com mais
              {" "}
              <br />
              de 20 anos de experiência no ramo
              {" "}
              <br />
              e que oferece sabor com
            </Faixa2Titulo>
            <Faixa2TextoImagem>
              <Image
                src="/images/faixa2/texto-qualidade-e-saude.png"
                layout="responsive"
                width="420"
                height="58"
              />
            </Faixa2TextoImagem>

            <ListaItens>
              {
                listaIcones.map((item) => <ListaItem key={item.id} item={item} />)
              }
            </ListaItens>

            <ButtonWrapper>
              <ButtonPulse
                backColor="laranja"
                fontColor="white"
                backPulse="laranja"
                onClick={() => callForm()}
              >
                <span>RECEBA A APRESENTAÇÃO DE NEGÓCIO</span>
              </ButtonPulse>
            </ButtonWrapper>
          </Coluna7>
          <Coluna5>
            <TijelaAcaiWrapper>
              <Image
                src="/images/faixa2/tijela-acai.png"
                layout="responsive"
                width="804"
                height="634"
              />
            </TijelaAcaiWrapper>
          </Coluna5>
        </Colunas>
      </Container>
    </Faixa2Wrapper>
  );
}

export default Faixa2;
