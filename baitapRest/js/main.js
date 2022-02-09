// Khối lớp 1 
const getPoint = () => {
    let diemToan = Number(document.getElementById("inpToan").value);
    let diemLy = Number(document.getElementById("inpLy").value);
    let diemHoa = Number(document.getElementById("inpHoa").value);

    if(diemToan == '' && diemHoa == '' && diemLy == '') {
    document.getElementById("tbKhoi1").innerHTML = "Vui lòng nhập điểm"

    }
    else {

        caculatorPoint1(diemToan, diemLy, diemHoa)
    }
}

const caculatorPoint1= (...point) => {
    
   let totalPoint =  point.reduce((total, current) =>  total + current)
   
    let diemTB = totalPoint/3
    document.getElementById("tbKhoi1").innerHTML = diemTB.toFixed(2)
}
document.getElementById("btnKhoi1").onclick = getPoint

// Khối lớp 2

const getPoint2 = () => {
    let diemVan = Number(document.getElementById("inpVan").value);
    let diemSu = Number(document.getElementById("inpSu").value);
    let diemDia = Number(document.getElementById("inpDia").value);
    let diemEnglish = Number(document.getElementById("inpEnglish").value);

    if(diemVan == '' && diemSu == '' && diemDia == '' && diemEnglish == '') {
    document.getElementById("tbKhoi2").innerHTML = "Vui lòng nhập điểm"

    }
    else {

        caculatorPoint2(diemVan, diemSu, diemDia,diemEnglish )
    }
}

const caculatorPoint2= (...point2) => {
    let totalPoint2 
   totalPoint2 =  point2.reduce((total, current) =>  total + current)
    let diemTB2 = totalPoint2/4
    document.getElementById("tbKhoi2").innerHTML = diemTB2.toFixed(2)
}
document.getElementById("btnKhoi2").onclick = getPoint2