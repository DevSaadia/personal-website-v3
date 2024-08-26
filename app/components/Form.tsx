"use client";
import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/input'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log({ name, email, message });
        emailjs
            .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", form.current || '', {
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error: { text: any; }) => {
                    console.log('FAILED...', error.text);
                },
            );
        setName('');
        setEmail('');
        setMessage('');
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <form
            ref={form}
            className='gap-2 flex flex-col'
            onSubmit={handleSubmit}

        >
            <div className="flex flex-row gap-2">
                <Input
                    radius='lg'
                    name="from_name"
                    isRequired
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    label="Name"
                    classNames={{ inputWrapper: ["bg-white"] }}
                />
                <Input
                    radius='lg'
                    name='from_email'
                    isRequired
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    label="Email"
                    classNames={{ inputWrapper: ["bg-white"] }}
                />
            </div>
            {/* textarea */}
            <Textarea
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                size='lg'
                maxRows={3}
                radius='full'
                isRequired
                label="Message"
                classNames={{ inputWrapper: ["bg-white"] }}
            />
            <Button
                value="Send"
                type='submit'
                className='text-black  bg-[#ffe8e2]   w-1/2'
            >
                Submit
            </Button>

        </form>
    )
}

export default Form

