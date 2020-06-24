//Number 
var number1 = 5
var number2 = 6

var sum = number1 + number2
console.log(sum)

//String

var text1 = "Hello"
var text2 = "World"
var text = text1 + " " + text2 + " " + sum
console.log(text)

//Boolean

var isTrue = false
console.log("Biến này đang có giá trị là :" + isTrue)

//Array
var array = [1, 2, 3, 4, "Ha Noi", true, false]
var lengthArray = array.length
console.log(lengthArray)

var data = array[lengthArray - 1]
console.log(data)

/*array.pop()
console.log(array)

array.push(100)
console.log(array)

array.shift()
console.log(array)

array.unshift('Viet Nam')
console.log(array)*/

var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr = arr1.concat(arr2)
//var arr = [...arr1, ...arr2]

console.log(arr)

// Vòng lặp for

var arr = [1, 2, 3, 4, 5, 6]

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log("So chan :" + arr[i])
    }
    else {
        console.log("So le :" + arr[i])
    }
}

// Các bước để tính tổng
/* Tạo ra một biến tổng sum
    For 
    Qua mỗi lần lặp thì sum + a[i]
    Ra khỏi vòng lặp thì in ra giá trị của sum
*/
/* var sum = 0
for (var i=0;i<arr.length;i++)
{
    console.log("sum:"+sum)
    console.log("arr[i]:+ar[i]")
    sum = sum + arr[i]
    console.log("sum:"+sum)
    console.log("---------");

    
}*/
//console.log('Sum:' + sum);

/* Bài tập 2 : tạo ra một mảng arr2 có giá trị gấp 2 lần giá trị
    của các phần tử arr với arr = [1,2,3,4,5,6]
    sử dụng vòng lặp for 
    method push()
    Mục tiêu arr2 = [2,4,6,8,10,12]
*/
/*var arr2 = []
for (var i = 0; i < arr.length; i++)
{
    arr2.push(arr[i]*2)
}
console.log(arr2)*/

// Object
var user = 
{
    name : "Duy Viet",
    age : 21 ,
    city : "Ha Noi",
    isMarried : false
}
//console.log(user.name)
//console.log(user.age)

// Gán lại giá trị cho thuộc tính

/*user.name="Nguyen Van A"
console.log(user);

// Thêm thuộc tính mới cho object
user.email="vyu.204137@gmail.com"
console.log(user);*/

// Xóa thuộc tính của object
delete user.age
console.log(user);


