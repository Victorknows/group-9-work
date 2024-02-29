const createDict = (keys, values) =>{
    //Creates an empty object to store our final result
   let result = {};
    //Loops and creates the smallest length that is either equal or less than both keys and values
     for(let i=0; i < keys.length && values.length; i++){
       //assigns the value to the key
       result[keys[i]] = values[i]
     }
    
    for(let i = values.length; i < keys.length; i++){
      result[keys[i]]  = null
    }
    return result;
  }
  