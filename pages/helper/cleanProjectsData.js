function cleanProjectsData(projectsData, mediaData) {
  return projectsData.map((project) => {
    const slides = project.slides.map(
      (slide) => mediaData.filter((media) => media.id === slide)[0]
    );
    return {
      ...project,
      slides: slides,
    };
  });
}
export default cleanProjectsData;
