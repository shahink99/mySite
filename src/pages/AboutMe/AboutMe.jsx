import React from "react";
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  Heart,
  Code,
  Github,
  Linkedin,
  Mail as MailIcon,
  BookOpen,
  Users,
  Target,
  Clock,
  MessageCircle,
  Lightbulb,
} from "lucide-react";

const AboutMe = () => {
  const personalInfo = [
    { icon: <Calendar size={18} />, label: "سن", value: "۲۷ سال", bold: true },
    { icon: <Heart size={18} />, label: "وضعیت", value: "مجرد", bold: false },
    { icon: <User size={18} />, label: "سربازی", value: "اتمام", bold: false },
    {
      icon: <Phone size={18} />,
      label: "تماس",
      value: "۰۹۱۴۹۹۰۷۰۹۶",
      bold: true,
    },

    {
      icon: <MapPin size={18} />,
      label: "موقعیت",
      value: "تهران، ایران",
      bold: false,
    },
  ];

  const softSkills = [
    {
      icon: <Users size={20} />,
      title: "کار تیمی",
      description: "توانایی همکاری مؤثر در تیم‌های توسعه",
    },
    {
      icon: <MessageCircle size={20} />,
      title: "ارتباط مؤثر",
      description: "مهارت انتقال مفاهیم فنی به زبان ساده",
    },
    {
      icon: <Target size={20} />,
      title: "هدف‌گرا",
      description: "تمرکز بر دستیابی به اهداف و تحویل به موقع",
    },
    {
      icon: <Clock size={20} />,
      title: "مدیریت زمان",
      description: "اولویت‌بندی وظایف و مدیریت پروژه‌ها",
    },
    {
      icon: <Lightbulb size={20} />,
      title: "حل مسئله",
      description: "توانایی تحلیل و یافتن راه‌حل برای چالش‌ها",
    },
    {
      icon: <Code size={20} />,
      title: "یادگیری مستمر",
      description: "علاقه به یادگیری تکنولوژی‌های جدید",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* گرید دو ستونی */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* سایدبار - ۴ ستون */}
          <div className="md:col-span-4">
            <div
              className="rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: `1px solid var(--border-color)`,
                boxShadow: "var(--shadow)",
              }}
            >
              {/* آواتار */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-48 h-48 rounded-full overflow-hidden flex items-center justify-center shadow-md"
                  style={{
                    backgroundColor: "var(--accent)",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <img
                    src="/-2147483648_-210608.jpg"
                    alt="شاهین کریمی"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* نام و عنوان */}
              <div className="text-center mb-6">
                <h1
                  className="text-2xl font-bold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  شاهین کریمی
                </h1>
                {/* <p
                  className="text-sm font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  shahinkarimi87zx234@gmail.com
                </p> */}
                <p
                  className="text-base mt-3 flex items-center justify-center gap-2 font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Code size={18} style={{ color: "var(--accent)" }} />
                  <span>توسعه‌دهنده فرانت‌اند</span>
                </p>
              </div>

              {/* اطلاعات شخصی */}
              <div className="space-y-4 text-base mb-6">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 py-1">
                    <span style={{ color: "var(--accent)" }} className="w-5">
                      {info.icon}
                    </span>
                    <span
                      style={{
                        color: "var(--text-secondary)",
                        fontWeight: 900,
                      }}
                      className="w-16 text-sm"
                    >
                      {info.label}:
                    </span>
                    <span
                      style={{
                        color: "var(--text-primary)",
                        fontWeight: info.bold ? "700" : "500",
                        fontSize: info.bold ? "1.1rem" : "1rem",
                      }}
                    >
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* خط جداکننده */}
              <div
                className="my-6"
                style={{ borderTop: `2px solid var(--border-color)` }}
              ></div>

              {/* لینک‌های اجتماعی */}
              <div className="space-y-3">
                <a
                  href="https://github.com/shahink99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base hover:translate-x-1 transition-transform"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Github size={20} style={{ color: "var(--accent)" }} />
                  <span className="font-medium">github.com/shahink99</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base hover:translate-x-1 transition-transform"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Linkedin size={20} style={{ color: "var(--accent)" }} />
                  <span className="font-medium">
                    linkedin.com/in/shahinkarimi
                  </span>
                </a>
                <a
                  href="mailto:shahin.karimi@email.com"
                  className="flex items-center gap-3 text-base hover:translate-x-1 transition-transform"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <MailIcon size={20} style={{ color: "var(--accent)" }} />
                  <span className="font-medium">
                    shahinkarimi87zx234@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* محتوای اصلی - ۸ ستون */}
          <div className="md:col-span-8">
            <div
              className="rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: `1px solid var(--border-color)`,
                boxShadow: "var(--shadow)",
              }}
            >
              {/* باکس معرفی */}
              <div className="space-y-6">
                <div>
                  <h2
                    className="text-xl font-bold mb-4 flex items-center gap-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <BookOpen size={22} style={{ color: "var(--accent)" }} />
                    <span>درباره من</span>
                  </h2>
                  <div
                    className="space-y-4 pr-2 text-base leading-relaxed text-right"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <p className="font-medium">
                      من شاهین کریمی هستم، متولد فروردین ۱۳۷۷. از بچگی به
                      کامپیوتر علاقه داشتم و این علاقه باعث شد برم سمت
                      برنامه‌نویسی.
                    </p>

                    <p>
                      حدود ۲ ساله که توی حوزه فرانت‌اند کار می‌کنم. چند تا پروژه
                      شخصی زدم و سعی کردم توی هر کدوم یه چیز جدید یاد بگیرم.
                      همیشه سعی کردم تکنولوژی‌های جدید رو دنبال کنم و خودم رو
                      به‌روز نگه دارم.
                    </p>

                    <p>
                      چیزی که برام جالبه، اینه که می‌تونم یه چیزی رو از صفر
                      بسازم و ببینم بقیه ازش استفاده می‌کنن. وقتی یه پروژه رو
                      تموم می‌کنم و کار می‌کنه، حس خوبی دارم.
                    </p>

                    <p>
                      دنبال یه تیم می‌گردم که باهاشون راحت باشم و بتونم چیزای
                      جدید یاد بگیرم. فکر می‌کنم آدم تنها نمی‌تونه خیلی پیشرفت
                      کنه و باید کنار بقیه باشه.
                    </p>

                    <p>
                      برای حفظ روحیه و سلامت جسم، همیشه ورزش مخصوصاً فوتبال رو
                      در اولویت قرار می‌دم. یه راه خوب برای تخلیه انرژی بعد از
                      کلی کد زدن.
                    </p>

                    <p>
                      اگه فکر می‌کنی می‌تونیم با هم کار کنیم، خوشحال می‌شم که
                      ارتباط بگیریم.
                    </p>
                  </div>
                </div>

                {/* خط جداکننده */}
                <div
                  className="my-6"
                  style={{ borderTop: `2px solid var(--border-color)` }}
                ></div>

                {/* مهارت‌های نرم */}
                <div>
                  <h2
                    className="text-xl font-bold mb-6 flex items-center gap-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <Users size={22} style={{ color: "var(--accent)" }} />
                    <span>مهارت‌های نرم</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-2">
                    {softSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex gap-3 p-4 rounded-xl transition-all hover:translate-y-[-2px]"
                        style={{
                          backgroundColor: "var(--bg-tertiary)",
                          border: `1px solid var(--border-color)`,
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "var(--accent-light)" }}
                        >
                          <span style={{ color: "var(--accent)" }}>
                            {skill.icon}
                          </span>
                        </div>
                        <div>
                          <h3
                            className="font-bold text-base mb-1"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {skill.title}
                          </h3>
                          <p
                            className="text-sm"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
