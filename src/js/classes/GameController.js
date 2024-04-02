import Character from './Character';

export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.char = new Character();
  }


  init() {
    this.gamePlay.drawUi();
    
    this.gamePlay.redrawPosition(this.char, this.gamePlay.boardSize);

    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
  }

  onCellClick(index) {
    const scoreEl = document.querySelector('.score');
    const scoreSpan = scoreEl.querySelector('span'); 
    if (Number(index) === this.char.position) {
      scoreSpan.textContent = Number(scoreSpan.textContent) + 1;
    } else {
      scoreSpan.textContent = Number(scoreSpan.textContent) - 1;
    }
    this.gamePlay.redrawPosition(this.char, this.gamePlay.boardSize);
  }

  placeCharacter() {

  }

}