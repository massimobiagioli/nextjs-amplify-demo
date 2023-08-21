'use server'

import {confirmSignUp} from "@/lib/cognito/confirmSignUp";

export async function handleConfirmSignUp(formData: FormData) {
    const usernameValue = formData.get('username')
    const codeValue = formData.get('code')

    if (!usernameValue || !codeValue) {
        console.error('Missing required fields')
        return
    }

    const confirmSignUpResult = await confirmSignUp({
        username: usernameValue.toString(),
        code: codeValue.toString()
    })

    if (!confirmSignUpResult) {
        console.error('Failed to confirm sign up')
    }
}