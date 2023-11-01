import { Route, Routes } from "react-router-dom";
import WareDetail from "./pages/WareDetail";
import WareList from "./pages/WareList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WareList />} />
      <Route path="/:id" element={<WareDetail />} />
    </Routes>
  );
};

export default App;
