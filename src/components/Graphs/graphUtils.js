export function getDataTimeDomain(data) {
    if (!data || data.length === 0) {
        return [new Date(), new Date()];
    }
    if (data.length === 1) {
        return [data[0].time, data[0].time];
    }
    return [data[0].time, data[data.length - 1].time];
}

export function getDataValueRange(data) {
    if (!data || data.length === 0) {
        return [0, 0];
    }
    let values = data.map((x) => x.value);
    return [Math.min(...values), Math.max(...values)];
}
