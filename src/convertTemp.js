const convertTemp = (temp) => {
    let newTemp = Math.round(temp - 273.15);
    return newTemp;
}

export { convertTemp }