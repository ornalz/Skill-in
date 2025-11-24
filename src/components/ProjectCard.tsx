import { FunctionComponent } from "react";
import Star from "./Star";
import styles from "./ProjectCard.module.css";

export type ProjectCardType = {
  className?: string;
  hot?: boolean;
  projectLogo?: string;
  property11?: "Success" | "Danger";
  star?: string;
  success?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
  text?: boolean;

  /** Variant props */
  property1?: string;
};

const ProjectCard = ({
  className = "",
  property1 = "Default",
  hot = true,
  projectLogo,
  property11 = "Success",
  star,
  success,
  rightIcon,
  leftIcon,
  text,
}: ProjectCardType) => {
  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.cardHeader}>
        <img
          className={styles.projectLogoIcon}
          loading="lazy"
          alt=""
          src={projectLogo}
        />
        <div className={styles.info}>
          <img
            className={styles.ellipsisVerticalIcon}
            alt=""
            src="/ellipsis-vertical1.svg"
          />
          <div className={styles.info2}>
            <div className={styles.maxImpactIsrael}>Max impact Israel</div>
            {!!hot && (
              <Star
                property1={property11}
                rightIcon={rightIcon}
                leftIcon={leftIcon}
                text={text}
                star={star}
                success={success}
                star1="/star3.svg"
              />
            )}
            <div className={styles.applicants}>
              <img
                className={styles.userGroupIcon}
                alt=""
                src="/user-group1.svg"
              />
              <div className={styles.applicants2}>5 Applicants</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardBody}>
        <b className={styles.smartMentalHealth}>Smart Mental Health System</b>
        <div className={styles.smartWaitlistCreation}>
          Smart waitlist creation with filtering, therapist-patient matching,
          group therapy creation, and integration with the existing website.
        </div>
      </div>
    </div>
  );
};

export default ProjectCard as FunctionComponent<ProjectCardType>;
