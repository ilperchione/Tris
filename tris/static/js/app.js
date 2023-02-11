let links = document.querySelectorAll(".gridBtn")
let grid = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
]
currentPlayer = 1,
cellIsOccupied = true

	for(let i = 0; i < links.length; i++){
		let link = links[i]
		link.addEventListener("click", function(e){
			e.preventDefault()
			cellIsOccupied = e.currentTarget.classList.contains("player2") || e.currentTarget.classList.contains("player1")	;			
			console.log(cellIsOccupied)
					
			if(!cellIsOccupied){
				e.currentTarget.classList.toggle(`player${currentPlayer}`)
				currentPlayer = currentPlayer === 1 ? 2 : 1
			}
		})
	}

function checkOrizzontale(currentPlayer){
	if(	grid[0][0] === currentPlayer && 
		grid[0][1] === currentPlayer &&
		grid[0][2] === currentPlayer ){
			return true;
	}

	else if(grid[1][0] === currentPlayer && 
			grid[1][1] === currentPlayer &&
			grid[1][2] === currentPlayer ){
				return true;
	}

	else if(grid[2][0] === currentPlayer && 
			grid[2][1] === currentPlayer &&
			grid[2][2] === currentPlayer ){
				return true;
	}
}

function checkVerticale(currentPlayer){
	if(	grid[0][0] === currentPlayer && 
		grid[1][0] === currentPlayer &&
		grid[2][0] === currentPlayer ){
			return true;
	}

	else if(grid[0][1] === currentPlayer && 
			grid[1][1] === currentPlayer &&
			grid[2][1] === currentPlayer ){
				return true;
	}

	else if(grid[0][2] === currentPlayer && 
			grid[1][2] === currentPlayer &&
			grid[2][2] === currentPlayer ){
				return true;
	}
}

function ceckDiagonale(currentPlayer){
	if(	grid[0][0] === currentPlayer && 
		grid[1][1] === currentPlayer &&
		grid[2][2] === currentPlayer ){
			return true;
	}

	else if(grid[2][1] === currentPlayer && 
			grid[1][1] === currentPlayer &&
			grid[2][0] === currentPlayer ){
				return true;
	}
}
