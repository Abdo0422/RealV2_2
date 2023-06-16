import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import './GuestLayout.css'

export default function Guest({ children }) {
    return (
        <div className="bg-register-login min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
            
        </div>
        
    );
}

