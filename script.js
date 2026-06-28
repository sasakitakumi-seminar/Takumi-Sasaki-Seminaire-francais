// ハンバーガーメニューの開閉とスムーズスクロール
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  // ハンバーガーメニューの開閉
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // メニュー内リンクをクリックしたらメニューを閉じる
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // スムーズスクロール（ページ内リンク用）
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // ヘッダーの高さ分だけオフセット（70px）
        const offsetTop = targetElement.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
