//Your Code here

let response = window.prompt("Do you go left or right?")

console.log(response)

if(response==="left"){
    console.log("user submitted left")

    let response2 = window.prompt("Do you up or down?")

    console.log(response2)

    if(response2==="up"){
        console.log("user submitted up")
    }
    else if(response2==="down"){
        console.log("user submitted down")
    }
    else{
        console.log("follow instructions")
    }
}
else if(response==="right"){
    console.log("user submitted right")

    let response3 = window.prompt("Do you clockwise or counterclockwise?")

    if(response3==="clockwise"){
        console.log("user submitted clockwise")
    }
    else if(response3==="counterclockwise"){
        console.log("user submitted counterclockwise")
    }
    else{
        console.log("follow instructions")
    }
}
else{
    console.log("follow instructions")
}