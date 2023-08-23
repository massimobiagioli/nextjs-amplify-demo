'use client'

import awsExports from "@/aws-exports";
import {Amplify, Auth} from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({...awsExports, ssr: true});
Auth.configure({...awsExports, ssr: true});

export default function Home() {
    return (
        <div className="m-4">
            <h1 className="text-lg">NextJs Amplify Demo</h1>

            <div className="mt-2">
                <a className="link" href="/devices">List Devices</a>
            </div>
        </div>
    );
}
