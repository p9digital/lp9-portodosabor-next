import styled from 'styled-components';

const Link = styled.a<{ backColor?: string, fontColor?: string, center: string }>`
align-items: ${(props) => props.center || 'initial'};
background-color: ${(props) => (props.backColor ? props.theme.client.colors[props.backColor] : 'none')};
color: ${(props) => (props.fontColor
    ? props.theme.client.colors[props.fontColor]
    : "black")};
cursor: pointer;
display: flex;
font-size: 1.6rem;
margin: 1rem 0;
padding: 0.6rem 2rem;
`;

export default Link;
