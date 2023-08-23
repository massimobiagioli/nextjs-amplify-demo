import awsExports from "@/aws-exports";
import {Amplify, Auth, withSSRContext} from "aws-amplify";
import {headers} from "next/headers";
import {listDevices} from "@/graphql/queries";
import {redirect} from "next/navigation";
import {Device} from "@/API";
import ListDevices from "@/components/listDevices.component";

Amplify.configure({...awsExports, ssr: true});
Auth.configure({...awsExports, ssr: true});

async function fetchDevices(): Promise<Device[]> {
    try {
        const req = {
            headers: {
                cookie: headers().get('cookie'),
            },
        };
        const SSR = withSSRContext({req})
        const { data } = await SSR.API.graphql({
            query: listDevices,
            variables: {
                filter: {
                    _deleted: {
                        ne: true
                    }
                }
            }
        })

        return data.listDevices.items as Device[];
    } catch (e) {
        redirect("/");
    }
}

export default async function Devices() {
    const devices = await fetchDevices();

    return (
        <ListDevices devices={devices} />
    );
}