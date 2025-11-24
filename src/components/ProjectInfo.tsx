import { FunctionComponent, useState } from "react";
import Star from "./Star";
import Star1 from "./Star1";
import Applicant from "./Applicant";
import styles from "./ProjectInfo.module.css";

export type ProjectInfoType = {
  className?: string;
  property1?: "Success" | "Danger";
  star?: string;
  success?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
  text?: boolean;
  property11?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  text1?: boolean;
};

const ProjectInfo = ({
  className = "",
  property1 = "Success",
  star,
  success,
  rightIcon,
  leftIcon,
  text,
  property11,
  iconLeft,
  iconRight,
  text1,
}: ProjectInfoType) => {
  const [applicantItems] = useState([{}, {}, {}, {}]);
  return (
    <div className={[styles.projectInfo, className].join(" ")}>
      <div className={styles.projectInfo2}>
        <h1 className={styles.smartMentalHealth}>Smart Mental Health System</h1>
        <div className={styles.clientLink}>
          <img
            className={styles.arrowUpRightFromSquareIcon}
            alt=""
            src="/arrow-up-right-from-square.svg"
          />
          <b className={styles.maxImpactIsrael}>Max impact Israel</b>
        </div>
        <Star
          property1={property1}
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          text={text}
          star={star}
          success={success}
          star1="/star3.svg"
        />
        <section className={styles.infoContainer}>
          <b className={styles.projectBrief}>Project brief</b>
          <div className={styles.projectBrief}>
            Creating a smart waitlist involves several key features that enhance
            the user experience. This includes filtering options, which allow
            users to easily navigate through available therapists, as well as a
            matching system that pairs patients with the right therapist based
            on their specific needs.
          </div>
          <div className={styles.projectBrief}>
            Additionally, the platform supports the creation of group therapy
            sessions, fostering a sense of community among participants. To
            ensure seamless access, this waitlist system can be integrated with
            the existing website, providing a cohesive experience for users.
          </div>
          <button className={styles.download}>
            <img
              className={styles.arrowUpRightFromSquareIcon}
              alt=""
              src="/arrow-down-to-bracket.svg"
            />
            <div className={styles.downloadSystemDesign}>
              Download system design
            </div>
          </button>
        </section>
        <Star1
          property1={property11}
          iconLeft={iconLeft}
          iconRight={iconRight}
          text={text1}
        />
      </div>
      <div className={styles.applicants}>
        <div className={styles.title}>
          <img
            className={styles.arrowUpRightFromSquareIcon}
            alt=""
            src="/user-group1.svg"
          />
          <b className={styles.technologyInnovation}>Applicants</b>
        </div>
        {applicantItems.map((item, index) => (
          <Applicant key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectInfo as FunctionComponent<ProjectInfoType>;
