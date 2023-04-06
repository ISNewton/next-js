import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
    if (req.method === 'GET') {

        res.status(200).json({ name: 'John Doe' })

    } else if (req.method === 'POST') {


        const file = path.join(process.cwd(), 'data.json')

        const content = fs.readFileSync(file )



        const data = JSON.parse(content.toString())

        console.log(data);


        data.push({
            id: Math.random().toString(),
            email: req.body.email,
            password: req.body.password
        })

        fs.writeFileSync(file, JSON.stringify(data))

        res.status(201).json({ message: 'Success' })


    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}