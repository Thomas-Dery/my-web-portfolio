import { Route, Routes } from "react-router-dom";
import Home from "./home/page";
import About from "./about/page";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
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
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        {/* Agrega más rutas aquí */}
      </Routes>
    </>
  );
}

export default App;
