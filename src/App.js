import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Landing, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Stats,
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
} from "./pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="addJob" element={<AddJob />} />
          <Route path="allJobs" element={<AllJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  );
}

export default App;
