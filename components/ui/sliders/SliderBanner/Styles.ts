import styled from "styled-components";

export const Slider = styled.div`
display:flex;
flex-direction:column;
padding-top:100px;
position:relative;

@media (max-width:900px) {
  padding-top:0;
}
`;

export const SliderWrapper = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 27px rgba(0, 0, 0, 0.25);
border-radius: 50px;
margin: 12rem 0 10rem;
padding:20px;
position: relative;
text-align: center;
width: 100%;
`;

export const SliderItemsWrapper = styled.div`
height: 374px;
overflow: hidden;
margin-top: -100px;
padding-top: 100px;
`;

export const SlideItem = styled.div`
align-items: center;
background-color:#C4C4C4;
cursor:pointer;
display: flex;
flex-direction:column;
gap: 1rem;
justify-content: center;
padding:60px;

&.ativo {
  background-color:${(props) => props.theme.client.colors.primary};
  border-radius: 50px 50px 0 50px !important;
  margin-top:-100px;
}
&.visible.visible1 {
  border-radius: 50px 0 0 50px;
}
&.visible.ativo.maior.visible2 {
  border-radius: 50px 50px 0 0 !important;
}
&.visible.visible3 {
  border-radius: 0 50px 50px 0;
  &.ativo.maior {
    border-radius: 50px 50px 50px 0 !important;
  }
}
img {
  height: 100%;
  max-height: 76px;
  width: auto;
}
p {
  color:#000000;
}
`;

export const ItemsWrapper = styled.div`
display:flex;
height: 274px;
position:relative;
transition:all ease 0.5s;

&.cards1 {
  width:calc(100% * 6);
  ${SlideItem} {
    width:100%;

    border-radius: 50px !important;
    &.maior.visible2 {
      border-radius: 50px !important;
    }
  }
  &.current1 {
    left:0;
  }
  &.current2 {
    left:calc(calc(100%) * -1);
  }
  &.current3 {
    left:calc(calc(100% * 2) * -1);
  }
  &.current4 {
    left:calc(calc(100% * 3) * -1);
  }
  &.current5 {
    left:calc(calc(100% * 4) * -1);
  }
  &.current6 {
    left:calc(calc(100% * 5) * -1);
  }
}
&.cards2 {
  width:calc(100% / 2 * 6);
  ${SlideItem} {
    width: calc(100% / 2);

    &.visible2 {
      border-radius: 0 50px 50px 0;
      &.ativo.maior {
        border-radius: 50px 50px 50px 0 !important;
      }
    }
  }
  &.current1 {
    left:0;
  }
  &.current2 {
    left:calc(calc(100% / 2) * -1);
  }
  &.current3 {
    left:calc(calc((100% / 2) * 2) * -1);
  }
  &.current4 {
    left:calc(calc((100% / 2) * 3) * -1);
  }
  &.current5 {
    left:calc(calc((100% / 2) * 4) * -1);
  }
  &.current6 {
    left:calc(calc((100% / 2) * 4) * -1);
  }
}
&.cards3 {
  width:calc(100% / 3 * 6);
  ${SlideItem} {
    width: calc(100% / 3 - 1px);
  }
  &.current1 {
    left:0;
  }
  &.current2 {
    left:calc(calc(100% / 3) * -1);
  }
  &.current3 {
    left:calc(calc((100% / 3) * 2) * -1);
  }
  &.current4 {
    left:calc(calc((100% / 3) * 3) * -1);
  }
  &.current5 {
    left:calc(calc((100% / 3) * 3) * -1);
  }
  &.current6 {
    left:calc(calc((100% / 3) * 3) * -1);
  }
}
`;

export const SlideItemIcone = styled.img`
height: 100%;
max-height: 76px;
width: auto;
`;

export const SlideItemTexto = styled.p`
color:#000000;

&.ativo {
  color:#FFFFFF;
}
`;

export const Dots = styled.div`
align-items: center;
background-color:#C4C4C4;
border-radius:10px;
bottom: 45px;
display: flex;
justify-content: center;
left: 50%;
overflow:hidden;
position: absolute;
transform: translateX(-50%);
width:80%;
z-index:2;
`;

export const DotItem = styled.button`
background-color:#C4C4C4;
height: 15px;
margin: 0;
width: calc(100% / 6);

&:hover {
  background-color:#999999;
  border-radius:15px;
}
&.ativo {
  background: #EE2277;
  border-radius:10px;
}
`;
