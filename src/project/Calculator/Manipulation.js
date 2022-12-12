import React from "react";


export let toolSum = (a, b) => {
    return a + b;
}

export let toolSubtract = (a, b) => {
    return a - b;
}

export let toolMultiply = (a, b) => {
    return a * b;
}

export let toolDivide = (a, b) => {
    if (b === 0) {
        return 'Cannot divide by zero'
    } else return a / b;
}

