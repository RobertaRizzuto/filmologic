
import styles from"./index.module.scss";
import language from "./language.svg"
import chat from "./chat.svg"

const Footer = () => {
  return (
  <main className={styles.footer}>
<section className={styles.first}>
  <img src={language}  className={styles.icon} alt="translate icon" />
</section>

<section className={styles.second}>
  <ul>
    <li>
      <a href="">Terms & conditions </a>
    </li>
    <li className={styles.separator}>|</li>
    <li>
      <a href="">Privacy policy </a>
    </li>{" "}
    <li className={styles.separator}>|</li>
    <li>
      <a href="">Cookie</a>
    </li>
  </ul>
</section>

<section className={styles.third}>
  <img src={chat} className={styles.icon} alt="chat icon" />
</section>
</main>
  
  );
};

export default Footer;