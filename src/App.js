import { Fragment } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <Fragment>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
