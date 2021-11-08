const _ = {

    //clamp - restricts a number to be within a given range: returns the nearest boundary value if number is out of the range
    clamp(number,lBound,uBound) {
      if (number < lBound){
        return lBound;
      } else if (number > uBound){
        return uBound;
      } else {
        return number;
      }
    },
  
    /*
      //Alternative clamp() method
        clamp(number,lBound,uBound){
          const lowerClampedValue = Math.max(number,lBound);
          const clampedValue = Math.min(lowerClampedValue,uBound);
  
          return clampedValue
        }
    */
  
  // inRange - checks if a given number falls with a given range
    inRange(number,lBound,uBound){
      if (uBound === undefined){
        uBound = lBound;
        lBound =0;
      }
  
      if (lBound > uBound){
        let temp = lBound;
        lBound = uBound;
        uBound = temp;
      }
  
      if ((number >= lBound)  &&  (number < uBound)){
        return true;
      } else {return false;}
    },
  
  // words- returns the individual words in a string as a list
    words(string){
      const words = string.split(' ');
  
      return words
    },
  
      // padding - adds spaces to string to achieve a desired string length
    pad(string,length) {
      let newString = [];
  
      for (let letter of string){
        newString.push(letter)
      }
  
      for (let i=0; i < length - string.length; i++){
        if ( i%2 === 0){
            newString.push(' ');
        } else {
          newString.unshift(' ');
        }
      }
  
      return newString.join('')
    },
  
  // has - checks if an item is present at the specided index 
  
    has(object,key){
      if (object[key] !=undefined){
        return true
      } else return false
    },
  
  // invert() - inverts the key value pairs of an object
    invert(object){
      let invertedObject = {};
      for (let key in object){
        const originalValue = object[key];
        invertedObject[originalValue] = key;
      }
  
      return invertedObject;
     
    },
  
    //findKey() - finds keys in an object
  
    findKey(object,predicate){
      for (let key in object){
        let results = predicate(object.key);
        if (results === true){
          return key
        }
      }
  
      return undefined;
    },
  
    // drop() - deletes a selected number of items from an array
  
    drop(array,number){
      if (number === undefined){ number = 1} 
      let newArray = array.slice(number)
        return newArray},
  
    //dropWhile() - drops elements in an array until the predicate function returns false
    dropWhile(array, predicate){
      const cb = (element,index) => {
        return !predicate(element,index,array);
      };
  
       let dropNumber = array.findIndex(cb);
       let droppedArray = this.drop(array,dropNumber);
       return droppedArray;
       },
  
      // chunk() - divides and array into two
      chunk(array,size=1){
        let arrayChunks = [];
        for (let i =0; i < array.length; i+= size){
          let arrayChunk = array.slice(i,i+size);
          arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
      }      
  };
  
  // Do not write or modify code below this line.
  module.exports = _;