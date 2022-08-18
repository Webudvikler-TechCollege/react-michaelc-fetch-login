import { Link } from "react-router-dom";
import Login from "../Pages/Login/Login";
import LogOut from "../Pages/Login/LogOut";

import { useLoginstore } from "../Pages/Login/useLoginstore";

const Header = () => {
  const { loggedIn } = useLoginstore((store) => ({
    loggedIn: store.loggedIn,
  }));
  return (
    <div>
      {!loggedIn ? <Login /> : <LogOut />}
      <Link to="/dashboard">{!loggedIn ? "Public Dashboard" : "Private Dashboard"}</Link>
    </div>
  );
};

export default Header;
