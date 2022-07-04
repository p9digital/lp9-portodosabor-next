import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';

import Vimeo from './Vimeo';
import Youtube from './Youtube';

type Props = {
  placeholderImgName?: string
  vimeoId: string
  title?: string
  youtubeId?: string
  width: number
  height: number
};

const ThumbWrapper = styled.div`
cursor: pointer;
margin:auto;
position: relative;
width: min(100%, 60rem);
  
  &::after {
    content: '▶';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    font-size: 5rem;
    transform: translate(-50%, -50%);
    border: 0.5rem solid;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    text-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.2s;
  }
  &:hover {
    &::after {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
      text-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
      transform: translate(-50%, -55%) scale(1.03);
    }
  }
`;

function Video({
  placeholderImgName,
  youtubeId,
  vimeoId,
  title,
  width,
  height,
}: Props) {
  const [placeHolderAtivo, setPlaceHolderAtivo] = useState(true);
  if (placeHolderAtivo) {
    return (
      <ThumbWrapper onClick={() => setPlaceHolderAtivo(false)}>
        <Image
          src={`/images/tmp/thumbs-videos/${placeholderImgName}.jpg`}
          alt={`Video: ${title}`}
          width={width}
          height={height}
          layout="responsive"
          priority
        />
      </ThumbWrapper>
    );
  }

  return youtubeId !== '' ? (
    <Youtube youtubeId={youtubeId} width={width} height={height} />
  ) : (
    <Vimeo vimeoId={vimeoId} width={width} height={height} />
  );
}

Video.defaultProps = {
  placeholderImgName: "",
  title: '',
  youtubeId: '',
};

export default Video;
