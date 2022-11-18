import { FaAngleDown, FaFacebookMessenger, FaFontAwesomeFlag, FaMedrt, FaUserFriends } from "react-icons/fa";
import "./right.css"
function Rside() {
    return (
        <div className="Rside">
            <div className="Profile">
                <img src="profile.webp" alt="not found" style={{ height: "60px", padding: "1rem" }} />
                Akash Ranganathan
            </div>
            <div className="Pro">
                <FaUserFriends color="blue" fontsize="2rem" />
                <div>Friends</div>
            </div>
            <div className="Pro">
                <FaFontAwesomeFlag color="green" fontsize="2rem" />
                <div>Pages</div>
            </div>
            <div className="Pro">
                <FaMedrt color="blue" fontsize="2rem" />
                <div>COVID-19 Information Center</div>
            </div>
            <div className="Pro">
                <FaFacebookMessenger color="green" fontsize="2rem" />
                <div>Messenger Kids</div>
            </div>
            <div className="Pro">
                <FaAngleDown color="green" fontsize="2rem" />
                <div>see more</div>
            </div>
            <br />
            <div className="Profiles">
                <img src="React logo.webp" alt="not found" style={{ height: "35px", padding: "1rem" }} />
                React Developer
            </div>
            <div className="Profiles">
                <img src="Angular logo.webp" alt="not found" style={{ height: "35px", padding: "1rem" }} />
                Angular Developer
            </div>
            <div className="Profiles">
                <img src="JavaScript logo.webp" alt="not found" style={{ height: "35px", padding: "1rem" }} />
                JavaScript Developer
            </div>
            <div className="Profiles">
                <img src="Nodejs logo.webp" alt="not found" style={{ height: "35px", padding: "1rem" }} />
                Nodejs Developer
            </div>
            <div className="Pross">
                <FaAngleDown color="blue" fontSize="2rem" />
                <div>See more</div>
            </div>
        </div>
    )
}
export default Rside