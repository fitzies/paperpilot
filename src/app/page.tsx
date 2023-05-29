import Dropdown from "@/components/Dropdown";
import RephraseSection from "@/components/RephraseSection";
import gpt from "@/gpt";

const Page = async () => {
  return (
    <div className="w-screen h-[83vh] pt-8">
      <div className="w-11/12 h-full bg-base-200 rounded-3xl m-auto flex p-2">
        <form
          className="w-1/2 h-full p-4 flex flex-col gap-4 border-r-2 border-base-300"
          action={gpt}
        >
          <textarea
            className="textarea textarea-ghost w-full h-[90%] resize-none"
            name="text"
          ></textarea>
          <div className="w-1/2 h-[10%] ml-auto flex justify-end items-center px-4 gap-4">
            <Dropdown />
            <button className="btn w-1/2 text-md" type="submit">
              Rephrase
            </button>
          </div>
        </form>
        {/* @ts-expect-error */}
        <RephraseSection />
      </div>
    </div>
  );
};

export default Page;
