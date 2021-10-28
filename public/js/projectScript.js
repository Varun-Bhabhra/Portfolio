const cards = document.querySelector('#cards');
const images = {
  pricing_panel: '../../img/projectImg/Pricing Panel.png',
  blog_page: '../../img/projectImg/Blog page (Front).png',
  landing_page1: '../../img/projectImg/Landing Page - 1.png',
  landing_page2: '../../img/projectImg/Landing Page - 2.png',
  crome_card: '../../img/projectImg/Chrome Card 2.png',
  tripsy_1: '../../img/projectImg/Tripsy - 1.png',
  tripsy_2: '../../img/projectImg/Tripsy - 2.png',
  tripsy_3: '../../img/projectImg/Tripsy - 3.png',
  tripsy_4: '../../img/projectImg/Tripsy - 4.png',
}

// Creat Variables
for (let i = 0; i <= 7; i++) {
  let article = document.createElement('ARTICLE');
  article.setAttribute('class', 'mainCard rounded-lg shadow-xl bg-body-bac17 bg-cover')

  let image = document.createElement('IMG');
  image.setAttribute('class', 'w-full rounded-tr-lg rounded-tl-lg self-center');

  if (i === 0) {
    image.setAttribute('src', images.blog_page);
  } else if (i === 1) {
    image.setAttribute('src', images.landing_page1);
  } else if (i === 2) {
    image.setAttribute('src', images.landing_page2);
  } else if (i === 3) {
    image.setAttribute('src', images.pricing_panel);
  } else if (i === 4) {
    image.setAttribute('src', images.tripsy_1);
  } else if (i === 5) {
    image.setAttribute('src', images.tripsy_2);
  } else if (i === 6) {
    image.setAttribute('src', images.tripsy_3);
  } else if (i === 7) {
    image.setAttribute('src', images.tripsy_4);
  }
  // else if (i === 8) {
  //   image.setAttribute('src', images.tripsy_1);    
  // } else if (i === 9) {
  //   image.setAttribute('src', images.tripsy_1);    
  // }

  let aside = document.createElement('ASIDE');
  aside.setAttribute('class', 'my-3 text-2xl font-bold px-3');
  aside.innerText = 'Pricing Panel'

  let para = document.createElement('P');
  para.setAttribute('class', 'p-3 text-sm');
  para.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum aut est delectus, at placeat labore dolorem saepe rerum temporibus veniam nemo maiores possimus deleniti ex tempora similique vel et.';

  cards.appendChild(article);
  article.appendChild(image);
  article.appendChild(aside);
  article.appendChild(para);
}