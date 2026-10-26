// =====================================================
//  SIDEQUEST 
// =====================================================

// 
// Each zone has quests. "ages" says who the quest is for: "teen", "adult" or "both"

var zones = [
  {
    name: "Money Island", color: "#2fbf85",
    quests: [
      { id: "m1", title: "Make your first budget", xp: 20, ages: "both",
        steps: ["List the money you get each month", "List what you must pay for", "Pick an amount to save", "See what is left to spend"] },
      { id: "m2", title: "Spot a scam message", xp: 15, ages: "both",
        steps: ["Look for scary 'act now' words", "Check who sent it", "Never click strange links", "Delete and report it"] },
      { id: "m3", title: "Open a savings account", xp: 25, ages: "teen",
        steps: ["Ask a parent to come with you", "Compare two banks", "Bring your ID"] },
      { id: "m4", title: "Start building credit", xp: 25, ages: "adult",
        steps: ["Learn what a credit score is", "Check your free credit report", "Pay every bill on time"] }
    ]
  },
  {
    name: "Job Town", color: "#ff5c8a",
    quests: [
      { id: "j1", title: "Write a first resume", xp: 25, ages: "both",
        steps: ["Add your contact info", "List school and activities", "Add your skills", "Ask a friend to check it"] },
      { id: "j2", title: "Read a pay stub", xp: 20, ages: "both",
        steps: ["Find gross pay", "Find the taxes taken out", "Find net pay (what you get)"] },
      { id: "j3", title: "Learn your work rights", xp: 20, ages: "teen",
        steps: ["Find the minimum wage", "Learn the hour limits for your age", "Know who to tell if something is wrong"] },
      { id: "j4", title: "Ask for a raise", xp: 30, ages: "adult",
        steps: ["Research the pay range", "Write down 3 reasons you deserve it", "Practice in Script Mode"] }
    ]
  },
  {
    name: "School City", color: "#4b7bec",
    quests: [
      { id: "s1", title: "Email a teacher or boss", xp: 15, ages: "both",
        steps: ["Write a clear subject line", "Say who you are and what you need", "Say thank you"] },
      { id: "s2", title: "Find scholarships", xp: 25, ages: "teen",
        steps: ["Search 3 scholarship sites", "Write down the deadlines", "Add them to Deadline Radar"] },
      { id: "s3", title: "Understand student loans", xp: 25, ages: "adult",
        steps: ["Learn grant vs loan", "Find your interest rate", "Learn when payments start"] }
    ]
  },
  {
    name: "Health Hills", color: "#ffb100",
    quests: [
      { id: "h1", title: "Book your own appointment", xp: 20, ages: "both",
        steps: ["Find a clinic near you", "Practice the call in Script Mode", "Make the call"] },
      { id: "h2", title: "Cook 3 easy meals", xp: 20, ages: "both",
        steps: ["Pick 3 simple recipes", "Make a shopping list", "Cook one this week"] },
      { id: "h3", title: "Understand health insurance", xp: 25, ages: "adult",
        steps: ["Learn premium, deductible and copay", "Find your insurance card", "Check which doctors are in network"] }
    ]
  }
];

// Call simulations. Each step: what THEY say, then 3 options for you.
// An option is [ what you say, points (0, 1 or 2), feedback ]
var sims = [
  {
    id: "doctor", title: "Book a doctor's appointment",
    intro: "You're calling a clinic to book your first appointment by yourself.",
    steps: [
      { them: "Thank you for calling Eastside Clinic, how can I help?", opts: [
        ["Hi, I'd like to book an appointment, please.", 2, "Clear and polite. Perfect start."],
        ["Umm... so... I don't know... maybe?", 0, "Too unsure. Say what you need right away."],
        ["Give me the first open spot.", 1, "Gets it done, but a little pushy."] ] },
      { them: "Sure! Have you been seen here before?", opts: [
        ["I haven't, I'm a new patient.", 2, "Short and honest."],
        ["Yes, definitely.", 0, "Don't guess, it causes paperwork problems."],
        ["Um, can you check?", 1, "Okay, but you should know if you're new."] ] },
      { them: "We have Tuesday at 3 PM or Thursday at 10 AM.", opts: [
        ["Tuesday at 3 works for me, thank you.", 2, "Picked fast and said thanks."],
        ["Anything on the weekend?", 1, "Fair, but most clinics are closed then."],
        ["Hmm, I don't know, whatever.", 0, "They can't book 'whatever'. Pick one."] ] },
      { them: "Great. Can I get your insurance information?", opts: [
        ["Sure, let me grab my card. One moment.", 2, "Smart. Keep your card nearby."],
        ["Why do you need that?", 1, "It's okay to ask, but they need it to bill you right."],
        ["I don't have it, forget it.", 0, "Don't hang up! Ask about self-pay prices."] ] },
      { them: "You're all set for Tuesday at 3. Anything else?", opts: [
        ["Do I need to bring anything or come early?", 2, "Great question. Now you're prepared."],
        ["No. Bye.", 1, "Fine, but you missed a chance to ask what to bring."],
        ["Hold on, I need to think about it.", 0, "Write the date down while they talk."] ] }
    ]
  },
  {
    id: "job", title: "Ask for a job in person",
    intro: "You walk into a store to ask about a part-time job.",
    steps: [
      { them: "Hi there, can I help you find something?", opts: [
        ["Hi, I'm Alex. Are you hiring right now?", 2, "Direct and friendly, with your name."],
        ["Just looking.", 0, "Then you won't get a job. Say why you're here."],
        ["Do you pay well here?", 1, "Too early. Ask about hiring first."] ] },
      { them: "We might be. What position are you interested in?", opts: [
        ["I'd like to be a cashier. I'm reliable and learn fast.", 2, "A specific role plus a strength."],
        ["Anything works.", 1, "A bit vague. Name a role."],
        ["Whatever pays the most.", 0, "Not a great first impression."] ] },
      { them: "Do you have any experience?", opts: [
        ["Not at a job yet, but I've done school projects and volunteering.", 2, "Honest, and shows you've done real things."],
        ["Yes, 10 years at a huge company.", 0, "Don't make things up. They can check."],
        ["No.", 1, "Honest but short. Add something you've done."] ] },
      { them: "Do you have a resume with you?", opts: [
        ["Yes, here you go. Who should I follow up with?", 2, "Prepared, and you asked about next steps."],
        ["No, I didn't know I needed one.", 0, "Next time bring one."],
        ["I can email it later, if that's okay.", 1, "Okay backup, but a paper copy is better."] ] },
      { them: "Okay, we'll look it over and get back to you.", opts: [
        ["Thank you! Is it okay if I check back next week?", 2, "Polite, and it shows you're serious."],
        ["When will you call? I need to know today.", 0, "Too pushy."],
        ["Okay thanks, bye.", 1, "Polite, but a follow-up plan is stronger."] ] }
    ]
  },
  {
    id: "bill", title: "Dispute a wrong bill",
    intro: "Your phone bill has a $40 charge you don't recognize.",
    steps: [
      { them: "Thanks for calling Bright Mobile. How can I help?", opts: [
        ["Hi, I see a $40 charge on my bill that I don't recognize.", 2, "Specific amount, calm voice."],
        ["Your company is ripping me off!", 0, "Yelling won't get it fixed."],
        ["I think there's something wrong?", 1, "Too vague. Give the amount."] ] },
      { them: "Can I get the phone number or account number on the account?", opts: [
        ["Sure, one second, I have it right here.", 2, "Having it ready saves time."],
        ["I don't have it, just fix it.", 0, "They can't help without it."],
        ["Hold on, let me go find my bill.", 1, "Fine, but it's better to have it ready."] ] },
      { them: "That charge is for a premium add-on from the 3rd.", opts: [
        ["I didn't ask for it. Can you remove it and refund me?", 2, "Clear about what you want."],
        ["Okay, I guess I'll pay it.", 0, "Don't give up money you shouldn't owe."],
        ["Can you explain what it is first?", 1, "Good to ask, but also say what you want fixed."] ] },
      { them: "I can remove it going forward, but I can't refund past charges.", opts: [
        ["Can I speak with a supervisor about a refund?", 2, "Asking politely to escalate is the right move."],
        ["Fine, forget it.", 0, "You can still ask for a supervisor."],
        ["Then I'm canceling my service!", 1, "Don't threaten unless you mean it."] ] },
      { them: "Okay, I've put in a refund request.", opts: [
        ["Thanks. Can I get a reference number and your name?", 2, "Always write these down."],
        ["Great, bye!", 1, "Polite, but get a reference number."],
        ["Did you really do it? I don't believe you.", 0, "Rude. Ask for a reference number instead."] ] }
    ]
  }
];

// Fake friends for the Crew tab (a real app would load these from a server)
var friends = [
  { name: "Maya", xp: 85 },
  { name: "Jordan", xp: 140 },
  { name: "Sam", xp: 40 }
];

// The pet grows as you level up
var petStages = ["🥚", "🐣", "🐥", "🦆", "🦅", "🐉"];


// Quiz questions for every quest (5 each).
// Each question is written as: [ "the question", ["option A", "option B", "option C"], position of the right answer (starts at 0) ]
var quizzes = {
  m1: [
    ["You get $200 a month and must pay $120 for needs. How much is left?", ["$320", "$120", "$80"], 2],
    ["What is a budget?", ["A plan for your money", "A type of bank", "A tax"], 0],
    ["Which should you pay first?", ["A new game", "Rent and food", "A concert ticket"], 1],
    ["A good habit with every paycheck is to...", ["Spend it all", "Save some first", "Hide it"], 1],
    ["You want $60 sneakers and save $15 a week. How many weeks?", ["2", "4", "6"], 1]
  ],
  m2: [
    ["A text says 'Your account is locked! Click now!' What do you do?", ["Click the link fast", "Contact the company directly", "Reply with your password"], 1],
    ["Which is a scam warning sign?", ["Pressure to act right now", "A message from a friend you know", "An email from your school"], 0],
    ["Who should you give your password to?", ["Your bank over text", "Support who messages you first", "Nobody"], 2],
    ["A stranger says you won a prize if you pay a small fee. It is...", ["Probably a scam", "A great deal", "Totally safe"], 0],
    ["You think you got scammed. First step?", ["Tell a trusted adult and your bank", "Hide it", "Send more money to fix it"], 0]
  ],
  m3: [
    ["What do you bring to open a savings account?", ["Only a library book", "Nothing", "A photo ID"], 2],
    ["Money in a savings account is usually...", ["Locked forever", "Safe and earns a little interest", "Taken by the bank"], 1],
    ["Under 18, you usually open one with...", ["A friend", "Nobody", "A parent or guardian"], 2],
    ["Interest is...", ["A fee you pay", "Money the bank pays you for saving", "A tax"], 1],
    ["Best way to save regularly?", ["Wait until the end of the year", "Save only when you remember", "Set an automatic transfer"], 2]
  ],
  m4: [
    ["What helps your credit score the most?", ["Paying bills on time", "Ignoring bills", "Closing every account"], 0],
    ["Credit utilization means...", ["Your yearly income", "How much of your credit limit you use", "How many cards you own"], 1],
    ["A good rule for credit cards?", ["Max out the card", "Keep it under 30% of the limit", "Never pay it"], 1],
    ["Checking your own credit report...", ["Lowers your score a lot", "Does not hurt your score", "Is illegal"], 1],
    ["Missing payments will...", ["Raise your score", "Do nothing", "Hurt your score"], 2]
  ],
  j1: [
    ["What goes on a resume?", ["Your passwords", "Contact info, school and skills", "Your favorite meme"], 1],
    ["How long should a first resume be?", ["One page", "Ten pages", "One sentence"], 0],
    ["Which email looks the most professional?", ["coolgamer99@mail.com", "firstname.lastname@mail.com", "pizzalover@mail.com"], 1],
    ["Before sending your resume, you should...", ["Skip proofreading", "Add a photo of your pet", "Proofread it and ask someone to check"], 2],
    ["No work experience? List...", ["Nothing", "School projects, clubs and volunteering", "Made-up jobs"], 1]
  ],
  j2: [
    ["'Net pay' is...", ["Money before taxes", "Money you take home", "Your boss's pay"], 1],
    ["'Gross pay' is...", ["A bonus", "Pay after taxes", "Pay before taxes are taken out"], 2],
    ["Why check the hours on your pay stub?", ["No reason", "To make sure you're paid for all your work", "To see your boss's schedule"], 1],
    ["Money taken from your paycheck for taxes is called...", ["Withholding", "A bonus", "A tip"], 0],
    ["You work 10 hours at $12/hour. What is your gross pay?", ["$100", "$120", "$22"], 1]
  ],
  j3: [
    ["Something at work feels unsafe. What do you do?", ["Ignore it forever", "Tell a trusted adult or your state labor office", "Quit without telling anyone"], 1],
    ["Teens often have limits on...", ["The hours they can work", "What color they wear", "Which friends they have"], 0],
    ["Minimum wage is...", ["The highest pay allowed", "A tip", "The lowest hourly pay allowed by law"], 2],
    ["A boss can legally make you work off the clock for free.", ["True", "False", "Only on weekends"], 1],
    ["Where do you find your state's rules for teen workers?", ["Your state labor department website", "A random chat", "Nowhere"], 0]
  ],
  j4: [
    ["What helps the most before asking for a raise?", ["Threaten to quit", "Say nothing and hope", "Research pay and list your wins"], 2],
    ["When is a good time to ask?", ["After a big success or a review", "When your boss is angry", "In the middle of a rush"], 0],
    ["Which is the strongest reason?", ["I want a new car", "I took on more tasks and got results", "My friend earns more"], 1],
    ["If they say no, you should...", ["Yell", "Quit that day", "Ask what it would take to earn one later"], 2],
    ["When you ask, you should name...", ["A number or range from your research", "A random huge amount", "Nothing specific"], 0]
  ],
  s1: [
    ["Which is the best subject line for an email to a teacher?", ["HEY", "Question about Friday's homework", "!!!URGENT!!!"], 1],
    ["How should you start the email?", ["Yo!", "Hey you", "Hello Ms. Lee,"], 2],
    ["How long should a good email be?", ["Short and clear", "A giant essay", "One emoji"], 0],
    ["How should you end it?", ["Nothing at all", "Thank you, plus your name", "ALL CAPS"], 1],
    ["Before sending, check...", ["Spelling and the right person", "Nothing", "Only the font"], 0]
  ],
  s2: [
    ["Which is free money for school that you don't pay back?", ["A loan", "A credit card", "A scholarship"], 2],
    ["Should you pay a company to find scholarships for you?", ["Yes, always", "No, real ones are free to apply for", "Only on Fridays"], 1],
    ["What is important to keep track of?", ["Deadlines", "The weather", "Nothing"], 0],
    ["Where can you look for scholarships?", ["Random pop-ups", "Your school counselor and trusted sites", "Strangers' messages"], 1],
    ["How can you improve your chances?", ["Never apply", "Apply to just one", "Apply to many that fit you"], 2]
  ],
  s3: [
    ["What is true about a student loan?", ["It is free forever", "It disappears when you graduate", "You pay it back with interest"], 2],
    ["A grant is...", ["Money you must repay", "Money you usually don't repay", "A type of credit card"], 1],
    ["Interest is...", ["The extra cost of borrowing", "A discount", "A free gift"], 0],
    ["Before borrowing, you should...", ["Borrow the max", "Only borrow what you need", "Ignore the rate"], 1],
    ["The FAFSA is used to...", ["Apply for federal student aid", "Book a flight", "Pay taxes"], 0]
  ],
  h1: [
    ["What should you have ready when booking an appointment?", ["Only your pet", "Nothing", "Your insurance card and times you're free"], 2],
    ["When you call, you should first...", ["Hang up", "Say who you are and why you're calling", "Yell"], 1],
    ["If you don't understand something they say, you...", ["Pretend you do", "Ask them to repeat or explain", "Hang up"], 1],
    ["A smart move after booking is to...", ["Write down the date and time", "Forget it", "Cancel it"], 0],
    ["If you can't make it, you should...", ["Skip it silently", "Show up a week late", "Cancel or reschedule ahead of time"], 2]
  ],
  h2: [
    ["What makes cooking at home easier?", ["Skipping groceries", "A shopping list and 3 easy recipes", "Only eating snacks"], 1],
    ["Raw chicken is safe to eat when...", ["It looks brown", "It feels warm", "It reaches 165°F / 74°C inside"], 2],
    ["When should you wash your hands?", ["Before and after handling raw meat", "Never", "Only on holidays"], 0],
    ["Leftovers should be...", ["Left on the counter overnight", "Put in the fridge within about 2 hours", "Never eaten"], 1],
    ["What is usually the cheapest way to eat well?", ["Cook at home", "Order delivery daily", "Skip meals"], 0]
  ],
  h3: [
    ["What is a 'deductible'?", ["A monthly doctor visit", "What you pay before insurance starts helping", "A free coupon"], 1],
    ["What is a 'copay'?", ["A set fee you pay for a visit", "A free pass", "A tax refund"], 0],
    ["What is a 'premium'?", ["A discount code", "A free visit", "The monthly amount you pay for insurance"], 2],
    ["'In-network' doctors are...", ["Doctors who live nearby", "Doctors who work with your insurance plan", "Doctors on TV"], 1],
    ["Where can you find your member ID?", ["On your insurance card", "On a cereal box", "In a movie"], 0]
  ]
};

// ----- Rewards: badges and shop items -----
function questsDone() {
  var n = 0;
  for (var id in player.done) {
    if (findQuest(id)) n++;
  }
  return n;
}
function simStars(minimum) {
  for (var id in player.stars) {
    if (player.stars[id] >= minimum) return true;
  }
  return false;
}
function ownsSomething() {
  for (var id in player.owned) return true;
  return false;
}

var badges = [
  { name: "First Steps", desc: "Finish 1 quest", check: function () { return questsDone() >= 1; } },
  { name: "On a Roll", desc: "Finish 5 quests", check: function () { return questsDone() >= 5; } },
  { name: "Scam Spotter", desc: "Win Scam or Safe", check: function () { return player.done.game_scam; } },
  { name: "Game Master", desc: "Win all 3 minigames", check: function () { return player.done.game_scam && player.done.game_needwant && player.done.game_flag; } },
  { name: "Brave Caller", desc: "Finish a phone call sim", check: function () { return simStars(1); } },
  { name: "Smooth Talker", desc: "Get 3 stars on a call", check: function () { return simStars(3); } },
  { name: "Level 3", desc: "Reach level 3", check: function () { return player.xp >= 200; } },
  { name: "3 Day Streak", desc: "Open the app 3 days in a row", check: function () { return player.streak >= 3; } },
  { name: "Shopper", desc: "Buy something in the shop", check: function () { return ownsSomething(); } },
  { name: "Daily Regular", desc: "Finish 5 daily challenges", check: function () { return player.dailyCount >= 5; } }
];

var shopItems = [
  { id: "cap", name: "Cap", icon: "🧢", cost: 30, type: "hat" },
  { id: "shades", name: "Shades", icon: "🕶️", cost: 50, type: "hat" },
  { id: "crown", name: "Crown", icon: "👑", cost: 100, type: "hat" },
  { id: "night", name: "Night theme", icon: "🌙", cost: 50, type: "theme" },
  { id: "mint", name: "Mint theme", icon: "🌿", cost: 50, type: "theme" }
];

// Questions for the Daily Challenge. Every day the app picks 3 of these.
// Same format as the quizzes: [ "question", [options], position of right answer ]
var dailyPool = [
  ["You forgot to cancel a free trial and got charged. What do you do first?", ["Ignore it", "Contact the company and ask for a refund", "Delete the app and hope"], 1],
  ["What is an emergency fund for?", ["Surprise costs like a car repair", "New clothes", "Concert tickets"], 0],
  ["Which password is the safest?", ["password123", "Your birthday", "A long phrase with random words and numbers"], 2],
  ["About how much sleep do most young adults need?", ["3 to 4 hours", "7 to 9 hours", "14 to 16 hours"], 1],
  ["Your 'boss' emails you to buy gift cards. This is probably...", ["A scam", "A normal request", "A raise"], 0],
  ["What does APR tell you?", ["The yearly cost of borrowing money", "Your credit score", "Your tax refund"], 0],
  ["You can't make your work shift. What should you do?", ["Just not show up", "Tell your manager as early as you can", "Ask a friend to pretend to be you"], 1],
  ["Which of these is a 'want'?", ["Groceries", "Rent", "A third streaming service"], 2],
  ["What is a lease?", ["A contract for renting a place", "A type of loan", "A bank account"], 0],
  ["Before signing a lease you should...", ["Read the whole thing", "Just sign, they're all the same", "Sign first and read later"], 0],
  ["What should you do with your pay stubs?", ["Throw them out right away", "Keep them and check them", "Post them online"], 1],
  ["Wearing a seatbelt...", ["Only matters on highways", "Lowers your risk of injury in a crash", "Is optional for short trips"], 1],
  ["Public Wi-Fi is the riskiest for...", ["Logging into your bank", "Reading the news", "Watching a video"], 0],
  ["What is the 50/30/20 rule?", ["50% wants, 30% needs, 20% savings", "50% needs, 30% wants, 20% savings", "Spend 50, borrow 30, save 20"], 1],
  ["A 'hard inquiry' on your credit happens when...", ["You check your own score", "A lender checks your credit for a new loan", "You pay a bill"], 1],
  ["A good way to prepare for a job interview is to...", ["Learn about the company", "Wing it", "Show up 20 minutes late"], 0],
  ["What should you wear to most job interviews?", ["Pajamas", "Clean, neat clothes that fit the job", "A costume"], 1],
  ["After an interview, a good move is to...", ["Send a short thank-you message", "Never contact them again", "Call 10 times a day"], 0],
  ["You have a fever and a headache. What's a smart first step?", ["Ignore it forever", "Rest, drink water, and call a doctor if it gets worse", "Take random pills"], 1],
  ["A pharmacist can help you with...", ["Questions about your medicine", "Fixing your car", "Booking flights"], 0],
  ["Which is a good habit for your digital footprint?", ["Posting anything without thinking", "Thinking about who could see a post", "Sharing your address"], 1],
  ["Two-factor authentication...", ["Adds a second step to log in", "Doubles your password length", "Deletes your account"], 0],
  ["Before clicking a link in a message, you should...", ["Check where it really goes", "Click right away", "Forward it to everyone"], 0],
  ["What is normal when you start a new job?", ["Paying a fee to start", "Filling out tax forms like a W-4", "Giving your bank password"], 1],
  ["Splitting rent with roommates works best when...", ["Everyone agrees on it in writing", "Nobody talks about it", "One person guesses"], 0],
  ["A security deposit is...", ["Money your landlord holds in case of damage", "A monthly fee", "A parking ticket"], 0],
  ["You missed a credit card payment. What now?", ["Pay as soon as you can and call the company", "Ignore it", "Close your bank account"], 0],
  ["A good study habit is...", ["Studying in short blocks with breaks", "Cramming all night every night", "Never reviewing"], 0],
  ["What is the best way to remember a deadline?", ["Put it in a calendar with reminders", "Hope you remember", "Ask friends to remember it"], 0],
  ["What should you do first when you move into a new place?", ["Take photos of any damage", "Throw a party", "Paint the walls"], 0]
];

// ---------- 2. THE PLAYER'S SAVED INFO ----------
var player = {
  mode: "teen", xp: 0, coins: 0, streak: 0, lastDay: "",
  done: {}, deadlines: [], focusMinutes: 0,
  badges: {}, owned: {}, hat: "", theme: "", stars: {}, cheered: {},
  dailyDate: "", dailyScore: 0, dailyCount: 0
};

// Load from the browser's saved storage (if there is any)
var saved = localStorage.getItem("sidequest");
if (saved) {
  var loaded = JSON.parse(saved);
  for (var key in loaded) {
    player[key] = loaded[key];
  }
}

function save() {
  localStorage.setItem("sidequest", JSON.stringify(player));
}

var currentTab = "map";
var view = document.getElementById("view");


// ---------- 3. SMALL HELPER FUNCTIONS ----------

// Shows a message at the bottom of the screen
function showToast(message) {
  var toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 2200);
}

// Throws colored paper bits down the screen
function confetti() {
  var colors = ["#ffe14d", "#ff8fb3", "#7fe3b5", "#8ec9ff", "#ff9f45"];
  for (var i = 0; i < 36; i++) {
    var piece = document.createElement("div");
    var size = 8 + Math.random() * 10;
    piece.className = "confetti";
    piece.style.width = size + "px";
    piece.style.height = size + "px";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDelay = Math.random() * 0.6 + "s";
    document.body.appendChild(piece);
    setTimeout(function (p) { p.remove(); }, 3200, piece);
  }
}

// Gives XP, plus coins (half as many), and checks for level ups and badges
function addXP(amount) {
  var oldLevel = Math.floor(player.xp / 100);
  player.xp = player.xp + amount;
  player.coins = player.coins + Math.floor(amount / 2);
  save();
  updateTopBar();

  var newLevel = Math.floor(player.xp / 100);
  if (newLevel > oldLevel) {
    confetti();
    showToast("Level up! You are now level " + (newLevel + 1));
    jumpPet();
  }
  checkBadges();
}

// Unlocks any badge you just earned
function checkBadges() {
  for (var i = 0; i < badges.length; i++) {
    var b = badges[i];
    if (!player.badges[b.name] && b.check()) {
      player.badges[b.name] = true;
      player.coins = player.coins + 10;
      save();
      updateTopBar();
      setTimeout(function (name) { showToast("Badge unlocked: " + name + " (+10 coins)"); }, 1500, b.name);
    }
  }
}

// Counts how many days in a row you opened the app and gives a coin bonus
function checkStreak() {
  var today = new Date().toDateString();
  if (player.lastDay === today) return;

  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (player.lastDay === yesterday.toDateString()) {
    player.streak = player.streak + 1;
  } else {
    player.streak = 1;
  }
  player.lastDay = today;

  var bonus = Math.min(player.streak, 5) * 2;
  player.coins = player.coins + bonus;
  save();
  setTimeout(function () { showToast("Day " + player.streak + " streak! +" + bonus + " coins"); }, 700);
}

function jumpPet() {
  var pet = document.getElementById("pet");
  pet.classList.remove("jump");
  void pet.offsetWidth;          // restarts the animation
  pet.classList.add("jump");
}

// Updates the level, XP bar, coins, pet, theme and highlighted buttons
function updateTopBar() {
  var level = Math.floor(player.xp / 100) + 1;
  var stage = Math.min(level - 1, petStages.length - 1);

  document.getElementById("level").textContent = "Level " + level;
  document.getElementById("xpText").textContent = player.xp + " XP";
  document.getElementById("barFill").style.width = (player.xp % 100) + "%";
  document.getElementById("pet").textContent = petStages[stage];
  document.getElementById("coins").textContent = player.coins;
  document.getElementById("streak").textContent = player.streak;

  // the hat you bought and the theme you picked
  var hatIcon = "";
  for (var i = 0; i < shopItems.length; i++) {
    if (shopItems[i].id === player.hat) hatIcon = shopItems[i].icon;
  }
  document.getElementById("hat").textContent = hatIcon;
  document.body.className = player.theme;

  document.getElementById("teenBtn").className = player.mode === "teen" ? "on" : "";
  document.getElementById("adultBtn").className = player.mode === "adult" ? "on" : "";

  var names = ["map", "daily", "games", "scripts", "radar", "crew", "focus", "rewards"];
  for (var n = 0; n < names.length; n++) {
    document.getElementById("tab-" + names[n]).className = names[n] === currentTab ? "on" : "";
  }
}


// ---------- 4. LIFE MAP ----------
function showMap() {
  var html = "";
  if (player.dailyDate !== new Date().toDateString()) {
    html += "<div class='notice'>Your daily challenge is ready! <button class='btn' onclick=\"show('daily')\">Play</button></div>";
  }
  html += "<h2>Pick a zone and start a quest!</h2><div class='zones'>";

  for (var z = 0; z < zones.length; z++) {
    var zone = zones[z];
    html += "<div class='zone' style='border-color:" + zone.color + "'>";
    html += "<h3>" + zone.name + "</h3>";

    for (var q = 0; q < zone.quests.length; q++) {
      var quest = zone.quests[q];

      // only show quests that match the age mode
      if (quest.ages === "both" || quest.ages === player.mode) {
        var doneClass = player.done[quest.id] ? "done" : "";
        var check = player.done[quest.id] ? "✔ " : "";
        html += "<button class='quest " + doneClass + "' onclick=\"openQuest('" + quest.id + "')\">";
        html += "<span>" + check + quest.title + "</span><small>+" + quest.xp + " XP</small></button>";
      }
    }
    html += "</div>";
  }

  view.innerHTML = html + "</div>";
}

// Finds a quest by its id
function findQuest(id) {
  for (var z = 0; z < zones.length; z++) {
    for (var q = 0; q < zones[z].quests.length; q++) {
      if (zones[z].quests[q].id === id) return zones[z].quests[q];
    }
  }
}

// Quiz variables (these remember where you are in the quiz)
var quizId = "";
var quizList = [];
var quizNumber = 0;
var quizScore = 0;

// Step 1: the popup shows the tips and a Start Quiz button
function openQuest(id) {
  var quest = findQuest(id);

  var html = "<h3>" + quest.title + "</h3>";

  if (player.done[id]) {
    html += "<p>✔ You already finished this quest. Nice work!</p>";
  } else {
    html += "<p><b>Learn:</b></p><ul class='tips'>";
    for (var i = 0; i < quest.steps.length; i++) {
      html += "<li>" + quest.steps[i] + "</li>";
    }
    html += "</ul><p>Then take the quiz: " + quizzes[id].length + " questions, get at least " + (quizzes[id].length - 1) + " right to earn XP!</p>";
    html += "<button class='btn' onclick=\"startQuiz('" + id + "')\">Start quiz</button> ";
  }
  html += "<button class='btn dark' onclick='closePopup()'>Close</button>";

  document.getElementById("popup").innerHTML = html;
  document.getElementById("overlay").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("overlay").classList.add("hidden");
}

// Step 2: start the quiz with the questions in a random order
function startQuiz(id) {
  quizId = id;
  quizList = quizzes[id].slice();
  quizList.sort(function () { return Math.random() - 0.5; });
  quizNumber = 0;
  quizScore = 0;
  showQuestion();
}

// Step 3: show one question at a time
function showQuestion() {
  if (quizNumber >= quizList.length) {
    finishQuiz();
    return;
  }
  var item = quizList[quizNumber];
  var html = "<small>Question " + (quizNumber + 1) + " of " + quizList.length + " - Score: " + quizScore + "</small>";
  html += "<h3>" + item[0] + "</h3>";
  for (var o = 0; o < item[1].length; o++) {
    html += "<button class='option' onclick='pickAnswer(" + o + ")'>" + item[1][o] + "</button>";
  }
  document.getElementById("popup").innerHTML = html;
}

// Step 4: check the answer and show if it was right
function pickAnswer(choice) {
  var item = quizList[quizNumber];
  var right = (choice === item[2]);
  if (right) quizScore = quizScore + 1;

  var html = "<h3>" + (right ? "Correct!" : "Not quite") + "</h3>";
  if (!right) {
    html += "<p>The right answer was: <b>" + item[1][item[2]] + "</b></p>";
  }
  html += "<button class='btn' onclick='nextQuestion()'>Next</button>";
  document.getElementById("popup").innerHTML = html;
}

function nextQuestion() {
  quizNumber = quizNumber + 1;
  showQuestion();
}

// Step 5: you pass if you miss at most one question
function finishQuiz() {
  var needed = quizList.length - 1;
  var html = "<h3>You got " + quizScore + " out of " + quizList.length + "</h3>";

  if (quizScore >= needed) {
    var quest = findQuest(quizId);
    player.done[quizId] = true;
    confetti();
    jumpPet();
    addXP(quest.xp);
    html += "<p>Quest complete! +" + quest.xp + " XP</p>";
    html += "<button class='btn dark' onclick='closePopup(); showMap();'>Back to map</button>";
  } else {
    html += "<p>You need at least " + needed + " to pass. Read the tips again and retry!</p>";
    html += "<button class='btn' onclick=\"startQuiz('" + quizId + "')\">Try again</button> ";
    html += "<button class='btn dark' onclick='closePopup()'>Close</button>";
  }
  document.getElementById("popup").innerHTML = html;
}


// ---------- 5. SCRIPT MODE (live call simulator) ----------
var simIndex = 0;
var simStep = 0;
var simPoints = 0;
var simChat = "";

function starText(n) {
  var text = "";
  for (var i = 0; i < 3; i++) {
    text += (i < n) ? "★" : "☆";
  }
  return text;
}

function showScripts() {
  var html = "<h2>Script Mode</h2><p>Practice real phone calls. Pick what you'd say and see how it goes. Beat your best stars to earn more XP!</p>";
  for (var i = 0; i < sims.length; i++) {
    var stars = player.stars[sims[i].id] || 0;
    html += "<div class='card row' style='justify-content:space-between'><div>";
    html += "<h3>" + sims[i].title + "</h3><div>" + sims[i].intro + "</div>";
    html += "<span class='stars'>" + starText(stars) + "</span></div>";
    html += "<button class='btn' onclick='startSim(" + i + ")'>" + (stars ? "Call again" : "Start call") + "</button></div>";
  }
  view.innerHTML = html;
}

function startSim(index) {
  simIndex = index;
  simStep = 0;
  simPoints = 0;
  simChat = "";
  showSimStep();
}

// the confidence bar shows how well the call is going so far
function meter() {
  var percent = simStep === 0 ? 50 : Math.round(simPoints / (simStep * 2) * 100);
  return "<small>Confidence</small><div class='meter'><div style='width:" + percent + "%'></div></div>";
}

function showSimStep() {
  var sim = sims[simIndex];
  if (simStep >= sim.steps.length) {
    endSim();
    return;
  }
  var step = sim.steps[simStep];
  var html = "<h2>" + sim.title + "</h2>" + meter();
  html += "<div class='card'>" + simChat;
  html += "<div class='bubble them'>" + step.them + "</div></div>";
  html += "<p><b>What do you say?</b> (" + (simStep + 1) + " of " + sim.steps.length + ")</p>";

  // show the options in a random order so the best one isn't always first
  var order = [0, 1, 2];
  order.sort(function () { return Math.random() - 0.5; });
  for (var i = 0; i < order.length; i++) {
    html += "<button class='option' onclick='pickSim(" + order[i] + ")'>" + step.opts[order[i]][0] + "</button>";
  }
  view.innerHTML = html;
}

function pickSim(optionNumber) {
  var step = sims[simIndex].steps[simStep];
  var opt = step.opts[optionNumber];
  simPoints = simPoints + opt[1];

  simChat += "<div class='bubble them'>" + step.them + "</div>";
  simChat += "<div class='bubble you'>" + opt[0] + "</div>";

  var labels = ["Oops.", "Okay.", "Nailed it!"];
  var classes = ["bad", "ok", "good"];
  simStep = simStep + 1;

  var html = "<h2>" + sims[simIndex].title + "</h2>" + meter();
  html += "<div class='card'>" + simChat + "</div>";
  html += "<div class='fb " + classes[opt[1]] + "'><b>" + labels[opt[1]] + "</b> " + opt[2] + "</div>";
  html += "<button class='btn' onclick='showSimStep()'>Next</button>";
  view.innerHTML = html;
}

function endSim() {
  var sim = sims[simIndex];
  var max = sim.steps.length * 2;
  var percent = simPoints / max;
  var stars = 0;
  if (percent >= 0.9) stars = 3;
  else if (percent >= 0.7) stars = 2;
  else if (percent >= 0.4) stars = 1;

  var html = "<h2>Call finished!</h2><div class='card' style='text-align:center'>";
  html += "<div class='stars'>" + starText(stars) + "</div>";
  html += "<h3>" + simPoints + " out of " + max + " points</h3>";

  var best = player.stars[sim.id] || 0;
  if (stars > best) {
    var gain = (stars - best) * 10;
    player.stars[sim.id] = stars;
    save();
    confetti();
    jumpPet();
    addXP(gain);
    html += "<p>New best! +" + gain + " XP</p>";
  } else if (stars === 0) {
    html += "<p>That one was rough. Try again, you've got this!</p>";
  } else {
    html += "<p>Your best is " + best + " stars. Beat it to earn more XP!</p>";
  }

  html += "<div class='row' style='justify-content:center'>";
  html += "<button class='btn' onclick='startSim(" + simIndex + ")'>Try again</button>";
  html += "<button class='btn dark' onclick='showScripts()'>All calls</button></div></div>";
  view.innerHTML = html;
}


// ---------- 6. DEADLINE RADAR ----------

// How many days until a date?
function daysUntil(dateText) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var due = new Date(dateText + "T00:00:00");
  return Math.round((due - today) / (1000 * 60 * 60 * 24));
}

function showRadar() {
  var html = "<h2>Deadline Radar</h2>";
  html += "<div class='card row'>";
  html += "<input id='dlName' placeholder='What is due? (rent, FAFSA...)'>";
  html += "<input id='dlDate' type='date'>";
  html += "<button class='btn' onclick='addDeadline()'>Add</button></div>";

  // put the closest dates first
  player.deadlines.sort(function (a, b) {
    return a.date.localeCompare(b.date);
  });

  if (player.deadlines.length === 0) {
    html += "<p>Nothing here yet. Add your first deadline!</p>";
  }

  for (var i = 0; i < player.deadlines.length; i++) {
    var d = player.deadlines[i];
    var days = daysUntil(d.date);
    var color = "";
    var label = days + " days left";

    if (days < 0) { color = "late"; label = "Past due"; }
    else if (days === 0) { color = "urgent"; label = "Today!"; }
    else if (days <= 3) { color = "urgent"; }
    else if (days <= 7) { color = "soon"; }

    html += "<div class='deadline " + color + "'>";
    html += "<div><b>" + d.name + "</b><br>" + d.date + "</div>";
    html += "<div class='row'><span>" + label + "</span>";
    html += "<button class='btn dark' onclick='finishDeadline(" + i + ")'>Done</button></div></div>";
  }
  view.innerHTML = html;
}

function addDeadline() {
  var name = document.getElementById("dlName").value;
  var date = document.getElementById("dlDate").value;
  if (name === "" || date === "") {
    showToast("Add a name and a date!");
    return;
  }
  player.deadlines.push({ name: name, date: date });
  save();
  showToast("Deadline added! ⏰");
  showRadar();
}

function finishDeadline(index) {
  player.deadlines.splice(index, 1);
  save();
  showToast("Handled it! 🙌");
  showRadar();
}


// ---------- 7. CREW ----------
function showCrew() {
  // make a list that has the friends AND you, then sort by XP
  var everyone = friends.slice();
  everyone.push({ name: "You", xp: player.xp, me: true });
  everyone.sort(function (a, b) { return b.xp - a.xp; });

  var html = "<h2>Your Crew</h2><p>Climb the leaderboard with your friends!</p>";
  for (var i = 0; i < everyone.length; i++) {
    var p = everyone[i];
    html += "<div class='member " + (p.me ? "me" : "") + "'>";
    html += "<span><b>#" + (i + 1) + "</b> " + p.name + " - " + p.xp + " XP</span>";
    if (!p.me) {
      html += "<button class='btn' onclick=\"cheer('" + p.name + "')\">Cheer</button>";
    }
    html += "</div>";
  }
  view.innerHTML = html;
}

function cheer(name) {
  var today = new Date().toDateString();
  if (player.cheered[name] === today) {
    showToast("You already cheered " + name + " today.");
    return;
  }
  player.cheered[name] = today;
  player.coins = player.coins + 2;
  save();
  updateTopBar();
  showToast("You cheered " + name + "! +2 coins");
}


// ---------- 8. FOCUS ROOM ----------
var secondsLeft = 25 * 60;
var timer = null;

function formatTime(total) {
  var minutes = Math.floor(total / 60);
  var seconds = total % 60;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
}

function showFocus() {
  var html = "<h2>Focus Room</h2><div class='card'>";
  html += "<p>3 people are studying quietly with you right now</p>";
  html += "<div class='timer' id='clock'>" + formatTime(secondsLeft) + "</div>";
  html += "<div class='row' style='justify-content:center'>";
  html += "<button class='btn' onclick='toggleTimer()'>" + (timer ? "Pause" : "Start") + "</button>";
  html += "<button class='btn dark' onclick='resetTimer()'>Reset</button></div>";
  html += "<p style='text-align:center'>Finish 25 minutes to earn +10 XP. Total focus time: " + player.focusMinutes + " min</p></div>";
  view.innerHTML = html;
}

function toggleTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(tick, 1000);
  }
  showFocus();
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  secondsLeft = 25 * 60;
  showFocus();
}

// runs once every second while the timer is on
function tick() {
  secondsLeft = secondsLeft - 1;
  var clock = document.getElementById("clock");
  if (clock) clock.textContent = formatTime(secondsLeft);

  if (secondsLeft <= 0) {
    clearInterval(timer);
    timer = null;
    secondsLeft = 25 * 60;
    player.focusMinutes = player.focusMinutes + 25;
    confetti();
    addXP(10);
    showToast("Focus session done! +10 XP");
    if (currentTab === "focus") showFocus();
  }
}


// ---------- 8b. MINIGAMES ----------
// Each game shows cards. You pick the left or right answer. "answer" is 0 (left) or 1 (right).
var games = [
  {
    id: "scam", title: "Scam or Safe", labels: ["Scam", "Safe"], pass: 5, xp: 20,
    intro: "Is this message a scam or is it safe?",
    cards: [
      { text: "Your bank: URGENT! Verify your password at bit-ly-secure-login.com", answer: 0, why: "Real banks never ask for your password by text." },
      { text: "Mom: Dinner is at 6, can you grab milk?", answer: 1, why: "Someone you know, and nothing is being asked of your money." },
      { text: "You WON a free iPhone! Pay $5 shipping to claim it.", answer: 0, why: "If you have to pay to win, it's a scam." },
      { text: "School office: Picture day is this Friday.", answer: 1, why: "No links, no money, and it's from your school." },
      { text: "Hi, I'm a recruiter. Send me your Social Security number to start.", answer: 0, why: "Never send your SSN to someone you haven't verified." },
      { text: "Your package is delayed. Click here and enter your card number.", answer: 0, why: "Fake delivery texts are a super common scam." }
    ]
  },
  {
    id: "needwant", title: "Need or Want", labels: ["Need", "Want"], pass: 6, xp: 20,
    intro: "Sort each thing into a NEED or a WANT.",
    cards: [
      { text: "Rent", answer: 0, why: "You need somewhere to live." },
      { text: "Streaming subscription", answer: 1, why: "Fun, but you can live without it." },
      { text: "Groceries", answer: 0, why: "Food is a must." },
      { text: "Designer sneakers", answer: 1, why: "Regular shoes are the need, designer is the want." },
      { text: "Health insurance", answer: 0, why: "It protects you from huge medical bills." },
      { text: "Concert tickets", answer: 1, why: "A great time, but a want." },
      { text: "Electric bill", answer: 0, why: "No power means big problems." },
      { text: "Third pair of headphones", answer: 1, why: "You already have some!" }
    ]
  },
  {
    id: "flag", title: "Red Flag or Green Flag", labels: ["Red flag", "Green flag"], pass: 5, xp: 20,
    intro: "Would you run from this job, or is it a good sign?",
    cards: [
      { text: "Your new boss asks you to pay a fee to start working.", answer: 0, why: "Real jobs pay you. You don't pay them." },
      { text: "Your pay and schedule are given to you in writing.", answer: 1, why: "Clear and in writing is what you want." },
      { text: "'We pay in cash, no paperwork needed.'", answer: 0, why: "No paperwork can mean no protection for you." },
      { text: "They hand you a W-4 and explain your rights.", answer: 1, why: "That's a legit, professional workplace." },
      { text: "You must work through breaks with no pay.", answer: 0, why: "That can break labor laws." },
      { text: "Your training hours are paid.", answer: 1, why: "Paid training is a great sign." }
    ]
  }
];

var currentGame = 0;
var cardNumber = 0;
var gameScore = 0;

function showGames() {
  var html = "<h2>Minigames</h2><p>Win a game to earn XP. This is how the app checks that you really learned something!</p>";
  for (var i = 0; i < games.length; i++) {
    var g = games[i];
    var earned = player.done["game_" + g.id];
    html += "<div class='card row' style='justify-content:space-between'>";
    html += "<div><h3 style='margin:0'>" + g.title + "</h3><small>" + g.intro + " Score " + g.pass + "/" + g.cards.length + " to earn +" + g.xp + " XP.</small></div>";
    html += "<button class='btn' onclick='startGame(" + i + ")'>" + (earned ? "✔ Play again" : "Play") + "</button></div>";
  }
  view.innerHTML = html;
}

function startGame(index) {
  currentGame = index;
  cardNumber = 0;
  gameScore = 0;
  // shuffle the cards so the order is different each time
  games[index].cards.sort(function () { return Math.random() - 0.5; });
  showCard();
}

function showCard() {
  var g = games[currentGame];
  if (cardNumber >= g.cards.length) {
    endGame();
    return;
  }
  var card = g.cards[cardNumber];
  var html = "<h2>" + g.title + "</h2>";
  html += "<p>Card " + (cardNumber + 1) + " of " + g.cards.length + " - Score: " + gameScore + "</p>";
  html += "<div class='gamecard'>" + card.text + "</div>";
  html += "<div class='bigbtns'>";
  html += "<button class='btn' onclick='answerCard(0)'>" + g.labels[0] + "</button>";
  html += "<button class='btn dark' onclick='answerCard(1)'>" + g.labels[1] + "</button></div>";
  view.innerHTML = html;
}

function answerCard(choice) {
  var g = games[currentGame];
  var card = g.cards[cardNumber];
  var right = (choice === card.answer);
  if (right) {
    gameScore = gameScore + 1;
    jumpPet();
  }

  var html = "<h2>" + g.title + "</h2>";
  html += "<div class='gamecard'>" + card.text + "</div>";
  html += "<div class='card' style='text-align:center'>";
  html += "<h3>" + (right ? "Correct!" : "Not quite") + "</h3>";
  html += "<p>Answer: <b>" + g.labels[card.answer] + "</b>. " + card.why + "</p>";
  html += "<button class='btn' onclick='nextCard()'>Next</button></div>";
  view.innerHTML = html;
}

function nextCard() {
  cardNumber = cardNumber + 1;
  showCard();
}

function endGame() {
  var g = games[currentGame];
  var key = "game_" + g.id;
  var html = "<h2>" + g.title + "</h2><div class='card' style='text-align:center'>";
  html += "<h3>You scored " + gameScore + " out of " + g.cards.length + "</h3>";

  if (gameScore >= g.pass) {
    if (!player.done[key]) {
      player.done[key] = true;
      confetti();
      jumpPet();
      addXP(g.xp);
      html += "<p>You won! +" + g.xp + " XP</p>";
    } else {
      html += "<p>You won again! (XP is only given the first time)</p>";
    }
  } else {
    html += "<p>You need " + g.pass + " to earn XP. Try again!</p>";
  }

  html += "<div class='row' style='justify-content:center'>";
  html += "<button class='btn' onclick='startGame(" + currentGame + ")'>Play again</button>";
  html += "<button class='btn dark' onclick='showGames()'>All games</button></div></div>";
  view.innerHTML = html;
}


// ---------- 8c. REWARDS (shop + badges) ----------
function showRewards() {
  var html = "<h2>Rewards</h2><p>You have <b>" + player.coins + " coins</b>. You earn coins from XP, daily streaks, cheering friends and badges.</p>";

  html += "<h3>Shop</h3><div class='shop'>";
  for (var i = 0; i < shopItems.length; i++) {
    var item = shopItems[i];
    var owned = player.owned[item.id];
    var equipped = (player.hat === item.id || player.theme === item.id);
    var label = "Buy for " + item.cost;
    if (owned) label = equipped ? "Take off" : "Use it";
    html += "<div class='card'><div class='icon'>" + item.icon + "</div><b>" + item.name + "</b><br>";
    html += "<button class='btn' onclick=\"shopClick('" + item.id + "')\">" + label + "</button></div>";
  }
  html += "</div><h3 style='margin-top:24px'>Badges</h3><div class='badges'>";
  for (var b = 0; b < badges.length; b++) {
    var got = player.badges[badges[b].name];
    html += "<div class='badge " + (got ? "" : "locked") + "'><b>" + (got ? "★ " : "") + badges[b].name + "</b><br>" + badges[b].desc + "</div>";
  }
  view.innerHTML = html + "</div>";
}

function shopClick(id) {
  var item = null;
  for (var i = 0; i < shopItems.length; i++) {
    if (shopItems[i].id === id) item = shopItems[i];
  }

  if (!player.owned[id]) {
    if (player.coins < item.cost) {
      showToast("You need " + (item.cost - player.coins) + " more coins");
      return;
    }
    player.coins = player.coins - item.cost;
    player.owned[id] = true;
    showToast("You bought " + item.name + "!");
    confetti();
  }

  // put it on, or take it off if you already wear it
  if (item.type === "hat") {
    player.hat = (player.hat === id) ? "" : id;
  } else {
    player.theme = (player.theme === id) ? "" : id;
  }
  save();
  updateTopBar();
  showRewards();
  checkBadges();
}


// ---------- 8d. DAILY CHALLENGE ----------
// The questions change every day and you can only play once a day.
var dailyList = [];
var dailyNumber = 0;
var dailyRight = 0;

// picks 3 questions based on today's date, so everybody gets the same ones
function todaysQuestions() {
  var d = new Date();
  var dayNumber = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  var start = (dayNumber * 3) % dailyPool.length;
  var list = [];
  for (var i = 0; i < 3; i++) {
    list.push(dailyPool[(start + i) % dailyPool.length]);
  }
  return list;
}

function showDaily() {
  var html = "<h2>Daily Challenge</h2>";

  if (player.dailyDate === new Date().toDateString()) {
    html += "<div class='card'><h3>You finished today's challenge</h3>";
    html += "<p>You got " + player.dailyScore + " out of 3. New questions show up tomorrow!</p>";
    html += "<p>Challenges finished so far: " + player.dailyCount + "</p></div>";
  } else {
    html += "<div class='card'><p>3 new questions every day. Finish them for bonus XP, and get all 3 right for extra coins.</p>";
    html += "<button class='btn' onclick='startDaily()'>Start today's challenge</button></div>";
  }
  view.innerHTML = html;
}

function startDaily() {
  dailyList = todaysQuestions();
  dailyNumber = 0;
  dailyRight = 0;
  showDailyQuestion();
}

function showDailyQuestion() {
  if (dailyNumber >= dailyList.length) {
    finishDaily();
    return;
  }
  var item = dailyList[dailyNumber];
  var html = "<h2>Daily Challenge</h2><p>Question " + (dailyNumber + 1) + " of 3</p>";
  html += "<div class='card'><h3>" + item[0] + "</h3>";

  // mix up the options
  var order = [0, 1, 2];
  order.sort(function () { return Math.random() - 0.5; });
  for (var i = 0; i < order.length; i++) {
    html += "<button class='option' onclick='pickDaily(" + order[i] + ")'>" + item[1][order[i]] + "</button>";
  }
  view.innerHTML = html + "</div>";
}

function pickDaily(choice) {
  var item = dailyList[dailyNumber];
  var right = (choice === item[2]);
  if (right) dailyRight = dailyRight + 1;

  var html = "<h2>Daily Challenge</h2><div class='card'>";
  html += "<h3>" + (right ? "Correct!" : "Not quite") + "</h3>";
  if (!right) {
    html += "<p>The right answer was: <b>" + item[1][item[2]] + "</b></p>";
  }
  html += "<button class='btn' onclick='nextDaily()'>Next</button></div>";
  view.innerHTML = html;
}

function nextDaily() {
  dailyNumber = dailyNumber + 1;
  showDailyQuestion();
}

function finishDaily() {
  player.dailyDate = new Date().toDateString();
  player.dailyScore = dailyRight;
  player.dailyCount = player.dailyCount + 1;

  var xp = 10 + dailyRight * 5;
  var html = "<h2>Daily Challenge</h2><div class='card' style='text-align:center'>";
  html += "<h3>You got " + dailyRight + " out of 3</h3>";
  html += "<p>+" + xp + " XP</p>";

  if (dailyRight === 3) {
    player.coins = player.coins + 10;
    html += "<p>Perfect score! +10 bonus coins</p>";
  }
  if (dailyRight >= 2) confetti();
  jumpPet();
  addXP(xp);       // this also saves everything
  html += "<p>Come back tomorrow for new questions.</p></div>";
  view.innerHTML = html;
}


// ---------- 9. SWITCHING TABS AND MODES ----------
function show(tabName) {
  currentTab = tabName;
  updateTopBar();

  if (tabName === "map") showMap();
  if (tabName === "daily") showDaily();
  if (tabName === "games") showGames();
  if (tabName === "scripts") showScripts();
  if (tabName === "radar") showRadar();
  if (tabName === "crew") showCrew();
  if (tabName === "focus") showFocus();
  if (tabName === "rewards") showRewards();
}

function setMode(mode) {
  player.mode = mode;
  save();
  show(currentTab);
}

document.getElementById("tab-map").onclick = function () { show("map"); };
document.getElementById("tab-daily").onclick = function () { show("daily"); };
document.getElementById("tab-games").onclick = function () { show("games"); };
document.getElementById("tab-scripts").onclick = function () { show("scripts"); };
document.getElementById("tab-radar").onclick = function () { show("radar"); };
document.getElementById("tab-crew").onclick = function () { show("crew"); };
document.getElementById("tab-rewards").onclick = function () { show("rewards"); };
document.getElementById("tab-focus").onclick = function () { show("focus"); };
document.getElementById("teenBtn").onclick = function () { setMode("teen"); };
document.getElementById("adultBtn").onclick = function () { setMode("adult"); };

document.getElementById("resetBtn").onclick = function () {
  if (confirm("Delete all your progress?")) {
    localStorage.removeItem("sidequest");
    location.reload();
  }
};

// Start the app on the Life Map
checkStreak();
show("map");
