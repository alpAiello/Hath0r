import styles from "./SlideshowControlls.module.css";

function SlideshowControlls(props) {
  return (
    <div>
      <button
        className={styles.nextSlide}
        onClick={() => props.handleSlideChange("next")}
      >
        +
      </button>
      <button
        className={styles.prevSlide}
        onClick={() => props.handleSlideChange("prev")}
      >
        -
      </button>
      <button
        className={styles.nextProject}
        onClick={() => props.handleProjectChange("next")}
      >
        +
      </button>
      <button
        className={styles.prevProject}
        onClick={() => props.handleProjectChange("prev")}
      >
        -
      </button>
    </div>
  );
}
export default SlideshowControlls;
