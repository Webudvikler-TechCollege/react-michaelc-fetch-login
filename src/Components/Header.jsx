import { Link } from "react-router-dom";
import Login from "../Pages/Login/Login";
import LogOut from "../Pages/Login/LogOut";

import { useLoginstore } from "../Pages/Login/useLoginstore";

const Header = () => {
  const { loggedIn, User } = useLoginstore((store) => ({
    loggedIn: store.loggedIn,
    User: store.User,
  }));

  return (
    <div>
      {!loggedIn ? <Login /> : <LogOut />}
      {User}
      <Link to="/dashboard">{!loggedIn ? "Public Dashboard" : "Private Dashboard"}</Link>
    </div>
  );
};

export default Header;
