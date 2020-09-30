import init, { hash } from "./argon2wasm.js";

init();

function post_to_backend() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let password_rep = document.getElementById("password_repeat");

  let alert = document.getElementById("AlertBox");
  let alerttext = document.getElementById("alerttext");

  if (password.value != password_rep.value) {
    alert.classList.add("error");
    alert.classList.remove("hidden");
    alerttext.textContent = "Passwords do not match.";
  } else if (
    password.value.length == 0 ||
    password_rep.value.length == 0 ||
    username.value.length == 0
  ) {
    alert.classList.add("error");
    alert.classList.remove("hidden");
    alerttext.textContent = "Please enter a valid password and username.";
  } else if (password.value.length > 20) {
    alert.classList.add("error");
    alert.classList.remove("hidden");
    alerttext.textContent = "Password must be under 21 characters.";
  } else {
    // hash the password before transmitting
    let hash_string = hash(password.value);
    let x = new RegisterPayload(username.value, hash_string);
    x.send();
  }
}

window.post_to_backend = post_to_backend;

function close_alert() {
  document.getElementById("AlertBox").classList.add("hidden");
}

window.close_alert = close_alert;

class RegisterPayload {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  send() {
    const httpr = new XMLHttpRequest();
    const url = "https://auth.veloren.net/register";
    httpr.open("POST", url);
    httpr.send(JSON.stringify(this));

    let alert = document.getElementById("AlertBox");
    alert.classList.add('hidden');
    alert.classList.remove('error');
    alert.classList.remove('success');

    httpr.onreadystatechange = function () {
      let alerttext = document.getElementById("alerttext");

      alert.classList.remove("hidden");

      if (httpr.status != 200) {
        alert.classList.add("error");

        if (httpr.responseText.length == 0) {
          alerttext.textContent =
            "Error " + httpr.status + ": " + httpr.statusText;
        } else {
          alerttext.textContent = "Error " + ": " + httpr.responseText;
        }
      } else {
        alert.classList.add("success");
        alerttext.textContent =
          "Successfully registered! You can now play veloren!";
      }
    };
  }
}
