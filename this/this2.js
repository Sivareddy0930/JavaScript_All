const mo = {
    x: 42,
    getX: function () {
      return this.x;
    },
};

const unboundGetX = mo.getX(); // Invoking the method and assigning the result
//Here this keyword pointing to current object mo.

console.log(unboundGetX); // 42


//=========================================================================================

const mo1 = {
    x: 42,
    getX: function () {
      return this.x;
    },
};

const unboundGetX1 = mo1.getX; // Assigning the method reference, not invoking

const value = unboundGetX1(); // Invoking the method separately

//Here this keyword pointing to global object 
// because mo1.getX is store in new variable unboundGetX1 and invoke this variable as function point to global scope.


console.log(value); //undefined
