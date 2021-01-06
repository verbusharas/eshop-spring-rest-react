import React from "react";
import LifecycleComponent from "./LifecycleComponent";
import LifecycleComponentHooks  from "./LifecycleComponentWithHooks";

class ControlledComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Pirminis",
            isVisible: false,
        }

        this.nameInput = React.createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        console.log(e.target.value);

        this.setState({
            name: e.target.value,
            isVisible: true,
        })
    }

    render() {
        const {name, isVisible} = this.state;
        return (
            <form>
                <label>Kontroliuojamas laukelis</label>
                <br/>
                Rodome: {name}
                <br/>
                <input name="name" type="text" autoComplete={"off"} onChange={this.handleInputChange}/>
                {/*{isVisible && <LifecycleComponent text={name}/>}*/}
                {isVisible && <LifecycleComponentHooks text = {name}/>}
                <br/>
                <button type="button" onClick={this.hideComponent}>Paslėpti</button>
            </form>
        );
    }

}

export default ControlledComponent;