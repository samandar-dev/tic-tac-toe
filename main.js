const massiv = [
  {
    id: 1,
    tit: [
      `<i class='bx bx-x'></i>`,
      `<i class='bx bx-radio-circle'></i>`,
    ]
  },
  {
    id: 2,
    tit: [
      `<i class='bx bx-x'></i>`,
      `<i class='bx bx-radio-circle'></i>`,
    ]
  },
  {
    id: 3,
    tit: [
      `<i class='bx bx-x'></i>`,
      `<i class='bx bx-radio-circle'></i>`,
    ]
  },
  {
    id: 4,
    tit: [
      `<i class='bx bx-x'></i>`,
      `<i class='bx bx-radio-circle'></i>`,
    ]
  },
  {
    id: 5,
    tit: [
      `<i class='bx bx-x'></i>`,
      `<i class='bx bx-radio-circle'></i>`,
    ]
  },
  {
    id: 6,
    tit: [
      `<i class='bx bx-x'></i>`,
      `<i class='bx bx-radio-circle'></i>`,
    ]
  },
  {
    id: 7,
    tit: [
      `<i class='bx bx-x'></i>`,
      `<i class='bx bx-radio-circle'></i>`,
    ]
  },
  {
    id: 8,
    tit: [
      `<i class='bx bx-x'></i>`,
      `<i class='bx bx-radio-circle'></i>`,
    ]
  },
  {
    id: 9,
    tit: [
      `<i class='bx bx-x'></i>`,
      `<i class='bx bx-radio-circle'></i>`,
    ]
  },
]

let box = document.querySelector('.list');
let winBox = document.querySelector('.win');
let wintit = document.querySelector('.win-tit');
let restart = document.querySelector('.restart');

massiv.forEach((btns) => {
  let li = document.createElement('li');
  li.className = "item";
  li.innerHTML = `<button class="btn" onclick="fun(${btns.id})"></button>`;
  box.appendChild(li)
})

let btns = document.querySelectorAll('.btn');
let t_f = true
let hov = 0
let count = 0
let a = true

function hover() {
  btns.forEach((bt) => {
    if (a == true && !bt.classList.contains('nohov')) {
      bt.addEventListener('mouseenter', () => {
        bt.classList.add('hover-x');
      })
    }

    else if (a == false && bt.classList.contains('nohov')) {
      bt.addEventListener('mouseenter', () => {
        bt.classList.add('hover-o');
      })
    }
  })
} hover()


function fun(id) {
  let x = ``
  let o = ``
  massiv.forEach((items) => {
    x = items.tit[0]
    o = items.tit[1]
  })

  let nowWins = false
  btns.forEach((bt, inx) => {
    bt.classList.add('nohov')
    if (id == inx + 1 && t_f == true && !bt.classList.contains('oneClick')) {
      bt.classList.add('oneClick')
      bt.classList.add('act-x')
      bt.innerHTML = x
      t_f = false
      count++
    } else if (id == inx + 1 && t_f == false && !bt.classList.contains('oneClick')) {
      bt.classList.add('oneClick')
      bt.classList.add('act-o')
      bt.innerHTML = o
      t_f = true
      count++
    }
  })

  if (btns[0].classList.contains('act-x') && btns[1].classList.contains('act-x') && btns[2].classList.contains('act-x') ||
    btns[3].classList.contains('act-x') && btns[4].classList.contains('act-x') && btns[5].classList.contains('act-x') ||
    btns[6].classList.contains('act-x') && btns[7].classList.contains('act-x') && btns[8].classList.contains('act-x') ||
    btns[0].classList.contains('act-x') && btns[4].classList.contains('act-x') && btns[8].classList.contains('act-x') ||
    btns[2].classList.contains('act-x') && btns[4].classList.contains('act-x') && btns[6].classList.contains('act-x') ||
    btns[0].classList.contains('act-x') && btns[3].classList.contains('act-x') && btns[6].classList.contains('act-x') ||
    btns[1].classList.contains('act-x') && btns[4].classList.contains('act-x') && btns[7].classList.contains('act-x') ||
    btns[2].classList.contains('act-x') && btns[5].classList.contains('act-x') && btns[8].classList.contains('act-x')) {

    wintit.textContent = "Player 1 wins!";
    winBox.classList.add('w');
    nowWins = true
  }
  else if (btns[0].classList.contains('act-o') && btns[1].classList.contains('act-o') && btns[2].classList.contains('act-o') ||
    btns[3].classList.contains('act-o') && btns[4].classList.contains('act-o') && btns[5].classList.contains('act-o') ||
    btns[6].classList.contains('act-o') && btns[7].classList.contains('act-o') && btns[8].classList.contains('act-o') ||
    btns[0].classList.contains('act-o') && btns[4].classList.contains('act-o') && btns[8].classList.contains('act-o') ||
    btns[2].classList.contains('act-o') && btns[4].classList.contains('act-o') && btns[6].classList.contains('act-o') ||
    btns[0].classList.contains('act-o') && btns[3].classList.contains('act-o') && btns[6].classList.contains('act-o') ||
    btns[1].classList.contains('act-o') && btns[4].classList.contains('act-o') && btns[7].classList.contains('act-o') ||
    btns[2].classList.contains('act-o') && btns[5].classList.contains('act-o') && btns[8].classList.contains('act-o')) {

    wintit.textContent = "Player 2 wins!";
    winBox.classList.add('w');
    nowWins = true
  }
  else if (nowWins == false && count == 9) {
    wintit.textContent = "Player No wins!";
    winBox.classList.add('w');
    restart.addEventListener('click', () => {
      btns.forEach((bb) => {
        bb.classList.remove('act-x');
        bb.classList.remove('act-o');
      })
    })
  }

  if (hov == 1) {
    a = true
    hover();
    hov++
    console.log('x');
  } else {
    a = false
    hover();
    hov = 0
    console.log('o');
  }

  hov++
}



restart.addEventListener('click', () => {
  btns.forEach((bb) => {
    bb.classList.remove('oneClick')
    bb.classList.remove('act-x');
    bb.classList.remove('act-o');
    bb.innerHTML = ''
    count = 0
    t_f = true
  })
  winBox.classList.remove('w');
})



