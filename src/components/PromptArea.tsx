interface props {
  label?: string;
  placeholder?: string;
}

export default function PromptArea({ label, placeholder }: props) {
  return (
    <>
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <textarea className="textarea textarea-bordered h-24 w-[300px]" placeholder={placeholder}></textarea>
      </label>
    </>
  );
}
