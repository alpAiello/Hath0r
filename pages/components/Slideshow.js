import Slide from "./Slide";
import styles from "./Slideshow.module.scss";
import gsap from "gsap";
import { useEffect } from "react";
function Slideshow(props) {
  const { projects_clean, projectIndex, slideIndex } = props;
  console.log("-> projects_clean", projects_clean);
  console.log("-> slideIndex", slideIndex);
  console.log("-> projectIndex", projectIndex);
  useEffect(() => {
    const yMove = slideIndex * 100;
    gsap.to("#slideShow", { x: -yMove + "vw", duration: 1.5 });
  }, [slideIndex]);

  const projectSlides = projects_clean[projectIndex].slides.map((slide) => {
    return (
      <Slide
        key={slide.id}
        slideUrl={"https://sandy.uber.space/assets/" + slide.file}
      />
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
