const getClassColor = (temp: number) => {
    if (temp <= 5) {
        return 'blue';
    }
    if (temp <= 25) {
        return 'orange';
    }
    return 'red';
}

export default getClassColor;