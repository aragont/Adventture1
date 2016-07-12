я╗┐/*╨┐╨╡╤З╨░╤В╨░╨╡╤В ╤Б╨╛╨╛╨▒╤Й╨╡╨╜╨╕╨╡ ╤Б ╨╜╨╛╨╝╨╡╤А╨╛╨╝  #n */
//╨┐╨╛╨┤╨│╤А╤Г╨╖╨╕╤В╤М ╤Д╨░╨╣╨╗ \common\advexter.h
function rspeak(n)
{
    var adr;
    if( !(adr = rtext(n)) )
    {
        fatal(3);
    }
    mes(adr)
}