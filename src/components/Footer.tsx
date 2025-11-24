import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer = ({ className = "" }: FooterType) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.headerLeft}>
        <img
          className={styles.skillInLogoIcon}
          loading="lazy"
          alt=""
          src="/Skill-in-logo.svg"
        />
        <div className={styles.search}>
          <div className={styles.div}>
            <img
              className={styles.magnifyingGlassIcon}
              alt=""
              src="/magnifying-glass.svg"
            />
            <input
              className={styles.search2}
              placeholder="Search..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.nav}>
          <div className={styles.projects}>Projects</div>
          <div className={styles.projects}>About</div>
          <div className={styles.projects}>Support</div>
          <div className={styles.projects}>My Board</div>
          <div className={styles.projects}>My Applications</div>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.nav}>
          <div className={styles.projects}>Privacy Policy</div>
          <div className={styles.projects}>Terms of Service</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer as FunctionComponent<FooterType>;
