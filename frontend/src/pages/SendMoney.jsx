import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleTransfer = async () => {
        if (!amount || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        console.log("Initiate Transfer button clicked with:", { id, amount });

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/api/v1/account/transfer", 
                { to: id, amount }, 
                { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
            );

            console.log("Transfer successful:", response.data);
            alert("✅ Transfer successful!");
            setSuccess(true);
        } catch (error) {
            console.error("Transfer failed:", error.response?.data || error.message);
            alert("❌ Transfer failed! " + (error.response?.data?.message || "Please check console."));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-green-400">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transition-all transform hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-gray-800">💸 Send Money</h2>
                
                <div className="flex items-center space-x-4 mt-6">
                    <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-md">
                        <span className="text-2xl text-white font-semibold">{name[0]?.toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-700">{name}</h3>
                </div>

                <div className="mt-6">
                    <label className="text-sm font-medium text-gray-600" htmlFor="amount">
                        Amount (in ₹)
                    </label>
                    <input
                        onChange={(e) => setAmount(Number(e.target.value))}
                        type="number"
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
                        id="amount"
                        placeholder="Enter amount"
                        value={amount}
                    />
                </div>

                <button 
                    onClick={handleTransfer}
                    disabled={loading}
                    className={`mt-6 w-full py-3 text-lg font-semibold text-white rounded-lg transition-all ${
                        loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                    }`}
                >
                    {loading ? "Processing..." : "🚀 Initiate Transfer"}
                </button>

                {success && (
                    <button 
                        onClick={() => navigate("/dashboard")}
                        className="mt-4 w-full py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all"
                    >
                        🔄 Go to Dashboard
                    </button>
                )}
            </div>
        </div>
    );
};
