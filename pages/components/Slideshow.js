import Slide from "./Slide";
import styles from "./Slideshow.module.scss";
import gsap from "gsap";
import { useEffect } from "react";

function Slideshow({ projects, projectIndex, slideIndex, assetsApi }) {
  console.log("-> projects", projects);
  useEffect(() => {
    const xMove = slideIndex * 100;
    gsap.to("#slideShow", {
      x: -xMove + "vw",
      duration: 1.5,
    });
  }, [slideIndex]);
  useEffect(() => {
    const yMove = projectIndex * 100;
    gsap.to(".projectSlides", {
      y: -yMove + "vh",
      duration: 1.5,
    });
  }, [projectIndex]);

  function getProjectSlides(projectIndex) {
    return projects[projectIndex].slides.map((slide) => {
      return (
        <Slide
          className="Slide"
          key={slide.id}
          slideUrl={assetsApi + slide.file}
        />
      );
    });
  }
  const projectSlides = projects.map((project, index) => {
    return (
      <div
        style={{ width: project.slides.length * 100 + "vw" }}
        className={styles.project + " projectSlides"}
        key={project.id}
      >
        {getProjectSlides(index)}
      </div>
    );
  });
  console.log("-> projectSlides", projectSlides);

  return (
    <div id="slideShow" className={styles.container}>
      {projectSlides}
    </div>
  );
}

export default Slideshow;
