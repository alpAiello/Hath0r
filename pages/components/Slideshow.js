import Slide from "./Slide";
import styles from "./Slideshow.module.scss";
import gsap from "gsap";
import { useEffect } from "react";
function Slideshow(props) {
  const { projects, media, projectIndex, slideIndex } = props;
  console.log("-> slideIndex", slideIndex);
  console.log("-> projectIndex", projectIndex);
  console.log("-> media", media);
  console.log("-> projects", projects);
  useEffect(() => {
    const yMove = slideIndex * 100;
    gsap.to("#slideShow", { x: -yMove + "vw", time: 3 });
  }, [slideIndex]);
  const projectSlides = media
    .filter((media) => {
      return media.project === projects[projectIndex].id;
    })
    .map((projectMedia) => {
      const mediaUrl = "https://sandy.uber.space/assets/" + projectMedia.file;
      return <Slide key={projectMedia.id} slideUrl={mediaUrl} />;
    })
    .sort();
  console.log("-> projectSlides", projectSlides);

  return (
    <div id="slideShow" className={styles.container}>
      {projectSlides}
    </div>
  );
}

export default Slideshow;
