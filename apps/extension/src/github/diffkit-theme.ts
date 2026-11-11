import { browser } from 'wxt/browser';

const FONT_STYLE_ID = 'geld-diffkit-fonts';

function ensureFontFaces(): void {
  if (document.getElementById(FONT_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = FONT_STYLE_ID;
  const face = (family: string, file: string) => `@font-face{font-family:'${family}';font-style:normal;font-display:swap;font-weight:100 900;src:url('${browser.runtime.getURL(`/fonts/${file}`)}') format('woff2');}`;
  style.textContent = `${face('Inter Variable', 'inter-var.woff2')}${face('Geist Mono Variable', 'geist-mono-var.woff2')}`;
  document.documentElement.appendChild(style);
}

export function applyDiffkitTheme(enabled: boolean): void {
  if (enabled) {
    ensureFontFaces();
    document.documentElement.dataset.geldTheme = 'diffkit';
  } else {
    delete document.documentElement.dataset.geldTheme;
  }
}
