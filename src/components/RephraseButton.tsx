import { getServerUser } from "@/lib/actions";
import { kv } from "@vercel/kv";

const RephraseButton = async () => {
  const user = await getServerUser();

  if (!user) {
    return (
      <label className="btn lg:w-1/4 text-md" htmlFor="require-login">
        Rephrase
      </label>
    );
  }

  // if (loading === "1") {
  //   <label
  //     className="btn lg:w-1/4 text-md loading"
  //     htmlFor="require-login"
  //   ></label>;
  // }

  return (
    <button className="btn lg:w-1/4 text-md" type="submit">
      <span>Rephrase</span>
    </button>
  );
};

export default RephraseButton;
