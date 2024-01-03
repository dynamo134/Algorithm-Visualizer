import React, { useState, useEffect } from 'react';
import Cells from "./cells";
import Navbar from "./navbar";
import DiscreteSlider from "./slider";
import Menu from "./menu";
import { seive } from "../algorithms/prime";
import Spiral from "./spiral";

// Functional component Seive
const Seive = () => {
    // State variables using useState hook
    const [number, setNumber] = useState(100);
    const [cells, setCells] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [speed, setSpeed] = useState(500);
    const [primes, setPrimes] = useState([]);
    const [maxPrime, setMaxPrime] = useState(0);
    const [algo, setAlgo] = useState(0);

    // useEffect hook to initialize cells when the number changes
    useEffect(() => {
        const initialCells = getCells(number);
        setCells(initialCells);
    }, [number]);

    // Function to handle speed change
    const changeSpeed = (newSpeed) => {
        setSpeed(600 - newSpeed * 10);
    };

    // Function to handle value increase
    const handleValueIncrease = (value) => {
        setNumber(value);
        if (algo === 0) {
            setCells(getCells(value));
            setIsRunning(false);
        }
    };

    // Function to handle refresh button click
    const handleRefresh = () => {
        setCells(getCells(number));
        setIsRunning(false);
    };

    // Function to start the selected algorithm
    const startAlgo = () => {
        startSeive();
    };

    // Function to start the Seive algorithm
    const startSeive = async () => {
        const prime = Array(number + 1).fill(1);
        prime[0] = prime[1] = 0;
        let changedCells = cells.slice();
        let prevCheck = -1;
        let counter = 0;
        for (let i = 2; i <= number; i++) {
            if (prime[i] === 1) {
                changedCells = getNewCellPrimeToggled(changedCells, i - 1);
                setCells([...changedCells]);
                await sleep(speed);
                counter++;
                for (let j = i * i; j <= number; j += i) {
                    if (prevCheck !== -1) {
                        changedCells = getNewCellVisitingToggled(changedCells, prevCheck);
                    }
                    prevCheck = j - 1;
                    changedCells = getNewCellCheckToggled(changedCells, j - 1);
                    changedCells = getNewCellVisitingToggled(changedCells, prevCheck);
                    setCells([...changedCells]);
                    await sleep(speed);
                    counter++;
                    prime[j] = 0;
                }
            }
        }
        changedCells = getNewCellVisitingToggled(changedCells, prevCheck);
        setCells([...changedCells]);
        setIsRunning(false);
    };

    // JSX structure for the Seive component
    return (
        <div>
            <Navbar />
            <Menu
                onChangeSpeed={changeSpeed}
                onChangeValues={handleValueIncrease}
                onVisualize={startAlgo}
                onRefresh={handleRefresh}
                isDisabled={isRunning}
                setAlgo={setAlgo}
            />
            {algo === 0 && <Cells num={number} cells={cells} />}
            {algo === 1 && <Spiral num={number} primes={primes} maxPrime={maxPrime} />}
        </div>
    );
};

// Function to toggle the isPrime property in a cell
const getNewCellPrimeToggled = (cells, pos) => {
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
        ...cell,
        isPrime: true
    };
    newCells[pos] = newCell;
    return newCells;
};

// Function to toggle the isVisiting property in a cell
const getNewCellVisitingToggled = (cells, pos) => {
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
        ...cell,
        isVisiting: !cell.isVisiting
    };
    newCells[pos] = newCell;
    return newCells;
};

// Function to toggle the isChecking property in a cell
const getNewCellCheckToggled = (cells, pos) => {
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
        ...cell,
        isChecking: true
    };
    newCells[pos] = newCell;
    return newCells;
};

// Function to create an array of cells
const getCells = (rows) => {
    const cells = [];
    for (let cell = 1; cell <= rows; cell++) {
        cells.push(createCell(cell));
    }
    return cells;
};

// Function to create a cell with initial properties
const createCell = (val) => {
    return {
        val,
        isChecking: false,
        isVisiting: false,
        isPrime: false
    };
};

// Function to introduce delay using Promise
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default Seive;
