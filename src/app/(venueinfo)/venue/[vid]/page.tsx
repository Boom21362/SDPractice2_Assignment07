import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ vid: string }>;
}

export default async function VenueDetailPage({ params }: Props ) {
    
    const { vid } = await params;

    const mockVenueRepo = new Map();
    mockVenueRepo.set("001", { name: "The Bloom Pavilion", image: "/img/bloom.jpg" });
    mockVenueRepo.set("002", { name: "Spark Space", image: "/img/sparkspace.jpg" });
    mockVenueRepo.set("003", { name: "The Grand Table", image: "/img/grandtable.jpg" });

    const venueItem = mockVenueRepo.get(vid);

    if (!venueItem) {
        notFound();
    }

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium"> Venue ID {vid} </h1>
            <div className="flex flex-row my-5">
                <Image 
                    src={venueItem.image}
                    alt={venueItem.name}   
                    width={400} 
                    height={300}
                    className="rounded-lg w-[30%]"
                />
                <div className="text-md mx-5"> {venueItem.name} </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return [{ vid: '001' }, { vid: '002' }, { vid: '003' }];
}