import Marquee from "@/app/(components)/(service)/marqueee"
import ServiceCard from "@/app/(components)/(service)/serviceCard"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import PI from "../../../Assets/Placeholder Image.webp"

const College = () => {
    return (
        <div className="bg-black text-white min-h-screen">
             <section className="relative flex flex-col lg:flex-row h-[100vh] overflow-hidden">
                <div className="absolute inset-0 bg-black"></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">
                    <div className="lg:w-[55vw] h-full flex flex-col justify-center px-8 lg:px-16 py-12">
                        <div className="max-w-2xl">
                        
                            
                            <h1 className="text-[4rem] lg:text-[7rem] font-bold text-white leading-none mb-6">
                                COLLEGE
                                <span className="block text-[2.5rem] lg:text-[4rem] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-light">
                                    PROGRAMS
                                </span>
                            </h1>
                            
                            <p className="text-xl lg:text-2xl font-light text-gray-300 leading-relaxed mb-8 max-w-xl">
                                Unlock your potential with our comprehensive programs designed to bridge the gap between education and career success through innovative learning experiences.
                            </p>
                            
                            <div className="flex flex-wrap gap-8 mb-10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">1000+</div>
                                    <div className="text-sm text-gray-400">Students Trained</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">4</div>
                                    <div className="text-sm text-gray-400">Core Programs</div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                                    Explore Programs
                                </Button>
                                <Button className="border-2 border-gray-600 bg-transparent text-white hover:bg-white/10 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                                    Watch Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-[45vw] h-full relative flex items-center justify-center p-8">
                            <img
                                src={PI.src}
                                alt="college students"
                                className="object-cover rounded-3xl w-full max-w-lg h-[500px] lg:h-[600px] shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />

                        
                      
                    </div>
                </div>
            </section>
            <Marquee items={['MPOWER', 'SKILL BOOST', 'CAREER CONNECT', 'MENTOR PLUS']} />

            <section className="py-[8vh] px-[2.5vw] bg-black">
                <div className="text-center mb-[6vh]">
                    <h2 className="text-[3.5rem] lg:text-[4rem] font-bold mb-4 text-white">OUR PROGRAMS</h2>
                    <p className="text-[1.2rem] font-light text-gray-300 max-w-[800px] mx-auto">
                        Discover our comprehensive range of programs designed to accelerate your career journey and unlock new opportunities in today's dynamic professional landscape.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vh] max-w-[1200px] mx-auto">
                    <div className="group bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-xl">M</span>
                            </div>
                            <h3 className="text-[2rem] font-bold text-white">MPOWER</h3>
                        </div>
                        <p className="text-gray-300 font-light text-[1.1rem] leading-relaxed mb-6">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis adipisci delectus aut quae nostrum, nihil eaque labore pariatur reprehenderit dolorum! Consequuntur corrupti at asperiores adipisci!
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">Career Guidance</span>
                            <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-sm font-medium">Mentorship</span>
                            <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium">Goal Setting</span>
                        </div>
                        <div className="text-white font-medium group-hover:text-blue-300 transition-colors cursor-pointer">
                            Learn More →
                        </div>
                    </div>

                    <div className="group bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <h3 className="text-[2rem] font-bold text-white">SKILL BOOST</h3>
                        </div>
                        <p className="text-white font-light text-[1.1rem] leading-relaxed mb-6">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad, sit esse atque voluptatibus, quisquam autem doloribus odit non amet quo! Ut eligendi nisi itaque.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium">Technical Skills</span>
                            <span className="px-3 py-1 bg-teal-900 text-teal-300 rounded-full text-sm font-medium">Soft Skills</span>
                            <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">Certifications</span>
                        </div>
                        <div className="text-white font-medium group-hover:text-green-300 transition-colors cursor-pointer">
                            Learn More →
                        </div>
                    </div>

                    <div className="group bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-xl">C</span>
                            </div>
                            <h3 className="text-[2rem] font-bold text-white">CAREER CONNECT</h3>
                        </div>
                        <p className="text-gray-300 font-light text-[1.1rem] leading-relaxed mb-6">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem ducimus esse nesciunt culpa explicabo illum et omnis non itaque sunt, inventore nam expedita dolorum!
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-orange-900 text-orange-300 rounded-full text-sm font-medium">Networking</span>
                            <span className="px-3 py-1 bg-red-900 text-red-300 rounded-full text-sm font-medium">Internships</span>
                            <span className="px-3 py-1 bg-yellow-900 text-yellow-300 rounded-full text-sm font-medium">Job Placement</span>
                        </div>
                        <div className="text-white font-medium group-hover:text-orange-300 transition-colors cursor-pointer">
                            Learn More →
                        </div>
                    </div>

                    <div className="group bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-xl">M+</span>
                            </div>
                            <h3 className="text-[2rem] font-bold text-white">MENTOR PLUS</h3>
                        </div>
                        <p className="text-gray-300 font-light text-[1.1rem] leading-relaxed mb-6">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia alias itaque sequi unde quis accusantium, quidem ratione culpa adipisci repellendus, id fugit modi quod, quos facere voluptates quas a.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm font-medium">1-on-1 Mentoring</span>
                            <span className="px-3 py-1 bg-pink-900 text-pink-300 rounded-full text-sm font-medium">Industry Experts</span>
                            <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-sm font-medium">Career Roadmap</span>
                        </div>
                        <div className="text-white font-medium group-hover:text-indigo-300 transition-colors cursor-pointer">
                            Learn More →
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default College