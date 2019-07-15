
/* 
---Code Bloquant----
var content=fs.readFileSync('MonFichier.txt');
consol.log('Mon Fichier', content);

---Code non bloquant
fs.readFile('Monfichier,(err,contant) => {
    if (err) {
        throw err;
    }
    consol.log('Monfichier :', content);
});

*/

/*
let fs =require('fs')
fs.readFile('Neon.mp4',(err,data)=>{
    if (err) throw err
    fs.writeFile('copy.mp4', data, (err)=> {
        if (err) throw err

        console.log("Le fichier à bien ete copié")
        
    });
})
*/

let fs = require('fs');
let file='Neon.mp4';

fs.stat(file,(err,stat)=>{
    let total = stat.size
    let progress = 0
    let read=fs.createReadStream(file);
    let write=fs.createWriteStream('Copy.mp4');

    //data lorsque on recois des evenements 
    read.on('data',(chunk)=>{
        process+=chunk.length
        console.log("J'ai lu"+Math.round(100*process/total)+ "%");
    })
    read.on('end',()=>{
        console.log("J'ai fini de lire le fichier")
    })
})

read.pipe(write)//voir man 
write.on('finish',()=>{
    console.log("le fichier à bien été copié")
})
