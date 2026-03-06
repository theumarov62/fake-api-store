import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./root/Pages/Users/Home";
import Header from "./root/Utility/Header";
import AdminDashboard from "./root/Pages/Admin/Home";
import Login from "./root/Auth/Login";
import ProtectedRoute from "./root/components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
