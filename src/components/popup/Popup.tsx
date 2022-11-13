import About from "../about";
import Notification from "../notification";
import Tabs from "../tabs";
import Todo from "../todo";

import s from "./Popup.module.scss";
import ContentBlock from "../content-block";

const Popup = () => (
  <div className={s.popup}>
    <Tabs />
    <div className={s.popup__content}>
      <ContentBlock name="todo">
        <Todo />
      </ContentBlock>
      <ContentBlock name="notification">
        <Notification />
      </ContentBlock>
      <ContentBlock name="about">
        <About />
      </ContentBlock>
    </div>
  </div>
);

export default Popup;
