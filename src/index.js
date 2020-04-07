import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


const Square = ({value, cliked}) => {

    return (
        <button className="square" onClick={cliked}>
            {value}
        </button>
    );
}

const Board = () => {
    const [ squares , setSquares ] = useState(Array(9).fill(null))
    const [isXNext, setXNext] = useState(true)

    const renderSquare = (i) => {

        return <Square
                    value={squares[i]}
                    cliked={() => {

                        const nextSquares = squares.slice()
                        nextSquares[i] = isXNext ? 'x' : 'o'
                        setXNext(!isXNext)
                        setSquares(nextSquares)
                    }
                }
        />
    }

        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        );
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

