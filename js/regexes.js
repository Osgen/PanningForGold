    
//Regexes
    
module.exports  = {
    HtmlComment:/<!--.+-->|<!--.|.-->/,
    AppComment:/\/\/|\/\*/,
    IpAddress:/\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
    EmailAddress:/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/,
    SqlQuery: /SELECT|UPDATE|DELETE|INSERT/,
    SqlStringConnection: /\w(?=;){4}/,
    HtmlHiddenField: /type="hidden"/
};