import Slideshow from "./components/Slideshow";
import SlideshowControlls from "./components/SlideshowControlls";
import { useEffect, useState } from "react";
function App(props) {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = props.projects;
  const numberOfProjects = projects.length;
  const numberOfSlidesArray = projects.map((project)=> project.slides.length)
  const media = props.media;
  const files = props.files;
  function handleProjectChange(change) {
    if (change === "next") {
      setCurrentSlide((currentSlide + 1) % numberOfSlidesArray[currentProject]);
    } else if (change === "prev") {
      setCurrentSlide(Math.abs(currentSlide - 1) % numberOfSlidesArray[currentProject]);
    }
  }
  function handleSlideChange(change) {
    if (change === "next") {
      setCurrentProject((currentProject + 1) % numberOfProjects)
    }else if(change ==="prev") {
      setCurrentProject(Math.abs(currentProject - 1) % numberOfProjects);
    }
  }
  return (
    <div>
      {
        <Slideshow
          projectNumber={currentProject}
          slideNumber={currentSlide}
          projects={projects}
          media={media}
          files={files}
        />
      }
      <SlideshowControlls
        handleSlideChange={handleSlideChange}
        handleProjectChange={handleProjectChange}
      />
    </div>
  );
}
export async function getStaticProps(context) {
  const res_projects = await fetch(`https://sandy.uber.space/items/project`);
  const res_media = await fetch(`https://sandy.uber.space/items/media`);
  const res_files = await fetch("https://sandy.uber.space/files");
  const projects = await res_projects.json();
  const media = await res_media.json();
  const files = await res_files.json();
  return {
    props: {
      media: [...media.data],
      projects: [...projects.data],
      files: [...files.data],
    }, // will be passed to the page component as props
  };
}
export default App;
