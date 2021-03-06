export function maxDate(dates) {
    return new Date(Math.max(...dates));
}

export function minDate(dates) {
    return new Date(Math.min(...dates));
}

export function displayFloat(val) {
    return val.toFixed(1);
}
