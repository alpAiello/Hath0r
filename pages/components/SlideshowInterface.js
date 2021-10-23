import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import styles from "./SlideshowInterface.module.scss";
import counter from "../helper/counter";
import { gsap } from "gsap";

function SlideshowInterface({
  currentProjectIndex,
  currentSlideIndex,
  numberOfProjects,
  slidesPerProject,
  handleSlideChange,
  handleProjectChange,
}) {
  function resetSlideIndex() {
    return 0;
  }

  return (
    <div className={styles.container}>
      <button
        id={styles.nextSlideButton}
        className={styles.slideShowButton}
        onClick={() => {
          /*
          gsap.to("#webPage", { x: -100 + "vw", duration: 1 });
*/
          handleSlideChange(
            counter(
              currentSlideIndex + 1,
              slidesPerProject[currentProjectIndex]
            )
          );
        }}
      >
        <MdKeyboardArrowRight />
      </button>
      <button
        id={styles.prevSlideButton}
        className={styles.slideShowButton}
        onClick={() => {
          handleSlideChange(
            counter(
              currentSlideIndex - 1,
              slidesPerProject[currentProjectIndex]
            )
          );
        }}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        id={styles.nextProjectButton}
        className={styles.slideShowButton}
        onClick={() => {
          handleProjectChange(
            counter(currentProjectIndex + 1, numberOfProjects)
          );
          handleSlideChange(resetSlideIndex());
        }}
      >
        <MdKeyboardArrowDown />
      </button>
      <button
        id={styles.prevProjectButton}
        className={styles.slideShowButton}
        onClick={() => {
          handleProjectChange(
            counter(currentProjectIndex - 1, numberOfProjects)
          );
          handleSlideChange(resetSlideIndex());
        }}
      >
        <MdKeyboardArrowUp />
      </button>
    </div>
  );
}
export default SlideshowInterface;
