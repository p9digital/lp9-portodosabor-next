import { ChangeEventHandler } from "react";
import { SelectGroup } from "../ui/formulario/InputStyles";

type Props = {
  className?: string
  nome: string
  placeholder: string
  handleInput: ChangeEventHandler<HTMLSelectElement>
  valor: string
  valores: string[]
  valido: boolean
  carregando?: string
};

function Select({
  nome,
  placeholder,
  handleInput,
  valor,
  valores,
  valido,
  className,
  carregando
}: Props) {
  return (
    <SelectGroup>
      <select
        aria-label={nome}
        name={nome}
        value={valor}
        onChange={handleInput}
        placeholder={placeholder}
        className={`select-input ${className} ${
          !valido && !valor ? "select-input--erro" : ""
        }`}
      >
        <option hidden>
          {carregando === nome ? "Carregando..." : placeholder}
        </option>
        <option disabled>{placeholder}</option>
        {valores.map((data, index) => (
          <option key={index} value={data}>
            {data}
          </option>
        ))}
      </select>
    </SelectGroup>
  );
}

Select.defaultProps = {
  className: "",
  carregando: ""
};

export default Select;
