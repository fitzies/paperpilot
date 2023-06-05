import { useSession } from "next-auth/react";

const RephraseButton = (props: { loading: boolean }) => {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return (
      <label className="btn lg:w-1/4 text-md" htmlFor="require-login">
        Rephrase
      </label>
    );
  }

  return (
    <button className="btn lg:w-1/4 text-md" type="submit">
      {!props.loading ? <span>Rephrase</span> : <span>...</span>}
    </button>
  );
};

export default RephraseButton;
