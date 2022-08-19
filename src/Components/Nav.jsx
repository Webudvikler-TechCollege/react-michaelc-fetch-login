import { useEffect, useState, useCallback, useMemo } from "react";
import { useLoginStore } from "../Pages/Login/useLoginStore";

export const Nav = () => {
  const { loggedIn } = useLoginStore((store) => ({
    loggedIn: store.loggedIn,
  }));

  const arrNav = [
    { path: "/", name: "Forside", public: true },
    { path: "/goals", name: "Verdensmål", public: true },
    { path: "/dashboard", name: "Dashboard", public: true },
    { path: "/cake", name: "Kage", public: loggedIn },
  ];

  return (
    <nav>
      <ul>
        {arrNav &&
          arrNav.map((item, i) => {
            return item.public === true ? <li key={i}>{item.name}</li> : null;
          })}
      </ul>
    </nav>
  );
};
