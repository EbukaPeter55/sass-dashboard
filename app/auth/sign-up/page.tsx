'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from 'react';

import brandLogo from '../../../public/lawpavillion-logo.svg';
import {useAuth} from "@/app/contexts/AuthContext";
import {PasswordInput} from "@/components/ui/password-input";

export default function SignupPage() {
    const {signup} = useAuth();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        setIsSubmitting(true);

        // Basic validation
        if (!fullName || !email || !password) {
            alert('Please fill in all fields.');
            setIsSubmitting(false);
            return;
        }

        await signup(fullName, email, password);
        setIsSubmitting(false);
    };

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
                        Welcome! Please enter your details to create an account.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="fullName" className="mb-1 block text-sm font-medium">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="fullName"
                            placeholder="Enter Full Name"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                            id="email"
                            placeholder="Enter your email address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="mb-1 block text-sm font-medium"> {/* <--- Added htmlFor */}
                            Password <span className="text-red-500">*</span>
                        </label>
                        <PasswordInput
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <Link
                            href="/auth/login"
                            className="text-sm font-medium text-[var(--primary-colour)] hover:underline"
                        >
                            Already have an account? Login
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--primary-colour)] hover:bg-[#990000] text-white cursor-pointer"
                    >
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
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
