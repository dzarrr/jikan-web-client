import { Outlet } from "react-router";
import { Layout } from "antd";
import { styled } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";

import ErrorResult from "./component/ErrorResult";
import headerImageUrl from "./assets/bocchi.png";

const { Header, Content, Footer } = Layout;

const StyledContent = styled(Content)`
  padding: 3em 5em;

  @media (max-width: 480px) {
    padding: 1em;
  }
`;

const StyledHeader = styled(Header)`
  height: 7.5em;
  background-color: #eb2f96;
  display: flex;
  align-items: center;
  gap: 1em;
`;

const HeaderText = styled.div`
  color: white;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
`;

function AppLayout() {
  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <StyledHeader>
        <img style={{ maxHeight: "5em" }} src={headerImageUrl} />
        <HeaderText>(Not) MyAnimeList</HeaderText>
      </StyledHeader>
      <StyledContent>
        <ErrorBoundary fallback={<ErrorResult />}>
          <Outlet />
        </ErrorBoundary>
      </StyledContent>
      <Footer style={{ textAlign: "center" }}>@2025</Footer>
    </Layout>
  );
}

export default AppLayout;
