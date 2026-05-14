import LoginForm from "@/component/LoginForm";

export default function Loginpage()  {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            
            <p className="text-xl items-center text-red-800"></p>
            <LoginForm />
        
        </div>
    );
}   