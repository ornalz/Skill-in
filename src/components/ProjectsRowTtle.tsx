import { FunctionComponent } from "react";
import styles from "./ProjectsRowTtle.module.css";

export type ProjectsRowTtleType = {
  className?: string;
  popularProjects?: string;
};

const ProjectsRowTtle = ({
  className = "",
  popularProjects,
}: ProjectsRowTtleType) => {
  return (
    <section className={[styles.projectsRowTtle, className].join(" ")}>
      <div className={styles.container}>
        <h3 className={styles.popularProjects}>{popularProjects}</h3>
        <button className={styles.morelink}>
          <div className={styles.seeAll}>See all</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrow-right2.svg"
          />
        </button>
      </div>
    </section>
  );
};

export default ProjectsRowTtle as FunctionComponent<ProjectsRowTtleType>;
