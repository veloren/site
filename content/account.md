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
                <div id="AlertBox" class="alertbox hidden">
                    <span class="closebtn" onclick="window.close_alert();">&times;</span>
                    <span class="alerttext" id="alerttext">.</span>
                </div>
                <div class="header">Enter account details</div>
                <input id="username" type="text" name="username" placeholder="Username">
                <input id="password" type="password" name="password" placeholder="Password">
                <input id="password_repeat" type="password" placeholder="Repeat Password">
                <span class=""><b>NOTE:</b> We <b><i>cannot</i></b> reset your account if you forgot your password.
                Make sure it's <b><i><a href="https://www.xkcd.com/936/" target="_blank">secure</a> and write it down</i></b>.</span>
                <button type='button' onclick="window.post_to_backend();">I acknowledge and want to register</button>
            </div>
        </form>
    </form>
</div>
