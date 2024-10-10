import Link from 'next/link';
import { FaBriefcase, FaGraduationCap, FaCode, FaAward } from 'react-icons/fa';

const ResumeCard = ({ title, items, icon, blur }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
    <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    <div className={blur ? 'blur-sm' : ''}>
      {items.map((item, index) => (
        <div key={index} className="mb-4 last:mb-0">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-primary">{item.organization} | {item.date}</p>
          <ul className="mt-2 space-y-1">
            {item.description.map((desc, idx) => (
              <li key={idx} className="text-gray-300">{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const SkillsCard = ({ skills }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
    <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
      <FaCode className="text-primary" />
      <span className="ml-2">Core Skills</span>
    </h2>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Professional() {
  const experienceData = [
    {
      title: "VP, Strategy & Innovation",
      organization: "Twilio",
      date: "2024 - Present",
      description: [
        "- Building Twilio 2.0"
      ]
    },
    {
      title: "Global VP, ISV GTM",
      organization: "Twilio",
      date: "2018 - 2024",
      description: [
        "- Lead 170+ person GTM organization",
        "- >$1B of revenue managed",
        "- Fastest growing team/business inside Twilio"
      ]
    },
     {
      title: "Various Exec Roles",
      organization: "Google, Snappr, Telstra, DeNovo",
      date: "2010 - 2018",
      description: [
        "- Built businesses from 0-1",
        "- Grown businesses and BUs >100% MoM",
        "- Lead GTM and Product organizations",
        "- Managed >$5B of advertizing revenues",
      ]
    }
  ];

  const patentsData = [
    {
      title: "Confidential Patent",
      organization: "Patent Office",
      date: "Patent No. Confidential",
      description: [
        "Details of this patent are confidential and not displayed for privacy reasons.",
        "Please contact for more information if authorized."
      ]
    }
  ];

  const skills = [
     "JavaScript (ES6+)", "Python", "React", "Node.js", "Express", "Django", "TensorFlow", 
    "Git", "Docker", "AWS", "Linux", "MongoDB", "PostgreSQL", "NumPy", "MATLAB", "Tableau", "Machine Learning", 
    "Business Development", ">$100,000,000M deals", "UC Berkeley Negotiation and Influence Program",
    "AdTech"
  ];

  const awardsData = [
    {
      title: "The Australian Business Award for Innovation, Enterprise & E-Business",
      organization: "Australia Business Awards",
      date: "2014",
      description: ["Recognising Australia's Business Innovation & Technology Leaders"]
    },
    {
      title: "Innovation Demo",
      organization: "Developer Week Austin",
      date: "2019",
      description: ["CloudX award for presenting the most innovative demo, showing a suite of CPaaS components allowing developers to build any communication experience"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <ResumeCard title="Work" items={experienceData} icon={<FaBriefcase className="text-primary" />} />
          <ResumeCard title="Patents" items={patentsData} icon={<FaGraduationCap className="text-primary" />} blur={true} />
        </div>
        <div>
          <ResumeCard title="Awards & Achievements" items={awardsData} icon={<FaAward className="text-primary" />} />
          <SkillsCard skills={skills} />
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-6">
        <p className="text-lg text-white">
          As of 2024, I have worked with over 50% of the{' '}
          <Link href="https://www.forbes.com/lists/global2000/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Global Forbes 2000 list
          </Link>
        </p>
      </div>
    </div>
  );
}