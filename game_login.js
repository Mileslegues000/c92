function addUser(){
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;


    localStorage.setItem("player_1name",player1_name);
    localStorage.setItem("player_2name",player2_name);

    window.location="game_page.html";
}