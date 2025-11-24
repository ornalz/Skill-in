import { FunctionComponent } from "react";
import styles from "./Scroll.module.css";

export type ScrollType = {
  className?: string;
  scrollRight?: boolean;
  scrollLeft?: boolean;
};

const Scroll = ({
  className = "",
  scrollRight = false,
  scrollLeft = false,
}: ScrollType) => {
  return (
    <div className={[styles.scroll, className].join(" ")}>
      {!!scrollLeft && (
        <div className={styles.scrollLeft}>
          <img
            className={styles.iconbuttonfilledstandard}
            alt=""
            src="/iconButtonFilledStandard1.svg"
          />
        </div>
      )}
      <div className={styles.spacer} />
      {!!scrollRight && (
        <div className={styles.scrollRight}>
          <img
            className={styles.iconbuttonfilledstandard}
            alt=""
            src="/iconButtonFilledStandard1.svg"
          />
        </div>
      )}
    </div>
  );
};

export default Scroll as FunctionComponent<ScrollType>;
