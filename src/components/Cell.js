import React, { Component } from 'react'
import "../styles/Cell.css"


/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

export default function Cell(props) {
	let classes = "Cell" + (props.isLit ? " Cell-lit" : "");
	
	function handleClick(evt) {
		// call up to the board to flip cells around this cell
		props.flipCells();
	}

	return (
		<td className={classes}>
			<button type="button" onClick={handleClick}></button>
		</td>
	)
}