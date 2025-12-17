import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root">
            <div className="flex flex-1">
                <div className="w-full lg:grid lg:grid-cols-2">
                    {/* Cột trái */}
                    <div
                        className="relative hidden lg:flex h-full w-full flex-col items-center 
                        justify-end bg-linear-to-br from-primary/30 to-background-dark p-10
                        text-white"
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-background-dark to-transparent"></div>
                        <div className="relative z-10 flex flex-col items-start gap-4">
                            <div className="flex items-center gap-3">

                                <TrendingUp className="text-primary w-8 h-8" strokeWidth={2.5} />
                                <p className="text-3xl font-bold">Horizon</p>
                            </div>
                            <p className="text-3xl font-bold leading-tight">Master Your Financial Future</p>
                        </div>
                    </div>

                    {/* Cột phải */}
                    <div className="flex w-full items-center justify-center p-6 sm:p-8">
                        {children} 
                    </div>
                </div>
            </div>
        </div>
    );
}