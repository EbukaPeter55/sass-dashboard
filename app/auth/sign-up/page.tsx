'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import brandLogo from '../../../public/lawpavillion-logo.svg';

export default function SignupPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
                {/* Logo */}
                <div className="mb-6 flex flex-col items-center space-y-2">
                    <Image
                        src={brandLogo}
                        alt="Metallic JS"
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 50vw, 178.64px"
                        className="w-[11.165rem] h-[2rem]"
                        priority
                    />
                    <h1 className="text-2xl font-semibold mt-4">Create account</h1>
                    <p className="text-sm text-gray-500">
                        Welcome back! Please enter your details.
                    </p>
                </div>

                {/* Email / Password */}
                <form className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input placeholder="Enter Full Name" type="text"/>
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input placeholder="Enter your email address" type="email"/>
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <Input placeholder="Enter your password" type="password"/>
                    </div>
                    <div className="flex justify-end">
                        <Link
                            href="/auth/login"
                            className="text-sm font-medium text-[var(--primary-colour)] hover:underline"
                        >
                            Login
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-[var(--primary-colour)] hover:bg-[#990000] text-white cursor-pointer"
                    >
                        Create Account
                    </Button>

                    <p className="text-center text-xs text-gray-500">
                        By clicking create account, you agree to our{' '}
                        <Link href="#" className="font-semibold text-[var(--primary-colour)]">
                            Terms and Condition
                        </Link>{' '}
                        and{' '}
                        <Link href="#" className="font-semibold text-[var(--primary-colour)]">
                            Privacy Statement
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
