/* eslint-disable react/prop-types */
import ReactVimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  width: min(100%, 60rem);
  .vimeo-player {
    width: 100%;
    aspect-ratio: ${(props) => props.width / props.height};
  }
`;

function Vimeo({ vimeoId, width, height }) {
  return (
    <VideoWrapper width={width} height={height}>
      <ReactVimeo
        video={vimeoId}
        className="vimeo-player"
        responsive
        autoplay
      />
    </VideoWrapper>
  );
}

export default Vimeo;
