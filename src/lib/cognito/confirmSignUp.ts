import { Auth } from 'aws-amplify';

type ConfirmSignUpParameters = {
    username: string;
    code: string;
};

export async function confirmSignUp({ username, code }: ConfirmSignUpParameters): Promise<boolean> {
    try {
        await Auth.confirmSignUp(username, code);
        return true;
    } catch (error) {
        console.error('error confirming sign up', error);
        return false;
    }
}