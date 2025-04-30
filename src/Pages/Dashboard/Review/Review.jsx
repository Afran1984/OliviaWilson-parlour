
const Review = () => {
    return (
        <div className="mt-3 p-8">
            <div className="bg-[#F4F7FC] ml-10 w-full max-w-xl">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 mb-4 border border-gray-300"
                />
                <input
                    type="email"
                    placeholder="Enter your Mail"
                    className="w-full p-3 mb-4 border border-gray-300"
                />
                <div className="mb-4">
                    <textarea
                        className="w-full p-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none min-h-[150px]"
                        placeholder="Description"
                    ></textarea>
                </div>
                <button className="bg-pink-500 text-white py-2 px-8 hover:bg-pink-600 transition duration-200">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Review;