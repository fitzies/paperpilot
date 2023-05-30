"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

type props = {};

const RephraseButton = (props: props) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(() => true);
    setTimeout(() => {
      setLoading(() => false);
    }, 5000);
    // submit();
  };

  if (session && session.user) {
    return (
      <>
        {!loading ? (
          <button className="btn lg:w-1/4 text-md" type="submit">
            <span>Rephrase</span>
          </button>
        ) : (
          // </div>
          <div className="btn loading lg:w-1/4 text-md"></div>
        )}
      </>
    );
  } else {
    return (
      <label className="btn lg:w-1/4 text-md" htmlFor="require-login">
        Rephrase
      </label>
    );
  }
};

export default RephraseButton;
