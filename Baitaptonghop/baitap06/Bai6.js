function phuongTrinh() {
  // Lấy giá trị của a và b từ các ô nhập liệu
  let a = parseFloat(document.getElementById("soA").value);
  let b = parseFloat(document.getElementById("soB").value);

  // Kiểm tra nếu a hoặc b không phải là số hợp lệ
  if (isNaN(a) || isNaN(b)) {
    alert("Vui lòng nhập các giá trị hợp lệ cho a và b.");
    return;
  }

  // Xử lý các trường hợp đặc biệt của phương trình
  let result = "";
  if (a === 0) {
    if (b === 0) {
      result = "Phương trình có vô số nghiệm.";
    } else {
      result = "Phương trình vô nghiệm.";
    }
  } else {
    // Tính nghiệm x
    let x = -b / a;
    result = "Nghiệm của phương trình là x = " + x.toFixed(2);
  }

  // Hiển thị kết quả trên trang web trong bảng
  document.getElementById("resultCell").innerHTML = result;
}
