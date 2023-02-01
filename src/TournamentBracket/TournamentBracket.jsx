import './TournamentBracket.css'

const SingleItem = (props) => {
	return (
		<>
			<li className="tournament-bracket__item">
				<div className="tournament-bracket__match" tabindex="0">
					<table className="tournament-bracket__table">
						<tbody className="tournament-bracket__content">
							{props.children}
						</tbody>
					</table>
				</div>
			</li>
		</>
	);
}
// this is for winnerdata

const WinnerData = () => {
	return (
		<>
			<tr className="tournament-bracket__team tournament-bracket__team--winner ">
				<td className="tournament-bracket__inner">
					<figure className="tournament-bracket__team-thumb">
						<img src="https://user-images.githubusercontent.com/85486891/215550256-64bc1a2c-d844-4eae-bc87-dc465791177e.png" alt=""></img>
					</figure>
					<div className="tournament-bracket__team-info text-truncate">
						<h6 className="tournament-bracket__team-name text-truncate">L.A. Pirates</h6>
						<span className="tournament-bracket__team-desc text-truncate">United States</span>
					</div>
				</td>
				<td className="tournament-bracket__score">
					<span className="tournament-bracket__number">7</span>
				</td>
			</tr>

		</>
	);
}

const TeamData = () => {
	return (
		<>
			<tr className="tournament-bracket__team  ">
				<td className="tournament-bracket__inner">
					<figure className="tournament-bracket__team-thumb">
						<img src="https://user-images.githubusercontent.com/85486891/215550256-64bc1a2c-d844-4eae-bc87-dc465791177e.png" alt=""></img>
					</figure>
					<div className="tournament-bracket__team-info text-truncate">
						<h6 className="tournament-bracket__team-name text-truncate">Icarus Wings</h6>
						<span className="tournament-bracket__team-desc text-truncate">Portugal</span>
					</div>
				</td>
				<td className="tournament-bracket__score">
					<span className="tournament-bracket__number">4</span>
				</td>
			</tr>
		</>
	);
}

const TournamentList = (props) => {
	return (
		<>
			<div className="tournament-bracket__round">
				<h6 className="tournament-bracket__round-title d-block d-lg-none d-xl-none">Quarterfinals</h6>

				<ul className="tournament-bracket__list">
					{props.children}
				</ul>
			</div>
		</>
	);
}

const ChampTeam = () => {
	return (
		<>

			<tr className="tournament-bracket__team  tournament-bracket__team--champ">
				<td className="tournament-bracket__inner">
					<figure className="tournament-bracket__team-thumb">
					</figure>
					<div className="tournament-bracket__team-info text-truncate">
					</div>
				</td>
				<td className="tournament-bracket__score">
					<div className="tournament-bracket__number tournament-bracket__champ-icon">

					</div>
				</td>
			</tr>
		</>
	);
}


const TournamentBracket = () => {
	return (
		<>
			<div className="card card--clean">

				<div className="card__content">
					<div className="tournament-bracket">
						<TournamentList>
							<SingleItem>
								{/* winner data : WinnerDAta*/}
								<WinnerData />

								{/* normal data : TeamData */}

								<TeamData />
							</SingleItem>

							{/* 2 */}
							<SingleItem>
								<TeamData />
								<WinnerData />
							</SingleItem>
							{/* 3 */}
							<SingleItem>
								<TeamData />
								<WinnerData />
							</SingleItem>
							{/* 4 */}
							<SingleItem>
								<WinnerData />
								<TeamData />
							</SingleItem>
						</TournamentList>

						<TournamentList>
							<SingleItem>
								<WinnerData />
								<TeamData />
							</SingleItem>

							<SingleItem>
								<WinnerData />
								<TeamData />
							</SingleItem>
						</TournamentList>

						<TournamentList>
							<SingleItem>
								<TeamData />
								<TeamData />
							</SingleItem>
						</TournamentList>
						<TournamentList>
							<SingleItem>
								<ChampTeam />
							</SingleItem>
						</TournamentList>

					</div>

				</div>
			</div>


		</>
	);
}

export default TournamentBracket;