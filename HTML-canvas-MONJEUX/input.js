export class InputHandler {
  constructor(game) {
    this.game = game
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (
        (
          e.key === "s" ||
          e.key === "z" ||
          e.key === "q" ||
          e.key === "d" ||
          e.key === "a"
          ) &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      } else if (e.key === 'p') this.game.debug = !this.game.debug;
    });
    window.addEventListener("keyup", (e) => {
      if (
        e.key === "s" ||
        e.key === "z" ||
        e.key === "q" ||
        e.key === "d" ||
        e.key === "a"
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}
