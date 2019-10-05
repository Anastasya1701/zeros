module.exports = function zeros(expression) {
  
    
        let MasWithFact = expression.split('*');
        let LoneFactorial = [];
        let DoubleFactorial = [];

    // Distributed arrays with factorials and define them to numbers
        for(let i = 0; i<MasWithFact.length; i++){
            if(MasWithFact[i].includes('!!')){
                let numbersDouble = parseFloat(MasWithFact[i]);
                DoubleFactorial.push(numbersDouble);
            } else {
                let numbersOne = parseFloat(MasWithFact[i]);
                LoneFactorial.push(numbersOne);
            }           
        }      

    // Cycle for numbers with one factorial
        let MasWithNumbers = [];
        for(let i = 0; i<LoneFactorial.length; i++){          
            let x = LoneFactorial[i];
            while (x > 1){
                MasWithNumbers.push(x);
                x--;
            }                       
        }
    
    // Cycle for numbers with two factorial
        for(let j = 0; j<DoubleFactorial.length; j++){          
            let y = DoubleFactorial[j];
            while (y >= 2){
                MasWithNumbers.push(y); 
                y -=2;
            };                    
        }
    
    // Counting zeros
            let result = 0;
            MasWithNumbers.map( num => {    
                if(num % 5 === 0 ){
                     x = num;
                    while(x % 5 === 0){ 
                        x=x/5 ;                 
                        result++;
                        }
                } 
                if(!MasWithNumbers.includes(2)) {
                        result = 0;
                }
            })   
            return result    
    }





