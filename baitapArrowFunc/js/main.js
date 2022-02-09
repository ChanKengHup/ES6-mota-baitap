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
        // Bỏ những element có active trước
        let currentActive = document.querySelectorAll(".active")
        currentActive[0].className = currentActive[0].className.replace(" active", "");
        // thêm active cho những element hện tại click chưa có
        button[i].className += " active"

        colorList.map((color, index) => {
            let colorHouse = document.getElementById("house");
            if(i == index) {
                let currentColor = colorList[index];
                colorHouse.classList.add(currentColor);
            }
            else {
                let currentColor = colorList[index];
                colorHouse.classList.remove(currentColor);
            }
        })
    }
}