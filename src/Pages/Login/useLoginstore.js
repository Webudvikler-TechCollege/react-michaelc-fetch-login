import create from "zustand";

export const useLoginstore = create((set) => {
  return {
    loggedIn: Boolean(localStorage.getItem("user")),

    setLoggedIn: (loggedIn = true) =>
      set(() => {
        if (!loggedIn) {
          localStorage.removeItem("user");
        }
        return { loggedIn };
      }),
    setLogOut: () =>
      set((state) => {
        localStorage.removeItem("user");
        state.loggedIn = false;
      }),
  };
});
