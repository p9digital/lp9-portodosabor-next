import Image from 'next/image';
import styled from 'styled-components';

import Container from '../ui/containers/Container';
import { LogoContainer } from '../conteudo/Faixa1/Styles';

const HeaderWrapper = styled.div<{home: boolean}>`
  background-color: ${(props) => props.theme.client.colors.primary};
  position: relative;
  padding: ${(props) => (props.home ? "5rem 0 2rem" : "5rem 0")};
`;

const HeaderContainer = styled.div<{home: boolean}>`
  display: flex;
  justify-content: ${(props) => (props.home ? "flex-start" : "space-around")};
  align-items: center;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

interface Props {
  home: boolean
}

function Header({ home = true }: Props) {
  return (
    <HeaderWrapper home={home}>
      <Container>
        <HeaderContainer home={home}>
          <LogoContainer>
            <Image
              src="/images/logo.png"
              alt="Logo Porto do Sabor"
              layout="responsive"
              width="378"
              height="32"
            />
          </LogoContainer>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
