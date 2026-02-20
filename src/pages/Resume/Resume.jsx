import React from "react";

import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Code,
  ExternalLink,
  Heart
} from "lucide-react";
import { skills } from "../../data/skills";

const Resume = () => {
  const experiences = [
    {
      title: "فرانت‌اند دولوپر",
      company: "پروژه‌های شخصی",
      location: "تهران",
      period: "۱۴۰۲ - اکنون",
      description:
        " React و TailwindCSS توسعه و طراحی وب‌سایت‌های شخصی با استفاده از ",
      achievements: [
        "طراحی و پیاده‌سازی چندین پروژه شخصی",
        " سایت‌ها performance و SEO  بهبود",
      ],
    },
  ];

  const education = [
    {
      degree: "مهندسی فناوری اطلاعات و ارتباطات",
      school: "دانشگاه علمی و کاربردی ",
      location: "خلخال",
      period: "1396 - 1398",

      gpa: "15.5",
    },
  ];

  const certificates = [
    {
      name: "دوره جامع React.js",
      issuer: "آکادمی سبزلرن",
      date: "۱۴۰۲",
      link: "https://sezlearn.com/course/react.js",
      icon: "⚛️",
    },
    {
      name: "دوره پیشرفته Next.js",
      issuer: "آکادمی سبزلرن",
      date: "۱۴۰۲",
      link: "https://sezlearn.com/course/next.js",
      icon: "▲",
    },
    {
      name: "دوره تخصصی JavaScript",
      issuer: "آکادمی سبزلرن",
      date: "۱۴۰۱",
      link: "https://sezlearn.com/course/javascript",
      icon: "⚡",
    },
    {
      name: "دوره جامع TailwindCSS",
      issuer: "آکادمی سبزلرن",
      date: "۱۴۰۲",
      link: "https://sezlearn.com/course/tailwind",
      icon: "🎨",
    },
  ];

  const languages = [
    { name: "ترکی", level: "زبان مادری", percentage: 100 },
    {
      name: "فارسی",
      level: 
        <Heart
          size={20}
          color="#ef4444"
          fill="#ef4444"
          className="animate-pulse"
        />
      ,
      percentage: 100,
    },
    { name: "انگلیسی", level: "متوسط ", percentage: 60 },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* عنوان صفحه */}
        <div className="mb-8" style={{ textAlign: "right" }}>
          <h1
            className="text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            رزومه
          </h1>
          <p
            className="text-base mt-1 font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            سابقه کاری، تحصیلات و مهارت‌ها
          </p>
        </div>

        {/* گرید دو ستونی */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* ستون راست - ۷ ستون */}
          <div className="md:col-span-7 space-y-6">
            {/* مهارت‌های تخصصی - اول و بزرگتر */}
            <div
              className="rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: `1px solid var(--border-color)`,
                boxShadow: "var(--shadow)",
              }}
            >
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <Code size={26} style={{ color: "var(--accent)" }} />
                <span>مهارت‌های تخصصی</span>
              </h2>

              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className="text-lg font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-sm font-bold px-4 py-1.5 rounded-full"
                        style={{
                          backgroundColor: "var(--accent-light)",
                          color: "var(--accent)",
                        }}
                      >
                        {skill.years} سال تجربه
                      </span>
                    </div>
                    <div
                      className="w-full h-3 rounded-full overflow-hidden"
                      style={{ backgroundColor: "var(--border-color)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          backgroundColor: "var(--accent)",
                          width: `${(skill.years / 3) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* سابقه کاری */}
            <div
              className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: `1px solid var(--border-color)`,
                boxShadow: "var(--shadow)",
              }}
            >
              <h2
                className="text-xl font-bold mb-6 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <Briefcase size={22} style={{ color: "var(--accent)" }} />
                <span>سابقه کاری</span>
              </h2>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pr-6 last:pb-0">
                    {/* نقطه نشانگر */}
                    <div
                      className="absolute right-0 top-1.5 w-3 h-3 rounded-full border-2"
                      style={{
                        backgroundColor: "var(--accent)",
                        borderColor: "var(--bg-secondary)",
                        boxShadow: "0 0 0 2px var(--accent-light)",
                      }}
                    ></div>

                    <div className="pr-8">
                      {/* عنوان و دوره */}
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3
                          className="text-lg font-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {exp.title}
                        </h3>
                        <span
                          className="text-sm font-medium px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "var(--accent-light)",
                            color: "var(--accent)",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>

                      {/* شرکت و مکان */}
                      <div
                        className="flex items-center gap-4 text-sm mb-3"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span className="flex items-center gap-1.5 font-medium">
                          <Briefcase size={14} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5 font-medium">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      {/* توضیحات */}
                      <p
                        className="text-base mb-4 leading-relaxed"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.description}
                      </p>

                      {/* لیست دستاوردها */}
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm flex items-start gap-2 font-medium"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <span
                              className="text-lg"
                              style={{ color: "var(--accent)" }}
                            >
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* تحصیلات */}
            <div
              className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: `1px solid var(--border-color)`,
                boxShadow: "var(--shadow)",
              }}
            >
              <h2
                className="text-xl font-bold mb-6 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <GraduationCap size={22} style={{ color: "var(--accent)" }} />
                <span>تحصیلات</span>
              </h2>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pr-6">
                    <div
                      className="absolute right-0 top-1.5 w-3 h-3 rounded-full border-2"
                      style={{
                        backgroundColor: "var(--accent)",
                        borderColor: "var(--bg-secondary)",
                        boxShadow: "0 0 0 2px var(--accent-light)",
                      }}
                    ></div>

                    <div className="pr-8">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3
                          className="text-lg font-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {edu.degree}
                        </h3>
                        <span
                          className="text-sm font-medium px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "var(--accent-light)",
                            color: "var(--accent)",
                          }}
                        >
                          {edu.period}
                        </span>
                      </div>

                      <div
                        className="flex items-center gap-4 text-sm mb-3"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span className="flex items-center gap-1.5 font-medium">
                          <GraduationCap size={14} />
                          {edu.school}
                        </span>
                        <span className="flex items-center gap-1.5 font-medium">
                          <MapPin size={14} />
                          {edu.location}
                        </span>
                      </div>

                      <p
                        className="text-base mb-2 leading-relaxed"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {edu.description}
                      </p>

                      {edu.gpa && (
                        <span
                          className="text-sm font-medium px-3 py-1 rounded-full inline-block"
                          style={{
                            backgroundColor: "var(--accent-light)",
                            color: "var(--accent)",
                          }}
                        >
                          معدل: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ستون چپ - ۵ ستون */}
          <div className="md:col-span-5 space-y-6">
            {/* گواهینامه‌ها - سبزلرن */}
            <div
              className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: `1px solid var(--border-color)`,
                boxShadow: "var(--shadow)",
              }}
            >
              <h2
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <Award size={22} style={{ color: "var(--accent)" }} />
                <span>دوره‌های آموزشی</span>
              </h2>

              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-[var(--bg-tertiary)] transition-all group"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                      style={{ backgroundColor: "var(--accent-light)" }}
                    >
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className="text-base font-bold group-hover:text-[var(--accent)] transition-colors"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {cert.name}
                        </h3>
                        <ExternalLink
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: "var(--accent)" }}
                        />
                      </div>
                      <p
                        className="text-sm font-medium mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* زبان‌ها */}
            <div
              className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: `1px solid var(--border-color)`,
                boxShadow: "var(--shadow)",
              }}
            >
              <h2
                className="text-xl font-bold mb-6 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <Calendar size={22} style={{ color: "var(--accent)" }} />
                <span>زبان‌ها</span>
              </h2>

              <div className="space-y-5">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className="text-base font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {lang.name}
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "var(--accent-light)",
                          color: "var(--accent)",
                        }}
                      >
                        {lang.level}
                      </span>
                    </div>
                    <div
                      className="w-full h-2.5 rounded-full overflow-hidden"
                      style={{ backgroundColor: "var(--border-color)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          backgroundColor: "var(--accent)",
                          width: `${lang.percentage}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
