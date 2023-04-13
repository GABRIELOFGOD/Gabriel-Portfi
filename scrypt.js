/*variable declaration */
var container = document.querySelector(".container");
var btn = document.querySelector("button");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");

var score = document.querySelector(".score")

var scoreBoard = 0;
/*answers to the question */
var answers = {
    one: "RED",
    two: "CONTINENT",
    three: "WORLD WIDE WEB",
    four: "NATION",
    five: "CRUDE OIL"
}

var answer = {
    one: "red",
    two: "continent",
    three: "world wide web",
    four: "nation",
    five: "crude oil"
}

/*block coding */
btn.onclick = () => {
    if(one.value.length == 0 || two.value.length == 0 || three.value.length == 0 || four.value.length == 0 || five.value.length == 0){
        alert("You're required to answer all questions")
    }else{
        if(one.value == answers.one || one.value == answer.one){
            scoreBoard++
        }else{
            scoreBoard = scoreBoard;
        }
        if(two.value == answers.two || two.value == answer.two){
            scoreBoard++
        }else{
            scoreBoard = scoreBoard;
        }
        if(three.value == answers.three || three.value == answer.three){
            scoreBoard++
        }else{
            scoreBoard = scoreBoard;
        }
        if(four.value == answers.four || four.value == answer.four){
            scoreBoard++
        }else{
            scoreBoard = scoreBoard;
        }
        if(five.value == answers.five || five.value == answer.five){
            scoreBoard++
        }else{
            scoreBoard = scoreBoard;
        } 
    

        score.style.display = "block"
        score.innerHTML += `
            <div class="ansCont">
                <h2 class="words"></h2>
                <div class="corrected"></div>
                <button class="correction">Correction</button>
            </div>
        `

        if(scoreBoard == 5){
            document.querySelector(".words").innerHTML = "You score a perfect score of " + scoreBoard;
            document.querySelector(".corrected").style.display = "none";
            document.querySelector(".correction").style.display = "none";
        }else{
            document.querySelector(".words").innerHTML = "You score " + scoreBoard, " of 5";
            document.querySelector(".correction").style.display = "block";

            document.querySelector(".correction").onclick = () =>{
                document.querySelector(".corrected").innerHTML = `
                    <ul>
                        <li>Roses are <strong>RED</strong></li>
                        <li>Africa is a <strong>CONTINENT</strong></li>
                        <li>WWW means <strong>WORLD WIDE WEB</strong></li>
                        <li>Yoruba land is a <strong>NATION</strong></li>
                        <li>Petrol is derived from <strong>CRUDE OIL</strong></li>
                    </ul>
                `
            }
        }
        
        scoreBoard = 0;
    }
}


/*
    if(one.value == answers.one || one.value == answer.one){
        scoreBoard++
    }else{
        scoreBoard = scoreBoard;
    }
    if(two.value == answers.two || two.value == answer.two){
        scoreBoard++
    }else{
        scoreBoard = scoreBoard;
    }
    if(three.value == answers.three || three.value == answer.three){
        scoreBoard++
    }else{
        scoreBoard = scoreBoard;
    }
    if(four.value == answers.four || four.value == answer.four){
        scoreBoard++
    }else{
        scoreBoard = scoreBoard;
    }
    if(five.value == answers.five || five.value == answer.five){
        scoreBoard++
    }else{
        scoreBoard = scoreBoard;
    } */