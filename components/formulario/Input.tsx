import { ChangeEventHandler } from 'react';
import { InputGroup } from '../ui/formulario/InputStyles';

type Props = {
  className?: string
  nome: string
  placeholder: string
  handleInput: ChangeEventHandler<HTMLInputElement>
  valor: string | number
  valido: boolean
  custom?: boolean
  tipo?: string
  statusEmail?: boolean
};

function Input({
  nome,
  placeholder,
  handleInput,
  valor,
  valido,
  className,
  tipo,
  custom,
  statusEmail
}: Props) {
  return (
    <InputGroup>
      <input
        id={nome}
        aria-label={nome}
        name={nome}
        value={valor}
        onChange={handleInput}
        className={`select-input ${className} ${(!valido && !valor) || !custom || !statusEmail ? 'select-input--erro' : ''}`}
        placeholder={placeholder}
        type={tipo}
      />
    </InputGroup>
  );
}

Input.defaultProps = {
  tipo: 'string',
  className: '',
  custom: true,
  statusEmail: true
};

export default Input;
