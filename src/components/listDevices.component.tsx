'use client';

import DeviceCard from "@/components/deviceCard.component";
import {Device} from "@/API";

type ListDevicesProps = {
    devices: Device[]
}

export default function ListDevices({ devices }: ListDevicesProps) {
    return (
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
        </div>
    )
}
