+++
title = "Register an account to play online!"
description = "Register an account to play online!"

weight = 0
template = "account.html"
+++

<div class="account">
    <div class="center">
        <noscript>
            <div class="alertbox error no-js">
                <span class="alerttext">
                    We're sorry but the Veloren registration form doesn't work properly without JavaScript enabled.
                    Please enable it to continue.
                </span>
            </div>
            <style type="text/css">
                .login { display: none }
            </style>
        </noscript>
        <form class="login">
            <div class="container">
                <div id="alertbox" class="alertbox hidden">
                    <span class="closebtn" onclick="window.closeAlert();">&times;</span>
                    <span id="alerttext" class="alerttext" >.</span>
                </div>
                <div class="header">Enter account details</div>
                <input id="username" type="text" name="username" placeholder="Username">
                <input id="password" type="password" name="password" placeholder="Password">
                <input id="password_repeat" type="password" placeholder="Repeat Password">
                <p><strong>NOTE:</strong> We <strong>cannot</strong> reset your account if you forget your password.
                Make sure it's <a href="https://www.xkcd.com/936/" target="_blank">secure</a> and write it down.</p>
                <button type='button' onclick="window.postToBackend();">I acknowledge and want to register</button>
            </div>
        </form>
    </form>
</div>
