var display = document.getElementById("result");

function ConvertToMorse(c)
{
  this.english = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'
               ,'o','p','q','r','s','t','u','v','w','x','y','z',' '];
  this.morse = ['.-', '...-', '.-.-', '..-','.','.-..','.--','....','..','---.'
             ,'-.-','..-.','--','.-','---','.--.','-.--','.-.','...','-','-..'
             ,'-...','--.','-..-','--.-','..--',' '];
  //console.log(english.length);
  for(var i = 0 ; i < this.english.length ; i++)
  {
    if(english[i] == c)
    {
      return morse[i];
    }
  }
}

var returnString = "";
var input = prompt("Enter message to convert to morse");
//console.log("Input length: " + input.length);
for(var i = 0 ; i < input.length ; i++)
{
  var nextChar = input.charAt(i);
  var convChar = ConvertToMorse(nextChar);
  returnString += convChar;
}

display.innerHTML = returnString;
