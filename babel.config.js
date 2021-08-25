module.exports = {
  presets: [
    'next/babel',
  ],
  compact: true,
  plugins: [
    ['babel-plugin-styled-components', { pure: true, ssr: true, displayName: true, preprocess: false }],
  ],
};
