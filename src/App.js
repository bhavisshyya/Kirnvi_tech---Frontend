import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProfile from "./pages/createProfile/CreateProfile";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateProfile />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
