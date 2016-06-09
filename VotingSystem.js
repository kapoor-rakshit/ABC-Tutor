var male={rakesh:0,paras:0,anmol:0,prateek:0,sunil:0};
var female={mrinali:0,heenu:0,vidhi:0,akansha:0,swadha:0};
function res_male()
{
  var m=document.getElementById("male");
  if(m.value==1) male.rakesh++;
   if(m.value==2) male.sunil++;
   if(m.value==3) male.anmol++;
   if(m.value==4) male.prateek++;
   if(m.value==5) male.paras++;
}
function res_female()
{
    var m=document.getElementById("female");
  if(m.value==1) female.heenu++;
   if(m.value==2) female.akansha++;
   if(m.value==3) female.vidhi++;
   if(m.value==4) female.swadha++;
   if(m.value==5) female.mrinali++;
}
function display() {
   document.getElementById("mres").innerHTML+="Rakesh :  "+ male.rakesh+"<br>";
   document.getElementById("mres").innerHTML+="Sunil :      "+ male.sunil+"<br>";
   document.getElementById("mres").innerHTML+="Anmol :   "+ male.anmol+"<br>";
   document.getElementById("mres").innerHTML+="Prateek : "+ male.prateek+"<br>";
   document.getElementById("mres").innerHTML+="Paras :     "+ male.paras;
   
   document.getElementById("fres").innerHTML+="Heenu :     "+ female.heenu+"<br>";
   document.getElementById("fres").innerHTML+="Akansha : "+ female.akansha+"<br>";
   document.getElementById("fres").innerHTML+="Vidhi :       "+ female.vidhi+"<br>";
   document.getElementById("fres").innerHTML+="Swadha :  "+ female.swadha+"<br>";
   document.getElementById("fres").innerHTML+="Mrinali :    "+ female.mrinali;
}
