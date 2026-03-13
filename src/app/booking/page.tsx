import DateReserve from '@/components/DateReserve'

export default function Booking(){
    return(
        <main className="w-[100%] flex flex-col items-center space-y-10 overflow-hidden">
            <div className="text-3xl size-3xl font-bold m-10"> Venue Booking</div>
            
            <div className="w-fit space-y-2">
                <DateReserve/>
           </div>
           <button name='Book Venue' className="block w-fit rounded-md space-y-2 bg-neutral-800 px-6 py-3 text-xl font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:bg-neutral-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
            Book Venue</button>
        </main>
    );
}