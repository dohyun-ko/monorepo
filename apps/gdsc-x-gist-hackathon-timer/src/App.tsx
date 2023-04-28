import LandingPage from "@/pages/landing/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "@/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<LandingPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
