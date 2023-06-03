import { type NextPage } from "next";
import { api } from "@/lib/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery();
  return (
    <>
      <main></main>
    </>
  );
};

export default Home;
