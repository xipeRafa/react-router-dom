import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export default function useAuthContext() {
    return  useContext(AuthContext);
}
/*  para poder consumir el contenido de el contexto {user, login, logout} */