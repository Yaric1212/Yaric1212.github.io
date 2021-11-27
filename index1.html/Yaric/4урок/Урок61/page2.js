var arr =["First", "Second", "third", "25"]
function cycle()
{
    var counter=0;
    while(counter< arr.length)
    {
        alert(arr[counter]);
        counter= counter+1;
    }
}
cycle();