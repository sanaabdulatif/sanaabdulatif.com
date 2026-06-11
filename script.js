const words=[
"BSc Physics Graduate",
"Creative Thinker",
"AI Video Creator",
"Developer",
"Future Innovator"
];

let i=0;

setInterval(()=>{
document.getElementById("typing").textContent=words[i];
i=(i+1)%words.length;
},1500);
