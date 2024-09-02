// New hamesha object k sath use hota h means k new obj:

// let pro = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 3) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// })

// let onFulFilled = (result) => {
//     document.write(result + " - Promise Fulfilled:")
// }
// let onRejected = (result) => {
//     document.write(result + " - Promise Rejected:")
// };

// pro.then(onFulFilled).catch(onRejected);

// OR 

// pro.then((result)=>{
//  document.write(result + " - Promise Fulfilled:")
// }).catch((err)=>{
//     document.write(err + " - Promise Rejected:")

// })
// console.log(pro);


// let pro = new Promise((resolve , reject)=> {
//     document.write("Pending........")
//     setTimeout(() => {
//         let a = 1 + 7;
//     if (a == 3) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     } 
//     },3000)
// }) 

// let onFulFilled = (result) => {
//     document.write(result + " - Promise Fulfilled:")
// }
// let onRejected = (err) => {
//     document.write(err + " - Promise Rejected:")
// }

// pro.then(onFulFilled).catch(onRejected);


// isko hum aise use nhi krte isko hum Promise ya async and await k sath use krte hn aise operation k sath use hoty hn 

// console.log("Hello 1");
// setTimeout(() => {
//     console.log("Hello 2")
// }, 3000);
// console.log("Hello 3");


// async keyword hamesha function ko ek promise return krta h  

// async function example() {

//    return "Hello World"

//    console.log("Hello 1")
//    await console.log("Hello 2")
//    console.log("Hello 3")
// }
// example();
// console.log("Hello 4")
// console.log("Hello 5")

// console.log(example());




         //API Fetch krne k Liye use hota hy async and await
         //json mai hum apna url json form mai get kre gy

         // async function example() {
         //    console.log("Hello 1")
         //    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
         //    console.log("Hello 2")
         //   const posts = await data.json()
         //   console.log("Hello 3")
         //   return posts;
         
         // }
         // let a = example();
         // document.write(a);
         // console.log("Hello 4")
         // console.log("Hello 5")
         
      

   
         // async function example() {
            
            //agr mai chati hu k error chaly to mai is url mai koi b mistake create krskhti hu
         //    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        
         //   const posts = await data.json()
           
          
         //   return posts;
         
         // }      
         // example().then((result) => {
         //    console.log(result);
         // }).catch((err) => {
         //    console.log(err);
         // })
        