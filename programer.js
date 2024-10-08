function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function playSong(embedId, songName) {
    const b = document.getElementById("p");
    const embed = document.getElementById(embedId);
    b.disabled = true;
    b.textContent = "Reproduciendo...";
    embed.play();
    alert("Reproduciendo: " + songName);
    embed.onended = () => {
      b.disabled = false;
      b.textContent = "Reproducir";
    };
  }
  
  function pl() {
    let nr = r(1, 6);
    switch (nr) {
      case 1:
        playSong("ls", "Lose yourself-Eminem");
        break;
      case 2:
        playSong("tr", "The real slim shady-Eminem");
        break;
      case 3:
        playSong("di", "Do I wanna know-Artic monkeys");
        break;
      case 4:
        playSong("o", "505-Artic monkeys");
        break;
      case 5:
        playSong("cf", "Can't feel my face-The weeknd");
        break;
      case 6:
        playSong("bl", "Blinding lights-The weeknd");
        break;
    }
  }
  