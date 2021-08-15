import { KaboomCtx } from 'kaboom';
import { level1 } from '@/frame/level1';
import Player from '@/components/player';
import Camera from '@/components/camera';

export default function Scene(k: KaboomCtx) {
  return () => {
    k.addLevel(level1, {
      width: 16,
      height: 16,
      any: () => undefined,
      '=':
                [
                  k.sprite('tiles', {
                    frame: 65,
                  }),
                  k.solid(),
                ],
      '@':
                [
                  k.sprite('tiles', {
                    frame: 10,
                  }),
                  k.solid(),
                ],
      '<':
                [
                  k.sprite('tiles', {
                    frame: 92,
                  }),
                ],
      '>':
                [
                  k.sprite('tiles', {
                    frame: 93,
                  }),
                ],
    });
    const player = Player(k)();
    Camera(k, player);
  };
}
