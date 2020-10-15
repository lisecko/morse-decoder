const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
  	let ten = ''
    let result_temp = ''
    let result = ''
    let symbols = ''


    for(let i = 0; i < expr.length; i++)
    {
    	ten += expr[i]
        if((i + 1) % 10 === 0)
        {
        	if(ten === '**********') result += ' '
            else 
            {            
                for(let j = 0; j < ten.length; j++)
                {            
            	    result_temp += ten[j]
                    if((j + 1) % 2 === 0)
                    {
                
                        if(result_temp === '10') symbols += '.'
                        if(result_temp === '11') symbols += '-'                   
                    
                        result_temp = ''
                    }               
                
                }            
                for(var index in MORSE_TABLE)
    		    {
        		    if(symbols === index) result += MORSE_TABLE[index]
    		    }
            }
            ten = ''
            symbols = ''
        }
    }

    return result;
}

module.exports = {
    decode
}