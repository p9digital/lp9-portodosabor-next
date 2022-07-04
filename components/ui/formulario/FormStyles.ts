import styled, { keyframes } from "styled-components";
import Button from "../buttons/Button";

export const FormContainer = styled.div``;

export const Form = styled.form`
background: #FFFFFF;
border-radius: 20px;
box-shadow: 0 12px 24px 12px rgba(0, 0, 0, 0.09);
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 2rem 1.5rem;
position: relative;
width: 360px;
z-index:100;

&.continue {
  width: 100%;
  max-width: 480px;
  flex-direction: column;
  justify-content: center;
  
  padding: 0;
  background: none;
  box-shadow: none;
}
@media (max-width: 400px) {
  width: 100%;
}
`;

export const FormRow = styled.div`
display: flex;
justify-content: space-between;

&.sucesso {
  width: 100%;
}
`;

export const FormHeader = styled.div`
align-content: center;
align-items: center;
display: flex;
flex-direction: column;
padding: 0 1rem;
position: relative;
text-align: center;

h2 {
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.client.colors.preto};
  margin-bottom: 1rem;
}
p {
  color: ${(props) => props.theme.client.colors.preto};
  font-size: 1.5rem;
}
`;

export const FormSubtitle = styled.p`
color: #ffffff !important;
`;

export const pulse = keyframes`
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

export const FormButton = styled(Button)<{backColor?:string, fontColor?:string}>`
align-items: center;
border-radius: 0;
border-bottom-right-radius: 20px;
border-bottom-left-radius: 20px;
display: flex;
font-weight: bold;
justify-content: center;
padding: 1.5rem 2rem;
position: relative;
text-transform: uppercase;
width: 100%;
z-index: 0;

&::after {
  animation: ${pulse} 3.6s ease-in-out infinite;
  background-color: ${(props) => props.theme.client.colors.vanilla};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  content: "";
  display: inline-block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  @media (max-width: 400px) {
    animation: initial;
  }
}

&:hover {
  background-color:${(props) => props.theme.client.colors.primary};
  color:${(props) => props.theme.client.colors.vanilla};
  transform: none;
  &::after {
    visibility: hidden;
  }
}

@media (max-width: 360px) {
  font-size: 1.5rem;
}
`;

export const FormButtonFixo = styled(Button)`
align-items: center;
border-radius: 50px;
display: flex;
font-weight: bold;
height: 5rem;
justify-content: center;
position: relative;
text-transform: uppercase;
width: 100%;
z-index: 0;

&::after {
  animation: ${pulse} 3.6s ease-in-out infinite;
  background-color: ${(props) => props.theme.client.colors.laranjaFormulario};
  border-radius: 50px;
  content: "";
  display: inline-block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}

&:hover {
  transform: none;
  &::after {
    visibility: hidden;
  }
}
`;

export const StatusWrapper = styled.div`
align-items: center;
background: white;
border-radius: 1.5rem;
box-shadow: 0 12px 24px 12px rgba(0, 0, 0, 0.09);
display: flex;
flex-direction: column;
height: 360px;
justify-content: center;
padding: 1.5rem 2rem;
width: 320px;

p {
  color: ${(props) => props.theme.client.colors.preto};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  
  strong {
    color: ${(props) => props.theme.client.colors.preto};
  }
}
`;

export const FormFooter = styled.div`
margin: 0 -15px -20px;
position: relative;
width: calc(100% + 30px);
`;

export const FormSeguranca = styled.div`
align-items: center;
display: flex;
justify-content: center;
margin-top: 0.5rem;

.icon {
  color: ${(props) => props.theme.client.colors.verde};
}
.textSeguranca {
  color: #666666;
  font-size: 15px;
  font-weight: 100;
  padding-left: 1rem;
}
.textSegurancaBranca {
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 100;
  padding-left: 1rem;

  @media (max-width: 600px) {
    color: #666666;
  }
}
`;

export const FormInputs = styled.div`
margin: 4rem 0;

input,
select {
  margin: 1rem 0;
}
`;

export const FormInputsMenor = styled(FormInputs)`
margin: 2rem 0;

&.continue {
  margin: 0 0 2rem;
}

input,
select,
textarea {
  margin: 0.5rem 0;
}
`;

export const FormWrapper = styled.div`
border-radius: 10px;
display: flex;
justify-content: space-between;
max-width: 610px;
width: 100%;

@media (max-width: 610px) {
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div:nth-child(2) {
    margin: 1rem 0 0.5rem 0;
  }

  div:nth-child(3) {
    margin: 0.5rem 0 1rem 0;
  }
}
`;

export const Splash = styled.div`
align-items: center;
background-color: #ef7238;
border-radius: 50%;
color: #FFFFFF;
display: flex;
flex-direction: column;
font-size: 1.8rem;
font-weight: bold;
height: 135px;
justify-content: center;
left: 50%;
position: absolute;
text-align: center;
top: -80px;
transform: translateX(-50%);
width: 135px;

p {
  padding: 0;
  margin: 0;
}
span {
  color: #ffca05;
}
`;
