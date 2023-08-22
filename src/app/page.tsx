'use client'

import {Authenticator} from "@aws-amplify/ui-react";
import awsExports from "@/aws-exports";
import {Amplify, Auth} from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';
import Navbar from "@/components/navbar.component";

Amplify.configure({...awsExports, ssr: true});
Auth.configure({...awsExports, ssr: true});

export default function Home() {
    return (
        <Authenticator>
            {({signOut, user}) => (
                <>
                    <Navbar user={user} signOut={signOut} />

                    <div className="m-4">
                        <a href="/devices/create">Create Device</a>
                    </div>
                </>
            )}
        </Authenticator>
    );
}
