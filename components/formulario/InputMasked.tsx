import { ChangeEventHandler } from 'react';
import MaskedInput, { Mask } from 'react-text-mask';
import { celularMask, telefoneMask } from '../../helpers/masks';

import { InputGroup } from '../ui/formulario/InputStyles';

type Props = {
  className?: string
  nome: string
  placeholder: string
  handleInput: ChangeEventHandler<HTMLInputElement>
  valor: string
  valido: boolean
  mask: Mask
  tipo: string
  custom: boolean
}

function InputMasked({
  nome,
  placeholder,
  handleInput,
  valor,
  valido,
  className,
  tipo,
  mask,
  custom
}: Props) {
  return (
    <InputGroup>
      {(nome === 'whatsapp' || nome === 'celular') && (
        <MaskedInput
          mask={(value) => (value.length > 14 ? celularMask : telefoneMask)}
          aria-label={nome}
          name={nome}
          value={valor}
          onChange={handleInput}
          className={`select-input ${className} ${
            valor.length > 0 && valor.length >= 14 && custom
              ? ''
              : !valido || (valor.length > 0 && valor.length < 14) || !custom
                ? 'select-input--erro'
                : ''
          }`}
          placeholder={placeholder}
          type={tipo}
          guide={false}
        />
      )}
      {nome !== 'whatsapp' && nome !== 'celular' && (
        <MaskedInput
          mask={mask}
          aria-label={nome}
          name={nome}
          value={valor}
          onChange={handleInput}
          className={`select-input ${className} ${
            !valido || !custom ? 'select-input--erro' : ''
          }`}
          placeholder={placeholder}
          type={tipo}
        />
      )}
    </InputGroup>
  );
}

InputMasked.defaultProps = {
  className: '',
};

export default InputMasked;
