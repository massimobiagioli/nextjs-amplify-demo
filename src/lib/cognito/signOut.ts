import { Auth } from 'aws-amplify';

export async function signOut(): Promise<boolean> {
    try {
        await Auth.signOut();
        return true;
    } catch (error) {
        console.error('error signing out: ', error);
        return false;
    }
}