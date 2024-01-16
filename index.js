// code your solution here
function saturdayFun (arg1) {
    if (arg1 === undefined) {
        return 'This Saturday, I want to roller-skate!'
    }
    if (arg1) {
        return `This Saturday, I want to ${arg1}!`
    }
}



function mondayWork  (arg1) {
    if (arg1 === undefined) {
        return "This Monday, I will go to the office."
    }
    if (arg1) {
        return `This Monday, I will ${arg1}.`
    }
}

function wrapAdjective (flair) {
    const innerFunction = function (status = 'special') {
        return `You are ${flair}${status}${flair}!`
    };
    return innerFunction;
}

