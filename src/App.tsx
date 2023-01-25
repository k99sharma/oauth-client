// importing libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Auth from "./Auth";

function App() {
  return (
    <div className="app p-5">
      {
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
