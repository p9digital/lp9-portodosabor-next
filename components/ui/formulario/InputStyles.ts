import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  .select-input {
    width: 90%;
    border: none;
    background-color: ${(props) => props.theme.colors.moreLessLighterGrey};
    height: 4.5rem;
    padding-left: 1rem;
    border-radius: 15px;

    :disabled {
      cursor: not-allowed;
    }

    &--cinza {
      width: 100%;
      border: 0.5px solid ${(props) => props.theme.colors.lightGrey};
      background-color: ${(props) => props.theme.colors.moreLessLighterGrey};
      @media (max-width: 410px) {
        width: 100%;
      }
    }

    &--sucesso {
      width: 100%;
      color: ${(props) => props.theme.client.colors.cinza};
      background: #E8E8E8;
      border-radius: 100px;
      &::placeholder {
        color: ${(props) => props.theme.client.colors.cinza};
      }
      option {
        color: ${(props) => props.theme.client.colors.cinza};
      }

      @media (max-width: 410px) {
        width: 100%;
      }
    }

    &--tiny {
      max-width: 10rem;
      width: 7rem;
    }

    &--medium {
      min-width: 23rem;
    }

    &--erro {
      box-shadow: 0px 0px 3px 2px red;
    }

    &--home {
      background-color: transparent;
      border: 0.5px solid #fbb8a2;
      border-radius: 25px;
      width: 280px;
      @media (max-width: 410px) {
        width: 100%;
      }
    }
  }

  .text-area {
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    border-radius: 10px;
    padding: 1rem;
    margin-top: 0.5rem;
    height: 10rem;
    width: 100%;
    outline: none;
    :disabled {
      cursor: not-allowed;
    }

    &--cinza {
      border: 0.5px solid ${(props) => props.theme.colors.lightGrey};
      background-color: ${(props) => props.theme.colors.moreLessLighterGrey};
    }

    &--erro {
      box-shadow: 0px 0px 3px 2px red;
    }
    &--sucess {
      box-shadow: 0px 0px 2px 1px #71d946;
    }
    &--sucesso {
      width: 100%;
      border: none;
      color: ${(props) => props.theme.client.colors.cinza};
      background: #E8E8E8;
      border-radius: 20px;
      &::placeholder {
        color: ${(props) => props.theme.client.colors.cinza};
      }

      @media (max-width: 410px) {
        width: 100%;
      }
    }
  }
`;

export const TextAreaGroup = styled(InputGroup)`
  width: 100%;
`;

export const SelectGroup = styled(InputGroup)``;
