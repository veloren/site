import init, { hash } from "./argon2wasm.js";

init();

function postToBackendNewAccount() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const password_rep = document.getElementById("password_repeat");

  const alert = document.getElementById("alertbox");
  const alerttext = document.getElementById("alerttext");

  if (password.value !== password_rep.value) {
    alert.classList.add("error");
    alert.classList.remove("hidden");
    alerttext.textContent = "Passwords do not match.";
  } else if (
    password.value.length === 0 ||
    password_rep.value.length === 0 ||
    username.value.length === 0
  ) {
    alert.classList.add("error");
    alert.classList.remove("hidden");
    alerttext.textContent = "Please enter a valid password and username.";
  } else {
    // hash the password before transmitting
    let hash_string = hash(password.value);
    let x = new RegisterPayload(username.value, hash_string);
    x.sendRegisterAccount();
  }
}

window.postToBackendNewAccount = postToBackendNewAccount;

function postToBackendDeleteAccount() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const alert = document.getElementById("alertbox");
  const alerttext = document.getElementById("alerttext");

  if (
    password.value.length === 0 ||
    username.value.length === 0
  ) {
    alert.classList.add("error");
    alert.classList.remove("hidden");
    alerttext.textContent = "Please enter a valid password and username.";
  } else {
    // hash the password before transmitting
    let hash_string = hash(password.value);
    let x = new RegisterPayload(username.value, hash_string);
    x.sendDeleteAccount();
  }
}

window.postToBackendDeleteAccount = postToBackendDeleteAccount;

function closeAlert() {
  document.getElementById("alertbox").classList.add("hidden");
}

window.closeAlert = closeAlert;

class RegisterPayload {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  sendRegisterAccount() {
    const httpr = new XMLHttpRequest();
    const url = "https://auth.veloren.net/register";
    httpr.open("POST", url);
    httpr.send(JSON.stringify(this));

    const alert = document.getElementById("alertbox");
    alert.classList.add('hidden');
    alert.classList.remove('error');
    alert.classList.remove('success');

    httpr.onreadystatechange = function () {
      let alerttext = document.getElementById("alerttext");

      alert.classList.remove("hidden");

      if (httpr.status != 200) {
        alert.classList.add("error");

        if (httpr.responseText.length === 0) {
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

  sendDeleteAccount() {
    const httpr = new XMLHttpRequest();
    const url = "https://auth.veloren.net/delete_account";
    httpr.open("POST", url);
    httpr.send(JSON.stringify(this));

    const alert = document.getElementById("alertbox");
    alert.classList.add('hidden');
    alert.classList.remove('error');
    alert.classList.remove('success');

    httpr.onreadystatechange = function () {
      let alerttext = document.getElementById("alerttext");

      alert.classList.remove("hidden");

      if (httpr.status != 200) {
        alert.classList.add("error");

        if (httpr.responseText.length === 0) {
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
