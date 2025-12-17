'use client';

import { useState } from 'react';
import LoginForm from '@/app/components/auth/LoginForm';
import RegisterForm from '@/app/components/auth/RegisterForm'; 

type AuthTab = 'login' | 'register';

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState<AuthTab>('login');

    const handleSwitchTab = (tab: AuthTab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full max-w-md">
            {activeTab === 'login' ? (
                <LoginForm onSwitchTab={handleSwitchTab as (tab: 'register') => void} />
            ) : (
                <RegisterForm onSwitchTab={handleSwitchTab as (tab: 'login') => void} />
            )}
        </div>
    );
}