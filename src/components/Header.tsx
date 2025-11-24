import { FunctionComponent } from "react";
import Star from "./Star";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  property1?: "Success" | "Danger";
  success?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
  text?: boolean;
};

const Header = ({
  className = "",
  property1 = "Success",
  success,
  rightIcon,
  leftIcon,
  text,
}: HeaderType) => {
  return (
    <section className={[styles.header, className].join(" ")}>
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
        <nav className={styles.nav}>
          <div className={styles.projects}>Projects</div>
          <div className={styles.about}>About</div>
          <div className={styles.about}>Support</div>
          <div className={styles.about}>My Board</div>
        </nav>
        <div className={styles.myApplications}>
          <Star
            property1={property1}
            rightIcon={rightIcon}
            leftIcon={leftIcon}
            text={text}
            star="/star1.svg"
            success={success}
            star1="/star1.svg"
          />
        </div>
        <img
          className={styles.userAvatarIcon}
          alt=""
          src="/user-avatar1@2x.png"
        />
      </div>
    </section>
  );
};

export default Header as FunctionComponent<HeaderType>;
