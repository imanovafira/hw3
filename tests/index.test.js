describe('sumIfEven', () => {
    it('should return sum (odd number)', () => {
        const first = 5;
        const second = 5;
        const expected = 10;

        const actual = sumIfEven(first, second);

        assert.deepEqual(actual, expected);
    });
    
    it('should return product (even number)', () => {
        const first = 2;
        const second = 5;
        const expected = 10;

        const actual = sumIfEven(first, second);

        assert.deepEqual(actual, expected);
    });
});

describe('addPositives', () => {
    it(' should return result ', () => {
        const first = 5;
        const second = 5;
        const expected = 10;

        const actual = sumIfEven(first, second);

        assert.deepEqual(actual, expected);
    }); 
});

describe ( 'getQuarter', () => {
    it ('should return origin (x=0 && y=0)', () => {
        const first = 0;
        const second = 0;
        const expected = "origin" ;

        const actual = getQuarter( first, second );

        assert.deepEqual ( actual, expected );
    
    });

    it ('should return y-axis (x=0 && y>0)', () => {
        const first = 0;
        const second = 1 ;
        const expected = "y-axis" ;

        const actual = getQuarter( first, second );

        assert.deepEqual ( actual, expected );
    });

    it ('should return x-axis (x=1 && y>0)' , () => {
            const first =  1;
            const second = 0;
            const expected = "x-axis" ; 
    
            const actual = getQuarter(first, second);
    
            assert.deepEqual (actual, expected); 
    });
    it ('should return first quarter (x>0 && y>0)' , () => {
        const first = 4 ;
        const second =  5 ;
        const expected = "first quarter" ;
    
        const actual = getQuarter(first, second);
    
        assert.deepEqual (actual, expected); 
    });
    it  ('should return second quarter (x>0 && y<0)' , () => {
        const first = 4;
        const second = - 5;
        const expected = "second quarter" ;
    
        const actual = getQuarter(first, second);
    
        assert.deepEqual (actual, expected); 
    });
    it ('should return third quarter (x<0 && y<0)' , () => {
        const first = - 4;
        const second = -5;
        const expected = "third quarter" ; 
    
        const actual = getQuarter(first, second);
    
        assert.deepEqual (actual, expected); 
    });
    it ('should return forth quarter (x<0 && y>0)' , () => {
        const first =  -4;
        const second = 5;
        const expected = "forth quarter" ; 
    
        const actual = getQuarter(first, second);
    
        assert.deepEqual (actual, expected); 
    });
   
});

describe('calculateMax', () => {
    it('should return sum + 3 (1, 1, 1) ', () => {
        const first = 1;
        const second = 1;
        const third = 1;
        const expected = 6;

        const actual = calculateMax(first, second, third );

        assert.deepEqual(actual, expected);
    });

    it('should return product + 3 (3, 2, 5)', () => {
        const first = 3;
        const second = 2;
        const third = 5;
        const expected = 33;

        const actual = calculateMax(first, second, third );

        assert.deepEqual(actual, expected)
    });
    it ('should return 3 (0, 0, 0)', () => {
        const first = 0;
        const second = 0;
        const third = 0;
        const expected = 3;

        const actual = calculateMax(first, second, third );

        assert.deepEqual(actual, expected)

    });

});

describe('getMark', () => {
    it ('should return A score (100)', () => {
        const rate = 100;
        const expected = "A";

        const actual = getMark(rate);

        assert.deepEqual(actual, expected);
    });
    it ('should return B score (89)', () => {
        const rate = 89;
        const expected = "B";

        const actual = getMark(rate);

        assert.deepEqual(actual, expected);
   });
   it ('should return C score (74)', () => {
       const rate = 74;
       const expected = "C";

       const actual = getMark(rate);

       assert.deepEqual(actual, expected)
   });
   it ('should return D score (59)', () =>  {
        const rate = 59;
        const expected = "D";

        const actual = getMark(rate);

        assert.deepEqual(actual, expected)
    });
    it('should return E score (39)', () => {
        const rate = 39;
        const expected = "E";

        const actual = getMark(rate);

        assert.deepEqual(actual, expected);
    });
    it('should return F score (19)', () => {
        const rate = 19;
        const expected = "F";

        const actual = getMark(rate);

        assert.deepEqual(actual, expected);
    });
});

describe ('getSum', () => {
    it('should return sum even numbers ', () => {
        const expected = 2450;
        

        const actual = getSum();

        assert.deepEqual(actual, expected);
    });
});

describe('getPrime', () => {
    it('should return (3)', () => {
        const num = 3;
        const expected = true;

        const actual = getPrime(num);

        assert.deepEqual(actual, expected);
    });

    it('should return (8)', () => {
        const num = 8;
        const expected = false;

        const actual = getPrime(num);

        assert.deepEqual(actual, expected);
    });


});

describe('getFaktorial', () => {
    it('should return faktorial (1)', () => {
        const faktorial = 1;
        const expected = 1;

        const actual = getFaktorial(faktorial);

        assert.deepEqual (actual, expected)

    });

    it('should return faktorial (5)', () => {
        const faktorial = 5;
        const expected = 120;

        const actual = getFaktorial(faktorial);

        assert.deepEqual (actual, expected)

    }); 
});     

describe ('getSumNumber', () => {
    it ('should return  sum number (12)', () => {
        const number = 12;
        const expected = 3;

        const actual = getSumNumber (number)

        assert.deepEqual (actual, expected)

    })
});

describe ('revert (num) ', () => {
    it ('should return revert (123)', () => {
        const num = 123;
        const expected = 321;

        const actual = revert (num);

        assert.deepEqual (actual, expected);
    });
});

describe ('getMinofArray (numArray)', () => {
    it ('should return get min of array [1,2,3,4]', () => {
        const numArray = [1,2,3,4];
        const expected = 1;

        const actual = getMinOfArray (numArray);

        assert.deepEqual (actual, expected);
    });

});
     
describe ('getMaxofArray (numArray)', () => {
    it ('should return get max of array [1,2,3,4]', () => {
        const numArray = [1,2,3,4];
        const expected = 4;

        const actual = getMaxOfArray (numArray);

        assert.deepEqual (actual, expected);
    });

});

describe ('indexOfMax (arr)', () => {
    it('should return index of max array [1,2,3,4]', () => {
        const index = [1,2,3,4];
        const expected = 3;

        const actual = indexOfMax (index)

        assert.deepEqual (actual, expected)
    });
});

describe ('indexOfMin (arr)', () => {
    it('should return index of min array [1,2,3,4]', () => {
        const index = [1,2,3,4];
        const expected = 0 ;

        const actual = indexOfMin (index);

        assert.deepEqual (actual, expected);
    });
});

describe ('sumOddIndex (arr)', () => {
    it ('should return sum odd index [1,2,3,4,5,6]', () => {
        const arr = [1,2,3,4,5,6];
        const expected = 12;

        const actual = sumOddIndex(arr);

        assert.deepEqual(actual, expected);
    });
});

describe ('selectionSort (arr)', () => {
    it ('should return selection sort [2,5,1,3,7,4]', () => {
        const arr = [2,5,1,3,7,4];
        const expected = [1,2,3,4,5,7];

        const actual = selectionSort (arr);

        assert.deepEqual (actual, expected);
    });
});

describe ('getNameDay (dayNumber)', () => {
    it('should return get name day (1,2,3,4,5,6,7)', () => {
        const dayNumber = 1;
        const expected =  "понедельник";

        const actual = getNameDay (dayNumber);

        assert.deepEqual (actual, expected);
    });
    it('should return get name day (1,2,3,4,5,6,7)', () => {
        const dayNumber = 2;
        const expected =  "вторник";

        const actual = getNameDay (dayNumber);

        assert.deepEqual (actual, expected);
    });
    it('should return get name day (1,2,3,4,5,6,7)', () => {
        const dayNumber = 3;
        const expected =  "среда";

        const actual = getNameDay (dayNumber);

        assert.deepEqual (actual, expected);
    });
    it('should return get name day (1,2,3,4,5,6,7)', () => {
        const dayNumber = 4;
        const expected =  "четверг";

        const actual = getNameDay (dayNumber);

        assert.deepEqual (actual, expected);
    });
    it('should return get name day (1,2,3,4,5,6,7)', () => {
        const dayNumber = 5;
        const expected =  "пятница";

        const actual = getNameDay (dayNumber);

        assert.deepEqual (actual, expected);
    });
    it('should return get name day (1,2,3,4,5,6,7)', () => {
        const dayNumber = 20;
        const expected =  "Error";

        const actual = getNameDay (dayNumber);

        assert.deepEqual (actual, expected);
    });
})