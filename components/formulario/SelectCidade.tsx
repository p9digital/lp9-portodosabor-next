import { SelectGroup } from '../ui/formulario/InputStyles';

type Props = {
  className?: string
  nome: string
  placeholder: string
  handleInput: () => void
  valor: string
  valores: [{
    id: string | number
    nome: string
  }]
  valido: boolean
  carregando?: string
}

function SelectCidade({
  nome,
  placeholder,
  handleInput,
  valor,
  valores,
  valido,
  className,
  carregando,
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
          !valido && !valor ? 'select-input--erro' : ''
        }`}
      >
        <option>{carregando === nome ? 'Carregando...' : placeholder}</option>
        {valores.map((data) => (
          <option key={data.id} value={data.id}>
            {data.nome}
          </option>
        ))}
      </select>
    </SelectGroup>
  );
}

SelectCidade.defaultProps = {
  className: '',
  carregando: '',
};

export default SelectCidade;
