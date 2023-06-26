import React, { useState } from "react";
import "./App.css";
import LoginPage from "./component/login.component";
import "bootstrap/dist/css/bootstrap.css";
import RegisterPage from "./component/register.component";
import NavigationBar from "./component/navigationbar";
import Intro from "./component/intro";
function App() {
  const [isRegister, setIsRegister] = useState(false);

  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="App">
      <div>
        <div className="Mybg">
          <NavigationBar />
          <Intro />
        </div>
      </div>
      <div className="container" style={{ marginTop: "300px" }}>
        {isRegister ? <RegisterPage /> : <LoginPage />}
        <span onClick={handleRegister}>Don't have an account? Register Here</span>
      </div>
    </div>
  );
}

export default App;
