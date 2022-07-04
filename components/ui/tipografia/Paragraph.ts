import styled from 'styled-components';

const Paragraph = styled.p<{fontColor?:string, margem?:string}>`
color: ${(props) => (props.fontColor
    ? props.theme.client.colors[props.fontColor]
    : props.theme.colors.white)};
font-size: 1.6rem;
font-weight: 400;
margin: ${(props) => (props.margem ? props.margem : '0')};
line-height: 1.6;
width: 100%;

strong {
  font-weight: 600;
}
`;

export default Paragraph;
