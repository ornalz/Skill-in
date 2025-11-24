import { FunctionComponent, useState } from "react";
import Header from "../components/Header";
import ProjectsRowTtle from "../components/ProjectsRowTtle";
import ProjectCard from "../components/ProjectCard";
import Scroll from "../components/Scroll";
import ProjectOpen from "../components/ProjectOpen";
import Footer from "../components/Footer";
import styles from "./Projects.module.css";

const Projects = () => {
  const [projectCardItems] = useState([
    {
      property1: "Default",
      hot: true,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: true,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
  ]);
  const [projectCardItems1] = useState([
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
  ]);
  const [projectCardItems2] = useState([
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
    {
      property1: "Default",
      hot: false,
      projectLogo: "/project-logo1.svg",
      property11: "Danger",
      star: "/sparkle1.svg",
      success: "Hot project",
      rightIcon: false,
      leftIcon: true,
      text: true,
    },
  ]);
  return (
    <div className={styles.projects}>
      <Header property1="Success" success="2" rightIcon={false} leftIcon text />
      <main className={styles.projects2}>
        <section className={styles.categoryRow}>
          <ProjectsRowTtle popularProjects="Popular Projects" />
          <section className={styles.container}>
            {projectCardItems.map((item, index) => (
              <ProjectCard
                key={index}
                property1={item.property1}
                hot={item.hot}
                projectLogo={item.projectLogo}
                property11={item.property11}
                star={item.star}
                success={item.success}
                rightIcon={item.rightIcon}
                leftIcon={item.leftIcon}
                text={item.text}
              />
            ))}
            <Scroll scrollRight={false} scrollLeft={false} />
          </section>
        </section>
        <ProjectOpen />
        <section className={styles.categoryRow}>
          <ProjectsRowTtle popularProjects="UX.UI designer needed" />
          <section className={styles.container}>
            {projectCardItems1.map((item, index) => (
              <ProjectCard
                key={index}
                property1={item.property1}
                hot={item.hot}
                projectLogo={item.projectLogo}
                property11={item.property11}
                star={item.star}
                success={item.success}
                rightIcon={item.rightIcon}
                leftIcon={item.leftIcon}
                text={item.text}
              />
            ))}
            <Scroll scrollRight scrollLeft={false} />
          </section>
        </section>
        <section className={styles.categoryRow}>
          <ProjectsRowTtle popularProjects="New Projects" />
          <section className={styles.container}>
            {projectCardItems2.map((item, index) => (
              <ProjectCard
                key={index}
                property1={item.property1}
                hot={item.hot}
                projectLogo={item.projectLogo}
                property11={item.property11}
                star={item.star}
                success={item.success}
                rightIcon={item.rightIcon}
                leftIcon={item.leftIcon}
                text={item.text}
              />
            ))}
            <Scroll scrollRight scrollLeft={false} />
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects as FunctionComponent;
