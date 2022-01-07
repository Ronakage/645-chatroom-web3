import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({username, logoutOnPress}) {
    const { user, logout } = useMoralis();

    return <Image 
    className="cursor-pointer hover:opacity-75"
    src={`https://avatars.dicebear.com/api/big-smile/${username || user.get('username')}.svg`} 
    onClick={() => logoutOnPress && logout()}
    layout="fill" 
    ></Image>
}

export default Avatar;
