import { FunctionComponent } from "react";
import styles from "./Star1.module.css";

export type Star1Type = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  text?: boolean;

  /** Variant props */
  property1?: string;
};

const Star1 = ({
  className = "",
  property1 = "primary",
  iconLeft = true,
  iconRight = false,
  text = true,
}: Star1Type) => {
  return (
    <button
      className={[styles.button, className].join(" ")}
      data-property1={property1}
    >
      {!!iconLeft && (
        <img className={styles.starIcon} alt="" src="/star2.svg" />
      )}
      {!!text && <b className={styles.button2}>Apply Now</b>}
      {!!iconRight && (
        <img className={styles.arrowRightIcon} alt="" src="/arrow-right1.svg" />
      )}
    </button>
  );
};

export default Star1 as FunctionComponent<Star1Type>;
