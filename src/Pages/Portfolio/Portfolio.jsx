import React from 'react';

const Portfolio = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl mt-7 text-center font-mono font-bold">Our Awesome <span className=" text-[#F63E7B]">Services</span></h1>

            <div className="grid grid-cols-3 text-center gap-4 mt-10">
                <div className="px-4 py-6">
                    <img src="https://i.ibb.co.com/whVz7Dy3/freestocks-YGmk9-UZMd-Zg-unsplash.jpg" alt="" />
                    <h2 className="font-mono font-bold">Anti Age Face Treatment</h2>
                    <p className="text-center">$99</p>
                    <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                </div>
                <div className="shadow-2xl px-4 py-6 rounded-xl">
                    <img src="https://i.ibb.co.com/1f0gjh0s/rosa-rafael-Pe9-IXUu-C6-QU-unsplash.jpg" alt="" />
                    <h2 className="font-mono font-bold" >Hair Color & Styleing</h2>
                    <p className="text-center">$99</p>
                    <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                </div>
                <div className="px-4 py-6">
                    <img src="https://i.ibb.co.com/KzDHVTvB/engin-akyurt-g-m8-EDc4-X6-Q-unsplash.jpg" alt="" />
                    <h2 className="font-mono font-bold" >Skin Care Treatment</h2>
                    <p className="text-center">$99</p>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>

            </div>
            <div className="text-center mt-12">
                <button className="bg-[#F63E7B] px-4 py-2 hover:scale-110 cursor-pointer transition-all rounded-sm text-white ">Explore more</button>
            </div>
        </div>
    );
};

export default Portfolio;