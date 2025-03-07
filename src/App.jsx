import { Routes, Route } from "react-router";
import { Suspense, lazy } from "react";

import AppLayout from "./AppLayout";
const ListPage = lazy(() => import("./pages/List/ListPage"));
const DetailPage = lazy(() => import("./pages/Detail/DetailPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>...loading</div>}>
              <ListPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/detail"
          element={
            <Suspense fallback={<div>...loading</div>}>
              <DetailPage />
            </Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
