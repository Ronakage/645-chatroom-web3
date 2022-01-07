import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";

function Messages() {
    const {user} = useMoralis();

    return (
        <div>
            <div className="pb-56">

                <div>
                    {/* Each Message */}
                </div>

                <div className="flex justify-center">
                    <SendMessage/>
                </div>

                <div className="text-center text-orange-100 mt-5">
                    <p>You're up-to-date {user.getUsername()}! 🎉</p>
                </div>

            </div>
        </div>
    )
}

export default Messages;
