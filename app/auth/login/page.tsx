'use client';

import Image from 'next/image';
import Link from 'next/link';
import apple from '../../../public/auth/apple.png';
import facebook from '../../../public/auth/facebook.png';
import github from '../../../public/auth/github.png';
import google from '../../../public/auth/google.png';
import brandLogo from '../../../public/lawpavillion-logo.svg';
import {useRouter} from 'next/navigation'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";


export default function Login() {
    const router = useRouter()


    const handleLogin = () => {
        router.push('/dashboard')
    }


    return (
        <>
            <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 px-4">
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
                        <h1 className="text-2xl font-semibold mt-4">
                            Login to your account
                        </h1>
                        <p className="text-sm text-gray-500">
                            Welcome back! Please enter your details.
                        </p>
                    </div>

                    {/* Social Buttons */}
                    <div className="space-y-3">
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2"
                        >
                            <Image
                                src={google}
                                alt="google-icon"
                                className="w-[1rem] h-[1rem]"
                            />{' '}
                            Continue with Google
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2"
                        >
                            <Image
                                src={facebook}
                                alt="facebook-icon"
                                className="w-[1rem] h-[1rem]"
                            />{' '}
                            Continue with Facebook
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2"
                        >
                            <Image
                                src={apple}
                                alt="apple-icon"
                                className="w-[1rem] h-[1rem]"
                            />{' '}
                            Continue with Apple
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2"
                        >
                            <Image
                                src={github}
                                alt="github-icon"
                                className="w-5 h-5 text-gray-800"
                            />{' '}
                            Continue with Github
                        </Button>
                    </div>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="h-px flex-1 bg-gray-200"/>
                        <span className="mx-4 text-sm text-gray-400">or</span>
                        <div className="h-px flex-1 bg-gray-200"/>
                    </div>

                    {/* Email / Password */}
                    <form className="space-y-4">
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
                                href="#"
                                className="text-sm font-medium text-[var(--primary-colour)] hover:underline"
                            >
                                Forgot Password
                            </Link>
                        </div>

                        <Button
                            onClick={handleLogin}
                            type="button"
                            className="w-full bg-[var(--primary-colour)] hover:bg-[#990000] text-white cursor-pointer"
                        >
                            Login
                        </Button>

                        <p className="text-center text-xs text-gray-500">
                            By clicking sign in, you agree to our{' '}
                            <Link href="#" className="font-semibold text-[var(--primary-colour)]">
                                Terms and Condition
                            </Link>{' '}
                            and{' '}
                            <Link href="#" className="font-semibold text-[var(--primary-colour)]">
                                Privacy Statement
                            </Link>
                        </p>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="h-px flex-1 bg-gray-200"/>
                        <span className="mx-4 text-sm text-gray-400">or</span>
                        <div className="h-px flex-1 bg-gray-200"/>
                    </div>

                    <div className="space-y-3">
                        <Button variant="outline" className="w-full">
                            Continue with SSO
                        </Button>
                        <Button variant="outline" className="w-full">
                            Continue with Passkey
                        </Button>
                    </div>
                </div>
                <div className="text-sm text-[#232323] mt-4 font-normal">
                    Don’t have an account?
                    <Link href="/auth/sign-up" className="text-[var(--primary-colour)] font-bold">
                        {' '}
                        Create a free account
                    </Link>
                </div>
            </div>
        </>
    );
}
