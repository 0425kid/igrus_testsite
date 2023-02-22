const cookieConfig = {
  maxAge : 300000,
  path: '/',
  httpOnly: true
};

let cookieCount = 0;

function getCookie(){
  console.log('cookie')
  const sound = document.getElementById('sound');
  sound.currentTime = 0;
  sound.play()
  updateCookieCounter()
}

function updateCookieCounter(){
  cookieCount++;
  const cookieCounter = document.getElementById('cookie_count');
  cookieCounter.innerHTML = cookieCount;
}

function checkCoockieCount(){
  const cookie = document.getElementById('cookie_count').innerHTML;
  if(cookie < 1000000){
    alert(`Not enough cookie! You need ${1000000-cookie} more`);
  }
  else {
    window.location.href = '54.83.101.17:3000/problem/check';
  }
}

function getAdminCookie(){
  document.cookie = "adminCookie=Admin; max-age=30000; path=/; httpOnly=true;"
  alert('You got admin cookie!')
}