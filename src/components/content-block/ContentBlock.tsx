import cn from "classnames";

import useStore from "../../store";
import s from "./ContentBlock.module.scss";

const ContentBlock = ({ children, name }) => {
  const currentTab = useStore((state) => state.currentTab);

  return (
    <div
      className={cn(s.content_block, {
        [s.show]: currentTab.value.toLowerCase() === name,
      })}
    >
      {children}
    </div>
  );
};

export default ContentBlock;
