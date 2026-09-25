/**
 * ScienceBatch Web - Dynamic Releases & OS Detection Module
 * Connects to GitHub Releases API with graceful fallbacks and multi-platform support
 */

import { t } from './i18n.js';

const GITHUB_OWNER = 'maanfitow';
const GITHUB_REPO = 'ScienceBatch';
const API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`;
const REPO_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;
const RELEASES_URL = `${REPO_URL}/releases`;

export function detectOS() {
  if (typeof window === 'undefined') {
    return { id: 'generic', name: 'Desktop', badge: 'Multiplatform', icon: 'terminal' };
  }
  const ua = window.navigator?.userAgent || '';
  const platform = window.navigator?.platform || '';

  if (/Win/i.test(platform) || /Win/i.test(ua)) {
    return { id: 'windows', name: 'Windows', badge: '.exe / .msi', icon: 'windows' };
  }
  if (/Mac/i.test(platform) || /Mac/i.test(ua)) {
    return { id: 'macos', name: 'macOS', badge: '.dmg (Apple & Intel)', icon: 'apple' };
  }
  if (/Linux/i.test(platform) || /Linux/i.test(ua) || /X11/i.test(ua)) {
    return { id: 'linux', name: 'Linux', badge: '.deb / .AppImage', icon: 'linux' };
  }
  return { id: 'generic', name: 'Desktop', badge: 'Multiplatform', icon: 'terminal' };
}

let latestReleaseData = null;
let currentOS = detectOS();

export async function fetchLatestRelease() {
  if (typeof window === 'undefined') return null;
  const cacheKey = 'sb_release_cache';
  const cacheTimeKey = 'sb_release_cache_time';
  const now = Date.now();
  
  // Cache for 5 minutes to prevent rate limits
  let cached = null;
  let cacheTime = null;
  if (typeof sessionStorage !== 'undefined') {
    cached = sessionStorage.getItem(cacheKey);
    cacheTime = sessionStorage.getItem(cacheTimeKey);
  }
  
  if (cached && cacheTime && (now - Number(cacheTime) < 5 * 60 * 1000)) {
    try {
      latestReleaseData = JSON.parse(cached);
      updateReleaseUI();
      return latestReleaseData;
    } catch {
      // ignore cache parse error
    }
  }

  try {
    const res = await fetch(API_URL, {
      headers: { 'Accept': 'application/vnd.github.v3+json' },
    });

    if (res.ok) {
      const data = await res.json();
      latestReleaseData = data;
      sessionStorage.setItem(cacheKey, JSON.stringify(data));
      sessionStorage.setItem(cacheTimeKey, String(now));
    } else {
      latestReleaseData = null;
    }
  } catch {
    latestReleaseData = null;
  }

  updateReleaseUI();
  return latestReleaseData;
}

export function updateReleaseUI() {
  currentOS = detectOS();
  const ctaBtn = document.getElementById('hero-cta-btn');
  const ctaText = document.getElementById('hero-cta-text');
  const ctaSubtext = document.getElementById('hero-cta-subtext');
  const versionBadge = document.getElementById('hero-version-badge');
  const navBadge = document.getElementById('nav-version-badge');
  const dropdownList = document.getElementById('platforms-dropdown-menu');

  const hasAssets = latestReleaseData && Array.isArray(latestReleaseData.assets) && latestReleaseData.assets.length > 0;
  const tagName = latestReleaseData?.tag_name || 'v0.1.0';

  // Badges update
  if (versionBadge) {
    versionBadge.textContent = hasAssets ? `${tagName} Latest` : `${tagName} Pre-release`;
  }
  if (navBadge) {
    navBadge.textContent = tagName;
  }

  if (hasAssets) {
    // Assets exist in GitHub Release! Find the matching one for user OS
    const assets = latestReleaseData.assets;
    let targetAsset = null;

    if (currentOS.id === 'linux') {
      targetAsset = assets.find(a => a.name.endsWith('.deb')) ||
                    assets.find(a => a.name.endsWith('.AppImage')) ||
                    assets.find(a => a.name.endsWith('.tar.gz'));
    } else if (currentOS.id === 'windows') {
      targetAsset = assets.find(a => a.name.endsWith('.exe')) ||
                    assets.find(a => a.name.endsWith('.msi')) ||
                    assets.find(a => a.name.endsWith('.zip'));
    } else if (currentOS.id === 'macos') {
      targetAsset = assets.find(a => a.name.endsWith('.dmg')) ||
                    assets.find(a => a.name.endsWith('.tar.gz'));
    }

    // Default to first asset if no exact OS match
    if (!targetAsset && assets.length > 0) {
      targetAsset = assets[0];
    }

    if (ctaBtn && ctaText) {
      ctaBtn.href = targetAsset ? targetAsset.browser_download_url : latestReleaseData.html_url;
      ctaBtn.setAttribute('target', '_blank');
      ctaBtn.setAttribute('rel', 'noopener noreferrer');
      ctaText.textContent = `${t('hero.cta_download')} ${currentOS.name} (${tagName})`;
    }

    if (ctaSubtext) {
      ctaSubtext.textContent = t('hero.cta_subtext_active');
    }

    // Populate dropdown with real release files
    if (dropdownList) {
      dropdownList.innerHTML = assets.map(a => `
        <a href="${a.browser_download_url}" target="_blank" rel="noopener noreferrer" 
           class="flex items-center justify-between px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors">
          <span class="font-mono truncate mr-2">${a.name}</span>
          <span class="text-slate-500 font-mono text-[10px] whitespace-nowrap">${formatBytes(a.size)}</span>
        </a>
      `).join('') + `
        <div class="border-t border-slate-800 my-1"></div>
        <a href="${RELEASES_URL}" target="_blank" rel="noopener noreferrer"
           class="flex items-center justify-between px-3 py-2 text-xs text-brand-cyan hover:bg-slate-800 rounded transition-colors">
          <span>View all on GitHub</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      `;
    }
  } else {
    // Pre-release or no assets uploaded yet: Graceful fallback
    if (ctaBtn && ctaText) {
      ctaBtn.href = REPO_URL;
      ctaBtn.setAttribute('target', '_blank');
      ctaBtn.setAttribute('rel', 'noopener noreferrer');
      ctaText.textContent = t('hero.cta_prerelease');
    }
    if (ctaSubtext) {
      ctaSubtext.textContent = t('hero.cta_subtext_prerelease');
    }

    if (dropdownList) {
      dropdownList.innerHTML = `
        <div class="px-3 py-2 text-[11px] text-slate-400 border-b border-slate-800">
          Binaries are preparing for release. You can compile directly:
        </div>
        <a href="#install" class="flex items-center justify-between px-3 py-2 text-xs text-slate-200 hover:bg-slate-800 rounded transition-colors">
          <span>⚙️ Build instructions with Cargo</span>
          <span class="text-brand-emerald font-mono text-[10px]">Tauri v2</span>
        </a>
        <a href="${REPO_URL}" target="_blank" rel="noopener noreferrer"
           class="flex items-center justify-between px-3 py-2 text-xs text-brand-cyan hover:bg-slate-800 rounded transition-colors">
          <span>⭐ Star on GitHub</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      `;
    }
  }
}

function formatBytes(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}
