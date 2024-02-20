let data = {}
data.nom = 'POtter'
data['prenom'] = 'harry'

if('prenom' in data){

}

let dt = {...data , age:23}

console.log(Object.keys(data))

delete  dt.age
console.log(dt);