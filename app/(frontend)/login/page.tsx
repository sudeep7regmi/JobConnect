import LoginForm from "@/component/LoginForm";
import Image from "next/image";

export default function Loginpage()  {
    return (<div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.wallpapersafari.com/81/64/6o3WkH.jpg')",
            backgroundRepeat: "no-repeat"
        }}
      >
        
            <LoginForm />
        
   
        </div>
    );
}   