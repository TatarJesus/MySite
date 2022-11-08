// const textEl = document.getElementById('text');
// const speakEl = document.getElementById('speak');

// speakEl.addEventListener('click', textToSpeech);

// function textToSpeech(){
//     window.speechSynthesis.cancel();
//     const text = textEl.value;
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
// }
readyTexts = ["They say that good books cannot become old. I can say the same about the books of a unique English writer of the 19th century, Charlotte Bronte. She is one of the best representatives of the English realism trend. My favourite book by Charlotte Bronte is the novel that brought her fame, «Jane Eyre». «Jane Eyre» is an autobiographical novel. The main character is a shy girl, who has, however, a strong will and is independent. From her childhood Jane learned that she could rely only on herself. She came from a poor family, studied at Lowood institution for poor chil­dren, where she had to face many difficulties. But she learned to overcome her fears and troubles. She was also able to sympathize with other people and give a helping hand in a difficult situation. \n\nAs Charlotte Bronte herself, Jane worked as a governess. Jane fell in love v. th her master, Mr. Rochester. Later, she found out that Mr. Rochester was married and she had to leave his house. A new life was not easy for her, but she managed to overcome everything and become happy with her beloved, after he had lost wife. There are many realistic and romantic details in the novel, Deep feelings of the main characters helped them not to lose their ability to share feelings.\n\nThere are many screen versions of the novel and the book is still read with great interest.",
  "My name is Sergey. I am a university student. Every day I have three or four classes, so I do not usually have much time for meals. Cooking is not my hobby, I usually eat what my mother cooks for me or go to the student canteen. In the morning we gather together in our kitchen at 7 o'clock and have our breakfast. It is a family tradition. My mother lays the table. There are different kinds of sandwiches, sausages, bacon with eggs and jam. I often drink a cup of tea or coffee and eat a sandwich with butter and cheese.\n\nAs there is a student canteen at the university, I often go there for dinner after classes. There you may choose between different kinds of soup, meat and fish dishes and desserts. I often choose borsch for the first course and beefsteak for the second one. For dessert I often take stewed fruit or jelly. In our university canteen I usually have dinner with my friends. We may discuss our student life and make plans for the evening.\n\nI often come home at about seven. As I am often hungry after a long day. I do not have a snack in the evening. My supper is a full meal. My mother usually cooks mashed potatoes with meat or sausages, and salads, of course. After supper I do my home work, play computer games and watch TV. Before going to bed I sometimes eat some fruit or drink fruit juice.",
  "Foreign languages are absolutely necessary for people nowadays. More and more people of different professions decide to study foreign languages in order to raise their professional level. Making business nowadays means the ability to speak at least one foreign language. Among the most popular foreign languages in Russia are English, German, Spanish. French and Italian.\n\nEnglish is the language of business correspondence, many foreign newspapers and magazines, and communication between people of different nationalities all over the world. Reading foreign literature in the original, understanding foreign films without translation, making friends with people of other nationalities may make our intellectual and cultural horizons wider.\n\nForeign languages often bring new perspectives in career and private life. Many aspects of our Life, like science, entertainment, business, studying became international. Many Russians decide to receive good education, start their career or just spend some time abroad. Upon returning to Russia they are able to share their knowledge, experience and information gained abroad with their colleagues and friends.",
  "A modern person cannot imagine their life without TV. It is a source of interesting information, fun, and sometimes addiction. Everyone can find here something to the own taste. One may watch a documentary, a soap opera, a game show, a cartoon, news, etc. I do not often watch soap operas as I find them dull. Sometimes, I watch news or a documentary, for I like to learn about important events that just have happened in the world or about interesting people and historical events. As I am not a hot-tempered person, game shows, where people play games in order to win money or prizes, do not attract me very much. I like to learn useful information that can make my life easier and more beautiful.\n\nOne of my hobbies is fashion. There are a lot of TV programmes that give in-formation about the latest trends in this sphere. My favourite programme is 'Your Style'. It is a weekly programme, and I try to watch it each time it appears on TV. It starts with giving the latest news from the world of fashion, and showing the most interesting collections of the famous designers. Then, fashion experts give their advice, how one may find their own style and look attractive. I have already learned how to combine the colours, how to choose the right length of a dress, how to look elegant and charming. Clothes influence our character and mood and form he first impression about us. That's why it is so important for me to find my own style in clothes. They say, I always look attractive, elegant and fashionable. That's because I am keen on fashion. They say, fashion is international. But how else could I learn about the latest fashion trends if there were no TV?",
  "",
]

// grab the UI elements to work with
const textEl = document.getElementById('text');
const voiceInEl = document.getElementById('voice');
const pitchInEl = document.getElementById('pitch');
const rateInEl = document.getElementById('rate');
const volumeInEl = document.getElementById('volume');
const pitchOutEl = document.querySelector('output[for="pitch"]');
const rateOutEl = document.querySelector('output[for="rate"]');
const volumeOutEl = document.querySelector('output[for="volume"]');
const speakEl = document.getElementById('speak');
const setEl = document.getElementById('setting');
const closeEl = document.getElementById('close');
const closeEl1 = document.getElementById('close1');
const pauseEl = document.getElementById('pause');
const stopEl = document.getElementById('stop');
const readEl = document.getElementById('texts');
const clearEl = document.getElementById('clear');

// add UI event handlers
pitchInEl.addEventListener('change', updateOutputs);
rateInEl.addEventListener('change', updateOutputs);
volumeInEl.addEventListener('change', updateOutputs);
speakEl.addEventListener('click', speakText);
setEl.addEventListener('click', settingVoice);
closeEl.addEventListener('click', settingVoice);
closeEl1.addEventListener('click', openCloseReadyTexts);
pauseEl.addEventListener('click', pause);
stopEl.addEventListener('click', stop);
readEl.addEventListener('click', openCloseReadyTexts);
clearEl.addEventListener('click', clearTextarea);

function clearTextarea(){
  textEl.innerHTML = '';
}

// update voices immediately and whenever they are loaded
updateVoices();
window.speechSynthesis.onvoiceschanged = updateVoices;

function updateOutputs() {
  // display current values of all range inputs
  pitchOutEl.textContent = pitchInEl.value;
  rateOutEl.textContent = rateInEl.value;
  volumeOutEl.textContent = volumeInEl.value;
}

function updateVoices() {
  // add an option for each available voice that isn't already added
  window.speechSynthesis.getVoices().forEach(voice => {
    const isAlreadyAdded = [...voiceInEl.options].some(option => option.value === voice.voiceURI);
    if (!isAlreadyAdded) {
      const option = new Option(voice.name, voice.voiceURI, voice.default, voice.default);
      voiceInEl.add(option);
    }
  });
}

function settingVoice() {
  document.querySelector('.block-choose-text').style.display = 'none';
  const BlockMain = document.querySelector('.main-wrapper');
  const BlockSet = document.querySelector('.block-set');
  if (getComputedStyle(BlockSet).display == 'none') {
    BlockMain.style.width = '80%';
    BlockSet.style.display = 'block';
  }
  else {
    BlockMain.style.width = '100%';
    BlockSet.style.display = 'none';
  }
}

function openCloseReadyTexts() {
  document.querySelector('.block-set').style.display = 'none';
  const BlockMain = document.querySelector('.main-wrapper');
  const BlockChs = document.querySelector('.block-choose-text');
  if (getComputedStyle(BlockChs).display == 'none') {
    BlockMain.style.width = '80%';
    BlockChs.style.display = 'block';
  }
  else {
    BlockMain.style.width = '100%';
    BlockChs.style.display = 'none';
  }
}

function speakText() {
  if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    // window.speechSynthesis.cancel();
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const text = textEl.value;
    const utterance = new SpeechSynthesisUtterance(text);
    console.log(text);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.voiceURI === voiceInEl.value);
    utterance.pitch = pitchInEl.value;
    utterance.rate = rateInEl.value;
    utterance.volume = volumeInEl.value;
    utterance.addEventListener('start', handleStart);
    utterance.addEventListener('pause', handlePause);
    utterance.addEventListener('resume', handleResume);
    utterance.addEventListener('end', handleEnd);
    utterance.addEventListener('boundary', handleBoundary);
    window.speechSynthesis.speak(utterance);
    handleStart();
    // handleBoundary(text);
  }
  // // stop any speaking in progress
  // window.speechSynthesis.cancel();

  // // create new utterance with all the properties
  // const text = textEl.value;
  // const utterance = new SpeechSynthesisUtterance(text);
  // utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.voiceURI === voiceInEl.value);
  // utterance.pitch = pitchInEl.value;
  // utterance.rate = rateInEl.value;
  // utterance.volume = volumeInEl.value;

  // // speak that utterance
  // window.speechSynthesis.speak(utterance);
}

function pause() {
  window.speechSynthesis.pause();
  handlePause();
}

function stop() {
  window.speechSynthesis.cancel();

  // Safari doesn't fire the 'end'
  // event when cancelling,
  // so call handler manually
  handleEnd();
}

function handleStart() {
  speakEl.disabled = true;
  pauseEl.disabled = false;
  stopEl.disabled = false;
  clearEl.disabled = true;
}

function handlePause() {
  speakEl.disabled = false;
  pauseEl.disabled = true;
  stopEl.disabled = false;
}

function handleResume() {
  speakEl.disabled = true;
  pauseEl.disabled = false;
  stopEl.disabled = false;
}

function handleEnd() {
  speakEl.disabled = false;
  pauseEl.disabled = true;
  stopEl.disabled = true;
  clearEl.disabled = false;

  // reset text to remove mark

}

function handleBoundary(event) {
  if (event.name === 'sentence') {
    // we only care about word boundaries
    return;
  }

  const wordStart = event.charIndex;
  let wordLength = event.charLength;
  if (wordLength === undefined) {
    // Safari doesn't provide charLength,
    // so fall back to a regex to find
    // the current word and its length
    // (probably misses some edge cases,
    // but good enough for this demo)
    const match = text.substring(wordStart).match(/^[a-z\d']*/i);
    wordLength = match[0].length;
  }

  // wrap word in mark tag
  const wordEnd = wordStart + wordLength;
  const word = text.substring(wordStart, wordEnd);
  const markedText = text.substring(0, wordStart) + '<mark>' + word + '</mark>' + text.substring(wordEnd);
  textEl.innerHTML = markedText;
  console.log('jjj');
}


function chooseText(i) {
  textEl.innerHTML = readyTexts[i-1];
}