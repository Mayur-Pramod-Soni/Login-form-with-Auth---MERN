import { Route , Routes , Navigate } from "react-router-dom";
import Main from "./component/main";
import Signup from "./component/signup";
import Login from "./component/login";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div>
      <Routes>
        {user && <Route path="/" exact element= {<Main />} />}
        <Route path="/signup" excat element={<Signup />} />
        <Route path="/login" excat element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />}/>
      </Routes>
    </div>
  );
}

export default App;
