let step=0
let h=0
let A
document.getElementById("I").style.display="none"
document.getElementById("wrong").style.display="none"
document.getElementById("intro").innerText = "welcome!";
document.getElementById("rules").innerText="This is the phone guessing game. There is going to be 4 levels. Each level will get significantly harder. Good luck!";
document.getElementById("start").innerText="click below to start:"
document.getElementById("iphone14btn").style.display="none"
document.getElementById("S25btn").style.display="none"
document.getElementById("wrong2").style.display="none"
document.getElementById("wrong3").style.display="none"
document.getElementById("I15btn").style.display="none"
document.getElementById("submit").style.display="none"
document.getElementById("next").style.display="block"
let img = document.createElement("img");
img.className
img.width = 0;
document.body.appendChild(img);
// Start button
document.getElementById("next").addEventListener("click", function () {
    step = 1;
    document.getElementById("next").style.display = "none"
    document.getElementById("start").style.display="none"
    document.getElementById("intro").innerText = "Level 1";
    document.getElementById("rules").innerText = "Which phone is this?";
    document.getElementById("wrong").style.display = "block";
    document.getElementById("iphone14btn").style.display = "block";
    img.src = "images/iphone14.png";
    img.width = 200;
});

// Correct answer
document.getElementById("iphone14btn").addEventListener("click", function () {
    step = 2;
    h++
    document.getElementById("next").style.display = "none"
    document.getElementById("intro").innerText = "Correct! Level 2:";
    document.getElementById("rules").innerText = "Which phone is this?";
//----------------------------------correct,wrong--------------------------------    
    document.getElementById("wrong2").style.display = "block";
    document.getElementById("wrong2").addEventListener("click", function(){
        step=3
        document.getElementById("intro").innerText = "Wrong, correct answer was Galaxy S25. Level 3:";
        document.getElementById("rules").innerText = "Now, which phone is this?";
        document.getElementById("wrong2").style.display = "none";
        document.getElementById("S25btn").style.display = "none";
//---------------------------------correct,wrong,wrong------------------------------        
        document.getElementById("wrong3").style.display="block"
        document.getElementById("wrong3").addEventListener("click",function(){
            step=4
            document.getElementById("intro").innerText = "Wrong, correct answer was iphone 15 pro. Level 4:";
            document.getElementById("rules").innerText = "In this level there won't be any options provided. You will have to input answer below:";
            document.getElementById("start").style.display="block"
            document.getElementById("start").innerText="Which phone is this?(Use lower-case letters only, two words)"
            document.getElementById("wrong3").style.display = "none";
            document.getElementById("I15btn").style.display = "none";
            document.getElementById("I").style.display="block"
            document.getElementById("submit").style.display="block"
            img.src=("images/hmdskyline.png")
            img.className="imgposition2"
            img.width=200
            document.getElementById("submit").onclick=function(){
                A=document.getElementById("I").value;
                if (A=="hmd skyline"){
                    h++
                    document.getElementById("intro").innerText= "Correct!"
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")
                }
                else
                    {document.getElementById("intro").innerText= "Wrong. Correct answer was hmd skyline."
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")}
            }   }
        )
//-------------------------------correct,wrong,correct---------------------------------
        document.getElementById("I15btn").style.display="block"
        document.getElementById("I15btn").addEventListener("click",function(){
            step=4
            h++
            document.getElementById("intro").innerText = "Correct, Level 4:";
            document.getElementById("rules").innerText = "In this level there won't be any options provided. You will have to input answer below:";
            document.getElementById("start").style.display="block"
            document.getElementById("start").innerText="Which phone is this?(Use lower-case letters only, two words)"
            document.getElementById("wrong3").style.display = "none";
            document.getElementById("I15btn").style.display = "none";
            document.getElementById("I").style.display="block"
            document.getElementById("submit").style.display="block"
            img.src=("images/hmdskyline.png")
            img.className="imgposition2"
            img.width=200
            document.getElementById("submit").onclick=function(){
                A=document.getElementById("I").value;
                if (A=="hmd skyline"){
                    h++
                    document.getElementById("intro").innerText= "Correct!"
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")
                }
                else
                    {document.getElementById("intro").innerText= "Wrong. Correct answer was hmd skyline."
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")}
            }   }
        )
        img.src = "images/xiaomi14t.png";
        img.className="imgposition"
        img.width = 400;
    })
//-----------------------------------correct,correct------------------------------    
    document.getElementById("S25btn").style.display = "block";
    document.getElementById("S25btn").addEventListener('click', function(){
        step=3
        h++
        document.getElementById("intro").innerText = "Correct. Level 3:";
        document.getElementById("rules").innerText = "Now, which phone is this?";
        document.getElementById("wrong2").style.display = "none";
        document.getElementById("S25btn").style.display = "none";
        document.getElementById("wrong3").style.display="block"
//---------------------------------correct,correct,wrong------------------------------- 
        document.getElementById("wrong3").addEventListener("click", function(){
        step=4
            document.getElementById("intro").innerText = "Wrong, correct answer was iphone 15 pro. Level 4:";
            document.getElementById("rules").innerText = "In this level there won't be any options provided. You will have to input answer below:";
            document.getElementById("start").style.display="block"
            document.getElementById("start").innerText="Which phone is this?(Use lower-case letters only, two words)"
            document.getElementById("wrong3").style.display = "none";
            document.getElementById("I15btn").style.display = "none";
            document.getElementById("I").style.display="block"
            document.getElementById("submit").style.display="block"
            img.src=("images/hmdskyline.png")
            img.className="imgposition2"
            img.width=200
            document.getElementById("submit").onclick=function(){
                A=document.getElementById("I").value;
                if (A=="hmd skyline"){
                    h++
                    document.getElementById("intro").innerText= "Correct!"
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")
                }
                else
                    {document.getElementById("intro").innerText= "Wrong. Correct answer was hmd skyline."
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")}   
            } 
        }) 
//------------------------------------correct,correct,correct----------------------------        
        document.getElementById("I15btn").style.display="block"
        document.getElementById("I15btn").addEventListener("click",function(){
            step=4
            h++
            document.getElementById("intro").innerText = "Correct, Level 4:";
            document.getElementById("rules").innerText = "In this level there won't be any options provided. You will have to input answer below:";
            document.getElementById("start").style.display="block"
            document.getElementById("start").innerText="Which phone is this?(Use lower-case letters only, two words)"
            document.getElementById("wrong3").style.display = "none";
            document.getElementById("I15btn").style.display = "none";
            document.getElementById("I").style.display="block"
            document.getElementById("submit").style.display="block"
            img.src=("images/hmdskyline.png")
            img.className="imgposition2"
            img.width=200
            document.getElementById("submit").onclick=function(){
                A=document.getElementById("I").value;
                if (A=="hmd skyline"){
                    h++
                    document.getElementById("intro").innerText= "Correct!"
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")
                }
                else
                    {document.getElementById("intro").innerText= "Wrong. Correct answer was hmd skyline."
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")}
            }   }
        )
        
        img.src = "images/xiaomi14t.png";
        img.width = 400;
    })
    img.src = "images/s25.png";
    img.width = 270;
    document.getElementById("iphone14btn").style.display = "none"
    document.getElementById("wrong").style.display = "none"
    document.getElementById("next").style.display = "none"
    });

// Wrong answer
document.getElementById("wrong").addEventListener("click", function () {
    step = 2;
    document.getElementById("intro").innerText = "Wrong! Correct answer was iPhone 14. Level 2:";
    document.getElementById("next").style.display = "none"
    document.getElementById("rules").innerText = "Which phone is this?";
    document.getElementById("wrong2").style.display = "block";
//----------------------------wrong,wrong-------------------------------------------
    document.getElementById("wrong2").addEventListener("click", function(){
        step=3
        document.getElementById("intro").innerText = "Wrong, correct answer was Galaxy S25. Level 3:";
        document.getElementById("rules").innerText = "Now, which phone is this?";
        document.getElementById("wrong2").style.display = "none";
        document.getElementById("S25btn").style.display = "none";
        document.getElementById("wrong3").style.display="block"
//------------------------------wrong,wrong,wrong-----------------------------------        
        document.getElementById("wrong3").addEventListener("click", function(){
            step=4
            document.getElementById("intro").innerText = "Wrong, correct answer was iphone 15 pro. Level 4:";
            document.getElementById("rules").innerText = "In this level there won't be any options provided. You will have to input answer below:";
            document.getElementById("start").style.display="block"
            document.getElementById("start").innerText="Which phone is this?(Use lower-case letters only, two words)"
            document.getElementById("wrong3").style.display = "none";
            document.getElementById("I15btn").style.display = "none";
            document.getElementById("I").style.display="block"
            document.getElementById("submit").style.display="block"
            img.src=("images/hmdskyline.png")
            img.className="imgposition2"
            img.width=200
            document.getElementById("submit").onclick=function(){
                A=document.getElementById("I").value;
                if (A=="hmd skyline"){
                    h++
                    document.getElementById("intro").innerText= "Correct!"
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")
                }
                else
                    {document.getElementById("intro").innerText= "Wrong. Correct answer was hmd skyline."
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")}   
            } 
        })
        document.getElementById("I15btn").style.display="block"
//--------------------------------------------wrong,wrong,right---------------------------------- 
        document.getElementById("I15btn").addEventListener("click", function(){
        step=4
            h++
            document.getElementById("intro").innerText = "Correct, Level 4:";
            document.getElementById("rules").innerText = "In this level there won't be any options provided. You will have to input answer below:";
            document.getElementById("start").style.display="block"
            document.getElementById("start").innerText="Which phone is this?(Use lower-case letters only, two words)"
            document.getElementById("wrong3").style.display = "none";
            document.getElementById("I15btn").style.display = "none";
            document.getElementById("I").style.display="block"
            document.getElementById("submit").style.display="block"
            img.src=("images/hmdskyline.png")
            img.width=200
            document.getElementById("submit").onclick=function(){
                A=document.getElementById("I").value;
                if (A=="hmd skyline"){
                    h++
                    document.getElementById("intro").innerText= "Correct!"
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")
                }
                else
                    {document.getElementById("intro").innerText= "Wrong. Correct answer was hmd skyline."
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")}
                    }    
        })
        img.src = "images/xiaomi14t.png";
        img.className="imgposition"
        img.width = 400;
    })
//---------------------------------wrong,right------------------------------------------
    document.getElementById("S25btn").addEventListener("click", function(){
        step=3
        h++
        document.getElementById("intro").innerText = "Correct. Level 3:";
        document.getElementById("rules").innerText = "Now, which phone is this?";
        document.getElementById("wrong2").style.display = "none";
        document.getElementById("S25btn").style.display = "none";
        document.getElementById("wrong3").style.display="block"
//---------------------------------wrong,right,wrong-----------------------------
        document.getElementById("wrong3").addEventListener("click",function(){
            step=4
            document.getElementById("intro").innerText = "Wrong, correct answer was iphone 15 pro. Level 4:";
            document.getElementById("rules").innerText = "In this level there won't be any options provided. You will have to input answer below:";
            document.getElementById("start").style.display="block"
            document.getElementById("start").innerText="Which phone is this?(Use lower-case letters only, two words)"
            document.getElementById("wrong3").style.display = "none";
            document.getElementById("I15btn").style.display = "none";
            document.getElementById("I").style.display="block"
            document.getElementById("submit").style.display="block"
            img.src=("images/hmdskyline.png")
            img.width=200
            document.getElementById("submit").onclick=function(){
                A=document.getElementById("I").value;
                if (A=="hmd skyline"){
                    h++
                    document.getElementById("intro").innerText= "Correct!"
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.png")
                }
                else
                    {document.getElementById("intro").innerText= "Wrong. Correct answer was hmd skyline."
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")}   
            } 
        }) 
        document.getElementById("I15btn").style.display="block"
//-------------------------------wrong,right,right-------------------------------------
        document.getElementById("I15btn").addEventListener("click", function(){
            step=4
            h++
            document.getElementById("intro").innerText = "Correct, Level 4:";
            document.getElementById("rules").innerText = "In this level there won't be any options provided. You will have to input answer below:";
            document.getElementById("start").style.display="block"
            document.getElementById("start").innerText="Which phone is this?(Use lower-case letters only, two words)"
            document.getElementById("wrong3").style.display = "none";
            document.getElementById("I15btn").style.display = "none";
            document.getElementById("I").style.display="block"
            document.getElementById("submit").style.display="block"
            img.src=("images/hmdskyline.png")
            img.width=200
            document.getElementById("submit").onclick=function(){
                A=document.getElementById("I").value;
                if (A=="hmd skyline"){
                    h++
                    document.getElementById("intro").innerText= "Correct!"
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")
                }
                else
                    {document.getElementById("intro").innerText= "Wrong. Correct answer was hmd skyline."
                    document.getElementById("rules").innerText="Congratulations! You completed the quiz. Score:"+h+"/4"
                    document.getElementById("start").style.display="none"
                    document.getElementById("I").style.display="none"
                    document.getElementById("submit").style.display="none"
                    img.src=("images/congratulations.webp")}
                    }    
        })
        img.src = "images/xiaomi14t.png";
        img.className="imgposition"
        img.width = 400;
    })

    document.getElementById("S25btn").style.display = "block";
    img.src = "images/s25.png";
    img.width = 270;
    document.getElementById("iphone14btn").style.display = "none"
    document.getElementById("wrong").style.display = "none"
    document.getElementById("next").style.display = "none"
});