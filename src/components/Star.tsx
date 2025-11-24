import { FunctionComponent } from "react";
import styles from "./Star.module.css";

export type StarType = {
  className?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
  text?: boolean;
  star?: string;
  success?: string;
  star1?: string;

  /** Variant props */
  property1?: "Success" | "Danger";
};

const Star = ({
  className = "",
  property1 = "Success",
  rightIcon = false,
  leftIcon = true,
  text = true,
  star,
  success,
  star1,
}: StarType) => {
  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
    >
      {!!leftIcon && <img className={styles.starIcon} alt="" src={star} />}
      {!!text && <div className={styles.success}>{success}</div>}
      {!!rightIcon && <img className={styles.starIcon2} alt="" src={star1} />}
    </div>
  );
};

export default Star as FunctionComponent<StarType>;
