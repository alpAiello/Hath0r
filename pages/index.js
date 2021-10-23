import MainView from "./components/MainView";
import SlideshowInterface from "./components/SlideshowInterface";
import cleanProjectsData from "./helper/cleanProjectsData";
import counter from "./helper/counter";
import { useState } from "react";

const api = {
  assets: "https://sandy.uber.space/assets/",
  media: "https://sandy.uber.space/items/media",
  projects: "https://sandy.uber.space/items/project",
};

function App({ projects }) {
  const numberOfProjects = projects.length;
  const slidesPerProject = projects.map((project) => project.slides.length);
  const [currentSlideIndex, setCurrentSlide] = useState(0);
  const [currentProjectIndex, setCurrentProject] = useState(0);
  function handleSlideChange(newSlideIndex) {
    setCurrentSlide(newSlideIndex);
  }
  function handleProjectChange(newProjectIndex) {
    setCurrentProject(newProjectIndex);
  }
  const currentProjectIndexes = [
    counter(currentProjectIndex - 1, numberOfProjects),
    counter(currentProjectIndex, numberOfProjects),
    counter(currentProjectIndex + 1, numberOfProjects),
  ];
  return (
    <>
      <div id="webPage">
        <MainView
          id="MainView"
          currentProjectIndexes={currentProjectIndexes}
          currentSlideIndex={currentSlideIndex}
          numberOfProjects={numberOfProjects}
          projects={projects}
          slidesPerProject={slidesPerProject}
        />
      </div>
      <SlideshowInterface
        handleProjectChange={handleProjectChange}
        handleSlideChange={handleSlideChange}
        currentSlideIndex={counter(
          currentSlideIndex,
          slidesPerProject[currentProjectIndex]
        )}
        currentProjectIndex={currentProjectIndexes[1]}
        numberOfProjects={numberOfProjects}
        slidesPerProject={slidesPerProject}
      />
    </>
  );
}
export async function getStaticProps() {
  const res_projects = await fetch(api.projects);
  const res_media = await fetch(api.media);
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
