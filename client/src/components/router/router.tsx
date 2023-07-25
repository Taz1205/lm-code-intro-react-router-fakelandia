import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Misdemeanours from "../misdemeanours/misdemeanours";
import Confession from "../confessions/confessions";
import NotFound from "../not_found/not_found";
import Layout from "../layout/layout";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="misdemeanours"
          element={
            <Layout>
              <Misdemeanours />
            </Layout>
          }
        />
        <Route
          path="confession"
          element={
            <Layout>
              <Confession />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
