import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import LoginForm from "./Components/login/login";
import RegistrationForm from "./Components/login/singin";
import "./Components/login/login.css";
import ForgotPasswordForm from "./Components/login/forgetPasseword";

// import NavBar from "./Components/Globale/navbar";
// import InfoBox from "./Components/index/indexinfo";
// import Car from "./Components/index/cardCar";
// import Description from "./Components/index/indexDescription";
// import Footer from "./Components/Globale/footer";
// import Droit from "./Components/Globale/copyright";

import "./Components/style.css";

const App = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  return (
    <div>
      {showRegistrationForm ? (
        <RegistrationForm />
      ) : showForgotPasswordForm ? (
        <ForgotPasswordForm />
      ) : (
        <LoginForm
          showRegistrationForm={showRegistrationForm}
          setShowRegistrationForm={setShowRegistrationForm}
          showForgotPasswordForm={showForgotPasswordForm}
          setShowForgotPasswordForm={setShowForgotPasswordForm}
        />
      )}
    </div>
  );
};

// const App = () => {
//   return (
//     <main className="main">
//       <NavBar />
//       <div className="top-container">
//         <InfoBox />
//         <Car />
//       </div>
//       <Description />
//       <footer>
//         <Footer />
//         <Droit />
//       </footer>

//       <Router>
//         <Routes>
//           <Route path="/" />
//         </Routes>
//       </Router>
//     </main>
//   );
// };

export default App;
