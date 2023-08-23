import {AmplifyUser, AuthEventData} from "@aws-amplify/ui";

type NavbarProps = {
    user: AmplifyUser | undefined
    signOut: ((data?: (AuthEventData | undefined)) => void) | undefined
}

export default function Navbar({ user, signOut }: NavbarProps) {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <a className="normal-case text-xl">NextJs Amplify Demo</a>
            </div>
            <div className="flex-none">
                <span className="text-sm mr-2">{user?.username} ({user?.attributes?.email}</span>
                <a className="btn btn-sm" onClick={signOut}>Sign Out</a>
            </div>
        </div>
    )
}