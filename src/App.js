import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";

import { useLoginstore } from "./Pages/Login/useLoginstore";
import Public from "./Pages/Public";
import Private from "./Pages/Private";
import Header from "./Components/Header";


function App() {
  const { loggedIn } = useLoginstore((store) => ({
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
