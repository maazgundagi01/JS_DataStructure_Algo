console.log("Hello, World!")

//Array
const students =['michael', 'john', 'eric', 'jonas', 'karen', 'olsen', 'jackey','michael']
//One by One Find Algorithm
const searchStudent = (studentName) => {
    let didFind = false;
    for(i = 0; i < students.length; i++) {
        let marker = ' '
        if(students[i]==studentName){
            didFind = true;
            marker = ' < match found'
        }
        console.log('loop executed time:' + i + marker)
    }
    console.log(`Student was found?: ${didFind}`)
}
searchStudent('eric')
