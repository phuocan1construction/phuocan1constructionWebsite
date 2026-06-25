// ============ PA1 — calculator.js ============
// Hệ số quy đổi diện tích xây dựng theo chuẩn PA1 Construction
// Nguồn: bảng hệ số nội bộ PA1 (móng / sàn / mái / sân thượng / hầm / lỗ thông tầng)

(function () {
  const form = document.getElementById('calc-form');
  if (!form) return;

  // ---- Đơn giá (đ/m²) — CẦN PA1 XÁC NHẬN SỐ THẬT, đang dùng giá trị tạm để demo ----
  const UNIT_PRICE = {
    tho: 4200000,        // Thi công phần thô — TẠM, chờ PA1 xác nhận
    tron_goi: 6500000,   // Thi công trọn gói (thiết kế + xây) — TẠM, chờ PA1 xác nhận
  };

  // Hệ số móng theo loại
  const FOUNDATION_FACTOR = {
    coc: 0.30,      // Móng cọc
    don: 0.40,      // Móng đơn
    bang1: 0.50,    // Móng băng 1 phương
    be: 0.70,       // Móng bè / băng 2 phương
  };

  // Hệ số mái theo loại
  const ROOF_FACTOR = {
    ton: 0.30,          // Mái tôn
    btct: 0.50,         // Mái BTCT
    da_btct: 0.70,      // Mái có hệ đà BTCT
    ngoi: 1.00,         // Mái BTCT lợp ngói
  };

  // Hệ số hầm theo độ sâu
  function basementFactor(depth) {
    if (depth <= 0) return 0;
    if (depth <= 1) return 1.0; // chưa tính là hầm nếu rất nông — xử lý như sàn thường (fallback an toàn)
    if (depth <= 1.5) return 1.5;
    if (depth <= 1.7) return 1.7;
    if (depth <= 2) return 2.0;
    return 2.5;
  }

  const fmtVND = (n) => n.toLocaleString('vi-VN', { maximumFractionDigits: 0 }) + ' đ';
  const fmtM2 = (n) => n.toLocaleString('vi-VN', { maximumFractionDigits: 1 }) + ' m²';

  function calc() {
    const landArea = parseFloat(form.landArea.value) || 0;       // diện tích đất / sàn điển hình
    const floors = parseInt(form.floors.value) || 0;             // số tầng (trệt + lầu), tính 100%
    const hasMezzanine = parseFloat(form.mezzanine.value) || 0;  // diện tích sàn không mái (50%)
    const balcony = parseFloat(form.balcony.value) || 0;         // diện tích ban công/sân không mái che (70%)
    const skylight = parseFloat(form.skylight.value) || 0;       // lỗ thông tầng ≥8m² (50%)
    const roofType = form.roofType.value;
    const foundationType = form.foundationType.value;
    const basementDepth = parseFloat(form.basementDepth.value) || 0;
    const package_ = form.package.value; // 'tho' | 'tron_goi'

    // 1) Diện tích sàn chính (trệt + các lầu) — 100%
    const mainFloorArea = landArea * floors;

    // 2) Sàn không mái / lỗ thông tầng ≥8m² — 50%
    const mezzAdj = (hasMezzanine + skylight) * 0.5;

    // 3) Ban công / sân không mái che — 70%
    const balconyAdj = balcony * 0.7;

    // 4) Mái — % theo loại, tính trên diện tích 1 sàn (landArea)
    const roofFactor = ROOF_FACTOR[roofType] ?? 0.5;
    const roofAdj = landArea * roofFactor;

    // 5) Móng — % theo loại, tính trên diện tích 1 sàn
    const foundationFactor = FOUNDATION_FACTOR[foundationType] ?? 0.5;
    const foundationAdj = landArea * foundationFactor;

    // 6) Hầm (nếu có độ sâu > 0)
    const bf = basementFactor(basementDepth);
    const basementAdj = basementDepth > 0 ? landArea * bf : 0;

    const totalArea =
      mainFloorArea + mezzAdj + balconyAdj + roofAdj + foundationAdj + basementAdj;

    const unitPrice = UNIT_PRICE[package_] ?? UNIT_PRICE.tho;
    const totalCost = totalArea * unitPrice;

    return {
      mainFloorArea, mezzAdj, balconyAdj, roofAdj, foundationAdj, basementAdj,
      totalArea, unitPrice, totalCost,
    };
  }

  function render() {
    const r = calc();
    document.getElementById('out-main').textContent = fmtM2(r.mainFloorArea);
    document.getElementById('out-extra').textContent = fmtM2(r.mezzAdj + r.balconyAdj);
    document.getElementById('out-roof').textContent = fmtM2(r.roofAdj);
    document.getElementById('out-foundation').textContent = fmtM2(r.foundationAdj);
    document.getElementById('out-basement').textContent = fmtM2(r.basementAdj);
    document.getElementById('out-total-area').textContent = fmtM2(r.totalArea);
    document.getElementById('out-unit-price').textContent = fmtVND(r.unitPrice) + '/m²';
    document.getElementById('out-total-cost').textContent = fmtVND(r.totalCost);
  }

  form.addEventListener('input', render);
  form.addEventListener('change', render);
  render();
})();
