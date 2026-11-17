# SỔ TAY HỌC AI – HƯỚNG DẪN SỬ DỤNG

Phiên bản 2.0: đủ **44 buổi**: 30 buổi cơ bản (4 tuần) và 14 buổi nâng cao (2 tuần) về Excel chuyên sâu, phần mềm nội bộ, video AI, gọi AI bằng API, kiểm chứng giao dịch và tự động hóa. Mỗi buổi có bài đọc, thực hành kèm prompt, tóm tắt, trắc nghiệm, thẻ ghi nhớ. Kèm công cụ **Kỷ luật giao dịch**, từ điển 108 thuật ngữ, 29 prompt mẫu.

## 1. Các file trong thư mục

| File | Dùng để |
|---|---|
| index.html | Toàn bộ ứng dụng (giao diện + nội dung + xử lý) |
| manifest.webmanifest | Thông tin để cài app lên màn hình chính |
| sw.js | Service worker: lưu sẵn file để chạy khi không có mạng |
| icon-192.png, icon-512.png, apple-touch-icon.png | Biểu tượng app |
| HUONG_DAN.md | File hướng dẫn này |

Luôn để **tất cả file trong cùng một thư mục**.

## 2. Lộ trình 44 buổi × 60 phút

Mỗi buổi: 15 phút đọc (trên iPhone), 35 phút thực hành (trên máy Windows), 10 phút trắc nghiệm, ghi chú và ôn thẻ. Học mỗi ngày 1 buổi: phần cơ bản khoảng 1 tháng, phần nâng cao thêm khoảng 2 tuần.

**Tuần 1 – Hiểu AI và nói chuyện với AI**

| Buổi | Tên bài | Thực hành |
|---|---|---|
| 1 | AI là gì? Vì sao AI trả lời được | Làm 3 thí nghiệm nhỏ với AI để tự thấy điểm mạnh, điểm yếu của nó. |
| 2 | Token, cửa sổ ngữ cảnh và giới hạn kiến thức | Thử nghiệm AI quên giữa các cuộc trò chuyện và kiểm tra AI với một quy định mới. |
| 3 | AI "bịa": nhận biết và kiểm tra | Bắt AI trả lời chỉ dựa trên văn bản bạn đưa, và kiểm tra một câu trả lời có số hiệu văn bản. |
| 4 | Các công cụ AI phổ biến và cách chọn | Cùng một prompt, thử trên 2 công cụ và chấm điểm theo bảng tiêu chí. |
| 5 | Viết prompt 5 phần: Vai trò – Bối cảnh – Nhiệm vụ – Ràng buộc – Định dạng | Viết lại 3 prompt 'xấu' thành prompt tốt và so sánh kết quả. |
| 6 | Kiểm soát AI làm đúng ý mình | Viết master prompt cho công việc kế toán của bạn và tạo một Project dùng nó. |
| 7 | Ôn tập & kiểm tra Tuần 1 | Viết 1 prompt hoàn chỉnh (5 phần + câu kiểm soát) cho một việc thật bạn sẽ làm tuần tới. |

**Tuần 2 – Lập trình vừa đủ hiểu**

| Buổi | Tên bài | Thực hành |
|---|---|---|
| 8 | Biến và kiểu dữ liệu | Nhờ AI viết đoạn Python tính thành tiền và đọc hiểu từng dòng. |
| 9 | Điều kiện if – "nếu… thì…" | Viết đoạn code cảnh báo khi định lượng vượt định mức. |
| 10 | Vòng lặp – làm lặp lại tự động | Cộng tổng cột Thành tiền và tính tỷ lệ thắng từ danh sách lệnh giao dịch. |
| 11 | Hàm – đóng gói một việc để dùng lại | Viết hàm tính khối lượng lệnh từ vốn, % rủi ro và khoảng dừng lỗ. |
| 12 | Cài Python + VS Code, chạy script đầu tiên | Cài Python, VS Code; cài thư viện; chạy script in bảng kê mẫu. |
| 13 | Đọc thông báo lỗi và nhờ AI sửa | Cố tình tạo 3 lỗi phổ biến, dùng quy trình mô tả → chạy → báo lỗi → sửa. |
| 14 | Ôn tập & kiểm tra Tuần 2 | Đọc và chú thích từng dòng một script tự động hóa ngắn. |

**Tuần 3 – Ứng dụng chạy thế nào & tự động hóa văn phòng**

| Buổi | Tên bài | Thực hành |
|---|---|---|
| 15 | Trang web và ứng dụng: HTML, CSS, JavaScript | Mở mã nguồn chính app này, nhận diện phần HTML, CSS, JavaScript. |
| 16 | App offline: PWA, service worker, localStorage | Mổ xẻ app Sổ tay học AI; thử sao lưu và khôi phục dữ liệu. |
| 17 | API và AI Agent là gì | Vẽ sơ đồ một quy trình công việc có thể giao cho Agent. |
| 18 | Python đọc/ghi Excel | Mổ xẻ script tạo biên bản tự động; nhờ AI thêm một cột mới. |
| 19 | Tạo Word hàng loạt, gộp và tách file | Tạo 5 biên bản Word từ 1 file Excel dữ liệu giả. |
| 20 | Bảo mật và ẩn danh hóa dữ liệu | Ẩn danh một bảng dữ liệu mẫu trước khi nhờ AI phân tích. |
| 21 | Ôn tập Tuần 3 + thống kê lịch sử giao dịch bằng Python | Xuất lịch sử từ MetaTrader, chạy script thống kê, so sánh với tab Giao dịch của app. |

**Tuần 4 – AI với trading và kiếm tiền**

| Buổi | Tên bài | Thực hành |
|---|---|---|
| 22 | Sự thật về trading, AI và các kiểu lừa đảo | Nhờ AI liệt kê dấu hiệu lừa đảo và tự đối chiếu với các lời mời bạn từng nhận. |
| 23 | Lot, pip, đòn bẩy, ký quỹ, stop out, spread, swap | Dùng máy tính khối lượng lệnh trong app với 5 tình huống. |
| 24 | Lỗi 1: Vào lệnh theo cảm xúc | Dùng bảng kiểm trước mọi lệnh demo trong 1 tuần, ghi điểm cảm xúc. |
| 25 | Lỗi 2: Gồng lỗ và dời dừng lỗ | Thống kê các lệnh đã dời SL trong nhật ký và kết quả của chúng. |
| 26 | Lỗi 3: Thiếu kỷ luật – kế hoạch giao dịch | Hoàn thiện mục Kế hoạch trong tab Giao dịch; in ra dán cạnh máy tính. |
| 27 | Lỗi 4: Vào lệnh quá lớn – quản lý vốn | Mô phỏng 20 lệnh thua liên tiếp ở mức rủi ro 1% và 10% để so sánh. |
| 28 | AI phân tích nhật ký giao dịch & backtest nhập môn | Xuất nhật ký từ app cho AI phân tích; lập lộ trình demo 30 ngày. |
| 29 | Kiếm tiền từ AI: hướng hợp với kế toán | Viết bản giới thiệu dịch vụ và bảng báo giá mẫu cho 1 hướng đã chọn. |
| 30 | Dự án cuối khóa & kiểm tra tổng kết | Làm dự án cuối khóa theo quy trình đã học; làm bài kiểm tra tổng kết. |

**Nâng cao 1 – Excel chuyên sâu & phần mềm nội bộ**

| Buổi | Tên bài | Thực hành |
|---|---|---|
| 31 | Excel nâng cao cùng AI: hàm động, PivotTable, kiểm soát dữ liệu | Làm lại bảng kê tháng bằng hàm động và PivotTable, có kiểm tra dữ liệu đầu vào. |
| 32 | Power Query: gộp và làm sạch dữ liệu tự động | Gộp 3 sheet ngày thành một bảng bằng Power Query, bấm Refresh khi có sheet mới. |
| 33 | Macro VBA hay Python: chọn đúng và dùng an toàn | Nhờ AI viết macro tạo sheet ngày mới từ mẫu; kiểm tra trước khi chạy. |
| 34 | Thiết kế phần mềm nội bộ: từ nhu cầu đến bản đặc tả | Viết bản đặc tả 1–2 trang cho một phần mềm nhỏ quản lý trang cấp (dữ liệu giả). |
| 35 | Thiết kế dữ liệu: bảng, khóa, quan hệ | Thiết kế các bảng dữ liệu cho phần mềm trang cấp; kiểm tra bằng dữ liệu giả. |
| 36 | Làm phần mềm nội bộ bằng AI: quy trình, kiểm thử, bàn giao | Nhờ AI làm MVP phần mềm trang cấp dạng PWA với dữ liệu giả; kiểm thử theo kịch bản. |
| 37 | Bảo trì phần mềm: phiên bản, sao lưu, Git cơ bản | Tạo kho Git cho dự án, lưu 3 phiên bản, thử quay lại bản cũ. |

**Nâng cao 2 – Video AI, API, trading nâng cao & tự động hóa**

| Buổi | Tên bài | Thực hành |
|---|---|---|
| 38 | Quy trình video AI nhanh: từ ý tưởng đến bản nháp | Làm kịch bản và bảng phân cảnh cho video 60 giây bằng AI trong 1 buổi. |
| 39 | Viết prompt hình ảnh và video, giữ nhân vật nhất quán | Viết bộ phong cách và prompt cho 6 cảnh; tạo ảnh và video thử 2 cảnh. |
| 40 | Giọng đọc, nhạc, dựng phim; bản quyền và đạo đức | Dựng bản nháp không tiếng, duyệt, rồi thêm lời dẫn và phụ đề cho video 60 giây. |
| 41 | Gọi AI bằng API với Python | Viết script tóm tắt hàng loạt các văn bản công khai trong một thư mục bằng API. |
| 42 | Trading nâng cao: kiểm chứng chiến lược bằng dữ liệu | Backtest một quy tắc minh họa trên dữ liệu lịch sử, so sánh giai đoạn trong/ngoài mẫu. |
| 43 | Tự động hóa quy trình: lịch chạy, Agent và giới hạn | Đặt lịch chạy một script trên Windows; thiết kế một quy trình tự động có điểm duyệt. |
| 44 | Tổng kết nâng cao: bộ công cụ cá nhân và lộ trình tiếp theo | Lập danh mục sản phẩm (portfolio) và kế hoạch 3 tháng tiếp theo. |


## 3. Dùng trên máy tính Windows

**Cách nhanh (không cần cài):** giải nén thư mục, nhấp đúp `index.html`, mở bằng Edge hoặc Chrome. App chạy được ngay, không cần mạng. Dữ liệu lưu trong trình duyệt đó. Hãy luôn mở bằng cùng một trình duyệt và từ cùng một vị trí thư mục, nếu không sẽ thấy dữ liệu trống.

**Cách cài thành app:** cần đưa thư mục lên một trang web (xem mục 4). Mở địa chỉ đó bằng Edge, bấm biểu tượng "Cài đặt ứng dụng" trên thanh địa chỉ (hoặc menu ⋯ → Ứng dụng → Cài đặt trang này làm ứng dụng).

## 4. Cài lên iPhone

iPhone chỉ cài được app dạng này qua một **địa chỉ web (https)**. Sau lần mở đầu tiên, app chạy offline hoàn toàn.

**Bước 1 – Đưa thư mục lên web (miễn phí), chọn một cách:**
- **Netlify Drop:** trên máy tính, vào app.netlify.com/drop, đăng nhập tài khoản miễn phí, kéo cả thư mục vào. Bạn nhận được một địa chỉ dạng `ten-gi-do.netlify.app`.
- **GitHub Pages:** tạo kho (repository) mới, tải các file lên, vào Settings → Pages để bật.

(Cách làm và điều kiện của các dịch vụ này có thể thay đổi, cần kiểm tra lại.)

Địa chỉ web này chỉ chứa app và nội dung bài học. Tiến độ học, ghi chú và nhật ký giao dịch **chỉ nằm trên máy của bạn**, không bị đưa lên web.

**Bước 2:** mở địa chỉ đó bằng **Safari** trên iPhone → nút Chia sẻ (hình vuông có mũi tên) → **Thêm vào MH chính** → Thêm.

**Bước 3:** mở app từ biểu tượng "Học AI" một lần khi đang có mạng. Từ lần sau, app dùng được cả khi không có mạng.

## 5. Chuyển dữ liệu giữa iPhone và Windows

iPhone và máy tính lưu dữ liệu **riêng biệt**. Muốn chuyển dữ liệu:
1. Ở máy nguồn: **Thêm → Sao lưu**. iPhone sẽ mở bảng Chia sẻ, chọn "Lưu vào Tệp" hoặc gửi qua Zalo/email. Máy tính sẽ tải file `.json` về.
2. Ở máy đích: **Thêm → Khôi phục từ file** → chọn file `.json` đó.

Lưu ý: khôi phục sẽ **ghi đè** dữ liệu ở máy đích. Nên chọn một máy chính để ghi chép (ví dụ iPhone), máy còn lại chỉ nhận bản sao lưu. Nên sao lưu mỗi tuần.

## 6. Nhập lịch sử giao dịch từ MetaTrader 5 (máy tính)

1. Mở MetaTrader 5 → bảng Hộp công cụ (Toolbox) → tab **Lịch sử (History)**, chọn khoảng thời gian.
2. Chuột phải → **Báo cáo (Report)** → chọn **Open XML** (mở được bằng Excel).
3. Mở file bằng Excel. Giữ phần bảng **Positions** (dòng tiêu đề có Time, Symbol, Type, Volume, Price, S / L, T / P, Profit...), xóa các dòng thông tin tài khoản phía trên.
4. File → Lưu thành → chọn kiểu **CSV**.
5. Trong app: **Giao dịch → Nhật ký → Nhập file CSV từ MetaTrader**.
6. Sau khi nhập, bấm **Sửa** từng lệnh để bổ sung cảm xúc, đúng/sai kế hoạch, có dời SL không. Nhờ đó thống kê mới chỉ ra được bạn thua vì đâu.

Tên cột và định dạng báo cáo có thể khác tùy phiên bản MetaTrader, cần kiểm tra lại. Nếu app báo "không nhận ra file", hãy ẩn số tài khoản rồi gửi file cho AI kèm câu: "Chuyển file này thành CSV có tiêu đề: Time, Symbol, Type, Volume, Price, S / L, T / P, Time, Price, Commission, Swap, Profit".

## 7. Thêm hoặc sửa bài học

Mở `index.html` bằng VS Code hoặc Notepad, tìm dòng `<script id="du-lieu-bai-hoc">`. Đây là phần **PHẦN 3: DỮ LIỆU BÀI HỌC**, chỉ chứa nội dung; giao diện không cần sửa.

- Mỗi buổi là một khối `{ id: ..., week: ..., title: ..., ... }` trong mảng `SESSIONS`.
- Muốn thêm buổi mới: chép một khối buổi có sẵn, đổi `id` (45, 46...), `week`, rồi sửa nội dung. Buổi chỉ có khung thì để `ready: false`.
- Nội dung viết giữa hai dấu ` (dấu huyền). Không gõ thêm dấu huyền bên trong. Khối prompt và code bắt đầu bằng `~~~prompt` hoặc `~~~python`, kết thúc bằng `~~~`.
- Thêm thuật ngữ vào `GLOSSARY` và prompt mẫu vào `PROMPTS`, theo cùng cách viết.

Cách dễ nhất: gửi file `index.html` cho AI và nhờ "Thêm nội dung đầy đủ cho buổi X theo đúng định dạng dữ liệu của buổi 1".

**Sau khi sửa** và tải lại lên web: mở `sw.js`, tăng số phiên bản trong `so-tay-hoc-ai-v2` (lần sau `v3`, `v4`...) để iPhone nhận bản mới. Dữ liệu học của bạn không bị mất khi cập nhật app.

## 8. Lưu ý về giao dịch

Theo thông tin Ngân hàng Nhà nước được báo chí đưa tin (05/2025): đến nay chưa có sàn forex nào được cấp phép tại Việt Nam; việc thanh toán, chuyển tiền ra nước ngoài cho sàn forex là giao dịch không được phép; người tham gia có thể bị xử phạt hành chính. Cần kiểm tra lại văn bản mới nhất và quy định của ngành Công an đối với cán bộ. Công cụ trong app dùng để **rèn kỷ luật trên tài khoản demo**. Đây là kiến thức, không phải tư vấn đầu tư.
