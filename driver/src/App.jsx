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
import SearchPassenger from "./pages/rider/SearchPassenger";

// admin route
import AdminNav from "./components/admin/AdminNav";
import Admin from "./routes/Admin";
import VerificationData from "./pages/admin/VerificationData";
import NewVehicle from "./pages/admin/NewVehicle";
import CarsData from "./pages/admin/carsData";
import AdminSidebar from "./components/admin/AdminSidebar";
import RentalBookingData from "./pages/admin/rentalBookingData";

function App() {
  // auth=token
  const [auth, setAuth] = useState("");
  const [adminAuth, setAdminAuth] = useState();

  return (
    <>
      <Toaster position="top-right" />
      {adminAuth ? <AdminNav setAdminAuth={setAdminAuth} /> : null}
      <div className="flex w-full h-[90vh]">
        {adminAuth ? <AdminSidebar setAdminAuth={setAdminAuth} /> : null}
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
            <Route
              path="/search_passenger"
              element={<SearchPassenger />}
            ></Route>
          </Route>
          <Route
            element={<Admin setAuth={setAuth} setAdminAuth={setAdminAuth} />}
          >
            <Route path="/admin" element={<VerificationData />}></Route>
            <Route path="/new-vehicle" element={<NewVehicle />}></Route>
            <Route path="/all-vehicles" element={<CarsData />}></Route>
            <Route
              path="/rental-bookings"
              element={<RentalBookingData />}
            ></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
