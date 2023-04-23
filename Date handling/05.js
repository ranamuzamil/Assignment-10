// 5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).   
function compare_dates(d1,d2) {
    if (d1 > d2){
        console.log("Date1 > Date2");        
    } else if(d1 < d2) {
        console.log("Date1 < Date2");   
    } else{
        console.log("Date1 = Date2");   
    }  
}
compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))

compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'));

compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'));