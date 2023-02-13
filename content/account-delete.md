+++
title = "Delete an account"
description = "Delete an existing Veloren auth account"

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
    <div class="alertbox error" id="wasmErrorBox" style="display: none">
        <span class="alerttext">
                We're sorry but this page does not work without WebAssembly support.
                Please enable WebAssembly or use a different browser.
        </span>
    </div>
    <form onsubmit="window.postToBackendDeleteAccount(event)">
        <p>If you wish to remove your account from Veloren's auth system, fill out this form. <b>Please note the following limitations:</b></p>
        <ul>
            <li>This action is not reversible.</li>
            <li>We have no way to delete any characters from gameservers, you must do this yourself <em>before</em> deleting your account,
                otherwise those characters will remain on those servers with no way to be deleted.</li>
        </ul>
        <div id="alertbox" class="alertbox">
            <span id="alerttext" class="alerttext"></span>
            <button type="button" class="closebtn" onclick="window.closeAlert();">{{ icon(path='static/icons/cross.svg') }}</button>
        </div>
        <label>Username<input type="text" required name="username"></label>
        <label>Password<input type="password" required name="password"></label>
        <button type="submit" class="button-delete">Delete account</button>
    </form>
</div>
