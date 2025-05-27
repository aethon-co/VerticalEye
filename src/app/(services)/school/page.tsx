import Marquee from "@/app/(components)/(service)/marqueee"
import ServiceCard from "@/app/(components)/(service)/serviceCard"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import PI from "../../../Assets/Placeholder Image.webp"

const School = () => {
    return (
        <div>
            <section className="h-[84vh] lg:h-[80vh]">
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
            </section>
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

            <section className="mt-[5vh] h-fit w-full border text-center">
                <h1>SERVICES</h1>
                <div className="flex flex-col items-center justify-between w-full">
                    <img
                        src={PI.src}
                        alt="school"
                        className="object-cover rounded-2xl opacity-[0.4] h-[500px]"
                    />
                    <div className="relative z-10 mt-[2rem]">
                        <h1>WINNING EDGE</h1>
                        <p>Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis.</p>
                    </div>
                </div>
                <div>
                    <ServiceCard />
                </div>
            </section>


        </div>
    )
}

export default School