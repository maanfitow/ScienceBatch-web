/**
 * ScienceBatch Web - Main Orchestrator
 * Interactivity: Tabs, Accordions, Dropdowns, Toast feedback, Mobile menu
 */

import { initI18n, t, setLanguage } from './i18n.js';
import { fetchLatestRelease, updateReleaseUI } from './releases.js';

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialize i18n
  initI18n();

  // 2. Fetch latest GitHub release asynchronously
  fetchLatestRelease();

  // 3. Listen to language changes to keep dynamic CTA synced
  const btnEn = document.getElementById('lang-btn-en');
  const btnEs = document.getElementById('lang-btn-es');
  if (btnEn) btnEn.addEventListener('click', () => updateReleaseUI());
  if (btnEs) btnEs.addEventListener('click', () => updateReleaseUI());

  // 4. Platforms Dropdown
  const dropdownBtn = document.getElementById('platforms-dropdown-btn');
  const dropdownMenu = document.getElementById('platforms-dropdown-menu');

  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  }

  // 5. Mobile Navigation Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking navigation links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // 6. Installation Tabs
  const installTabs = document.querySelectorAll('[data-install-tab]');
  const installPanes = document.querySelectorAll('[data-install-pane]');

  installTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-install-tab');

      // Update tab styles
      installTabs.forEach(t => {
        t.classList.remove('border-brand-emerald', 'text-white', 'bg-slate-800/80');
        t.classList.add('border-transparent', 'text-slate-400');
      });
      tab.classList.remove('border-transparent', 'text-slate-400');
      tab.classList.add('border-brand-emerald', 'text-white', 'bg-slate-800/80');

      // Show matching pane
      installPanes.forEach(pane => {
        if (pane.getAttribute('data-install-pane') === target) {
          pane.classList.remove('hidden');
        } else {
          pane.classList.add('hidden');
        }
      });
    });
  });

  // 7. Copy to Clipboard with Toast Notification
  const copyButtons = document.querySelectorAll('[data-copy-target]');
  const toast = document.getElementById('toast');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.getAttribute('data-copy-target');
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const text = targetEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        showToast(t('install.copied') || 'Copied to clipboard!');
        
        // Brief visual tick on button
        const originalContent = btn.innerHTML;
        btn.innerHTML = `<svg class="w-4 h-4 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
        setTimeout(() => {
          btn.innerHTML = originalContent;
        }, 1800);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 2500);
  }

  // 8. FAQ Accordion
  const faqItems = document.querySelectorAll('[data-faq-item]');
  faqItems.forEach(item => {
    const trigger = item.querySelector('[data-faq-trigger]');
    const content = item.querySelector('[data-faq-content]');
    const icon = item.querySelector('[data-faq-icon]');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');

        // Close all other FAQs
        faqItems.forEach(otherItem => {
          const otherContent = otherItem.querySelector('[data-faq-content]');
          const otherIcon = otherItem.querySelector('[data-faq-icon]');
          const otherTrigger = otherItem.querySelector('[data-faq-trigger]');
          if (otherContent && otherContent !== content) {
            otherContent.classList.add('hidden');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        if (isOpen) {
          content.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          content.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 9. Showcase Tab Switcher (LaTeX vs Typst)
  const showcaseTabs = document.querySelectorAll('[data-showcase-tab]');
  const showcaseLatex = document.getElementById('showcase-latex-view');
  const showcaseTypst = document.getElementById('showcase-typst-view');

  if (showcaseTabs.length > 0 && showcaseLatex && showcaseTypst) {
    showcaseTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const mode = tab.getAttribute('data-showcase-tab');
        showcaseTabs.forEach(t => {
          t.classList.remove('bg-slate-800', 'text-white', 'border-brand-cyan');
          t.classList.add('text-slate-400', 'border-transparent');
        });
        tab.classList.add('bg-slate-800', 'text-white', 'border-brand-cyan');
        tab.classList.remove('text-slate-400', 'border-transparent');

        if (mode === 'latex') {
          showcaseLatex.classList.remove('hidden');
          showcaseTypst.classList.add('hidden');
        } else {
          showcaseLatex.classList.add('hidden');
          showcaseTypst.classList.remove('hidden');
        }
      });
    });
  }
});
