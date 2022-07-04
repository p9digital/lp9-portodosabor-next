import { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactElement[]
}

const ConteudoInterno = styled.div``;

const ChildrenSection = styled.div``;

function PaginaInterna({ children }: Props) {
  return (
    <ConteudoInterno>
      <ChildrenSection>{children}</ChildrenSection>
    </ConteudoInterno>
  );
}

export default PaginaInterna;
