'use client'

import {Authenticator} from "@aws-amplify/ui-react";
import awsExports from "@/aws-exports";
import {Amplify, Auth, AuthModeStrategyType} from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';
import Navbar from "@/components/navbar.component";
import {DeviceCreateForm} from "@/ui-components";

Amplify.configure({...awsExports, ssr: true});
Auth.configure({...awsExports, ssr: true, DataStore: {authModeStrategyType: AuthModeStrategyType.DEFAULT}})

export default function CreateDevice() {
    return (
        <Authenticator>
            {({signOut, user}) => (
                <>
                    <Navbar user={user} signOut={signOut} />

                    <div className="m-4">
                        <DeviceCreateForm />
                    </div>
                </>
            )}
        </Authenticator>
    );
}
