let str = document.querySelector(".heading").innerHTML;
let chars = [...str]
console.log(chars);
const render = () => {
    let content = ''
    
    chars.map(item =>{
     
         content += `
         <span>${item}</span>
         `
    
        })
        document.querySelector(".heading").innerHTML = content
        
}
render()