import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WrapperContainer from '../components/WrapperContainer';

export default async function Aboutus() {
    return (
        <main className=" animate-fadeIn">
            <Navbar />

            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0e0e0e] text-white">
                <WrapperContainer>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">About Us</h1>

                    <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
                        Welcome to NextGen Business Innovators, where cutting-edge technology meets visionary business solutions. We are a consulting
                        firm dedicated to empowering businesses with the tools and strategies needed to thrive in today&apos;s fast-evolving digital
                        landscape.
                    </p>
                </WrapperContainer>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
                <WrapperContainer>
                    <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
                    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 mt-8">
                        <div>
                            {/* <LightbulbIcon className="h-12 w-12 mb-4 text-[#ff6b6b]" /> */}
                            <h3 className="text-xl mb-3 font-bold">Business Solutions Consulting</h3>
                            <p className="mt-2 text-gray-600">Helping companies streamline operations and achieve sustainable growth</p>
                        </div>
                        <div>
                            {/* <CodeIcon className="h-12 w-12 mb-4 text-[#ff6b6b]" /> */}
                            <h3 className="text-xl mb-3 font-bold">Tech Product Consulting</h3>
                            <p className="mt-2 text-gray-600">Guiding tech development from ideation to launch</p>
                        </div>
                        <div>
                            {/* <BarChartIcon className="h-12 w-12 mb-4 text-[#ff6b6b]" /> */}
                            <h3 className="text-xl mb-3 font-bold">Business Strategy Consulting</h3>
                            <p className="mt-2 text-gray-600">Providing data-driven insights and strategies for long-term success</p>
                        </div>
                    </div>
                </WrapperContainer>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#effe8a] text-black">
                <WrapperContainer>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl text-start md:text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Approach</h2>
                            <p className="mx-auto text-start md:text-center max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                At NextGen, we don&apos;t just consult; we partner with our clients to solve their most complex challenges. By merging
                                innovation with practical expertise, we craft bespoke solutions that enable businesses to stay ahead of the curve and
                                lead in their industries.
                            </p>
                        </div>
                    </div>
                </WrapperContainer>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
                <WrapperContainer>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl text-start md:text-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                                Let&apos;s Innovate Together
                            </h2>
                            <p className="mx-auto text-start md:text-center max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Whether you&apos;re looking to optimize your business processes, develop a breakthrough product, or craft a winning
                                strategy, NextGen Business Innovators is your trusted partner for success.
                            </p>
                        </div>
                    </div>
                </WrapperContainer>
            </section>

            <Footer />
        </main>
    );
}
