let students=[
    {
        name:"ramesh",
        paidStatus:false,
        scholarship:true
    },
    {
        name:"ganga",
        paidStatus:true,
        scholarship:false
    },
    {
        name:"jasmine",
        paidStatus:false,
        scholarship:false
    }
]
students.forEach((student)=>{
    if(student.paidStatus || student.scholarship){
        console.log(`paid ${student.name} and can give exam`);
    }else{
        console.log(`not paid ${student.name} and cannot give exam`);
    }
})
