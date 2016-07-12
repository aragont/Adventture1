я╗┐/* ╨▓╨▓╨╛╨┤ ╤Б╨╗╨╡╨┤╤Г╤О╤Й╨╡╨│╨╛ ╨▒╨░╨╣╤В╨░ ╨╕╨╖ ╤Д╨░╨╣╨╗╨░ ╨┤╨░╨╜╨╜╤Л╤Е  a=get() */
/* ╤Г╤Б╤В╨░╨╜╨╛╨▓ ╨╜╨░╤З╨░╨╗╤М╨╜╨╛╨│╨╛ ╨░╨┤╤А╨╡╤Б╨░ ╤З╤В╨╡╨╜╨╕╤П   iniget(adr) */

// ╨┐╨╛╨┤╨║╨╗╤О╤З╨╕╤В╤М "..\common\advexter.h"
//╤А╨░╨▒╨╛╤В╤Г ╤Б ╤Д╨░╨╣╨╗╨░╨╝╨╕ ╨┤╨╛╨┤╨╡╨╗╨░╤В╤М
//var adv_data = "http://localhost:8888/data.txt"
//var adv_data2 = "\advent\data.adv"

//var cb; //╨д╨Р╨Щ╨Ы
var  bevents, pevents; //╤Б╤В╤А╨╛╨║╨╕

var count = 0;//╨╛╤В╤Б╤В╤Г╨┐ ╤Б╨╕╨╝╨▓╨╛╨╗╨╛╨▓ ╨╛╤В ╨╜╨░╤З╨░╨╗╨░ ╤Д╨░╨╣╨╗╨░;
function iniget(adr)
{
    dataAdv = dataAdv.slice(0, 7043);
   // console.log(dataAdv[7043]);
   
    if (count == 0)
    {
        bevents = dataAdv.slice(tevent); 
        count = eevent;
    }   

    if (tevent <= adr && adr < eevent)
    {
        pevents = bevents.slice(adr-tevent);
    }
    else
    {
        pevents = null;
        count = adr;
    }    
}



function get()
{    
    var c;//╤Б╨╕╨╝╨▓╨╛╨╗ 
    if (pevents == null)
    {     
        c = dataAdv[count];     
            count++;      
    }
    else
    {
        c = pevents[0];
        pevents = pevents.slice(1);
    }
  //  console.log(pevents);
    return (c & 0377);
}


var data;
var dataAdv;
function inidat()
{   
    jQuery.ajax({
        async: false,
        url: "data.txt",
        dataType: "text",
        success: function (val) {            
            data = val;            
        }
    });
    dataAdv = data.split(" ");
}


