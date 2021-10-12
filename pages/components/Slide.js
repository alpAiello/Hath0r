import Image from "next/image";
import styles from "./Slide.module.scss";
function Slide(props) {
  return (
    <div className={styles.container + " slide"}>
      <Image
        className={styles.img}
        src={props.slideUrl}
        layout="fill"
        objectFit="cover"
        alt="hello"
      />
    </div>
  );
}
export default Slide;
