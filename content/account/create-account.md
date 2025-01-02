+++
title = "Create a Veloren account"
description = "Sign up to play Veloren online!"
+++

<div class="account">
  {{ jserror() }}
  {{ wasmerror() }}
  <p>Creating an official account allows you to play on most Veloren multiplayer servers.</p>
  <form onsubmit="window.postToBackendNewAccount(event)">
    <div id="alertbox" class="alertbox">
      <span id="alerttext" class="alerttext"></span>
      <button type="button" class="closebtn" onclick="window.closeAlert()">{{ icon(path='static/icons/cross.svg') }}</button>
    </div>
    <label>Username<input type="text" minlength="3" maxlength="32" required name="username"></label>
    <label>Password<input type="password" required name="password" onchange="window.fieldRepeatValidity('password', 'Passwords do not match.')"></label>
    <label>Confirm password<input type="password" required name="password_repeat" onchange="window.fieldRepeatValidity('password', 'Passwords do not match.')"></label>
    <button type="submit" class="js-enable" disabled="disabled">Sign up</button>
  </form>
  <a href="/account/change-password">I want to change my password</a>
  <a href="/account/change-username">I want to change my username</a>
  <a href="/account/delete-account">I want to delete my account</a>
  <p>Please, note that <b>if you forget your password, it will not be possible to recover access to your account.</b></p>
  <p>Make sure to use a <a href="https://imgs.xkcd.com/comics/password_strength.png" target="_blank">secure password</a> and write it down. A collection of privacy-friendly apps to store passwords is available <a href="https://www.privacyguides.org/en/passwords/" target="_blank">here</a>.</p>
</div>
