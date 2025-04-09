'use client';

import { useState } from 'react';

export default function DeleteAccountPage() {
    const [phone, setPhone] = useState('');
    const [reason, setReason] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send this data to your backend
        console.log({ phone, reason });
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-20">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Request Account Deletion</h1>

                {isSubmitted ? (
                    <div className="text-green-600">
                        <p>Your deletion request has been submitted. We will process it within 7 business days.</p>
                        <p className="mt-2">You will receive a confirmation email once your account has been deleted.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="phone" className="block text-xl font-semibold text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="reason" className="block  font-semibold  text-gray-700 text-xl">
                                Reason for Deletion (Optional)
                            </label>
                            <textarea
                                id="reason"
                                rows={4}
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-4"
                            />
                        </div>

                        <div className="text-sm text-gray-600">
                            <p>By submitting this form, you acknowledge that:</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>Your account and all associated data will be permanently deleted</li>
                                <li>This action cannot be undone</li>
                                <li>It may take up to 7 business days to process your request</li>
                            </ul>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Submit Deletion Request
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
} 