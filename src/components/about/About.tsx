import s from "./About.module.scss";

const About = () => (
  <div className={s.about}>
    <div className={s.about__title}>Hello 👋</div>
    <div className={s.about__subtitle}>
      This tool allows you to create task lists
    </div>
  </div>
);

export default About;
