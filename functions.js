function hey(){
    let name = prompt('What is your name? ');
    return document.write(name);
}
function details(){
    let location = prompt("Where are you located? ")
    let age = prompt(" How old are you? ");
    let message;

    if (age >= '18' && location === "england"){
        message = " you are welcome";
    } 
    else if (age <= '18' || location != 'england' ){
        message = ' can you try again? Thanks! ';
    }
    return document.write(message);
}






let boys= ["john","kane","bane","sane"];

for(let x=0; x<boys.length;x++){
    console.log("HI! " + boys[x]);
}



function answer(){

    let messages = "";
    let i = 0;
while(i<1){
    let attempt = prompt("What is your age? ");

    let place = prompt("Where do you reside? ");
    
        if (attempt >= 18 && place === "england"){
            messages = "welcome here!"
            i++;
        }
        else{
            messages = alert("Sorry! You should be over 18 and located in england to have access. Come back when you get there")
        }
    }
    document.write(messages);
}

function second(){
    let expect= "";
    for(b=0;b<1;b++){
let ok = prompt("What is your age? ");
let position = prompt("where are you located? ")
if (ok > 18 && position === "england"){
    expect = "Hi there are you ready? ";
} else{
    expect = alert("Sorry Dude! You should be over 18 and located in england to have access. Come back when you get there");
    b--;
}
    } document.write(expect)
}