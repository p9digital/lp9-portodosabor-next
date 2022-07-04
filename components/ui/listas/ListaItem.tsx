import Image from "next/image";
import styled from "styled-components";

const Item = styled.div<{gridArea: number, size: string, size600?: string}>`
align-items:center;
display:flex;
grid-area: grid${(props) => props.gridArea};
justify-content:space-between;
width:${(props) => props.size};

@media (max-width:600px) {
  width:${(props) => (props.size600 ? props.size600 : "100%")};
}
@media (max-width:420px) {
  width: 100%;
}
`;

const ItemIconeWrapper = styled.div`
margin-right:5px;
text-align:center;
width:60px;
`;

const ItemIcone = styled(Image)`
`;

const ItemTextos = styled.div`
width:calc(100% - 60px);

@media (max-width:900px) {
  text-align:left;
}
`;

const ItemTexto = styled.p<{fontSize: string, textColor?: string}>`
color:${(props) => (props.textColor ? props.textColor : "white")};
font-size: ${(props) => props.fontSize}
`;

type Props = {
  item: {
    id: number
    fontSize?: string
    icone: string
    iconeSize: {
      height: string
      width: string
    }
    size?: string
    size600?: string
    texto: string
    textColor?: string
  }
}

// id: 4,
// icone: "/images/faixa2/icone4.png",
// iconeSize: { height: "38", width: "38" },
// texto: "Consultoria
export function ListaItem({
  item: {
    id,
    fontSize = "18px",
    icone,
    iconeSize,
    size = "100%",
    size600,
    texto,
    textColor
  }
}: Props) {
  return (
    <Item gridArea={id} size={size} size600={size600}>
      <ItemIconeWrapper>
        <ItemIcone
          alt="Ícone"
          src={icone}
          width={iconeSize.width}
          height={iconeSize.height}
        />
      </ItemIconeWrapper>
      <ItemTextos>
        <ItemTexto textColor={textColor} fontSize={fontSize} dangerouslySetInnerHTML={{ __html: texto }} />
      </ItemTextos>
    </Item>
  );
}
