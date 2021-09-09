import Slide from "./Slide";
import "./Slideshow.module.css";
import { useEffect, useState } from "react";
function Slideshow(props) {
  const [fileId, setFileId] = useState("");
  const projects = props.projects;
  const media = props.media;
  const currentProject = props.projectNumber;
  const currentSlide = props.slideNumber;
  useEffect(() => {
    const currentSlideId = projects[currentProject].slides[currentSlide];
    const currentMedia = media.filter((media) => {
      return media.id === currentSlideId;
    })[0];
    setFileId(currentMedia.file);
  }, [currentSlide, currentProject]);

  const currentSlideUrl = "https://sandy.uber.space/assets/" + fileId;

  return (
    <div>
      <Slide slideUrl={currentSlideUrl} />
    </div>
  );
}

export default Slideshow;
