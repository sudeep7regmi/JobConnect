import LoginForm from "@/component/LoginForm";
import Image from "next/image";

export default function Loginpage()  {
    return (<div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage:
        //     "url('https://upload.wikimedia.org/wikipedia/commons/c/cc/Cloudy_Sky_Background.jpg')",
        //     backgroundRepeat: "no-repeat"
        // }}
      >
        
            <LoginForm />
        
   
        </div>
    );
}   