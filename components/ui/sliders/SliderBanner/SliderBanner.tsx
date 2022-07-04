import { useEffect, useState } from "react";
import {
  DotItem, Dots, ItemsWrapper, SlideItem, SlideItemIcone, SlideItemTexto, Slider, SliderItemsWrapper, SliderWrapper
} from "./Styles";

type Props = {
  cards: any[]
}
let timeout;

function SliderBanner({ cards }: Props) {
  const [current, setCurrent] = useState(1);
  const [showCards, setShowCards] = useState(3);
  const [minVisible, setMinVisible] = useState(4);
  const dots = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const wwidth = window.innerWidth;

    setCurrent(1);
    if (wwidth < 600) {
      setShowCards(1);
      setMinVisible(5);
    } else if (wwidth < 900) {
      setShowCards(2);
      setMinVisible(5);
    } else {
      setShowCards(3);
      setMinVisible(4);
    }
  }, []);

  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      let next = current + 1;
      if (next > cards.length) {
        next = 1;
      }
      setCurrent(next);
    }, 13000);
  }, [current]);

  return (
    <Slider>
      <SliderWrapper>
        <SliderItemsWrapper>
          <ItemsWrapper
            className={`current${current} cards${showCards}`}
          >
            {cards.map((item) => (
              <SlideItem
                key={item.id}
                className={`card${item.id} ${current === item.id ? "ativo" : ""} ${item.id >= (current >= minVisible ? minVisible : current) && item.id < (current + showCards) ? `visible ${item.id === current ? "maior" : ""} visible${
                  showCards > 2
                    ? (current <= minVisible ? (item.id > current + 1 ? "3" : (item.id <= current ? "1" : "2")) : (item.id > minVisible + 1 ? "3" : (item.id < current && item.id === minVisible ? "1" : "2")))
                    : (current <= minVisible ? (item.id == current ? "1" : "2") : (item.id < current ? "1" : "2"))
                }` : ""}`}
                onClick={() => setCurrent(item.id)}
              >
                <SlideItemIcone
                  src={`/images/tmp/icons/${current === item.id ? item.iconeAtivo : item.icone}`}
                />
                <SlideItemTexto
                  className={`${current === item.id ? "ativo" : ""}`}
                  dangerouslySetInnerHTML={{ __html: item.texto }}
                />
              </SlideItem>
            ))}
          </ItemsWrapper>
        </SliderItemsWrapper>
      </SliderWrapper>

      <Dots>
        {
          dots.map((dot, index) => (
            <DotItem
              key={index}
              onClick={() => setCurrent(dot)}
              className={`${current === dot ? "ativo" : ""}`}
            />
          ))
        }
      </Dots>
    </Slider>
  );
}

export default SliderBanner;
