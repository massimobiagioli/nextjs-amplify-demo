'use client'

import {Device} from "@/API";

type DeviceCardProps = {
    device: Device
}

export default function DeviceCard({ device }: DeviceCardProps) {
    const deviceLink = `/devices/${device.id}`

    return (
        <div className="card w-96 bg-blue-50">
            <div className="card-body">
                <a className="card-title link" href={deviceLink}>{device.name}</a>
                <p>Address: {device.address}</p>
                {device.is_active == true ? (
                    <div className="badge badge-success">active</div>
                ) : (
                    <div className="badge badge-error">inactive</div>
                )}
                <div className="card-actions justify-end">
                    <button className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    )
}