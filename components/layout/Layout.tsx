import { ReactElement } from "react";
import styled from "styled-components";
import Footer from "./Footer";

type Props = {
  children: ReactElement
}

const Content = styled.main``;

function Layout({ children }: Props) {
  return (
    <>
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

export default Layout;
