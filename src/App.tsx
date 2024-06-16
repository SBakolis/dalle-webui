import "./App.css";
import PromptConfig from "./components/PromptConfig";

function App() {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <PromptConfig />
        <div className="bg-default p-4"></div>
      </div>
    </>
  );
}

export default App;
