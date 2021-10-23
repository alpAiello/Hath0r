import Image from "next/image";
import styles from "./Slide.module.scss";
function Slide({ slide }) {
  return (
    <div className={styles.Slide}>
      <Image
        key={slide.id}
        src={slide.file}
        layout="fill"
        objectFit="cover"
        alt="hello"
      />
    </div>
  );
}
export default Slide;
