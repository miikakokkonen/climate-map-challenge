import React from 'react';
import styled from "styled-components";

function Sidebar({selectedLocationId, observationLocations}) {
    const loc = observationLocations.find(loc => loc.info.id === selectedLocationId);	
	var tableOfData;
    if (!loc){
    	tableOfData = <p className="centered">Select a location to continue.</p>
    }
    return <div className="sidebar">
    	<h1 className="centered">Weather</h1>
    	<pre >{tableOfData}</pre>
    	<pre className="scrollable">{loc && JSON.stringify(loc.info, null, 4)}{loc && JSON.stringify(loc.data, null, 4)}</pre>
    </div>
}

export default styled(Sidebar)`
    height: 100vh;
	width: 400px;

`;