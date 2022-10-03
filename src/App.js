import "./App.css";
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Login from "./components/Login";
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>

      </Provider>
    </BrowserRouter>
  );
}

export default App;
