import kaboom, { KaboomConf } from 'kaboom';
import canvasBuilder from '@/utils/canvasBuilder';

const kConfig: KaboomConf = {
  width: 320,
  height: 240,
  fullscreen: true,
  scale: 2.5,
  ...canvasBuilder,
  clearColor: [0, 0, 0],
};

const k = kaboom(kConfig);

export default k;
