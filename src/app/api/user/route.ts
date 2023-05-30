import prisma from "@/lib/prisma";
import * as bycrypt from "bcrypt";

interface RequestBody {
  email: string;
  username: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: await bycrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(user));
}
