/* ===== LUXE Salon — interactions & i18n ===== */

/* ---------- Translations ---------- */
const I18N = {
  ar: {
    logo_sub:"صالون فاخر",
    nav_home:"الرئيسية", nav_about:"من نحن", nav_services:"الخدمات", nav_gallery:"المعرض",
    nav_reviews:"الآراء", nav_contact:"تواصل", nav_book:"احجز موعد",
    hero_eyebrow:"صالون فاخر · للنساء والرجال",
    hero_title:"الجمال يبدأ من هنا",
    hero_sub:"صالون فاخر للعناية بالشعر والتجميل للنساء والرجال بأحدث التقنيات وأفضل الخبراء.",
    hero_btn1:"احجز موعد الآن", hero_btn2:"تعرف على خدماتنا",
    mq1:"قصّ وتصفيف", mq2:"صبغة وبالياج", mq3:"كيراتين وبروتين", mq4:"حلاقة رجالية", mq5:"تسريحات العرائس", mq6:"عناية فاخرة",
    about_eyebrow:"من نحن", about_title:"تجربة فاخرة تليق بإطلالتك", about_badge:"سنوات خبرة",
    about_p1:"في <strong>LUXE</strong> نمزج بين الفن والاحتراف لنمنحك تجربة عناية استثنائية. فريقنا من أمهر الخبراء يستخدم أرقى المنتجات العالمية وأحدث التقنيات ليصمّم لك إطلالة تعكس شخصيتك الفريدة.",
    about_p2:"نؤمن أن كل عميل يستحق اهتماماً شخصياً وأجواءً تبعث على الاسترخاء والفخامة، من لحظة دخولك وحتى آخر لمسة.",
    about_f1:"فريق محترف ومتخصص", about_f2:"منتجات عالمية فاخرة", about_f3:"تصميم إطلالة شخصية", about_f4:"أجواء راقية ومريحة",
    stat1:"عميل سعيد", stat2:"خبير محترف", stat3:"سنوات خبرة", stat4:"خدمة احترافية",
    serv_eyebrow:"خدماتنا", serv_title:"باقة متكاملة للنساء والرجال", serv_lead:"خدمات مصمّمة بعناية لتمنحك أفضل النتائج بلمسة من الفخامة.",
    serv_women:"قسم النساء", serv_men:"قسم الرجال",
    w1_t:"قصّ وتصفيف", w1_d:"قصّات عصرية وتصفيف احترافي يبرز جمال ملامحك.",
    w2_t:"صبغة الشعر", w2_d:"ألوان عالمية فاخرة تدوم طويلاً مع عناية كاملة.",
    w3_t:"بالياج وهايلايت", w3_d:"تدرّجات طبيعية ولمسات مضيئة تمنحك إطلالة ساحرة.",
    w4_t:"علاجات الشعر", w4_d:"جلسات ترطيب وتغذية عميقة لشعر صحي ولامع.",
    w5_t:"تسريحات العرائس", w5_d:"تسريحات راقية ليومك المميز بأدق التفاصيل.",
    w6_t:"كيراتين وبروتين", w6_d:"فرد وتنعيم يمنح شعرك انسيابية ولمعاناً يدوم.",
    m1_t:"قصّات عصرية", m1_d:"قصّات رجالية حديثة بأيدي أمهر الحلاقين.",
    m2_t:"تصفيف اللحية", m2_d:"تشكيل وتهذيب اللحية لإطلالة أنيقة ومرتّبة.",
    m3_t:"خدمات الحلاقة", m3_d:"حلاقة كلاسيكية ناعمة بمنتجات فاخرة.",
    m4_t:"علاجات الشعر", m4_d:"عناية متخصصة لتقوية الشعر والحفاظ على صحته.",
    m5_t:"عناية فاخرة", m5_d:"باقات عناية متكاملة تمنحك تجربة ملكية.",
    m6_t:"تصفيف وتنعيم", m6_d:"تصفيف احترافي يمنحك إطلالة واثقة كل يوم.",
    gal_eyebrow:"المعرض", gal_title:"قبل وبعد · أعمالنا", gal_lead:"لمحة من تحوّلات وإبداعات فريقنا.",
    gal_1:"تلوين وتصفيف", gal_2:"حلاقة رجالية", gal_3:"عناية بالشعر", gal_4:"تسريحة مناسبات", gal_5:"تهذيب اللحية", gal_6:"بالياج فاخر",
    rev_eyebrow:"آراء عملائنا", rev_title:"ماذا يقول عملاؤنا",
    rev1_q:"أفضل صالون زرته، خدمة احترافية ونتائج مذهلة فاقت توقعاتي بكل المقاييس.", rev1_n:"سارة العتيبي", rev1_r:"عميلة",
    rev2_q:"فريق رائع وأجواء فاخرة تجعل التجربة مميزة في كل مرة. أنصح به بشدة.", rev2_n:"خالد المنصور", rev2_r:"عميل",
    rev3_q:"اهتمام بأدق التفاصيل ومنتجات فاخرة، شعرت بأنني محط اهتمامهم الكامل.", rev3_n:"نورة الحربي", rev3_r:"عميلة",
    book_eyebrow:"احجز موعدك", book_title:"احجز موعدك الآن واستمتع بإطلالة استثنائية", book_lead:"املأ النموذج وسيتواصل معك فريقنا لتأكيد الموعد في أقرب وقت.",
    book_p1:"تأكيد سريع خلال دقائق", book_p2:"اختيار الخبير المناسب لك", book_p3:"مرونة في المواعيد",
    f_name:"الاسم الكامل", f_phone:"رقم الهاتف", f_service:"الخدمة", f_date:"التاريخ المفضل", f_time:"الوقت المفضل", f_notes:"ملاحظات", f_submit:"تأكيد الحجز",
    ph_name:"اكتب اسمك", ph_phone:"05xxxxxxxx", ph_notes:"أي تفاصيل إضافية...",
    opt_choose:"اختر الخدمة", opt_women:"قسم النساء", opt_men:"قسم الرجال", opt_color:"صبغة / بالياج", opt_keratin:"كيراتين / بروتين", opt_bridal:"تسريحة عروس", opt_beard:"حلاقة / لحية",
    f_success:"تم استلام طلبك! سنتواصل معك قريباً لتأكيد الموعد ✦",
    con_eyebrow:"تواصل معنا", con_title:"زورونا أو تواصلوا معنا",
    con_addr_t:"الموقع", con_addr:"مركز هالوندا · Hallundavägen 1, 145 68 Norsborg",
    con_phone_t:"الهاتف", con_hours_t:"ساعات العمل",
    day_mon:"الاثنين", day_tue:"الثلاثاء", day_wed:"الأربعاء", day_thu:"الخميس", day_fri:"الجمعة", day_sat:"السبت", day_sun:"الأحد",
    con_wa:"واتساب", con_ig:"إنستغرام", con_fb:"فيسبوك", con_tt:"تيك توك",
    footer_tag:"الجمال يبدأ من هنا.", footer_rights:"جميع الحقوق محفوظة"
  },
  en: {
    logo_sub:"Luxury Salon",
    nav_home:"Home", nav_about:"About", nav_services:"Services", nav_gallery:"Gallery",
    nav_reviews:"Reviews", nav_contact:"Contact", nav_book:"Book Now",
    hero_eyebrow:"Luxury Salon · Women & Men",
    hero_title:"Beauty Begins Here",
    hero_sub:"A premium hair & beauty salon for women and men, with the latest techniques and the finest experts.",
    hero_btn1:"Book an Appointment", hero_btn2:"Explore Our Services",
    mq1:"Cut & Styling", mq2:"Color & Balayage", mq3:"Keratin & Protein", mq4:"Men's Grooming", mq5:"Bridal Styling", mq6:"Premium Care",
    about_eyebrow:"About Us", about_title:"A Luxury Experience Worthy of You", about_badge:"Years Experience",
    about_p1:"At <strong>LUXE</strong> we blend art and craft to deliver an exceptional care experience. Our team of master experts uses the finest international products and the latest techniques to design a look that reflects your unique personality.",
    about_p2:"We believe every client deserves personal attention and an atmosphere of relaxation and luxury — from the moment you arrive to the very last touch.",
    about_f1:"Professional, specialized team", about_f2:"Premium global products", about_f3:"Personalized styling", about_f4:"Elegant, relaxing ambiance",
    stat1:"Happy Clients", stat2:"Professional Stylists", stat3:"Years Experience", stat4:"Expert Services",
    serv_eyebrow:"Our Services", serv_title:"A Complete Suite for Women & Men", serv_lead:"Carefully crafted services that deliver the best results with a touch of luxury.",
    serv_women:"Women's Services", serv_men:"Men's Services",
    w1_t:"Haircut & Styling", w1_d:"Modern cuts and professional styling that highlight your features.",
    w2_t:"Hair Coloring", w2_d:"Premium global colors that last, with complete care.",
    w3_t:"Balayage & Highlights", w3_d:"Natural gradients and luminous touches for a stunning look.",
    w4_t:"Hair Treatments", w4_d:"Deep hydration and nourishment for healthy, glossy hair.",
    w5_t:"Bridal Hairstyles", w5_d:"Elegant styling for your special day, down to every detail.",
    w6_t:"Keratin & Protein", w6_d:"Smoothing that gives your hair lasting flow and shine.",
    m1_t:"Modern Haircuts", m1_d:"Contemporary men's cuts by our most skilled barbers.",
    m2_t:"Beard Styling", m2_d:"Shaping and grooming for a sharp, refined look.",
    m3_t:"Shaving Services", m3_d:"Smooth, classic shaves with premium products.",
    m4_t:"Hair Treatments", m4_d:"Specialized care to strengthen and protect your hair.",
    m5_t:"Premium Grooming", m5_d:"Complete grooming packages for a royal experience.",
    m6_t:"Styling & Smoothing", m6_d:"Professional styling for a confident look every day.",
    gal_eyebrow:"Gallery", gal_title:"Before & After · Our Work", gal_lead:"A glimpse of our team's transformations and creations.",
    gal_1:"Color & Styling", gal_2:"Men's Grooming", gal_3:"Hair Care", gal_4:"Event Styling", gal_5:"Beard Grooming", gal_6:"Premium Balayage",
    rev_eyebrow:"Testimonials", rev_title:"What Our Clients Say",
    rev1_q:"The best salon I've visited — professional service and stunning results beyond all expectations.", rev1_n:"Sara Al-Otaibi", rev1_r:"Client",
    rev2_q:"A wonderful team and a luxurious atmosphere that make every visit special. Highly recommended.", rev2_n:"Khalid Al-Mansour", rev2_r:"Client",
    rev3_q:"Attention to the finest details and premium products — I felt like their full focus.", rev3_n:"Noura Al-Harbi", rev3_r:"Client",
    book_eyebrow:"Book Now", book_title:"Book your appointment now and enjoy an exceptional look", book_lead:"Fill out the form and our team will reach out to confirm your appointment shortly.",
    book_p1:"Fast confirmation within minutes", book_p2:"Choose the right expert for you", book_p3:"Flexible scheduling",
    f_name:"Full Name", f_phone:"Phone Number", f_service:"Service", f_date:"Preferred Date", f_time:"Preferred Time", f_notes:"Notes", f_submit:"Confirm Booking",
    ph_name:"Enter your name", ph_phone:"05xxxxxxxx", ph_notes:"Any additional details...",
    opt_choose:"Choose a service", opt_women:"Women's Services", opt_men:"Men's Services", opt_color:"Color / Balayage", opt_keratin:"Keratin / Protein", opt_bridal:"Bridal Styling", opt_beard:"Shave / Beard",
    f_success:"Your request has been received! We'll contact you soon to confirm ✦",
    con_eyebrow:"Contact Us", con_title:"Visit or Reach Out to Us",
    con_addr_t:"Location", con_addr:"Hallunda Centre · Hallundavägen 1, 145 68 Norsborg",
    con_phone_t:"Phone", con_hours_t:"Working Hours",
    day_mon:"Monday", day_tue:"Tuesday", day_wed:"Wednesday", day_thu:"Thursday", day_fri:"Friday", day_sat:"Saturday", day_sun:"Sunday",
    con_wa:"WhatsApp", con_ig:"Instagram", con_fb:"Facebook", con_tt:"TikTok",
    footer_tag:"Beauty begins here.", footer_rights:"All rights reserved"
  },
  sv: {
    logo_sub:"Lyxig salong",
    nav_home:"Hem", nav_about:"Om oss", nav_services:"Tjänster", nav_gallery:"Galleri",
    nav_reviews:"Omdömen", nav_contact:"Kontakt", nav_book:"Boka tid",
    hero_eyebrow:"Lyxig salong · Damer & Herrar",
    hero_title:"Skönhet börjar här",
    hero_sub:"En exklusiv hår- och skönhetssalong för damer och herrar, med den senaste tekniken och de bästa experterna.",
    hero_btn1:"Boka en tid", hero_btn2:"Utforska våra tjänster",
    mq1:"Klippning & styling", mq2:"Färg & balayage", mq3:"Keratin & protein", mq4:"Herrstyling", mq5:"Bruduppsättning", mq6:"Exklusiv vård",
    about_eyebrow:"Om oss", about_title:"En lyxupplevelse värdig dig", about_badge:"Års erfarenhet",
    about_p1:"På <strong>Hårstudio</strong> förenar vi konst och hantverk för att ge dig en exceptionell upplevelse. Vårt team av mästare använder de finaste internationella produkterna och den senaste tekniken för att skapa en look som speglar din unika personlighet.",
    about_p2:"Vi tror att varje kund förtjänar personlig omtanke och en atmosfär av avkoppling och lyx — från det ögonblick du kommer in tills den allra sista detaljen.",
    about_f1:"Professionellt, specialiserat team", about_f2:"Exklusiva globala produkter", about_f3:"Personlig styling", about_f4:"Elegant, avkopplande miljö",
    stat1:"Nöjda kunder", stat2:"Professionella stylister", stat3:"Års erfarenhet", stat4:"Experttjänster",
    serv_eyebrow:"Våra tjänster", serv_title:"Ett komplett utbud för damer & herrar", serv_lead:"Noggrant utformade tjänster som ger bästa resultat med en touch av lyx.",
    serv_women:"Damtjänster", serv_men:"Herrtjänster",
    w1_t:"Klippning & styling", w1_d:"Moderna klippningar och professionell styling som framhäver dina drag.",
    w2_t:"Hårfärgning", w2_d:"Exklusiva globala färger som håller länge, med fullständig vård.",
    w3_t:"Balayage & slingor", w3_d:"Naturliga övergångar och lysande detaljer för en bedårande look.",
    w4_t:"Hårbehandlingar", w4_d:"Djup återfuktning och näring för friskt, glansigt hår.",
    w5_t:"Bruduppsättning", w5_d:"Elegant styling för din stora dag, in i minsta detalj.",
    w6_t:"Keratin & protein", w6_d:"Utslätning som ger ditt hår bestående flöde och glans.",
    m1_t:"Moderna klippningar", m1_d:"Moderna herrklippningar av våra skickligaste barberare.",
    m2_t:"Skäggstyling", m2_d:"Formning och trimning för en skarp, stilren look.",
    m3_t:"Rakningstjänster", m3_d:"Mjuka, klassiska rakningar med exklusiva produkter.",
    m4_t:"Hårbehandlingar", m4_d:"Specialiserad vård som stärker och skyddar ditt hår.",
    m5_t:"Exklusiv grooming", m5_d:"Kompletta grooming-paket för en kunglig upplevelse.",
    m6_t:"Styling & utslätning", m6_d:"Professionell styling för en självsäker look varje dag.",
    gal_eyebrow:"Galleri", gal_title:"Före & efter · Vårt arbete", gal_lead:"En glimt av vårt teams förvandlingar och kreationer.",
    gal_1:"Färg & styling", gal_2:"Herrgrooming", gal_3:"Hårvård", gal_4:"Eventstyling", gal_5:"Skäggvård", gal_6:"Exklusiv balayage",
    rev_eyebrow:"Omdömen", rev_title:"Vad våra kunder säger",
    rev1_q:"Den bästa salongen jag besökt — professionell service och fantastiska resultat över all förväntan.", rev1_n:"Sara Al-Otaibi", rev1_r:"Kund",
    rev2_q:"Ett underbart team och en lyxig atmosfär som gör varje besök speciellt. Varmt rekommenderat.", rev2_n:"Khalid Al-Mansour", rev2_r:"Kund",
    rev3_q:"Uppmärksamhet på minsta detalj och exklusiva produkter — jag kände mig som deras fulla fokus.", rev3_n:"Noura Al-Harbi", rev3_r:"Kund",
    book_eyebrow:"Boka tid", book_title:"Boka din tid nu och njut av en exceptionell look", book_lead:"Fyll i formuläret så hör vårt team av sig för att bekräfta din tid inom kort.",
    book_p1:"Snabb bekräftelse inom minuter", book_p2:"Välj rätt expert för dig", book_p3:"Flexibla tider",
    f_name:"Fullständigt namn", f_phone:"Telefonnummer", f_service:"Tjänst", f_date:"Önskat datum", f_time:"Önskad tid", f_notes:"Anteckningar", f_submit:"Bekräfta bokning",
    ph_name:"Skriv ditt namn", ph_phone:"07x-xxx xx xx", ph_notes:"Eventuella ytterligare detaljer...",
    opt_choose:"Välj en tjänst", opt_women:"Damtjänster", opt_men:"Herrtjänster", opt_color:"Färg / balayage", opt_keratin:"Keratin / protein", opt_bridal:"Bruduppsättning", opt_beard:"Rakning / skägg",
    f_success:"Din förfrågan har mottagits! Vi kontaktar dig snart för att bekräfta ✦",
    con_eyebrow:"Kontakta oss", con_title:"Besök oss eller hör av dig",
    con_addr_t:"Plats", con_addr:"Hallunda Centrum · Hallundavägen 1, 145 68 Norsborg",
    con_phone_t:"Telefon", con_hours_t:"Öppettider",
    day_mon:"Måndag", day_tue:"Tisdag", day_wed:"Onsdag", day_thu:"Torsdag", day_fri:"Fredag", day_sat:"Lördag", day_sun:"Söndag",
    con_wa:"WhatsApp", con_ig:"Instagram", con_fb:"Facebook", con_tt:"TikTok",
    footer_tag:"Skönhet börjar här.", footer_rights:"Alla rättigheter förbehållna"
  }
};

const LANG_ORDER = ["ar", "en", "sv"];
const LANG_NAMES = { ar:"العربية", en:"English", sv:"Svenska" };

let currentLang = "ar";

function applyLang(lang){
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("lang-en", lang !== "ar");

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if(dict[k] !== undefined) el.innerHTML = dict[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k = el.getAttribute("data-i18n-ph");
    if(dict[k] !== undefined) el.setAttribute("placeholder", dict[k]);
  });

  const current = document.getElementById("langCurrent");
  if(current) current.textContent = LANG_NAMES[lang];
  document.querySelectorAll("#langDropdown button").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try{ localStorage.setItem("luxe-lang", lang); }catch(e){}
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  // language
  let saved = "ar";
  try{ saved = localStorage.getItem("luxe-lang") || "ar"; }catch(e){}
  if(!LANG_ORDER.includes(saved)) saved = "ar";
  applyLang(saved);

  const langMenu = document.getElementById("langMenu");
  document.getElementById("langToggle").addEventListener("click", (e)=>{
    e.stopPropagation();
    const open = langMenu.classList.toggle("open");
    document.getElementById("langToggle").setAttribute("aria-expanded", open);
  });
  document.querySelectorAll("#langDropdown button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      applyLang(btn.dataset.lang);
      langMenu.classList.remove("open");
      document.getElementById("langToggle").setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", (e)=>{
    if(!langMenu.contains(e.target)){
      langMenu.classList.remove("open");
      document.getElementById("langToggle").setAttribute("aria-expanded", "false");
    }
  });

  // year
  document.getElementById("year").textContent = new Date().getFullYear();

  // navbar scroll + progress
  const navbar = document.getElementById("navbar");
  const progress = document.getElementById("scrollProgress");
  const onScroll = ()=>{
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (window.scrollY / h * 100) + "%";
  };
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();

  // mobile menu
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", ()=> navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a=> a.addEventListener("click", ()=> navLinks.classList.remove("open")));

  // service tabs
  document.querySelectorAll(".serv-tab").forEach(tab=>{
    tab.addEventListener("click", ()=>{
      document.querySelectorAll(".serv-tab").forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
      const isWomen = tab.dataset.tab === "women";
      document.getElementById("servWomen").classList.toggle("hidden", !isWomen);
      document.getElementById("servMen").classList.toggle("hidden", isWomen);
      // re-reveal newly shown cards
      requestAnimationFrame(()=>revealVisible());
    });
  });

  // hero slider
  initHeroSlider();

  // reveal on scroll
  initReveal();

  // booking form
  const form = document.getElementById("bookingForm");
  const success = document.getElementById("formSuccess");
  form.addEventListener("submit", e=>{
    e.preventDefault();
    if(!form.checkValidity()){ form.reportValidity(); return; }
    success.classList.add("show");
    form.reset();
    setTimeout(()=> success.classList.remove("show"), 6000);
  });
});

/* ---------- Hero slider ---------- */
function initHeroSlider(){
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dotsWrap = document.getElementById("heroDots");
  let i = 0;
  slides.forEach((_, idx)=>{
    const b = document.createElement("button");
    if(idx===0) b.classList.add("active");
    b.addEventListener("click", ()=> go(idx));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);
  function go(n){
    slides[i].classList.remove("active"); dots[i].classList.remove("active");
    i = (n + slides.length) % slides.length;
    slides[i].classList.add("active"); dots[i].classList.add("active");
  }
  setInterval(()=> go(i+1), 5500);
}

/* ---------- Reveal ---------- */
let revealObserver;
function initReveal(){
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add("in"); revealObserver.unobserve(en.target); }
    });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=> revealObserver.observe(el));

  // count up
  const counters = document.querySelectorAll(".count");
  const cObs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ countUp(en.target); cObs.unobserve(en.target); }
    });
  }, {threshold:.5});
  counters.forEach(c=> cObs.observe(c));
}
function revealVisible(){
  document.querySelectorAll(".reveal:not(.in)").forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
  });
}
function countUp(el){
  const target = +el.dataset.target;
  const dur = 1800; const start = performance.now();
  function tick(now){
    const p = Math.min((now-start)/dur, 1);
    const eased = 1 - Math.pow(1-p, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if(p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(tick);
}
