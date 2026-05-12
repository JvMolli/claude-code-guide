/* global learnI18n, learnSections, learnPresentation */

let learnCurrentLang = 'en';
let learnPresentOpen = false;
let learnPresentIndex = 0;
let onPresentationKeydown = null;

function stripTags(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

function escapeHtml(s) {
    if (s == null) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
}

function setText(id, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
}

function renderHtmlBlock(block, lang) {
    var wrap = document.createElement('div');
    wrap.className = 'guide-lang-block';
    var html = block[lang] || block.es || '';
    wrap.innerHTML = html;
    return wrap;
}

function renderSection(sec, lang) {
    var section = document.createElement('section');
    section.className = 'guide-section';
    section.id = sec.id;
    if (sec.id === 'jlad') {
        section.classList.add('jlad-section');
    }
    sec.blocks.forEach(function(block) {
        if (block.type === 'html') {
            section.appendChild(renderHtmlBlock(block, lang));
        }
    });
    return section;
}

function renderAllLearn(lang) {
    var root = document.getElementById('learn-sections-root');
    if (!root) return;
    root.innerHTML = '';

    learnSections.forEach(function(sec) {
        root.appendChild(renderSection(sec, lang));
    });

    var noResults = document.createElement('div');
    noResults.id = 'learn-no-results';
    noResults.className = 'no-results';
    noResults.textContent = learnI18n[lang].noResults;
    noResults.style.display = 'none';
    root.appendChild(noResults);

    var foot = document.createElement('p');
    foot.className = 'guide-footer-note';
    foot.style.textAlign = 'center';
    foot.style.color = 'var(--slate-800)';
    foot.style.marginTop = '2rem';
    foot.style.fontSize = '0.82rem';
    foot.style.opacity = '0.65';
    foot.textContent = learnI18n[lang].footerNote;
    root.appendChild(foot);
}

function buildNav(lang) {
    var nav = document.getElementById('learn-nav-links');
    if (!nav) return;
    nav.innerHTML = '';

    var groups = learnI18n[lang].navGroups;
    for (var g = 0; g < groups.length; g++) {
        var label = document.createElement('span');
        label.className = 'nav-group-label';
        label.textContent = groups[g];
        nav.appendChild(label);

        learnSections.forEach(function(sec) {
            if (sec.group !== g) return;
            var block = sec.blocks[0];
            var html = block[lang] || block.es;
            var m = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
            var title = m ? stripTags(m[1]) : sec.id;
            var a = document.createElement('a');
            a.href = '#' + sec.id;
            a.textContent = title;
            nav.appendChild(a);
        });
    }
}

function updateLearnUI(lang) {
    var t = learnI18n[lang];
    document.documentElement.lang = lang;

    var back = document.getElementById('learn-back-home');
    if (back) back.textContent = t.backHome;

    var st = document.getElementById('learn-sidebar-title');
    if (st) st.textContent = t.sidebarTitle;

    var mg = document.getElementById('main-guide');
    if (mg) mg.textContent = t.guideTagline;
    var lg = document.getElementById('loader-guide');
    if (lg) lg.textContent = t.guideTagline;
    var lw = document.getElementById('loader-welcome');
    if (lw) lw.textContent = t.welcomeTo;

    var mh = document.getElementById('learn-main-title');
    if (mh) mh.textContent = t.mainTitle;
    var md = document.getElementById('learn-main-desc');
    if (md) md.textContent = t.mainSubtitle;

    var search = document.getElementById('learn-search-input');
    if (search) search.placeholder = t.searchPlaceholder;

    var authorPs = document.querySelectorAll('#learn-author p');
    if (authorPs[0]) {
        authorPs[0].innerHTML = '<strong>' + t.authorLabel + ':</strong> Jaime Mollinedo';
    }
    if (authorPs[1]) {
        authorPs[1].textContent = t.authorTagline;
    }

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    buildNav(lang);

    setText('learn-present-label', t.presentLabel);
    if (learnPresentOpen) {
        refreshPresentationChrome();
        renderPresentationSlide();
    }
}

function switchLearnLang(lang) {
    learnCurrentLang = lang;
    localStorage.setItem('cc-lang', lang);
    renderAllLearn(lang);
    updateLearnUI(lang);
    filterLearnSections();
}

function toggleLearnDark() {
    var isDark = document.body.classList.toggle('dark');
    localStorage.setItem('cc-dark', isDark ? '1' : '');
    var btn = document.getElementById('dark-toggle');
    if (btn) {
        btn.textContent = isDark ? '☀ Light mode' : '☾ Dark mode';
    }
}

function filterLearnSections() {
    var input = document.getElementById('learn-search-input');
    var query = input ? input.value.toLowerCase().trim() : '';
    var sections = document.querySelectorAll('#learn-sections-root .guide-section');
    var visible = 0;

    sections.forEach(function(sec) {
        var text = sec.textContent.toLowerCase();
        var show = !query || text.includes(query);
        sec.style.display = show ? '' : 'none';
        if (show) visible++;
    });

    var foot = document.querySelector('#learn-sections-root .guide-footer-note');
    if (foot) foot.style.display = visible === 0 && query ? 'none' : '';

    var noResults = document.getElementById('learn-no-results');
    if (noResults) {
        noResults.style.display = (visible === 0 && query) ? 'block' : 'none';
    }

    var counter = document.getElementById('learn-results-count');
    if (counter && query) {
        counter.textContent = visible + ' / ' + learnSections.length;
    } else if (counter) {
        counter.textContent = '';
    }
}

function initLearnLoader() {
    var loader = document.getElementById('loader');
    if (!loader) return;
    setTimeout(function() {
        loader.classList.add('fade-out');
        document.body.classList.add('app-ready');
        setTimeout(function() {
            loader.remove();
        }, 750);
    }, 3000);
}

function renderPresentationSlide() {
    var slide = learnPresentation[learnPresentIndex];
    var lang = learnCurrentLang;
    var d = slide ? (slide[lang] || slide.es || slide.en) : null;
    var el = document.getElementById('slide-content');
    if (!slide || !d || !el) return;

    var html = '';
    switch (slide.type) {
    case 'title':
        html = '<div class="slide-body slide-body--title">' +
            '<p class="slide-eyebrow">' + escapeHtml(d.eyebrow) + '</p>' +
            '<h1 class="slide-h1">' + escapeHtml(d.title) + '</h1>' +
            '<p class="slide-subtitle">' + escapeHtml(d.subtitle) + '</p>' +
            '<p class="slide-foot">' + escapeHtml(d.foot) + '</p></div>';
        break;
    case 'concept':
    case 'group':
        html = '<div class="slide-body slide-body--text">' +
            '<p class="slide-eyebrow">' + escapeHtml(d.eyebrow) + '</p>' +
            '<h2 class="slide-h2">' + escapeHtml(d.title) + '</h2>';
        if (d.lead) {
            html += '<p class="slide-lead">' + escapeHtml(d.lead) + '</p>';
        }
        html += '<ul class="slide-bullets">';
        (d.bullets || []).forEach(function(b) {
            html += '<li>' + escapeHtml(b) + '</li>';
        });
        html += '</ul></div>';
        break;
    case 'flow':
        html = '<div class="slide-body slide-body--flow">' +
            '<p class="slide-eyebrow">' + escapeHtml(d.eyebrow) + '</p>' +
            '<h2 class="slide-h2">' + escapeHtml(d.title) + '</h2>' +
            '<div class="slide-flow">';
        (d.steps || []).forEach(function(step, i) {
            if (i > 0) {
                html += '<span class="slide-flow-arrow">→</span>';
            }
            html += '<div class="slide-flow-step">' + escapeHtml(step) + '</div>';
        });
        html += '</div></div>';
        break;
    case 'table':
        html = '<div class="slide-body slide-body--table">' +
            '<p class="slide-eyebrow">' + escapeHtml(d.eyebrow) + '</p>' +
            '<h2 class="slide-h2">' + escapeHtml(d.title) + '</h2>' +
            '<table class="slide-table"><thead><tr>';
        (d.headers || []).forEach(function(h) {
            html += '<th>' + escapeHtml(h) + '</th>';
        });
        html += '</tr></thead><tbody>';
        (d.rows || []).forEach(function(row) {
            html += '<tr>';
            row.forEach(function(cell) {
                html += '<td>' + escapeHtml(cell) + '</td>';
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
        break;
    case 'list':
        html = '<div class="slide-body slide-body--list">' +
            '<p class="slide-eyebrow">' + escapeHtml(d.eyebrow) + '</p>' +
            '<h2 class="slide-h2">' + escapeHtml(d.title) + '</h2>' +
            '<ol class="slide-ol">';
        (d.items || []).forEach(function(item) {
            html += '<li>' + escapeHtml(item) + '</li>';
        });
        html += '</ol></div>';
        break;
    case 'code':
        html = '<div class="slide-body slide-body--text">' +
            '<p class="slide-eyebrow">' + escapeHtml(d.eyebrow) + '</p>' +
            '<h2 class="slide-h2">' + escapeHtml(d.title) + '</h2>';
        if (d.lead) {
            html += '<p class="slide-lead">' + escapeHtml(d.lead) + '</p>';
        }
        html += '<pre class="slide-code-block">' + (d.code || '') + '</pre></div>';
        break;
    case 'closing': {
        var homeUrl = window.location.href.replace(/learn\.html.*$/, 'index.html');
        var qrApi = 'https://api.qrserver.com/v1/create-qr-code/?size=440x440&format=svg&qzone=2&data=' + encodeURIComponent(homeUrl);
        html = '<div class="slide-body slide-body--closing">' +
            '<div class="slide-closing-layout">' +
            '<div class="slide-closing-text">' +
            '<p class="slide-eyebrow">' + escapeHtml(d.eyebrow) + '</p>' +
            '<h2 class="slide-h2">' + escapeHtml(d.title) + '</h2>' +
            '<p class="slide-lead">' + escapeHtml(d.body) + '</p>' +
            '<p class="slide-cta-wrap"><a href="' + escapeHtml(d.linkHref) + '" class="slide-cta">' +
            escapeHtml(d.linkLabel) + '</a></p>' +
            '<p class="slide-foot">' + escapeHtml(d.foot) + '</p>' +
            '</div>' +
            '<div class="slide-closing-qr">' +
            '<img src="' + qrApi + '" alt="QR code" class="slide-qr-img" width="220" height="220">' +
            '<p class="slide-qr-label">' + escapeHtml(learnI18n[learnCurrentLang].qrLabel) + '</p>' +
            '</div>' +
            '</div></div>';
        break;
    }
    default:
        html = '';
    }
    el.innerHTML = html;
    el.classList.remove('slide-fade-in');
    void el.offsetWidth;
    el.classList.add('slide-fade-in');

    if (slide.type === 'closing') {
        var cta = el.querySelector('.slide-cta');
        if (cta) {
            cta.addEventListener('click', function() {
                closeLearnPresentation();
            });
        }
    }
}

function refreshPresentationChrome() {
    var t = learnI18n[learnCurrentLang];
    var total = learnPresentation.length;
    var n = learnPresentIndex + 1;

    var counter = document.getElementById('slide-counter');
    if (counter) {
        counter.textContent = (t.presentCounter || '').replace('{n}', String(n)).replace('{m}', String(total));
    }
    var fill = document.getElementById('slide-progress-fill');
    if (fill) {
        fill.style.width = ((n / total) * 100) + '%';
    }
    setText('learn-present-label', t.presentLabel);

    var prev = document.getElementById('slide-prev');
    var next = document.getElementById('slide-next');
    var closeBtn = document.getElementById('slide-close');
    var fs = document.getElementById('slide-fs');
    if (prev) {
        prev.textContent = t.presentPrev;
        prev.disabled = learnPresentIndex === 0;
    }
    if (next) {
        next.textContent = t.presentNext;
        next.disabled = learnPresentIndex === total - 1;
    }
    if (closeBtn) {
        closeBtn.setAttribute('aria-label', t.presentClose);
        closeBtn.title = t.presentClose;
    }
    if (fs) {
        fs.setAttribute('aria-label', t.presentFullscreen);
        fs.title = t.presentFullscreen;
    }
    var hint = document.getElementById('slide-hint');
    if (hint) hint.textContent = t.presentKeyboardHint;

    var shell = document.getElementById('learn-presentation');
    if (shell) shell.setAttribute('aria-label', t.presentLabel);

    var dotsEl = document.getElementById('slide-dots');
    if (dotsEl) {
        dotsEl.innerHTML = '';
        learnPresentation.forEach(function(_, i) {
            var dot = document.createElement('span');
            dot.className = 'slide-dot' + (i === learnPresentIndex ? ' slide-dot--active' : '');
            dotsEl.appendChild(dot);
        });
    }
}

function nextPresentationSlide() {
    if (learnPresentIndex < learnPresentation.length - 1) {
        learnPresentIndex++;
        if (learnPresentOpen) {
            refreshPresentationChrome();
            renderPresentationSlide();
        }
    }
}

function prevPresentationSlide() {
    if (learnPresentIndex > 0) {
        learnPresentIndex--;
        if (learnPresentOpen) {
            refreshPresentationChrome();
            renderPresentationSlide();
        }
    }
}

function toggleSlideFullscreen() {
    var shell = document.getElementById('learn-presentation');
    if (!shell || shell.hidden) return;
    if (!document.fullscreenElement) {
        shell.requestFullscreen().catch(function() {});
    } else {
        document.exitFullscreen().catch(function() {});
    }
}

function openLearnPresentation() {
    var shell = document.getElementById('learn-presentation');
    if (!shell) return;
    learnPresentIndex = 0;
    learnPresentOpen = true;
    shell.hidden = false;
    document.body.classList.add('presentation-open');
    refreshPresentationChrome();
    renderPresentationSlide();

    if (onPresentationKeydown) {
        document.removeEventListener('keydown', onPresentationKeydown, true);
    }
    onPresentationKeydown = function(e) {
        if (!learnPresentOpen) return;
        var tag = e.target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        if (e.key === 'Escape') {
            e.preventDefault();
            closeLearnPresentation();
            return;
        }
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextPresentationSlide();
            return;
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevPresentationSlide();
            return;
        }
        if (e.key === 'f' || e.key === 'F') {
            e.preventDefault();
            toggleSlideFullscreen();
        }
    };
    document.addEventListener('keydown', onPresentationKeydown, true);
}

function closeLearnPresentation() {
    var shell = document.getElementById('learn-presentation');
    if (!shell) return;
    learnPresentOpen = false;
    shell.hidden = true;
    document.body.classList.remove('presentation-open');
    if (onPresentationKeydown) {
        document.removeEventListener('keydown', onPresentationKeydown, true);
        onPresentationKeydown = null;
    }
    if (document.fullscreenElement === shell) {
        document.exitFullscreen().catch(function() {});
    }
}

function bindPresentationUI() {
    var prev = document.getElementById('slide-prev');
    var next = document.getElementById('slide-next');
    var closeBtn = document.getElementById('slide-close');
    var fs = document.getElementById('slide-fs');
    var scrim = document.getElementById('learn-pres-scrim');
    if (prev) prev.addEventListener('click', function(ev) { ev.stopPropagation(); prevPresentationSlide(); });
    if (next) next.addEventListener('click', function(ev) { ev.stopPropagation(); nextPresentationSlide(); });
    if (closeBtn) closeBtn.addEventListener('click', function(ev) { ev.stopPropagation(); closeLearnPresentation(); });
    if (fs) fs.addEventListener('click', function(ev) { ev.stopPropagation(); toggleSlideFullscreen(); });
    if (scrim) scrim.addEventListener('click', closeLearnPresentation);
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
    var saved = localStorage.getItem('cc-lang') || 'en';
    switchLearnLang(saved);
    initLearnLoader();
    initSidebarToggle();

    bindPresentationUI();

    if (localStorage.getItem('cc-dark')) {
        document.body.classList.add('dark');
        var btn = document.getElementById('dark-toggle');
        if (btn) btn.textContent = '☀ Light mode';
    }

    var searchInput = document.getElementById('learn-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterLearnSections);
    }

    window.addEventListener('scroll', function() {
        var topBtn = document.getElementById('back-top');
        if (topBtn) topBtn.classList.toggle('visible', window.scrollY > 400);
    });

    document.addEventListener('keydown', function(e) {
        if (learnPresentOpen) return;
        var tag = document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        if (e.key === '/' || (e.ctrlKey && e.key === 'k')) {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
        if (e.key === 'Escape' && searchInput) {
            searchInput.blur();
        }
    });
});
