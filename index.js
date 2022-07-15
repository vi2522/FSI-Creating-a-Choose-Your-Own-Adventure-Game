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
}
else if(response==="right"){
    console.log("user submitted right")
}
else{
    console.log("follow instructions")
}