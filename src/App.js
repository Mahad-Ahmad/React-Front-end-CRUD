import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import react from "react";

class App extends Component {
  render() {
    return (
      <Router>
        <react.Fragment>
          <NavBar />
          <div>
            <Switch>
              {/* <Route path="/productdetails" component={ProductDetails} /> */}
              <Route path="/productdetails/:id" component={ProductDetails} />
              <Route
                path="/products"
                render={(props) => <Products sortBy="newest" {...props} />}
              />
              <Route path="/posts/:year?/:month?" component={Posts} />
              <Route path="/admin" component={Dashboard} />
              <Route path="/" exact component={Home} />
              <Route path="/not-found" exact component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </react.Fragment>
      </Router>
    );
  }
}

export default App;
