import DetailsTour from "@/components/template/DetailsTour";
import { getTourDetails } from "@/services/tourDetails";

const Tour = async ({ params }) => {
  const { slug: id } = await params;
  const data = await getTourDetails(id);
  console.log(data);

  return <DetailsTour data={data} />;
};

export default Tour;
