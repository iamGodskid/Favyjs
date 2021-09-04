# Favyjs
localstorage made easy and complex

## Favyjs

<p>brings complexity to the use of local storage using instances</p>

**# HOW TO USE

download the file on...
on github

<b><i>you can either use the ESN module or the ES6 module...</i></b>

<h4>add the file to you script thus</h4>
~~<script src="path/to/favy.js"></script>
`

<script src="path/to/favy.es.js"></script>

<i>if you are most familiar with Nodejs... youre free to use the ESN module on your browser.. but ensure to add the path to Nodifyjs in you script</i>

<script src="favyjs/Nodifyjs/nodifyjs></script>


LETS GO TO THE MAJOR PART

             <b>Using the ESN Module, you can require favyjs thus..</b>
<script>
             const fave = require("favyjs/favy.js")

//now call a Favyjs Instance...

const Favy = new Name()
                                                  </script>                                        
                                                  <h3>note</h3>
                                                  <b><i>Favyjs instances/constructors require a single parameter per call...</i></b>

Favyjs Instances/Constructors Include
Name()
Age()
Email()
Phone()
Password()

ensure to use the new javascript keyword infront of all Favyjs Instances/constructors
                                                  <b>example</b>
<script>
                                                  const fave = new Name();
                                                  </script>

Getting stored data on Favyjs
for each constructor...

getname()
getage()
getemail()
getphone()
getpassword()
                                                  
                                                  <b>Favyjs at work</b>
                                                  ```
                                                  <script>
                                                  //ESN Module
                                                  <script>
                                                  const req = require('favyjs/favy.es.js');
                                                  const fave = new Name('Young Developer');
                                                  console.log(fave.getname());
                                                  
                                                  //output ... Young Developer
                                                  
                                                  //ES6 Module...
                                                  
                                              import {Name} from 'favyjs/favy.js';
                                                  
                                                  const fave = new Name('Young Developer');
                                                  console.log(fave.getname());
                                                  
                                                  //output ... Young Developer
                                                  ```

Enjoy Favyjs

