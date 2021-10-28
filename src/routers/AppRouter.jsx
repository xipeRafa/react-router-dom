import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import CategoriesRouter from "./CategoriesRouter";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <h3>I am in every page</h3> {/* // lo que esta afuera de el switch se ve en todas las paginas */}
      <Switch>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/contact" component={ContactPage}/>
        <Route exact path="/" component={HomePage}/> {/* poner a lo ultimo */}
        
        <Route exact path="/profile/:username" component={ProfilePage}/> {/* :userName lee variables */}
        
        <Route path="/categories" component={CategoriesRouter}/>

        <Route exact path="/signin">
            <Redirect to="/login"/>
        </Route>

        <PublicRoute exact path="/login" component={LoginPage}/>
        <PublicRoute exact path="/register" component={RegisterPage}/>

        <PrivateRoute exact path="/dashboard" component={DashboardPage}/>
            
        <PrivateRoute exact path="/payments" component={PaymentsPage}/>
        
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}
