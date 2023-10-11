import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";


export default function LearningComponent(){
  return (
    <div className="App">
     Hello World
     <FirstComponent></FirstComponent>
     <SecondComponent></SecondComponent>
     <ThirdComponent></ThirdComponent>
    </div>
  );
}