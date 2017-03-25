/*
Необходимо создать функцию f1(str), на вход которой подается строка с текстов английкого алфавита:
Lorem ipsum dolor sit amet, ne dicat propriae torquatos mei, nam doming eirmod sapientem ne. Nec sint recusabo ad, duo delenit inciderint ut. Eu qui adhuc affert dicant. Ne sonet argumentum sea, his lorem delectus ex, no mel minim exerci. Pro te labore habemus reformidans, eu dolor feugiat tractatos sed. 
Функция должна возвращать объект: ключ, которого слово приведенное к нижнему регистру, значение количество упомянаний в тексте.
 */
let _ = require('lodash')

let str = "Lorem ipsum dolor sit amet, ne dicat propriae torquatos mei, nam doming eirmod sapientem ne. Nec sint recusabo ad, duo delenit inciderint ut. Eu qui adhuc affert dicant. Ne sonet argumentum sea, his lorem delectus ex, no mel minim exerci. Pro te labore habemus reformidans, eu dolor feugiat tractatos sed."

function f1(str) {
    return _
        .chain(str)
        .toLower()
        .words()
        .countBy()
        .value()
}

console.log( f1( str ) )
