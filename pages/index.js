import Slideshow from "./components/Slideshow";
import SlideshowInterface from "./components/SlideshowInterface";
import { useState } from "react";

function App(props) {
  const { projects, projects_clean, media, files } = props;
  const numberOfProjects = projects.length;
  const slidesPerProject = projects.map((project) => project.slides.length);
  const [ProjectIndex, setProjectIndex] = useState(0);
  const [SlideIndex, setSlideIndex] = useState(0);
  function handleSlideChange(newSlideIndex) {
    setSlideIndex(newSlideIndex);
  }
  function handleProjectChange(newProjectIndex) {
    setProjectIndex(newProjectIndex);
  }
  return (
    <div>
      <Slideshow
        projectIndex={ProjectIndex}
        slideIndex={SlideIndex}
        projects_clean={projects_clean}
        projects={projects}
        media={media}
        files={files}
      />
      }
      <SlideshowInterface
        projectIndex={ProjectIndex}
        numberOfProjects={numberOfProjects}
        handleProjectChange={handleProjectChange}
        slideIndex={SlideIndex}
        slidesPerProject={slidesPerProject}
        handleSlideChange={handleSlideChange}
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
  const props = {
    media: [...media.data],
    projects: [...projects.data],
    files: [...files.data],
  };
  const projects_clean = props.projects.map((project) => {
    const slides = project.slides.map(
      (slide) =>
        props.media.filter((media) => (media.id === slide ? true : false))[0]
    );
    const project_clean = {
      ...project,
      slides: slides,
    };
    return project_clean;
  });

  return {
    props: {
      media: [...media.data],
      projects: [...projects.data],
      files: [...files.data],
      projects_clean: [...projects_clean],
    }, // will be passed to the page component as props
  };
}
export default App;
