import Button from "@/components/Button";
import Image from "next/image";
import screenshot from "@/assets/screenshot.png";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-screen px-8 py-12 flex flex-col items-center gap-8">
      <div className="text-7xl text-center">
        <h1>
          Crafted by AI,
          <br />
          Perfected by Paper Pilot
        </h1>
      </div>
      <p className="text-grey text-center text-lg w-2/3">
        Your pathway to polished, undetectable essays. From AI's creation to our
        mastery, achieve academic brilliance that outshines AI detection
        algorithms.
      </p>
      <div className="flex gap-4">
        <Button text="Join the waitlist" size="large" color="black" />
        <Button text="Discover" size="large" />
      </div>
      <div className="w-5/6 rounded-lg p-1">
        <Image src={screenshot} alt="" className="w-full " />
      </div>
    </div>
  );
};

export default Page;
