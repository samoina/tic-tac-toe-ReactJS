import GameSquare from './components/GameSquare';
import { useState } from 'react';

function App() {
	const [playerTurn, setPlayerTurn] = useState(true);

	const [headerMsg, setHeaderMsg] = useState(
		'Click on any square to start the game'
	);
	const [count, setCount] = useState(0);
	const [playerXArr, setPlayerXArr] = useState([]);
	const [playerOArr, setPlayerOArr] = useState([]);
	let gameSquareArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	const listWinningCombi = [
		//rows
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		//cols
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		//diagonals
		[0, 4, 8],
		[2, 4, 6],
	];

	//function to check or a win or draw
	const checkScore = () => {
		console.log(playerXArr);
		for (let i = 0; i < listWinningCombi.length; i++) {
			let singleWinningCombi = listWinningCombi[i];

			if (
				singleWinningCombi.every((winIndex) => playerXArr.includes(winIndex))
			) {
				setHeaderMsg('Game Over - Player X wins the game!');
				return;
			}

			if (
				singleWinningCombi.every((winIndex) => playerOArr.includes(winIndex))
			) {
				setHeaderMsg('Game Over - Player O wins the game!');
				return;
			}

			//ends in a draw
			if (count === 9) {
				setHeaderMsg('Game Over - XOXO!! The game ends in a draw');
			}
		}
	};

	//once a game square is clicked, check if it is empty and the current state of the player turn. if its true, X plays. Set the header message, get the number of the game square, push it into the respective player's array to check the wins against, update the counter and check the score. this repeats for each and every click
	const handleClick = (ev) => {
		let gameSquare = ev.target,
			playerPosition;
		if (gameSquare.textContent === '' && playerTurn === true) {
			gameSquare.textContent = 'X';
			setHeaderMsg("It is now Player O's turn");

			playerPosition = ev.target.classList[0];
			setPlayerXArr([...playerXArr, playerPosition]);

			setCount((prev) => prev + 1);
			setPlayerTurn(false);
			checkScore();
		} else if (gameSquare.textContent === '' && playerTurn === false) {
			gameSquare.textContent = 'O';
			setHeaderMsg("It is now Player X's turn");

			playerPosition = ev.target.classList[0];
			setPlayerOArr([...playerOArr, playerPosition]);

			setCount((prev) => prev + 1);
			setPlayerTurn(true);
			checkScore();
		} else if (
			gameSquare.textContent === 'X' ||
			gameSquare.textContent === 'O'
		) {
			return;
		}
	};

	return (
		<div className="flex justify-center">
			<main>
				<h1 className="text-4xl">Tic Tac Toe</h1>
				<h3 className="mb-3 display-player">{headerMsg}</h3>

				<section className="w-80">
					<div className="game-board h-full flex flex-wrap">
						{gameSquareArr.map((num) => (
							<GameSquare classNum={num} key={num} selectSquare={handleClick} />
						))}
					</div>

					<button className="p-2 rounded-md bg-green-500 hover:bg-white text-white hover:text-green-700 hover:border-2 hover:border-green-900">
						Reset the Game
					</button>
				</section>
			</main>
		</div>
	);
}

export default App;
