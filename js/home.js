var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  document.getElementById("username").textContent += currentUser.name;


    confetti({
    particleCount: 200,
    spread: 100,
    colors: ['#ff0000ff', '#ff00eaff', '#ffff1eff', '#5bff45ff', '#00f7ffff', '#540070ff', '#a70054ff']
  });