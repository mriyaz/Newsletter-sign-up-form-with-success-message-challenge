import React, { useState } from 'react';
import mobileImage from '../assets/images/illustration-sign-up-mobile.svg';
import desktopImage from '../assets/images/illustration-sign-up-desktop.svg';
import listIcon from '../assets/images/icon-list.svg';

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Valid email required');
            return;
        }
        setEmail('');
        setSubmitted(true);

    }

    if (submitted) {
        return (
            <div className=' flex flex-col justify-center items-left h-screen p-4 space-y-8 md:space-y-4  md:w-1/3 md:h-1/2 md:shadow md:bg-white md:rounded-3xl'>
                <div className="flex-grow"></div>

                {/* Success message start */}
                <img src={listIcon} alt="Success" className='w-12' />
                <h1 className='text-4xl font-bold'> Thanks for subscribing!</h1>

                <p className='text-sm'> A confirmation email has been sent to <b>ash@loremcompany.com</b>.
                    Please open it and click the button inside to confirm your subscription.
                </p>
                <div className="flex-grow"></div>
                <button type='button' className='bg-darkslate text-white w-full rounded-md px-4 py-4 text-sm md:py-3 hover:bg-tomato hover:shadow-2xl font-semibold'>Dismiss message</button>

                {/* Success message end */}

            </div>
        )
    }

    return (
        <div className='flex flex-col  md:flex-row-reverse font-roboto md:p-4 w-full h-full md:shadow md:bg-white md:rounded-3xl md:w-2/3 md:h-3/4'>

            {/* Hero image section  */}
            <section className="md:w-1/2  h-full object-cover">
                <picture >
                    <source srcSet={mobileImage} media='(max-width:768px)' />
                    <source srcSet={desktopImage} />
                    <img src={mobileImage} alt="Hero image" className="w-full h-full object-cover md:rounded-xl" />
                </picture>
            </section>

            {/* main section  */}
            <section className="w-full space-y-4 text-left p-8 h:full md:w-1/2">

                <h1 className='text-3xl font-semibold '>Stay updated!</h1>

                <p className='text-sm'>
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul className='text-sm list-none space-y-2 mb-6'>
                    <li className='flex items-center space-x-4'>
                        <img src={listIcon} alt="List icon" />
                        <span>  Product discovery and building what matters</span>
                    </li>
                    <li className='flex items-center space-x-4'>
                        <img src={listIcon} alt="List icon" />
                        <span>  Measuring to ensure updates are a success</span>
                    </li>
                    <li className='flex items-center space-x-4'>
                        <img src={listIcon} alt="List icon" />
                        <span>  And much more!</span>
                    </li>
                </ul>

                {/* Sign-up form start */}
                <form onSubmit={handleSubmit} noValidate >
                    <div className='flex justify-between items-center text-xs font-semibold mb-1'>
                        <label htmlFor="email">Email address</label>

                        {error &&
                            <p className="text-tomato">{error}</p>}</div>

                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='email@company.com' className={`border  rounded-md ${error ? 'text-tomato border-tomato bg-red-100' : 'text-grey border-grey'} w-full px-4 py-4 mb-5 text-sm hover:border-black focus:border-black`} />

                    <button type="submit" className='bg-darkslate text-white w-full rounded-md px-4 py-4 text-sm hover:bg-tomato hover:shadow-2xl'>Subscribe to monthly newsletter</button>

                </form>
                {/* Sign-up form end */}


            </section>
        </div >
    )
}

export default NewsletterForm