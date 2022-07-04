import { ChangeEventHandler } from "react";
import { TextAreaGroup } from "../ui/formulario/InputStyles";

type Props = {
  className?: string
  nome: string
  placeholder: string
  handleInput: ChangeEventHandler<HTMLTextAreaElement>
  valor: string | number
  valido: boolean
};

function TextArea({
  nome,
  placeholder,
  handleInput,
  valor,
  valido,
  className
}: Props) {
  return (
    <TextAreaGroup>
      <textarea
        aria-label={nome}
        name={nome}
        value={valor}
        onChange={handleInput}
        className={`${className} ${!valido && !valor ? "text-area--erro" : ""}`}
        placeholder={placeholder}
      />
    </TextAreaGroup>
  );
}

TextArea.defaultProps = {
  className: ""
};

export default TextArea;
