# Version control system
### 1. Định nghĩa 
Version control system = Hệ thống quản lý phiên bản
Hiện nay , phổ biến nhất vẫn là Distributed Version Control System. 
### 2. Mục tiêu
Việc quản lý phiên bản giúp dễ dàng: 
- Xem lịch sử thay đổi(time, what, who, ...)
- Quay trở về phiên bản trước đó 
### 3. Types
- Local: lưu ở máy cá nhân
- Centralize: lưu ở máy chủ tập trung. 
- Distributed: lưu ở nhiều máy khác nhau. 

# Git
### 1. Lịch sử 
- Cha đẻ là Linux Torvald 
+ Hay chửi bậy 
+ Có khả năng chạy code trong đầu
+ Thiên tài dk thế giới công nhận
- Phổ biến nhất 
### 2. ĐỊnh nghĩa 
- Sai chính tả của "Get" 
### 3. Tính năng
- Dễ dùng, tính năng vượt trội: branching tốc độ xử lý nhanh. 
### 4. Chi phí: Free
### 5. Phổ biến: Nhiều công y sử dụng 
### 5. Git - three states
- Working Directory: Các file mới hoặc file có thay đổi.
- Staging Area: Các file đưa vào vùng chuẩn bị commit ( tạo ra phiên bản)
- Repository: Các commit (phiên bản)
### 6. Các câu lệnh git 
- Làm 1 lần duy nhất 
>git init: Khởi tạo repo local
>git remote add origin <URL> : Tạo repo github và liên kết tới repo local

- Làm mỗi khi có thay đổi 
>git add. : Thêm tất cả các file vào STG
>git add 
>git commit -m"msg" : Commit file
>git push origin main: Push code 
- Cấu hình mặc định username và email cho toàn bộ các repo trên máy tính.
>git config --global user.name "tên bạn" 
>git congig --global user.email "email của bạn"
- Set username, pw riênng cho từng repo( Đứng tại terminal của repo đó)
>git config user.name ""
>git config user.email ""
- Một số câu lệnh khác 
>git log
>git status -s
>Quy định về cmt: chore (sửa nhỏ lẻ, xoá file, không dùng tơi,...), feat (Thêm tính năng mới, testcase mới), fix(Sửa đổi 1 test trước đó), Mô tả ngắn gọn không dấu <=50 kí tự
# JavaScript
### 1. ĐỊnh nghĩa 
- Là ngôn ngữ lập trình
- 1995 
- Giúp hoạt động : HTML ( xương) + Css ( quần áo)+ JS ( bộ não hoạt động)
### 2. Các thuộc tính câu lệnh 
- Biến: var (chính xác thấp), let ( phổ biến)
- Hằng: Const ( Đã gán thì không thay đổi lại được như biến)
- Toán tử: >, <, ==, === ( chính xác tuyệt đối), ! (khác), Chia lấy dư x%2===0 ( số chẵn), x%2===1(số lẻ), && (And), || (OR), ++a (Prefix: tăng trước trả về sau), a++ (Postfix: trả về trước tăng sau)
- Câu lệnh
>console.log("); : Hiển thị
>`${}`: thêm hằng thêm biến để hiển thị
>console.log("dùng dấu cộng như sau:"+name)
>console.log(Hoặc dùng dấu phẩy:", name)
>console.log(str1+str2);
>terminal: node tenfile
- Điều kiện
> if (<điều kiện>){//code}
- Vòng lặp 
> for (<điều kiện khởi tạo>; <Điều kiện lặp>; <cập nhật>){ //code }

