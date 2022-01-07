import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();
    return (
        <div className="bg-gradient-to-b from-white to-orange-100 overflow-hidden relatve ">
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                {/*  Logo */}
                {/* <Image className="object-contain" src="/profilepic.png" height={200} width={200}></Image> */}
                <Image 
                className="object-contain"
                src={`https://avatars.dicebear.com/api/big-smile/.svg`} 
                height={200} width={200}
                ></Image>
                <div className="text-4xl tracking-wide font-bold animate-bounce">Welcome to the future of chatting 💬 </div>
                <div className="text-2xl tracking-wide font-light animate-bounce">Using Web 3.0 technologies and Moralis.IO API</div>
                <br />
                {/* Login button */}
                <button onClick={authenticate} 
                className="bg-orange-400 rounded-lg p-5 font-bold">
                Login with MetaMask 🦊</button>
                <br /><br />
                <div className="text-l tracking-wide font-light italic">Made by Rony Mawad 💻 </div>
            </div>
            {/* Background */}
            <div className="w-full h-screen">
                {/* <Image src="/background.jpg" layout="fill" objectFit="cover"></Image> */}
            </div>
        </div>
    )
}

export default Login;