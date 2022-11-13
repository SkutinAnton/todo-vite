import { useCallback } from "react";
import cn from "classnames";

import useStore from "../../store";
import s from "./Tabs.module.scss";

const Tabs = () => {
  const tabs = useStore((state) => state.tabs);
  const changeTab = useStore((state) => state.changeTab);
  const currentTab = useStore((state) => state.currentTab);

  const clickHandler = useCallback(
    (tab) => () => {
      changeTab(tab);
    },
    []
  );

  return (
    <div className={s.tabs}>
      {tabs.map((tab) => (
        <div
          className={cn(s.tabs__tab, {
            [s.active]: tab.value === currentTab.value,
            [s[tab.theme]]: tab.theme,
          })}
          key={tab.value}
          onClick={clickHandler(tab)}
        >
          {tab.value}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
