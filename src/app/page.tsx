import Button from "@/components/Button";
import Image from "next/image";
import screenshot from "@/assets/screenshot.png";
import { getUserFromServer } from "@/lib/utils";

const Page = async ({ params }: { params: { slug: string } }) => {
  const user = await getUserFromServer();

  return (
    <div className="w-screen px-8 py-12 flex flex-col items-center gap-8">
      <div className="md:text-7xl text-6xl text-center">
        <h1>
          Crafted by AI,
          <br />
          Perfected by Paper Pilot.
        </h1>
      </div>
      <p className="text-grey text-center text-lg w-2/3">
        Your pathway to polished, undetectable essays. From AIs creation to our
        mastery, achieve academic brilliance that outshines AI detection
        algorithms.
      </p>
      <div className="flex gap-4">
        {/*{user?.waitlisted === true || !user ? (
          <Button
            text="Join the waitlist"
            size="large"
            color="black"
            href="/waitlist"
          />
        ) : (
          <Button
            text="Use platform"
            size="large"
            color="black"
            href="/platform"
          />
        )}
        <Button text="Discover" size="large" />*/}
      </div>
      <div className="w-5/6 rounded-lg p-1 md:block hidden">
        <Image src={screenshot} alt="" className="w-full " />
      </div>
    </div>
  );
};

export default Page;
