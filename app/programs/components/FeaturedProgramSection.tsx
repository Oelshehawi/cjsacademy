"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
    FaCalendarAlt,
    FaCheckCircle,
    FaClock,
    FaEnvelope,
    FaMapMarkerAlt,
    FaUsers,
} from "react-icons/fa";

const schedule = [
    {
        label: "Dates",
        value: "Saturday, February 21/28\nSaturday, March 7/14",
        icon: FaCalendarAlt,
    },
    {
        label: "Time",
        value: "12 PM - 1 PM",
        icon: FaClock,
    },
    {
        label: "Location",
        value: "Savage Creek Driving Range",
        icon: FaMapMarkerAlt,
    },
];

const weeklyTopics = [
    "Week 1 - Swing Foundations and Ball Contact",
    "Week 2 - Short Game Development",
    "Week 3 - Full Swing Progressions",
    "Week 4 - Driver and Long Game Progressions",
];

const inclusions = [
    "Welcome gift for each participant",
    "1 basket of balls per person",
    "Individual hitting bay for comfort and focus",
    "Rental clubs available",
    "Small group setting for personalized attention",
    "Fun drills and challenges each week to build skills and confidence",
];

export function FeaturedProgramSection() {
    return (
        <section
            id="featured-program"
            className="scroll-mt-32 py-20 px-4 bg-linear-to-b from-gray-950 via-emerald-950/70 to-gray-950"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-300 text-sm font-semibold tracking-wide mb-4">
                        Featured Beginner Program
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Golf Foundations Series with Christine Wong
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="rounded-3xl overflow-hidden border border-white/20 bg-stone-50 text-zinc-800"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="lg:col-span-2 bg-[#f66f72] p-7 md:p-10 text-white">
                            <p className="text-xs tracking-[0.22em] uppercase text-white/90 mb-3">
                                Introductory Program
                            </p>
                            <h3 className="text-3xl md:text-5xl leading-tight font-black uppercase max-w-3xl">
                                Introductory Golf Classes with Christine Wong
                            </h3>
                            <p className="mt-4 text-sm md:text-base font-medium text-white/90">
                                PGA of Canada Class A Professional
                            </p>
                        </div>

                        <div className="relative min-h-[260px]">
                            <Image
                                src="/christinePhoto.jpg"
                                alt="Christine Wong during a golf session"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
                            <Image
                                src="/cjslogo2.jpg"
                                alt="CJS Golf Academy"
                                width={104}
                                height={52}
                                className="absolute top-4 right-4 h-auto w-[104px] rounded-lg border border-white/40 drop-shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-7 md:p-10">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <p className="text-lg leading-relaxed font-semibold">
                                    This beginner-friendly program covers all
                                    the essentials - from putting and chipping
                                    to full swings and driving - in a fun and
                                    supportive group setting.
                                </p>
                                <p className="text-lg leading-relaxed font-semibold">
                                    Each week focuses on building confidence and
                                    developing new skills, giving you the
                                    foundation to enjoy the game of golf with
                                    ease.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {schedule.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-2xl border border-zinc-200 bg-white p-5"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="text-[#f66f72] mt-0.5">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-zinc-900 text-lg mb-1">
                                                    {item.label}
                                                </p>
                                                <p className="text-zinc-700 whitespace-pre-line leading-relaxed">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-[#f66f72] mt-0.5">
                                            <FaUsers className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-zinc-900 text-lg mb-1">
                                                Limited Spots Available
                                            </p>
                                            <p className="text-zinc-700 leading-relaxed">
                                                4 spots available
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                                    <h4 className="text-xl font-extrabold text-zinc-900 mb-4">
                                        Introductory Golf Program
                                    </h4>
                                    <ul className="space-y-3">
                                        {weeklyTopics.map((topic) => (
                                            <li
                                                key={topic}
                                                className="flex items-start gap-2.5"
                                            >
                                                <FaCheckCircle className="mt-1 w-4 h-4 text-[#f66f72] shrink-0" />
                                                <span className="text-zinc-700">
                                                    {topic}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-2xl border border-zinc-200 bg-white p-6 relative overflow-hidden">
                                    <h4 className="text-xl font-extrabold text-zinc-900 mb-4">
                                        What&apos;s Included
                                    </h4>
                                    <ul className="space-y-3 mb-6">
                                        {inclusions.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2.5"
                                            >
                                                <FaCheckCircle className="mt-1 w-4 h-4 text-[#f66f72] shrink-0" />
                                                <span className="text-zinc-700">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="inline-flex items-baseline gap-2 rounded-full bg-[#f5c84b] px-4 py-2 text-zinc-900 font-black shadow-sm">
                                        <span className="text-2xl leading-none">
                                            $200
                                        </span>
                                        <span className="text-xs uppercase tracking-wide">
                                            + tax / person
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="rounded-2xl border-2 border-zinc-200 bg-white p-5 text-center">
                                <p className="text-xl font-extrabold text-zinc-900 mb-3">
                                    Register by Email
                                </p>
                                <p className="text-zinc-600 font-semibold">
                                    Email:
                                </p>
                                <a
                                    href="mailto:cjsgolfinc@gmail.com?subject=Golf%20Foundations%20Series%20Registration"
                                    className="inline-flex items-center gap-2 mt-3 font-bold text-zinc-900 hover:text-[#f66f72] transition-colors"
                                >
                                    <FaEnvelope className="w-4 h-4" />
                                    cjsgolfinc@gmail.com
                                </a>
                            </div>

                            <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-5">
                                <p className="text-sm uppercase tracking-[0.18em] text-zinc-600 mb-2">
                                    Class Format
                                </p>
                                <p className="font-semibold leading-relaxed text-zinc-800">
                                    4 total classes in a small group format with
                                    individualized attention and skill-building
                                    challenges each week.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
