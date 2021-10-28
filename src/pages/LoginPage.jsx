import { useHistory, useLocation } from 'react-router-dom';
import useAuthContext from "../auth/useAuthContext";

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from; /* null safety operator */

    const auth = useAuthContext();
    const handleLogin = () => {
        auth.login();
        history.push(previusObjectURL || "/dashboard") /*  ir a daschboar si no esta en  */
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={handleLogin}>
                Signin
            </button>            
        </div>
    )
}
