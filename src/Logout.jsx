import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token"); // clear token
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-emerald-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
        <h2 className="text-xl font-bold text-green-600 mb-4">
          🍴 Logging you out...
        </h2>
        <p className="text-gray-500">Redirecting to login page...</p>
      </div>
    </div>
  );
}
