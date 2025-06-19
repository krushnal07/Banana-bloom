import React from 'react';
import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

function Herosection() {
    return (
        
        <div
        

            className="h-auto md:h-[40rem] w-full rounded-md flex
                       flex-col items-center justify-center relative
                       overflow-hidden mx-auto py-10 md:py-0"
        >      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="text-4xl font-bold mb-4">Jagg's organic Banana</h1>
                <p className="text-lg max-w-xl mx-auto">
                  Discover the power of nature’s perfect snack.
Whether you're fueling your day or boosting your health, bananas offer the energy, nutrients, and versatility you need. Peel into wellness and taste the difference today!
                </p>
            </div>
            <div className='mt-4'>
            <Link href={"/courses"}>
            <Button>
             Explore Bananas Quality
             </Button>
             
             </Link>
            
            </div>

        </div>
    );
}

export default Herosection;
