import Modal from "@/components/Modal";
import { deleteAccount, getServerUser } from "@/lib/actions";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { username: string } }) => {
  const user = await prisma.user.findFirst({
    where: { username: params.username },
  });

  if (!user) {
    return (
      <div className="h-[50vh] flex justify-center items-center text-2xl font-semibold">
        404 User not found
      </div>
    );
  }

  const session = await getServerUser();

  if (user?.username !== session?.username) {
    redirect("/");
  }

  return (
    <div className="w-screen flex flex-col justify-center items-start gap-4 p-12 px-24">
      <Modal
        htmlFor="deleteAccount"
        title="Are you sure you want to delete your account?"
        text="This action cannot be undone and will result in a permanent loss of all your account information."
      >
        <form action={deleteAccount} className="flex gap-3 items-center py-2">
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            className="input input-bordered w-1/2"
          />
          <button className="btn btn-active btn-error">
            delete my account
          </button>
        </form>
      </Modal>
      <div className="flex gap-4 justify-center items-center">
        <div className="w-20 rounded-full">
          <img
            src={`https://api.dicebear.com/6.x/identicon/svg?seed=${
              user?.avatar ?? user?.email
            }`}
            alt="profilepicture"
          />
        </div>
        <h1 className="font-bold text-4xl text-center">@{user?.username}</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aperiam.
      </p>
      <div className="flex gap-2">
        <button className="btn btn-active btn-ghost">change username</button>
        <button className="btn btn-active btn-ghost">change avatar</button>
        <button className="btn btn-active btn-secondary text-white">
          {user?.tokens} tokens
        </button>
        <button className="btn btn-active btn-ghost">buy tokens</button>
        <label className="btn btn-active btn-error" htmlFor="deleteAccount">
          delete my account
        </label>
      </div>
    </div>
  );
};

export default Page;
