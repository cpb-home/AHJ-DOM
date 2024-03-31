import Character from './Character';

export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
  }


  init() {
    this.gamePlay.drawUi();
    const char = new Character();
    this.gamePlay.redrawPosition(char, this.gamePlay.boardSize);

    //this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
  }

  onCellClick() {

  }

  placeCharacter() {

  }

}