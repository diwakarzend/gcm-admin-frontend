import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import DashBoard from "./Pages/DashBoard";
import Users from "./Components/Users/Users";

const App = () => {
    return (
         <Switch>
           <Route path="/login" component={Login} />
           <Route path="/" component={DashBoard} />
         </Switch>
    );
  }
export default App;