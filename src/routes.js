import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Clients from "./Pages/Users/index";
import Products from "./Pages/Products/index";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/clients" component={Clients} />
                <Route path="/products" component={Products} />
            </Switch>
        </BrowserRouter>
    )
}

