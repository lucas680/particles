window.onload = function() {
    Particles.init({
      selector: '.background',
      maxParticles: 200,
      sizeVariations: 3,
      color: ['#48D1CC'],
      speed : 0.8,
      minDistance: 100,
      connectParticles: true,
    });
  };