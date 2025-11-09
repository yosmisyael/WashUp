"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {Menu, X} from "lucide-react";
import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import Link from "next/link";

const Header: React.FC = () => {
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {name: 'Home', href: '#'},
        {name: 'Services', href: '#'},
        {name: 'About', href: '#'},
        {name: 'Contact', href: '#'},
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <Logo size={3} />
                        <span className="text-2xl font-bold text-gray-900">WashUp</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-indigo-600"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="/auth/login"
                            className="text-sm font-medium text-gray-600 hover:text-indigo-600"
                        >
                            Sign in
                        </a>
                        <Button onClick={() => router.push('/auth/@/')} variant="primary" className="py-2 px-4">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? (
                                <X className="h-6 w-6"/>
                            ) : (
                                <Menu className="h-6 w-6"/>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-40">
                    <nav className="flex flex-col p-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                        <hr className="my-2"/>
                        <a
                            href="/auth/login"
                            className="text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                        >
                            Sign in
                        </a>
                        <Button variant="primary" className="w-full" onClick={() => router.push('/auth/@/')}>
                            Get Started
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
