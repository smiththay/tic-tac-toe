# Objective
There are 9 spaces(grid):

0|1|2
-----
3|4|5
-----
6|7|8

There are 2 players. One player being 'X' and one player being 'O'. Player 1 will start with 'X' and then player 2 will proceed with 'O'. In order to win the game, a player must place three of their marks in a horizontal, vertical, or diagonal row.

# Variables/Objects
- he grid is a 3X3 grid and each tile is clickable and only clickable once. 
- each tile will be a div and have an id
- div to Display which players turn it is.
- div to display a winner or a draw
- Restart button to reset grid to default state. 
- event listener for when a tile is clicked
- event listener for when restart button is clicked 
- const player 1 = 'x'
- const player 2 = 'o'
- let current player = player 1
- spaces [all null]

# Functions
Function box is clicked 
   - if there is no symbol on tile 
        then the tile symbol will be the current player
        -function to check if player has won
            if player has won, display player has won
        -if current player is 'x' then current player becomes player 'o'
        
Function to check if player has won

divs will be :
    0.1.2
    3.4.5
    6.7.8

if space 0.1.2 || 3.4.5 || 6.7.8 || 0.3.4 || 1.4.7 || 2.5.8 || 0.4.8|| 2.4.8 === players symbols
 return true


<--------------------------------------------------------------------->
MVC Pseudo code



1. what goes in the view
container
    row
        header
    row
        both players 
            show their wins and losses (stretch goal)
            show whose turn it is
            who won / tie (ending win condition first placement)
            a key to the players like a map that shows whos turn it is (rachels idea)
    row for the actual grid
        col (acts as container) - a card as well
            1 row
                9 cols - size 4
            OR
            3 rows
                3 cols - size 4 each row
                tile (synonymous with col)
                    X or O or blank
    row
        restart button
    modal (show the winner or the tie) (ending win condition second placement)
container (jakes verison)
    row
        col
            card
                row
                    header
                row
                    both players
                        show their wins and losses
                        show whose turn it is
                row for the actual grid
                    col (acts as container) - a card as well
                        1 row
                            9 cols - size 4
                        OR
                        3 rows
                            3 cols - size 4 each row
                            tile (synonymous with col)
                                X or O or blank
                row
                    restart button
2. what goes in the model
whos turn it is:
    "x" || "o" as a string (stevens idea)
    count (0, 1, 2... -> n) (jakes idea)
        dual purpose: keep track of game moves
    boolean: true / false x === true, but o is false (Chances idea)
we need to know who won
    count (based on the sum of all the rows, cols, diags)
        // every time you click, you can save the number, or auto increment ++
        // use a controller method that would set the state of this number
    store turns in array
        (0 for no click, 1 for x, -1 for o)
        (0 for no click, 1 for x, 2 for o)
        ("" for no click, "X" for x, "O" for o)
        what the array looks like:
        [[], [], []] - idea 1 (stores 3 each)
        [], [], [] - idea 2 (stores 3 each)
        [0, 1, 2, 3, 4, 5, 6, 7, 8] - idea 3 ( stores 9)
        // optional: create a tile class to keep track of all tiles
        Tile: (class)
            {
                "" || "x" || "o"
                clicked? - can be abstracted
                "who clicked" - can be abstracted
                where it is?  - can be abstracted
                bgColor: "" || "x" || "o" - can be abstracted??? maybe
            }
        [
            Tile, Tile, Tile,
            Tile, Tile, Tile,
            Tile, Tile, Tile,
        ]
        Board: (class)
        {
            is game complete?
            all tiles: array
            how many tiles do i have?  - can be abstracted from length of array
            current state of all my tiles?  - can be abstracted
        }
        [{        // too verbose, but it is an option (for chess)
                tileType:"knight",
                location: [0,2]
            },
            turn2: "0"]
Parent / Child relationships
parent can have many children
children can only have ONE Parent
children can have many siblingss
tiles could have states
    boolean: true / false to dictate the tile clickability
        tile clickability // controller method
            on the finish of the game, lock the tiles
            on any in game click, lock specific tile
3. what goes in the controller
- initialize
    // pseudocode this
    // about the length of a kata
- helper function for dynamic rendering
    // generateElement
- render method
- select x or o (stretch goal)
- tile click event listener
    // (moves>5) ? condition
    - win condition
    // check to see if there is a winner or tie?
    - set tile clickability for one tile
    - switch current player
- win condition
    did we have a winner or tie?
    - set tile clickability for all tiles
    - display the final game state
    - restart click event listener
- restart button
    forfeit / auto win (stretch goal)
- lose button (stretch goal)
- game history (stretch goal)