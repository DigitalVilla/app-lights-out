import React, { Component } from "react";
import Header from "./Header";
import Cell from "./Cell";
import '../styles/Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - litChance: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
	static defaultProps = {
		nrows: 5,
		ncols: 5,
		litChance: 0.25
	};

	constructor(props) {
		super(props);
		this.state = {
			hasWon: false,
			board: this.createBoard()
		}
	}

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */

	createBoard() {
		let board = [];
		for (let i = 0; i < this.props.nrows; i++) {
			let row = []
			for (let j = 0; j < this.props.ncols; j++) {
				row.push(Math.random() <= this.props.litChance ? 1 : 0)
			}
			board.push(row)
		}
		return board
	}

	/** handle changing a cell: update board & determine if winner */

	flipCells(x, y) {
		let { ncols, nrows } = this.props;
		let board = this.state.board;

		function flipCell(x, y) {
			// if this coord is actually on board, flip it
			if (x >= 0 && x < nrows && y >= 0 && y < ncols) {
				board[x][y] = board[x][y] ? 0 : 1;
			}
		}

		// Flip this cell and the cells around it
		flipCell(x, y)
		flipCell(x, y + 1)
		flipCell(x, y - 1)
		flipCell(x + 1, y)
		flipCell(x - 1, y)

		// Return if the game is not over
		for (let i = 0; i < nrows; i++) {
			for (let j = 0; j < ncols; j++) {
				if (board[i][j]) { // If there is a single light on return
					return this.setState({ board, hasWon: false });
				}
			}
		}

		// All light are off
		this.setState({ board, hasWon: true });
	}


	/** Render game board or winning message. */

	render() {

		// if the game is won, just show a winning msg & render nothing else

		// TODO

		// make table board

		// TODO
		return this.state.hasWon ? (<Header className="winner" title="YOU" subtitle="WIN!" />) : (
			<>
				<Header className="Board-title" title="lights" subtitle="Out" />
				<table className="Board">
					<tbody>
						{ this.state.board.map((row, x) =>
							<tr key={x}>
								{ row.map((col, y) =>
									<Cell
										key={x + '-' + y}
										isLit={col}
										flipCells={() => this.flipCells(x, y)}
									/>
								)}
							</tr>
						)}
					</tbody>
				</table>
			</>
		)
	}
}


export default Board;
