# SỔ TAY HỌC AI – HƯỚNG DẪN SỬ DỤNG

Phiên bản 1.0: khung ứng dụng, công cụ **Kỷ luật giao dịch** và nội dung đầy đủ **Tuần 1** (buổi 1–7). Buổi 8–30 đã có tên, mục tiêu và bài thực hành dự kiến; nội dung chi tiết sẽ bổ sung ở các lượt sau.

## 1. Các file trong thư mục

| File | Dùng để |
|---|---|
| index.html | Toàn bộ ứng dụng (giao diện + nội dung + xử lý) |
| manifest.webmanifest | Thông tin để cài app lên màn hình chính |
| sw.js | Service worker: lưu sẵn file để chạy khi không có mạng |
| icon-192.png, icon-512.png, apple-touch-icon.png | Biểu tượng app |
| HUONG_DAN.md | File hướng dẫn này |

Luôn để **tất cả file trong cùng một thư mục**.

## 2. Lộ trình 30 buổi × 60 phút

Mỗi buổi: 15 phút đọc (trên iPhone), 35 phút thực hành (trên máy Windows), 10 phút trắc nghiệm, ghi chú và ôn thẻ.

| Tuần | Buổi | Tên bài | Thực hành |
|---|---|---|---|
| 1 | 1 | AI là gì? Vì sao AI trả lời được | 3 thí nghiệm: ngày tháng, tính nhẩm và tính bằng code, giải thích cho người mới |
| 1 | 2 | Token, cửa sổ ngữ cảnh, giới hạn kiến thức | AI quên giữa các chat; hỏi quy định mới; tóm tắt chat dài |
| 1 | 3 | AI "bịa": nhận biết và kiểm tra | Bắt AI chỉ dựa trên văn bản; kiểm tra số hiệu văn bản; thử công thức Excel |
| 1 | 4 | Các công cụ AI và cách chọn | So sánh 2 công cụ bằng bảng chấm điểm |
| 1 | 5 | Prompt 5 phần V-B-N-R-Đ | Viết lại 3 prompt xấu |
| 1 | 6 | Kiểm soát AI làm đúng ý | Viết master prompt, tạo Project "Kế toán nuôi ăn" |
| 1 | 7 | Ôn tập & kiểm tra Tuần 1 | Prompt hoàn chỉnh cho một việc thật |
| 2 | 8 | Biến và kiểu dữ liệu | Tính thành tiền bằng Python |
| 2 | 9 | Điều kiện if | Cảnh báo vượt định mức |
| 2 | 10 | Vòng lặp | Cộng tổng bảng kê, tính tỷ lệ thắng |
| 2 | 11 | Hàm | Hàm tính khối lượng lệnh |
| 2 | 12 | Cài Python + VS Code | Chạy script đầu tiên |
| 2 | 13 | Đọc lỗi và nhờ AI sửa | Sửa 3 lỗi phổ biến |
| 2 | 14 | Ôn tập & kiểm tra Tuần 2 | Chú thích một script hoàn chỉnh |
| 3 | 15 | HTML, CSS, JavaScript | Mổ xẻ mã nguồn app này |
| 3 | 16 | PWA, offline, localStorage | Mổ xẻ app Sổ tay; sao lưu và khôi phục |
| 3 | 17 | API và AI Agent | Vẽ quy trình giao cho Agent |
| 3 | 18 | Python đọc/ghi Excel | Mổ xẻ script tạo biên bản |
| 3 | 19 | Tạo Word hàng loạt | 5 biên bản từ 1 file Excel |
| 3 | 20 | Bảo mật, ẩn danh hóa | Ẩn danh bảng dữ liệu |
| 3 | 21 | Ôn tập + thống kê MetaTrader bằng Python | Đối chiếu với tab Giao dịch |
| 4 | 22 | Sự thật về trading, AI, lừa đảo | Nhận diện dấu hiệu lừa đảo |
| 4 | 23 | Lot, pip, đòn bẩy, ký quỹ, stop out | Máy tính khối lượng với 5 tình huống |
| 4 | 24 | Lỗi 1: cảm xúc | Bảng kiểm trước mọi lệnh demo 1 tuần |
| 4 | 25 | Lỗi 2: gồng lỗ, dời SL | Thống kê lệnh dời SL |
| 4 | 26 | Lỗi 3: thiếu kỷ luật | Hoàn thiện kế hoạch, in ra |
| 4 | 27 | Lỗi 4: lệnh quá lớn | Mô phỏng chuỗi thua ở 1% và 10% |
| 4 | 28 | AI phân tích nhật ký, backtest | Lộ trình demo 30 ngày |
| 4 | 29 | Kiếm tiền từ AI cho kế toán | Bản giới thiệu dịch vụ + báo giá |
| 4 | 30 | Dự án cuối khóa & tổng kết | Làm 1 công cụ dùng được hoặc bán được |

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
- Đổi `ready: false` thành `ready: true` và thêm `content`, `practiceDetail`, `summary`, `quiz`, `cards`. Làm theo mẫu của buổi 1–6.
- Nội dung viết giữa hai dấu ` (dấu huyền). Không gõ thêm dấu huyền bên trong. Khối prompt và code bắt đầu bằng `~~~prompt` hoặc `~~~python`, kết thúc bằng `~~~`.
- Thêm thuật ngữ vào `GLOSSARY` và prompt mẫu vào `PROMPTS`, theo cùng cách viết.

Cách dễ nhất: gửi file `index.html` cho AI và nhờ "Thêm nội dung đầy đủ cho buổi X theo đúng định dạng dữ liệu của buổi 1".

**Sau khi sửa** và tải lại lên web: mở `sw.js`, đổi `so-tay-hoc-ai-v1` thành `v2` (lần sau `v3`...) để iPhone nhận bản mới. Dữ liệu học của bạn không bị mất khi cập nhật app.

## 8. Lưu ý về giao dịch

Theo thông tin Ngân hàng Nhà nước được báo chí đưa tin (05/2025): đến nay chưa có sàn forex nào được cấp phép tại Việt Nam; việc thanh toán, chuyển tiền ra nước ngoài cho sàn forex là giao dịch không được phép; người tham gia có thể bị xử phạt hành chính. Cần kiểm tra lại văn bản mới nhất và quy định của ngành Công an đối với cán bộ. Công cụ trong app dùng để **rèn kỷ luật trên tài khoản demo**. Đây là kiến thức, không phải tư vấn đầu tư.
