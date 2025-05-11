import HerbDetailsComp from "@/components/herb-details/HerbDetails";
import { herbs } from "@/data/herbs";
import { HerbItemType } from "@/types/herbItem";
import { Metadata } from "next";
import { Suspense } from "react";

type Params = Promise<{ herbSlug: string }>;

// Utility function to fetch product data
function fetchProduct(herbSlug: string) {
  const herb: HerbItemType = herbs.filter(
    (herb: HerbItemType) => herb.slug.toLowerCase() === herbSlug
  )[0];

  return herb;
}

// Async function to generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { herbSlug } = await params;
  // Fetch product details
  const product = fetchProduct(herbSlug);

  return {
    title: `Herbology | ${product.name}`,
    description: `${product.name} - ${product.description}`,
  };
}

export default async function HerbDetails({ params }: { params: Params }) {
  const { herbSlug } = await params;

  const herb: HerbItemType = fetchProduct(herbSlug);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HerbDetailsComp herb={herb} />
    </Suspense>
  );
}
