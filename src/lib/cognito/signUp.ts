import {Auth} from "aws-amplify";
import awsExports from "@/aws-exports";

Auth.configure({...awsExports, ssr: true});

export type SignupParams = {
    username: string;
    email: string;
    password: string;
}

export async function signUp({ username, email, password }: SignupParams): Promise<boolean> {
    try {
        const auth = await Auth.signUp({
            username,
            password,
            attributes: {
                email
            },
            autoSignIn: {
                enabled: true,
            },
        });
        return true;
    } catch (error) {
        console.error("Signup Error", error);
        return false;
    }
}