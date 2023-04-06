import {useRouter} from "next/router"
function clientProjectPage() {

    const {query} = useRouter();
    console.log(query);
    

  return (
    <div>
      <h1>project</h1>
      <div>you are the client {query.clientId}</div>
      <div>you are the project {query.projectId}</div>

    </div>
  );
}

export default clientProjectPage;