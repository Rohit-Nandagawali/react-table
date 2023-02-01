import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Leaderboard from './Leaderboard/Leaderboard';
import CardHeader from './CardHeader/CardHeader';
import TournamentBracket from './TournamentBracket/TournamentBracket';




function App() {
  return (
    <div className="App">
      {/* <CardHeader/> */}
      <TournamentBracket/>
    </div>
  );
}

export default App;
