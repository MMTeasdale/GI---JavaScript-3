var personalInfo = () => {
   
    // pii is scoped inside the person function. Only accessible from within this function
    
    
    var pii = {
      name: 'Mariah Teasdale',
      ssn: '123-45-6789',
    };


    // Return a new object that has access to the person function scope
    // Only returns name 


    return {
      getName: () => {
        return pii.name;
      }
    };
};
  
console.log(personalInfo().getName());