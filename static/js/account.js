// SPDX-FileCopyrightText: 2020 Imbris <imbrisf@gmail.com>
// SPDX-FileCopyrightText: 2020 Marcel Märtens
// SPDX-FileCopyrightText: 2022 Forest Anderson <forestkzanderson@gmail.com>
// SPDX-FileCopyrightText: 2022 Vechro
// SPDX-FileCopyrightText: 2023 Samtinel
// SPDX-FileCopyrightText: 2023 Crabman
// SPDX-FileContributor: hxztnxt
//
// SPDX-License-Identifier: Apache-2.0

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

window.postToBackendChangePassword = function (event) {
  event.preventDefault();
  ChangePasswordPayload.fromFormData(getFormData()).send();
};

class ChangePasswordPayload {
  constructor(username, currentPassword, newPassword) {
    this.username = username;
    this.current_password = currentPassword;
    this.new_password = newPassword
  }

  /**
   * @param {FormData} formData 
   * @returns {ChangePasswordPayload}
   */
  static fromFormData(formData) {
    const {username, current_password, new_password} = Object.fromEntries(formData);

    if (current_password === new_password) {
      Alert.error("Passwords are the same");
      throw new Error("Passwords are the same");
    }

    const hashedCurrentPassword = hash(current_password);
    const hashedNewPassword = hash(new_password);

    return new this(username, hashedCurrentPassword, hashedNewPassword);
  }

  get fetchOptions() {
    return { method: "POST", body: JSON.stringify(this) };
  }

  send() {
    const url = "https://auth.veloren.net/change_password";

    fetch(url, this.fetchOptions)
      .then(res => {
        if (res.ok) {
          Alert.success("Password changed succesfully");
        } else {
          return res
            .text()
            .then((text) => Promise.reject(`Error ${res.status}: ${text}`));
        }
      })
      .catch(err => Alert.error(err));
  }
}

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
