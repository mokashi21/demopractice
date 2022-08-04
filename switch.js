

function findMax(num) {
    let =0;
    for (i=0;i*i<=num;i++) {
       
        
    }
    return(i-1);
}

function find(num) {

    let max =findMax(num);

    for (let a = 0; a <=max; a++) {
        for (let b = 0; b <= max; b++) {
           
            if (a*a+(b*b) == num)
             {
                if (a<=b) {
                    console.log("Number pair is \t"+(a)+" and "+(b))
                }    
            }
            
        }        
        
    }
    
}

find(50);
find(81)