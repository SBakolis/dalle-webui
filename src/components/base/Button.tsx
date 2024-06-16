interface props {
  text: string;
  loading?: boolean;
}

export default function Button({ text, loading }: props) {
  return (
    <>
      <button className="btn btn-md btn-primary">
        {loading && <span className="loading loading-spinner loading-sm"></span>}
        {text}
      </button>
    </>
  );
}
