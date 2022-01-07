// Две функции palindrom, обе рабочие; проверял какая работает быстрее, в обоих случаях возращаеют bool переменную 

function palindrom (string){
    return string.replace(/\s/g, "") == string.replace(/\s/g, "").split('').reverse().join('');
}

console.time('test');
    for (let i=0; i<100000; i++){
        palindrom('шалаш');
        palindrom('а роза упала на лапу азора');
        palindrom('кенгшщ');
        palindrom('кенгшщ щшгнек');
    }
console.timeEnd('test');

console.log('-----------------');

function bedFunctionWithRealyBadСomplexity(string){
    string = string.replace(/\s/g, "");
    const len = string.length; 
    for (i = 0; i < len; i++){
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true; 
}

console.time('test 2');
    for (let i=0; i<100000; i++){
        bedFunctionWithRealyBadСomplexity('шалаш');
        bedFunctionWithRealyBadСomplexity('а роза упала на лапу азора');
        bedFunctionWithRealyBadСomplexity('кенгшщ');
        bedFunctionWithRealyBadСomplexity('кенгшщ щшгнек');
    }
console.timeEnd('test 2');
