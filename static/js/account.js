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

window.fieldRepeatValidity = function(field_name, m) {
  const field = document.querySelector(`input[name=${field_name}]`);
  const field_repeat = document.querySelector(`input[name=${field_name}_repeat]`);
  if (field_repeat.value === field.value) {
    field_repeat.setCustomValidity("");
  } else {
    field_repeat.setCustomValidity(m);
  }
};

const getFormData = () => new FormData(document.querySelector("form"));

window.postToBackendNewAccount = function(event) {
  event.preventDefault();
  RegisterPayload.fromFormData(getFormData()).sendRegisterAccount();
};

window.postToBackendDeleteAccount = function(event) {
  event.preventDefault();
  RegisterPayload.fromFormData(getFormData()).sendDeleteAccount();
};

window.postToBackendChangePassword = function(event) {
  event.preventDefault();
  ChangePasswordPayload.fromFormData(getFormData()).send();
};
window.postToBackendChangeUsername = function(event) {
  event.preventDefault();
  ChangeUsernamePayload.fromFormData(getFormData()).send();
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
    const { username, current_password, new_password } = Object.fromEntries(formData);

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

class ChangeUsernamePayload {
  constructor(oldUsername, newUsername, password) {
    this.old_username = oldUsername;
    this.new_username = newUsername;
    this.password = password;
  }

  /**
   * @param {FormData} formData
   * @returns {ChangeUsernamePayload}
   */
  static fromFormData(formData) {
    const { old_username, new_username, password } = Object.fromEntries(formData);

    if (new_username === old_username) {
      Alert.error("Usernames are the same");
      throw new Error("Usernames are the same");
    }

    const hashedPassword = hash(password);

    return new this(old_username, new_username, hashedPassword);
  }

  get fetchOptions() {
    return { method: "POST", body: JSON.stringify(this) };
  }

  send() {
    const url = "https://auth.veloren.net/change_username";

    fetch(url, this.fetchOptions)
      .then(res => {
        if (res.ok) {
          Alert.success("Username changed succesfully");
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

document.querySelectorAll(".js-enable").forEach(element => element.disabled = false);
