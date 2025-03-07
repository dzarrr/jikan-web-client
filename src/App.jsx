import { Button, Menu, Layout } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Content style={{ padding: "24px 48px" }}>
          <Button type="primary">Test</Button>
        </Content>
        <Footer style={{ textAlign: "center" }}>@2025</Footer>
      </Layout>
    </>
  );
}

export default App;
