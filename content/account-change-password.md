+++
title = "Change account password"
description = "Change the password of an existing Veloren account"

weight = 0
template = "account.html"
+++

<div class="account">
    <noscript>
        <div class="alertbox error">
            <span class="alerttext">
                We're sorry but this page does not work properly without JavaScript.
                Please enable JavaScript to continue.
            </span>
        </div>
        <style type="text/css">
            .account form { display: none }
        </style>
    </noscript>
    <form onsubmit="window.postToBackendChangePassword(event)">
        <div id="alertbox" class="alertbox">
            <span id="alerttext" class="alerttext"></span>
            <button type="button" class="closebtn" onclick="window.closeAlert();">{{ icon(path='static/icons/cross.svg') }}</button>
        </div>
        <label>Username<input type="text" required name="username"></label>
        <label>Current Password<input type="password" required name="current_password"></label>
        <label>New Password<input type="password" required name="new_password"></label>
        <button type="submit" class="button-delete">Change password</button>
    </form>
</div>
