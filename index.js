function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(event = "go to the office"){
    return `This Monday, I will ${event}.`;
}

function wrapAdjective(flair = "*"){
    return function(parameter1 = "special"){
        return `You are ${flair}${parameter1}${flair}!`;
    }
}