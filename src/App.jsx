import AuthProvider from "./auth/AuthProvider";
import AppRouter from './routers/AppRouter';
import '../css/index.css'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;


