import {
  GiGolfTee,
  GiGolfFlag,
  GiTrophy,
  GiWhistle,
} from 'react-icons/gi';
import {
  IoGolfOutline,
  IoFitnessOutline,
} from 'react-icons/io5';
import {
  FaVideo,
  FaBrain,
  FaBullseye,
  FaChalkboardTeacher,
  FaDumbbell,
  FaUsers,
  FaChild,
  FaBriefcase,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Program {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
}

export interface Service {
  icon: IconType;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  description: string;
}

export interface JourneyStep {
  stage: string;
  description: string;
  icon: IconType;
}

export const programs: Program[] = [
  {
    icon: FaChild,
    title: 'Junior Golf Academy',
    subtitle: 'Ages 6-17',
    description:
      'Our Junior Academy develops young golfers through age-appropriate instruction that makes learning fun and engaging. From first swings to tournament competition, we guide juniors every step of the way.',
    features: [
      'SNAG (Starting New At Golf) for ages 6-9',
      'Junior Development Program for ages 10-13',
      'Elite Junior Program for competitive players 14-17',
      'Summer camps and holiday clinics',
      'Junior membership privileges and playing opportunities',
    ],
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    icon: FaUsers,
    title: 'Adult Group Clinics',
    subtitle: 'All Skill Levels',
    description:
      'Learn alongside fellow golf enthusiasts in our structured group sessions. Group clinics offer an affordable way to improve while building connections with other golfers.',
    features: [
      'Beginner Fundamentals (4-week series)',
      'Short Game Mastery clinics',
      'Driver Distance & Accuracy workshops',
      'Ladies-only golf clinics',
      'Weekend warrior improvement sessions',
    ],
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: IoGolfOutline,
    title: 'Playing Lessons',
    subtitle: 'On-Course Instruction',
    description:
      'Take your game from the practice area to the course. Playing lessons address course management, strategy, and the mental game in real playing conditions.',
    features: [
      '9-hole playing lessons with pro',
      'Course management strategy sessions',
      'Tournament preparation rounds',
      'Gap analysis between range and course',
      'Mental game coaching during play',
    ],
    color: 'from-amber-400 to-amber-600',
  },
  {
    icon: FaBriefcase,
    title: 'Corporate Events',
    subtitle: 'Team Building & Entertainment',
    description:
      'Elevate your corporate gatherings with golf experiences designed for team building, client entertainment, and employee appreciation.',
    features: [
      'Corporate clinics and team-building days',
      'Client appreciation golf outings',
      'Executive coaching packages',
      'Group lesson series for company teams',
      'Custom event planning and coordination',
    ],
    color: 'from-purple-400 to-purple-600',
  },
];

export const services: Service[] = [
  {
    icon: FaVideo,
    title: 'Video Analysis',
    description:
      'State-of-the-art swing analysis using high-speed cameras and professional software. See your swing in slow motion with detailed breakdowns and side-by-side comparisons.',
  },
  {
    icon: FaBrain,
    title: 'Mental Game Coaching',
    description:
      'Develop the mental skills needed for consistent performance. Learn pre-shot routines, visualization techniques, and strategies for managing pressure.',
  },
  {
    icon: GiGolfFlag,
    title: 'Short Game Mastery',
    description:
      'Dedicated sessions for chipping, pitching, bunker play, and putting. The fastest way to lower scores is improving shots from 100 yards and in.',
  },
  {
    icon: FaDumbbell,
    title: 'Golf Fitness',
    description:
      'Physical assessments and customized exercises to improve flexibility, strength, and mobility specifically for your golf swing.',
  },
  {
    icon: FaBullseye,
    title: 'Custom Club Fitting',
    description:
      'Work with certified fitters to find the ideal equipment for your swing. Properly fitted clubs can add distance and improve accuracy immediately.',
  },
  {
    icon: GiTrophy,
    title: 'Tournament Preparation',
    description:
      'Comprehensive preparation for competitive golfers including practice planning, course strategy, and mental preparation for tournament play.',
  },
];

export const technologies: Technology[] = [
  {
    name: 'Launch Monitor Analysis',
    description: 'TrackMan technology for precise ball flight and swing data',
  },
  {
    name: 'High-Speed Video',
    description: '240fps cameras capture every detail of your swing',
  },
  {
    name: '3D Motion Capture',
    description: 'Advanced biofeedback for swing plane and rotation analysis',
  },
];

export const journeySteps: JourneyStep[] = [
  {
    stage: 'Foundation',
    description: 'Master the fundamentals: grip, stance, posture, and basic swing mechanics',
    icon: GiGolfTee,
  },
  {
    stage: 'Development',
    description: 'Build consistency through repetition and understanding of ball flight laws',
    icon: GiWhistle,
  },
  {
    stage: 'Refinement',
    description: 'Specialize your skills: short game mastery, course management, mental game',
    icon: FaChalkboardTeacher,
  },
  {
    stage: 'Performance',
    description: 'Compete with confidence and maintain your skills under pressure',
    icon: GiTrophy,
  },
];

export const quickStats = [
  { value: '4', label: 'Core Programs' },
  { value: '6', label: 'Specialized Services' },
  { value: '6+', label: 'Age Groups' },
  { value: 'All', label: 'Skill Levels' },
];
