import Slideshow from "./components/Slideshow";
import SlideshowInterface from "./components/SlideshowInterface";
import cleanProjectsData from "./helper/cleanProjectsData";
import { useState } from "react";

const urlOfApi = "https://sandy.uber.space/";

function App(props) {
  const { projects } = props;
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
    <div id="webPage">
      <Slideshow
        assetsApi={urlOfApi + "assets/"}
        slideIndex={SlideIndex}
        projectIndex={ProjectIndex}
        projects={projects}
      />
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
export async function getStaticProps() {
  const res_projects = await fetch(urlOfApi + `items/project`);
  const res_media = await fetch(urlOfApi + `items/media`);
  const projects = await res_projects.json();
  const media = await res_media.json();
  const cleanedProjectsData = cleanProjectsData(projects.data, media.data);

  return {
    props: {
      projects: [...cleanedProjectsData],
    }, // will be passed to the page component as props
  };
}
export default App;
