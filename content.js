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
function removeSomeDt(phrase){
   return phrase.replace(/[.,?!/|;:@#]/g,"");
}

var wordList = ["me", "you", "what"];


function singleWord(single) {
    var botResponse = "I don't understand that word.";
    var wordMatched = wordList.find(word => single.toLowerCase() === word.toLowerCase());
    if (wordMatched) {
        if (wordMatched.toLowerCase() === "you") {
            botResponse = "It looks like you have asked about "+`<b>"${wordMatched}"</b>`+" You can give us more deatils so as i can help you";
        }
        
    }
    typeOutMessage(chatBot, botResponse);
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
                    'typewriter', 'typewritter', 'shorthand',
                ];
                var streetWordList = [
                    'wozaah', 'wozah', 'woza', 'wozaa',
                ];
                var greetingWordList = [
                    'hello', 'helo', 'whatsap', 'hey',
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
function phraseWords(phrase) {
    var freshWords = removeSomeDt(phrase);
    var words = freshWords.split(/\s+/);
    var botResponse = "";
    var matchedOthersWord = othersWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
     var matchedGreetWord = greetingWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
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
               
    if (matchedOthersWord) {
        botResponse = othersWords(matchedOthersWord);
    } else if (matchedGreetWord) {
        botResponse = greetWords(matchedGreetWord);
    } else if (matchedbiosWord) {
        botResponse = biosWords(matchedbiosWord);
    } else if (matchedphysWord) {
        botResponse = physicsWords(matchedphysWord);
    } else if (matchedmathWord) {
        botResponse = mathWords(matchedmathWord);
    } else if (matchedcivicWord) {
        botResponse = civicsWords(matchedcivicWord);
    } else if (matchedentertainWord) {
        botResponse = entertainWords(matchedentertainWord);
    } else if (matchedtechWord) {
        botResponse = techWords(matchedtechWord);
    } else if (matchedeconomicWord) {
        botResponse = economicWords(matchedeconomicWord);
    } else if (matchedbotWord) {
        botResponse = botWords(matchedbotWord);
    } else if (matchedenvirnWord) {
        botResponse = environmentWords(matchedenvirnWord);
    } else if (matchedchemWord) {
        botResponse = chemistryWords(matchedchemWord);
    } else if (matchedstreetWord) {
        botResponse = streetWords(matchedstreetWord);
    } else if (matchedthankWord) {
        botResponse = thankWords(matchedthankWord);
    } else if (matchedswahiliWord) {
        botResponse = kiswahiliWords(matchedswahiliWord);
    } else if (matchedgeoWord) {
        botResponse = geoWords(matchedgeoWord);
    } else if (matchedcodeWord) {
        botResponse = codeWords(matchedcodeWord);
    } else if (matchedhistoryWord) {
        botResponse = historyWords(matchedhistoryWord);
    } else {
        botResponse = "Apologies, I may not have comprehended your question regarding \"" + `${freshWords.toLowerCase()}` + "\" This could be due to the information I last trained on in January, 2024 or a possible misphrasing on your part. I am having difficulty understanding it. Please consider rephrasing your question, and I'll be happy to assist. I apologize for any inconvenience caused.";
    } 

    typeOutMessage(chatBot, botResponse);
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
    if(regex) {
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
} else if(regex1) {
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
