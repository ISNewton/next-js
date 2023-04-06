import { useRouter } from "next/router";

function clientsPage() {
    const {query} = useRouter();
  return (
    <div>
      <h1>The Clients Page</h1>
      <div>you are the client {query.clientId}</div>
    </div>
  );
}

export default clientsPage;