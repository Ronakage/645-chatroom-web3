import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const { user } = useMoralis();

    return (
        <div className="top-0 p-5 z-50 bg-opacity-5 text-orange-500">

            <div className="text-left lg:text-center"> 

                <div>

                    <div className="relative h-48 w-48 lg:mx-auto "> 
                        <Avatar username={undefined}/>
                    </div>

                    <h1 className="text-3xl ">Emulated Blockchained Chat Lobby 📳 </h1>

                    <h2 className="text-5xl font-bold">{user.getUsername()}</h2>

                    <ChangeUsername/>

                </div>
            </div>
        </div>
    )
}

export default Header;
