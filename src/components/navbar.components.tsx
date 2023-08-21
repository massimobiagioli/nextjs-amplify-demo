"use client"

import {
    withAuthenticator,
    WithAuthenticatorProps,
} from "@aws-amplify/ui-react";

function Navbar({signOut, user}: WithAuthenticatorProps) {
    return (
        <div>
            <h1>Logged in as {user?.username}.</h1>
            <div>
                <button onClick={signOut}>Sign out</button>
            </div>
        </div>
    );
}

export default withAuthenticator(Navbar);