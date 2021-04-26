//写对路径 the path，同一路径下是：'./'
//import { str } from './modulea.mjs';
//console.log(str); //exporting a

//default export, 不用{}
import anything from './modulea.mjs';
console.log(anything); //ok

//module总是use strict mode, eg,在modulea里定义一个var, 两份文件不用export, import无法提取：
import { test } from './modulea.mjs';
console.log(test); //1