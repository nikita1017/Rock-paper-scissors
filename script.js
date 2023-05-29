const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vibors: ["rock", "paper", "scissors", "match", "hammer"],
      viborClass: "vibor",
      schetchik: 3,
      playerScore: 0,
      botScore: 0,
      schetchikClass: "schetchik",
      gradientClass: "gradient",
      handsClass: "hands",
      score: "score",
      playerHand: "",
      botHand: "rock",
    }
  }

  start(vibor) {
    this.setState(function (state) {
      return {
        handsClass: "hands",
        score: "score",
        gradientClass: "gradient",
        schetchik: 3,
        viborClass: "vibor viborBlocked",
        schetchikClass: "schetchik schetchikVisible",

      }
    })
    let schetchikInterval = setInterval(() => {
      this.setState(function (state) {
        let handsClass = state.handsClass;
        let gradientClass = state.gradientClass;
        let score = state.score;
        let playerScore = state.playerScore;
        let botScore = state.botScore;
        let botHand = state.botHand;
        let schetchikClass = state.schetchikClass;
        let playerHand = state.playerHand;
        let winner = "";
        

        if (state.schetchik == 1) {
          botHand = state.vibors[Math.floor(Math.random() * this.state.vibors.length)];
          handsClass = "hands handsActive"
          gradientClass = "gradient gradientActive"
          score = "score scoreActive"
          schetchikClass = "schetchik"
          console.log(playerHand, botHand, playerHand == "scissors" && botHand == "rock");
          if (playerHand == "rock" && botHand == "paper") {
            winner = "bot"
          }
          else if (playerHand == "rock" && botHand == "scissors") {
            winner = "player"
          }
          else if (playerHand == "rock" && botHand == "hammer") {
            winner = "bot"
          }
          else if (playerHand == "rock" && botHand == "match") {
            winner = "player"
          }
          else if (playerHand == "paper" && botHand == "rock") {
            winner = "player"
          }
          else if (playerHand == "paper" && botHand == "scissors") {
            winner = "bot"
          }
          else if (playerHand == "paper" && botHand == "hammer") {
            winner = "player"
          }
          else if (playerHand == "paper" && botHand == "match") {
            winner = "bot"
          }
          else if (playerHand == "scissors" && botHand == "paper") {
            winner = "player"
          }
          else if (playerHand == "scissors" && botHand == "rock") {
            winner = "bot"
          }
          else if (playerHand == "scissors" && botHand == "hammer") {
            winner = "bot"
          }
          else if (playerHand == "scissors" && botHand == "match") {
            winner = "player"
          }
          else if (playerHand == "match" && botHand == "scissors") {
            winner = "bot"
          }
          else if (playerHand == "match" && botHand == "rock") {
            winner = "bot"
          }
          else if (playerHand == "match" && botHand == "paper") {
            winner = "player"
          }
          else if (playerHand == "match" && botHand == "hammer") {
            winner = "player"
          }
          else if (playerHand == "hammer" && botHand == "scissors") {
            winner = "player"
          }
          else if (playerHand == "hammer" && botHand == "rock") {
            winner = "player"
          }
          else if (playerHand == "hammer" && botHand == "paper") {
            winner = "bot"
          }
          else if (playerHand == "hammer" && botHand == "match") {
            winner = "bot"
          }
          else {
            winner = "draw"
            gradientClass = "gradient gradientActive gradientDraw"
          }
          if (winner == "bot") {
            gradientClass = "gradient gradientActive gradientBot"
            botScore++;
          }
          else if (winner == "player") {
            gradientClass = "gradient gradientActive gradientPlayer"
            playerScore++;
          }
        }

        else if (state.schetchik == 0) {
          clearInterval(schetchikInterval)
        }
        if(state.playerScore == 5 || state.botScore == 5) {playerScore = 0;botScore = 0;}
           
        return {
          score: score,
          // Отнимает по одному когда вбрал что то из кружочков
          schetchik: state.schetchik - 1,
          handsClass: handsClass,
          playerHand: vibor,
          schetchikClass: schetchikClass,
          gradientClass: gradientClass,
          viborClass: "vibor",
          botHand: botHand,
          playerScore: playerScore,
          botScore: botScore,
        }

      })
    }, 1000)
  }

  render() {
    return (
      <form>
        <h2 id="header">ROCK PAPER SCISSORS!</h2>
        <div className={this.state.gradientClass}>

        </div>
        <div className={this.state.handsClass}>
          <img src={this.state.playerHand + ".png"} alt="" width="30%" />
          <img src={this.state.botHand + ".png"} alt="" width="30%" />
        </div>
        <h1 className={this.state.schetchikClass}>{this.state.schetchik}</h1>
        <h3 className={this.state.score}>{this.state.playerScore}</h3>
        <h3 className={this.state.score}>{this.state.botScore}</h3>
        <br />
        <div className="vibor-ruk">
          {
            this.state.vibors.map((vibor) => (
              <img className={this.state.viborClass + (vibor == this.state.playerHand ? " viborSelected" : "")} src={vibor + ".png"} alt="" onClick={() => this.start(vibor)} />
            ))
          }
        </div>
      </form>
    )
  }
}
root.render(<App />);