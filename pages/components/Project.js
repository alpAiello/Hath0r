import styles from "./Project.module.scss";
import Slide from "./Slide";

function Project({
  projectIndex,
  projects,
  numberOfSlides,
  currentSlideIndex,
}) {
  function getProjectSlides(projectIndex, slideIndex) {
    const indexedSlides = projects[projectIndex].slides.map((value, index) => {
      return { index: index + 1, value: value };
    });
    return indexedSlides
      .sort((a, b) => {
        return b.index <= slideIndex ? -1 : 0;
      })
      .sort((a, b) => {
        return b.index <= slideIndex && a.index < b.index ? -1 : 0;
      })
      .map((slide) => {
        return <Slide key={slide.value.id} slide={slide.value} />;
      });
  }
  function getProjectWidth(numberOfSlides) {
    return numberOfSlides * 100;
  }
  return (
    <div
      className={styles.projectContainer}
      style={{
        width: getProjectWidth(numberOfSlides) + "vw",
      }}
    >
      {getProjectSlides(projectIndex, currentSlideIndex)}
    </div>
  );
}
export default Project;
