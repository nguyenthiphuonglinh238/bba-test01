# Git
1. Undo action 
>git commit --amend: là lệnh trong Git được sử dụng để sửa đổi, cập nhật hoặc bổ sung cho commit gần nhất (cuối cùng) thay vì tạo một commit mới. Lệnh này thường được dùng để sửa lỗi commit message, thêm các file bị quên, hoặc thay đổi nội dung commit trước đó khi chưa push lên remote

>git commit --amend -m"message":là lệnh dùng để sửa đổi commit gần nhất trong Git. Lệnh này thay thế commit cuối bằng một commit mới, cho phép cập nhật thông điệp (message) commit sai hoặc bao gồm cả các thay đổi tệp tin (files) đã được stage (git add) mà chưa kịp commit.

>git restore --staged: restore tất cả file tương ứng từ Staging về Working directory

>git restore --staged <file>: restore file tương ứng từ Staging về Working directory

> git reset HEAD~<số commit>: restore các file số commit tương ứng từ Repository về Working directory 

- Lưu ý: 
+ commit đầu tiên không thể bị reset 
+ Nếu muốn reset  -> Xoá thư mục .git đi rồi init lại.

2. Tạo nhánh 

- Git sử dụng nhánh (branch) để tạo ra các "phiên bản" riêng của code, tránh ảnh hưởng đến bản gốc. 

> git pull origin main: lấy code từ server về.

> git config --global init.defaultBranch main: cấu hình khởi tạo, đặt nhánh mặc định là nhánh main. 

> git branch: Xem danh sách nhánh. 

> git branch <tên_branch>: Tạo nhánh mới ( Nhánh mới copy giống hệt nhánh hiện tại)

> git checkout <tên_branch>: Chuyển sang nhánh mới. 

> git checkout -b <tên_branch>: Vừa tạo, vừa chuyển sang nhánh mới.

> git branch -D < tên nhánh>: Xoá branch (đứng ở nhánh khác trước khi xoá)

- Lưu ý: Luôn pull code về trước khi tạo nhánh mới. 

3. Git: ingore file

> .gitignore: Chỉ định file không được theo dõi (uncheck) bởi git.

- Tại sao cần: 
+ Có nhiều file k cần thiết: file tạm thời của hệ điều hành, thư mục dependencies, file build, file cấu hình cá nhânh, file nhạy cảm , ...

# Javascript

1. Convention
- snake_case: Hiện k dùng
- kebab-case: đặt tên file và folder
- camelCase: đặt tên biến hàm 
- PascalCase: đặt tên class

2. Object
> const/let <name_object> {
    key 1: "string",
    key 2: number
};

2. Arr
> const/let <nameArr> = ["string",number, ...];

3. Function
> function <nameFunction> () {
    //code
    return a; // có thể dùng hoặc không để trả về 
}


