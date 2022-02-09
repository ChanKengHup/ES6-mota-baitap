const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"]
const render = (colorList) => {
  let content = ''
    colorList.map((color, index) => {
        if(index == 0) {
         content += `<button class="color-button ${color} active"></button>`

        }
        else {
            content +=  `<button class="color-button ${color}"></button>`
        }
    })
  document.getElementById("colorContainer").innerHTML = content
}
render(colorList)

let button = document.getElementsByClassName("color-button");

for (let i = 0; i<button.length; i++) {
    button[i].onclick = function () {
        let currentActive = document.querySelectorAll(".active")
        currentActive[0].className = currentActive[0].className.replace(" active", "");
        button[i].className += " active";

        colorList.map((color, index) => {
            if(i == index) {
                let currentColor = colorList[index];
                let house = document.getElementById("house");
                house.classList.add(currentColor);
            }
            else {
                let currentColor = colorList[index];
                house.classList.remove(currentColor);
            }
        })
    }
}