import { useRouter } from "next/router"
import Link from 'next/link'

export default () => {

    const { query } = useRouter();


    return (
        <div>
            Hi welcome <span>you are {query.id}</span>
            <div>
                <ul>
                    <li>
                        <Link href={'/'}>to users index</Link>

                    </li>
                </ul>
            </div>
        </div>
    )
}