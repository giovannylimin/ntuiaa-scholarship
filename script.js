const nav = document.querySelector('nav');
const topOfNav = nav.offsetTop;

function fixNav(){
  console.log(topOfNav, window.scrollY);
  if(window.scrollY >= topOfNav){
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed');
  }else{
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed');
  }

}

window.addEventListener('scroll', fixNav);

let osn = [
  'OSN 2016 closing ceremony: new logo launch',
  'Kalimantan Barat contingent performance at the cultural night',
  'Opening ceremony in PSCC (Palembang Sport and Convention Center)'
];

let kihajar =[
  '(2017) National finalists at the closing ceremony',
  '(2017) "My Ideas" presentation for final stage',
  '(2017) My proposal for the presentation',
  '(2017) A Pontianak-based tourism web-application',
  '(2018) National finalists at the closing ceremony',
  "(2018) Kihajar Awards Night at The Sultan Hotel Jakarta",
  '(2018) A photo with Madam Tjhai Chui Mie, Mayor of Singkawang, who also got an award',
  "(2018) Symbolic appreciation from Sutarmidji, Governor of Kalimantan Barat"
];

let kalfor = [
  'A photo with my design at the winners announcement day',
  'Office tour to UNDP Representation Office Indonesia',
  'Conversations with the staffs',
  'A visit to Kementerian Lingkungan Hidup dan Kehutanan (KLHK)',
  'Conversations with the staffs of Direktorat Jenderal PKTL',
  'Handing design to Mr. Sigit Hardwinarto, Direktur Jenderal PKTL KLHK'
];

let iegames = [
  'Factory visit to PT Aice Ice Cream Jatim Industry',
  'Company visit report presentation stage in semifinals',
  'Awarded the 4th Position after the finals',
];
let otherComp = [
  '(2017) 2nd Place in Olimpiade Biologi by Universitas Tanjungpura, province-level',
  '(2018) 3rd Place in Lomba Cerdas Cermat Empat Pilar MPR RI, district-level (team)',
  '(2018) 3rd Place in Olimpiade Sains Kesehatan by Universitas Tanjungpura, province-level',
  '(2018) 3rd Place in Lomba Cerdas Cermat Olimpiade Pahlawan Nasional by Dinas Sosial, province-level (team)',
  '(2019) 1st Place in Princess of Physics by Universitas Tanjungpura, province-level',
  '(2019) 1st Place in Lomba Cerdas Cermat Sains by Universitas Tanjungpura, distrct-level (team)',
  '(2019) 1st place in Lomba Cabang Infografis Heroes Alliance 10 by Universitas Surabaya (UBAYA), natioanal-level',
  "My design for UBAYA's infographic competition"
];

let osis = [
  'Annual art festival (Pentas Seni/Pensi): dance performance',
  'End-year charity project for a nursing home',
  'Giving parcels to the old people',
  "Committee of Pontianak's birthday celebration event",
  'A post-event evaluation',
  "A banner I designed for senior's farewell event",
  'Classmeeting (sports week): In charge of a race'
];

let qna = [
  'Logo of Physics Q&A',
  'One of the physics problems that I posted: a resistance problem',
  'the solution to the problem',
  'the alternative solution of the problem',
  'One of the physics articles that I posted',
  'It is about how spoilers work in aircrafts',
  'It is one of my most liked posts'
];
let google = [
  'Remaking the google homepage',
  'Remaking google search results: top view',
  'Remaking the expandable tabs',
  'Remaking google search results: bottom view'
];
let rps = [
  ''
];



function insertImages(article, n){
  let gallery = document.querySelector(`#${article} .gallery`);
  let caption;
  let array = {osn, kihajar, kalfor, iegames, otherComp, osis, qna, google, rps};
  for (const key of Object.entries(array)){
  if(key.toString().includes(article)){
    caption = key[1];
    console.log(caption);
  }else{
    console.log('error!');
  }
}

  for(let i=1; i<=n; i++){
    
    
    gallery.innerHTML += `
    <div class="${article} strip" data-set="${i}">
    <img src="img/${article}/${article}-${i}.jpg"/>
    <p>${caption[i-1]}</p>    
    </div>
    `;
    
  }
}
insertImages('osn',3);
insertImages('kihajar',8);
insertImages('kalfor',6);
insertImages('iegames', 3);
insertImages('otherComp', 8);
insertImages('osis',7);
insertImages('qna', 7);
insertImages('google', 4);
insertImages('rps',6);

let strip = document.querySelectorAll('.strip');
function showCaption(e){
this.classList.add('appear');
console.log('hello');
}
function hideCaption(e){
this.classList.remove('appear');
}
strip.forEach(div=>div.addEventListener('mousemove',showCaption));
strip.forEach(div=>div.addEventListener('mouseleave',hideCaption));