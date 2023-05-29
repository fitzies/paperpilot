"use client";

const RephraseSection = (props: { text: string }) => {
  const { text } = props;

  return <div className="p-4">{text}</div>;
};

export default RephraseSection;
