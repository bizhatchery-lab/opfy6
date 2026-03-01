/**
 * Initialize dynamic glow effect with mouse tracking
 * Tracks cursor position relative to elements with .dynamic-glow class
 * and updates CSS variables --mouse-x and --mouse-y for gradient positioning
 */
export function initializeDynamicGlow() {
  const glowElements = document.querySelectorAll('.dynamic-glow');

  if (glowElements.length === 0) return;

  glowElements.forEach((element) => {
    const htmlElement = element as HTMLElement;

    // Skip if already initialized to prevent duplicate listeners
    if (htmlElement.dataset.dynamicGlowInitialized === 'true') {
      return;
    }

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = htmlElement.getBoundingClientRect();

      // Calculate position relative to element's top-left corner
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;

      // Update CSS variables with pixel values
      htmlElement.style.setProperty('--mouse-x', `${x}px`);
      htmlElement.style.setProperty('--mouse-y', `${y}px`);
    };

    htmlElement.addEventListener('mousemove', handleMouseMove);

    // Mark element as initialized to prevent duplicate listeners
    htmlElement.dataset.dynamicGlowInitialized = 'true';
  });
}

/**
 * Reinitialize glow effect when DOM changes
 * Useful for dynamically added elements with .dynamic-glow class
 */
export function reinitializeDynamicGlow() {
  initializeDynamicGlow();
}
