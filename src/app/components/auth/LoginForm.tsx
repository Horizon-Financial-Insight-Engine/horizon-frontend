'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

// import { useLoginMutation } from '@/store/api/horizonApi';
// import { useAppDispatch } from '@/store/hook'; 
// import { setCredentials } from '@/store/features/auth/authSlice'; 
// import { useRouter } from 'next/navigation';

const LoginForm: React.FC<{ onSwitchTab: (tab: 'register') => void }> = ({ onSwitchTab }) => {
    // const router = useRouter();
    // const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    // const [login, { isLoading, error }] = useLoginMutation(); 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // try {
        //     const result = await login({ email, password }).unwrap(); 
        //     dispatch(setCredentials({ ... }));
        //     router.push('/'); 
        // } catch (err) { /* ... */ }
        console.log('Logging in with:', { email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-8">
            {/* Title */}
            <div className="flex flex-col gap-3">
                <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    Welcome Back
                </p>
                <p className="text-gray-600 dark:text-[#92a4c9] text-base font-normal leading-normal">
                    Enter your credentials to access your dashboard.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {/* Email Input */}
                <label className="flex flex-col flex-1">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">Email</p>
                    <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg
                        text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50
                        border-gray-300 dark:border-[#324467] bg-white dark:bg-[#192233] focus:border-primary
                        dark:focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] p-[15px]
                        text-base font-normal leading-normal"
                        placeholder="you@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label className="flex flex-col flex-1">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">Password</p>

                    <div className="flex w-full flex-1 items-stretch rounded-lg border border-gray-300 dark:border-[#324467]
                    bg-white dark:bg-[#192233] focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary
                    dark:focus-within:border-primary transition-all duration-200 overflow-hidden">

                        <input

                            className="flex-1 w-full min-w-0 bg-transparent h-14 p-[15px] text-base font-normal
                            text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#92a4c9]
                            focus:outline-none border-none focus:ring-0"
                            placeholder="Enter your password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="flex items-center justify-center px-[15px] text-gray-500 dark:text-[#92a4c9] hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition-colors cursor-pointer"
                            tabIndex={-1}
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </label>

                <a className="text-primary text-sm font-medium leading-normal underline self-start hover:text-primary/80" href="#">
                    Forgot Password?
                </a>
            </div>

            {/* Buttons and External Login*/}
            <div className="flex flex-col gap-6">
                <button
                    type="submit"
                    // disabled={isLoading}
                    className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg
                    h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]
                    hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                    focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors"
                >
                    <span className="truncate py-1">Sign In</span>
                </button>

                <p className="text-center text-sm text-gray-600 dark:text-[#92a4c9]">
                    Don't have an account?
                    <button type="button" onClick={() => onSwitchTab('register')}
                    className="font-medium text-primary underline hover:text-primary/80 ml-1">
                        Sign Up
                    </button>
                </p>

                {/* Divider */}
                <div className="relative flex items-center">
                    <div className="flex-grow border-t border-gray-300 dark:border-[#324467]"></div>
                    <span className="mx-4 flex-shrink text-sm text-gray-500 dark:text-[#92a4c9]">Or continue with</span>
                    <div className="flex-grow border-t border-gray-300 dark:border-[#324467]"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-3 rounded-lg border border-gray-300
                         dark:border-[#324467] bg-white dark:bg-[#192233] px-4 py-3 text-sm font-medium
                          text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                        {/* Google SVG Icon */}
                        <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            <path d="M1 1h22v22H1z" fill="none" />
                        </svg>
                        <span>Google</span>
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-3 rounded-lg border border-gray-300
                        dark:border-[#324467] bg-white dark:bg-[#192233] px-4 py-3 text-sm font-medium text-gray-900
                        dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                        {/* GitHub SVG Icon */}
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fillRule="evenodd" />
                        </svg>
                        <span>GitHub</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;