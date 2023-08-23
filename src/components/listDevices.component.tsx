'use client';

import {Authenticator} from "@aws-amplify/ui-react";
import DeviceCard from "@/components/deviceCard.component";
import {Device} from "@/API";
import Navbar from "@/components/navbar.component";

type ListDevicesProps = {
    devices: Device[]
}

export default function ListDevices({ devices }: ListDevicesProps) {
    return (
        <Authenticator>
            {({signOut, user}) => (
                <>
                    <Navbar user={user} signOut={signOut} />

                    <div className="m-4">
                        <h1 className="text-lg">My Devices</h1>

                        <div className="mt-2">
                            <a className="link" href="/devices/create">Create Device</a>
                        </div>

                        {devices.length == 0 ? (
                            <div className="text-sm m-4">No devices found.</div>
                        ) : (
                            <div className="mt-2 flex flex-row flex-wrap gap-4">
                                {devices.map((device) => (
                                    <DeviceCard device={device} key={device.id} />
                                ))}
                            </div>
                        )}

                        <div className="mt-2">
                            <a className="link" href="/">Back to Home</a>
                        </div>
                    </div>
                </>
            )}
        </Authenticator>
    )
}
