var lightTheme = document.getElementById("light");
var darkTheme = document.getElementById("dark");
var body = document.body;
var newTheme = document.getElementById("newTheme");
var inputTheme = document.querySelector(".input-nmg");
var chatMistake = document.querySelector(".chatMistake");
var userInput = document.getElementById("userInput");
var chatNmg = document.getElementById("chatNmg");
var hdTheme = document.getElementById("hdTheme")
lightTheme.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.remove("dark");
    body.classList.add("light");
    newTheme.style.backgroundColor="white";
    inputTheme.style.backgroundColor="white";
    userInput.style.backgroundColor="white";
    userInput.style.color ="black";
    chatNmg.style.color="black";
    chatMistake.style.color = "black";
    hdTheme.style.color ="black";
    
});

darkTheme.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.remove("light");
    body.classList.add("dark");
    newTheme.style.backgroundColor="black";
    inputTheme.style.backgroundColor="black";
    userInput.style.backgroundColor="rgba(230, 238, 240, 0.651)";
    userInput.style.color ="black";
    chatNmg.style.color="white";
    chatMistake.style.color = "white";
    hdTheme.style.color ="white";
});

   var chatBotElement = document.getElementById("chatBot");
   var isBotTyping = false;
   var chatBot ="chatNMG";

document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (!isBotTyping) {
            messageContent();
        }
    }
});

function sendMessage() {
    if (!isBotTyping) {
        messageContent();
    }
}

function messageContent() {
    var textExpln = document.getElementById("explnTg");
    var userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") {
        return;
    }

    document.getElementById("userInput").value = "";
    textExpln.style.display = "none";
    showMessage("You", userInput);

    setTimeout(function() {
        isBotTyping = true;
        if (isSingleWord(userInput)) {
            singleWord(userInput);
        } else {
           
            phraseWords(userInput);
        }
    }, 500);
}

function isSingleWord(input) {
    return input.split(/\s+/).length === 1;
}


var wordList = [
];


function singleWord(single) {
    const charactersToRemove = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];
    charactersToRemove.forEach(char => {
        single = single.replace(new RegExp('\\' + char, 'g'), '');
    });
    var dissatisfactionResponse = handleUserDissatisfaction(single);
    if (dissatisfactionResponse) {
        botResponse = dissatisfactionResponse;
    } else {
        var botResponse = "I'm sorry, I didn't quite catch that. Could you please provide more details or try rephrasing your question?";

        var wordMatched = othersWordList.find(word => single.toLowerCase() === word.toLowerCase());
        var matchedScience = scienceWordList.find(word => single.toLowerCase() === word.toLowerCase());
        var environmentWord = environmentWordList.find(word => single.toLowerCase() === word.toLowerCase());
        var greetingWord = greetingsWordList.find(word => single.toLowerCase() === word.toLowerCase());
        var acceptingWord = acceptingWords.find(word => single.toLowerCase() === word.toLowerCase());
        if (wordMatched) {
            botResponse = otherWord(wordMatched);
        } else if (matchedScience) {
            botResponse = scienceWord(matchedScience);
        } else if (environmentWord) {
            botResponse = environmentWordResponse(environmentWord);
        } else if (greetingWord) {
            botResponse = greetingsResponse(greetingWord);
        } else if (acceptingWord) {
            botResponse = handleAcceptingWords(acceptingWord);
        }
    }

    typeOutMessage(chatBot,botResponse);
}


var physWordList = [
                    "bernoulli's", 'theorem', 'phyics', 'physician', 'physics',
                ];
                var biosWordList = [
                    'anatomy', 'meningitis', 'meninges', 'urine',
                    'physiology', 'celebrospinal', 'csf', 'celebro', 'celebro spinal',
                    'staphylococcus', 'staphalococcus', 'aureus', 'staphylo', 'urea cycle',
                    'urea', 'phytophthora', 'resting potential', 'action potential', 'biology',
                    'oomycota', 'water molds', 'phyacophyta', 'neuroglia', 'glial cells', 'glia',
                    'vein that supply',
                ];
                var mathWordList = [
                    'mathematics', 'rectengular', 'triangle', 'pythagorus',
                ];
                var civicWordList = [
                    'government', 'state', 'judiciary', 'perliament', 'civics',
                ];
                var entertainWordList = [
                    'music', 'nana', 'falling', 'mtazamaji', 'mpenzi', 'kope', 'kinyerezi',
                    'shirazi', 'kaka', 'shiraz', 'alikiba', 'ali kiba', 'ali', 'kiba', 'thom', 'sechuma',
                ];
                var techWordList = [
                    'chatgpt', 'chat gpt', 'gpt',
                ];
                var economicWordList = [
                    'key principle', 'excellent customer', 'empathy', 'active listening', 'interactions',
                    'interaction', 'mechanisms for business', 'enterprises', 'costs', 'production',
                ];
                var botWordList = [
                    'nmgai', 'nmg',
                ];
                var envirnWordList = [
                    'environmental', 'social risk', 'hse',
                ];
                var chemWordList = [
                    'free radical', 'substitution', 'chemistry',
                ];
                var othersWordList = [
                    'typewriter', 'typewritter', 'shorthand',"book", "chair", "table", "lamp", "pen", "notebook", "cup", "plate", "spoon", "fork", "knife", "phone", "computer", "keyboard", "mouse", "television", "remote", "window", "door", "bed", "pillow", "blanket", "towel", "soap", "shampoo", "toothbrush", "toothpaste", "mirror", "clock", "calendar", "bag", "shoes", "jacket", "hat", "glasses", "wallet", "keys", "bicycle", "car", 'howdy', 'goodbye', 'bye', 'see you later',
    'please', 'yes', 'no', 'okay', 'ok', 'sure', 'maybe', 'help', 'information', 'question',
    'answer', 'problem', 'solution', 'error', 'issue', 'understand', 'confused', 'clear', 
    'explain', 'example', 'demo', 'tutorial', 'guide', 'video', 'audio', 'image', 'picture',
    'text', 'article', 'website', 'link', 'page', 'click', 'read', 'write', 'edit', 'create',
    'delete', 'update', 'modify', 'save', 'open', 'close', 'start', 'stop', 'play', 'pause',
    'record', 'download', 'upload', 'share', 'send', 'receive', 'search', 'find', 'browse',
    'navigate', 'refresh', 'reload', 'next', 'previous', 'first', 'last', 'today', 'yesterday',
    'tomorrow', 'day', 'night', 'morning', 'afternoon', 'evening', 'week', 'month', 'year',
    'minute', 'hour', 'second', 'time', 'date', 'calendar', 'clock', 'sun', 'moon', 'star',
    'sky', 'cloud', 'rain', 'snow', 'wind', 'weather', 'temperature', 'hot', 'warm', 'cold',
    'cool', 'freezing', 'sunny', 'cloudy', 'rainy', 'snowy', 'windy', 'stormy', 'foggy', 'clear',
    'bright', 'dark', 'light', 'shadow', 'color', 'red', 'blue', 'green', 'yellow', 'orange',
    'purple', 'pink', 'black', 'white', 'gray', 'brown', 'beige', 'silver', 'gold', 'metal',
    'wood', 'stone', 'glass', 'plastic', 'paper', 'fabric', 'cotton', 'silk', 'wool', 'leather',
    'rubber', 'computer', 'device', 'software', 'hardware', 'program', 'application', 'app',
    'website', 'webpage', 'internet', 'network', 'server', 'client', 'database', 'file', 'folder',
    'document', 'image', 'video', 'audio', 'music', 'song', 'movie', 'film', 'book', 'story',
    'novel', 'article', 'essay', 'poem', 'quote', 'saying', 'word', 'phrase', 'sentence', 'paragraph',
    'chapter', 'section', 'title', 'author', 'artist', 'musician', 'actor', 'director', 'producer',
    'writer', 'editor', 'designer', 'developer', 'engineer', 'scientist', 'researcher', 'doctor',
    'teacher', 'student', 'school', 'college', 'university', 'class', 'lesson', 'lecture', 'study',
    'research', 'experiment', 'theory', 'hypothesis', 'observation', 'analysis', 'conclusion',
    'result', 'outcome', 'fact', 'fiction', 'fictional', 'real', 'imaginary', 'virtual', 'physical',
    'mental', 'emotional', 'spiritual', 'religious', 'philosophical', 'scientific', 'mathematical',
    'logical', 'rational', 'irrational', 'absurd', 'nonsense', 'sense', 'meaning', 'purpose',
    'goal', 'achievement', 'success', 'failure', 'mistake', 'error', 'correction', 'improvement',
    'progress', 'development', 'growth', 'evolution', 'revolution', 'change', 'challenge', 'problem',
    'solution', 'opportunity', 'risk', 'reward', 'benefit', 'advantage', 'disadvantage', 'pros',
    'cons', 'strength', 'weakness', 'quality', 'quantity', 'value', 'price', 'cost', 'expense',
    'investment', 'profit', 'loss', 'risk', 'safety', 'security', 'danger', 'threat', 'hazard',
    'emergency', 'accident', 'incident', 'injury', 'damage', 'repair', 'maintenance', 'cleaning',
    'health', 'wellness', 'fitness', 'exercise', 'diet', 'nutrition', 'food', 'meal', 'drink',
    'water', 'juice', 'soda', 'coffee', 'tea', 'alcohol', 'wine', 'beer', 'liquor', 'spirit',
    'cocktail', 'whiskey', 'vodka', 'rum', 'gin', 'brandy', 'champagne', 'toast', 'celebration',
    'party', 'event', 'occasion', 'wedding', 'birthday', 'anniversary', 'holiday', 'vacation',
    'trip', 'journey', 'adventure', 'exploration', 'discovery', 'experience', 'memory', 'nostalgia',
    'dream', 'fantasy', 'imagination', 'creativity', 'art', 'music', 'dance', 'painting', 'drawing',
    'sculpture', 'photography', 'film', 'literature', 'poetry', 'theater', 'performance', 'acting',
    'singing', 'playing', 'gaming', 'competition', 'challenge', 'contest', 'tournament', 'match',
    'gameplay', 'strategy', 'tactic', 'move', 'decision', 'choice', 'option', 'selection', 'winner',
    'loser', 'champion', 'player', 'team', 'squad', 'opponent', 'enemy', 'ally', 'friend', 'foe',
    'partner', 'companion', 'mate', 'colleague', 'associate', 'acquaintance', 'stranger', 'neighbor',
    'community', 'society', 'culture', 'tradition', 'custom', 'ritual', 'ceremony', 'ritual',
    'belief', 'faith', 'religion', 'spirituality', 'god'
                ];
                var streetWordList = [
                    'wozaah', 'wozah', 'woza', 'wozaa',
                ];
                var greetingsWordList = [
    'hello', 'hi', 'hey', 'yo', 'greetings', 'salutations', 'howdy', 'hola', 'bonjour', 'ciao', 'hallo', 'namaste'
];
                var thankWordList = [
                    'thanks', 'thank you', 'okey', 'ok', 'yes',
                ];
                var phraseList = [
                    'your name', 'excuse me',
                ];
                var swahiliWordList = [
                    'kiswahili', 'kishazi', 'nomino', 
                    'maneno', 'swahili', 'huru', 'tegemezi', 'vishazi',
                    'vitenzi', 'vielezi','vihisishi','vivumishi','asili',
                    'chimbuko','jamani','lugha', 'msamiati','misamiati','neno',
                ];
                var geoWordList = [
                    'geography', 'meteor', 'astronomy',
                ];
                var codeWordList = [
                    'html', 'javascript', 'php','css',
                ];
                var historyWordList = [
                    'history', 'historian',
                ];

                var codeWordList = [
                    'html', 'javascript', 'php','css',
                ];
                var scienceWordList = [
     'astronomy', 'geology', 'meteorology', 'ecology', 'botany', 'zoology', 'genetics', 'microbiology', 'biochemistry', 'organic chemistry', 'inorganic chemistry', 'physical chemistry', 'nuclear physics', 'quantum physics', 'particle physics', 'cosmology', 'planetary science', 'seismology', 'volcanology', 'climatology', 'oceanography', 'environmental science', 'ecosystem', 'evolution', 'natural selection', 'cell biology', 'molecular biology', 'neuroscience','cell','natural'
];

var environmentWordList = [
    'air', 'water', 'land', 'climate', 'pollution', 'deforestation', 'biodiversity', 'conservation', 'sustainability', 'ecosystem', 'habitat', 'ozone', 'recycling', 'waste', 'energy', 'emissions', 'carbon', 'greenhouse', 'warming', 'acidification', 'erosion', 'desertification', 'contamination', 'degradation', 'solar', 'wind', 'hydroelectric', 'geothermal', 'biomass', 'renewable', 'sustainable', 'renewal', 'regeneration', 'reclamation', 'mitigation', 'adaptation', 'resilience'
];
var statementGreetings = [
'good morning', 'good afternoon', 'good evening', 'how are you',
    'nice to meet you', 'pleased to meet you', 'it\'s nice to meet you', 'it\'s a pleasure to meet you',
    'nice meeting you', 'pleasure meeting you', 'good to see you', 'it\'s good to see you', 
    'nice to see you', 'pleased to see you', 'it\'s nice to see you', 'it\'s a pleasure to see you',
    'how\'s it going', 'how do you do', 'how\'s your day', 'what\'s up', 'sup', 'how was your weekend',
    'how\'s the weather', 'what are you doing', 'tell me a joke', 'tell me about yourself',
    'do you like music', 'do you have any hobbies', 'what\'s your favorite movie', 'what movies do you like',
    'do you like sports', 'do you have any pets'
];



var thankingStatements = ['thank you very much', 'thanks for your help', 'thanks so much', 'thank you for your assistance', 'thanks a lot', 'thank you', 'thanks'].sort((a, b) => b.length - a.length);
var acceptingWords = ['okey', 'ok', 'yes', 'yep', 'yeah', 'alright', 'sure', 'fine', 'cool'];
var botDetailsWords = [
    'your name', 'who are you', 'what is your name', 'introduce yourself', 'who created you', 'what do you do',
    'where are you from', 'how old are you', 'are you human', 'are you a robot', 'are you a chatbot'
];


function removeSomeDt(input) {
    const charactersToRemove = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];
    let cleanedInput = input;
    charactersToRemove.forEach(char => {
        cleanedInput = cleanedInput.replace(new RegExp('\\' + char, 'g'), '');
    });
    return cleanedInput;
}
function phraseWords(phrase) {
    var freshWords = removeSomeDt(phrase);
    var words = freshWords.split(/\s+/);
    var botResponse = "";
    
    var dissatisfactionResponse = handleUserDissatisfaction(freshWords);
    if (dissatisfactionResponse) {
        botResponse = dissatisfactionResponse;
    } else {
    var matchedOthersWord = othersWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedscienceWord = scienceWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedenvironmentWord = environmentWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedbiosWord = biosWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedphysWord = physWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedmathWord = mathWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedcivicWord = civicWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedentertainWord = entertainWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedtechWord = techWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedeconomicWord = economicWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedbotWord = botWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedenvirnWord = envirnWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedchemWord = chemWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedstreetWord = streetWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedthankWord = thankWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedswahiliWord = swahiliWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedgeoWord = geoWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedhistoryWord = historyWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedcodeWord = codeWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
    var matchedstatementGreeting = statementGreetings.find(greeting => freshWords.toLowerCase().includes(greeting));
    var matchedThankingStatement = thankingStatements.find(thanking => freshWords.toLowerCase().includes(thanking));
    var botWordsQns = botDetailsWords.find(thanking => freshWords.toLowerCase().includes(thanking));
    
    if (matchedOthersWord) {
        botResponse = otherWord(matchedOthersWord);
    } else if (botWordsQns) {
        botResponse = handleBotDetails(botWordsQns);
    } else if (matchedThankingStatement) {
        botResponse = thankingStatementsResponse(matchedThankingStatement);
    }else if (matchedscienceWord) {
        botResponse = scienceWord(matchedscienceWord);
    } else if (matchedenvironmentWord) {
        botResponse = environmentWordResponse(matchedenvironmentWord);
    } else if (matchedbiosWord) {
        botResponse = biosWords(matchedbiosWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedphysWord) {
        botResponse = physicsWords(matchedphysWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedmathWord) {
        botResponse = mathWords(matchedmathWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedcivicWord) {
        botResponse = civicsWords(matchedcivicWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedentertainWord) {
        botResponse = entertainWords(matchedentertainWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedtechWord) {
        botResponse = techWords(matchedtechWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedeconomicWord) {
        botResponse = economicWords(matchedeconomicWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedbotWord) {
        botResponse = botWords(matchedbotWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedenvirnWord) {
        botResponse = environmentWords(matchedenvirnWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedchemWord) {
        botResponse = chemistryWords(matchedchemWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedstreetWord) {
        botResponse = streetWords(matchedstreetWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedthankWord) {
        botResponse = thankWords(matchedthankWord);
    } else if (matchedswahiliWord) {
        botResponse = kiswahiliWords(matchedswahiliWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedgeoWord) {
        botResponse = geoWords(matchedgeoWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedcodeWord) {
        botResponse = codeWords(matchedcodeWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedhistoryWord) {
        botResponse = historyWords(matchedhistoryWord)
        .replace(/[\/\-@]/g, '')
        .replace(/\./g, ".<br><br>")
        .replace(/\s{2,}/g, ' ');
    } else if (matchedstatementGreeting) {
        botResponse = statementGreetingsResponse(matchedstatementGreeting);
    }  else {
        botResponse = "Apologies, I may not have comprehended your question regarding \"" + `${freshWords.toLowerCase()}` + "\" This could be due to the information I last trained on in January, 2024 or a possible misphrasing on your part. I am having difficulty understanding it. Please consider rephrasing your question, and I'll be happy to assist. I apologize for any inconvenience caused.";
    } 
    }
    typeOutMessage(chatBot,botResponse);
}





function showMessage(name, message) {
    var messageElement = document.createElement("div");
     messageElement.setAttribute("id", "msgElement");
    var nameDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
    nameDiv.setAttribute("id", "name");
    nameDiv.innerText = name;
    messageDiv.setAttribute("id", "message");
    messageDiv.innerHTML = message;
    messageElement.appendChild(nameDiv);
    messageElement.appendChild(messageDiv);
    chatBotElement.appendChild(messageElement);
    chatBotElement.scrollTop = chatBotElement.scrollHeight;
}
function typeOutMessage(name, message) {
    var messageElement = document.createElement("div");
    var nameDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
    nameDiv.setAttribute("id", "name");
    nameDiv.innerText = name;
    messageDiv.setAttribute("id", "message");
    messageElement.appendChild(nameDiv);
    messageElement.appendChild(messageDiv);
    chatBotElement.appendChild(messageElement);

    var lastIndex = 0;
    var regex = /<b>(.*?)<\/b>/g;
    var regex1 = /<p>(.*?)<\/p>/g;
    var match;
    if (regex) {
        while ((match = regex.exec(message)) !== null) {
            var wordInsideTag = match[1]; 
            var tagIndex = match.index;
            var tagLength = match[0].length;

            messageDiv.innerHTML += message.substring(lastIndex, tagIndex);

            var boldSpan = document.createElement("span");
            boldSpan.style.fontWeight = "bold";
            boldSpan.innerText = wordInsideTag;
            messageDiv.appendChild(boldSpan);

            lastIndex = tagIndex + tagLength; 
        }
    } else if (regex1) {
        while ((match = regex1.exec(message)) !== null) {
            var wordInsideTag = match[1]; 
            var tagIndex = match.index;
            var tagLength = match[0].length;

            messageDiv.innerHTML += message.substring(lastIndex, tagIndex);

            var boldSpan = document.createElement("span");
            boldSpan.style.fontWeight = "bold";
            boldSpan.innerText = wordInsideTag;
            messageDiv.appendChild(boldSpan);

            lastIndex = tagIndex + tagLength; 
        }
    }
    
    var remainingText = message.substring(lastIndex); 

    var index = 0;
    var interval = setInterval(function() {
        if (index === remainingText.length) {
            clearInterval(interval);
            isBotTyping = false; 
            chatBotElement.scrollTop = chatBotElement.scrollHeight;
            

            var speakButton = document.createElement("button");
            speakButton.id = "speakButton";
            speakButton.innerText = "play";
            messageElement.appendChild(speakButton);

            speakButton.addEventListener("click", function() {
                if (isSpeaking) {
                    speakButton.innerText = "play";
                } else {
                    speakButton.innerText = "Stop";
                }
                speakText(message);
            });

            return; 
        }

        if (remainingText[index] === "<") {
            var endIndex = remainingText.indexOf(">", index); 
            if (endIndex !== -1) {
                messageDiv.innerHTML += remainingText.substring(index, endIndex + 1);   
                index = endIndex + 1;
            }
        } else {
            if (remainingText[index] === " ") {
                messageDiv.innerHTML += "&nbsp;";
            } else {
                messageDiv.innerHTML += remainingText[index];
            }
            index++;
        }

        chatBotElement.scrollTop = chatBotElement.scrollHeight;
    }, 50); 
}

var isSpeaking = false;
var currentUtterance;

function speakText(text) {
    if (isSpeaking) {
        
        window.speechSynthesis.cancel();
        isSpeaking = false;
    } else {
       
        currentUtterance = new SpeechSynthesisUtterance(text);
        var voices = window.speechSynthesis.getVoices();

       
        const maleVoices = voices.filter(voice => voice.name.toLowerCase().includes('male'));

        
        if (maleVoices.length > 0) {
            currentUtterance.voice = maleVoices[0];
        }

        currentUtterance.onend = function() {
            isSpeaking = false;
        
            document.getElementById("speakButton").innerText = "play";
        };

        window.speechSynthesis.speak(currentUtterance);
        isSpeaking = true;
    }
}
