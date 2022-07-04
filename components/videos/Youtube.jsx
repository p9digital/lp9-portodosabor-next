/* eslint-disable react/prop-types */
import YouTube from '@u-wave/react-youtube';
import styled from 'styled-components';

const VideoWrapper = styled.div`
position:relative;
width: min(100%, 60rem);
z-index:1;

iframe {
  width: 100%;
  aspect-ratio: ${(props) => props.width / props.height};
}
`;

function Youtube({ youtubeId, width, height }) {
  return (
    <VideoWrapper width={width} height={height}>
      <YouTube video={youtubeId} autoplay />
    </VideoWrapper>
  );
}

Youtube.defaultProps = {
  youtubeId: ""
};

export default Youtube;
