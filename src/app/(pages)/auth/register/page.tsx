"use client";

import React, {
    useActionState,
    useState,
} from 'react';
import {
    User,
    Mail,
    Phone,
    Lock,
    Apple,
    Chrome,
} from 'lucide-react';
import Logo from "@/components/atoms/Logo";
import Button from "@/components/atoms/Button";
import {InputWithIcon, PasswordInput} from "@/components/atoms/Input";
import {customerRegister, RegisterFormState} from "@/app/(pages)/auth/register/actions";

const initialState: RegisterFormState = {
    message: '',
    errors: []
};

const Register: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [agreed, setAgreed] = useState(false);

    const [state, formAction, pending] = useActionState(customerRegister, initialState);

    return (
        <div className="mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-lg w-full max-w-md">
            {/* Header */}
            <div className="flex flex-col items-center">
                <Logo size={4}/>
                <h1 className="text-2xl font-bold text-gray-900 mt-4">Join WashUp</h1>
                <p className="text-sm text-gray-500 mt-1">
                    Create your account to get started
                </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-5" action={formAction}>
                {/* Full Name */}
                <div>
                    <label
                        htmlFor="fullName"
                        className="text-sm font-medium text-gray-700 block mb-1.5"
                    >
                        Full Name
                    </label>
                    <InputWithIcon
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        icon={<User size={18} className="text-gray-400"/>}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                {/* Email Address */}
                <div>
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 block mb-1.5"
                    >
                        Email Address
                    </label>
                    <InputWithIcon
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        icon={<Mail size={18} className="text-gray-400"/>}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700 block mb-1.5"
                    >
                        Phone Number
                    </label>
                    <InputWithIcon
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        icon={<Phone size={18} className="text-gray-400"/>}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-700 block mb-1.5"
                    >
                        Password
                    </label>
                    <PasswordInput
                        id="password"
                        name="password"
                        placeholder="Create a password"
                        icon={<Lock size={18} className="text-gray-400"/>}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={8}
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1.5">
                        Password must be at least 8 characters long
                    </p>
                </div>

                {/* Form State */}
                <p className="text-base text-red-600">
                    {
                        state.errors && state.errors.length != 0 && (
                            <span className="font-semibold">Invalid Input:</span>
                        )
                    }
                    {
                        state?.errors?.map((e, index) => (
                            <span key={index} className="block"> • {e} </span>
                        ))
                    }

                    { state.message && (
                        <span className="font-semibold">{ state.message }</span>
                    )}
                </p>

                {/* Checkbox */}
                <div className="flex items-start space-x-2 pt-2">
                    <input
                        id="agree"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-0.5"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        // required
                    />
                    <label htmlFor="agree" className="text-sm text-gray-600">
                        I agree to the{' '}
                        <a href="#" className="font-medium text-indigo-600 hover:underline">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="font-medium text-indigo-600 hover:underline">
                            Privacy Policy
                        </a>
                    </label>
                </div>

                {/* Create Account Button */}
                <Button
                    variant="primary"
                    type="submit"
                    className="w-full mt-6! py-3"
                    disabled={pending}
                >
                    Create Account
                </Button>
            </form>

            {/* Separator */}
            <div className="flex items-center my-6">
                <hr className="grow border-gray-200"/>
                <span className="mx-4 text-sm text-gray-500">Or continue with</span>
                <hr className="grow border-gray-200"/>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                    variant="secondary"
                    icon={<Chrome size={18}/>}
                    className="py-3"
                >
                    Google
                </Button>
                <Button
                    variant="secondary"
                    icon={<Apple size={18}/>}
                    className="py-3"
                >
                    Apple
                </Button>
            </div>

            {/* Sign In Link */}
            <p className="text-sm text-center text-gray-600 mt-8">
                Already have an account?{' '}
                <a href="/auth/login" className="font-medium text-indigo-600 hover:underline">
                    Sign In
                </a>
            </p>
        </div>
    );
};

export default Register;
