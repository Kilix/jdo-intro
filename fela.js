import { createRenderer } from 'fela';
import webPreset from 'fela-preset-web';

// add your renderer configuration here
const renderer = createRenderer({
  plugins: [...webPreset],
});

renderer.renderFont('Streamster', ['static/Streamster.ttf']);
renderer.renderFont('Minecrafter', ['static/Minecrafter.ttf']);

renderer.renderStatic({ boxSizing: 'border-box' }, '*');
renderer.renderStatic(
  {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  'html',
);
renderer.renderStatic(
  {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100%',
    padding: 0,
    margin: 0,
    '-webkit-font-smoothing': 'subpixel-antialiased',
    fontFamily: 'Minecrafter, cursive',
    fontSize: '14px',
    fontWeight: 200,
    lineHeight: 1.5,
    color: '#1F1F1F',
    overflow: 'hidden',
  },
  'body',
);
renderer.renderStatic(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
    minHeight: '100vh',
  },
  ['#__next', '#__next>div'],
);

export function getRenderer() {
  return renderer;
}

export function getMountNode() {
  if (typeof window !== 'undefined') {
    return document.getElementById('fela-stylesheet');
  }

  return undefined;
}
