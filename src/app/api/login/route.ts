import prisma from "@/lib/prisma";
import * as bycrypt from "bcrypt";

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      username: body.username,
    },
  });

  if (user && (await bycrypt.compare(body.password, user.password))) {
    // const { email, username, tokens } = user;
    return new Response(JSON.stringify(user));
  } else {
    return new Response(JSON.stringify(null));
  }
}
