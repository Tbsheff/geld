export function applyDiffkitTheme(enabled: boolean): void {
  if (enabled) document.documentElement.dataset.geldTheme = 'diffkit';
  else delete document.documentElement.dataset.geldTheme;
}
