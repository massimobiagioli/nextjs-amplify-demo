import {Auth} from "aws-amplify";

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
        console.log(auth);
        return true;
    } catch (error) {
        console.log("error signing up:", error);
        return false;
    }
}