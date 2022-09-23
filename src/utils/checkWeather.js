import axios from "axios"

const apiID = '4695d75fc0a051b916433aed57ae060c'
const country = "BR"

export const checkWeather = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiID}`
    return axios.get(URL)
}