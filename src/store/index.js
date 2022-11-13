import create from "zustand";

const initialState = {
  tabs: [
    { value: "Todo", theme: "red" },
    { value: "Notification", theme: "blue" },
    { value: "About", theme: "green" },
  ],
};

const useStore = create((set) => ({
  ...initialState,
  currentTab: initialState.tabs[0],
  changeTab: (currentTab) => set({ currentTab }),
}));

export default useStore;
