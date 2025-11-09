import {WashingMachine} from "lucide-react";
import Logo from "@/app/components/atoms/Logo";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <Logo size={3.5} />
                            <span className="text-2xl font-bold text-white">WashUp</span>
                        </a>
                        <p className="text-sm">
                            Laundry management simple and efficient for everyone.
                        </p>
                    </div>

                    {/* Links - Product */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white text-sm">Features</a></li>
                            <li><a href="#" className="hover:text-white text-sm">Pricing</a></li>
                            <li><a href="#" className="hover:text-white text-sm">Support</a></li>
                        </ul>
                    </div>

                    {/* Links - Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white text-sm">About Us</a></li>
                            <li><a href="#" className="hover:text-white text-sm">Careers</a></li>
                            <li><a href="#" className="hover:text-white text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Links - Legal */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white text-sm">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white text-sm">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <div className="text-center text-sm">
                    <p>© {new Date().getFullYear()} WashUp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;