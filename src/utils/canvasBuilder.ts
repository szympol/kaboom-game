const app = 'app';
const coreNode = document.getElementById(app);
const customCanvas = document.createElement('canvas');

if (!coreNode) {
  // eslint-disable-next-line no-console
  console.error(`Cannot find #${app} DOM node`);
}

coreNode?.append(customCanvas);

const canvas = {
  canvas: customCanvas,
};

const canvasBuilder = coreNode && canvas;

export default canvasBuilder;
