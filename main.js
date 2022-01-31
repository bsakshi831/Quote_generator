console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
//console.log(document.all);
console.log(document.images);

let btn = document.getElementById('btn-primary');
let output = document.getElementById('output');
let quotes = [
    '“You’re off to great places, today is your day. Your mountain is waiting, so get on your way.”',
    '“No one is perfect - that’s why pencils have erasers.”',
    '“It always seems impossible until it is done.”',
    '“The only time you fail is when you fall down and stay down.”',
    '“You are never too old to set another goal or dream a new dream.”',
    '“Every day may not be good... but there’s something good in every day.”',
    '“The difference between ordinary and extraordinary is that little extra.”',
    '“A truly happy person is one who can enjoy the scenery while on a detour.”',
    '"No medicine cures what happiness and positivity cannot."',
    '"Being happy never goes out of style."',
    '"All your life, you will be faced with a choice. You can choose love or hate…I choose love."',
    '“You yourself, as much as anybody in the entire universe, deserve your love and affection."',
    '“You are enough. A thousand times enough.”',
    ' “Keep watering yourself. You’re growing.”',
    '“When things change inside you, things change around you."',
    '“Keep taking time for yourself until you’re you again.”',
    '“Be enough for yourself first. The rest of the world can wait.”',
    '“Loving yourself isn’t vanity; it’s sanity.”',
    '“Be about ten times more magnanimous than you believe yourself capable of. Your life will be a hundred times better for it.”',
    '“Self-love is the greatest middle finger of all time.”',
    '“Fall in love with taking care of yourself. Fall in love with the path of deep healing. Fall in love with becoming the best version of yourself but with patience, with compassion, and respect to your own journey.”',
    '“The same light you see in others is shining within you, too.”',
    '“No one is you and that is your superpower.”',
    '“Beauty begins the moment you decide to be yourself.”',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
});