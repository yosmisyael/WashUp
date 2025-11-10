'use client';

import Logo from '@/components/atoms/Logo';
import {InputWithIcon, PasswordInput} from '@/components/atoms/Input';
import {Apple, Chrome, Lock, Mail} from 'lucide-react';
import Button from '@/components/atoms/Button';
import {clearFlashMessages, loginCustomer, LoginFormState} from '@/app/(auth)/customers/login/actions';
import React, {
    useActionState,
    useEffect,
} from 'react';

const initialState: LoginFormState = {}

type CustomerLoginFormProps = {
    flashMessage?: string;
}

export default function CustomerLoginForm({ flashMessage }: CustomerLoginFormProps) {
    const [state, formAction, pending] = useActionState(loginCustomer, initialState);

    useEffect(() => {
        if (flashMessage) clearFlashMessages()
            .then(() => {});
    }, [flashMessage]);

    return (
        <div className='mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-lg w-full max-w-md'>
            {/* Header */}
            <div className='flex flex-col items-center'>
                <Logo size={4} />
                <h1 className='text-2xl font-bold text-gray-900 mt-4'>Welcome Back</h1>
                <p className='text-sm text-gray-500 mt-1'>
                    Login to your account to get started
                </p>
            </div>

            {/* Flash message */}
            {flashMessage && (
                <div className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50">
                    {flashMessage}
                </div>
            )}

            {/* Form */}
            <form className='mt-8 space-y-5' action={formAction}>
                {/* Email Address */}
                <div>
                    <label
                        htmlFor='email'
                        className='text-sm font-medium text-gray-700 block mb-1.5'
                    >
                        Email Address
                    </label>
                    <InputWithIcon
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Enter your email'
                        icon={<Mail size={18} className='text-gray-400' />}
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor='password'
                        className='text-sm font-medium text-gray-700 block mb-1.5'
                    >
                        Password
                    </label>
                    <PasswordInput
                        id='password'
                        name='password'
                        placeholder='Create a password'
                        icon={<Lock size={18} className='text-gray-400' />}
                        minLength={8}
                        required
                    />
                    <p className='text-xs text-gray-500 mt-1.5'>
                        Password must be at least 8 characters long
                    </p>
                </div>

                {/* Form State */}
                <p className='text-base text-red-600'>
                    { state.errors && (
                        <span className='font-semibold'>Invalid Input:</span>
                    )}
                    {
                        state?.errors?.map((e, index) => (
                            <span key={index} className='block'> • {e} </span>
                        ))
                    }

                    { state.message && (
                        <span className='font-semibold'>{ state.message }</span>
                    )}
                </p>

                {/* Checkbox */}
                <div className='flex items-start space-x-2 pt-2'>
                    <input
                        id='agree'
                        type='checkbox'
                        className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-0.5'
                        required
                    />
                    <label htmlFor='agree' className='text-sm text-gray-600'>
                        Remember me
                    </label>
                </div>

                {/* Create Account Button */}
                <Button
                    disabled={pending}
                    variant='primary'
                    type='submit'
                    className='w-full !mt-6 py-3'
                >
                    Sign In
                </Button>
            </form>

            {/* Separator */}
            <div className='flex items-center my-6'>
                <hr className='flex-grow border-gray-200' />
                <span className='mx-4 text-sm text-gray-500'>Or continue with</span>
                <hr className='flex-grow border-gray-200' />
            </div>

            {/* Social Logins */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <Button
                    variant='secondary'
                    icon={<Chrome size={18} />}
                    className='py-3'
                >
                    Google
                </Button>
                <Button
                    variant='secondary'
                    icon={<Apple size={18} />}
                    className='py-3'
                >
                    Apple
                </Button>
            </div>

            {/* Sign In Link */}
            <p className='text-sm text-center text-gray-600 mt-8'>
                Didn&#39;t have an account yet?{' '}
                <a href='/customers/register' className='font-medium text-indigo-600 hover:underline'>
                    Sign Up
                </a>
            </p>
        </div>
    );
}