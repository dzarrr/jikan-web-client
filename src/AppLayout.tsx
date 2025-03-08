import { Outlet } from "react-router";
import { Layout } from "antd";
import { styled } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";

import ErrorResult from "./component/ErrorResult";

const { Header, Content, Footer } = Layout;

const StyledContent = styled(Content)`
  padding: 3em 5em;

  @media (max-width: 480px) {
    padding: 1em;
  }
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
      <Header />
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
