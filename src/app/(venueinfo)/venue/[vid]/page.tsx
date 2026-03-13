import Image from "next/image";
import { notFound } from "next/navigation";

export default async function venueDetailPage({params}:{params: {vid:string}}){
    /**
     * Mock Data
     */


    const mockVenueRepo = new Map();
    mockVenueRepo.set("001", { name: "The Bloom Pavilion", image: "/img/bloom.jpg" })
    mockVenueRepo.set("002", { name: "Spark Space", image: "/img/sparkspace.jpg" })
    mockVenueRepo.set("003", { name: "The Grand Table", image: "/img/grandtable.jpg" })
    

    const venueItem = mockVenueRepo.get(params.vid);

    return(
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={venueItem.image}
                    alt = 'Venue Image'   
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                <div className="text-md  mx-5"> {venueItem.name} </div>
            </div>
        </main>
    );
}

export async function generateStaticParams(){
    return [{cid:'001'},{cid:'002'},{cid:'003'}]

}