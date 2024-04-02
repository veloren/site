+++
title = "Change password"
description = "Change the password of a Veloren account"
+++

<div class="account">
  {{ jserror() }}
  <form onsubmit="window.postToBackendChangePassword(event)">
    <div id="alertbox" class="alertbox">
      <span id="alerttext" class="alerttext"></span>
      <button type="button" class="closebtn" onclick="window.closeAlert()">{{ icon(path='static/icons/cross.svg') }}</button>
    </div>
    <label>Username<input type="text" required name="username"></label>
    <label>Current password<input type="password" required name="current_password"></label>
    <label>New password<input type="password" required name="new_password" onchange="window.fieldRepeatValidity('new_password', 'Passwords do not match.')"></label>
    <label>Confirm new password<input type="password" required name="new_password_repeat" onchange="window.fieldRepeatValidity('new_password', 'Passwords do not match.')"></label>
    <button type="submit" class="button-change">Change password</button>
  </form>
  <p>Please, note that <b>if you forget your password, it will not be possible to recover access to your account.</b></p>
  <p>Make sure to use a <a href="https://imgs.xkcd.com/comics/password_strength.png" target="_blank">secure password</a> and write it down. A collection of privacy-friendly apps to store passwords is available <a href="https://www.privacyguides.org/en/passwords/" target="_blank">here</a>.</p>
  <a id="go-back" href="/account/create-account">Go back</a>
</div>
