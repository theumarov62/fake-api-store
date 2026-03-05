import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./root/Pages/Users/Home";
import Header from "./root/Utility/Header";
import AdminDashboard from "./root/Pages/Admin/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
