# JavaScript
1. Phạm vi
- Block (Khối)
+ Biến dk khai báo trong {}
+ var: Không bị giới hạn bởi {}
+ let/const: Bị giới hạn bởi {}. ra ngoài bị undefined
- Function (Hàm)
+ Được khai báo trong 1 hàm
- var/let/const đều bị giới hạn trong hàm
- Toàn cục (global)
+ Khai báo dòng code tự do, k nằm trong block và function
2. Break 
- Thoát khỏi vòng lặp ngay lập tức. 
>> ví dụ 
 for (let i =0;i<10;i++){
    if(i===5){
        break; //Thoát khỏi vòng lăpj với i =5
    }
}
3. continue
- Bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo. 
>>for (let i =0;i<10;i++){
    if(i%2===0){
        contimue;//bỏ qua số chẵn.
    }
}
4. Câu điều kiện 
- if...else ..if
- Ternary operator
- Ví dụ 
let grade =score >=90 ? "A":
score >=80:"B" :"C";

5. Vòng lặp nâng cao 
- for... in loop: duyệt qua các thuộc tính của 1 object. 
- forEach Method
+ thực thi một function cho mỗi phần tử
+ k thể dùng break và continue
6. String Util
- trim() : bỏ khoảng trắng. ví dụ: console.log(text.trim());
-trimStart()
-trimEnd()
-toUpperCase()
-toLowerCase()
-includes()
-split("Gias trị cần cắt"): cắt chuối, text, ...
- replace("từ cần thay thế", "từ thay thế")

7. Arr util
- Thêm phần tử vào mảng
+ push(): Thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
ví dụ
>let fruits = ['apple', 'banana'];
fruits.push('orange', 'mango');
// fruits hiện tại là ['apple', 'banana', 'orange', 'mango']
+ unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
>let fruits = ['orange', 'mango'];
fruits.unshift('apple', 'banana');
// fruits hiện tại là ['apple', 'banana', 'orange', 'mango']
+splice(): Phương thức đa năng cho phép thêm, xóa hoặc thay thế phần tử ở vị trí bất kỳ.
>let fruits = ['apple', 'banana', 'mango'];
 // Thêm 'orange' vào vị trí index 2 (trước 'mango'), không xóa phần tử nào
fruits.splice(2, 0, 'orange');
// fruits hiện tại là ['apple', 'banana', 'orange', 'mango']
- Xóa phần tử khỏi mảng
+ pop(): Xóa phần tử cuối cùng của mảng và trả về phần tử đó.
>let fruits = ['apple', 'banana', 'orange'];
let removed = fruits.pop();
// removed là 'orange'
// fruits hiện tại là ['apple', 'banana']
+ shift(): Xóa phần tử đầu tiên của mảng và trả về phần tử đó.
>let fruits = ['apple', 'banana', 'orange'];
let removed = fruits.shift();
// removed là 'apple'
// fruits hiện tại là ['banana', 'orange']
+ splice(): Sử dụng để xóa phần tử từ một vị trí cụ thể.
>let fruits = ['apple', 'banana', 'orange', 'mango'];
// Xóa 2 phần tử bắt đầu từ index 1 ('banana')
fruits.splice(1, 2);
// fruits hiện tại là ['apple', 'mango']
- Tìm kiếm
+ find(): Trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện của hàm callback, nếu không tìm thấy sẽ trả về undefined.
>let numbers = [10, 20, 30, 40];
>let found = numbers.find(num => num > 25);
>// found là 30
+ filter(): Trả về một mảng mới chứa tất cả các phần tử thỏa mãn điều kiện của hàm callback.
>let numbers = [10, 20, 30, 40];
let filtered = numbers.filter(num => num > 25);
// filtered là [30, 40]
- Biến đổi mảng
+ map(): Tạo một mảng mới bằng cách áp dụng một hàm cho mọi phần tử trong mảng gốc.
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
// doubled là [2, 4, 6]
// numbers vẫn là [1, 2, 3]
- Sắp xếp mảng
+ sort(): Sắp xếp các phần tử của mảng tại chỗ và trả về mảng đã được sắp xếp. Mặc định sắp xếp theo thứ tự từ điển (string).
>let fruits = ['banana', 'apple', 'orange'];
fruits.sort();
// fruits hiện tại là ['apple', 'banana', 'orange']

>let numbers = [3, 1, 10, 2];
numbers.sort((a, b) => a - b); // Sắp xếp số tăng dần
// numbers hiện tại là [1, 2, 3, 10]






