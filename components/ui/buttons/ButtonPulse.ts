import styled, { keyframes } from 'styled-components';
import ButtonOutline from './ButtonOutline';

const pulse = keyframes`
  0% {
    transform: initial;
    opacity: 1;
  }
  80% {
    transform: initial;
    opacity: 1;
  }
  100% {
    transform: scaleX(1.2) scaleY(1.3);
    opacity: 0;
  }
`;

const ButtonPulse = styled(ButtonOutline)<{backPulse: string}>`
  position: relative;
  z-index: 0;
  padding: 1.6rem 3rem;
  border: none;
  border: 1px solid transparent;
  border-radius: 100px;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform:uppercase;

  @media(max-width: 400px){
    font-size: 1.4rem;
  }

  &::after {
    background-color: ${(props) => (props.backPulse
    ? props.theme.client.colors[props.backPulse]
    : props.theme.colors.laranja)};
    animation: ${pulse} 3.6s ease-in-out infinite;
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    border-radius: 100px;
    @media(max-width: 600px){
      animation: initial;
    }
  }
  &:hover {
    transition-delay: 0.05;
    transform: scale(1.1);
    &::after {
      visibility: hidden;
    }
  }
  span{
    display: flex;
    align-items :center;
  }
`;

export default ButtonPulse;
