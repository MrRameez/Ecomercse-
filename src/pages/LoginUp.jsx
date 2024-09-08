import React, { useState } from 'react';

function LoginUp() {
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">
            <div className="w-96 rounded-3xl shadow-lg bg-gray-800">
                <div className="text-center text-4xl font-semibold py-8 bg-gradient-to-r from-purple-600 to-blue-600 text-gray-200 rounded-t-3xl">
                    Login
                </div>
                <form className="px-10 py-8">
                    <div className="relative mb-6">
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full h-12 px-6 rounded-full bg-gray-700 border border-gray-500 text-gray-200 focus:border-blue-500 focus:outline-none peer"
                            onFocus={() => setEmailFocused(true)}
                            onBlur={(e) => setEmailFocused(e.target.value !== "")}
                        />
                        <label
                            htmlFor="email"
                            className={`absolute left-6 top-3 text-gray-400 transition-all duration-300 ease-in-out ${
                                emailFocused || document.getElementById("email")?.value ? 'transform -translate-y-6 text-blue-500 text-sm bg-gray-800 px-1' : ''
                            }`}
                        >
                            Email Address
                        </label>
                    </div>
                    <div className="relative mb-6">
                        <input
                            type="password"
                            id="password"
                            required
                            className="w-full h-12 px-6 rounded-full bg-gray-700 border border-gray-500 text-gray-200 focus:border-blue-500 focus:outline-none peer"
                            onFocus={() => setPasswordFocused(true)}
                            onBlur={(e) => setPasswordFocused(e.target.value !== "")}
                        />
                        <label
                            htmlFor="password"
                            className={`absolute left-6 top-3 text-gray-400 transition-all duration-300 ease-in-out ${
                                passwordFocused || document.getElementById("password")?.value ? 'transform -translate-y-6 text-blue-500 text-sm bg-gray-800 px-1' : ''
                            }`}
                        >
                            Password
                        </label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Login"
                            className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-gray-200 font-medium cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95"
                        />
                    </div>
                    <div className="text-center mt-4">
                        Not a member?{' '}
                        <a href="./signup.html" className="text-blue-500 hover:underline">
                            Signup now
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginUp;
