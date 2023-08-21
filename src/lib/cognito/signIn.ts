import { Auth } from 'aws-amplify';

type SignInParameters = {
    username: string;
    password: string;
};

export async function signIn({ username, password }: SignInParameters): Promise<boolean> {
    try {
        const user = await Auth.signIn(username, password);
        console.log(user);
        return true;
    } catch (error) {
        console.error('error signing in', error);
        return false;
    }
}