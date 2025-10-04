import HomePage from "@/components/template/HomePage";
import { getTourList } from "@/services/tourListService";

export default async function Home() {
  const data = await getTourList();
  console.log(data);
  return <HomePage data={data} />;
}
