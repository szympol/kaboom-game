import { KaboomCtx, SpriteData } from 'kaboom';
import tilemap from '@/assets/tilemap.png';

const handleResolved = (spriteData: SpriteData): void => {
  console.log('Game has been successfully loaded!', spriteData);
};

const handleRejected = (errReason: unknown): void => {
  console.error('Game has been successfully loaded!', errReason);
};

export default function SpriteLoader(k: KaboomCtx): void {
  k.loadSprite('tiles', tilemap, {
    sliceX: 20,
    sliceY: 20,
    anims: {
      idle: {
        from: 300,
        to: 300,
      },
      run: {
        from: 301,
        to: 302,
      },
    },
  }).then(handleResolved, handleRejected);
}
