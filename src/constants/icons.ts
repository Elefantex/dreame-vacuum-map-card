/**
 * SVG icon definitions
 */

export const VACUUM_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <!-- Two swirls for vacuum -->
  <path d="M 8 10 Q 6 10 6 12 Q 6 14 8 14 Q 10 14 10 12" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M 16 10 Q 14 10 14 12 Q 14 14 16 14 Q 18 14 18 12" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`;

export const MOP_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <!-- One small liquid drop over a big liquid drop -->
  <!-- Large drop -->
  <path d="M 12 16 Q 10 14 10 12 Q 10 10 12 8 Q 14 10 14 12 Q 14 14 12 16 Z" fill="currentColor" opacity="0.8"/>
  <!-- Small drop above -->
  <path d="M 12 9 Q 11 8.5 11 7.5 Q 11 6.5 12 6 Q 13 6.5 13 7.5 Q 13 8.5 12 9 Z" fill="currentColor"/>
</svg>`;

export const VACUUM_MOP_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <!-- Small swirl over liquid drop -->
  <!-- Liquid drop -->
  <path d="M 12 16 Q 10 14 10 12 Q 10 10 12 8 Q 14 10 14 12 Q 14 14 12 16 Z" fill="currentColor" opacity="0.6"/>
  <!-- Small swirl above -->
  <path d="M 12 8 Q 10.5 8 10.5 9.5 Q 10.5 11 12 11 Q 13.5 11 13.5 9.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`;

export const MOP_AFTER_VACUUM_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <!-- Swirl with 1 next to it (top) -->
  <path d="M 8 8 Q 6.5 8 6.5 9.5 Q 6.5 11 8 11 Q 9.5 11 9.5 9.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <text x="11" y="11" font-size="6" font-weight="bold" fill="currentColor">1</text>
  
  <!-- Tear drop with 2 next to it (bottom) -->
  <path d="M 8 18 Q 6.5 16.5 6.5 15 Q 6.5 13.5 8 12 Q 9.5 13.5 9.5 15 Q 9.5 16.5 8 18 Z" fill="currentColor" opacity="0.8"/>
  <text x="11" y="17" font-size="6" font-weight="bold" fill="currentColor">2</text>
</svg>`;
