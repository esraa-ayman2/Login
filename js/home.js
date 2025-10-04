var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  document.getElementById("username").textContent += currentUser.name;


    confetti({
    particleCount: 400,
    spread: 140,
    colors: ['#ff0000ff', '#ff00eaff', '#ffff1eff', '#5bff45ff', '#00f7ffff', '#540070ff', '#a70054ff', '#000c27ff', '#e5fd4aff', '#ff0000ff', '#0ef7ffff', '#00ff95ff', '#903c00ff']
  });