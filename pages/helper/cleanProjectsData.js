function cleanProjectsData(projectsData, mediaData) {
  return projectsData.map((project) => {
    const slides = project.slides.map((slide) => {
      const slideMedia = mediaData.filter((media) => media.id === slide)[0];
      return {
        ...slideMedia,
        file: "https://sandy.uber.space/assets/" + slideMedia.file,
      };
    });
    return {
      ...project,
      slides: slides,
    };
  });
}
export default cleanProjectsData;
