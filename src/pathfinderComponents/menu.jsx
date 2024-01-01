import React from 'react';
import SimpleSelect from './simpleSelect';

const Menu = (props) => {
    return (
        <nav className="nav alert-dark">
            <SimpleSelect
                onAlgoChanged={props.onAlgoChanged}
                items={props.algorithms}
            />
            <SimpleSelect
                onAlgoChanged={props.onMazeChanged}
                items={props.mazes}
            />
            <button
                className='btn btn-lg btn-info m-2'
                onClick={props.onCreateMaze}>
                Create Maze
            </button>
            <button
                onClick={props.onVisualize}
                className="btn btn-success btn-lg m-2"
            >
                Visualize
            </button>
            <button
                onClick={props.onClearPath}
                className='btn btn-primary btn-lg m-2'>
                Clear Path
            </button>
            <button
                onClick={props.onClearBoard}
                className='btn btn-primary btn-lg m-2'>
                Clear Board
            </button>
        </nav>
    );
};

export default Menu;
