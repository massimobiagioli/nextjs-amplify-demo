import {Auth} from "aws-amplify";
import awsExports from "@/aws-exports";
import { signUp } from "./signUp";
import { confirmSignUp } from "./confirmSignUp";
import { signIn } from "./signIn";
import { signOut } from "./signOut";

Auth.configure({...awsExports, ssr: true});

export {
    signUp,
    confirmSignUp,
    signIn,
    signOut
}