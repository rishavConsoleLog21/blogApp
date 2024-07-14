import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { DotLoader } from "react-spinners";
import Header from "./components/Header/Header";

function App() {
  const [loading, setLoading] = useState(true);
  // Used to combine react and redux
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout({ userData }));
        }
      })
      .catch()
      .finally(() => setLoading(false));

    return () => {};
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-slate-400">
      <div className="w-full block">
        <Header />
        <main>{/* <Outlet /> */}</main>
      </div>
    </div>
  ) : (
    <div>
      <DotLoader />
    </div>
  );
}

export default App;
