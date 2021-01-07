import React from "react";

class LifecycleComponent extends React.Component {

    constructor(props) {
        super(props);
        // props.text = //tai kas atėjo iš kito state
    }

    componentDidMount(){
        console.log("Mounted... <- data is being loaded")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {text} = this.props;
        if (prevProps.text !== text) {
            console.log("Component is being updated!");
        }
    }

    componentWillUnmount(){
        console.log("Unmounting...")
    }

    render() {
        console.log("Rendering...");
        const {text} = this.props;
        return(
            <div>Viskas ok! Gautas tekstas: {text}</div>
        );
    }
}

export default LifecycleComponent;