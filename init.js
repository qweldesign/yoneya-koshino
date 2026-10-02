// Action Core
import ActionCore from './js/action-core.js';
new ActionCore.Preset();

/**
 * Auto Copyright
 * © 2026 QWEL.DESIGN (https://qwel.design)
 * Released under the MIT License.
 * See LICENSE file for details.
 */
class AutoCopyright {
  constructor(startYear, companyName, elem) {
    elem ||= document.querySelector('.footer__copyright');
    if (elem) elem.innerHTML = this.generate(startYear, companyName);
  }

  generate(startYear, companyName) {
    const currentYear = new Date().getFullYear();
    if (startYear === currentYear) {
      return `&copy; ${currentYear} ${companyName}`;
    }
    return `&copy; ${startYear} - ${currentYear} ${companyName}`;
  }
}

new AutoCopyright(1880, '民宿よねや');