я╗┐//╨┐╨╛╨┤╨║╨╗╤О╤З╨░╨╡╨╝ ..\common\advexter.h"
var actfla;
//var File F1;// ╨╜╤Г╨╢╨╜╨╛ ╨╖╨░╨╝╨╡╨╜╨╕╤В╤М ╤З╤В╨╡╨╜╨╕╨╡ ╨╕╨╖ ╤Д╨░╨╣╨╗╨░ ╨╜╨░ ╨║╤Г╨║╨╕ ╨▒╤А╨░╤Г╨╖╨╡╤А╨░
var actres;
function events() 
{
   // console.log("event");
   // var actres;
    actfla = 1;
    actres = act(tevent, 0);
    actfla = 0;
}

function getRandomInt(min, max) 
{
    return Math.floor( Math.random() * (max - min) ) + min;
}

function ini() 
{
    //var actres;
	
    inicom();
    inidat();
    inimes();
   // console.log(dataAdv);
   // console.log("d " + dataAdv[6403].charCodeAt(0));


  //  if( (F1=fopen("frozen.adv","rb")) != NULL ) { //╨╖╨░╨╝╨╡╨╜╨╕╤В╤М ╨╜╨░ ╤З╤В╨╡╨╜╨╕╨╡ ╨╕╨╖ ╨║╤Г╨║╨╛╨▓ ╨▒╤А╨░╤Г╨╖╨╡╤А╨░
   //     loadfr();

   // } else {
        
    loc = 1;
    rndini = getRandomInt(1, 32767);
    actfla = 1;
    actres = act(tiniti, 0);
    actfla = 0;
    // }
    console.log("r: " + _rtext[15]);
    descr2();
}


