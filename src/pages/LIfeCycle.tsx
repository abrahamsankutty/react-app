
import { Component } from 'react';



class LifeCycleComponent extends Component {

    constructor(props:any){
        super(props);
        this.state = {
            data: 'My name is Abraham'
        }
        this.handleEvent = this.handleEvent.bind(this);
        
    }
    handleEvent() {
        console.log(this.state);
    }

       render() {
            return(
                <div>
                    <div >
                        <input type="text" value={this.state.data} />
                        <br></br> <br></br>
                        <button onClick={this.handleEvent}>Please Click</button>
                    </div>
                </div>
            );
       } 
}
export default LifeCycleComponent;