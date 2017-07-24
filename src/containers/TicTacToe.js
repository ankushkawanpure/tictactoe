/**
 * Created by Ankush on 5/13/17.
 */
import React from 'react';
import {Stage} from 'react-konva';
import {Board, Squares} from '../styled/TicTacToe';
import ticAiUtil from './ticAiUtil';

class TicTacToe extends React.Component {

    constructor(props) {
        super(props);
        //generate combos dynamically to check for the win
        this.combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.ticAiUtil = new ticAiUtil();
    }

    state = {
        rows: 3,
        gameState: new Array(9).fill(false),
        ownMark: 'X',
        otherMark: 'O',
        gameOver: false,
        yourTurn: true,
        winner: false

    };

    componentWillMount() {
        let height = window.innerHeight;
        let width = window.innerWidth;
        let size = (height < width) ? height * 0.8 : width * 0.8;
        let rows = this.state.rows;
        let unit = size /rows;

        let coordinates = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < rows; x++) {
                coordinates.push([x * unit, y * unit]);
            }
        }

        this.setState({
            size,
            rows,
            unit,
            coordinates
        });

    }

    move = (index, marker) => {
        this.setState((prevState, prop) => {
            let {gameState, yourTurn, gameOver, winner} = prevState;
            //change the turn
            yourTurn = !yourTurn;

            gameState.splice(index, 1, marker);
            let foundWin  = this.winChecker(gameState);

            if(foundWin) {
                winner = gameState[foundWin[0]];
            }

            if(foundWin || !gameState.includes(false)) {
                gameOver = true;
            }

            if(!yourTurn && !gameOver) {
                this.makeAiMove(gameState);
            }
            return {
                gameState,
                yourTurn,
                gameOver,
                win: foundWin || false,
                winner
            }

        })
    };

    makeAiMove = (gameState) => {
        let otherMark = this.state.otherMark;

        // let openSquares = [];
        // gameState.forEach((square, index) => {
        //     if(!square) {
        //         openSquares.push(index);
        //     }
        // })
        // console.log(gameState);
        // let aiMove = openSquares[this.random(0,openSquares.length)];
        //     setTimeout(() => {
        //     this.move(aiMove, otherMark);
        // }, 1000);
        console.log('initial state', gameState);
        gameState = this.ticAiUtil.denormalizeBoard(gameState);
        console.log('normalize state', gameState);
        let aiMove = this.ticAiUtil.computer_move(gameState);
        gameState = this.ticAiUtil.normalizeBoard(gameState);
        console.log('Ai move', aiMove);
        // console.log('Ai move 2', aiMove2);

        // this.move(aiMove, otherMark);
        setTimeout(() => {
            this.move(aiMove, otherMark);
        }, 1000)
    };

    random = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max- min)) + min
    };

    winChecker = (gameState) => {
        let combos = this.combos;
        return combos.find( (combo) => {
            let [a, b, c] = combo;
            return (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a])
        })
    };

    render() {
        let {size,
            unit,
            rows,
            coordinates,
            gameState,
            win,
            gameOver,
            yourTurn,
            ownMark
        } = this.state;
        return (
            <div>
                <Stage width={size} height={size}>
                    <Board
                        unit={unit}
                        size={size}
                        rows={rows}
                    />
                    <Squares
                        unit={unit}
                        coordinates={coordinates}
                        gameState={gameState}
                        win={win}
                        gameOver={gameOver}
                        yourTurn={yourTurn}
                        ownMark={ownMark}
                        move={this.move}
                    />
                </Stage>
            </div>
        )
    }
}


export default TicTacToe;
