
var reverse = function(x) {
    
    var int = 0;
    
    var ab = Math.abs(x);
    

    while(ab > 0){
        int = int * 10 + ab % 10;
        ab = ab /10 | 0;
    }
    
    if(int > Math.pow(2, 31) + 1 || x < Math.pow(-2, 31)) return 0;

    return x > 0 ? int : -int;
};