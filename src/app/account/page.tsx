import Button from "@/components/Button";
import Divider from "@/components/Divider";
import LogoutButton from "@/components/LogoutButton";
import ResendVerificationEmailButton from "@/components/ResendVerificationEmailButton";
import { getUserFromServer } from "@/lib/utils";

const AccountBox = (props: { title: string; text: JSX.Element | string }) => {
  return (
    <div className="w-full bg-red-400 rounded-lg shadow border text-white px-4 py-3">
      <h1 className="font-bold">{props.title}</h1>
      <p className="text-md">{props.text}</p>
    </div>
  );
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const user = await getUserFromServer();

  if (!user) {
    return <></>;
  }

  return (
    <div className="w-2/3 mx-auto text-lg">
      {/* {JSON.stringify(user)} */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Account</h1>
        <LogoutButton />
      </div>
      <Divider size="full" />
      {!user.verified ? (
        <AccountBox
          title="You have not verified your email yet"
          text={
            <>
              Please check your inbox for a verification email, or{" "}
              <ResendVerificationEmailButton email={user.email} /> to send
              another.
            </>
          }
        />
      ) : null}
      <h1 className="text-lg my-4 ml-2">Personal Information</h1>
      <div className="my-4 flex flex-col items-start gap-1">
        <div className="ml-2 text-grey">Email:</div>
        <div className="bg-light w-full px-4 py-1 rounded-md border shadow">
          {user.email}
        </div>
      </div>
      <div className="my-4 flex flex-col items-start gap-1">
        <div className="ml-2 text-grey">Name:</div>
        <input
          value={user.name ?? ""}
          className="bg-light w-full px-4 py-1 rounded-md border shadow outline-none"
        />
      </div>
      <div className="w-full flex justify-start items-center gap-4 my-8">
        <div className="w-1/6 rounded-full aspect-square bg-grey flex text-white text-6xl justify-center items-center cursor-default shadow-lg">
          ?
        </div>
        <Button text="Change photo" borderless />
      </div>
    </div>
  );
};

export default Page;
