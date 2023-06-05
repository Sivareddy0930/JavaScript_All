function addOne() {
    return Array.from(arguments, x => x + 1);// here we used  array like object,function.
}                                                   //array like object means arugments that  represent 1,2,3.
                                                    //function represent condition that  we are provided in it as arugment.
console.log(addOne(1, 2, 3));