function buatOrder() {
  const orderId = "ORDER-" + Date.now();

  // Simpan order sederhana (nanti diganti KV / D1)
  localStorage.setItem("order_id", orderId);

  // Redirect ke halaman sukses
  window.location.href = "success.html?order=" + orderId;
}
