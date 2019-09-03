import axios from 'axios';
const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
const ROUTE_URL = `https://www.leaguesportsmanager.com/help/Api?appid=${API_KEY}`;  // injection uses reverse apos -- template strings v6
export const SPORTS_LIST = 'SPORTS_LIST';
export function fetchSports(userId) {
    const url = '${ROOT_URL}'; // etc
    const request = axios.get(url);

    console.log('Request', request);

    return {
        type: SPORTS_LIST,
        payload: request
    };
}

// use axios library for Ajax calls