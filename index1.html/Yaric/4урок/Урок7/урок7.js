// ввода числа
 var input =prompt("Введите слово");
 var polindrom =true 
//Является и число полиндромом?
var p =("")
for(var i=0;i<p.length; i=i+1)
{
    if(p[i]!=p[p.length-1-i])
    {
     polindrom = false;
     break;
    }
}
alert(polindrom)