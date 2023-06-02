import { Outlet } from "react-router-dom";
import SimpleNavBar from "./pages/navbar/SimpleNavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <SimpleNavBar></SimpleNavBar>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default App;