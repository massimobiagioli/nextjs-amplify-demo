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

                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content text-left">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">Welcome to Demo</h1>
                                <a className="btn btn-neutral mt-8" href="/devices">View My Devices</a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Authenticator>
    );
}
