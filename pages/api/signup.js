import prisma from "@/utils/prisma"
import { hash } from 'bcrypt'

const handler = async (req, res) => {

  console.log(23423232);


  if (req.method == 'POST') {

    console.log(23423232);
    const { email, password } = JSON.parse(req.body);

    // console.log(434343343,email,password);


    const user = await prisma.user.create({
      data: {
        email,
        password: await hash(password, 16)
      }
    })

    console.log(user);

    res.json(user);

  }

}

export default handler