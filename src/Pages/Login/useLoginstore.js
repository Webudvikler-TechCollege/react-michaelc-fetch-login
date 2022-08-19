import create from "zustand";

export const useLoginstore = create((set) => {
  return {
    loggedIn: Boolean(localStorage.getItem("token")),
    User: null,

    setLoggedIn: (loggedIn = true) =>
      set((state) => {
        if (!loggedIn) {
          localStorage.removeItem("token");
        }

        return { loggedIn };
      }),
    setUser: (user) =>
      set((state) => {
        state.User = user;
      }),

    setLogOut: () =>
      set((state) => {
        localStorage.removeItem("token");
        state.loggedIn = false;
        state.User = null;
      }),
  };
});
