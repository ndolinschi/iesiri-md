import { PLACES } from "@/data/places";
import { notFound } from "next/navigation";
import { PlaceDetailView } from "@/components/places/PlaceDetailView";
import type { Metadata } from "next";

export function generateStaticParams() {
  return PLACES.map((place) => ({
    id: place.id,
  }));
}

interface PlacePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PlacePageProps): Promise<Metadata> {
  const { id } = await params;
  const place = PLACES.find((p) => p.id === id);

  if (!place) {
    return {
      title: "Loc negăsit — Ieșiri MD",
    };
  }

  return {
    title: `${place.name.ro} — Ieșiri MD`,
    description: place.shortDescription.ro,
  };
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { id } = await params;
  const place = PLACES.find((p) => p.id === id);

  if (!place) {
    notFound();
  }

  return <PlaceDetailView place={place} />;
}
