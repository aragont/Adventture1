я╗┐//╨┐╨╛╨┤╨║╨╗╤О╤З╨╕╤В╤М ..\common\advexter.h"
var drkfla;

function chnloc(newloc) 
{
    let drkold;
    drkold = dark();
    loc = newloc;
    if( dark() && drkfla && drkold && pct(30) ) {
        rspeak(23);                   /* ╤Б╨▓╨░╨╗╨╕╨╗╤Б╤П b ╨║╨╛╨╗╨╛╨┤╨╡╤Ж b temhote */
        score();        
    }
    else
    {
        drkfla = 1;
        descr2();
    }   
}