  const videos = document.querySelectorAll('.hoverVideo');

  videos.forEach(video => {
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = 0.01;
    });

    video.addEventListener('mouseenter', () => video.play());

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0.01;
    });
  });