export type Lang = "fa" | "en";

type Copy = { fa: string; en: string };
export type DetailGroup = { title: Copy; text?: Copy; items: { fa: string[]; en: string[] } };

export type Section = {
  id: string;
  number: string;
  kicker: Copy;
  title: Copy;
  summary: Copy;
  image: string;
  accent: "green" | "orange" | "gold";
  lead: Copy;
  facts: { fa: string[]; en: string[] };
  groups: DetailGroup[];
};

const group = (faTitle:string,enTitle:string,fa:string[],en:string[],faText?:string,enText?:string):DetailGroup => ({
  title:{fa:faTitle,en:enTitle},
  text:faText&&enText?{fa:faText,en:enText}:undefined,
  items:{fa,en}
});

export const sections: Section[] = [
  {
    id:"about",number:"01",kicker:{fa:"درباره من",en:"About me"},
    title:{fa:"آرمان؛ میان ورزش، فناوری و ساختن",en:"Arman — where sport, technology and making meet"},
    summary:{fa:"هویت، علایق، فعالیت‌های فعلی و مسیر آیندهٔ آرمان در یک صفحهٔ کامل.",en:"Arman’s identity, interests, current work and future direction in one complete page."},
    image:"/assets/about.png",accent:"green",
    lead:{fa:"من آرمان قربانی هستم؛ دانش‌آموز علامه حلی ۵ و علاقه‌مند به بسکتبال، برنامه‌نویسی، رباتیک و تبدیل ایده‌ها به پروژه‌های واقعی. ARMAN.GH دنیای دیجیتال شخصی من و روایت مسیری است که با یادگیری، تمرین و ساختن جلو می‌رود.",en:"I’m Arman Ghorbani, a student at Allameh Helli 5 interested in basketball, programming, robotics and turning ideas into real projects. ARMAN.GH is my personal digital universe and the story of a path shaped by learning, practice and building."},
    facts:{fa:["دانش‌آموز علامه حلی ۵","علاقه‌مند به بسکتبال و بازی دفاع‌محور","فعال در برنامه‌نویسی، الکترونیک و رباتیک","سازندهٔ پروژهٔ ربات مکانوم تشخیص رنگ"],en:["Student at Allameh Helli 5","Interested in basketball and defense-first play","Active in programming, electronics and robotics","Building a color-detecting mecanum robot"]},
    groups:[
      group("هویت و علایق","Identity & interests",["بسکتبال و رشد مهارت‌های دفاعی","برنامه‌نویسی برای ساخت سامانه‌های واقعی","طراحی ربات، مکانیک و الکترونیک","مدل‌سازی سه‌بعدی و حل مسئله"],["Basketball and defensive development","Programming for real systems","Robot design, mechanics and electronics","3D modeling and problem solving"]),
      group("این روزها","Right now",["توسعهٔ ربات چهارچرخ مکانوم برای پروژهٔ مدرسه","راه‌اندازی دوربین ESP32-CAM و انتقال تصویر","آزمایش ارتباط بی‌سیم NRF24L01","طراحی بازوی رباتیک با موتور استپر و سروو"],["Developing a four-wheel mecanum school robot","Setting up ESP32-CAM and live video","Testing NRF24L01 wireless communication","Designing a stepper-and-servo robotic arm"]),
      group("جهت آینده","Future direction",["کامل‌کردن یک ربات قابل‌ارائه و قابل‌آزمایش","پیشرفت پیوسته در بسکتبال، به‌ویژه دفاع","عمیق‌ترشدن در برنامه‌نویسی و ساخت پروژه‌های فنی"],["Complete a presentable, testable robot","Keep improving in basketball, especially defense","Go deeper into programming and technical projects"])
    ]
  },
  {
    id:"basketball",number:"02",kicker:{fa:"بسکتبال",en:"Basketball"},
    title:{fa:"دفاع، امضای بازی من",en:"Defense is the signature of my game"},
    summary:{fa:"پروفایل ورزشی آرمان با تمرکز ویژه بر دفاع، تمرین، پیشرفت و هدف‌های بسکتبالی.",en:"Arman’s athlete profile focused on defense, practice, progress and basketball goals."},
    image:"/assets/basketball-new.png",accent:"orange",
    lead:{fa:"بسکتبال یکی از بخش‌های اصلی هویت من است. در بازی، دفاع برایم جایگاه ویژه‌ای دارد و مسیر پیشرفت را با تمرین، تمرکز، استمرار و بررسی عملکرد دنبال می‌کنم.",en:"Basketball is a central part of my identity. Defense has a special place in my game, and I pursue progress through practice, focus, consistency and performance review."},
    facts:{fa:["هویت بازی: دفاع‌محور","اصل پیشرفت: تمرین و استمرار","تمرکز ذهنی: واکنش، تمرکز و تصمیم‌گیری","هدف: رشد هم‌زمان توان دفاعی و حمله"],en:["Play identity: defense-first","Progress principle: practice and consistency","Mental focus: reaction, focus and decisions","Goal: grow both defense and offense"]},
    groups:[
      group("پروفایل بازی","Game profile",["دفاع به‌عنوان ویژگی اصلی سبک بازی","تمرکز روی جای‌گیری و واکنش مناسب","اهمیت تمرکز تا پایان هر مالکیت","پیشرفت مرحله‌به‌مرحله، نه نمایش عددهای ساختگی"],["Defense as the core play-style trait","Focus on positioning and reaction","Staying focused through every possession","Step-by-step progress without invented numbers"]),
      group("بخش دفاعی","Defense",["خواندن حرکت بازیکن مقابل","حفظ تعادل و جای‌گیری","ایجاد فشار بدون از‌دست‌دادن کنترل","پیگیری توپ و ادامه‌دادن دفاع تیمی"],["Reading the opponent’s movement","Maintaining balance and position","Applying pressure without losing control","Tracking the ball and sustaining team defense"]),
      group("مسیر تمرین","Training path",["تمرین منظم مهارت‌های پایه","کار روی سرعت واکنش و کنترل بدن","بررسی عملکرد مسابقه و پیدا‌کردن نقطهٔ بهبود","ثبت آمار واقعی مسابقات فقط پس از اندازه‌گیری"],["Consistent work on fundamentals","Developing reaction speed and body control","Reviewing games to find the next improvement","Recording game statistics only after measurement"]),
      group("هدف‌ها","Goals",["قوی‌ترشدن در دفاع یک‌به‌یک و تیمی","بهبود تصمیم‌گیری زیر فشار","پیشرفت متعادل در مهارت‌های حمله","تبدیل تمرین مداوم به عملکرد بهتر در مسابقه"],["Stronger one-on-one and team defense","Better decision-making under pressure","Balanced growth in offensive skills","Turn consistent practice into better game performance"])
    ]
  },
  {
    id:"programming",number:"03",kicker:{fa:"برنامه‌نویسی",en:"Programming"},
    title:{fa:"از کد تا یک ماشین واقعی",en:"From code to a real machine"},
    summary:{fa:"کدنویسی، بردهای هوشمند، ارتباط بی‌سیم و عیب‌یابی؛ جایی که کد به حرکت تبدیل می‌شود.",en:"Code, smart boards, wireless links and debugging — where software becomes motion."},
    image:"/assets/programming-new.png",accent:"green",
    lead:{fa:"برنامه‌نویسی برای من فقط نوشتن چند خط کد نیست؛ راهی است برای خواندن حسگر، کنترل دوربین و موتور، برقراری ارتباط بی‌سیم و ساخت رباتی که در دنیای واقعی کار کند.",en:"Programming is more than writing lines of code to me; it is how sensors are read, cameras and motors are controlled, wireless links are built and a real robot comes alive."},
    facts:{fa:["Arduino Nano و Mega","ESP32-CAM و پردازش تصویر","NRF24L01 و کنترل بی‌سیم","کتابخانه‌های Servo، Wire و MPU6050"],en:["Arduino Nano and Mega","ESP32-CAM and machine vision","NRF24L01 wireless control","Servo, Wire and MPU6050 libraries"]},
    groups:[
      group("بردها و ماژول‌ها","Boards & modules",["Arduino برای کنترل اصلی و اجرای منطق ربات","ESP32-CAM برای دوربین، تصویر زنده و تشخیص رنگ","NRF24L01 آنتن‌دار برای فرستنده و گیرنده","MPU6050 برای داده‌های حرکتی و جهت‌گیری"],["Arduino for main control and robot logic","ESP32-CAM for camera, live view and color detection","External-antenna NRF24L01 for transmitter and receiver","MPU6050 for motion and orientation data"]),
      group("کنترل و حرکت","Control & motion",["کنترل سروو با جوی‌استیک و ارتباط بی‌سیم","کنترل موتورهای چرخ‌های مکانوم","راه‌اندازی موتور استپر در بخش پایینی بازو","خواندن حسگرهای جلوی سمت چپ و راست"],["Joystick servo control over a wireless link","Driving the mecanum wheel motors","Running the lower arm stepper motor","Reading front-left and front-right sensors"]),
      group("عیب‌یابی واقعی","Real debugging",["رفع خطاهای نصب پلتفرم ESP32 در Arduino IDE","بررسی خطای Camera probe failed 0x105","تنظیم پورت، Serial Monitor و فرآیند آپلود","بررسی ارتباط شبکه و وب‌سرور تصویر زنده"],["Resolving ESP32 platform installation errors in Arduino IDE","Investigating Camera probe failed 0x105","Configuring ports, Serial Monitor and upload flow","Testing networking and the live-camera web server"]),
      group("چیزی که در حال رشد است","What is growing",["ساخت کد ماژولار برای اجزای مختلف ربات","هماهنگ‌کردن بینایی، حرکت و بازو","تست مرحله‌ای پیش از اتصال همهٔ بخش‌ها","ثبت خطا و اصلاح بر اساس نتیجهٔ آزمایش"],["Modular code for each robot subsystem","Coordinating vision, motion and the arm","Testing in stages before full integration","Logging errors and refining from test results"])
    ]
  },
  {
    id:"school",number:"04",kicker:{fa:"مدرسه",en:"School"},
    title:{fa:"حلی ۵؛ جایی برای یادگیری و پروژه",en:"Helli 5 — a place to learn and build"},
    summary:{fa:"پایهٔ هفتم، فعالیت‌های آموزشی و پروژهٔ رباتیک آرمان با تصویر واقعی مدرسه.",en:"Seventh grade, educational work and Arman’s robotics project with the real school image."},
    image:"/assets/school.jpg",accent:"green",
    lead:{fa:"من دانش‌آموز پایهٔ هفتم دبیرستان دورهٔ اول علامه حلی ۵ تهران هستم. پروژهٔ اصلی مدرسه‌ام یک ربات مکانوم با بازوی تشخیص رنگ است؛ پروژه‌ای میان مکانیک، الکترونیک، برنامه‌نویسی و آزمون عملی.",en:"I am a seventh-grade student at Allameh Helli 5 middle school in Tehran. My main school project is a color-detecting mecanum robot — a combination of mechanics, electronics, programming and hands-on testing."},
    facts:{fa:["مدرسه: علامه حلی ۵ تهران","مقطع: دبیرستان دورهٔ اول","پایهٔ تحصیلی: هفتم","پروژهٔ اصلی: رباتیک آموزشی"],en:["School: Allameh Helli 5, Tehran","Level: middle school","Grade: seventh","Main project: educational robotics"]},
    groups:[
      group("پروژهٔ مدرسه","School project",["ربات متحرک با چهار چرخ مکانوم","تشخیص جسم با رنگ مشخص توسط دوربین","برداشتن جسم با بازوی رباتیک","انتقال جسم به سبد مخصوص"],["Mobile robot with four mecanum wheels","Camera detection of a target-colored object","Picking the object with a robotic arm","Moving it to a dedicated basket"]),
      group("رشته‌های درگیر","Connected disciplines",["طراحی شاسی، بازو و چرخ‌ها در بخش مکانیک","مدار، بردها، حسگرها و موتورها در الکترونیک","کنترل، ارتباط و تشخیص رنگ در برنامه‌نویسی","مستندسازی، زمان‌بندی و ارائهٔ نتیجه"],["Chassis, arm and wheel design in mechanics","Circuits, boards, sensors and motors in electronics","Control, communication and color detection in code","Documentation, scheduling and presenting the result"]),
      group("شیوهٔ کار","How I work",["تقسیم پروژه به بخش‌های کوچک و قابل‌آزمایش","شروع از نمونهٔ اولیه و بهبود مرحله‌ای","بررسی خطاها پیش از اتصال کل سامانه","آماده‌سازی پروژه برای ارائهٔ کلاسی"],["Break the project into testable subsystems","Start with a prototype and improve in stages","Resolve errors before integrating the full system","Prepare the project for a classroom presentation"])
    ]
  },
  {
    id:"skills",number:"05",kicker:{fa:"مهارت‌ها",en:"Skills"},
    title:{fa:"مهارت‌هایی که در عمل رشد می‌کنند",en:"Skills that grow through practice"},
    summary:{fa:"مهارت‌های فنی، ورزشی و حل مسئله؛ بدون درصد و سطح ساختگی.",en:"Technical, athletic and problem-solving skills — without invented percentages or levels."},
    image:"/assets/skills.png",accent:"green",
    lead:{fa:"مهارت برای من یک درصد تزئینی نیست؛ چیزی است که با ساختن، تمرین، خطا و اصلاح رشد می‌کند. این صفحه فقط توانایی‌هایی را نشان می‌دهد که در پروژه‌ها یا تمرین واقعی استفاده کرده‌ام.",en:"A skill is not a decorative percentage to me; it grows through building, practice, mistakes and refinement. This page only shows abilities used in real projects or training."},
    facts:{fa:["رباتیک و طراحی سامانه","الکترونیک و ماژول‌های کنترلی","برنامه‌نویسی و عیب‌یابی","بسکتبال با تمرکز بر دفاع"],en:["Robotics and system design","Electronics and control modules","Programming and debugging","Defense-focused basketball"]},
    groups:[
      group("مهارت‌های فنی","Technical skills",["طراحی شاسی دوطبقه و جانمایی قطعات","کار با Arduino، ESP32-CAM و NRF24L01","کنترل سروو، استپر و موتورهای حرکتی","اتصال و خواندن حسگرها و MPU6050"],["Two-level chassis design and component layout","Arduino, ESP32-CAM and NRF24L01","Servo, stepper and drive-motor control","Connecting sensors and reading MPU6050"]),
      group("ساخت و طراحی","Making & design",["طراحی کلی ربات و بازوی مکانیکی","بررسی ساخت رولر چرخ مکانوم و تراشکاری","کار با فایل‌های سه‌بعدی و فرمت 3MF","تبدیل نیاز پروژه به فهرست قطعات و نقشه"],["Overall robot and mechanical-arm design","Exploring machining for mecanum wheel rollers","Working with 3D files and the 3MF format","Turning project needs into parts and drawings"]),
      group("حل مسئله","Problem solving",["تست هر ماژول به‌صورت جداگانه","خواندن پیام خطا و پیدا‌کردن علت","اصلاح اتصال، کتابخانه یا تنظیمات نرم‌افزار","ادامهٔ آزمایش تا رسیدن به رفتار قابل‌اعتماد"],["Testing every module independently","Reading errors and locating the cause","Correcting wiring, libraries or software settings","Iterating toward reliable behavior"]),
      group("مهارت ورزشی","Athletic skill",["تمرکز ویژه روی دفاع","تمرین مستمر و توجه به پیشرفت","واکنش، جای‌گیری و تصمیم‌گیری","حفظ تمرکز در جریان بازی"],["Strong focus on defense","Consistent practice and progress","Reaction, positioning and decisions","Maintaining focus throughout play"])
    ]
  },
  {
    id:"learning",number:"06",kicker:{fa:"در حال یادگیری",en:"Currently learning"},
    title:{fa:"یادگیری همیشه روشن است",en:"Learning is always in motion"},
    summary:{fa:"موضوع‌هایی که اکنون برای کامل‌شدن پروژهٔ ربات و رشد مهارت‌ها دنبال می‌شوند.",en:"Topics being studied now to complete the robot and expand practical skills."},
    image:"/assets/learning.png",accent:"green",
    lead:{fa:"یادگیری من از نیاز واقعی پروژه می‌آید؛ هر مشکل تازه، مسیر تازه‌ای برای فهمیدن و بهتر ساختن باز می‌کند. وضعیت‌ها به‌جای درصدهای ساختگی، با کارهای واقعی توضیح داده شده‌اند.",en:"My learning starts with real project needs; each new problem opens a path to understand and build better. Progress is described through real work instead of made-up percentages."},
    facts:{fa:["بینایی ماشین با ESP32-CAM","ارتباط بی‌سیم NRF24L01","کنترل بازوی رباتیک","طراحی مکانیکی و سه‌بعدی"],en:["Machine vision with ESP32-CAM","NRF24L01 wireless communication","Robotic arm control","Mechanical and 3D design"]},
    groups:[
      group("بینایی و دوربین","Vision & camera",["راه‌اندازی پایدار ESP32-CAM","تصویر زنده روی گوشی یا لپ‌تاپ","گرفتن چند تصویر پشت‌سرهم","تشخیص رنگ برای پیدا‌کردن جسم هدف"],["Stable ESP32-CAM setup","Live view on phone or laptop","Capturing repeated images","Color detection to locate the target object"]),
      group("حرکت و ارتباط","Motion & communication",["ارسال فرمان با NRF24L01 آنتن‌دار","کنترل سروو با جوی‌استیک","حرکت همه‌جهته با چرخ‌های مکانوم","هماهنگ‌کردن حرکت خودرو و بازو"],["Commands over external-antenna NRF24L01","Joystick control of a servo","Omnidirectional mecanum movement","Coordinating the vehicle and the arm"]),
      group("مکانیک و مدل‌سازی","Mechanics & modeling",["طراحی کف دوطبقه با سوراخ‌های نصب","جانمایی همهٔ قطعات داخل بدنه","ساخت یا تراش رولر چرخ مکانوم","طراحی جزئیات بازو و محل استپر"],["Two-level baseplate with mounting holes","Placing all components inside the body","Making or machining mecanum rollers","Arm detailing and stepper placement"]),
      group("روش یادگیری","Learning method",["مطالعه، ساخت نمونه و آزمایش","ثبت خطاهای واقعی و بررسی مرحله‌ای","تغییر فقط یک عامل در هر تست","تبدیل نتیجهٔ آزمون به اصلاح بعدی"],["Study, prototype and test","Log real errors and inspect in stages","Change one factor per test","Turn every result into the next refinement"])
    ]
  },
  {
    id:"goals",number:"07",kicker:{fa:"اهداف",en:"Goals"},
    title:{fa:"قدم بعدی، روشن و قابل ساختن",en:"The next step, clear and buildable"},
    summary:{fa:"هدف‌های فنی، آموزشی و ورزشی در مسیرهایی مشخص و قابل پیگیری.",en:"Technical, educational and athletic goals arranged into clear, trackable paths."},
    image:"/assets/goals.png",accent:"orange",
    lead:{fa:"هدف اصلی من تبدیل یادگیری به نتیجهٔ واقعی است؛ چه در زمین بسکتبال و چه در ساخت یک ربات کامل که بتواند تشخیص دهد، حرکت کند، جسم را بردارد و آن را تحویل دهد.",en:"My main goal is to turn learning into real outcomes — on the basketball court and in building a complete robot that can detect, move, pick and deliver."},
    facts:{fa:["تکمیل ربات مکانوم","ساخت بازوی قابل‌اعتماد","تشخیص رنگ پایدار","پیشرفت مداوم در دفاع بسکتبال"],en:["Complete the mecanum robot","Build a reliable robotic arm","Achieve stable color detection","Keep improving basketball defense"]},
    groups:[
      group("هدف فنی","Technical goal",["یکپارچه‌کردن شاسی، موتورها، دوربین و بازو","تشخیص جسم رنگی و نزدیک‌شدن دقیق به آن","برداشتن جسم بدون افتادن یا آسیب","انتقال و رهاسازی در سبد مشخص"],["Integrate chassis, motors, camera and arm","Detect and approach the colored object accurately","Pick it without dropping or damage","Carry and release it into the correct basket"]),
      group("هدف آموزشی","Educational goal",["ارائهٔ پروژه‌ای قابل‌فهم برای کلاس","مستندسازی قطعات، الگوریتم و مراحل ساخت","نشان‌دادن ارتباط مکانیک، الکترونیک و کد","تبدیل خطاها به تجربهٔ قابل توضیح"],["Present a clear classroom project","Document parts, algorithm and build stages","Show how mechanics, electronics and code connect","Turn errors into explainable learning"]),
      group("هدف برنامه‌نویسی","Programming goal",["نوشتن کد مرتب و بخش‌بندی‌شده","هماهنگ‌سازی کنترل حرکت، بینایی و بازو","پایداری بیشتر ارتباط بی‌سیم و وب‌سرور","ساخت تست‌های جدا برای هر ماژول"],["Write clean, modular code","Coordinate motion, vision and arm control","Improve wireless and web-server stability","Create isolated tests for every module"]),
      group("هدف ورزشی","Athletic goal",["قوی‌ترشدن در دفاع فردی و تیمی","بهبود سرعت واکنش و تصمیم‌گیری","حفظ استمرار در تمرین","اندازه‌گیری پیشرفت با عملکرد واقعی"],["Strengthen individual and team defense","Improve reaction speed and decisions","Stay consistent in training","Measure progress through real performance"])
    ]
  },
  {
    id:"achievements",number:"08",kicker:{fa:"موفقیت‌ها",en:"Achievements"},
    title:{fa:"پیشرفت‌هایی که از ساختن می‌آیند",en:"Progress earned by building"},
    summary:{fa:"دستاوردهای واقعی پروژه و یادگیری؛ دقیق، قابل توضیح و بدون بزرگ‌نمایی.",en:"Real project and learning milestones — accurate, explainable and never exaggerated."},
    image:"/assets/achievements.png",accent:"gold",
    lead:{fa:"موفقیت‌های این صفحه مدال یا عدد ساختگی نیستند؛ مرحله‌هایی واقعی‌اند که پروژه را از یک ایده به طرح مهندسی، انتخاب قطعه، کدنویسی و آزمون رسانده‌اند.",en:"The achievements here are not invented medals or numbers; they are real steps that moved the project from an idea into engineering design, component selection, code and testing."},
    facts:{fa:["تبدیل ایده به معماری کامل ربات","طراحی شاسی و بازوی اولیه","راه‌اندازی و آزمون ماژول‌های گوناگون","ساخت برنامهٔ مرحله‌ای برای پروژهٔ مدرسه"],en:["Turned an idea into a full robot architecture","Designed the initial chassis and arm","Set up and tested multiple modules","Built a phased plan for the school project"]},
    groups:[
      group("از ایده تا طراحی","Idea to design",["تعریف مأموریت دقیق: تشخیص، برداشتن و انتقال","انتخاب حرکت همه‌جهته با چهار چرخ مکانوم","طراحی بدنهٔ دوطبقه و جانمایی داخلی","تعریف ساختار بازو و موتور بخش پایینی"],["Defined the mission: detect, pick and transfer","Selected four-wheel omnidirectional mecanum drive","Designed a two-level body and internal layout","Defined the arm structure and lower motor"]),
      group("الکترونیک و کنترل","Electronics & control",["انتخاب Arduino، ESP32-CAM و ماژول بی‌سیم","آزمایش کنترل سروو با جوی‌استیک","بررسی دوربین و وب‌سرور تصویر","کار با حسگرهای حرکتی و ماژول‌های جانبی"],["Selected Arduino, ESP32-CAM and wireless hardware","Tested joystick control of a servo","Worked on camera and live-view server","Used motion sensors and supporting modules"]),
      group("حل خطا","Debugging milestones",["عبور از خطاهای نصب پلتفرم و کتابخانه","انجام آپلود و بررسی خروجی سریال","تشخیص تفاوت خطای کدنویسی، اتصال و شبکه","ساخت عادت تست مرحله‌ای به‌جای اتصال یک‌باره"],["Worked through platform and library errors","Completed uploads and inspected serial output","Separated code, wiring and network failures","Adopted staged testing instead of all-at-once integration"]),
      group("قانون ثبت موفقیت","Achievement rule",["فقط نتیجه‌های واقعی در این صفحه ثبت می‌شوند","آمار ورزشی بدون اندازه‌گیری نمایش داده نمی‌شود","عنوان مسابقه یا رتبهٔ تأییدنشده ساخته نمی‌شود","هر موفقیت آینده همراه با توضیح قابل بررسی اضافه می‌شود"],["Only real results are recorded here","Sports statistics are not shown without measurement","No unverified competition or ranking is invented","Future milestones will include verifiable context"])
    ]
  },
  {
    id:"projects",number:"09",kicker:{fa:"پروژه‌ها",en:"Projects"},
    title:{fa:"ربات مکانوم تشخیص رنگ",en:"Color-detecting mecanum robot"},
    summary:{fa:"پروژهٔ اصلی آرمان: حرکت همه‌جهته، دید ماشینی، بازوی رباتیک و انتقال جسم.",en:"Arman’s main project: omnidirectional motion, machine vision, a robotic arm and object transfer."},
    image:"/assets/projects.png",accent:"green",
    lead:{fa:"یک ربات متحرک با چهار چرخ مکانوم که جسم با رنگ مشخص را پیدا می‌کند، به سمت آن حرکت می‌کند، آن را با بازوی رباتیک برمی‌دارد و به سبد مخصوص منتقل می‌کند.",en:"A mobile robot with four mecanum wheels that finds a target-colored object, moves toward it, picks it with a robotic arm and carries it to a dedicated basket."},
    facts:{fa:["ابعاد هدف بدنه: حدود ۲۰۰ تا ۲۵۰ میلی‌متر","ارتفاع کلی هدف: حدود ۳۶۰ میلی‌متر","چهار چرخ مکانوم ۱۰۰ میلی‌متری","شاسی دوطبقه با تمام قطعات درون بدنه"],en:["Target body width/depth: about 200–250 mm","Target overall height: about 360 mm","Four 100 mm mecanum wheels","Two-level chassis with components housed inside"]},
    groups:[
      group("مأموریت ربات","Robot mission",["جست‌وجوی محیط و دریافت تصویر","تشخیص جسم با رنگ هدف","حرکت همه‌جهته و نزدیک‌شدن به جسم","گرفتن، حمل و رهاسازی در سبد مخصوص"],["Scan the environment and capture video","Detect the target-colored object","Move omnidirectionally and approach it","Pick, carry and release it in the dedicated basket"]),
      group("مکانیک","Mechanics",["شاسی دوطبقه با نقشهٔ سوراخ‌های نصب","چهار چرخ مکانوم با قطر ۱۰۰ میلی‌متر","بازوی رباتیک و گیره برای گرفتن جسم","استپر در قسمت پایین بازو","قرارگیری قطعات الکترونیکی داخل بدنه"],["Two-level chassis with a mounting-hole plan","Four 100 mm mecanum wheels","Robotic arm and gripper for object pickup","Stepper motor in the lower arm","Electronics located inside the body"]),
      group("الکترونیک","Electronics",["Arduino Mega یا Nano برای کنترل بخش‌ها","ESP32-CAM برای تصویر و تشخیص رنگ","NRF24L01 آنتن‌دار برای ارتباط بی‌سیم","MPU6050 برای دادهٔ حرکتی","دو حسگر در جلوی چپ و راست ربات"],["Arduino Mega or Nano for subsystem control","ESP32-CAM for video and color detection","External-antenna NRF24L01 for wireless links","MPU6050 for motion data","Two sensors on the front-left and front-right"]),
      group("الگوریتم کلی","Core algorithm",["راه‌اندازی بردها، حسگرها، دوربین و موتورها","دریافت تصویر و بررسی رنگ هدف","محاسبهٔ جهت حرکت نسبت به جسم","حرکت و اصلاح مسیر با دادهٔ حسگرها","توقف، اجرای بازو و گرفتن جسم","حرکت به سبد، رهاسازی و آماده‌شدن برای چرخهٔ بعد"],["Initialize boards, sensors, camera and motors","Capture video and detect the target color","Estimate the movement direction toward the object","Move and correct the path from sensor data","Stop, run the arm and grasp the object","Travel to the basket, release and reset for the next cycle"]),
      group("وضعیت توسعه","Development status",["طرح کلی و معماری پروژه مشخص شده است","ابعاد، چرخ‌ها و ساختار شاسی انتخاب شده‌اند","ماژول‌های دوربین، بی‌سیم و سروو جداگانه آزمایش شده‌اند","یکپارچه‌سازی کامل حرکت، بینایی و بازو مرحلهٔ بعدی است"],["The overall design and architecture are defined","Dimensions, wheels and chassis structure are selected","Camera, wireless and servo modules have been tested separately","Full motion–vision–arm integration is the next stage"])
    ]
  },
  {
    id:"timeline",number:"10",kicker:{fa:"مسیر من",en:"Timeline"},
    title:{fa:"از ایده تا آزمون واقعی",en:"From an idea to real testing"},
    summary:{fa:"مسیر واقعی پروژه و یادگیری، مرحله‌به‌مرحله و بدون تاریخ یا رویداد ساختگی.",en:"The real project journey, step by step and without invented dates or events."},
    image:"/assets/timeline.png",accent:"green",
    lead:{fa:"این مسیر با ایدهٔ ساخت یک ربات مدرسه شروع شد و به تعریف مأموریت، طراحی مکانیکی، انتخاب قطعات، کدنویسی، تست ماژول‌ها و عیب‌یابی رسید. تاریخ‌ها تنها وقتی اضافه می‌شوند که دقیق و تأییدشده باشند.",en:"This journey began with a school-robot idea and developed through mission definition, mechanical design, component selection, coding, module tests and debugging. Dates are added only when exact and verified."},
    facts:{fa:["ایده و تعریف مأموریت","طراحی مکانیکی","انتخاب الکترونیک","کدنویسی و آزمون","یکپارچه‌سازی و ارائه"],en:["Idea and mission","Mechanical design","Electronics selection","Code and testing","Integration and presentation"]},
    groups:[
      group("مرحلهٔ ۱ — ایده","Stage 1 — Idea",["ساخت رباتی برای تشخیص یک رنگ مشخص","برداشتن جسم با بازو","انتقال جسم به سبد اختصاصی","انتخاب حرکت مکانوم برای آزادی حرکت بیشتر"],["Build a robot that detects a specific color","Pick the object with an arm","Carry it to a dedicated basket","Choose mecanum drive for greater movement freedom"]),
      group("مرحلهٔ ۲ — طراحی","Stage 2 — Design",["تعیین ابعاد کلی بدنه و ارتفاع ربات","طراحی شاسی دوطبقه و سوراخ‌های نصب","بررسی وزن بدنه و جانمایی قطعات","طراحی بازو، گیره و محل موتور استپر"],["Set body dimensions and overall height","Design a two-level chassis and mounting holes","Consider body weight and component placement","Design the arm, gripper and stepper location"]),
      group("مرحلهٔ ۳ — انتخاب و آزمون قطعات","Stage 3 — Components & tests",["انتخاب Arduino، دوربین و حسگرها","راه‌اندازی NRF24L01 و کنترل سروو","آپلود کدهای آزمایشی روی ESP32-CAM","بررسی تصویر زنده، پورت و خروجی سریال"],["Select Arduino, camera and sensors","Set up NRF24L01 and servo control","Upload test code to ESP32-CAM","Check live video, ports and serial output"]),
      group("مرحلهٔ ۴ — عیب‌یابی","Stage 4 — Debugging",["رفع خطاهای نصب و کتابخانه","بررسی اتصال دوربین و خطای 0x105","حل مشکلات شبکه، IP و وب‌سرور","تکرار تست‌ها پس از هر اصلاح"],["Resolve installation and library errors","Inspect camera wiring and error 0x105","Work through network, IP and web-server issues","Repeat tests after each correction"]),
      group("مرحلهٔ بعد","Next stage",["ساخت و مونتاژ نسخهٔ اولیهٔ مکانیکی","یکپارچه‌کردن حرکت، دوربین و بازو","کالیبره‌کردن تشخیص رنگ و فاصله","اجرای مأموریت کامل و آماده‌سازی ارائه"],["Build and assemble the mechanical prototype","Integrate motion, camera and arm","Calibrate color and distance detection","Run the full mission and prepare the presentation"])
    ]
  }
];

export const getSection = (id: string) => sections.find((item) => item.id === id);
