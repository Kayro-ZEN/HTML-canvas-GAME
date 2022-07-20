export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily ='Rubik Moonrocks';
  }
  draw(context) {
    context.save()
    context.shadowOffsetX = 2
    context.shadowOffsetY = 2
    context.shadowColor = 'grey'
    context.shadowBlur = 0
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    // SCORE
    context.fillText("Score: " + this.game.score, 20, 50);
    // TIMER
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText ("Time: " + (this.game.time * 0.001). toFixed(1), 20, 80);
    // GAME OVER MESSAGES
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.font = this.fontSize * 2 + "px " + this.fontFamily;
      if (this.game.score > 5) {
        context.fillText(
          "Wouaahh",
          this.game.width * 0.5,
          this.game.height * 0.5 - 20
        );
        context.font = this.fontSize *  0.7 + "px " + this.fontFamily;
        context.fillText(
          "Tu n'as vraiment peur de rien !!!!",
          this.game.width * 0.5,
          this.game.height * 0.5 +20
        );
      } else { 
        context.fillText(
          "Tu t'es fais mordre ?",
          this.game.width * 0.5,
          this.game.height * 0.5 - 20
        );
        context.font = this.fontSize *  0.7 + "px " + this.fontFamily;
        context.fillText(
          "T'en fais pas, Tu seras meilleur la prochiane fois !!!!",
          this.game.width * 0.5,
          this.game.height * 0.5 + 20 )
        

      }
    }
    context.restore()
  }
}
      
