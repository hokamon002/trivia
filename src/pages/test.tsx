import { type NextPage } from "next";
import { api } from "@/utils/api";

const Home: NextPage = () => {
  const message = api.example.testAuth.useQuery();

  return <div>{message.data ?? "unauthorized"}</div>;
};

export default Home;
