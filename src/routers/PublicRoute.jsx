import { Route, Redirect } from "react-router-dom";
import useAuthContext from "../auth/useAuthContext";

export default function PublicRoute({ component: Component, ...rest }) {
  const auth = useAuthContext();

  return (
    <Route {...rest}>
      {!auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to="/dashboard" />
      )}
    </Route>
  );
}