import React from 'react';
const LandingPage = () => {

    return (
        <div className="flex flex-row items-left justify-left min-h-screen">
            <div className="text-left mb-4 text-4xl font-bold text-black-100 mb-8">
                <h1>FlowSync - Collab</h1>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </div>
            <div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Signup
                </button>
            </div>
        </div>
    );
};

export default LandingPage;