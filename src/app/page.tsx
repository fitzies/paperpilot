import Modal from "@/components/Modal";
import RephraseSection from "@/components/RephraseSection";
import Selection from "@/components/Selection";
import gpt from "@/lib/gpt";

const Page = async () => {
  return (
    <div className="w-screen h-[83vh] pt-8">
      <Modal
        htmlFor="require-login"
        title="Please login to continue"
        text="To access the features and functionality of Paper Pilot, you are required to either log in or sign up."
      />
      <div className="w-11/12 h-full bg-base-200 rounded-3xl m-auto flex p-2">
        <form
          className="w-1/2 h-full p-4 flex flex-col gap-4 border-r-2 border-base-300"
          action={gpt}
        >
          <textarea
            className="textarea textarea-ghost w-full lg:h-[90%] h-[80%] resize-none lg:text-md text-sm"
            name="text"
          ></textarea>
          <Selection />
        </form>
        {/* @ts-expect-error */}
        <RephraseSection />
      </div>
    </div>
  );
};

export default Page;
