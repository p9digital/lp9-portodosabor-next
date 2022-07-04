import styled from "styled-components";

const Subtitle = styled.h2<{fontColor?:string, margem?:string}>`
  width: 100%;
  font-size: 2.2rem;
  font-weight: 300;
  strong {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    font-size: 1.9rem;
  }

  color: ${(props) => (props.fontColor
    ? props.theme.client.colors[props.fontColor]
    : props.theme.colors.white)};
  margin: ${(props) => (props.margem ? props.margem : "0")};
`;

export default Subtitle;
