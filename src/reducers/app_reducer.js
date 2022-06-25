const app_reducer = (state, action) => {
  if (action.type === "SET_PLAYING") {
    return { ...state, playing: true };
  }
  if (action.type === "ROCK") {
    let items = ["rock", "paper", "scissors"];
    let item = items[Math.floor(Math.random() * items.length)];
    if (item === "rock") {
      return {
        ...state,
        playing: false,
        youChoose: "rock",
        pcChoose: item,
        wordInBtn: "Draw,Again",
      };
    }
    if (item === "paper") {
      return {
        ...state,
        playing: false,
        youChoose: "rock",
        pcChoose: item,
        score: state.score - 1,
        wordInBtn: "YouLost,Again",
      };
    }
    if (item === "scissors") {
      return {
        ...state,
        playing: false,
        youChoose: "rock",
        pcChoose: item,
        score: state.score + 1,
        wordInBtn: "YouWon,Again",
      };
    }
  }
  if (action.type === "PAPER") {
    let items = ["rock", "paper", "scissors"];
    let item = items[Math.floor(Math.random() * items.length)];

    if (item === "paper") {
      return {
        ...state,
        playing: false,
        youChoose: "paper",
        pcChoose: item,
        wordInBtn: "Draw,Again",
      };
    }
    if (item === "scissors") {
      return {
        ...state,
        playing: false,
        youChoose: "paper",
        pcChoose: item,
        score: state.score - 1,
        wordInBtn: "YouLost,Again",
      };
    }
    if (item === "rock") {
      return {
        ...state,
        playing: false,
        youChoose: "paper",
        pcChoose: item,
        score: state.score + 1,
        wordInBtn: "YouWon,Again",
      };
    }
  }
  if (action.type === "SCISSORS") {
    let items = ["rock", "paper", "scissors"];
    let item = items[Math.floor(Math.random() * items.length)];
    if (item === "scissors") {
      return {
        ...state,
        playing: false,
        youChoose: "scissors",
        pcChoose: item,
        wordInBtn: "Draw,Again",
      };
    }
    if (item === "rock") {
      return {
        ...state,
        playing: false,
        youChoose: "scissors",
        pcChoose: item,
        score: state.score - 1,
        wordInBtn: "YouLost,Again",
      };
    }
    if (item === "paper") {
      return {
        ...state,
        playing: false,
        youChoose: "scissors",
        pcChoose: item,
        score: state.score + 1,
        wordInBtn: "YouWon,Again",
      };
    }
  }
};

export default app_reducer;
