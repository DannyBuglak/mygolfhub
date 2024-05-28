import React, { useState } from 'react';

import '../styles/Scorecards.css'

function Scorecards() {
    const rows = ['Par', 'Distance', 'HCP', 'Score', 'FIR', 'GIR', 'Putts', 'OB', 'Drops', 'Mulligans'];
    const columns = [
        '',
        ...Array.from({ length: 9 }, (_, i) => `Hole ${i + 1}`),
        'Front 9',
        ...Array.from({ length: 9 }, (_, i) => `Hole ${i + 10}`),
        'Back 9',
        'Total',
    ];

    const [scores, setScores] = useState(
        Array.from({ length: rows.length }, () => Array(columns.length).fill(''))
    );

    const handleChange = (rowIndex, colIndex, value) => {
        const updatedScores = scores.map((row, i) =>
            row.map((cell, j) => (i === rowIndex && j === colIndex ? value : cell))
        );
        setScores(updatedScores);
    };

    return (
        
        <div className="scorecard-container">
            <div className="scorecard-intro">
                <h2>Enter, save, and view your scorecards here!</h2>
                <p>Make sure to save your scorecard when you are finished entering the data.</p>
            </div>
            {/* TODO: ADD HEADER HERE, HIDE BY DEFAULT, ABILITY TO ADD SCORECARD AND SCORECARD NAME */}
            <table className="scorecard-table">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th className="col-title" key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((rowTitle, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="row-title">{rowTitle}</td>
                            {columns.slice(1).map((_, colIndex) => (
                                <td key={`${rowIndex}-${colIndex}`}>
                                    <input
                                        type="text"
                                        value={scores[rowIndex][colIndex + 1]}
                                        onChange={(e) => handleChange(rowIndex, colIndex + 1, e.target.value)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default Scorecards;