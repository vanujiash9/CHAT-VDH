
import UserBar from "./component/UserBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContainerWrapper from "./layout/ContainerWrapper";
import Login from "./component/Account/Login";
import Register from "./component/Account/Register";

function App() {
  return (
    <ContainerWrapper>
      <Router>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login/>} />
          {/* <Route
            exact
            path="/profile"
            element={
              <WithPrivateRoute>
                <Profile />
              </WithPrivateRoute>
            }
          /> */}
          <Route
            exact
            path="/"
            element={
              // <WithPrivateRoute>
              <UserBar />
              // </WithPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ContainerWrapper>
  );
}

export default App;
