const TestimonialCard = () => {

    const data = [
        {
            "name": "name1",
            "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis. Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis."
        },
        {
            "name": "name2",
            "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis. Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis."
        },
        {
            "name": "name3",
            "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis. Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis."
        },
        {
            "name": "name4",
            "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis. Lorem ipsum dolor sit amet. Qui architecto maiores ea eligendi galisum sed natus aliquam est consequatur dolor ut internos Quis."
        }
    ]

    const createTestimonials = () => {
        //return data.map((item, id) => <div key={id} className="border rounded ">{item.name}<br />{item.review}</div>)
        return <div></div>
    }

    return (
        <div className="flex items-center h-fit w-full justify-center">
            <div className="w-[25vw] h-[25vh] border rounded-l-lg">

            </div>
            <div className="w-[40vw] h-[40vh] border rounded-xl">

            </div>
            <div className="w-[25vw] h-[25vh] border rounded-r-lg">

            </div>
        </div>
    )
}

export default TestimonialCard