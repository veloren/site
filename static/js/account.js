import init, { hash } from "./argon2wasm.js";

const wasmSupported = (typeof WebAssembly === "object");

if (wasmSupported) {
	init();
} else {
	document.querySelector(".account form").style.display = "none";
	document.getElementById("wasmErrorBox").style.display = "";
}

const Alert = {
  alertElement: document.getElementById("alertbox"),
  alertTextElement: document.getElementById("alerttext"),
  success(message) {
    Alert.alertElement.className = "alertbox success";
    Alert.alertTextElement.textContent = message;
  },
  error(message) {
    Alert.alertElement.className = "alertbox error";
    Alert.alertTextElement.textContent = message;
  },
  close() {
    Alert.alertElement.className = "alertbox";
    Alert.alertTextElement.textContent = "";
  },
};

window.closeAlert = Alert.close;

window.passwordRepeatValidity = function () {
  const password = document.querySelector("input[name=password]");
  const password_repeat = document.querySelector("input[name=password_repeat]");
  if (password_repeat.value === password.value) {
    password_repeat.setCustomValidity("");
  } else {
    password_repeat.setCustomValidity("Passwords do not match.");
  }
};

const getFormData = () => new FormData(document.querySelector("form"));

window.postToBackendNewAccount = function (event) {
  event.preventDefault();
  RegisterPayload.fromFormData(getFormData()).sendRegisterAccount();
};

window.postToBackendDeleteAccount = function (event) {
  event.preventDefault();
  RegisterPayload.fromFormData(getFormData()).sendDeleteAccount();
};

class RegisterPayload {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  /**
   * @param {FormData} formData
   * @returns {RegisterPayload}
   */
  static fromFormData(formData) {
    const { username, password } = Object.fromEntries(formData);
    const hashedPassword = hash(password);
    return new this(username, hashedPassword);
  }

  get fetchOptions() {
    return { method: "POST", body: JSON.stringify(this) };
  }

  sendRegisterAccount() {
    const url = "https://auth.veloren.net/register";
    fetch(url, this.fetchOptions)
      .then((res) => {
        if (res.ok) {
          Alert.success("Successfully registered! You can now play Veloren!");
        } else {
          return res
            .text()
            .then((text) => Promise.reject(`Error ${res.status}: ${text}`));
        }
      })
      .catch((error) => Alert.error(error));
  }

  sendDeleteAccount() {
    const url = "https://auth.veloren.net/delete_account";
    fetch(url, this.fetchOptions)
      .then((res) => {
        if (res.ok) {
          Alert.success(
            "This account has successfully been deleted from Veloren's official authentication system."
          );
        } else {
          return res
            .text()
            .then((text) => Promise.reject(`Error ${res.status}: ${text}`));
        }
      })
      .catch((error) => Alert.error(error));
  }
}
