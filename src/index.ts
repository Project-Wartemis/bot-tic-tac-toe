import { Bot } from 'wartemis';

interface State {
  board: string;
  symbol: string;
}

interface Action {
  position: number;
}

class BotTicTacToe extends Bot {

  constructor() {
    super('Tic Tac Toe', 'Demobot');
  }

  handleError(error: string): void {
    console.error(error);
  }

  handleState(state: State): Action {
    return {
      position: state.board.indexOf(' ')
    };
  }
}

const bot = new BotTicTacToe();
bot.start();
