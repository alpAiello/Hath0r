import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import styles from "./SlideshowInterface.module.scss";

function SlideshowInterface({
  slideIndex,
  projectIndex,
  slidesPerProject,
  numberOfProjects,
  handleProjectChange,
  handleSlideChange,
}) {
  const numberOfSlides = slidesPerProject[projectIndex];

  function resetSlideIndex() {
    return 0;
  }

  function getStepConfiguration(stepDirection, arrayLength) {
    if (stepDirection === "next") {
      return {
        startIndex: 0,
        lastIndex: arrayLength - 1,
        normalStep: +1,
      };
    } else if (stepDirection === "prev") {
      return {
        startIndex: arrayLength - 1,
        lastIndex: 0,
        normalStep: -1,
      };
    }
  }

  function findNextElement(
    indexOfElement,
    { startIndex, lastIndex, normalStep }
  ) {
    return indexOfElement === lastIndex
      ? startIndex
      : indexOfElement + normalStep;
  }

  function getNextSlide() {
    return findNextElement(
      slideIndex,
      getStepConfiguration("next", numberOfSlides)
    );
  }
  function getPrevSlide() {
    return findNextElement(
      slideIndex,
      getStepConfiguration("prev", numberOfSlides)
    );
  }
  function getNextProject() {
    return findNextElement(
      projectIndex,
      getStepConfiguration("next", numberOfProjects)
    );
  }
  function getPrevProject() {
    return findNextElement(
      projectIndex,
      getStepConfiguration("prev", numberOfProjects)
    );
  }

  return (
    <div className={styles.container}>
      <button
        id={styles.nextSlideButton}
        className={styles.slideShowButton}
        onClick={() => handleSlideChange(getNextSlide)}
      >
        <MdKeyboardArrowRight />
      </button>
      <button
        id={styles.prevSlideButton}
        className={styles.slideShowButton}
        onClick={() => handleSlideChange(getPrevSlide)}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        id={styles.nextProjectButton}
        className={styles.slideShowButton}
        onClick={() => {
          handleProjectChange(getNextProject);
          handleSlideChange(resetSlideIndex);
        }}
      >
        <MdKeyboardArrowDown />
      </button>
      <button
        id={styles.prevProjectButton}
        className={styles.slideShowButton}
        onClick={() => {
          handleProjectChange(getPrevProject);
          handleSlideChange(resetSlideIndex);
        }}
      >
        <MdKeyboardArrowUp />
      </button>
    </div>
  );
}
export default SlideshowInterface;
