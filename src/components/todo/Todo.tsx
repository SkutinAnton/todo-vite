import cn from "classnames";

import useStore from "../../store";
import s from "./Todo.module.scss";

const Todo = () => {
  const currentTab = useStore((state) => state.currentTab);

  return (
    <div
      className={cn(s.todo, {
        [s.show]: currentTab.value === "todo",
      })}
    >
      Todo
    </div>
  );
};

export default Todo;
