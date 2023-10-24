// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main')
mainEl.style.background = 'var(--main-bg)'

const seiRocks = document.createElement('h1');
seiRocks.innerText = 'SEI Rocks!'
mainEl.appendChild(seiRocks)

mainEl.setAttribute('class', 'flex-ctr')

const topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.background = 'var(--top-menu-bg)'

topMenuEl.setAttribute('class', 'flex-around')
menuLinks.forEach(function (link) {
    const a = document.createElement('a');
    a.setAttribute('href', link.href)
    a.innerText = link.text
    topMenuEl.appendChild(a)
})


