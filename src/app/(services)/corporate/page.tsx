'use client';
import Marquee from "@/app/(components)/(service)/marqueee"
import ServiceCard from "@/app/(components)/(service)/serviceCard"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import PI from "../../../Assets/Placeholder Image.webp"
import { useState } from "react"

const Corporate = () => {
    const [selectedProgram, setSelectedProgram] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const openModal = (programName) => {
        setSelectedProgram(programName)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProgram(null)
        setFormData({ email: '', mobile: '', message: '' })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        try {
            const subject = `Inquiry about ${selectedProgram} Program`
            const body = `
Program: ${selectedProgram}
Email: ${formData.email}
Mobile: ${formData.mobile}
Message: ${formData.message}
            `.trim()
            
            const mailtoLink = `mailto:info@company.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
            window.location.href = mailtoLink
            
            setTimeout(() => {
                closeModal()
                setIsSubmitting(false)
            }, 1000)
            
        } catch (error) {
            console.error('Error sending email:', error)
            setIsSubmitting(false)
        }
    }
    return (
        <div className="bg-black text-white min-h-screen">
             <section className="relative flex flex-col lg:flex-row h-[100vh] overflow-hidden">
                <div className="absolute inset-0 bg-black"></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">
                    <div className="lg:w-[55vw] h-full flex flex-col justify-center px-8 lg:px-16 py-12">
                        <div className="max-w-2xl">
                        
                            
                            <h1 className="text-[4rem] lg:text-[7rem] font-bold text-white leading-none mb-6">
                                CORPORATE
                                <span className="block text-[2.5rem] lg:text-[4rem] bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-light">
                                    SOLUTIONS
                                </span>
                            </h1>
                            
                            <p className="text-xl lg:text-2xl font-light text-gray-300 leading-relaxed mb-8 max-w-xl">
                                Transform your workforce with cutting-edge training solutions designed to enhance productivity, drive innovation, and accelerate business growth through strategic learning initiatives.
                            </p>
                            
                            <div className="flex flex-wrap gap-8 mb-10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">500+</div>
                                    <div className="text-sm text-gray-400">Companies Served</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">4</div>
                                    <div className="text-sm text-gray-400">Core Solutions</div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                                    Explore Solutions
                                </Button>
                                <Button className="border-2 border-gray-600 bg-transparent text-white hover:bg-white/10 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                                    Request Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-[45vw] h-full relative flex items-center justify-center p-8">
                            <img
                                src={PI.src}
                                alt="corporate professionals"
                                className="object-cover rounded-3xl w-full max-w-lg h-[500px] lg:h-[600px] shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />

                        
                      
                    </div>
                </div>
            </section>
            <Marquee items={['TEAM TRANSFORM', 'LEADERSHIP EDGE', 'INNOVATION LAB', 'PERFORMANCE PLUS']} />

            <section className="py-[8vh] px-[2.5vw] bg-black">
                <div className="text-center mb-[6vh]">
                    <h2 className="text-[3.5rem] lg:text-[4rem] font-bold mb-4 text-white">OUR SOLUTIONS</h2>
                    <p className="text-[1.2rem] font-light text-gray-300 max-w-[800px] mx-auto">
                        Discover our comprehensive suite of corporate training solutions designed to empower your workforce, enhance organizational capabilities, and drive sustainable business transformation.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vh] max-w-[1200px] mx-auto">
                    <div className="group bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-xl">TT</span>
                            </div>
                            <h3 className="text-[2rem] font-bold text-white">TEAM TRANSFORM</h3>
                        </div>
                        <p className="text-gray-300 font-light text-[1.1rem] leading-relaxed mb-6">
                            Comprehensive team development programs that foster collaboration, enhance communication, and build high-performing teams aligned with organizational objectives and cultural values.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">Team Building</span>
                            <span className="px-3 py-1 bg-cyan-900 text-cyan-300 rounded-full text-sm font-medium">Communication</span>
                            <span className="px-3 py-1 bg-teal-900 text-teal-300 rounded-full text-sm font-medium">Collaboration</span>
                        </div>
                        <div 
                            className="text-white font-medium group-hover:text-blue-300 transition-colors cursor-pointer"
                            onClick={() => openModal('TEAM TRANSFORM')}
                        >
                            Learn More →
                        </div>
                    </div>

                    <div className="group bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-xl">LE</span>
                            </div>
                            <h3 className="text-[2rem] font-bold text-white">LEADERSHIP EDGE</h3>
                        </div>
                        <p className="text-gray-300 font-light text-[1.1rem] leading-relaxed mb-6">
                            Executive leadership development programs designed to cultivate strategic thinking, enhance decision-making capabilities, and drive organizational excellence through effective leadership.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-sm font-medium">Strategic Thinking</span>
                            <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm font-medium">Executive Coaching</span>
                            <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm font-medium">Change Management</span>
                        </div>
                        <div 
                            className="text-white font-medium group-hover:text-purple-300 transition-colors cursor-pointer"
                            onClick={() => openModal('LEADERSHIP EDGE')}
                        >
                            Learn More →
                        </div>
                    </div>

                    <div className="group bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-xl">IL</span>
                            </div>
                            <h3 className="text-[2rem] font-bold text-white">INNOVATION LAB</h3>
                        </div>
                        <p className="text-gray-300 font-light text-[1.1rem] leading-relaxed mb-6">
                            Innovation-focused workshops and training programs that cultivate creative thinking, drive digital transformation, and empower teams to develop breakthrough solutions.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium">Design Thinking</span>
                            <span className="px-3 py-1 bg-emerald-900 text-emerald-300 rounded-full text-sm font-medium">Digital Innovation</span>
                            <span className="px-3 py-1 bg-teal-900 text-teal-300 rounded-full text-sm font-medium">Creative Problem Solving</span>
                        </div>
                        <div 
                            className="text-white font-medium group-hover:text-green-300 transition-colors cursor-pointer"
                            onClick={() => openModal('INNOVATION LAB')}
                        >
                            Learn More →
                        </div>
                    </div>

                    <div className="group bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-xl">P+</span>
                            </div>
                            <h3 className="text-[2rem] font-bold text-white">PERFORMANCE PLUS</h3>
                        </div>
                        <p className="text-gray-300 font-light text-[1.1rem] leading-relaxed mb-6">
                            Performance optimization programs that enhance productivity, streamline processes, and maximize organizational efficiency through data-driven insights and strategic interventions.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-orange-900 text-orange-300 rounded-full text-sm font-medium">Performance Analytics</span>
                            <span className="px-3 py-1 bg-amber-900 text-amber-300 rounded-full text-sm font-medium">Process Optimization</span>
                            <span className="px-3 py-1 bg-yellow-900 text-yellow-300 rounded-full text-sm font-medium">KPI Management</span>
                        </div>
                        <div 
                            className="text-white font-medium group-hover:text-orange-300 transition-colors cursor-pointer"
                            onClick={() => openModal('PERFORMANCE PLUS')}
                        >
                            Learn More →
                        </div>
                    </div>
                </div>

            </section>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
                    <div className="bg-gray-800 rounded-3xl p-8 max-w-md w-full border border-gray-700 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
                        >
                            ×
                        </button>
                        
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Get Program Details</h3>
                            <p className="text-gray-300">Interested in <span className="text-orange-400 font-semibold">{selectedProgram}</span>?</p>
                            <p className="text-gray-400 text-sm mt-1">Fill out the form below and we'll get back to you shortly.</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="your.email@company.com"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">
                                    Mobile Number *
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="+91 xxxxxxxxxx"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                                    placeholder="Tell us about your organization's training needs, team size, or any specific requirements..."
                                />
                            </div>
                            
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Corporate