я╗┐/*d* === getans ===        07.01.85   version    9 */
/* ╨▓╨▓╨╛╨┤ ╨╛╨┤╨╜╨╛╨│╨╛ ╨╕╨╗╨╕ 2-x ╤Б╨╗╨╛╨▓ */
/* out: word1,word2 - ╨╜╨░╨╣╨┤╨╡╨╜╨╜╤Л╨╡ ╨┐╨╛ ╤Б╨╗╨╛╨▓╨░╤А╤О ╨╖╨╜╨░╤З╨╡╨╜╨╕╤П ╤Б╨╗╨╛╨▓ */
/*      type1,type2 - ╨╕╤Е ╤В╨╕╨┐╤Л (-1 - ╤Б╨╗╨╛╨▓╨░ het) */

/* === vocab === 08.08.84 version 2 */
/*  look up 'word' in the vocabulary ('atab' real array) */
/*  and return its "definition" (ktab), or -1 if not found */
/* out: vocab=-1  - ╤Б╨╗╨╛╨▓╨╛ he ╨╜╨░╨╣╨┤╨╡╨╜╨╛ */
/*      vocab     - ╨║╨╛╨┤ ╤Б╨╗╨╛╨▓╨░ */
//╨┐╨╛╨┤╨║╨╗╤О╤З╨╕╤В╤М "advexter.h"
//╨┐╨╛╨┤╨║╨╗╤О╤З╨╕╤В╤М inpans
/*
function vocab(word)
{   
    var word;    
    var _vocab, i;
    i=1;

    for(;;)
    {
        _vocab = ktab(i);

        if( _vocab == 0 ) 
            break;

        if (word.length > 4)
        {
            word = word.substr(0, 4);
        }
        
        if (word.length < 4)
        {
            for(i = 0; i < (4 - word.length); i++)
            {
                 word = word + " ";
            }            
        }        

        if (atab(i) == word)
        {
            return (_vocab);
        }
        i++;
    }
    return( -1 );    
}

*/




     
    


   

       
 