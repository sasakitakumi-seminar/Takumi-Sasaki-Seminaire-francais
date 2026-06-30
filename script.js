document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  console.log('hamburger:', hamburger);
  console.log('navMenu:', navMenu);

  // ハンバーガーメニューの開閉
  hamburger.addEventListener('click', function() {
    console.log('クリックされました');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active'); // ← バツ印用（必要なら追加）
  });

  // メニュー内リンクをクリックしたらメニューを閉じる
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active'); // ← バツ印用（必要なら追加）
    });
  });

  // スムーズスクロール（ページ内リンク＋Heroボタン用）
  function smoothScrollToTarget(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // ページ内リンク（#から始まるリンク）に適用
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScrollToTarget);
  });

  // HeroセクションのAbout usボタンにも適用
  const heroBtn = document.querySelector('.hero-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', smoothScrollToTarget);
  }
});
