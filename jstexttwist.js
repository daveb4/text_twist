function genericGetRequest(URL, callback){
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.status == 200) {
            callback(JSON.parse(this.response));
        }
    };
    xhr.open("GET", URL);
    xhr.send();
}

var TextTwist = function(){
    var words;
    var rack;
    var guess;
    var wordsleft;
    this.correctness = function(){
        var wordsleft = this.words.length;
        var found = false;
        var result;
        for (var i=0; i< wordsleft; i++){
            if (this.guess == this.words[i]){
                this.words[i] = null;
                found = true;
            }
        }
        if (found === true){
            result = "correct";
        }
        else {
            result = "incorrect";
        }
        document.getElementById("correct?").textContext = result;
    };
    this.userguess = function(){
        this.guess = document.getElementById("guess").value;
        document.getElementById("checkanswer").addEventListener("click", function(){
            this.correctness();
        });
    };
    this.update = function(input){
        this.words = input.words;
        this.wordsleft = input.words.length;
        this.rack = input.letters;
        var letters = self.rack.split(',');
        document.getElementById("rack").innerHTML = letters;
    };
    this.start = function() {
        document.getElementById("start").addEventListener("click", function(){
            genericGetRequest("api.php",this.update);
        });
    };
};