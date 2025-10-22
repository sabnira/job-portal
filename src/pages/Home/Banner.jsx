// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center justify-center gap-16 px-4">
            
            
                <div className="max-w-md">
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{
                            duration: 2,
                            delay: 1,
                            ease: "easeOut",
                            repeat: Infinity
                        }}
                        className="text-5xl font-bold leading-tight"
                    >
                        Latest{" "}
                        <motion.span
                            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity
                            }}
                        >
                            job
                        </motion.span>{" "}
                        for you!
                    </motion.h1>

                    <p className="py-6 text-lg text-gray-600">
                        Explore thousands of opportunities that match your skills and interests.
                        Whether you’re looking for a new challenge or your first job — your next career move starts here.
                    </p>

                    <button className="btn btn-primary">Get Started</button>
                </div>


                <div className="flex justify-center items-center gap-6 flex-wrap">
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400"
                    />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
