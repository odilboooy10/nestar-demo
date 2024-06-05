import { useRouter } from "next/router";

const PropertyList = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>PROPERTY DETAIL</div>;
};

export default PropertyList;
