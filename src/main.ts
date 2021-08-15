import k from '@/kaboom';
import 'normalize.css/normalize.css';
import '@/style.css';

import Scene from '@/scenes/scene';
import SpriteLoader from '@/components/spriteLoader';

SpriteLoader(k);

k.scene('scene', Scene(k));

k.scene('main', () => {
  k.go('scene');
});

k.start('main');
