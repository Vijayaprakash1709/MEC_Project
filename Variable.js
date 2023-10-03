let name = 'Vijay'
console.log(typeof(name))

let age = 19
console.log(typeof(age))

let myData = {
    'name':'Vijay',
    'age':19,
    'city':'Attur',
    'college':'MEC'
}
console.log(typeof(myData))
console.log(myData)
console.log(myData.city)

let mySkills=['Spring Boot','Jinja','Thymeleaf','Node']
console.log(mySkills[1])
mySkills[1] = 'React'
console.log(mySkills[1])

var myGroup=new Array(['Training','Development'],['Trainings','Developments'])
console.log(myGroup[1])

myData = JSON.stringify(myData)
console.log(myData)
console.log(myData.city)

myData = JSON.parse(myData)
console.log(myData)
console.log(myData.city)