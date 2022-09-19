export const convertTemp = (temp) => {
    const convertedTemp = (parseFloat(temp) - 273.15).toFixed(1).replace('.',',')
    return(convertedTemp)
}