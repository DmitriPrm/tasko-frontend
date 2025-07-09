import { RegisterForm } from './RegisterForm.tsx';
import { useState } from 'react';
import { SignInForm } from './SignInForm.tsx';

export const AuthPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn = () => setIsSignIn(!isSignIn);

    return (
        <div className="h-screen">
            <div className="flex justify-center items-center h-full">
                {isSignIn ? (
                    <SignInForm toggleSignIn={toggleSignIn} />
                ) : (
                    <RegisterForm toggleSignIn={toggleSignIn} />
                )}
            </div>
        </div>
    );
};
