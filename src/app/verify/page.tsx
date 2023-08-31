import { prisma } from "@/lib/prisma";

type SearchParamType = { email: string };

const Page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: SearchParamType;
}) => {
  const user = !!(await prisma.user.findFirst({
    where: { email: searchParams.email },
  }));

  if (!user) {
    return <></>;
  }

  const verifiedUser = await prisma.user.update({
    where: { email: searchParams.email },
    data: { verified: true },
  });

  return (
    <div className="w-screen h-[50vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">You have verfied your email.</h1>
    </div>
  );
};

export default Page;
