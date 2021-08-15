import { GameObj, KaboomCtx } from 'kaboom';
import { PlayerDirection, PlayerKeyAction, PlayerMovementAction } from '@/types/player';

const playerAction = (player: GameObj) => (action: PlayerMovementAction): void => {
  player.play(action);
};

export default function Player(k: KaboomCtx) {
  return (): GameObj => {
    const player = k.add([
      k.sprite('tiles', {
        animSpeed: 0.1,
        frame: 300,
      }),
      k.pos(k.width() * 0.1, k.height() * 1),
      k.origin('center'),
      k.scale(1),
      k.body(),
      k.solid(),
    ]);

    const handlePlayerMovement = playerAction(player);

    k.keyPress(PlayerDirection.LEFT, () => {
      player.scale.x = -1;
      handlePlayerMovement(PlayerMovementAction.RUN);
    });

    k.keyDown(PlayerDirection.LEFT, () => {
      player.move(-100, 0);
    });

    k.keyPress(PlayerDirection.RIGHT, () => {
      player.scale.x = 1;
      handlePlayerMovement(PlayerMovementAction.RUN);
    });

    k.keyDown(PlayerDirection.RIGHT, () => {
      player.move(100, 0);
    });

    k.keyPress(PlayerKeyAction.JUMP, () => {
      player.jump(350);
    });

    Object.values(PlayerDirection)
      .forEach((e) => {
        k.keyRelease(e, () => {
          handlePlayerMovement(PlayerMovementAction.IDLE);
        });
      });

    return player;
  };
}
