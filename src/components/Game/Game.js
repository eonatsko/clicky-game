import React, { Component } from "react";
import tiles from "../../tiles.json";
import "./Game.css";
import Tile from "../Tile";
import Header from "../Header";


class Game extends Component {

    state = {
        characters: tiles,
        score: 0,
        topScore: 0,
        clickedId: [],
        message: "Click on a tile!"
    }

    updateScore = (id) => {
        this.emptyArr(id)
            this.setState({
                clickedId: [...this.state.clickedId, id],
            })
            this.mainLogic(id)

    }
    mainLogic=(id)=>{
        for (var i = 0; i <= this.state.clickedId.length - 1; i++) {
            if (id === this.state.clickedId[i]) {
                this.setState({
                message: "Oh No! You chose the same character twice!"
                })
                if (this.state.score > this.state.topScore) {
                    this.setState({
                        topScore: this.state.score,
                    });
                }
                return this.setState({
                    clickedId: [],
                    score: 0,

                });
            }
            else {
                const newScore = this.state.score + 1
                this.setState({
                    score: newScore
                })
            }
        
    }
    }
    emptyArr=(id) =>{
        if (this.state.clickedId.length === 0) {
            this.setState({
                score: this.state.score + 1,
                clickedId: [...this.state.clickedId, id],
                message: "Click on a tile!"

            });
        }
    }
    
    shuffleTiles = (tiles) => {
        tiles = this.state.characters
        var j, x, i;
        for (i = tiles.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = tiles[i];
            tiles[i] = tiles[j];
            tiles[j] = x;
        }
        return this.setState({
            characters: tiles
        });
    }


    render() {
        return (
            <div className="main">
                <Header
                    topScore={this.state.topScore}
                    score={this.state.score}
                    message={this.state.message}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <div className="row ">
                                {this.state.characters.map(character => (
                                    <Tile
                                        key={character.id}
                                        id={character.id}
                                        image={character.image}
                                        updateScore={this.updateScore}
                                        shuffleTiles={this.shuffleTiles}

                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;