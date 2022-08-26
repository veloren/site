+++
title = "Delete an account"
description = "Delete an existing Veloren auth account"

weight = 0
template = "account.html"
+++

<div class="account">
    <div class="center">
        <form class="delete">
            <div class="container">
                <h4>Delete Account</h4>
                <p>If you wish to remove your account from Veloren's auth system, fill out this form. <b>Please note the following limitations:</b></p>
                <ul style="text-align: start;">
                    <li>This action is not reversible.</li>
                    <li>We have no way to delete any characters from gameservers, you must do this yourself <em>before</em> deleting your account,
                        otherwise those characters will remain on those servers with no way to be deleted.</li>
                </ul>
                <div id="alertbox" class="alertbox hidden">
                    <span class="closebtn" onclick="window.closeAlert();">&times;</span>
                    <span id="alerttext" class="alerttext" >.</span>
                </div>
                <input id="username" type="text" name="username" placeholder="Username">
                <input id="password" type="password" name="password" placeholder="Password">
                <button type='button' class="button-delete" onclick="window.postToBackendDeleteAccount();">Delete Account</button>
            </div>
        </form>
    </form>
</div>
