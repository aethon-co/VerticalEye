import { Button } from "@/components/ui/button";
import PI from "../../../../Assets/Placeholder Image.webp"

const WinningEdge = () => {
    return (
        <div>

            <section className="flex h-[84vh] lg:h-[80vh]">
                <div className="lg:w-[50vw] h-full flex flex-col items-center justify-center">
                    <h1 className="text-[5rem] lg:text-[5em] font-bold">WINNING EDGE</h1>
                    <p className="text-center font-light w-[80%] lg:w-[90%]">Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis.</p>
                    <br />
                    {/* <br /> */}
                    <div className="flex gap-4" >
                        <Button className="border">
                            Learn More
                        </Button>
                        <Button className="border">
                            Download Brochure
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center h-full w-[50vw]">
                    <img
                        src={PI.src}
                        alt="school"
                        className="object-cover rounded-2xl opacity-[0.4] h-[90%] w-[80%]"
                    />
                </div>
            </section>
        </div>
    )
}

export default WinningEdge;