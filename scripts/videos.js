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

    // Clicking the animation opens the same page as the project's title link
    const link = video.parentElement.querySelector('a');
    if (link) {
      video.addEventListener('click', () => {
        window.location.href = link.href;
      });
    }
  });
