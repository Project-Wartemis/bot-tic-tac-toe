import { Bot } from 'wartemis';

interface State {
  board: string;
  symbol: string;
}

interface Action {
  position: number;
}

new Bot('Tic Tac Toe', 'Demobot')
  .onError(console.error)
  .onState(raw => {
    const state: State = Object.assign({} as State, raw);
    console.log(state);
    return {
      position: state.board.indexOf(' ')
    } as Action;
  })
  .start();
