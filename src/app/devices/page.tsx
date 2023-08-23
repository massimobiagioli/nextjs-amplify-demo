'use client'

import {Authenticator} from "@aws-amplify/ui-react";
import awsExports from "@/aws-exports";
import {Amplify, Auth} from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';
import Navbar from "@/components/navbar.component";
import ListDevices from "@/components/listDevices.component";

Amplify.configure({...awsExports, ssr: true});
Auth.configure({...awsExports, ssr: true});

export default function Home() {
    return (
        <Authenticator>
            {({signOut, user}) => (
                <div>
                    <Navbar user={user} signOut={signOut} />
                    <ListDevices user={user} />
                </div>
            )}
        </Authenticator>
    );
}