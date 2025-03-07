import { Button, Menu, Layout } from "antd";
import { Routes, Route } from "react-router";

import AppLayout from "./AppLayout";
import ListPage from "./pages/List/ListPage";
import DetailPage from "./pages/Detail/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<ListPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
