import styles from "./Project.module.scss";
import Slide from "./Slide";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Project({
  projectIndex,
  projects,
  numberOfSlides,
  currentSlideIndex,
  visibleProject = false,
}) {
  function getProjectSlides(projectIndex, slideIndex) {
    if (!visibleProject) {
      return projects[projectIndex].slides.map((slide) => {
        return <Slide key={slide.id} slide={slide} />;
      });
    }
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
        return (
          <CSSTransition
            key={slide.value.id}
            timeout={500}
            classNames={styles.item}
          >
            <Slide key={slide.value.id} slide={slide.value} />
          </CSSTransition>
        );
      });
  }
  function getProjectWidth(numberOfSlides) {
    return numberOfSlides * 100;
  }
  const isVisibleProject = visibleProject && "isVisibleProject";
  return (
    <TransitionGroup className={styles.list}>
      <div
        className={styles.projectContainer + " " + isVisibleProject}
        style={{
          width: getProjectWidth(numberOfSlides) + "vw",
        }}
      >
        {getProjectSlides(projectIndex, currentSlideIndex)}
      </div>
    </TransitionGroup>
  );
}
export default Project;
