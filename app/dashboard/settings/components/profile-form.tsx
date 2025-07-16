'use client';

import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from '@/components/ui/form';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import toast from 'react-hot-toast';
import {User} from "@/app/dashboard/settings/settings-types";
import {getUserFromLocalStorage, saveUserToLocalStorage} from "@/app/utils/local-storage-utils";
import {PasswordInput} from "@/components/ui/password-input";

const profileFormSchema = z.object({
    fullName: z.string().min(2, {
        message: 'Full Name must be at least 2 characters.',
    }).max(50, {
        message: 'Name must not be longer than 50 characters.',
    }).optional().or(z.literal('')),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    password: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm() {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    useEffect(() => {
        const user = getUserFromLocalStorage();
        if (user) {
            setCurrentUser(user);
            form.reset({
                fullName: user.fullName || '',
                email: user.email,
                password: user.password || '',
            });
        } else {
            toast.error("No user found. Please sign up or log in first.");
        }
    }, [form]);

    function onSubmit(data: ProfileFormValues) {
        if (!currentUser) {
            toast.error("No user to update. Please log in.");
            return;
        }

        const updatedUser: User = {
            ...currentUser,
            fullName: data.fullName || undefined,
            email: data.email,
            password: data.password || undefined,
        };

        saveUserToLocalStorage(updatedUser);
        setCurrentUser(updatedUser);
        toast.success("Your profile has been successfully updated.");
    }

    return (
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                    Update your account&apos;s profile information.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your name" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="your.email@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="Leave blank to keep current" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Leave blank if you don&apos;t want to change your password.
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button
                            className="
                                bg-[var(--primary-colour)]
                                hover:bg-[var(--primary-colour)]
                                cursor-pointer
                                text-white
                                dark:bg-primary
                                dark:text-primary-foreground
                                dark:hover:bg-primary/90
                            "
                            type="submit"
                        >
                            Update profile
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
