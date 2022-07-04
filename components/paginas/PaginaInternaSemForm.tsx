import styled from 'styled-components';
import { ReactElement } from 'react';

type Props = {
  children: ReactElement
}

const ConteudoInterno = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 980px) {
    display: block;
  }
`;

const ChildrenSection = styled.div`
  grid-column: 1 / 4;
`;

function PaginaInterna({ children }: Props) {
  return (
    <ConteudoInterno>
      <ChildrenSection>{children}</ChildrenSection>
    </ConteudoInterno>
  );
}

export default PaginaInterna;
