function deliveryboys(A,B,C) {
    let count = 0;
    for (let i = C; i < B; i++) {
        if (i==B && count!=A) {
            i=0;
        }
        count++;
        if (count==A) {
        break;    
        }
        
    }
    console.log(i)
}

deliveryboys(5,1,8);
deliveryboys(5,2,5);