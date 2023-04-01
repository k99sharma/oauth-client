// importing components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfilePage";
import Home from "./components/Home";

// app component
function App() {
  return (
    <div className="app p-5">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
