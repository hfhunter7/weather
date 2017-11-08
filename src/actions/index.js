import axios from 'axios';

const API_KEY = '1559d189b2db67871d4a1a9ee85f90a3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

/*
export const FETCH_REPO = 'FETCH_REPO';

export function fetchRepo( owner, repo ) {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    const request = axios.get(url);

    return {
        type: FETCH_REPO,
        payload: request
    };
}*/
