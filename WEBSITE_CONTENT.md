# PA1 CONSTRUCTION — NỘI DUNG WEBSITE

> File này ghi lại **toàn bộ nội dung text** trên website PA1.
> Anh Phước chỉnh sửa trực tiếp trong file này, sau đó tôi sẽ cập nhật lại vào code.
> Mục nào cần thay đổi → sửa trực tiếp. Mục nào OK → giữ nguyên.

---

## 1. THÔNG TIN CHUNG (dùng ở Header, Footer, Liên hệ)

| Hạng mục | Giá trị hiện tại | Trạng thái |
|---|---|---|
| Tên công ty | Phước An 1 Construction | ✅ |
| Slogan | Dự án chất, PA1 lo tất. | ✅ |
| Tagline footer | Vì những dự án tốt, PA1 không ngừng cải tiến. | ✅ |
| Điện thoại | 0523.023.023 | ✅ |
| Email | Phuocan1construction@gmail.com | ✅ |
| Địa chỉ 1 | 243/15A Bình Thung, Đông Hòa, Hồ Chí Minh | ✅ |
| Địa chỉ 2 | Vĩnh Long | ⚠️ Chưa đưa lên web |
| Giờ làm việc | Thứ 2 – Thứ 7, 8h00 – 17h00 | ✅ |
| Người đại diện | Nguyễn Hữu Phước | ✅ |
| Copyright | © 2025 PA1 Construction | ✅ |

---

## 2. MENU NAVIGATION

| # | Tên | File | Trạng thái |
|---|---|---|---|
| 1 | Trang chủ | `index.html` | ✅ |
| 2 | Dự án | `du-an.html` | ✅ |
| 3 | Dịch vụ | `dich-vu.html` | ✅ |
| 4 | Báo giá | `bao-gia.html` | ✅ Mới tạo |
| 5 | Xây Dựng | `xay-dung.html` | ✅ Mới tạo (thay `nganh-xay-dung.html`) |
| 6 | Liên hệ | `lien-he.html` | ✅ |

**Tính năng đã hoàn thành:**
- [x] Responsive desktop (≥980px) / mobile (hamburger menu)
- [x] Nhận diện landscape / portrait (CSS media queries)
- [x] Google Maps embed trong footer và `lien-he.html`
- [x] Meta description cho tất cả các trang

**Tính năng chưa làm:**
- [ ] Giao diện EN/VI (chuyển đổi ngôn ngữ)
- [ ] Trỏ domain phuocan1construction.com

---

## 3. TRANG CHỦ (`index.html`)

### 3.1 Hero Banner

- **Tiêu đề:** Dự án chất, PA1 lo tất.
- **Mô tả:** Thiết kế & thi công nhà phố, công trình dân dụng & công nghiệp tại TP.HCM và các tỉnh lân cận.
- **Nút CTA 1:** Xem dịch vụ → `dich-vu.html`
- **Nút CTA 2:** Xem dự án → `du-an.html`
- **Ảnh nền:** `assets/images/hero-bg.jpg` ✅

### 3.2 Số liệu nổi bật (Stats)

| Số | Mô tả | Trạng thái |
|---|---|---|
| 99+ | Công trình thiết kế | ✅ |
| 31+ | Công trình cải tạo | ✅ Đã cập nhật |
| 5+ | Công trình thi công mới | ✅ |

### 3.3 Dịch vụ toàn diện (11 hạng mục)

**Mô tả section:** 11 hạng mục dịch vụ từ thiết kế, thi công đến tư vấn — một đầu mối chịu trách nhiệm.

| # | Tên dịch vụ | Mô tả ngắn |
|---|---|---|
| 1 | Thiết kế Kiến trúc | Mặt tiền, mặt bằng, phối cảnh 3D đầy đủ trước khi thi công. |
| 2 | Thiết kế Kết cấu | Tính toán chịu lực, đảm bảo an toàn theo chuẩn hiện hành. |
| 3 | Thiết kế Nội thất | Bố trí không gian, chọn vật liệu phù hợp công năng & phong cách. |
| 4 | Thiết kế MEP | Hệ thống điện, nước đồng bộ với kiến trúc & kết cấu. |
| 5 | Thi công Trọn gói | Thiết kế + xây dựng — một đầu mối từ A đến Z. |
| 6 | Thi công Phần thô | Móng, kết cấu, tường bao — nền tảng vững chắc. |
| 7 | Thi công Hoàn thiện | Sơn nước, ốp lát, trần — hoàn thiện thẩm mỹ công trình. |
| 8 | Thi công Nội thất | Thi công đồ gỗ, lắp đặt thiết bị theo bản vẽ. |
| 9 | Sửa chữa, Cải tạo | Kinh nghiệm xử lý nhà cũ & hiện trạng phức tạp. |
| 10 | Giám sát Công trình | Theo dõi tiến độ & chất lượng thi công độc lập. |
| 11 | Tư vấn Pháp lý | Hỗ trợ thủ tục giấy phép, hoàn công theo quy định. |

### 3.4 Dự án tiêu biểu

**Mô tả section:** Hơn 130 công trình PA1 đã thực hiện — xem một số tiêu biểu dưới đây.

| # | Tên dự án | Loại | Ảnh |
|---|---|---|---|
| 1 | Sửa chữa cải tạo | Cải tạo nhà phố | ✅ `../Image/Project/P00/01.jpg` |
| 2 | Thi công trọn gói | Nhà phố từ A–Z | ✅ `../Image/Project/P01/01.jpg` |
| 3 | Thiết kế kết cấu | Công trình dân dụng | ✅ `../Image/Project/P03/01.jpg` |

**Tính năng:** Click ảnh → lightbox phóng to.

### 3.5 CTA Band

- **Tiêu đề:** Có dự án, hãy liên hệ PA1
- **Mô tả:** Khảo sát miễn phí, tư vấn phương án, báo giá trong 24 giờ.
- **Nút:** Liên hệ ngay →

---

## 4. TRANG DỊCH VỤ (`dich-vu.html`)

### 4.1 Page Header

- **Tiêu đề:** Dịch vụ chuyên môn
- **Mô tả:** Từ thiết kế kiến trúc đến thi công hoàn thiện — PA1 lo tất.

### 4.2 Nhóm Thiết kế (4 dịch vụ)

| # | Tên | Mô tả |
|---|---|---|
| 1 | Kiến trúc | Mặt tiền, mặt bằng, phối cảnh 3D. |
| 2 | Kết cấu | Tính toán chịu lực, an toàn công trình. |
| 3 | Nội thất | Bố trí không gian, chọn vật liệu. |
| 4 | MEP | Hệ thống điện, nước, thông gió. |

### 4.3 Nhóm Thi công (4 dịch vụ)

| # | Tên | Mô tả |
|---|---|---|
| 1 | Trọn gói | Thiết kế + xây dựng + hoàn thiện. |
| 2 | Phần thô | Móng, kết cấu, tường bao. |
| 3 | Hoàn thiện | Sơn nước, ốp lát, trần. |
| 4 | Nội thất | Đồ gỗ, thiết bị, lắp đặt. |

### 4.4 Dịch vụ khác (3 dịch vụ)

| # | Tên | Mô tả |
|---|---|---|
| 1 | Sửa chữa, Cải tạo | Kinh nghiệm xử lý nhà cũ. |
| 2 | Giám sát | Theo dõi tiến độ & chất lượng. |
| 3 | Tư vấn Pháp lý | Giấy phép xây dựng, hoàn công. |

### 4.5 CTA

- **Tiêu đề:** Cần báo giá chi tiết?
- **Mô tả:** Liên hệ PA1 để được tư vấn & báo giá chính xác.

---

## 5. TRANG DỰ ÁN (`du-an.html`)

### 5.1 Page Header

- **Tiêu đề:** Dự án thực tế
- **Mô tả:** 134+ công trình PA1 đã thực hiện từ thiết kế đến thi công, không phải bản vẽ minh họa.

### 5.2 Bộ lọc dự án

Có 4 nút filter: **Tất cả** | Cải tạo | Thi công | Thiết kế

### 5.3 Danh sách dự án (15 dự án — ảnh thật)

**Cải tạo (3 ảnh — từ P00):**

| # | Tên | Mô tả | Ảnh |
|---|---|---|---|
| 1 | Cải tạo nhà phố | Nâng cấp kết cấu & mặt tiền | ✅ `P00/01.jpg` |
| 2 | Cải tạo nhà phố | Thi công phần thô & hoàn thiện | ✅ `P00/05.jpg` |
| 3 | Cải tạo nhà phố | Hoàn thiện nội thất | ✅ `P00/15.jpg` |

**Thi công (6 ảnh — từ P01, P02):**

| # | Tên | Mô tả | Ảnh |
|---|---|---|---|
| 1 | Nhà phố trọn gói | Thiết kế & thi công từ A–Z | ✅ `P01/01.jpg` |
| 2 | Nhà phố trọn gói | Thi công phần kết cấu | ✅ `P01/10.jpg` |
| 3 | Nhà phố trọn gói | Hoàn thiện công trình | ✅ `P01/25.jpg` |
| 4 | Nhà phố trọn gói | Nội thất hoàn thiện | ✅ `P01/40.jpg` |
| 5 | Công trình dân dụng | Thi công kết cấu | ✅ `P02/01.jpg` |
| 6 | Công trình dân dụng | Hoàn thiện ngoại thất | ✅ `P02/15.jpg` |

**Thiết kế (6 ảnh — từ P03 + Libraries):**

| # | Tên | Mô tả | Ảnh |
|---|---|---|---|
| 1 | Thiết kế kiến trúc | Phối cảnh 3D | ✅ `P03/01.jpg` |
| 2 | Thiết kế kết cấu | Bản vẽ & mô hình | ✅ `P03/05.jpg` |
| 3 | Phòng khách hiện đại | Thiết kế nội thất | ✅ `Libraries/Living/PK_01-1_HienDai.jpg` |
| 4 | Phòng ngủ | Thiết kế nội thất | ✅ `Libraries/Bed/PN_01-1.jpg` |
| 5 | Phòng bếp hiện đại | Thiết kế nội thất | ✅ `Libraries/Kitchen/PB_01-1_HienDai.jpg` |
| 6 | Phòng tắm | Thiết kế nội thất | ✅ `Libraries/WC/PT_01-01.jpg` |

**Tính năng:** Lightbox phóng to ảnh + Filter theo loại dự án.

> **CẦN BỔ SUNG:**
> - Tên dự án thật (ví dụ: "Nhà phố anh Tuấn — Q.9")
> - Mô tả chi tiết (diện tích, số tầng...)
> - Thêm nhiều ảnh hơn từ P00–P03

### 5.4 CTA

- **Tiêu đề:** Chưa thấy dự án bạn muốn?
- **Mô tả:** Kể cho PA1 nghe ý tưởng của bạn.

---

## 6. TRANG BÁO GIÁ (`bao-gia.html`) — MỚI

### 6.1 Page Header

- **Tiêu đề:** Báo giá tham khảo
- **Mô tả:** Minh bạch từ vật tư — PA1 công khai hạng mục & thương hiệu sử dụng trong mỗi công trình.

### 6.2 Cách tính diện tích xây dựng

Ảnh minh họa: `../Image/Quotation/001_CachTinhDienTichXayDung.png` ✅

### 6.3 Vật tư phần thô (10 hạng mục)

| # | Hạng mục | Ảnh |
|---|---|---|
| 1 | Thép & Xi măng | ✅ `Material_Structural/01_...` |
| 2 | Gạch xây | ✅ `Material_Structural/03_...` |
| 3 | Đá & Bê tông | ✅ `Material_Structural/05_...` |
| 4 | Ống nước & Dây điện | ✅ `Material_Structural/07_...` |
| 5 | Ống luồn dây điện | ✅ `Material_Structural/09_...` |
| 6 | Ống đồng máy lạnh | ✅ `Material_Structural/10_...` |
| 7 | Xà gồ & Tôn lợp | ✅ `Material_Structural/11_...` |
| 8 | Vì kèo & Ngói | ✅ `Material_Structural/13_...` |
| 9 | Con kê & Chống mối | ✅ `Material_Structural/15_...` |
| 10 | Hệ thống tiếp địa | ✅ `Material_Structural/18_...` |

### 6.4 Vật tư hoàn thiện (14 hạng mục)

| # | Hạng mục | Ảnh |
|---|---|---|
| 1 | Gạch ốp lát | ✅ `Material_Finishing/01_...` |
| 2 | Keo dán gạch | ✅ `Material_Finishing/02_...` |
| 3 | Trần thạch cao | ✅ `Material_Finishing/04_...` |
| 4 | Bột trét & Sơn nước | ✅ `Material_Finishing/05_...` |
| 5 | Cửa nhôm kính | ✅ `Material_Finishing/06_...` |
| 6 | Cửa nội thất | ✅ `Material_Finishing/09_...` |
| 7 | Đá granite | ✅ `Material_Finishing/12_...` |
| 8 | Công tắc & Ổ cắm | ✅ `Material_Finishing/15_...` |
| 9 | Đèn LED | ✅ `Material_Finishing/16_...` |
| 10 | Thiết bị vệ sinh | ✅ `Material_Finishing/17_...` |
| 11 | Vách kính WC | ✅ `Material_Finishing/18_...` |
| 12 | Bồn nước & NLMT | ✅ `Material_Finishing/20_...` |
| 13 | Lan can cầu thang | ✅ `Material_Finishing/21_...` |
| 14 | Chống thấm | ✅ `Material_Finishing/23_...` |

### 6.5 CTA

- **Tiêu đề:** Cần báo giá chi tiết cho công trình của bạn?
- **Mô tả:** Liên hệ PA1 để được khảo sát thực tế & báo giá chính xác trong 24 giờ.

---

## 7. TRANG XÂY DỰNG (`xay-dung.html`)

> Đã đổi từ `nganh-xay-dung.html` → `xay-dung.html`. File cũ vẫn còn, có thể xóa.

### 7.1 Page Header

- **Tiêu đề:** Kiến thức Xây dựng
- **Mô tả:** Chia sẻ kinh nghiệm thực tế từ hàng trăm công trình PA1 đã trực tiếp thực hiện.

### 7.2 Bài viết (3 bài — tóm tắt, chưa có nội dung đầy đủ)

| # | Chủ đề | Tiêu đề | Tóm tắt |
|---|---|---|---|
| 1 | Dự toán chi phí | Vì sao 2 căn nhà cùng diện tích lại chênh giá đến 30%? | Phần lớn chủ nhà chỉ nhìn vào đơn giá/m² mà bỏ qua những hệ số ẩn... |
| 2 | Pháp lý | 3 giấy tờ thường bị bỏ sót trước khi khởi công | Không ít công trình bị đình chỉ giữa chừng chỉ vì thiếu một thủ tục tưởng chừng nhỏ... |
| 3 | Cải tạo nhà cũ | Nhà cũ trên 20 năm: sửa hay đập đi xây lại? | Câu hỏi mà 30+ khách hàng cải tạo của PA1 đều từng đặt ra... |

> **CẦN BỔ SUNG:**
> - Nội dung đầy đủ cho từng bài
> - Thêm bài viết mới?
> - Có cần trang chi tiết riêng cho mỗi bài không?

### 7.3 CTA

- **Tiêu đề:** Có câu hỏi riêng?
- **Mô tả:** Đừng tự tìm câu trả lời một mình — hỏi những người trong nghề.

---

## 8. TRANG LIÊN HỆ (`lien-he.html`)

### 8.1 Page Header

- **Tiêu đề:** Liên hệ PA1
- **Mô tả:** Để lại thông tin — PA1 sẽ liên hệ khảo sát & tư vấn trong 24 giờ.

### 8.2 Thông tin liên hệ (bên trái)

- Tel: 0523.023.023 ✅
- Email: Phuocan1construction@gmail.com ✅
- Địa chỉ: 243/15A đường Bình Thung, Đông Hòa, Hồ Chí Minh ✅
- Giờ làm việc: Thứ 2 – Thứ 7, 8h00 – 17h00 ✅
- Đại diện: Nguyễn Hữu Phước ✅
- Google Maps embed ✅

### 8.3 Form liên hệ (bên phải)

**Các trường:**

| Trường | Kiểu | Bắt buộc | Placeholder |
|---|---|---|---|
| Họ & Tên | text | Có | Nguyễn Văn A |
| Số điện thoại | tel | Có | 09xx xxx xxx |
| Email | email | Không | ban@email.com |
| Dịch vụ quan tâm | select | Không | — Chọn dịch vụ — |
| Mô tả dự án | textarea | Không | Diện tích, số tầng, vị trí... |

**Các option dịch vụ:**
1. Thiết kế
2. Thi công trọn gói
3. Thi công phần thô
4. Sửa chữa cải tạo
5. Khác

> **LƯU Ý:** Form hiện gửi qua `mailto:` (mở email client). Cần chuyển sang form backend/Google Form để nhận thông tin tự động không?

**Cam kết:** PA1 cam kết phản hồi trong 24 giờ.

---

## 9. HÌNH ẢNH & ASSETS

### 9.1 Assets website (trong `PA1_Website/assets/images/`)

| File | Dùng cho | Trạng thái |
|---|---|---|
| logo.jpg | Logo gốc | ✅ |
| logo-full.png | Header | ✅ |
| logo-footer.png | Footer | ✅ |
| hero-bg.jpg | Ảnh nền hero | ✅ |
| hero-bg-placeholder.jpg | Dự phòng | ✅ |

### 9.2 Ảnh dự án (trong `Image/Project/`)

| Thư mục | Số ảnh | Loại | Trạng thái |
|---|---|---|---|
| P00 | 39+ ảnh | Cải tạo | ✅ Đã dùng trên web |
| P01 | 50 ảnh | Thi công trọn gói | ✅ Đã dùng trên web |
| P02 | 32 ảnh | Thi công | ✅ Đã dùng trên web |
| P03 | 10 ảnh | Thiết kế | ✅ Đã dùng trên web |

### 9.3 Ảnh thiết kế nội thất (trong `Image/Service/Libraries/`)

| Thư mục | Nội dung | Trạng thái |
|---|---|---|
| Living | Phòng khách (nhiều phong cách) | ✅ Đã dùng trên web |
| Bed | Phòng ngủ | ✅ Đã dùng trên web |
| Kitchen | Phòng bếp | ✅ Đã dùng trên web |
| WC | Phòng tắm | ✅ Đã dùng trên web |

### 9.4 Ảnh báo giá (trong `Image/Quotation/`)

| Thư mục | Nội dung | Trạng thái |
|---|---|---|
| Material_Structural | 10 ảnh vật tư phần thô | ✅ Đã dùng trên web |
| Material_Finishing | 20+ ảnh vật tư hoàn thiện | ✅ Đã dùng trên web |
| CachTinhDienTich | Infographic tính diện tích | ✅ Đã dùng trên web |

---

## 10. TÍNH NĂNG ĐẶC BIỆT

### 10.1 Công cụ tính chi phí (`calculator.js`)

Có sẵn JS tính diện tích xây dựng quy đổi, **chưa tích hợp vào trang HTML**.

**Đơn giá TẠM (cần xác nhận):**

| Gói | Đơn giá/m² | Ghi chú |
|---|---|---|
| Thi công phần thô | 4,200,000 đ/m² | ⚠️ TẠM — cần xác nhận |
| Thi công trọn gói | 6,500,000 đ/m² | ⚠️ TẠM — cần xác nhận |

**Hệ số quy đổi:**

| Hạng mục | Loại | Hệ số |
|---|---|---|
| Móng | Cọc | 0.30 |
| Móng | Đơn | 0.40 |
| Móng | Băng 1 phương | 0.50 |
| Móng | Bè / Băng 2 phương | 0.70 |
| Mái | Tôn | 0.30 |
| Mái | BTCT | 0.50 |
| Mái | Có hệ đà BTCT | 0.70 |
| Mái | BTCT lợp ngói | 1.00 |
| Hầm | Sâu ≤ 1m | 1.0 |
| Hầm | Sâu ≤ 1.5m | 1.5 |
| Hầm | Sâu ≤ 1.7m | 1.7 |
| Hầm | Sâu ≤ 2m | 2.0 |
| Hầm | Sâu > 2m | 2.5 |

> **QUYẾT ĐỊNH:** Có muốn đưa công cụ tính chi phí lên website không? Nếu có, sẽ tạo trang riêng hoặc tích hợp vào `bao-gia.html`.

---

## 11. THIẾT KẾ & KỸ THUẬT

### 11.1 Màu sắc

| Tên | Mã | Dùng cho |
|---|---|---|
| Dark | #1a1a1a | Header/Footer nền, text đậm |
| Gold | #F2B529 | Accent chính, nút CTA, highlight |
| Gold Dark | #D9A020 | Hover state |
| Light | #f5f5f5 | Nền section xám nhạt |
| White | #ffffff | Nền chính |
| Text | #333333 | Chữ chính |
| Text Light | #666666 | Chữ phụ |

### 11.2 Font chữ

| Font | Dùng cho |
|---|---|
| Playfair Display (600, 700, 800) | Tiêu đề h1, h2, h3, h4 |
| Lato (400, 500, 700) | Nội dung body |

### 11.3 Cấu trúc kỹ thuật

- **Responsive:** Có (breakpoint 640px, 768px, 980px)
- **Mobile menu:** Hamburger toggle (3 span, class `is-open`)
- **Landscape/Portrait:** CSS media queries cho orientation
- **Framework:** Không (HTML/CSS/JS thuần)
- **SEO:** Meta title + description trên tất cả các trang
- **Lightbox:** Click ảnh dự án → phóng to (JS trong `common.js`)
- **Filter:** Lọc dự án theo loại trên `du-an.html`

### 11.4 Cấu trúc file

```
PA1_Website/
├── index.html          ← Trang chủ
├── du-an.html          ← Dự án (15 ảnh thật + filter + lightbox)
├── dich-vu.html        ← Dịch vụ (11 hạng mục)
├── bao-gia.html        ← Báo giá (MỚI — vật tư thô + hoàn thiện)
├── xay-dung.html       ← Kiến thức xây dựng (MỚI — thay nganh-xay-dung)
├── lien-he.html        ← Liên hệ (form + Google Maps)
├── nganh-xay-dung.html ← CŨ — có thể xóa
├── css/style.css       ← Stylesheet chính
├── js/common.js        ← Nav toggle, lightbox, filter
├── js/calculator.js    ← Tính chi phí (chưa tích hợp)
├── assets/images/      ← Logo, hero-bg
└── WEBSITE_CONTENT.md  ← File này
```

Ảnh tham chiếu từ thư mục cha:
```
../Image/Project/P00–P03/     ← Ảnh công trình thi công
../Image/Service/Libraries/   ← Ảnh thiết kế nội thất
../Image/Quotation/           ← Ảnh vật tư báo giá
```

---

## 12. VIỆC CẦN LÀM (CHECKLIST)

**Đã hoàn thành:**
- [x] Menu 6 trang đầy đủ (thêm Báo giá, Xây Dựng)
- [x] Cập nhật màu Gold → #F2B529 (RGB 242-181-41)
- [x] Cập nhật số liệu thống kê (31+ cải tạo)
- [x] Bổ sung ảnh dự án thực tế (P00–P03 + Libraries)
- [x] Tạo trang Báo giá với ảnh vật tư
- [x] Fix hamburger menu (class mismatch + thêm span)
- [x] Responsive landscape/portrait
- [x] Google Maps embed ở trang Liên hệ + footer
- [x] Meta description cho tất cả các trang
- [x] Lightbox phóng to ảnh
- [x] Filter dự án theo loại

**Chưa làm:**
- [ ] Xóa file `nganh-xay-dung.html` cũ
- [ ] Điền tên dự án thật (thay tên chung như "Cải tạo nhà phố")
- [ ] Xác nhận đơn giá thi công cho calculator
- [ ] Quyết định tích hợp calculator lên web
- [ ] Viết nội dung đầy đủ cho 3 bài blog
- [ ] Chuyển form liên hệ sang Google Form hoặc backend
- [ ] Thêm favicon
- [ ] Thêm link mạng xã hội (Zalo, Facebook, TikTok...)
- [ ] Giao diện EN/VI (chuyển đổi ngôn ngữ)
- [ ] Lấy embed URL Google Maps chính xác cho địa chỉ 243/15A Bình Thung
- [ ] Thêm địa chỉ Vĩnh Long lên web (nếu cần)
- [ ] Trỏ domain phuocan1construction.com
