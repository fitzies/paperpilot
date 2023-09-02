import Button from "@/components/Button";
import LineInput from "@/components/LineInput";
import { getUserFromServer } from "@/lib/utils";

const Page = async ({ params }: { params: { slug: string } }) => {
  const user = await getUserFromServer();

  return (
    <div className="w-screen px-8 py-10 flex flex-col items-center gap-3">
      <p className="text-grey">Elevate your academic writing with us.</p>
      <h1 className="text-center md:text-7xl text-4xl font-bold">
        Join the waitlist for
        <br /> Paperpilot V2.
      </h1>
      <div className="md:w-[40%] w-full flex flex-col items-center gap-4 my-6">
        <LineInput
          name="Email"
          placeholder="johndoe@gmail.com"
          text="Email"
          type="password"
        />
        <LineInput
          name="Email"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          text="Password"
          type="email"
        />
        {!user ? (
          <Button text="Submit" className="w-2/3" href="/auth/signup" />
        ) : (
          <Button
            text="You're already on the waitlist"
            borderless
            className="w-2/3"
          />
        )}
      </div>
      <p className="text-grey text-center text-sm my-8">
        To access our platform, please complete email verification
      </p>
    </div>
  );
};

export default Page;
