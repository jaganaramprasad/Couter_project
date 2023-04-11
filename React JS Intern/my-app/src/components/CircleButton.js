import React, { useState } from 'react';

import '../style.css'

function CircleButton() {
    const [counter, setCounter] = useState(0);

    const handleButtonClick = () => {
        setCounter(counter + 1);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div class="square">
                <div class="circle">

                    <button onClick={handleButtonClick} className="circle-btn" >
                        {counter}
                    </button>
                </div>
            </div>

        </div>
    );
}

export default CircleButton;
