// bài 1:  Dùng toán tử chia lấy dư để kiểm tra số nguyên dương javascript
// Lưu ý: Hàm Number.isInteger() là hàm kiểm tra tính nguyên của một giá trị
function kiemTraSoNguyenDuong(a){
    if(Number.isInteger(a) && a>0){
        console.log(a +" "+"là số nguyên dương")
    }
    else{
        console.log(a +" "+"Không là số nguyên dương")
    }
}
kiemTraSoNguyenDuong(-5)
kiemTraSoNguyenDuong(15)
// bài 2: Kiểm tra số nguyên âm trong javascript
function kiemTraSoNguyenAm(b){
    if(Number.isInteger(b) && b<0){
        console.log(b+" "+"là số nguyên âm")
    }
    else{
        console.log(b+" "+"Không là số nguyên âm")
    }
}
kiemTraSoNguyenAm(-5)
kiemTraSoNguyenAm(-5.125)
// bài 3: Tính tổng hai số bằng Javascript (cộng hai số)
function tongHaiSo(a,b){
    return (a+b)
}
console.log(tongHaiSo(-5,20))
// bài 4: Giải phương trình bậc 1 bằng Javascript ax + b = 0
function giaiPhuongTrinh(a,b){
    if (a==0){
        return("Phương trình vô ngiệm");
    }
    else{
        return(-b/a);
    }
}
console.log(giaiPhuongTrinh(0,10));
console.log(giaiPhuongTrinh(2,3));
//  bài 5: Kiểm tra số nguyên tố bằng Javascript
function kiemTraSoNguyenTo(n){
    if (n<=1){
        return(n +" "+ "không là số nguyên tố")
    }
    for(let i = 2; i <= Math.sqrt(n);i++){
        if (n%i == 0){
            return(n +" "+ "không là số nguyên tố")
        }
    }
    return(n +" "+ "là số nguyên tố")
}
console.log(kiemTraSoNguyenTo(3))
console.log(kiemTraSoNguyenTo(7))
console.log(kiemTraSoNguyenTo(14))
// bài 6:  Kiểm tra số chính phương
function canBacHai(a){
    let canBacHai = Math.sqrt(a);
    let phanNguyen = Math.floor(canBacHai);
    return(phanNguyen)
}
// console.log(canBacHai(16))
function kiemTraSoChinhPhuong(a){
    if(canBacHai(a)*canBacHai(a)==a){
        return(a+" "+"là số chính phương")
    }
    else{
        return(a+" "+"không là số chính phương")
    }
}
console.log(kiemTraSoChinhPhuong(16))
console.log(kiemTraSoChinhPhuong(12))