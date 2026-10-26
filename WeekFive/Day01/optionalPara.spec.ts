function greet(name: string, city?: string) {
  if(name){
    console.log(`Hello ${name}`);
  }
  else if(name&&city){
  console.log(`Hello ${name}, mycity is ${city}`);
  }
}


greet("Bala");     //   Hello Bala    
greet("Bala", "Chennai"); //Hello Bala , mycity is Chennai