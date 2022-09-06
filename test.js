const obj = {
    name: 'Raj',
    profession: 'student' ,
    condition: function () {
        console.log(this.name + ' is ' +this.profession)
    },
    
}
obj['rol'] = 20
for (let value in obj) {
    console.log(value)
}
// console.log(obj)