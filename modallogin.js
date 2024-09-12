let countdownInterval;

function showModal() {
  const modal = document.getElementById("myModal");
  const countdownElement = document.getElementById("countdown");
  let timeLeft = 5; // waktu dalam detik

  modal.style.display = "block";

  // Update countdown setiap detik
  countdownInterval = setInterval(() => {
    countdownElement.textContent = `Closing in ${timeLeft} seconds...`;
    timeLeft -= 1;

    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      hideModal();
    }
  }, 1000);

  const closeButton = document.getElementsByClassName("close")[0];
  closeButton.onclick = function() {
    clearInterval(countdownInterval);
    hideModal();
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      clearInterval(countdownInterval);
      hideModal();
    }
  };
}

function hideModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

const forbiddenUsernames = [
  "admin", "undefined", "password", "123456", "qwerty", "letmein",
  "admin123", "iloveyou", "123456789", "admin1", "qwertyuiop", "password1",
  "12345678", "abc123", "password123", "1q2w3e4r", "qwerty123", "123123",
  "123321", "admin1234", "12345", "password01", "letmein123", "welcome1",
  "1234567", "password1234", "qwerty1", "password2", "1234567", "password01",
  "bastard", "bitch", "fuck", "shit", "asshole", "cunt", "motherfucker", 
  "dick", "pussy", "slut", "whore", "faggot", "nigger", "rape", "cocksucker", 
  "numbnuts", "tits", "pimp", "piss", "retard", "cum", "blowjob", "dildo",
  "bajingan", "bangsat", "bego", "brengsek", "dongo", "goblok", "hentai", 
  "kampret", "kntl", "kontol", "kurang ajar", "memek", "ngentot", "pantek", 
  "peler", "pepek", "pleset", "sialan", "tolol", "trolol", "bucin", "anjing",
  "kebo", "cebong", "gembel", "jancok", "kolak", "mampus", "pecundang", 
  "pocong", "setan", "zong", "bego", "brengsek", "goblok", "kampret", "jingk", 
  "bancet", "banci", "lempeng", "bacot", "ngacok", "memek", "siluman", 
  "cabe", "goblok", "kurangajar", "mentil", "dongo", "brengsek", "ngehe", 
  "ngentot", "pejuh", "pej", "bagong", "dodol", "pengap", "jelek", "bego", 
  "kurangajar", "ngebet", "agak", "banci", "bete", "jebo", "penjahat", 
  "idiot", "lempem", "kerau", "tante", "bocah", "bocil", "narsis", 
  "ngeselin", "brengsek", "jelek", "ngaceng", "tukang", "asoy", "kocak", 
  "goblok", "bejat", "memek", "sundel", "preti", "setan", "goblok", 
  "kampungan", "pakeet", "seks", "kompor", "tukangjenggot"
];

function isUsernameValid(username) {
  return username.trim() !== "" && !forbiddenUsernames.includes(username.toLowerCase());
}

function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  if (isUsernameValid(username)) {
    localStorage.setItem('username', username);
    window.location.href = 'index.html';
  } else {
    showModal();
  }
}
