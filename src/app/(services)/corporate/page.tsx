import Marquee from "@/app/(components)/(service)/marqueee"
import { Button } from "@/components/ui/button"

const Corporate = () => {
    return (
        <div>
            <div className="h-[84vh] lg:h-[80vh]">
                <div className="lg:w-[50vw] h-full flex flex-col items-center justify-center">
                    <h1 className="text-[5rem] lg:text-[8rem] font-bold">CORPORATE</h1>
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
            <Marquee items={['SYNERGY', 'EMOTIONAL INTELLIGENCE', 'EFFECTIVE COMMUNICATION', 'FINE TUNE YOURSELF', 'PROFESSIONALISM']} />

        </div>
    )
}

export default Corporate