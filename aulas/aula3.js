let la ="a"; // mudar valores sem mudar as variassveis  de ordem na saida!
let lb = "b";
let lc ="c";

console.log(la , lb , lc );

let temp = la;

la = lb;
lb = lc;
lc = temp;

console.log (la , lb , lc );


[la, lb , lc ] = [lb , lc  , la  ];

console.log (la , lb ,lc );