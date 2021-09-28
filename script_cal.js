var tbcal = "";
const useinp = document.getElementById('useinp')
const compout = document.getElementById('compout')
function calcad(value)
{
    tbcal+=value;
    useinp.value = tbcal;
}
function execm(){
    if(tbcal.length ==0 || tbcal == ""){
        alert("Needs a input");
        return;
    }
    try{
        ans = eval(tbcal);
        compout.value =ans;
    }
    catch(err){
        alert("Invalid Number")
    }
}
function reset(){
    useinp.value ="";
    compout.value ="";
    tbcal ="";
}
