//Your Code here

let response = window.prompt("Do you head left or to the right?")

console.log(response)

if(response==="left"){
    let response2 = window.prompt("You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?")

    console.log(response2)

    if(response2==="follow"){
        let response3 = window.prompt("You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.")

        console.log(response3)

        if(response3==="stay"){
            console.log("You live happily amongst the cats for the rest of your days.")
        }
        else if(response3==="spread the word"){
            console.log("After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.")
        }
    }
    else if(response2==="continue"){
        let response4 = window.prompt("You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?")

        console.log(response4)

        if(response4==="ladder"){
            console.log("After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.")
        }
        else if(response4==="staircase"){
            console.log("After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.")
        }
    }
}
else if(response==="right"){
    let response5 = window.prompt("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?")

    console.log(response5)

    if(response5==="past the dragon"){
        let response6 =window.prompt("The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:")

        console.log(response6)

        if(response6==="stay"){
            console.log("You and the dragon have an uplifting conversation about local politics and become lifelong friends.")
        }
        else if(response6==="run"){
            console.log("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
        }
    }
    if(response5==="away from the dragon"){
        let response7 = window.prompt("After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?")

        console.log(response7)

        if(response7==="draw it"){
            console.log("You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.")
        }
        else if(response7==="pick it"){
            console.log("You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.")
        }
    }
}