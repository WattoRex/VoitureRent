import React from "react";
import "./style.css";

const cardCard = () => {
    return (
        <div className="car-box">
            {/* <img src="./car.png" className="car-pic"></img> */}
            <div className="car-content">
                <div className="info">
                    <div>
                        <p>
                            Modèle
                        </p>
                        <p>
                            Prix Euro
                        </p>
                    </div>
                </div>
                <div className="likes">
                    <div className="icon-box">
                        <i className='bx bx-heart'></i>
                        258
                    </div>
                </div>
            </div>
        </div>
    );
}

export default cardCard;