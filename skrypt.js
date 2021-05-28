function fibb(){
    var x = document.getElementById("liczba").value;
var a = 1;
var b = 1;
var wynik1 = 0;
    if(x>2){
        for(var i = 0 ; i < (x - 2) ; i++)
        {
wynik1= a + b;
a=b;
b=wynik1;
    }}
    else if (x ==0)
    {
wynik1=0;
    }
    else{
     wynik1 = 1;
        }
      
    
    document.getElementById("wynik").innerHTML = wynik1;
}