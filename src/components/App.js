
import Signup from "./signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Welcome from "./Welcome";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (

        <Router>
          <AuthProvider>
            <Routes>
              <Route path ="/" element={<Welcome />}> </Route>
              <Route exact path="/Dashboard" element={<Dashboard />}></Route>
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>

  );
}

export default App;
