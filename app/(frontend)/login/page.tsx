import LoginForm from "@/component/LoginForm";

export default function Loginpage()  {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            
            <p className="text-xl items-center text-red-800"> Please enter your email and password to access your dashboard.</p>
            <LoginForm />
        
        </div>
    );
}   