# Sử dụng Fetch API trong React Native

## Mục tiêu bài tập

- Biết cách sử dụng Fetch API để lấy dữ liệu thông qua HTTP request.

- Biết cách thay đổi các thành phần của request như Header, Body

- Biết cách sử dụng Promise `then` và `catch` để lấy dữ liệu trả về hoặc xử lý lỗi

## Nội dung bài tập

- Tạo một ứng dụng quản lý người dùng

- Ứng dụng cho quản lý người dùng.

- Ứng dụng cho phép thêm và xóa người dùng.

## Độ Khó **

## Hướng dẫn

- Xem các API sử dụng trong app tại: https://reqres.in

- Tạo Component `ListUsers`

- Trong `ListUsers` sẽ lấy dữ liệu từ API thông qua Fetch API, ở đây có các hàm lấy danh sách người dùng, xóa người dùng và thêm người dùng.

- Tạo Component `FormCreateUser` để xử lý phần thêm người dùng mới, khi người dùng submit text thì sẽ gọi lại hàm trong `props` để thông báo lên component `ListUsers`.
Sau đó trong `ListUsers` sẽ gọi API để thêm người dùng mới và cập nhật lại state.

- Tạo Component `User` để hiển thị thông tin của từng người dùng.

- Xử lý xự kiện nhấn vào nút xóa người dùng và gọi lại hàm qua `props` để thông báo lên component `ListUsers` để xóa người dùng.


## Ảnh demo

![User manager](/demo/home.png)