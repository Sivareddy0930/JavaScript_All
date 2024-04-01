let car={
    company:"TataMotors",
    owner:"RathanTata",
    model:4444
}
/* for(info in car){
     console.log(info);
 }
//if we use for-in same like as arrays for-of loop.it will give keys instead of values.
//generally we know that objects can read by using objectname.varablename(car.info)
//--------------------------------------------------------------------------------
/* for(info in car){
     console.log(car.info);
    }*/
// still output is it will give keys instead of values.
//----------------------------------------------------------------------------------
//To overcome this we use syntax => console.log(car[info]) for objects concept.
for(info in car){
    console.log(car[info]);
    }
