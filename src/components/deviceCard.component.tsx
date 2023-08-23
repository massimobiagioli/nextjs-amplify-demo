'use client'

import {Device} from "@/API";
import {Amplify, API, Auth} from "aws-amplify";
import {deleteDevice} from "@/graphql/mutations";
import awsExports from "@/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });
Auth.configure({ ...awsExports, ssr: true });

type DeviceCardProps = {
    device: Device
}

export default function DeviceCard({ device }: DeviceCardProps) {
    const deviceLink = `/devices/${device.id}`

    async function handleDelete() {
        const result = await API.graphql({
            query: deleteDevice,
            variables: {
                input: {
                    id: device.id,
                    _version: device._version
                }
            }
        })
        window.location.reload()
    }

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
                    <button className="btn btn-error" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}