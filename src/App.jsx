import { Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import { Skeleton, Result } from "antd";

import AppLayout from "./AppLayout";
const ListPage = lazy(() => import("./pages/List/ListPage"));
const DetailPage = lazy(() => import("./pages/Detail/DetailPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route
          path="*"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
            />
          }
        />
        <Route
          index
          element={
            <Suspense fallback={<Skeleton active />}>
              <ListPage />
            </Suspense>
          }
        />
        <Route
          path="/detail"
          element={
            <Suspense fallback={<Skeleton active />}>
              <DetailPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
