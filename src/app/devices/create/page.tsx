'use client'

import {Authenticator} from "@aws-amplify/ui-react";
import awsExports from "@/aws-exports";
import {Amplify, Auth, AuthModeStrategyType} from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';
import {DeviceCreateForm} from "@/ui-components";
import Navbar from "@/components/navbar.component";

Amplify.configure({...awsExports, ssr: true});
Auth.configure({...awsExports, ssr: true, DataStore: {authModeStrategyType: AuthModeStrategyType.DEFAULT}})

export default function CreateDevice() {
    function handleSuccess() {
        window.location.href = "/devices"
    }

    return (
        <Authenticator>
            {({signOut, user}) => (
                <>
                    <Navbar user={user} signOut={signOut} />

                    <div className="m-4">
                        <h1 className="text-lg">Create Device</h1>

                        <div className="m-4">
                            <DeviceCreateForm onSuccess={handleSuccess} />
                        </div>

                        <div className="mt-2">
                            <a className="link" href="/devices">Back to Device List</a>
                        </div>
                    </div>
                </>
            )}
        </Authenticator>
    );
}
