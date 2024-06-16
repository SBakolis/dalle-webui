import GenerateImage from "./GenerateImage";
import PromptArea from "./PromptArea";

export default function PromptConfig() {
  return (
    <>
      <div className="bg-neutral p-4 m-2 rounded-lg">
        <PromptArea label="Prompt:" placeholder="Enter your prompt here..." />
        <GenerateImage />
      </div>
    </>
  );
}
