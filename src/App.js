import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./route/AppRoute";
import "./asset/css/bootstrap.min.css";
import "./asset/css/fontawesome.css";
import "./asset/css/animate.min.css";
import "./asset/css/style.css"

function App() {
  return (
    <BrowserRouter>
       <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
