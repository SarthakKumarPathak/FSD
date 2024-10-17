function getroll(num,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Roll number is ", num);
            resolve("Successfully done");
    },delay);
});
}
getroll(1,1000).then(()=>{
    getroll(2,2000).then(()=>{
        getroll(3,3000);
    });
});
