import { getServerUser } from "@/lib/actions";
import { useSession } from "next-auth/react";

const RephraseButton = () => {
  const user = getServerUser();

  if (!user) {
    return (
      <label className="btn lg:w-1/4 text-md" htmlFor="require-login">
        Rephrase
      </label>
    );
  }

  return (
    <button className="btn lg:w-1/4 text-md" type="submit">
      <span>Rephrase</span>
    </button>
  );
};

export default RephraseButton;
