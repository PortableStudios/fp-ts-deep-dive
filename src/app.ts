import OOApp from './ObjectOrientedApp/app'
import { FPApp, getTaskInterpreter } from './FunctionalApp/app'

console.log("Here's the result of our OO App");
(new OOApp).run();

console.log("-------------------------------");

console.log("Here's the result of our FP App");

(async () => {
  const interpreter = getTaskInterpreter()
  await FPApp(interpreter)()()
})()
