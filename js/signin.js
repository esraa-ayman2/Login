var signinEmailInput = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var incorrect = document.getElementById("incorrect");
var loginBtn = document.getElementById("login-btn");

var personalData = JSON.parse(localStorage.getItem("personalData")) || [];
clear();

loginBtn.addEventListener("click", function () {});
function login() {
  var email = signinEmailInput.value.trim();
  var password = signinPassword.value.trim();
  clear();
  if (email === "" || password === "") {
    incorrect.classList.remove("d-none");
    return;
  }

  var foundUser = personalData.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (foundUser) {
    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    incorrect.classList.add("d-none");
    window.location.href = "./html/home.html";
  } else {
    Swal.fire({
  icon: 'error',
  title: '<span style="font-size:20px; color:#e74c3c; font-weight:bold;">Incorrect Credentials</span>',
  html: '<span style="font-size:16px; color:#555;">The email or password you entered is incorrect. Please try again or reset your password.</span>',
  confirmButtonText: 'OK',
  confirmButtonColor: '#e74c3c',
  showClass: {
    popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
    `,
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutUp
      animate__faster
    `,
  },
});

    incorrect.classList.add("d-none");
  }
}

function clear() {
  signinEmailInput.value = "";
  signinPassword.value = "";
}
