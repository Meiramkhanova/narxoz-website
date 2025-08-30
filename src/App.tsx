import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MainSection from "./components/first-section/MainSection";

function App() {
  return (
    <BrowserRouter>
      <Layout hero={<MainSection />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
