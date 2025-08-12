var isstatus=document.getElementById("status")
var addfriend=document.getElementById("btn")
var check=0
addfriend.addEventListener("click",function()
{
    if(check==0)
    {
    isstatus.innerHTML="Friends"
    isstatus.style.color="green"
    document.getElementById("btn").innerHTML="Remove Friend"
    document.getElementById("btn").style.backgroundColor="red"
    check=1
    }
    else
    {
    isstatus.innerHTML="Stranger"
    isstatus.style.color="red"
    document.getElementById("btn").innerHTML="Add Friend"
    document.getElementById("btn").style.backgroundColor="rgb(7, 74, 156)"
    check=0
    }
   
})