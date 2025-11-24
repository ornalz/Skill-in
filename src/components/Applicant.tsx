import { FunctionComponent } from "react";
import styles from "./Applicant.module.css";

export type ApplicantType = {
  className?: string;
};

const Applicant = ({ className = "" }: ApplicantType) => {
  return (
    <div className={[styles.applicant, className].join(" ")}>
      <div className={styles.userAvatarParent}>
        <img
          className={styles.userAvatarIcon}
          alt=""
          src="/user-avatar1@2x.png"
        />
        <div className={styles.applicantDetails}>
          <b className={styles.technologyInnovation}>John Doe</b>
          <div className={styles.technologyInnovation}>Frontend developer</div>
        </div>
      </div>
      <img
        className={styles.linkedinInIcon}
        loading="lazy"
        alt=""
        src="/linkedin-in.svg"
      />
    </div>
  );
};

export default Applicant as FunctionComponent<ApplicantType>;
