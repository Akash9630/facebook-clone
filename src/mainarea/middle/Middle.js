import { AiFillFileImage } from "react-icons/ai";
import { FaGrin, FaRegCommentAlt, FaRegShareSquare, FaRegThumbsUp } from "react-icons/fa";
import { MdMoreHoriz, MdVideoCall } from "react-icons/md";
import "./Middle.css"

function Middle() {
    return (
        <div className="MainArea">
            <div className="addStory">
                <div className="Story">
                    <img src="../stories/iphone.webp" alt="not found" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    Apple
                </div>
                <div className="Story">
                    <img src="../stories/salmankhan.webp" alt="not found" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    salmankhan
                </div>
                <div className="Story">
                    <img src="../stories/temple.webp" alt="not found" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    temple
                </div>
                <div className="Story">
                    <img src="../stories/simbu.webp" alt="not found" style={{ height: "60px", width: "50px", borderRadius: "60%" }}
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    simbu
                </div>
            </div>

            <div className="message">
                <div className="text">
                    <div className="Post">
                        <img src="../stories/home/Amazon.webp" alt="PIC" />
                        <input type="Mind" placeholder="What's on your mind, Akash?" />
                    </div>
                    <div className="Call">
                        <div className="ico">
                            <div className="icone">
                                <MdVideoCall fontSize="2rem" color="red" />
                                <div>LiveVideo</div>
                            </div>
                            <div className="icone">
                                <AiFillFileImage fontSize="2rem" color="green" />
                                <div>Photo/Video</div>
                            </div>
                            <div className="icone">
                                <FaGrin fontSize="2rem" color="orange" />
                                <div>activity</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Posted">
                    <div className="poster">
                        <div className="Simplilearn">
                            <img src="../stories/home/Amazon.webp" alt="Img" style={{ height: "50px", width: "50px" }} />
                            Simplilearn
                            <div className="update">
                                Updated his cover image.
                            </div>
                        </div>
                        <div className="edit">
                            <MdMoreHoriz fontSize="1.5rem" />
                        </div>
                    </div>
                    <div className="caption">
                        Please Like, Comment and Subscribe to our YouTube Channel
                    </div>
                    <br />
                    <div className="FacebookImg">
                        <img src="../home/Amazon.webp" alt="not found" style={{ height: "auto", width: "100%" }} />
                    </div>
                    <div className="Comment">
                        <div className="Like">
                            <FaRegThumbsUp color="grey" />Like
                        </div>
                        <div className="Comment">
                            <FaRegCommentAlt color="grey" />Comment
                        </div>
                        <div className="Share">
                            <FaRegShareSquare color="grey" />Share
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle