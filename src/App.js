import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";

import { useLoginStore } from "./Pages/Login/useLoginStore";
import Public from "./Pages/Public";
import Private from "./Pages/Private";
import Header from "./Components/Header";


function App() {
  const { loggedIn } = useLoginStore((store) => ({
    loggedIn: store.loggedIn,
  }));
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={!loggedIn ? <Public /> : <Private />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
