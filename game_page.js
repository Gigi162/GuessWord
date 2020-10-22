player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -  " + player2_name;

function send() {

    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word = " + word);

    Letter1 = word.charAt(1);
    console.log(Letter1);

    Letter2_index = Math.floor(word.length/2);
    Letter2 = word.charAt(Letter2_index);
    console.log(Letter2);

    Letter3_index = word.length - 1;
    Letter3 = word.charAt(Letter3_index);
    console.log(Letter3);

    remove1 = word.replace(Letter1, "_");
    remove2 = remove1.replace(Letter2, "_");
    remove3 = remove2.replace(Letter3, "_");
    console.log("Final Word = " + remove3 );

    question_word = "<h4 id ='word_display'>Q." + remove3 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}



