'use server'

import {signUp} from "@/lib/cognito";

export async function handleSignUp(formData: FormData) {
    const usernameValue = formData.get('username')
    const emailValue = formData.get('email')
    const passwordValue = formData.get('password')
    const confirmPasswordValue = formData.get('confirm-password')

    if (!usernameValue || !emailValue || !passwordValue || !confirmPasswordValue) {
        console.error('Missing required fields')
        return
    }

    if (passwordValue !== confirmPasswordValue) {
        console.error('Passwords do not match')
        return
    }

    const signUpResult = await signUp({
        username: usernameValue.toString(),
        email: emailValue.toString(),
        password: passwordValue.toString()
    })

    if (!signUpResult) {
        console.error('Failed to sign up')
    }
}