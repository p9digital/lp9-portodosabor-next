import styled from 'styled-components';

const TitlePill = styled.p<{fontColor?:string, margem?:string}>`
  background-color:#f7ce97;
  border-radius:10px;
  display:inline-block;
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 1.1;
  padding:5px;

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

export default TitlePill;
