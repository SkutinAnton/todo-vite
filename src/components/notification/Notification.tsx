import cn from "classnames";

import useStore from "../../store";
import s from "./Notification.module.scss";

const Notification = () => {
  const currentTab = useStore((state) => state.currentTab);

  return (
    <div
      className={cn(s.about, {
        [s.show]: currentTab.value === "notification",
      })}
    >
      Notification
    </div>
  );
};

export default Notification;
