import Image from "next/image";
import dog from "../../../public/cute-dog.png";
import teddybear from "../../../public/teddybear.png";
import astronaut from "../../../public/astronaut.png";
import { checkout } from "@/lib/stripe";
import prisma from "@/lib/prisma";
import { getServerUser } from "@/lib/actions";
import { redirect } from "next/navigation";

type Props = {
  searchParams?: {
    success?: string;
    cancelled?: string;
  };
};

const Page = async (props: Props) => {
  const items: { title: string; text: string; image: any; options?: string }[] =
    [
      {
        title: "1000 credits",
        text: "$0.99",
        image: dog,
      },
      {
        title: "5000 credits",
        text: "$3.99",
        image: teddybear,
      },
      {
        title: "Monthly",
        text: "$4.99 for unlimited uses",
        image: astronaut,
        options: "Coming soon",
      },
    ];

  const sessionUser = await getServerUser();

  if (!sessionUser) {
    redirect("/");
  }

  if (props.searchParams && props.searchParams.success) {
    const tokens = parseInt(props.searchParams.success.match(/\d+/)![0]);
    const updateUser = await prisma.user.update({
      where: {
        email: sessionUser.email,
      },
      data: {
        tokens: { increment: tokens },
      },
    });
    redirect("/pricing");
  }

  return (
    <div className="w-screen h-[90vh] flex justify-center items-center gap-8">
      {JSON.stringify(props.searchParams?.success)}
      {items.map((item) => {
        return (
          <div
            className="card w-96 bg-base-100 shadow-xl hover:-translate-y-1 duration-150"
            key={item.title}
          >
            <figure className="px-10 pt-10">
              <Image src={item.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p className="text-gray-400">{item.text}</p>
              <form className="card-actions py-3" action={checkout}>
                {!item.options ? (
                  <button className="btn btn-primary">Buy Now</button>
                ) : (
                  <div className="btn btn-primary">{item.options}</div>
                )}
                <input
                  name="item"
                  value={item.title}
                  className="hidden"
                  readOnly
                />
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
