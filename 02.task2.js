/* 
Есть предустановленный набор функций, на вход которые принимают число и возвращяют число.
Есть предустановленный массив функций - который реализует сценарий. Необходимо реализовать функцию f2(init, scenario), которая запускает данную структуру-сцерий и выводит в консоль результат его работы.
*/
let _ = require('lodash')

const plus = i => i+1;
const multy = i => i*2;

const scenario1 = plus;

const scenario2 = [
  multy,
];

const scenario3 = [
  plus,
  multy,
  plus,
];

const scenario4 = [
  plus,
  scenario3,
  [
    scenario1,
    scenario2,
  ],
  scenario1
];


function f2(value, scenario) {
    if (!_.isArray(scenario)) scenario = [scenario]
    return _
      .chain( scenario )
      .flattenDeep()
      .flow()
      .value()(value)
}

console.log( f2(2, scenario3 )  )
