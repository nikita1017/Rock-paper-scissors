const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vibors: ["rock", "paper", "scissors"],
      viborClass: "vibor",
      schetchik: 3,
      schetchikClass: "schetchik",
      handsClass: "hands",
      score: "score",
      playerHand: "rock",
    }
  }
  
start(vibor){
  console.log("Рука!!!!" +vibor)
  this.setState({
    viborClass: "vibor viborBlocked",
    schetchikClass: "schetchik schetchikVisible"
  })
  let schetchikInterval=setInterval(()=>{
    this.setState(function(state){
      let handsClass=state.handsClass;
      let score=state.score;
      if(state.schetchik==1){
        handsClass="hands handsActive"
        score="score scoreActive"
      }
      else if(state.schetchik==0){
        clearInterval(schetchikInterval)
      }
      return{
        // Отнимает по одному когда вбрал что то из кружочков
        schetchik: state.schetchik-1,
        handsClass: handsClass,
        score: score,
        playerHand: vibor,
      }
      
    })
  },1000)
}

  render() {
    return(
        <form>
            <h2 id="header">ROCK PAPER SCISSORS!</h2>
            <div className="gradient">
                
            </div>
            <div className={this.state.handsClass}>
                <img src={this.state.playerHand+".svg"} alt="" width="30%"/>
                <img src="scissors.svg" alt="" width="30%"/>
            </div>
            <h1 className={this.state.schetchikClass}>{this.state.schetchik}</h1>
            <h3 className={this.state.score}>0</h3>
            <h3 className={this.state.score}>0</h3>
            <br/>
            <div className="vibor-ruk">
              {
                this.state.vibors.map((vibor)=>(
                  <img className={this.state.viborClass} src={vibor+".svg"} alt="" onClick={() => this.start(vibor)}/>
                ))
              }
            </div>
        </form>
    )
  }
}
root.render(<App />);