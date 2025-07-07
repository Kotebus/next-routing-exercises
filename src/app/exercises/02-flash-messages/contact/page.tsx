'use client';

import { useRouter } from 'next/navigation';
import {useToast} from "../../../../components/ToastProvider";
import {FormEvent} from "react";

function ContactPage() {
    const context = useToast();
    const router = useRouter();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (context) {
            const {addToast} = context;
            addToast({text: 'Your message was received!', variant: 'success'});
        }
        router.push('/exercises/02-flash-messages');
    };

    return (
        <main>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input id="name" required={true}/>

                <label htmlFor="message">Message:</label>
                <textarea id="message"/>

                <button>Submit</button>
            </form>
        </main>
    );
}

export default ContactPage;
