import Image from "next/image";
import styles from "./Slide.module.css";
function Slide(props) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={props.slideUrl}
        layout="fill"
        objectFit="cover"
        width={props.width}
        height={props.height}
      />
    </div>
  );
}
export default Slide;
