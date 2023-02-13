+++
title = "Register an account to play online!"
description = "Register an account to play online!"

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
    <form onsubmit="window.postToBackendNewAccount(event)">
        <div id="alertbox" class="alertbox">
            <span id="alerttext" class="alerttext"></span>
            <button type="button" class="closebtn" onclick="window.closeAlert();">{{ icon(path='static/icons/cross.svg') }}</button>
        </div>
        <label>Username<input type="text" minlength="3" maxlength="32" required name="username"></label>
        <label>Password<input type="password" required name="password" onchange="window.passwordRepeatValidity()"></label>
        <label>Repeat password<input type="password" required name="password_repeat" onchange="window.passwordRepeatValidity()"></label>
        <p>Please note, we <b>cannot</b> reset your account if you forget your password.
           Make sure it's <a href="https://www.xkcd.com/936/" target="_blank">secure</a> and write it down.</p>
        <button type="submit">Register account</button>
    </form>
    <a href="/account-delete">I want to delete an existing account</a>
</div>
