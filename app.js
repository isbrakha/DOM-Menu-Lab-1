const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

const subMenuEl = document.querySelector('#sub-menu')

subMenuEl.style.height = '100%'

subMenuEl.style.background = 'var(--sub-menu-bg'

subMenuEl.setAttribute('class', 'flex-around')

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'


const topMenuLinks = document.querySelectorAll('#top-menu a')
console.log(topMenuEl.tagName)
let showingSubMenu = false

topMenuEl.addEventListener('click', function(event) {
  event.preventDefault()
  
  if (event.target.tagName != 'A') {
    return
  } else {
    console.log(event.target.innerText)
  }
  if (event.target.getAttribute('class') === 'active') {
    event.target.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
  }
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active')
  })
  event.target.classList.add('active')
  const found = menuLinks.find(function(link) {
    return link.text === event.target.textContent
    })
    
  if ("subLinks" in found) {
    showingSubMenu = true
  }
  console.log(found.subLinks)
  if (showingSubMenu === true) {
    buildSubMenu(found.subLinks)
    subMenuEl.style.top = '100%'
  } else {
    subMenuEl.style.top = '0%'
    mainEl.innerHTML = '<h1>about</h1>'
  }
  function buildSubMenu(array){
    subMenuEl.replaceChildren()
    array.forEach(function(link) {
      let a = document.createElement('a')
      a.setAttribute('href', link.href)
      a.innerText = link.text
      subMenuEl.appendChild(a)
    })  }
})

subMenuEl.addEventListener('click', function(event){
  event.preventDefault()
  console.log(event.target.tagName)
  if (event.target.tagName !== 'A'){
    return
  }
  console.log(event.target.textContent)
  showingSubMenu = false
  subMenuEl.style.top = '0'
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active')
  })
  mainEl.innerHTML = '<h1>' + event.target.textContent +'<h1>'
})
