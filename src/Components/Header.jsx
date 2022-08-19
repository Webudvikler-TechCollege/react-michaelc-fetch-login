import { Link } from "react-router-dom";
import Login from "../Pages/Login/Login";
import LogOut from "../Pages/Login/LogOut";

import { useLoginStore } from "../Pages/Login/useLoginStore";
import { Nav } from "./Nav";

const Header = () => {
  const { loggedIn, User } = useLoginStore((store) => ({
    loggedIn: store.loggedIn,
    User: store.User,
  }));

  return (
    <div>
      {!loggedIn ? <Login /> : <LogOut />}
      {User}
      <Link to="/dashboard">{!loggedIn ? "Public Dashboard" : "Private Dashboard"}</Link>
      <Nav />
    </div>
  );
};

export default Header;
