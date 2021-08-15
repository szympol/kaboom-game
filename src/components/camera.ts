import { GameObj, KaboomCtx } from 'kaboom';

export default function Camera(k: KaboomCtx, player: GameObj): void {
  const actionCb = () => {
    k.camPos(player.pos);
  };
  player.action(actionCb);
}
