import { useEffect, useState, useContext } from "react";
import Landing from "./pages/Landing/Landing.jsx";
import Routing from "./Router";
import { auth } from "./utility/firebase.js";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./utility/action.type";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({ type: Type.SET_USER, 
          user: null });
      }
    });
  }, []);
  return (
    <div>
  <Routing />
  </div>
  );
}

export default App;
