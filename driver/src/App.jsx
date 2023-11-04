import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//public route
import Public from "./routes/Public";
import Account from "./pages/Account";
// rider route
import Navbar from "./components/rider/Navbar";
import Rider from "./routes/Rider";
import Profile from "./pages/rider/Profile";
// admin route
import AdminNav from "./components/admin/AdminNav";
import Admin from "./routes/Admin";
import VerificationData from "./pages/admin/VerificationData";

function App() {
  // auth=token
  const [auth, setAuth] = useState("");
  const [adminAuth, setAdminAuth] = useState();

  return (
    <>
      <Toaster position="top-right" />
      {adminAuth ? <AdminNav setAdminAuth={setAdminAuth} /> : null}
      <div className="lg:flex h-[100vh]">
        {auth ? <Navbar auth={auth} setAuth={setAuth} /> : null}
        <Routes>
          <Route element={<Public />}>
            <Route
              path="/"
              element={
                <Account
                  setAuth={setAuth}
                  adminAuth={adminAuth}
                  setAdminAuth={setAdminAuth}
                />
              }
            ></Route>
          </Route>
          <Route
            element={<Rider setAuth={setAuth} setAdminAuth={setAdminAuth} />}
          >
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          <Route
            element={<Admin setAuth={setAuth} setAdminAuth={setAdminAuth} />}
          >
            <Route path="/admin" element={<VerificationData />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
