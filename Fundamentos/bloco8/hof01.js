const fullName = name => {
    const email = `${name.split(' ').join('_')}@trybe.com`;
    return { fullName: name, email: email };
}

const newEmployees = callback => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra 
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond 
      id3: callback('Carla Paiva'), // Nome: Carla Paiva 
    }
    return employees;
};

console.log(newEmployees(fullName));