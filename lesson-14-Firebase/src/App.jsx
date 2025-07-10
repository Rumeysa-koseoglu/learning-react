import "./App.css";
import Navbar from "./components/Navbar";
import RouterConfig from "./config/RouterConfig";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar />
      <RouterConfig />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
