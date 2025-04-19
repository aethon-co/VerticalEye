import Marquee from "@/app/(components)/marqueee"
import { Button } from "@/components/ui/button"

const School = () => {
    return (
        <div>
            <div className="h-[84vh] lg:h-[80vh]">
                <div className="lg:w-[50vw] h-full flex flex-col items-center justify-center">
                    <h1 className="text-[5rem] lg:text-[8rem] font-bold">SCHOOL</h1>
                    <p className="text-center font-light w-[80%] lg:w-[90%]">Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis.</p>
                    <br />
                    {/* <br /> */}
                    <Button className="border">
                        Learn More
                    </Button>
                </div>
                <div>
                    {/* image */}
                </div>
            </div>
            <Marquee items={['WINNING EDGE', 'COUNSELING', 'SPELL-BINDERS', 'CONSULTANCY']} />
            {/* <div className="relative overflow-hidden bg-white h-[6vh] lg:h-[10vh] w-[100vw] ml-[-2.5vw] text-black flex items-center">
                <div className="whitespace-nowrap flex gap-10 animate-marquee font-medium text-[4vh] lg:text-[7vh]">
                    <p>WINNING-EDGE</p>
                    <p>COUNSELING</p>
                    <p>SPELL-BINDERS</p>
                    <p>CONSULTANCY</p>

                    <p>WINNING-EDGE</p>
                    <p>COUNSELING</p>
                    <p>SPELL-BINDERS</p>
                    <p>CONSULTANCY</p>

                    <p>WINNING-EDGE</p>
                    <p>COUNSELING</p>
                    <p>SPELL-BINDERS</p>
                    <p>CONSULTANCY</p>

                    <p>WINNING-EDGE</p>
                    <p>COUNSELING</p>
                    <p>SPELL-BINDERS</p>
                    <p>CONSULTANCY</p>
                </div>
            </div> */}


        </div>
    )
}

export default School