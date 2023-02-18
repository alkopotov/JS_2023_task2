class Cat {
  constructor(name, age, rate, favor, descr, pict) {
    this.name = name;
    this. age = age;
    this.rate = rate;
    this.favor = favor;
    this.descr = descr;
    this.pict = pict;
  }
}

let cats = []
for (val in catData) {
  cats.push(new Cat(catData[val].name, catData[val].age, catData[val].rate, catData[val].favourite, catData[val].description, catData[val].img_link))
}

let block = document.getElementsByTagName('div')[0];

const createCatCard = (cat, parent) => {
  let catCard = document.createElement('div');
  catCard.className = 'cat_card';

  let caption = document.createElement('h2');
  caption.innerText = `${cat.name}, ${getAgeString(cat.age)}`;

  let picture = document.createElement('div');
  picture.className = 'picture';
  picture.style.backgroundImage = `url(${cat.pict})`;

  let evaluation = document.createElement('div');
  evaluation.className = 'evaluation';

  let rating = document.createElement('div');
  getRating(rating, cat.rate)
  rating.className = 'rating';

  let favorite = document.createElement('div');
  favorite.className = 'favorite';
  if (cat.favor) {
    favorite.style.backgroundImage = 'url(images/favor_true.svg)'
  } else {
    favorite.style.backgroundImage = 'url(images/favor_false.svg'
  }

  evaluation.append(rating, favorite);

  let description = document.createElement('p')
  description.innerText = cat.descr;
 
  catCard.append(caption, picture, evaluation, description);
  parent.appendChild(catCard);
}

function getRating(el, mark = 1) {
  for (let i = 1; i <= mark; i++) {
    star = document.createElement('div');
    star.className = 'star';
    star.style.backgroundImage = 'url(images/red_cat.svg)';
    el.append(star);
  }
  for (let j = mark + 1; j <= 10; j++) {
    star = document.createElement('div');
    star.className = 'star';
    star.style.backgroundImage = 'url(images/black_cat.svg)';
    el.append(star);
  }
}
cats.forEach( c => {
  createCatCard(c, block);
})
