const fs = require('fs');

module.exports.processFiles = function (files, regexes){
    
    let results ="";
    
    //Global counters
    let sumHtmlComment = 0, sumAppComment = 0, sumIpAddress = 0, sumEmailAddress = 0, sumSqlQuery = 0, sumSqlStringConnection = 0, sumHtmlHiddenField = 0;
    
    //Summary
    let summary="";

    files.forEach(file => {
        let readFile = fs.readFileSync(file, 'utf-8');

        //Counters per file
        let countHtmlComment = 0, countAppComment = 0, countIpAddress = 0, countEmailAddress = 0, countSqlQuery = 0, countSqlStringConnection = 0, countHtmlHiddenField = 0;

        //File results
        let fileResults="";

        //Get single line per file
        let lines = readFile.split("\n");
        
        //Iterate every line
        lines.forEach(line => {
            
            if(regexes.HtmlComment.test(line)) {
                countHtmlComment++;
                sumHtmlComment+=countHtmlComment;
            }
            if(regexes.AppComment.test(line)) {
                countAppComment++;
                sumAppComment+=countAppComment;
            }
            if(regexes.IpAddress.test(line)) {
                countIpAddress++;
                sumIpAddress+=countIpAddress;
            }
            if(regexes.EmailAddress.test(line)) {
                countEmailAddress++;
                sumEmailAddress+=countEmailAddress;
            }
            if(regexes.SqlQuery.test(line)) {
                countSqlQuery++;
                sumSqlQuery+=countSqlQuery;
            }
            if(regexes.SqlStringConnection.test(line)) {
                countSqlStringConnection++;
                sumSqlStringConnection+=countSqlStringConnection;
            }
            if(regexes.HtmlHiddenField.test(line)) {
                countHtmlHiddenField++;
                sumHtmlHiddenField+=countHtmlHiddenField;
            }    
        });//lines.forEach--End

        //Print results per file
        fileResults+=`\n ${file} 
         Comentarios HTML: ${countHtmlComment} 
         Comentarios de la app: ${countAppComment} 
         Direcciones IP: ${countIpAddress}
         Direcciones de correo electrónico: ${countEmailAddress}
         Consultas SQL: ${countSqlQuery}
         Cadenas de conexión a la base de datos: ${countSqlStringConnection}
         Campos ocultos de entrada: ${countHtmlHiddenField}`;

        results+=fileResults;
        
        console.log(fileResults);
    });//files.forEach((file)--End
    
    //Print summary
    summary+= `\n Resumen
    Comentarios HTML: ${sumHtmlComment}
    Comentarios de la app: ${sumAppComment}
    Direcciones IP: ${sumIpAddress}
    Direcciones de correo electrónico: ${sumEmailAddress}
    Consultas SQL: ${sumSqlQuery}
    Cadenas de conexión a la base de datos: ${sumSqlStringConnection}
    Campos ocultos de entrada: ${sumHtmlHiddenField}`;

    console.log(summary);

    return results+=summary;
}//processFiles--End

module.exports.writeFile = function(dir, content){
    fs.writeFile(dir, content, 'ascii', (err)=>{
        if(err){
          console.log(err);      
        }
    });
}//writeFile--End