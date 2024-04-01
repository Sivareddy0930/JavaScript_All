let a = () => {
    for (let i = 0; i <= 10000; i++) {
      console.log(i);
    }
  
    setTimeout(() => {
      console.log("hi");
    }, 4000);
  };
  
  a();
  console.log("Async programming example:");
  console.log("This line will be printed before 'hi'");