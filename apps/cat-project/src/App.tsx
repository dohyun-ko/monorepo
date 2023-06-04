import HomePage from "@/pages/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/layout/Layout";
import VotePage from "@/pages/vote/VotePage";
import DonePage from "@/pages/done/DonePage";

export enum RoutePath {
  HOME = "/",
  VOTE = "/vote",
  DONE = "/done",
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={RoutePath.HOME} element={<HomePage />} />
          <Route path={RoutePath.VOTE} element={<VotePage />} />
          <Route path={RoutePath.DONE} element={<DonePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
