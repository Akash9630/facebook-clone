import { FaSearch } from "react-icons/fa"
import { MdMoreHoriz, MdVideoCall } from "react-icons/md"
import "./left.css";

function Lside() {
    return (
        <div className="Lside">
            <div className="Contact">
                <div className="Contacts">
                    Contacts
                </div>
            </div>
            <div className="chaticon">
                <div className="icons">
                    <MdVideoCall fontSize="1.8rem" />
                </div>
                <div className="icons">
                    <FaSearch fontSize="1.8rem" />
                </div>
                <div className="icons">
                    <MdMoreHoriz fontSize="1.8rem" />
                </div>
            </div>
            <div className="concise">
                <div className="Profilee">
                    <img src="Ajith.webp" alt="not found" style={{ height: "35px", padding: "1rem" }} />
                    Ajith
                </div>
                <div className="Profilee">
                    <img src="vijay.webp" alt="not found" style={{ height: "35px", padding: "1rem" }} />
                    Vijay
                </div>
                <div className="Profilee">
                    <img src="simbu.webp" alt="not found" style={{ height: "35px", padding: "1rem" }} />
                    Simbu
                </div>
                <div className="Profilee">
                    <img src="nayanthara.webp" alt="not found" style={{ height: "35px", padding: "1rem" }} />
                    Nayanthara
                </div>
                <div className="Profilee">
                    <img src="trisha.webp" alt="not found" style={{ height: "35px", padding: "1rem" }} />
                    Trisha
                </div>
            </div>
        </div >
    )
}

export default Lside