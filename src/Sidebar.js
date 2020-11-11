import React from 'react';
import styled from "styled-components";

function Sidebar({selectedLocationId, observationLocations}) {
    const loc = observationLocations.find(loc => loc.info.id === selectedLocationId);	
	var tableOfData = `<p className="centered">Select a location to continue.</p>`;
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    if (loc){
    	tableOfData = <p>{ weekday[new Date().getDay()]}</p>
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