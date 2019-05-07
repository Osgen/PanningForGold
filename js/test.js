
    const Regexes = require('./regexes');
    const files = ['01.html', '02.html','03.html','04.html','05.html', '06.html'];
    let fileProcessing = require('./fileProcessing');
    
    
    fileProcessing.writeFile("resultados.txt", fileProcessing.processFiles(files, Regexes));
