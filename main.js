let currentLang = 'en';
let showFavsOnly = false;

function getFavs() {
    try { return JSON.parse(localStorage.getItem('cc-favs') || '[]'); } catch(e) { return []; }
}

function toggleFav(id, btn) {
    let favs = getFavs();
    if (favs.includes(id)) {
        favs = favs.filter(function(f) { return f !== id; });
        btn.textContent = '☆';
        btn.classList.remove('active');
    } else {
        favs.push(id);
        btn.textContent = '★';
        btn.classList.add('active');
    }
    localStorage.setItem('cc-favs', JSON.stringify(favs));
    if (document.getElementById('fav-filter').classList.contains('active')) {
        filterCards();
    }
}

function toggleFavFilter() {
    showFavsOnly = !showFavsOnly;
    const btn = document.getElementById('fav-filter');
    btn.classList.toggle('active', showFavsOnly);
    filterCards();
}

function copyPre(btn) {
    const text = btn.nextElementSibling.textContent;
    navigator.clipboard.writeText(text).then(function() {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function() {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
        }, 1500);
    });
}

function toggleDark() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('cc-dark', isDark ? '1' : '');
    const btn = document.getElementById('dark-toggle');
    if (btn) btn.textContent = isDark ? '☀ Light mode' : '☾ Dark mode';
}

function buildCard(tip, lang) {
    const t = tip[lang];
    const article = document.createElement('article');
    article.className = 'card';
    article.id = 'tip-' + tip.id.replace('/', '-');
    article.dataset.tipId = tip.id;

    article.innerHTML = `
        <div class="card-header">
            <span class="tip-number">${tip.id}</span>
            <span class="badge">${tip.badge}</span>
        </div>
        <h3>${t.h3}</h3>
        <p>${t.p}</p>
    `;

    const preWrap = document.createElement('div');
    preWrap.className = 'pre-wrap';
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.onclick = function() { copyPre(this); };
    const pre = document.createElement('pre');
    pre.textContent = tip.pre;
    preWrap.appendChild(copyBtn);
    preWrap.appendChild(pre);
    article.appendChild(preWrap);

    const favs = getFavs();
    const favBtn = document.createElement('button');
    favBtn.className = 'fav-btn' + (favs.includes(tip.id) ? ' active' : '');
    favBtn.title = 'Save to favorites';
    favBtn.textContent = favs.includes(tip.id) ? '★' : '☆';
    favBtn.dataset.id = tip.id;
    favBtn.onclick = function() { toggleFav(tip.id, this); };
    article.appendChild(favBtn);

    return article;
}

function renderAll(lang) {
    const main = document.querySelector('main');
    const header = main.querySelector('.main-header');
    main.innerHTML = '';
    main.appendChild(header);

    sections.forEach(function(sec, sIdx) {
        const tipsInSection = tips.filter(function(t) { return t.section === sIdx; });
        if (!tipsInSection.length) return;

        const h2 = document.createElement('h2');
        h2.className = 'section-title';
        h2.id = sec.id;
        h2.textContent = sec[lang];
        main.appendChild(h2);

        const grid = document.createElement('div');
        grid.className = 'grid';
        tipsInSection.forEach(function(tip) {
            grid.appendChild(buildCard(tip, lang));
        });
        main.appendChild(grid);
    });

    const noResults = document.createElement('div');
    noResults.id = 'no-results';
    noResults.className = 'no-results';
    noResults.textContent = i18n[lang].noResults;
    noResults.style.display = 'none';
    main.appendChild(noResults);
}

function updateUI(lang) {
    const t = i18n[lang];
    document.documentElement.lang = lang;
    document.querySelector('.sidebar h2').textContent = t.sidebarTitle;

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(function(a, i) { if (t.navLinks[i] !== undefined) a.textContent = t.navLinks[i]; });

    const authorPs = document.querySelectorAll('.author p');
    if (authorPs[0]) authorPs[0].innerHTML = '<strong>' + t.authorLabel + ':</strong> Jaime Mollinedo';
    if (authorPs[1]) authorPs[1].textContent = t.authorTagline;

    const mainGuide = document.getElementById('main-guide');
    if (mainGuide) mainGuide.textContent = t.guideTagline;
    const loaderGuide = document.getElementById('loader-guide');
    if (loaderGuide) loaderGuide.textContent = t.guideTagline;
    const loaderWelcome = document.getElementById('loader-welcome');
    if (loaderWelcome) loaderWelcome.textContent = t.welcomeTo;
    const mainDesc = document.querySelector('.main-header .main-desc');
    if (mainDesc) mainDesc.textContent = t.mainSubtitle;
    const mainH1 = document.querySelector('.main-header h1 span');
    if (mainH1 && t.mainTitle) mainH1.textContent = t.mainTitle;
    const back = document.getElementById('practice-back-home');
    if (back && t.backHome) back.textContent = t.backHome;
    document.getElementById('search-input').placeholder = t.searchPlaceholder;

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('cc-lang', lang);
    renderAll(lang);
    updateUI(lang);
    filterCards();
}

function filterCards() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const favs = showFavsOnly ? getFavs() : null;
    const cards = document.querySelectorAll('article.card');
    let visibleCount = 0;

    cards.forEach(function(card) {
        const text = card.textContent.toLowerCase();
        const matchesQuery = !query || text.includes(query);
        const matchesFav = !favs || favs.includes(card.dataset.tipId);
        const matches = matchesQuery && matchesFav;
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
    });

    document.querySelectorAll('.grid').forEach(function(grid) {
        const hasVisible = Array.from(grid.querySelectorAll('article.card')).some(function(c) {
            return c.style.display !== 'none';
        });
        const title = grid.previousElementSibling;
        if (title && title.classList.contains('section-title')) {
            title.style.display = hasVisible ? '' : 'none';
        }
    });

    const noResults = document.getElementById('no-results');
    if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';

    const counter = document.getElementById('results-count');
    if (counter) {
        counter.textContent = (query || showFavsOnly) ? visibleCount + ' of 51 tips' : '';
    }
}

function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    setTimeout(function() {
        loader.classList.add('fade-out');
        document.body.classList.add('app-ready');
        setTimeout(function() { loader.remove(); }, 750);
    }, 3000);
}

function initSidebarToggle() {
    var btn = document.getElementById('sidebar-toggle');
    if (!btn) return;
    if (localStorage.getItem('cc-sidebar') === '1') {
        document.body.classList.add('sidebar-collapsed');
        btn.setAttribute('aria-expanded', 'false');
    }
    btn.addEventListener('click', function() {
        var collapsed = document.body.classList.toggle('sidebar-collapsed');
        localStorage.setItem('cc-sidebar', collapsed ? '1' : '');
        btn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('cc-lang') || 'en';
    switchLang(savedLang);
    initLoader();
    initSidebarToggle();

    if (localStorage.getItem('cc-dark')) {
        document.body.classList.add('dark');
        const btn = document.getElementById('dark-toggle');
        if (btn) btn.textContent = '☾ Dark mode';
    }

    document.getElementById('search-input').addEventListener('input', filterCards);

    window.addEventListener('scroll', function() {
        const btn = document.getElementById('back-top');
        if (btn) btn.classList.toggle('visible', window.scrollY > 400);
    });

    document.addEventListener('keydown', function(e) {
        const tag = document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        if (e.key === '/' || (e.ctrlKey && e.key === 'k')) {
            e.preventDefault();
            document.getElementById('search-input').focus();
            document.getElementById('search-input').select();
        }
        if (e.key === 'Escape') {
            document.getElementById('search-input').blur();
        }
    });
});
