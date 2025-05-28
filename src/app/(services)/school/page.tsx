import Marquee from "@/app/(components)/(service)/marqueee"
import ServiceCard from "@/app/(components)/(service)/serviceCard"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import PI from "../../../Assets/Placeholder Image.webp"

const School = () => {
    return (
        <div>
            <section className="flex h-[84vh] lg:h-[80vh]">
                <div className="lg:w-[50vw] h-full flex flex-col items-center justify-center">
                    <h1 className="text-[5rem] lg:text-[8rem] font-bold">SCHOOL</h1>
                    <p className="text-center font-light w-[80%] lg:w-[90%]">Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis.</p>
                    <br />
                    {/* <br /> */}
                    <Button className="border">
                        Learn More
                    </Button>
                </div>
                <div className="flex items-center justify-center h-full w-[50vw]">
                    <img
                        src={PI.src}
                        alt="school"
                        className="object-cover rounded-2xl opacity-[0.4] h-[90%] w-[90%]"
                    />
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

            <section className="mt-[5vh] h-fit w-full text-center">
                <h1 className="text-[3rem] font-bold mb-[2rem]">SERVICES</h1>
                <div className="flex flex-col items-center justify-between w-full">
                    <img
                        src={PI.src}
                        alt="school"
                        className="object-cover rounded-2xl opacity-[0.4] h-[500px] w-[90%]"
                    />
                    <div className="relative z-10 mt-[2rem] flex flex-col items-center">
                        <h1 className="text-[2rem] font-bold">WINNING EDGE</h1>
                        <p className="text-[1.2rem] w-[90%] font-light">Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis. Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis.</p>
                    </div>
                </div>
                <div className="mt-[5vh] flex justify-around">
                    <ServiceCard title="COUNSELING" description="Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis." image={PI.src} />
                    <ServiceCard title="SPELL-BINDERS" description="Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis." image={PI.src} />
                    <ServiceCard title="CONSULTANCY" description="Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis." image={PI.src} />
                </div>
            </section>


        </div>
    )
}

export default School