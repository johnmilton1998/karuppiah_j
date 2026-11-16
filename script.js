/* Dynamic content and interactions for J. Karuppiah's portfolio.
   Update the data below to maintain the portfolio without editing the HTML. */
const portfolioData = {
  research: [
    ["⌬","Nanostructured catalysts","Preparation and study of structured and supported catalytic materials."],
    ["◉","Dry / steam reforming catalysts","Catalyst systems for reforming reactions and synthesis-gas production."],
    ["✧","Nonthermal plasma (NTP)","Plasma-assisted processes for removal and oxidation of pollutants."],
    ["◌","Heterogeneous catalysis","Catalytic materials and reaction systems for environmental applications."],
    ["◎","SCR of N₂O","Selective catalytic reduction and decomposition of nitrous oxide."],
    ["↗","Hydrogen production & kinetics","Hydrogen-related processes, syngas production and chemical kinetics."]
  ],
  education: [
    {degree:"Ph.D. — Chemistry",institution:"National Institute of Technology Tiruchirappalli, India",university:"National Institute of Technology Tiruchirappalli",year:"2009–2012"},
    {degree:"M.Sc. — Chemistry",institution:"Saraswathi Narayanan College, Madurai",university:"Madurai Kamaraj University",year:"2005–2007"},
    {degree:"B.Sc. — Chemistry",institution:"Vivekananda College, Madurai",university:"Madurai Kamaraj University",year:"2001–2004"}
  ],
  experience: [
    {date:"01.07.2013 – 16.12.2015",role:"Postdoctoral Researcher",institution:"Jeju National University, South Korea",supervisor:"Prof. Young Sun Mok",detail:"Research on syngas production from dry reforming of propane over Ni-based catalysts."},
    {date:"28.08.2012 – 06.06.2013",role:"Research Associate",institution:"Indian Institute of Technology Hyderabad, India",supervisor:"Dr. Ch. Subrahmanyam",detail:"Research associate position in chemistry and plasma-assisted catalytic research."},
    {date:"28.05.2008 – 13.11.2008",role:"Junior Research Fellow",institution:"CSIR–Central Electrochemical Research Institute, India",supervisor:"Dr. M. Paramasivam",detail:"Junior Research Fellow appointment recorded in the supplied CV."}
  ],
  publications: [
    {title:"Plasma Catalytic Removal of p-Xylene from Air Stream Using γ-Al₂O₃ Supported Manganese Catalyst",authors:"M.S.P. Sudhakaran, Hung Quang Trinh, J. Karuppiah, Md. Mokter Hossian, Young Sun Mok",journal:"Topics in Catalysis",year:2017,details:"DOI: 10.1007/s11244-017-0759-3."},
    {title:"Production of synthesis gas from dry reforming of propane with carbon dioxide over ceria-promoted nickel foam catalysts",authors:"J. Karuppiah, E. Linga Reddy, M.S.P. Sudhakaran, S.B. Lee",journal:"Renewable Energy and Power Quality Journal, 1(14), 742–747",year:2016,details:""},
    {title:"Anodized Aluminum Oxide Supported NiO-CeO₂ Catalyst for Dry Reforming of Propane",authors:"J. Karuppiah, E. Linga Reddy, Young Sun Mok",journal:"Catalysts, 6(10), 154",year:2016,details:""},
    {title:"Catalytic Non-Thermal Plasma Reactor for the Decomposition of p-Xylene Over MnOx and CoOx Supported on Anodized Aluminum Oxide",authors:"M.S.P. Sudhakaran, J. Karuppiah, E. Linga Reddy, M. Sanjeeva Gandhi, Quang Hung Trinh, Young Sun Mok",journal:"Jacobs Journal of Environmental Sciences, 2(2), 015",year:2016,details:""},
    {title:"Syngas production from dry reforming of propane over Ni/γ-Al₂O₃ and CeO₂-Ni/γ-Al₂O₃ catalysts",authors:"J. Karuppiah, Young Sun Mok",journal:"International Journal of Hydrogen Energy, 39, 16329–16338",year:2014,details:""},
    {title:"Steam reforming of methanol over copper loaded anodized aluminum oxide (AAO) prepared through electrodepositing",authors:"E. Linga Reddy, J. Karuppiah, H.C. Lee, D.H. Kim",journal:"Journal of Power Sources, 268, 88–95",year:2014,details:""},
    {title:"Catalytic nonthermal plasma reactor for the abatement of low concentrations of benzene",authors:"J. Karuppiah, E. Linga Reddy, P. Manoj Kumar Reddy, B. Ramaraju, Ch. Subrahmanyam",journal:"International Journal of Environmental Science and Technology, 11, 311–318",year:2014,details:""},
    {title:"Degradation and Mineralization of methylene blue by dielectric barrier discharge non thermal plasma reactor",authors:"P. Manoj Kumar Reddy, B. Rama Raju, J. Karuppiah, E. Linga Reddy, Ch. Subrahmanyam",journal:"Chemical Engineering Journal, 217, 141–147",year:2013,details:""},
    {title:"Catalytic non-thermal plasma reactor for decomposition of dilute chlorobenzene",authors:"J. Karuppiah, P. Manoj Kumar Reddy, E. Linga Reddy, Ch. Subrahmanyam",journal:"Plasma Processes and Polymers, 10(12), 1074–1080",year:2013,details:""},
    {title:"Catalytic packed bed Nonthermal plasma reactor for the extraction of hydrogen from hydrogen sulfide",authors:"E. Linga Reddy, J. Karuppiah, V.M. Biju, Ch. Subrahmanyam",journal:"International Journal of Energy Research, 37(11), 1280–1286",year:2013,details:""},
    {title:"Kinetics of hydrogen sulfide decomposition in a DBD plasma reactor operated at high temperature",authors:"E. Linga Reddy, J. Karuppiah, Ch. Subrahmanyam",journal:"Journal of Energy Chemistry, 22, 382–386",year:2013,details:""},
    {title:"Facile Synthesis of Au/CeO₂ Catalyst for Low Temperature CO Oxidation",authors:"S. Mahammadunnisa, P. Reddy, J. Karuppiah, C. Subrahmanyam",journal:"Advanced Chemistry Letters, 1(3), 264–271",year:2013,details:""},
    {title:"Abatement of mixture of volatile organic compounds (VOCs) in a catalytic non-thermal plasma reactor",authors:"J. Karuppiah, E. Linga Reddy, P. Manoj Kumar Reddy, B. Ramaraju, L. Karvembu, Ch. Subrahmanyam",journal:"Journal of Hazardous Materials, 237–238, 283–289",year:2012,details:""},
    {title:"The catalytic effect of MnOx and CoOx on the decomposition of nitrobenzene in a non-thermal plasma reactor",authors:"J. Karuppiah, L. Karvembu, Ch. Subrahmanyam",journal:"Chemical Engineering Journal, 180, 39–45",year:2012,details:""},
    {title:"Nonthermal plasma assisted photocatalytic oxidation of dilute benzene",authors:"J. Karuppiah, E. Linga Reddy, L. Sivachandiran, R. Karvembu, Ch. Subrahmanyam",journal:"Journal of Chemical Sciences, 124, 841–845",year:2012,details:""},
    {title:"DBD plasma reactor for oxidative decomposition of Chlorobenzene",authors:"L. Sivachandiran, J. Karuppiah, Ch. Subrahmanyam",journal:"International Journal of Chemical Reactor Engineering, 10, 1–14",year:2012,details:""},
    {title:"Catalytic non-thermal plasma reactor for the decomposition of a mixture of volatile organic compounds",authors:"Rama Raju, E. Linga Reddy, J. Karuppiah, P. Manoj Kumar Reddy, Ch. Subrahmanyam",journal:"Journal of Chemical Sciences, 124(4), 841–845",year:2012,details:""},
    {title:"Removal of mixture of VOCs by non-thermal plasma",authors:"B. Ramaraju, J. Karuppiah, E. Linga Reddy, P. M. Reddy, Ch. Subrahmanyam",journal:"Composite Interfaces, 19(3–4), 271–277",year:2012,details:""},
    {title:"Kinetics of the decomposition of hydrogen sulfide in a dielectric barrier discharge reactor",authors:"E. Linga Reddy, J. Karuppiah, A. Renken, L. Kiwi-Minsker, Ch. Subrahmanyam",journal:"Chemical Engineering & Technology, 35(11), 2030–2034",year:2012,details:""},
    {title:"Gold supported calcium deficient hydroxyapatite for room temperature CO oxidation",authors:"E. Linga Reddy, A. Prabhakarn, J. Karuppiah, N. Ramesh Babu, Ch. Subrahmanyam",journal:"International Journal of Nano Science, 11(3), 1240004",year:2012,details:""},
    {title:"Catalytic Plasma Reactor for Abatement of Dilute Nitrobenzene",authors:"J. Karuppiah, L. Sivachandiran, R. Karvembu, Ch. Subrahmanyam",journal:"Chinese Journal of Catalysis, 35, 795–799",year:2011,details:""},
    {title:"Catalytic nonthermal plasma reactor for the abatement of low concentrations of isopropanol",authors:"J. Karuppiah, L. Sivachandiran, R. Karvembu, Ch. Subrahmanyam",journal:"Chemical Engineering Journal, 165, 194–199",year:2010,details:""}
  ],
  conferences: [
    {title:"Selective catalytic reduction of N₂O over C₃H₈ with hierarchical CeO₂/NiF catalyst",event:"AEPSE 2015",place:"Jeju, Korea",date:"20–24 September 2015"},
    {title:"Dry reforming of propane over NiO-CeO₂ loaded anodized aluminum oxide (AAO) catalysts",event:"XII European Congress on Catalysis",place:"Kazan, Russia",date:"30 August – 4 September 2015"},
    {title:"Dry reforming of propane over NiO-CeO₂ loaded AAO catalysts",event:"Korea Society of Industrial and Engineering Chemistry General Assembly and Conference",place:"Busan, Korea",date:"29 April – 1 May 2015"},
    {title:"Plasma-Reduced Ni based Catalysts for Dry Reforming of Propane",event:"International Conference on Microelectronics and Plasma Technology",place:"Gunsan, Korea",date:"8–11 July 2014"},
    {title:"Propane CO₂ dry reforming to synthesis gas over Ni/Al₂O₃ catalyst",event:"Korea Society of Industrial and Engineering Chemistry General Assembly and Conference",place:"Busan, Korea",date:"April 2014"},
    {title:"Abatement of mixture of volatile organic compounds assisted by Nonthermal plasma",event:"First International Conference on Plasma Production and Organic Material Processing · Invited talk",place:"Mahatma Gandhi University, Kottayam, India",date:"25–27 November 2011"},
    {title:"Dielectric Barrier Discharge reactor for destruction of Nitrobenzene",event:"20th National Symposium on Catalysis for Energy Conversion & Conservation of Environment",place:"IIT Madras, Chennai, India",date:"19–22 December 2010"}
  ],
  instruments: [
    "X-Ray Diffraction (XRD)","FTIR","UV-Visible Spectrometer","Raman Spectrometer","Gas Chromatography (TCD/FID)","GC-MS","Total Organic Carbon (TOC)","HPLC","BET Surface Analyzer","TPD / TPR / TPO","Mass Spectrometry","TGA / DTA / DSC","ICP-OES","Parr Reactor","Autoclave","SEM","TEM","XPS","UV-DRS"
  ],
  software: ["MS Office","OriginLab","MATLAB","ChemOffice","EndNote"]
};

// Change this to the verified professional email address before publishing.
const CONTACT_EMAIL = "";

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

function renderResearch(){
  $("#researchGrid").innerHTML = portfolioData.research.map(([icon,title,desc]) =>
    `<article class="research-card reveal"><div class="research-icon">${icon}</div><h3>${title}</h3><p>${desc}</p></article>`
  ).join("");
}
function renderEducation(){
  $("#educationList").innerHTML = portfolioData.education.map(item =>
    `<article class="education-item reveal"><span class="education-year">${item.year}</span><h3>${item.degree}</h3><p>${item.institution}<br><strong>${item.university}</strong></p></article>`
  ).join("");
}
function renderExperience(){
  $("#experienceTimeline").innerHTML = portfolioData.experience.map(item =>
    `<article class="timeline-item reveal"><div class="timeline-date">${item.date}</div><div class="timeline-content"><h3>${item.role}</h3><div class="institution">${item.institution}</div><p>${item.detail}</p><p>Supervisor: ${item.supervisor}</p></div></article>`
  ).join("");
}
function renderPublications(){
  const years = [...new Set(portfolioData.publications.map(p=>p.year))].sort((a,b)=>b-a);
  $("#yearFilter").innerHTML = `<option value="all">All years</option>` + years.map(y=>`<option value="${y}">${y}</option>`).join("");
  const search = $("#publicationSearch").value.trim().toLowerCase();
  const year = $("#yearFilter").value;
  const filtered = portfolioData.publications.filter(p => {
    const text = `${p.title} ${p.authors} ${p.journal} ${p.year} ${p.details}`.toLowerCase();
    return text.includes(search) && (year==="all" || String(p.year)===year);
  });
  $("#resultCount").textContent = `${filtered.length} of ${portfolioData.publications.length} papers`;
  $("#publicationList").innerHTML = filtered.length ? filtered.map((p,i) => {
    const originalIndex = portfolioData.publications.indexOf(p)+1;
    return `<article class="publication-card"><div class="pub-top"><span class="pub-number">PAPER ${String(originalIndex).padStart(2,"0")}</span><span class="pub-year">${p.year}</span></div><h3>${p.title}</h3><p>${p.authors}</p><p class="pub-journal">${p.journal}</p>${p.details?`<p>${p.details}</p>`:""}</article>`;
  }).join("") : `<div class="empty-state">No publications match your search. Try another keyword or year.</div>`;
}
function renderConferences(){
  $("#conferenceGrid").innerHTML = portfolioData.conferences.map((c,i) =>
    `<article class="conference-card reveal"><div class="conference-number">${String(i+1).padStart(2,"0")}</div><div><h3>${c.title}</h3><p><strong>${c.event}</strong><br>${c.place} · ${c.date}</p></div></article>`
  ).join("");
}
function renderExpertise(){
  $("#instrumentList").innerHTML = portfolioData.instruments.map(x=>`<span class="chip">${x}</span>`).join("");
  $("#softwareList").innerHTML = portfolioData.software.map((x,i)=>`<div class="skill-row"><span>${x}</span><small>Technical skill ${String(i+1).padStart(2,"0")}</small></div>`).join("");
}

function setupCounters(){
  const counters = $$("[data-count]");
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el=entry.target, target=Number(el.dataset.count);
      let start=0; const duration=1100; const startTime=performance.now();
      function tick(now){
        const progress=Math.min((now-startTime)/duration,1);
        el.textContent=Math.floor(target*(1-Math.pow(1-progress,3)));
        if(progress<1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick); observer.unobserve(el);
    });
  },{threshold:.5});
  counters.forEach(el=>observer.observe(el));
}
function setupReveal(){
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}});
  },{threshold:.12});
  $$(".reveal").forEach(el=>observer.observe(el));
}
function setupNavigation(){
  const toggle=$("#menuToggle"), links=$("#navLinks");
  toggle.addEventListener("click",()=>{
    const open=links.classList.toggle("open");
    toggle.setAttribute("aria-expanded",String(open));
  });
  $$("#navLinks a").forEach(a=>a.addEventListener("click",()=>{links.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
  const sections=$$("main section[id]");
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        $$("#navLinks a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${entry.target.id}`));
      }
    });
  },{rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(s=>observer.observe(s));
}
function setupTheme(){
  const button=$("#themeToggle");
  button.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme");
    button.textContent=document.body.classList.contains("light-theme")?"☾":"☼";
  });
}
function setupScroll(){
  const bar=$("#scrollProgress");
  window.addEventListener("scroll",()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    bar.style.width=`${max>0?(window.scrollY/max)*100:0}%`;
  },{passive:true});
}
function setupTyping(){
  const roles=["Chemistry Researcher","Catalysis Researcher","Plasma Science Researcher"];
  const el=$("#typedRole"); let role=0, char=0, deleting=false;
  function type(){
    const current=roles[role];
    el.textContent=current.substring(0,char);
    if(!deleting && char<current.length){char++;setTimeout(type,75);}
    else if(!deleting){deleting=true;setTimeout(type,1300);}
    else if(char>0){char--;setTimeout(type,35);}
    else{deleting=false;role=(role+1)%roles.length;setTimeout(type,250);}
  }
  type();
}
function setupContact(){
  if(CONTACT_EMAIL){
    $("#emailLink").href=`mailto:${CONTACT_EMAIL}`;
    $("#emailLink").textContent=`${CONTACT_EMAIL} ↗`;
    $(".contact-warning").style.display="none";
  }
}
function init(){
  renderResearch();renderEducation();renderExperience();renderPublications();renderConferences();renderExpertise();
  setupCounters();setupReveal();setupNavigation();setupTheme();setupScroll();setupTyping();setupContact();
  $("#publicationSearch").addEventListener("input",renderPublications);
  $("#yearFilter").addEventListener("change",renderPublications);
  $("#printProfile").addEventListener("click",()=>window.print());
  $("#currentYear").textContent=new Date().getFullYear();
}
document.addEventListener("DOMContentLoaded",init);
