import { FunctionComponent } from "react";
import ProjectInfo from "./ProjectInfo";
import styles from "./ProjectOpen.module.css";

export type ProjectOpenType = {
  className?: string;
};

const ProjectOpen = ({ className = "" }: ProjectOpenType) => {
  return (
    <section className={[styles.projectOpen, className].join(" ")}>
      <ProjectInfo
        property1="Danger"
        star="/sparkle1.svg"
        success="Hot project"
        rightIcon={false}
        leftIcon
        text
        property11="success"
        iconLeft
        iconRight={false}
        text1
      />
      <img className={styles.xmarkLargeIcon} alt="" src="/xmark-large.svg" />
    </section>
  );
};

export default ProjectOpen as FunctionComponent<ProjectOpenType>;
