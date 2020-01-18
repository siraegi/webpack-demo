// lodash/lodash.js => lodash/index.js
var _ = require('lodash');
import './css/style.css';
import './css/hello.scss';
// 반드시 {} 안에 동일한 이름으로 import 해야한다.
import {area} from './js/circle';
// default import : {} 가 없고 이름을 바꿀 수 있다.
import cube from './js/cube';

/*function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}*/
const component = () => {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

console.log("webpack dev!!!", area(5));
console.log("default import:", cube(5));

document.body.appendChild(component());