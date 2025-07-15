'use client';

import Image from 'next/image';
import Link from 'next/link';
import apple from '../../../public/auth/apple.png';
import facebook from '../../../public/auth/facebook.png';
import github from '../../../public/auth/github.png';
import google from '../../../public/auth/google.png';
import brandLogo from '../../../public/lawpavillion-logo.svg';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from 'react';
import {useAuth} from "@/app/contexts/AuthContext";
import {PasswordInput} from "@/components/ui/password-input";

export default function Login() {
    const {login} = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await login(email, password);
        setIsSubmitting(false);
    };

    return (
        <>
            {/* Main page wrapper background */}
            <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
                <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl
                                dark:bg-gray-800 dark:border-gray-700">
                    <div className="mb-6 flex flex-col items-center space-y-2">
                        <Image
                            src={brandLogo}
                            alt="LawPavilion Logo"
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 50vw, 178.64px"
                            className="w-[11.165rem] h-[2rem]"
                            priority
                        />
                        <h1 className="text-2xl font-semibold mt-4 text-slate-800 dark:text-gray-100">
                            Login to your account
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                            Welcome back! Please enter your details.
                        </p>
                    </div>

                    {/* Social Buttons (These would also need integration with a real OAuth provider) */}
                    <div className="space-y-3">
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2
                                       dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
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
                            className="w-full flex items-center justify-center gap-2
                                       dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
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
                            className="w-full flex items-center justify-center gap-2
                                       dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
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
                            className="w-full flex items-center justify-center gap-2
                                       dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                        >
                            <Image
                                src={github}
                                alt="github-icon"
                                className="w-5 h-5 text-gray-800 dark:text-gray-100"
                            />{' '}
                            Continue with Github
                        </Button>
                    </div>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-600"/>
                        <span className="mx-4 text-sm text-gray-400 dark:text-gray-400">or</span>
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-600"/>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email"
                                   className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <Input
                                id="email"
                                placeholder="Enter your email address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:dark:border-red-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <PasswordInput
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:dark:border-red-500"
                            />
                        </div>
                        <div className="flex justify-end">
                            <Link
                                href="#"
                                className="text-sm font-medium text-[var(--primary-colour)] hover:underline dark:text-[var(--primary-colour)]"
                            >
                                Forgot Password
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[var(--primary-colour)] hover:bg-[#990000] text-white cursor-pointer
                                       dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
                        >
                            {isSubmitting ? 'Logging In...' : 'Login'}
                        </Button>

                        <p className="text-center text-xs text-gray-500 dark:text-gray-300">
                            By clicking sign in, you agree to our{' '}
                            <Link href="#"
                                  className="font-semibold text-[var(--primary-colour)] dark:text-[var(--primary-colour)]">
                                Terms and Condition
                            </Link>{' '}
                            and{' '}
                            <Link href="#"
                                  className="font-semibold text-[var(--primary-colour)] dark:text-[var(--primary-colour)]">
                                Privacy Statement
                            </Link>
                        </p>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-600"/>
                        <span className="mx-4 text-sm text-gray-400 dark:text-gray-400">or</span>
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-600"/>
                    </div>

                    <div className="space-y-3">
                        <Button variant="outline" className="w-full
                                   dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600">
                            Continue with SSO
                        </Button>
                        <Button variant="outline" className="w-full
                                   dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600">
                            Continue with Passkey
                        </Button>
                    </div>
                </div>
                {/* Bottom text and link */}
                <div className="text-sm text-[#232323] mt-4 font-normal dark:text-gray-300">
                    Don’t have an account?
                    <Link href="/auth/sign-up"
                          className="text-[var(--primary-colour)] font-bold dark:text-[var(--primary-colour)]">
                        {' '}
                        Create a free account
                    </Link>
                </div>
            </div>
        </>
    );
}
