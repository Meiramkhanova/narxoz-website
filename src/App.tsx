import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
