function sumIfEven (a, b) {
    if (a%2==0) {
        return a*b
    } else return a+b
};

function getQuarter (x, y) {
    if ( x === 0 && y === 0 ) {
        return "origin";
    } else if ( x === 0 && y === 1 ) {
        return "y-axis";
    } else if ( x===1 && y===0 ) {
        return "x-axis"
    } else if ( x>0 && y>0 ) {
        return "first quarter"
    } else if ( x>0 && y<0 ) {
        return "second quarter"
    } else if ( x<0 && y<0 ) {
        return "third quarter"
    } else if ( x<0 && y>0 ) {
        return "forth quarter"
    }

};

function addPositives (a,b,c) {
    let result = 0 ;
    if (a>0) {
        result +=a
    }
    if (b>0) {
        result +=b
    }
    if (c>0) {
        result +=c
    }
    return result 
 };

 function calculateMax (a,b,c) {
        let sum = a + b + c;
        let product = a * b * c;
        let result = 0;
        
        if(sum === product) {
            result = 3;
        }
        if(sum > product) {
            result = sum + 3;
        } else result = product + 3;
        
        return result;
    };

const getMark = rate =>  {
     let result = "" ;
     
     if (rate <0 || rate > 100) {
         return result ;
     } else if (rate > 0 && rate < 20) {
         result = "F"
     } else if (rate < 40) {
         result = "E"
     } else if (rate < 60) {
        result = "D"
     } else if (rate < 75) {
         result = "C"
     } else if (rate < 90) {
         result = "B"
     } else if (rate <= 100) {
         result = "A"
     } 
        return result;
 };

 const getPrime = number => {
    for (let i = 2; i < number ; i++) {
        if (number % i===0) {
            return false;
        } else return true;
    }

};

  function getSum() {
    let sum = 0;

    for (i = 0; i < 99; i++) {
        if ( i % 2 == 0 ) {
            sum += i;

        }   
    }

    return sum; 
};

  function getFaktorial (n) {
    let result = 1;

    for (let i=2; i<=n; i++) {

        result = result * i;
    }

     return result;
  };

  function getSumNumber (num) {
    var sum = 0, tmp;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
     return sum;
  };

  function revert(n) {
    var res = '';
    void function _(n) {
      if (n < 1) return;
      res += ~~(n % 10);
      _(n/10);
    }(n);
    return +res
 };

     function getMinOfArray(numArray) {
        return Math.min.apply(null, numArray);
      };


     function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
      };

     
      function indexOfSmallest(a) {
        var lowest = 0;
        for (var i = 1; i < a.length; i++) {
            if (a[i] < a[lowest])
                lowest = i;
        }
        return lowest;
    };

    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
    
        var max = arr[0];
        var maxIndex = 0;
    
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
    
        return maxIndex;
    };

    function indexOfMin(arr) {
        if (arr.length === 0) {
            return -1;
        }
    
        var min = arr[0];
        var minIndex = 0;
    
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                minIndex = i;
                min = arr[i];
            }
        }
    
        return minIndex;
    };

function sumOddIndex (arr) {
        let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) sum +=arr[i];
    };
    return sum;  
};

const selectionSort = arr => {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }

    return arr;
};

function getNameDay (dayNumber) {
    if (dayNumber > 7 ) {
        return "Error"
    } else if (dayNumber == 1) {
        return "понедельник"
    } else if (dayNumber == 2) {
        return "вторник"
    } else if (dayNumber == 3) {
        return "среда"
    } else if  (dayNumber == 4) {
        return "четверг"
    } else if (dayNumber == 5) {
        return "пятница"
    }else if (dayNumber == 6) {
        return "суббота"
    }else if (dayNumber == 7) {
        return "воскресенье"
    };
};
