import { useLoginStore } from "./useLoginStore";

const LogOut = () => {
  const { setLogOut } = useLoginStore((store) => ({
    setLogOut: store.setLogOut,
  }));

  const handleLogOut = () => {
    setLogOut();
  };

  return <button onClick={() => handleLogOut()}>Log ud</button>;
};

export default LogOut;
