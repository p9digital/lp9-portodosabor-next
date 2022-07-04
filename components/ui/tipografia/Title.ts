import styled from 'styled-components';

const Title = styled.h1<{fontColor?:string, margem?:string}>`
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 2.4rem;
  }
  strong{
    font-weight: 700;
  }

  color: ${(props) => (props.fontColor
    ? props.theme.client.colors[props.fontColor]
    : props.theme.colors.white)};
  margin: ${(props) => (props.margem ? props.margem : '0')};
`;

export default Title;
