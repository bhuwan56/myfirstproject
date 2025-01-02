fetchData=(c)=>{
    console.log("api is fetching.");
    setTimeout(() => {
        c("api successfully fetched");
    },3000);
};
fetchData((m)=> {
    console.log(m);
});
console.log("this is middle log");
setTimeout(()=>{
    console.log("hello world");
},5000);