const { createStore } = Redux;

const ScoreState = {
  playerOneScore: 0,
  playerTwoScore: 0,

}

const playerScoreReducer = (state = ScoreState, action) =>{
  switch(action.type){
    case ADD_PLAYER_ONE_POINT:
    const playerOneNewScore = state.playerOneScore + 1
    return Object.assign({}, state,{
       playerOneScore: playerOneNewScore
    })
    case ADD_PLAYER_TWO_POINT:
    const playerTwoNewScore = state.playerTwoScore + 1
      return Object.assign({}, state,{
        playerTwoScore : playerTwoNewScore
      })

    default:
     return state;
  }
}

const ADD_PLAYER_ONE_POINT = 'ADD_PLAYER_ONE_POINT'
const ADD_PLAYER_TWO_POINT = 'ADD_PLAYER_TWO_POINT'
const playerOneScoreSection = document.getElementById('player-one-score')
const playerTwoScoreSection = document.getElementById('player-two-score')


const playerOneScoreButton = document.getElementById('add-player-one-point')
const playerTwoScoreButton = document.getElementById('add-player-two-point')

playerOneScoreButton.addEventListener('click', ()=>{
  store.dispatch({
    type: ADD_PLAYER_ONE_POINT
  })
})

playerTwoScoreButton.addEventListener('click', ()=>{
  store.dispatch({
    type: ADD_PLAYER_TWO_POINT
  })
})

const store = createStore(playerScoreReducer);

const render = ()=>{
  playerOneScoreSection.innerHTML = store.getState().playerOneScore
  playerTwoScoreSection.innerHTML = store.getState().playerTwoScore
}

render();

store.subscribe(render)
