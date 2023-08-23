'use client'

import awsExports from "@/aws-exports";
import {Amplify, Auth} from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';
import {Authenticator} from "@aws-amplify/ui-react";
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
                        <h1 className="text-lg">NextJs Amplify Demo</h1>

                        <div className="mt-2">
                            <a className="link" href="/devices">List Devices</a>
                        </div>
                    </div>
                </>
            )}
        </Authenticator>
    );
}
