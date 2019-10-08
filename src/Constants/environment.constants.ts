const TEN_MINUTES = "600000";
const FIVE_SECONDS = "5000";
const cycleTime = parseInt(process.env.REACT_APP_CYCLE_TIME || TEN_MINUTES);
const loadTime = parseInt(process.env.REACT_APP_LOAD_TIME || FIVE_SECONDS);
export{
    TEN_MINUTES,
    FIVE_SECONDS,
    cycleTime,
    loadTime
}