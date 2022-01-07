import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();
    return (
        <div className="bg-black relatve ">
            <h1>The login screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                {/*  Logo */}
                <Image className="object-contain" src="/profilepic.png" height={200} width={200}></Image>
                {/* Login button */}
                <button onClick={authenticate} 
                className="bg-blue-400 rounded-lg p-5 font-bold animate-pulse">
                Login</button>
            </div>
            {/* Background */}
            <div className="w-full h-screen">
                <Image src="/background.jpg" layout="fill" objectFit="cover"></Image>
            </div>
        </div>
    )
}

export default Login;