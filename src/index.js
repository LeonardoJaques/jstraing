// const EntityBase = require('./entityBase');

// console.log(
//   new EntityBase({
//     name: 'Leonardo Jaques',
//     gender: 'male',
//   }).name
// );
// console.log(
//   new EntityBase({
//     name: 'Lana',
//     gender: 'Female',
//   }).name
// );
const assert = require('assert');
const Employee = require('./employee');
const Manager = require('./manager');
const Util = require('./utils');

const GENDER = {
  male: 'male',
  female: 'female',
};

const CURRENT_YEAR = 2021;
Date.prototype.getFullYear = () => CURRENT_YEAR;

{
  const employee = new Employee({
    name: 'Gata Anã',
    gender: GENDER.female,
  });

  assert.throws(() => employee.birthYear, {
    message: 'you must define age first!',
  });
}

{
  const employee = new Employee({
    name: 'Zig',
    age: 6,
    gender: GENDER.male,
  });

  assert.deepStrictEqual(employee.name, 'Mr. Zig');
  assert.deepStrictEqual(employee.age, undefined);
  assert.deepStrictEqual(employee.gender, undefined);
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32));

  const expectedBirthYear = 2015;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

  // without set can`t change!!
  employee.birthYear = new Date().getFullYear() - 80;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

  employee.age = 80;
  assert.deepStrictEqual(employee.birthYear, 1941);

  console.log('\n ----employee----');
  console.log('employee.name', employee.name);
  console.log('employee.age', employee.age);
  console.log('employee.gender', employee.gender);
  console.log('employee.grossPay', employee.grossPay);
  console.log('employee.netPay', employee.netPay);
}

{
  const manager = new Manager({
    name: 'Lana',
    age: 3,
    gender: GENDER.female,
  });

  assert.deepStrictEqual(manager.name, 'Ms. Lana');
  assert.deepStrictEqual(manager.age, undefined);
  assert.deepStrictEqual(manager.gender, undefined);
  assert.deepStrictEqual(manager.birthYear, 2018);
  assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000));
  assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32));

  console.log('\n ----manager----');
  console.log('manager.name', manager.name);
  console.log('manager.age', manager.age);
  console.log('manager.gender', manager.gender);
  console.log('manager.grossPay', manager.grossPay);
  console.log('manager.netPay', manager.netPay);
}
