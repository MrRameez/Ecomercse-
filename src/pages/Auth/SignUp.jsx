import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import AuthButton from '../../Components/AuthButton';

function SignUp() {
    const navigate = useNavigate();
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent form from reloading
        if (password !== confirmPassword) {
            // Handle password mismatch error (e.g., display an error message)
            alert("Passwords do not match!");
            return;
        }
        try {
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, password);
            setLoading(false);
            navigate("/");
        } catch (err) {
            setLoading(false);
            // Handle the error (e.g., show a notification)
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">
            <div className="w-80 rounded-2xl shadow-lg bg-gray-800">
                <div className="text-center text-3xl font-semibold py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-gray-200 rounded-t-2xl">
                    Sign Up
                </div>
                <form className="px-6 py-6" onSubmit={handleSignUp}>
                    <div className="relative mb-4">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            required
                            className="w-full h-10 px-4 rounded-full bg-gray-700 border border-gray-500 text-gray-200 focus:border-blue-500 focus:outline-none peer text-sm"
                            onFocus={() => setEmailFocused(true)}
                            onBlur={(e) => setEmailFocused(e.target.value !== "")}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                            htmlFor="email"
                            className={`absolute left-4 top-2 text-gray-400 transition-all duration-300 ease-in-out ${
                                emailFocused || email ? 'transform -translate-y-5 text-blue-500 text-xs bg-gray-800 px-1' : ''
                            }`}
                        >
                            Email Address
                        </label>
                    </div>

                    <div className="relative mb-4">
                        <input
                            value={password}
                            type="password"
                            id="password"
                            required
                            className="w-full h-10 px-4 rounded-full bg-gray-700 border border-gray-500 text-gray-200 focus:border-blue-500 focus:outline-none peer text-sm"
                            onFocus={() => setPasswordFocused(true)}
                            onBlur={(e) => setPasswordFocused(e.target.value !== "")}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label
                            htmlFor="password"
                            className={`absolute left-4 top-2 text-gray-400 transition-all duration-300 ease-in-out ${
                                passwordFocused || password ? 'transform -translate-y-5 text-blue-500 text-xs bg-gray-800 px-1' : ''
                            }`}
                        >
                            Password
                        </label>
                    </div>

                    <div className="relative mb-4">
                        <input
                            value={confirmPassword}
                            type="password"
                            id="confirmPassword"
                            required
                            className="w-full h-10 px-4 rounded-full bg-gray-700 border border-gray-500 text-gray-200 focus:border-blue-500 focus:outline-none peer text-sm"
                            onFocus={() => setConfirmPasswordFocused(true)}
                            onBlur={(e) => setConfirmPasswordFocused(e.target.value !== "")}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label
                            htmlFor="confirmPassword"
                            className={`absolute left-4 top-2 text-gray-400 transition-all duration-300 ease-in-out ${
                                confirmPasswordFocused || confirmPassword ? 'transform -translate-y-5 text-blue-500 text-xs bg-gray-800 px-1' : ''
                            }`}
                        >
                            Confirm Password
                        </label>
                    </div>
                    
                    <div>
                        <AuthButton text={"Sign up"} onClick={handleSignUp} isLoading={loading} />
                    </div>

                    <div className="text-center mt-4 text-sm">
                        Already a member?{' '}
                        <Link to="/LoginUp" className="text-blue-500 hover:underline">
                            Login now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
