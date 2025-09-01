import Layout from "./widgets/Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MainSection from "./widgets/first-section/MainSection";
import VacanciesPage from "./pages/VacanciesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout hero={<MainSection />}>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/vacancies"
          element={
            <Layout hero={<MainSection />}>
              <VacanciesPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
