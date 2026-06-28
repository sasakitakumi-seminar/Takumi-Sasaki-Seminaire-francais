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

  // スムーズスクロール（ページ内リンク＋Heroボタン用）
  function smoothScrollToTarget(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 70; // ヘッダー分オフセット
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  // ページ内リンク（#から始まるリンク）に適用
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScrollToTarget);
  });

  // HeroセクションのAbout usボタンにも適用（もし別クラスならこちら）
  const heroBtn = document.querySelector('.hero-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', smoothScrollToTarget);
  }
});
