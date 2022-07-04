import Container from "../../ui/containers/Container";
import ButtonPulse from "../../ui/buttons/ButtonPulse";

import { ButtonWrapper, FaixaConteudoResponsive, Faixa1Textos } from "../Faixa1/Styles";
import {
  Faixa5Subtitulo,
  Faixa5Texto,
  Faixa5Titulo, Faixa5Wrapper, ListaItens
} from "./Styles";
import { ListaItem } from "@/components/ui/listas/ListaItem";

type Props = {
  callForm: () => void
}

function Faixa5({ callForm }: Props) {
  const listaIcones = [
    {
      id: 1,
      fontSize: "18px",
      icone: "/images/faixa5/icone1.png",
      iconeSize: { height: "43", width: "43" },
      size: "100%",
      texto: "<strong>Modelo de negócio à prova de crises:</strong> por ser um serviço de saúde, é essencial à população e sempre haverá demanda."
    },
    {
      id: 2,
      fontSize: "18px",
      icone: "/images/faixa5/icone2.png",
      iconeSize: { height: "42", width: "42" },
      size: "100%",
      texto: "<strong>600% de crescimento</strong> de 2020 a 2022"
    },
    {
      id: 3,
      fontSize: "18px",
      icone: "/images/faixa5/icone3.png",
      iconeSize: { height: "45", width: "37" },
      size: "100%",
      texto: "<strong>+de 3 milhões</strong> de atendimentos por ano"
    },
    {
      id: 4,
      fontSize: "18px",
      icone: "/images/faixa5/icone4.png",
      iconeSize: { height: "45", width: "45" },
      size: "100%",
      texto: "<strong>Aumento de 52% no faturamento</strong> nos últimos 2 anos"
    }
  ];

  return (
    <Faixa5Wrapper>
      <Container>
        <FaixaConteudoResponsive>
          <Faixa1Textos>
            <Faixa5Titulo fontColor="white" margem="0 0 2rem">
              SE VOCÊ QUER EXCELÊNCIA,
              {" "}
              <br />
              <strong>SEJA FRANQUEADO PORTO DO SABOR!</strong>
            </Faixa5Titulo>
            <Faixa5Subtitulo fontColor="primary" margem="0 0 2rem">
              Investir na Porto do Sabor é começar
              {" "}
              <br />
              um negócio já sendo
              {" "}
              <strong>o Nº1 do Brasil!</strong>
            </Faixa5Subtitulo>
            <Faixa5Texto>
              Se você é dentista ou investidor e busca um jeito bastante simplificado de abrir uma lucrativa clínica odontológica, evitando as burocracias e dores de cabeça, fazer parte de uma rede de franquias é a melhor opção!
            </Faixa5Texto>
            <Faixa5Texto>
              No caso da Porto do Sabor, oferecemos todas as soluções em gestão e na parte comercial, além do nosso modelo de negócio ser 100% estruturado e com os processos formados.
            </Faixa5Texto>

            <ListaItens>
              {
                listaIcones.map((item) => <ListaItem key={item.id} item={item} />)
              }
            </ListaItens>

            <ButtonWrapper>
              <ButtonPulse
                backColor="vanilla"
                fontColor="primary"
                backPulse="vanilla"
                onClick={() => callForm()}
              >
                <span>ABRA SUA FRANQUIA PORTO DO SABOR</span>
              </ButtonPulse>
            </ButtonWrapper>
          </Faixa1Textos>
        </FaixaConteudoResponsive>
      </Container>
    </Faixa5Wrapper>
  );
}

export default Faixa5;
