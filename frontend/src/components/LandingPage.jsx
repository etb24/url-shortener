import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';


let desc = 
"Trimly simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Trimly simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Trimly simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Trimly simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links.";

const LandingPage = () => {
    const navigate = useNavigate();

    const dashboardNavigateHandler = () => {

    };

  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px:4">
        <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
            <div className="flex-1">
                <h1 className="font-bold font-robot text-slate-800 md:text-5xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full ">
                    Trimly Simplifies URL Shortening for Efficient Sharing
                </h1>
                <p className="text-slate-700 text-sm my-5">
                    Trimly streamlines the process of shortening URLs, making it quick and easy to create short links for efficient sharing. Whether you're a business looking to enhance your marketing efforts or an individual wanting to share links more effectively, Trimly has you covered.
                </p>
                <div className="flex items-center gap-3">
                    <button 
                    className="bg-custom-gradient w-40 text-white rounded-md py-2"
                    onClick={dashboardNavigateHandler}>
                        Manage Links
                    </button>
                    <button 
                    className="border-btnColor border w-40 text-btnColor rounded-md py-2"
                    onClick={dashboardNavigateHandler}>
                        Create Short Link
                    </button>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center w-full min-h-[300px]">
                <img
                    className="sm:w-[480px] w-[400px] object-cover rounded-md"
                    src="/images/logo.png"
                    alt="image not found"
                />
            </div>

        </div>
        <div className="sm:pt-12 pt-7">
                <p className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center ">
                    Your go-to solution for all URL shortening needs
                </p>

                <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
                    <Card
                    title="Simple URL Shortening"
                    desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
                    />
                    <Card
                        title="Powerful Analytics"
                        desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
                    />
                    <Card
                        title="Enhanced Security"
                        desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
                    />
                    <Card
                        title="Fast and Reliable"
                        desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
                    />
                </div>
            </div>
    </div>
  )
}

export default LandingPage