import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QierPlayer from 'qier-player';
import { withStyles, Grid, Container } from '@material-ui/core';


ReactDOM.render(<QierPlayer srcOrigin="https://movietrailers.apple.com/movies/independent/white-riot/white-riot-trailer-1_h480p.mov" />, document.getElementById('root'));
class PlayerPage extends Component {
    componentDidMount() {
        // this.props.getMovie(this.props.match.params.id);

    }
}
export default 
   (withStyles(PlayerPage));