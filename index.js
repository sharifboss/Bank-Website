const loginbtn=document.getElementById("login");
loginbtn.addEventListener('click',function(){
    const area=document.getElementById("login-area");
    area.style.display="none";
    const area2=document.getElementById("trxn-area");
    area2.style.display="block";

})

//deposit button
const dep=document.getElementById("adeposit");
dep.addEventListener('click',function(){
    const depNumber=getAmount('depAmount')
    updateSpanText('totalDep',depNumber)
    document.getElementById("depAmount").value=""
    updateSpanText('balance',depNumber);

}) 
   function updateSpanText(id,depNumber){
    const currentBal=document.getElementById(id).innerText;
    const cBal=parseFloat(currentBal);
    const totalBal= cBal+depNumber;
    document.getElementById(id).innerText=totalBal;

   }

//withdraw button
const withd=document.getElementById('rwithdraw');
withd.addEventListener('click',function(){
    const withNumber=getAmount('withAmount')
    
    updateSpanText('withdraw',withNumber)
    
    document.getElementById('withAmount').value=""
    updateSpanText('balance',-1*withNumber)
})

function getAmount(id){
    const withAmount=document.getElementById(id).value;
    const withNumber=parseFloat(withAmount);
    return withNumber;

}