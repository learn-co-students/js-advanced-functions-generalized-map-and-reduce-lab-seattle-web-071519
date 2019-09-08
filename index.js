function map(sourceArray, func){
    let array = []
    for (let i = 0; i < sourceArray.length; i++){
        array.push(func(sourceArray[i]))
    }   
    return array 
}


function reduce(sourceArray, func, startingPoint){
    let i = (!!startingPoint) ? 0: 1
    let value = (!!startingPoint) ? startingPoint : sourceArray[0]
    for (; i < sourceArray.length; i++){
        value = func(sourceArray[i], value)
    }   
    return value
}