import HomePage from "@/pages/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
