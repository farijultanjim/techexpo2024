'use client';

import { useState } from 'react';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);  // Set loading state to true
        setMessage('');  // Clear any previous messages
        const form = event.target;
        const formData = new FormData(form);

        formData.append('access_key', 'e08c8aeb-ee56-4506-93d3-ac3209c0b7a7');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: json,
            });
            const result = await response.json();
            if (result.success) {
                setMessage('Your message has been sent successfully!');
                form.reset();  // Reset form fields
            } else {
                setMessage('Failed to send your message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);  // Reset loading state
        }
    }

    return (
        <div className="container mx-auto pb-10">
            <div className="grid place-items-center">
                <form
                    onSubmit={handleSubmit}
                    className="px-4 sm:px-10 py-5 rounded-lg bg-primary w-full max-w-2xl flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-white">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Full Name"
                            required
                            className="w-full h-12 bg-secondary rounded-lg px-4 placeholder:text-neutral-600 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-white">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Your Email Address"
                            required
                            className="w-full h-12 bg-secondary rounded-lg px-4 placeholder:text-neutral-600 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-white">
                            Your Message
                        </label>
                        <textarea
                            cols="20"
                            rows="5"
                            name="message"
                            placeholder="Write your message"
                            required
                            className="w-full bg-secondary rounded-lg px-4 placeholder:text-neutral-600 outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={`bg-accent text-white px-4 py-2 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    {message && (
                        <div className={`mt-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                            {message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
