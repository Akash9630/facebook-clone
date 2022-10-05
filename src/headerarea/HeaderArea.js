import React from "react";
import './HeaderArea.css'
import { AiFillHome, AiOutlineSearch, AiOutlineWallet } from "react-icons/ai"
import { MdOndemandVideo } from "react-icons/md"
import { FaBell, FaFacebookMessenger, FaPlusCircle, FaRegFlag, FaUsers } from "react-icons/fa";

function HeaderArea() {
    return (
        <div className="HomePage">
            <div className="header">
                <div className="first-header">
                    <div className="Logo">
                        <img src="facebook-logo.webp" alt="logo" style={{ height: "50px", padding: "1rem" }} />
                    </div>
                    <div className="Search">
                        <AiOutlineSearch style={{ height: "4rem" }} />
                        <input placeholder="Search Facebook" type="Search" />
                    </div>
                    <div className="middle-header">
                        <div className="Icon">
                            <AiFillHome fontSize="2.3rem" color="#1877F2" />
                        </div>
                        <div className="Icon">
                            <FaRegFlag fontSize="2.3rem" color="#1877F2" />
                        </div>
                        <div className="Icon">
                            <MdOndemandVideo fontSize="2.3rem" color="#1877F2" />
                        </div>
                        <div className="Icon">
                            <FaUsers fontSize="2.3rem" color="#1877F2" />
                        </div><div className="Icon">
                            <AiOutlineWallet fontSize="2.3rem" color="#1877F2" />
                        </div>
                        <div className="third-header">
                            <div className="plus">
                                <FaPlusCircle fontSize="2.3rem" />
                            </div>
                            <div className="plus">
                                <FaFacebookMessenger fontSize="2.3rem" />
                            </div>
                            <div className="plus">
                                <FaBell fontSize="2.3rem" />
                            </div>
                            <div className="Pluss">
                                <img src="Coding-image.webp" alt="not found" style={{ height: "30px" }} />
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default HeaderArea
