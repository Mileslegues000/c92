var player1name=localStorage.getItem("player_1name");
var player2name=localStorage.getItem("player_2name");


var player1score=0;
var player2score=0;


document.getElementById("player1_name").innerHTML=player1name+" : ";
document.getElementById("player2_name").innerHTML=player2name+" : ";


document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML="Question Turn: "+player1name;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1=word.length -1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    ques_word="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_btn="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= ques_word+input_box+check_btn;
    document.getElementById("output").innerHTML=row ;
    document.getElementById("word").value="";
}

ques_turn="player 1";
ans_turn="player 2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if (ans_turn=="player 1"){
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;

        }
        else{
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }
    }
    if (ques_turn=="player 1") {
        ques_turn="player 2";
        document.getElementById("player_question").innerHTML="Question Turn- "+player2name;
    } else {
        ques_turn="player 1";
        document.getElementById("player_question").innerHTML="Question Turn- "+player1name;        
    }
    if (ans_turn=="player 1") {
        ans_turn="player 2";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player2name;
    } else {
        ans_turn="player 1";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player1name;
    }
    document.getElementById("output").innerHTML="";
}
