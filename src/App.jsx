import { Button, Menu, Layout } from "antd";
import { Routes, Route } from "react-router";

import ListPage from "./pages/List/ListPage";
import DetailPage from "./pages/Detail/DetailPage";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Content style={{ padding: "24px 48px" }}>
          <Routes>
            <Route index element={<ListPage />}></Route>
            <Route path="/detail" element={<DetailPage />}></Route>
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>@2025</Footer>
      </Layout>
    </>
  );
}

export default App;
