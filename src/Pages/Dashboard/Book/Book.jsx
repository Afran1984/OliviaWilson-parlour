import { useState } from "react";

const Book = () => {
    const [paymentMethod, setPaymentMethod] = useState("card");

    return (
        <div className="mt-3 p-8">
            <div className="bg-[#F4F7FC] ml-10 w-full max-w-xl">
                <input
                    type="text"
                    placeholder="Anika Ahmed"
                    className="w-full p-3 mb-4 border border-gray-300"
                />
                <input
                    type="email"
                    placeholder="Anika@gmail.com"
                    className="w-full p-3 mb-4 border border-gray-300"
                />
                <input
                    type="text"
                    placeholder="Anti Age Face Treatment"
                    className="w-full p-3 mb-4 border border-gray-300"
                />

                <p className="font-medium mb-2">Pay with</p>
                <div className="flex items-center gap-4 mb-4">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={() => setPaymentMethod("card")}
                        />
                        <img src="https://img.icons8.com/color/24/000000/bank-card-back-side.png" alt="Credit Card" />
                        Credit Card
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="payment"
                            value="paypal"
                            checked={paymentMethod === "paypal"}
                            onChange={() => setPaymentMethod("paypal")}
                        />
                        <img src="https://img.icons8.com/color/24/000000/paypal.png" alt="Paypal" />
                        Paypal
                    </label>
                </div>

                {paymentMethod === "card" && (
                    <div className="space-y-4 mb-4">
                        <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full p-3 border border-gray-300"
                        />
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-1/2 p-3 border border-gray-300"
                            />
                            <input
                                type="text"
                                placeholder="CVC"
                                className="w-1/2 p-3 border border-gray-300"
                            />
                        </div>
                    </div>
                )}

                <p className="mt-4 mb-4">
                    Your Service charged will be <span className="font-bold text-black">$1000</span>
                </p>

                <button className="bg-pink-500 text-white py-2 px-8 hover:bg-pink-600 transition duration-200">
                    Pay
                </button>
            </div>
        </div>
    );
};

export default Book;
