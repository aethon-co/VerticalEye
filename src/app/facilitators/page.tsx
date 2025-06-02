import PI from "../../Assets/Placeholder Image.webp"

const Facilitators = () => {
    return (
        <div className=" h-[80vh] flex justify-around">
            <div className="text-center flex flex-col w-[50vw]">
                <h1 className="mt-[10vh] text-[3rem] font-bold mb-[2rem]">John Doe</h1>
                <p>Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis.Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis.Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis.Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis.</p>

                <div className="mt-[10vh]">
                    <i>Social Media Icons</i>
                </div>
            </div>
            <div>
                <img src={PI.src} alt="Image" className="h-[65vh] w-[35vw] rounded-xl" />
                {/* <div>
                    <i>Social Media Icons</i>
                </div> */}
            </div>
        </div>
    )
}

export default Facilitators