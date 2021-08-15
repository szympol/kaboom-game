import k from '@/kaboom';

export default function Floor() {
  k.add([
    k.pos(0, k.height()),
    k.rect(k.width(), 50),
    k.solid(),
  ]);
}
