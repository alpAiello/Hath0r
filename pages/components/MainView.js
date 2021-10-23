import Project from "./Project";
function MainView({ currentProjectIndexes, slidesPerProject, ...props }) {
  return (
    <>
      <Project
        projectIndex={currentProjectIndexes[0]}
        numberOfSlides={slidesPerProject[currentProjectIndexes[0]]}
        {...props}
      />
      <Project
        projectIndex={currentProjectIndexes[1]}
        numberOfSlides={slidesPerProject[currentProjectIndexes[1]]}
        {...props}
      />
      <Project
        projectIndex={currentProjectIndexes[2]}
        numberOfSlides={slidesPerProject[currentProjectIndexes[2]]}
        {...props}
      />
    </>
  );
}

export default MainView;
