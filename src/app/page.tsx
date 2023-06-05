import Form from "@/components/Form";
import Modal from "@/components/Modal";
import RephraseSection from "@/components/RephraseSection";

const Page = async () => {
  return (
    <div className="w-screen h-[83vh] pt-8">
      <Modal
        htmlFor="require-login"
        title="Please login to continue"
        text="To access the features and functionality of Paper Pilot, you are required to either log in or sign up."
      />
      <div className="w-11/12 h-full bg-base-200 rounded-3xl m-auto flex p-2">
        <Form />

        {/* @ts-expect-error */}
        <RephraseSection />
      </div>
    </div>
  );
};

export default Page;
