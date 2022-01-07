import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Header() {
    const { user } = useMoralis();


    return (
        <div>
            <div className=""> 
                <div>

                </div>
                <div>
                    <div>
                        <Avatar logoutOnPress/>
                    </div>
                    {/* welcome message */}
                    {/* username */}
                    {/* change username */}
                </div>
            </div>
        </div>
    )
}

export default Header;
