import React, { useState } from 'react';

function SiginUp() {
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">
            <div className="w-80 rounded-2xl shadow-lg bg-gray-800">
                <div className="text-center text-3xl font-semibold py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-gray-200 rounded-t-2xl">
                    Sign Up
                </div>
                <form className="px-6 py-6">
                    <div className="relative mb-4">
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full h-10 px-4 rounded-full bg-gray-700 border border-gray-500 text-gray-200 focus:border-blue-500 focus:outline-none peer text-sm"
                            onFocus={() => setNameFocused(true)}
                            onBlur={(e) => setNameFocused(e.target.value !== "")}
                        />
                        <label
                            htmlFor="name"
                            className={`absolute left-4 top-2 text-gray-400 transition-all duration-300 ease-in-out ${
                                nameFocused || document.getElementById("name")?.value ? 'transform -translate-y-5 text-blue-500 text-xs bg-gray-800 px-1' : ''
                            }`}
                        >
                            Name
                        </label>
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full h-10 px-4 rounded-full bg-gray-700 border border-gray-500 text-gray-200 focus:border-blue-500 focus:outline-none peer text-sm"
                            onFocus={() => setEmailFocused(true)}
                            onBlur={(e) => setEmailFocused(e.target.value !== "")}
                        />
                        <label
                            htmlFor="email"
                            className={`absolute left-4 top-2 text-gray-400 transition-all duration-300 ease-in-out ${
                                emailFocused || document.getElementById("email")?.value ? 'transform -translate-y-5 text-blue-500 text-xs bg-gray-800 px-1' : ''
                            }`}
                        >
                            Email Address
                        </label>
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="password"
                            id="password"
                            required
                            className="w-full h-10 px-4 rounded-full bg-gray-700 border border-gray-500 text-gray-200 focus:border-blue-500 focus:outline-none peer text-sm"
                            onFocus={() => setPasswordFocused(true)}
                            onBlur={(e) => setPasswordFocused(e.target.value !== "")}
                        />
                        <label
                            htmlFor="password"
                            className={`absolute left-4 top-2 text-gray-400 transition-all duration-300 ease-in-out ${
                                passwordFocused || document.getElementById("password")?.value ? 'transform -translate-y-5 text-blue-500 text-xs bg-gray-800 px-1' : ''
                            }`}
                        >
                            Password
                        </label>
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="password"
                            id="confirmPassword"
                            required
                            className="w-full h-10 px-4 rounded-full bg-gray-700 border border-gray-500 text-gray-200 focus:border-blue-500 focus:outline-none peer text-sm"
                            onFocus={() => setConfirmPasswordFocused(true)}
                            onBlur={(e) => setConfirmPasswordFocused(e.target.value !== "")}
                        />
                        <label
                            htmlFor="confirmPassword"
                            className={`absolute left-4 top-2 text-gray-400 transition-all duration-300 ease-in-out ${
                                confirmPasswordFocused || document.getElementById("confirmPassword")?.value ? 'transform -translate-y-5 text-blue-500 text-xs bg-gray-800 px-1' : ''
                            }`}
                        >
                            Confirm Password
                        </label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Sign Up"
                            className="w-full h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-gray-200 font-medium cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95 text-sm"
                        />
                    </div>
                    <div className="text-center mt-4 text-sm">
                        Already a member?{' '}
                        <a href="./login.html" className="text-blue-500 hover:underline">
                            Login now
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SiginUp;
