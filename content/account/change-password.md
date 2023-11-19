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
    <label>New password<input type="password" required name="new_password"></label>
    <button type="submit" class="button-change">Change password</button>
  </form>
  <a id="go-back" href="/account/create-account">Go back</a>
</div>
