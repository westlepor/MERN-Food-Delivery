import React, { useState } from 'react';
import ReactMapGL from "react-map-gl"

export default function Map() {

    const [viewport, setViewport] = useState({
        latitude: 45.5211,
        logitude: -75.6903,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });

    return (
        <div>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={"pk.eyJ1IjoiY2hyaXN0eDg2IiwiYSI6ImNrN3o5MzZkYTA0MTYzZG1zcXlicmV3ODYifQ.f3TP4Ewd27ht76l2HDPoRw"}
                onViewStateChange={viewport => {
                    setViewport(viewport);
                }}
            >

            </ReactMapGL>
        </div>
    );
}