import prisma from "@/utils/prisma"
import { hash  } from 'bcrypt'

const handler = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.create({
    data: {
      email,
      password: await hash(password, 16)
    }
  })

  console.log(user);

  //   const user = await prisma.user.create({
  //     data: {
  //       email,
  //       password,
  //     },
  //   });

    res.json(user);
}

export default handler