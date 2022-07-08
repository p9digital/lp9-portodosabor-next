import Container from "../../ui/containers/Container";
import ButtonPulse from "../../ui/buttons/ButtonPulse";

import { FaixaConteudoResponsive, Faixa1Textos } from "../Faixa1/Styles";
import {
  ButtonWrapperDesktop,
  Faixa5FormMobile,
  Faixa5Texto,
  Faixa5Titulo, Faixa5Wrapper, ListaItens
} from "./Styles";
import { ListaItem } from "@/components/ui/listas/ListaItem";
import FormularioHome from "@/components/formulario/FormularioHome";

type Props = {
  callForm: () => void
}

function Faixa5({ callForm }: Props) {
  const listaIcones = [
    {
      id: 1,
      fontSize: "18px",
      icone: "/images/icone-check.png",
      iconeSize: { height: "52", width: "52" },
      size: "100%",
      texto: "8 a cada 10 brasileiros buscam uma alimentação saudável",
      textColor: "black"
    },
    {
      id: 2,
      fontSize: "18px",
      icone: "/images/icone-check.png",
      iconeSize: { height: "52", width: "52" },
      size: "100%",
      texto: "Faturamento do setor de alimentação <strong>aumentou 14,5% entre 2021 e 2022</strong>, segundo a ABF.",
      textColor: "black"
    },
    {
      id: 3,
      fontSize: "18px",
      icone: "/images/icone-check.png",
      iconeSize: { height: "52", width: "52" },
      size: "100%",
      texto: "Setor de açaí é um mercado bilionário (US$ 1,5 bilhão por ano, segundo Sindifrutas) e muito procurado no país e no exterior!",
      textColor: "black"
    }
  ];

  return (
    <Faixa5Wrapper>
      <Container>
        <FaixaConteudoResponsive>
          <Faixa1Textos>
            <Faixa5Titulo fontColor="primary" margem="0 0 2rem">
              FAÇA PARTE DO CRESCIMENTO DO
              {" "}
              <br />
              RAMO DA ALIMENTAÇÃO COM O
              {" "}
              <br />
              PORTO DO SABOR!
            </Faixa5Titulo>
            <Faixa5Texto>
              A população brasileira está mais preocupada com a alimentação, principalmente após o cenário pandêmico dos últimos anos. Com isso, o setor de alimentação saudável cresceu exponencialmente desde 2020!
            </Faixa5Texto>
            <Faixa5Texto>
              Os índices de crescimento do setor surpreenderam o mercado:
            </Faixa5Texto>

            <ListaItens>
              {
                listaIcones.map((item) => <ListaItem key={item.id} item={item} />)
              }
            </ListaItens>

            <Faixa5FormMobile>
              <FormularioHome />
            </Faixa5FormMobile>

            <ButtonWrapperDesktop margem="0 0 -3rem">
              <ButtonPulse
                backColor="primary"
                fontColor="white"
                backPulse="primary"
                onClick={() => callForm()}
              >
                <span>ABRA SUA FRANQUIA!</span>
              </ButtonPulse>
            </ButtonWrapperDesktop>
          </Faixa1Textos>
        </FaixaConteudoResponsive>
      </Container>
    </Faixa5Wrapper>
  );
}

export default Faixa5;
