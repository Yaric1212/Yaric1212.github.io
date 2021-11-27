var Location1=2;
var Location2=3;
var Location3=4;
var guess=0;
var hits=0;
var guesses=0;
var isSunk= false;
//"Пока корабль не потоплен"
while(isSunk == false);
{
  guess=prompt("Введите значение")
  if(guess < 1)
  {
 alert("Введите число от 1 до 9")
  }
 else if (guess > 9) 
 {
    alert("Введите число от 1 до 9")
 }
  else
  {
      guesses=guesses+1
      if(guess==Location1)
      {
          hits=hits+1
      }
      else if(guess==Location2)
      {
          hits=hits+1
        }
  }    if(guess==Location3)
      {
      hits=hits+1
       }

}
