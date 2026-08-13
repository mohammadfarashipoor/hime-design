/* =========================================================
   HIME — اسکریپت مشترک
   باز و بسته کردن منوی موبایل
   (جایگزینیِ تصاویرِ هنوز آپلود‌نشده با inline onerror در
   خودِ فایل‌های HTML مدیریت می‌شود تا در همان لحظه‌ی بارگذاری
   بدون تأخیر اجرا شود)
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- منوی موبایل ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
