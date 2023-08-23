'use client'

import {Authenticator} from "@aws-amplify/ui-react";
import awsExports from "@/aws-exports";
import {Amplify, Auth} from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';
import {DeviceUpdateForm} from "@/ui-components";
import {useParams} from "next/navigation";
import Navbar from "@/components/navbar.component";

Amplify.configure({...awsExports, ssr: true});
Auth.configure({...awsExports, ssr: true})

export default function UpdateDevice() {
    const params = useParams()
    const id = params.id as string

    function handleSuccess() {
        window.location.href = "/devices"
    }

    return (
        <Authenticator>
            {({signOut, user}) => (
                <>
                    <Navbar user={user} signOut={signOut} />

                    <div className="m-4">
                        <h1 className="text-lg">Update Device</h1>

                        <div className="m-4">
                            <DeviceUpdateForm id={id} onSuccess={handleSuccess}/>
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
