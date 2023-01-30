import './Leaderboard.css'
// data in table
const Datarow = () => {
    return (
        <>
            <tr>
                <td className="team-standings__pos">01</td>
                <td className="team-standings__team">
                    <div className="team-meta">
                        <figure className="team-meta__logo">
                            <img src="https://user-images.githubusercontent.com/85486891/215550256-64bc1a2c-d844-4eae-bc87-dc465791177e.png" alt=""></img>
                        </figure>
                        <div className="team-meta__info">
                            <h6 className="team-meta__name">L.A. Pirates</h6>
                            <span className="team-meta__place">United States</span>
                        </div>
                    </div>
                </td>
                <td className="team-standings__win">24</td>
                <td className="team-standings__lose">6</td>
                <td className="team-standings__kills">620</td>
                <td className="team-standings__deaths">341</td>
                <td className="team-standings__assists">1243</td>
                <td className="team-standings__pentakills">26</td>
                <td className="team-standings__kdar">7.8</td>
                <td className="team-standings__dmg">56.1</td>
                <td className="team-standings__dpm">1536</td>
                <td className="team-standings__gold">42.5</td>
                <td className="team-standings__overall highlight">14-2</td>
                <td className="team-standings__match highlight">28-14</td>
            </tr>

        </>
    );
}


const Leaderboard = () => {
    return (

        <div className="Leaderboard">
            <div className="site-content">
                <div className="container">

                    {/* <!-- Team Standings --> */}
                    <div className="card card--has-table">
                        <div className="card__header">
                            <h4>League of Heroes Standings</h4>
                        </div>
                        <div className="card__content">
                            <div className="table-responsive">
                                <table className="table table-hover table-standings table-standings--full">
                                    <thead>
                                        <tr>
                                            <th className="team-standings__pos">Pos</th>
                                            <th className="team-standings__team">Team</th>
                                            <th className="team-standings__win">Wins</th>
                                            <th className="team-standings__lose">Losses</th>
                                            <th className="team-standings__kills">Kills</th>
                                            <th className="team-standings__deaths">Deaths</th>
                                            <th className="team-standings__assists">Assists</th>
                                            <th className="team-standings__pentakills">Pentakills</th>
                                            <th className="team-standings__kdar">KDA.R</th>
                                            <th className="team-standings__dmg-percent">DMG%</th>
                                            <th className="team-standings__dpm">DPM</th>
                                            <th className="team-standings__gold-percent">Gold%</th>
                                            <th className="team-standings__overall-record">Overall Record</th>
                                            <th className="team-standings__match-record">Match Record</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* table data */}
                                        <Datarow />
                                        <Datarow />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Leaderboard;