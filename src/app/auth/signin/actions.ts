'use server'

import {signIn} from "@/lib/cognito";

export async function handleSignIn(formData: FormData) {
    const usernameValue = formData.get('username')
    const passwordValue = formData.get('password')

    if (!usernameValue) {
        console.error('Missing required fields')
        return
    }

    const signInResult = await signIn({
        username: usernameValue.toString(),
        password: passwordValue?.toString() || ''
    })

    if (!signInResult) {
        console.error('Failed to sign in')
    }
}