import { useEffect } from "react";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import EmailLoginMadule from "./components/EmailLoginModel";
import { useDispatch } from "react-redux";
import { funUserLoggedIn } from "./redux/actions";

function App() {
 const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(funUserLoggedIn());
  },[])

  return (
    <div className="App">
      <AllRoutes />
      {/* <EmailLoginMadule /> */}
    </div>
  );
}

export default App;

