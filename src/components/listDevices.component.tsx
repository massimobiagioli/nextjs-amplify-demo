'use client'

import {useEffect, useState} from "react";
import {Device as DeviceModel} from "@/models";
import {API, DataStore} from "aws-amplify";
import {AmplifyUser} from "@aws-amplify/ui";
import {listDevices} from "@/graphql/queries";
import {Device, ListDevicesQuery} from "@/API";
import {GraphQLQuery} from "@aws-amplify/api";
import DeviceCard from "@/components/deviceCard.component";

type ListDevicesProps = {
    user: AmplifyUser | undefined
}

export default function ListDevices({ user }: ListDevicesProps) {
    const [devices, setDevices] = useState<Device[]>([])

    const fetchDevices = async () => {
        //const deviceData = await DataStore.query(Device)  // Not filter by owner !!!
        const result = await API.graphql<GraphQLQuery<ListDevicesQuery>>({ query: listDevices })
        const deviceData: Device[] = (result?.data?.listDevices?.items || []).map((device) => {
            return {
                __typename: 'Device',
                id: device?.id || '',
                name: device?.name || '',
                owner: device?.owner || '',
                createdAt: device?.createdAt || '',
                updatedAt: device?.updatedAt || '',
                address: device?.address || '',
                is_active: device?.is_active || false,
                _version: device?._version || 0,
                _lastChangedAt: device?._lastChangedAt || 0,
            }
        })
        setDevices(deviceData)
    }

    useEffect(() => {
        fetchDevices().then(() => {})
        const subscription = DataStore.observe(DeviceModel).subscribe(() => fetchDevices())
        return () => {
            subscription.unsubscribe()
        }
    }, [devices])

    return (
        <div className="m-4">
            <h1 className="text-lg">My Devices</h1>

            <div className="mt-2">
                <a className="link" href="/devices/create">Create Device</a>
            </div>

            <div className="mt-2 flex flex-row flex-wrap gap-4">
                {devices.map((device) => (
                    <DeviceCard device={device} key={device.id} />
                ))}
            </div>
        </div>
    )
}