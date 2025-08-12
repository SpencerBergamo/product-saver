'use client';

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import { Package, Lightbulb, DollarSign, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-white/20 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 sticky top-0 z-50 w-full shadow-sm">
            <div className="mx-auto max-w-[1400px] px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Left Side - Logo and Company Name */}
                    <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 group">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            <Package className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Product Saver
                        </span>
                    </Link>

                    {/* Right Side - Navigation */}
                    <div className="flex items-center space-x-6">
                        {/* Navigation Tabs */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link href="/pricing" className="text-gray-600 hover:text-purple-600 transition-all duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/60 backdrop-blur-sm group">
                                <span className="font-medium">Pricing</span>
                            </Link>
                            <Link href="/inspiration" className="text-gray-600 hover:text-purple-600 transition-all duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/60 backdrop-blur-sm group">
                                <span className="font-medium">Inspiration</span>
                            </Link>
                        </div>

                        {/* Authentication Actions */}
                        <SignedOut>
                            <SignUpButton mode="modal">
                                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    Get Started
                                </Button>
                            </SignUpButton>
                        </SignedOut>

                        <SignedIn>
                            <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-white/60 backdrop-blur-sm">
                                    <UserButton
                                        appearance={{
                                            elements: {
                                                avatarBox: "h-8 w-8 shadow-lg hover:shadow-xl transition-shadow duration-300",
                                            }
                                        }} />
                                </div>
                            </div>
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
}