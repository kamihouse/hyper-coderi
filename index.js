// Coderi - Syntax scheme
const foregroundColor   = '#abb2bf';
const backgroundColor   = '#282c34';
const borderColor       = '#394251';
const selectionColor    = 'rgba(189, 195, 199, 0.3)';
const cursorColor       = '#95a5a6';

const colors            = {
  black             : backgroundColor,
  red               : '#e06c75',
  green             : '#98c379',
  yellow            : '#d19a66',
  blue              : '#56b6c2',
  magenta           : '#c678dd',
  cyan              : '#56b6c2',
  white             : '#d0d0d0',
  lightBlack        : '#808080',
  lightRed          : '#e06c75',
  lightGreen        : '#98c379',
  lightYellow       : '#d19a66',
  lightBlue         : '#56b6c2',
  lightMagenta      : '#c678dd',
  lightCyan         : '#56b6c2',
  lightWhite        : '#d0d0d0'
};

// Config
exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    selectionColor,
    colors,
    cursorColor: config.cursorColor || cursorColor,
    cursorShape: config.cursorShape || 'BLOCK',
    fontSize: config.fontSize || 12,
    fontFamily: config.fontFamily || 'Menlo, "DejaVu Sans Mono", Consolas',
    termCSS: `
    ${config.termCSS || ''}
    ::selection {
      background: #9198A2 !important;
    }
    x-screen x-row {
      font-variant-ligatures: initial;
    }
    span {
      font-weight: normal !important;
    }
    `,
    css: `
    ${config.css || ''}
    ::selection {
      background: #9198A2 !important;
    }
    `
  });
};
