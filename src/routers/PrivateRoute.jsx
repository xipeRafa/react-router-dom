import { Route, Redirect, useLocation } from "react-router-dom";
import useAuthContext from "../auth/useAuthContext";

// const user = null;
// const user = {id: 1, username: "luis50"}

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuthContext();
  const location = useLocation();

  return (
    <Route {...rest}>
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login" , state: { from: location }}} />
         /* se queda en la ruta anterior al hacer login */
      )}
    </Route>
  );
}

/*  solo se renderiza si el user esta logueado */
