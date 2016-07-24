import {Person} from 'app/person'; 
import {Bean1} from 'bil1/bean1';
import {Pod2} from 'bil2/pod2';
import {Observable} from 'rxjs/Observable';
 
let person = new Person();
let bean1 = new Bean1();
let pod2 = new Pod2();

var x = Observable;

console.log(person.name, bean1.name, pod2.name);