import MyAwesomeComponent from "./components/MyAwesomeComponent";
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";
import UncontrolledComponent from "./components/UncontrolledComponent";
import UncontrolledComponentWithHooks from "./components/UncontrolledComponentWithHooks";
import ControlledComponent from "./components/ControlledComponent";
import ControlledComponentWithHooks from "./components/ControlledComponentWithHooks";
import LifecycleComponent from "./components/LifecycleComponent";
import LifecycleComponentWithHooks from "./components/LifecycleComponentWithHooks";
import Uncontrolled from "./components/excercise/Uncontrolled"
import Controlled from "./components/excercise/Controlled";
import Effect from "./components/excercise/Effect";
import LoginForm from "./components/excercise/LoginForm";
import ProductForm from "./components/ProductForm";
import ProductFromWithFormik from "./components/ProductFromWithFormik";

function App() {
    return (
        <div className="App">
            {/*<MyAwesomeComponent />*/}
            {/*<Counter*/}
            {/*text = "tekstas"*/}
            {/*/>*/}
            {/*<HelloWorld />*/}
            {/*<LifecycleComponent/>*/}
            {/*<Controlled/>*/}
            {/*<Uncontrolled/>*/}
            {/*<Effect/>*/}
            {/*<LoginForm/>*/}
            <hr/>
            <ProductForm/>
            <hr/>
            <ProductFromWithFormik/>
        </div>
    );
}

export default App;
