const obj = {
    name: 'Raj',
    profession: 'student' ,
    condition: function () {
        console.log(this.name + ' is ' +this.profession)
    },
    
}
obj['rol'] = 20
console.log(obj)