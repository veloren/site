+++
title = "Change username"
description = "Change the username of a Veloren account"
+++

<div class="account">
  {{ jserror() }}
  <p>Please, keep in mind that:</p>
  <ul>
    <li>Usernames can only be changed every 30 days</li>
  </ul>
  <form onsubmit="window.postToBackendChangeUsername(event)">
    <div id="alertbox" class="alertbox">
      <span id="alerttext" class="alerttext"></span>
      <button type="button" class="closebtn" onclick="window.closeAlert()">{{ icon(path='static/icons/cross.svg') }}</button>
    </div>
    <label>Current Username<input type="text" required name="old_username"></label>
    <label>New username<input type="text" required name="new_username" onchange="window.fieldRepeatValidity('new_username', 'Usernames do not match.')"></label>
    <label>Confirmn New username<input type="text" required name="new_username_repeat" onchange="window.fieldRepeatValidity('new_username', 'Usernames do not match.')"></label>
    <label>Password<input type="password" required name="password"></label>
    <button type="submit" class="button-change">Change Username</button>
  </form>
  <a id="go-back" href="/account/create-account">Go back</a>
</div>
