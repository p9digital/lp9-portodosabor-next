import styled from 'styled-components';

type Props = {
  tamanho?: string | number
  cor?: string | number
  margem?: string | number
  className?: string
  icon?: string
  tipo?:string
}

const IconSVG = styled.svg<Props>`
  width: ${(props) => props.tamanho};
  height: ${(props) => props.tamanho};
  fill: ${(props) => props.cor};
  margin: ${(props) => props.margem};
`;

function Icon({
  tamanho, cor, icon, className, margem, tipo
}: Props) {
  return (
    <IconSVG tamanho={tamanho} cor={cor} className={className} margem={margem} tipo={tipo}>
      <use xlinkHref={`/icons/icomoon/symbol-defs.svg#icon-${icon}`} />
    </IconSVG>
  );
}

Icon.defaultProps = {
  className: '',
  cor: '#000000',
  icon: "",
  margem: '0',
  tamanho: 'rem',
  tipo: ''
};

export default Icon;
