import { useLoginstore } from "./useLoginstore";

const LogOut = () => {
  const { setLogOut } = useLoginstore((store) => ({
    setLogOut: store.setLogOut,
  }));

  const handleLogOut = () => {
    setLogOut();
  };

  return <button onClick={() => handleLogOut()}>Log ud</button>;
};

export default LogOut;
