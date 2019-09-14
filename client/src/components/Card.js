import React, {Component }  from 'react';
import Cardinfo from './Cardinfo';
import axios from 'axios';


 class Card extends Component {

    _isMounted = false;
    
    constructor(props) {
        super(props);
        
        this.state = { data: [], soccerPlayer: [] }
    
    }
    componentDidMount() {
        this._isMounted = true;
        axios
        .get('http://localhost:5000/api/players')
        .then(data => {
        if (this._isMounted) {
        this.setState({
        data: data.data})
 
}
})
}

componentWillUnmount() {
    
    this._isMounted = false;
  }

         render() {
            return(
                
                <div className="theCards" >
                   
                   <Cardinfo data={this.state.data}/>
                
                </div>
            )
    }
}
    export default Card; 