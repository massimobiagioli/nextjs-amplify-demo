import { Auth } from 'aws-amplify';
import awsExports from "@/aws-exports";

Auth.configure({...awsExports, ssr: true});

type ConfirmSignUpParameters = {
    username: string;
    code: string;
};

export async function confirmSignUp({ username, code }: ConfirmSignUpParameters): Promise<boolean> {
    try {
        await Auth.confirmSignUp(username, code);
        return true;
    } catch (error) {
        console.log('error confirming sign up', error);
        return false;
    }
}