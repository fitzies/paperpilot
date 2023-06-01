import prisma from "@/lib/prisma";

interface RequestBody {
  email: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.delete({ where: { email: body.email } });

  return new Response(JSON.stringify(user));
}
