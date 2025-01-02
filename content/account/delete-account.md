+++
title = "Delete a Veloren account"
+++

<div class="account">
  {{ jserror() }}
  {{ wasmerror() }}
  <p>Please, keep in mind that:</p>
  <ul>
    <li>This action is <b>irreversible</b>!</li>
    <li><b>Before deleting your Veloren account, make sure to have removed all the multiplayer characters associated with the account</b>. You need to remove them manually. Otherwise, your online characters will remain indefinitely on their respective servers.</li>
    <li>Account registrations with the same username will not be permitted for the following 30 days</li>
    <li>Usernames are saved for 30 days to prevent creation of new accounts with the same name</li>
  </ul>
  <form onsubmit="window.postToBackendDeleteAccount(event)">
    <div id="alertbox" class="alertbox">
      <span id="alerttext" class="alerttext"></span>
      <button type="button" class="closebtn" onclick="window.closeAlert();">{{ icon(path='static/icons/cross.svg') }}</button>
    </div>
    <label>Username<input type="text" required name="username"></label>
    <label>Password<input type="password" required name="password"></label>
    <button type="submit" class="button-delete js-enable" disabled="disabled">Delete account</button>
  </form>
  <a id="go-back" href="/account/create-account">Go back</a>
</div>
