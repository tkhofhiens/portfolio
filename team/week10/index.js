// import { getJSON, getLocation } from 'utilities.js';
// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-03';

// import Quake from './Quake.js';

/*
function buildURL() {
    let local = getLocation();
    let fullUrl = baseUrl + "&" + local + "&maxradiuskm=100";
    let answer = getJSON(fullUrl);
    console.log(fullUrl);
    console.log(answer);
    
}
*/

import QuakeController from './QuakesController.js';
import buildNavigation from './routing.js';

const navElemnt = document.getElementById('mainNav');
buildNavigation(navElemnt);