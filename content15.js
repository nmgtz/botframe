  var sideBarCont = document.getElementById("sideBarCont");
        var sideContainer = document.getElementById("sideContainer");
        var sideBar = document.getElementById("sideBar");
        var crossBtn = document.getElementById("crossBtn");
        sideBar.addEventListener("click", (e)=>{
          e.preventDefault();
          sideBarCont.style.display ="block";
          sideContainer.style.display = "block";
        });
      function closesideBar(e){
        e.preventDefault();
          sideBarCont.style.display ="none";
          sideContainer.style.display = "none";
      }
      crossBtn.addEventListener("click", (e)=>{
          e.preventDefault();
          closesideBar(e); 
      });
    
      sideContainer.addEventListener("click",function(e){
      if(e.target === this) {
        closesideBar(e); 
      }
    });
    
        var insdCont1 = document.getElementById("insdCont1"); 
        var insdCont2 = document.getElementById("insdCont2");
        var insdCont3 = document.getElementById("insdCont3"); 
        var insdCont4 = document.getElementById("insdCont4");

        var textAlt = [
        [
        { id: "insdCont1", text: "<b>Life </b><br />of living things" },
        { id: "insdCont2", text: "<b>business</b><br /> plan in daily life" },
        { id: "insdCont3", text: "<b>coding</b><br />simple ideas" },
        { id: "insdCont4", text: "<b>joyful</b><br /> simple text word" }
    ],
            [
                { id: "insdCont1", text: "<b>Nature</b><br />Exploring the world" },
                { id: "insdCont2", text: "<b>Innovation</b><br />Ideas with impact" },
                { id: "insdCont3", text: "<b>Technology</b><br />Advancements in coding" },
                { id: "insdCont4", text: "<b>Happiness</b><br />Finding joy simply" }
            ],
            [
                { id: "insdCont1", text: "<b>Health</b><br />Living a healthy life" },
                { id: "insdCont2", text: "<b>Startups</b><br />ideas into reality" },
                { id: "insdCont3", text: "<b>Programming</b><br />Building things" },
                { id: "insdCont4", text: "<b>Well-being</b><br />body health" }
            ],
            [
                { id: "insdCont1", text: "<b>Environment</b><br />Caring for our planet" },
                { id: "insdCont2", text: "<b>Learning</b><br />Creating value" },
                { id: "insdCont3", text: "<b>Development</b><br /> through coding" },
                { id: "insdCont4", text: "<b>Positivity</b><br />Living a positive life" }
            ]
        ];

        var currentTextAlt = 0;

        function updateTextContent() {
            var altSystems = textAlt[currentTextAlt ];
            altSystems.forEach(function(item) {
                document.getElementById(item.id).innerHTML = item.text;
            });

            currentTextAlt  = (currentTextAlt  + 1) % textAlt.length;
        }

        setInterval(updateTextContent, 10000); 
        updateTextContent();


var lightTheme = document.getElementById("light");
var darkTheme = document.getElementById("dark");
var body = document.body;
var newTheme = document.getElementById("newTheme");
var inputTheme = document.querySelector(".input-nmg");
var chatMistake = document.querySelector(".chatMistake");
var userInput = document.getElementById("userInput");
var chatNmg = document.getElementById("chatNmg");
var hdTheme = document.getElementById("hdTheme");
var sideBar = document.getElementById("sideBar");
var sideBarCont = document.getElementById("sideBarCont");
var chatNmg2 = document.getElementById("chatNmg2");
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
    sideBar.style.color ="black";
    sideBarCont.style.color ="black";
    sideBarCont.style.background ="white";
    chatNmg2.style.color="black";
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
    sideBar.style.color ="white";
    sideBarCont.style.color ="white";
    sideBarCont.style.background ="grey";
    chatNmg2.style.color="white";
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
    var freshWords = removeSomeDt(single); 
    freshWords = normalizePhrase(single);
    const charactersToRemove = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];
    charactersToRemove.forEach(char => {
        single = single.replace(new RegExp('\\' + char, 'g'), '');
    });
    var dissatisfactionResponse = handleUserDissatisfaction(single);
    if (dissatisfactionResponse) {
        botResponse = dissatisfactionResponse;
    } else {
        var botResponse = "it seems like you provide single word "+`<b>"${single}"</b>`+" without providing specific details about what you want to know or grab from submitted term. Could you please provide more details or try rephrasing your question?";

        var wordMatched = othersWordList.find(word => single.toLowerCase() === word.toLowerCase());
        var matchedScience = scienceWordList.find(word => single.toLowerCase() === word.toLowerCase());
        var environmentWord = environmentWordList.find(word => single.toLowerCase() === word.toLowerCase());
        var greetingWord = greetingsWordList.find(word => single.toLowerCase() === word.toLowerCase());
        var acceptingWord = acceptingWords.find(word => single.toLowerCase() === word.toLowerCase());
        var greetWordFmPh = statementGreetings.find(word => freshWords.toLowerCase() === word.toLowerCase());
        if (wordMatched) {
            botResponse = otherWord(wordMatched);
        } else if (greetWordFmPh) {
            botResponse = statementGreetingsResponse(greetWordFmPh);
        }  else if (matchedScience) {
            botResponse = handleScienceWords(matchedScience);
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
'bernoulli\'s theorem', 'theorem', 'physics', 'physician', 'newton', 'einstein', 'relativity', 
    'quantum mechanics', 'thermodynamics', 'electromagnetism', 'gravity', 'force', 'energy', 
    'momentum', 'velocity', 'acceleration', 'mass', 'wave', 'particle', 'atom', 'molecule',
    'proton', 'neutron', 'electron', 'photon', 'neutrino', 'quark', 'string theory', 
    'black hole', 'singularity', 'big bang', 'cosmology', 'entropy', 'fission', 'fusion',
    'radioactivity', 'half-life', 'magnetism', 'superconductivity', 'crystallography',
    'fluid dynamics', 'plasma', 'solid', 'liquid', 'gas', 'matter', 'antimatter', 'dark matter',
    'dark energy', 'universe', 'multiverse', 'space-time', 'dimension', 'wave-particle duality'
                ];
                var biosWordList = [
                'Adaptation', 'Aerobic Respiration', 'Allele', 'Alveoli', 'Anatomy', 'Anaerobic Respiration', 
    'Andropause', 'Anus', 'Antibody', 'Antigen', 'Archaea', 'Artery', 'ATP', 'Aureus', 'Autotroph', 
    'Axon', 'Bacteria', 'Biodiversity', 'Biogeochemical Cycle', 'Biology', 'Biome', 'Biosphere', 
    'Biomass', 'Binomial Nomenclature', 'Life fluid', 'Bone', 'Bronchi', 'Bronchioles', 'Calvin Cycle', 
    'Capillary', 'Carbon Cycle', 'Carbohydrate', 'Cell', 'Cell Theory', 'Celebral Spinal', 
    'Celebral', 'Celebrospinal','Celebro Spinal', 'Central Nervous System', 'Chromosome', 'Circulatory System', 
    'Cloning', 'Community', 'Commensalism','Components of blood', 'CRISPR', 'Csf', 'Cytoplasm', 'Cytoskeleton', 
    'Dendrite', 'Decomposer', 'Detritivore', 'Development', 'Diffusion', 'Digestive System', 
    'Diaphragm', 'DNA', 'Ecology', 'Ecosystem', 'Embryo', 'Endocrine System', 'Endoplasmic Reticulum', 
    'Enzyme', 'Es Complex', 'Esophagus', 'Evolution', 'Excretory System', 'Extinction', 'Family', 
    'Fallopian Tubes', 'Fertilization', 'Fermentation', 'Fetus','First Aid', 'Food Chain', 'Food Network', 
    'Fossil', 'Fungi', 'Gamete', 'Gene', 'Gene Flow', 'Gene Therapy', 'Genetic Code', 
    'Genetic Drift', 'Genetic Engineering', 'Genotype', 'Genus', 'Glia', 'Glial Cells', 
    'Glycolysis', 'Golgi Apparatus', 'Habitat', 'Heart', 'Herbivory', 'Heterotroph', 
    'Homeostasis', 'Hormone', 'Hormonal Imbalance', 'Immune System', 'Intestine', 
    'Joint', 'Kidneys', 'Krebs Cycle', 'Labor', 'Large Intestine', 'Lipid', 'Liver', 
    'Lung', 'Lysosome', 'Male Reproductive System', 'Meiosis', 'Meninges', 'Meningitis', 
    'Menopause', 'Mitochondria', 'Mitosis', 'Mouth', 'MRNA (Messenger RNA)', 'Muscle', 
    'Muscular System', 'Mutualism', 'Mutation', 'Natural Selection', 'Nephron', 'Neuron', 
    'Neuroglia', 'Nervous System', 'Nucleic Acid', 'Nucleus', 'Oomycota', 'Organism', 
    'Organelle', 'Osmosis', 'Ovaries','Oxygen transport', 'Parasitism', 'Pathogen', 'Penis', 'Peripheral Nervous System', 
    'Pharynx', 'Phenotype', 'Phylum', 'Photosynthesis', 'Photosystem', 'Phylogeny', 'Phytophthora', 
    'Pituitary Gland', 'Plasma Membrane', 'Population', 'Predation', 'Pregnancy','Pressure Regulation', 'Prokaryote', 
    'Protein', 'Protist', 'Pulmonary', 'Rectum', 'Reproductive System', 'Resting Potential', 
    'Ribosome', 'R-RNA (Ribosomal RNA)', 'RNA (Ribonucleic Acid)', 'Sperm', 'Species', 
    'Speciation', 'Skeletal System', 'Small Intestine', 'Species', 'Spinal', 'Staphylococcus', 
    'Stem Cell', 'Stomach', 'Symbiosis', 'T-RNA (Transfer RNA)', 'Taxonomy', 'Testes', 
    'Thyroid Gland', 'Trophic Level', 'Trachea', 'Transcription', 'Translation', 'Urea', 
    'Urea Cycle', 'Ureters', 'Urinary Bladder', 'Urethra', 'Urine', 'Vaccine', 'Vacuole', 
    'Vein', 'Vein that Supply', 'Vagina', 'Viral Replication', 'Virus', 'Water Cycle', 
    'Water Molds'
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
                    'interaction', 'mechanisms for business', 'enterprises', 'costs', 'production','profit', 'revenue', 'expenses', 'budget', 'investment', 'market', 'strategy', 'growth', 'branding', 'innovation', 'leadership', 'management', 'operations', 'sales', 'marketing', 'customer', 'satisfaction', 'service', 'quality', 'product', 'supply', 'demand', 'competition', 'partnership', 'negotiation', 'contract', 'compliance', 'regulation', 'policy', 'liability', 'asset', 'equity', 'dividend', 'shareholder', 'stakeholder', 'merger', 'acquisition', 'liquidation', 'bankruptcy', 'solvency', 'cash flow', 'balance sheet', 'income statement', 'capital', 'interest rate', 'loan', 'debt', 'credit', 'insurance', 'risk', 'return on investment', 'break-even', 'outsourcing'
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
     'video', 'audio', 'image', 'picture',
     'website', 'link', 'page', 'click', 'read', 'write', 'edit', 'create',
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
    'hello', 'hi', 'hey', 'yo', 'greetings', 'salutations', 'howdy', 'hola', 'bonjour', 'ciao', 'hallo', 'namaste','goodbye','thanks'
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
                    'geography', 'terrain', 'climate', 'ecosystem', 'latitude','longitude', 'continent', 'island', 'ocean', 'river', 'mountain', 'plateau', 'valley', 'desert', 'forest', 
                     'tundra', 'glacier', 'coastline', 'delta', 'canyon'
                ];
                var codeWordList = [
                    'html', 'javascript', 'php','css','programming', 'computer', 'code', 'algorithm', 'debug', 'compile', 'execute', 'variable', 'function', 'loop', 
    'condition', 'array', 'object', 'class', 'inheritance', 'interface', 'network', 'database', 'server', 'client', 
    'cloud', 'storage', 'hardware', 'software', 'operating system', 'file', 'folder', 'GUI', 'CLI', 'encryption', 'decryption', 
    'data', 'backup', 'restore', 'security', 'virus', 'firewall', 'protocol', 'bandwidth', 'browser', 'URL', 
    'HTTP', 'HTTPS', 'IP'
                ];
                var historyWordList = [
                    'history', 'historian',
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
    'do you like sports', 'do you have any pets','i am good','great','my name'
];



var thankingStatements = ['thank you very much', 'thanks for your help', 'thanks so much', 'thank you for your assistance', 'thanks a lot', 'thank you', 'thanks'];
var acceptingWords = ['okey', 'ok', 'yes', 'yep', 'yeah', 'alright', 'sure', 'fine', 'cool'];
var botDetailsWords = [
    'your name', 'who are you', 'what is your name', 'introduce yourself', 'who created you', 'what do you do',
    'where are you from', 'how old are you', 'are you human', 'are you a robot', 'are you a chatbot'
];
var otherPhasesList = [
    "Can you tell me about the history of typewriters","what is typewriters", "What is a typewriter and how does it work", "Why were typewriters important","Tell me about typewriters",
    "What is shorthand writing","How is shorthand used","Can you explain shorthand","What are the different types of shorthand","What types of books do you recommend",
    "Can you suggest some good books","What are different genres of books","Tell me about books","What are some ergonomic tips for chairs",
    "Can you recommend a good chair","What types of chairs are best for back support","Tell me about different types of chairs","What kinds of tables are there",
    "Can you describe different types of tables","What should I look for in a table","Tell me about tables","How do I choose the right lamp",
    "What are the different types of lamps","Can you help me choose a lamp","Tell me about lamps","What types of pens are available","Which pen is best for writing",
    "Can you recommend a good pen","Tell me about pens","What should I consider when choosing a notebook","Can you suggest a good notebook",
    "What types of notebooks are there",
    "Tell me about notebooks",
    "What are different types of cups",
    "Can you recommend a good cup",
    "What should I look for in a cup",
    "Tell me about cups",
    "What types of plates are available",
    "Can you suggest a good plate",
    "What should I consider when choosing a plate",
    "Tell me about plates",
    "What types of spoons are there",
    "Can you recommend a good spoon",
    "What should I look for in a spoon",
    "Tell me about spoons",
    "What are the different types of forks",
    "Can you suggest a good fork",
    "What should I consider when choosing a fork",
    "Tell me about forks",
    "What types of knives are available",
    "Can you recommend a good knife",
    "What should I look for in a knife",
    "Tell me about knives",
    "How have phones evolved over time",
    "Can you tell me about the history of phones",
    "What are different types of phones",
    "Tell me about phones",
    "What should I know about computers",
    "Can you explain the different types of computers",
    "What are some uses of computers",
    "Tell me about computers",
    "What are the different types of keyboards",
    "Can you recommend a good keyboard",
    "What should I look for in a keyboard",
    "Tell me about keyboards",
    "What are the different types of computer mice",
    "Can you recommend a good computer mouse",
    "What should I consider when choosing a computer mouse",
    "Tell me about computer mice",
    "What types of televisions are there",
    "Can you recommend a good TV",
    "What should I look for in a television",
    "Tell me about televisions",
    "How do remote controls work",
    "What are the different types of remotes",
    "Can you recommend a good remote control",
    "Tell me about remote controls",
    "What are the different types of windows",
    "Can you recommend a good window",
    "What should I look for in a window",
    "Tell me about windows",
    "What are the different types of doors",
    "Can you recommend a good door",
    "What should I look for in a door",
    "Tell me about doors",
    "What types of beds are available",
    "Can you recommend a good bed",
    "What should I consider when choosing a bed",
    "Tell me about beds",
    "What are the different types of pillows",
    "Can you recommend a good pillow",
    "What should I look for in a pillow",
    "Tell me about pillows",
    "What types of blankets are there",
    "Can you recommend a good blanket",
    "What should I look for in a blanket",
    "Tell me about blankets",
    "What are the best materials for towels",
    "Can you recommend a good towel",
    "What should I look for in a towel",
    "Tell me about towels",
    "What types of soap are available",
    "Can you recommend a good soap",
    "What should I consider when choosing a soap",
    "Tell me about soaps",
    "What are the different types of shampoos",
    "Can you recommend a good shampoo",
    "What should I look for in a shampoo",
    "Tell me about shampoos",
    "What types of toothbrushes are there",
    "Can you recommend a good toothbrush",
    "What should I look for in a toothbrush",
    "Tell me about toothbrushes",
    "What types of toothpaste are available",
    "Can you recommend a good toothpaste",
    "What should I consider when choosing a toothpaste",
    "Tell me about toothpastes",
    "What are the different types of mirrors",
    "Can you recommend a good mirror",
    "What should I look for in a mirror",
    "Tell me about mirrors",
];


function removeSomeDt(input) {
    const charactersToRemove = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];
    let cleanedInput = input;
    charactersToRemove.forEach(char => {
        cleanedInput = cleanedInput.replace(new RegExp('\\' + char, 'g'), '');
    });
    return cleanedInput;
}

const synonymsArray = [
    ["who are you", "who is you", "who's you","whos you", "who r u"],
    ["who created you", "who made you", "who built you", "who designed you", "who developed you", "who programmed you", "who constructed you", "who produced you", "who invented you", "who is your creator", "who is your maker"],
    ["where are you from", "where do you come from", "where were you made", "where were you created", "where is your origin", "where are your origins", "what is your birthplace", "what is your place of origin", "where do you originate", "where is your home", "where do you hail from"],
    ["what do you do", "what's your purpose", "what can you do", "what is your function", "what is your role", "what are your capabilities", "what tasks can you perform"],
    [
    'i am good', 'i\'m good', 'i am fine', 'i\'m fine', 'i feel good', 'i\'m feeling good', 'i am well', 'i\'m well',
    'i am okay', 'i\'m okay', 'i am great', 'i\'m great', 'i am doing good', 'i\'m doing good', 'i am alright', 'i\'m alright',
    'i am feeling fine', 'i\'m feeling fine', 'i am feeling well', 'i\'m feeling well', 'i am feeling great', 'i\'m feeling great',
    'iam good', 'i amgod', 'i m good', 'im good', 'i am goood', 'i am ggod', 'i am goud', 'i amood', 'i amgod',
    'iam fine', 'i amfin', 'i am fne', 'i am fnine', 'i am okey', 'i amokay', 'i m okey', 'im okay',
    'i am greaat', 'i am graet', 'i am greatt', 'i m great', 'im great', 'i am doingg good', 'i am diong good', 'i m doing good',
    'im doing good', 'i am alrite', 'i am allright', 'i m alright', 'im alright', 'i am feelingg fine', 'i am feelling fine',
    'i m feeling fine', 'im feeling fine', 'i am feelinng well', 'i am feelng well', 'i m feeling well', 'im feeling well',
    'i am feelng great', 'i am feeling greaat', 'i m feeling great', 'im feeling great',
     ],
     [
    'great', 'gret', 'graet','nice', 'greaat', 'greath', 'greay', 'greate', 'greatt', 'gr8', 'grate',
    'excellent', 'fantastic', 'superb', 'wonderful', 'awesome', 'amazing', 'terrific', 'splendid',
    'marvelous', 'incredible', 'greeat', 'greta', 'geat', 'grrat', 'grteat', 'graat', 'garat', 'grat',
    'greater', 'gratest', 'greateest', 'exellent', 'fntastic', 'suuperb', 'wondeful', 'awesme',
    'amaing', 'amzing', 'terrfic', 'splndid', 'mrvelous', 'incredble',
     ],
     ['Components of blood','Blood components'],
    ["Organism", "Orgaism", "Orgamism", "Orgaismm", "Orgamismm"],
    ["Photosynthesis", "Photosynthesiss", "Photosynthesi", "Photosynthesys", "Photosynthesiis", "Photosynthesiss"],
    ["DNA", "DNNA (Deoxyribonucleic Acid)", "Deoxy ribonucleic Acid","Deoxyribonucleic Acid", "DNNAA (Deoxyribonucleic Acid)", "DNA (Deoxyribonuclei Acid)",],
    ["Gene", "Gnee", "Geen", "Gen", "Gee", "Geeen"],
    ['Oxygen transport','Oxygen transported','Oxygen is transported','transport oxygen'],
    ["Species", "Speciess", "Speci", "Specie", "Spesies", "Speecies"],
    ["Habitat", "Habbitat", "Habittat", "Habitatt", "Habittatt", "Habitattt"],
    ["Ecosystem", "Ecosytem", "Ecosystemm", "Eecosystem"],
    ["Evolution", "Evolutionn", "Evolutionnary", "Evoolution", "Evoluttion", "Evoluution"],
    ["Adaptation", "Adapttation", "Adapptation", "Adaptationn", "Adaptattion", "Adaptaation"],
    ["Mitosis", "Mitossis", "Mitossys", "Mitosiss", "Mitosiis", "Mitossiis"],
    ["Meiosis", "Meiosys", "Mieosis", "Meiossis", "Meiiosis", "Meiosiis"],
    ["Chromosome", "Chromosme", "Chromososme", "Chromosomee", "Chromosomme", "Chrromosome"],
    ["Allele", "Alllele", "Alllelle", "Alleele", "Alele", "Alelle"],
    ["Mutation", "Muttation", "Muttattion", "Mutattion", "Mutatioon", "Mutatio"],
    ["Natural Selection", "Nattural Selectionn", "Natural Sellection", "Natural Selecttion", "Nattural Selecction", "Natural Sellecction"],
    ["Homeostasis", "Homeosttasis", "Homeostaasis", "Homostasis", "Homosttasis", "Homeostasiss"],
    ["Metabolism", "Metabbolismm", "Mettabolism", "Metabolissm", "Metabolisssm", "Mettabolism"],
    ["Enzyme", "Enzymmee", "Enzym", "Enzymee", "Enzyyme", "Enzime"],
    ["ES Complex", "Enzyme substrate complex", "Enzyme-Substrate Complex", "Enzymee substrate Complex", "enzyme substrate complex"],
    ["Protein", "Proteinss", "Prootein", "Prottein", "Protiin", "Prottein"],
    ["Carbohydrate", "Carboohydratees", "Carbohydratte", "Carboohydratte", "Carboohydrrate", "Carboohydrratte"],
    ["Lipid", "Lipidds", "Liipid", "Lipidd", "Liipidd", "Liipd"],
    ["Nucleic Acid", "Nucleiic Acidd", "Nucleic Accid", "Nucleic Acid", "Nucleiic Acidd", "Nucleeiic Acid"],
    ["ATP", "ATPP (Adenosine Triphosphatte)", "ATP (Adenosine Triphosphat)", "ATPPP (Adenosine Triphosphat)"],
    ["Genotype", "Genotyype", "Genotipe", "Gentotype", "Genotypp", "Genottype"],
    ["Phenotype", "Phenotyype", "Phenotipe", "Phenotyypp", "Phenotypp", "Phennotype"],
    ["Osmosis", "Osmosiss", "Osmossis", "Osmosiss", "Osmmosis", "Osomosis"],
    ["Diffusion", "Diffussion", "Difusion", "Diffusionn", "Difussion", "Diffusioon"],
    ["Ribosome", "Ribosomme", "Ribbosome", "Ribbosome", "Riibosome", "Ribosommee"],
    [ 'Biology', 'Life Science', 'Biological Science', 'Natural Science', 'Bioscience'],
    ["Mitochondria", "Mitochondrria", "Mitochondriaa", "Mitochondriia", "Mitocchondria", "Mitochonndria"],
    ["Chloroplast", "Chloroplastt", "Chloroplatt", "Chloroplaast", "Chloroplaastt", "Chlorooplast"],
    ["Nucleus", "Nucleuss", "Nucleuuss", "Nucleeus", "Nucleu", "Nucleos"],
    ["Plasma Membrane", "Plasmma Membrane", "Plasma Membranne", "Plasmma Membranne", "Plasmmma Membrane", "Plasma Membraanee"],
    ["Endoplasmic Reticulum", "Endoplasmic Reticullum", "Endoplasmic Reticululum", "Endoplasmiic Reticullum", "Endoplasmiic Reticulum", "Endoplasmiic Reticuluum"],
    ["Golgi Apparatus", "Golgii Apparatust", "Golgii Apparattus", "Golgi Apparattus", "Golgii Apparaatus", "Golgi Apparattus"],
    ["Lysosome", "Lysosomme", "Lyssosome", "Lysosomm", "Lysosoomme", "Lyssosommee"],
    ["Vacuole", "Vacuollee", "Vaccuole", "Vacuolle", "Vakuole", "Vakkuole"],
    ["Cytoplasm", "Cytoplasmme", "Cytoplasmm", "Cytoplasmee", "Cytoplasmii", "Cytooplasm"],
    ["Cytoskeleton", "Cytoskeletton", "Cytoskelettoon", "Cytoskelettn", "Cytoskelett", "Cytoskelettoonn"],
    ["Prokaryote", "Prookaryote", "Prokkaryote", "Prokarriote", "Prokaaryote", "Prookaryyote"],
    ["Eukaryote", "Eukkaryotee", "Eukaryotte", "Eukaryot", "Eukkaryyote", "Eukkaryotte"],
    ["Bacteria", "Bactteriaa", "Bacteriia", "Bacteeria", "wBacterriia", "Bactterriaa", "Bacteri", "Bacteriia"],
["Virus", "Viruss", "Virus", "Virusss", "Viruus", "Viirus"],
["Fungi", "Fungiie", "Fungii", "Fuungi", "Fuungii", "Funngii"],
["Protist", "Protistt", "Protisst", "Protisstt", "Prootist", "Prootiist"],
["Archaea", "Archeea", "Archea", "Arcchea", "Archhea", "Archaeaa"],
["Biodiversity", "Biodiverssityy", "Biodivversity", "Biodiverstity", "Biodivercity", "Biodiversitty"],
["Symbiosis", "Symbiiosiss", "Symbiosiis", "Symbiossis", "Simbiosis", "Symbyosis"],
["Parasitism", "Parasitissmm", "Parassitism", "Parasittism", "Parasitiss", "Parasitttism"],
["Commensalism", "Commenssalismm", "Commensalissm", "Comensalism", "Comensalismm", "Comenssalism"],
["Mutualism", "Mutuualismm", "Mutuualissm", "Mutuaalism", "Mutaalism", "Mutuaalismm"],
["Predation", "Predattion", "Preadation", "Preadattion", "Predaation", "Preadationn"],
["Herbivory", "Herbivorry", "Herbivoryy", "Herbiivory", "Herbiivorry", "Herbiivoryy"],
["Trophic Level", "Trophic Levell", "Trophicc Level", "Trophyc Level", "Tropihic Level", "Trophic Level"],
["Food Chain", "Food Chan", "Food Chaain", "Food Chaiin", "Food Cahin", "Food Chaan"],
["Food network","Food Web", "Food Webb", "Foood Web", "Foodd Web", "Fodd Web", "Food Web"],
["Biomass", "Biomasss", "Biomassss", "Biomas", "Biommass", "Biommasss"],
["Biogeochemical Cycle", "Biogeochemical Cyclee", "Biogeochemical Cicle", "Biogeochemicaly Cycle", "Biogeochemical Cyclee", "Biogeochemicall Cycle"],
["Carbon Cycle", "Carbbon Cyclee", "Carbonn Cycle", "Carboon Cycle", "Carbon Cycl", "Carbon Cyle"],
["Nitrogen Cycle", "Nitrogen Cyycle", "Nitrogenn Cycle", "Nitrogeen Cycle", "Nitrogen Cyle", "Nitrogen Cyccle"],
["Water Cycle", "Watteer Cyclee", "Water Cyle", "Watter Cycle", "Watteer Cylce", "Water Cyclle"],
["Cell Theory", "Cel Thorry", "Cell Theery", "Cell Theorry", "Cel Thory", "Cell Theori"],
["Genetic Code", "Genettic Codee", "Genetic Cood", "Genettic Code", "Genetik Code", "Genetic Codd"],
["Transcription", "Transcripptionn", "Transcripition", "Transkription", "Transcripttion", "Transcriiption"],
["Translation", "Translaationn", "Translationn", "Translattion", "Traslation", "Translaation"],
["RNA (Ribonucleic Acid)", "RNA (Ribonucleiic Acidd)", "RNA (Ribonuclei Acid)", "RNN (Ribonucleic Acid)", "RNAA (Ribonucleic Acid)", "RNA (Ribonucleiic Acid)","rna"],
["tRNA (Transfer RNA)", "tRNA (Transfer RNAaa)", "tRNN (Transfer RNA)", "tRNAA (Transfer RNA)", "tRNA (Transfer RNAa)", "tRNA (Transfer RNAaa)"],
["mRNA (Messenger RNA)", "mRNA (Messenger RNAaa)", "mRNNA (Messenger RNA)", "mRNA (Messenger RNAa)", "mRNA (Messenger RNAaa)", "mRNA (Messenger RNAa)"],
["rRNA (Ribosomal RNA)", "rRNA (Ribosomal RNAaa)", "rRNAA (Ribosomal RNA)", "rRNA (Ribosomal RNAa)", "rRNA (Ribosomal RNAa)", "rRNA (Ribosomal RNAaa)"],
["Genetic Engineering", "Geneticc Engiineeringg", "Genetic Engieneering", "Genettic Engineering", "Geneticc Engiineering", "Geneticc Engiinerring"],
["CRISPR", "CRISPP", "CRISPRR", "CRISP", "CRISPRR", "CRISPPR"],
["Cloning", "Clonningg", "Cloninng", "Clonning", "Cloningg", "Clonningg"],
["Stem Cell", "Stemm Celll", "Stem Celll", "Stemm Cel", "Stem Celle", "Stemm Celll"],
["Gene Therapy", "Gene Theerappyy", "Gene Therappyy", "Genne Therapy", "Gene Theerappyy", "Gene Therappyy"],
["Ecology", "Ecollogyy", "Ecollogyy", "Ecologyy", "Ecoology", "Ecollogyy"],
["Population", "Popullationn", "Popullation", "Populationn", "Popullationn", "Popullattion"],
["Community", "Communittyy", "Communitty", "Communnity", "Comunnity", "Communittey"],
["Biome", "Bioomee", "Bioom", "Biomme", "Biomee", "Bioome"],
["Biosphere", "Biospherrr", "Biosphre", "Biospherr", "Biospherre", "Biospherrr"],
["Autotroph", "Autotroophh", "Autotrophh", "Autotroph", "Autotrop", "Autotrophh"],
["Heterotroph", "Heterotroophh", "Heterootroph", "Heterotrophh", "Heterotrop", "Heterotroophh"],
["Detritivore", "Detritivorree", "Detriivorre", "Detritivorre", "Detritivoree", "Detritivorree"],
["Decomposer", "Decompooser", "Decompowsser", "Decompooser", "Decommpooser", "Decoomposer", "Decompooser"],
["Photosystem", "Photosystttem", "Photosystttem", "Photosysttem", "Photosystemm", "Photosystttem"],
["Calvin Cycle", "Calvin Cyclle", "Calvin Cyycle", "Calvvin Cycle", "Calvin Cyclee", "Calvvin Cyclle"],
["Krebs Cycle", "Krebs Cyyclee", "Kreb Cycle", "Krebs Cyycle", "Krebs Cycl", "Krebs Cyycle"],
["Glycolysis", "Glycolysiss", "Glycollisys", "Glycolysiss", "Glycolyssis", "Glycolissys"],
["Fermentation", "Fermentaationn", "Fermentasion", "Fermentaation", "Fermentatioon", "Fermentatioon"],
["Aerobic Respiration", "Aerobiic Respirattionn", "Aerobic Respiraation", "Aerobic Respirattion", "Aerobiic Respirattion", "Aerobiic Respirattionn"],
["Anaerobic Respiration", "Anaerobicc Respiraationn", "Anaerobic Respirationn", "Anaerobic Respiration", "Anaerobiic Respirattionn", "Anaerobic Respiraationn"],
["Immune System", "Immune Sysstemm", "Immuune System", "Immunee System", "Immune Sysstem", "Immuune Sysstem"],
["Antibody", "Antiboodyy", "Antibodyy", "Antiboody", "Antiboodyy", "Antiboody"],
["Antigen", "Antigen", "Antigenn", "Anttigen", "Anttigen", "Anttigen"],
["Vaccine", "Vacciine", "Vacciinee", "Vacciin", "Vacciinee", "Vacciine"],
["Pathogen", "Pathogenn", "Pathogenn", "Pathoogenn", "Pathogeen", "Pathogenn"],
["Endocrine System", "Endocrine Systtemm", "Endocrinee System", "Endocryne System", "Endocrine Systtemm", "Endocrinn System"],
["Hormone", "Hormonee", "Hormonne", "Horrmone", "Hormoone", "Hormonne"],
["Nervous System", "Nervous Systtemm", "Nervous Systemm", "Nervouss System", "Nervous Systtemm", "Nervous Systeem"],
["Neuron", "Neurronn", "Neuroon", "Neurron", "Neuronn", "Neuuron"],
["Synapse", "Synapsee", "Synnapse", "Synapse", "Synappse", "Synappsee"],
["Axon", "Axonn", "Axoon", "Axon", "Axxon", "Axxonn"],
["Dendrite", "Dendrrite", "Dendritee", "Denndrite", "Dendrit", "Dendrritte"],
["Action Potential", "Actionn Potenttiall", "Acttion Potential", "Action Potentiall", "Actionn Potenttiall", "Actiion Potential"],
["Central Nervous System", "Central Nervouss Systemm", "Central Nervouus System", "Central Nervous Systtem", "Central Nervouss Systemm", "Central Nervous Systemm"],
["Peripheral Nervous System", "Peripheral Nervous Systtemm", "Peripheral Nervouus System", "Peripheral Nervous Systtem", "Peripheral Nervouss Systemm", "Peripheral Nervous Systtemm"],
["Circulatory System", "Circulatary Systtemm", "Circulatoryy System", "Circulatary Systemm", "Circulatory Systtem", "Circulatary Systtemm"],
["Heart", "Heaart", "Heaart", "Hearrt", "Heaart", "Hearrt"],
["Life fluid","Blood", "Blodd", "Bloood", "Blood", "Bloood", "Bloood"],
["Artery", "Arterry", "Aartery", "Artery", "Arterry", "Arteryy"],
["Vein", "Veinn", "Veinn", "Vein", "Veinn", "Veinn"],
["Capillary", "Cappillary", "Capillaryy", "Capillary", "Cappillary", "Cappillary"],
["Respiratory System", "Respiiratory Systtemm", "Respiratorry System", "Respiratory Systtem", "Respiiratory Systemm", "Respiratory Systtemm"],
["Lung", "Lunng", "Luung", "Lung", "Lunng", "Lungg"],
["Trachea", "Tracheea", "Traachea", "Trachea", "Traachea", "Tracheaa"],
["Bronchi", "Bronchii", "Bronkii", "Bronchi", "Bronkii", "Bronchii"],
["Bronchioles", "Bronchiolles", "Bronchioless", "Bronchiollles", "Bronchiolles", "Bronchiolles"],
["Alveoli", "Alveolii", "Alveolli", "Alveolii", "Alveolii", "Alveolii"],
["Diaphragm", "Diaphram", "Diaphgram", "Diaphraghm", "Diaphram", "Diaphgram"],
["Pulmonary", "Pulmonarry", "Pulmonnary", "Pulmonaryy", "Pulmonarry", "Pulmonaryy"],
["Digestive System", "Digeestive Systeem", "Digestive Systtem", "Digestive Systeem", "Digeestive Systtem", "Digeestive Systeem"],
["Mouth", "Moutth", "Mouthh", "Mouth", "Moutth", "Moutth"],
["Pharynx", "Phaarinx", "Pharynxx", "Pharynx", "Phaarinx", "Pharynxx"],
["Esophagus", "Esophaagus", "Esophaguss", "Esophaguss", "Esophaagus", "Esophagus"],
["Stomach", "Sttomach", "Stomaach", "Stomach", "Stomachh", "Sttomach"],
["Small Intestine", "Small Inestine", "Small Intestiine", "Small Intestine", "Small Intestiine", "Small Intesttine"],
["Large Intestine", "Large Inestine", "Large Intestiine", "Large Intestine", "Large Intestine", "Large Intesttine"],
["Liver", "Liiver", "Liivver", "Liver", "Liiver", "Liver"],
["Pancreas", "Paancreas", "Pancreeas", "Pancreas", "Pancreeas", "Pancreas"],
["Gallbladder", "Gallblaadder", "Gallbladdeer", "Gallbladder", "Gallblaadder", "Gallbladder"],
["Rectum", "Reectum", "Reectum", "Rectum", "Rectumm", "Reectum"],
["Anus", "Aanus", "Anuss", "Anus", "Aanus", "Anus"],
["Excretory System", "Excreatory Systeem", "Excretory Systtem", "Excreatory Systeem", "Excreatory Systtem", "Excreatory Systeem"],
["Kidneys", "Kidnees", "Kidneys", "Kidneys", "Kidnees", "Kidneys"],
["Ureters", "Ureeters", "Ureterrs", "Ureters", "Ureeter", "Ureeters"],
["Urinary Bladder", "Urinnary Bladder", "Urinary Bladdeer", "Urinary Bladder", "Urinary Bladdeer", "Urinary Bladdeer"],
["Urethra", "Ureeetra", "Urethhra", "Urethra", "Ureethra", "Urethra"],
["Reproductive System", "Reproductiv Systeem", "Reproductive Systtem", "Reproductiv Systeem", "Reproductiv Systtem", "Reproductiv Systeem"],
["Male Reproductive System", "Maale Reproductiv Systeem", "Male Reproductive Systtem", "Male Reproductiv Systeem", "Male Reproductiv Systtem", "Male Reproductiv Systeem"],
["Testes", "Teestes", "Testess", "Testes", "Teste", "Testes"],
["Scrotum", "Scrottum", "Scrotumm", "Scrotum", "Scrotu", "Scrottum"],
["Penis", "Peenis", "Peniss", "Penis", "Peeniss", "Peniss"],
["Sperm", "Speerm", "Speerm", "Sperm", "Speermm", "Speerm"],
["Female Reproductive System", "Feemale Reproductiv Systeem", "Female Reproductive Systtem", "Female Reproductiv Systeem", "Female Reproductiv Systtem", "Female Reproductiv Systeem"],
["Ovaries", "Ovvaries", "Ovvaries", "Ovaries", "Ovariees", "Ovvaries"],
["Fallopian Tubes", "Fallopiaan Tubes", "Fallopian Tubees", "Fallopian Tubes", "Fallopiaan Tubees", "Fallopian Tubees"],
["Uterus", "Uteruus", "Uteruus", "Uterus", "Uteruus", "Uteruus"],
["Vagina", "Vaginna", "Vaggina", "Vagina", "Vaggina", "Vagina"],
["Menstruation", "Menstruuation", "Menstruaation", "Menstruation", "Menstruaation", "Menstruattion"],
["Pregnancy", "Pregnancy", "Pregnaancy", "Pregnancy", "Pregnaancy", "Pregnancy"],
["Fertilization", "Fertilizatioon", "Fertilisation", "Fertilization", "Fertilizatioon", "Fertilization"],
["Embryo", "Embrayo", "Embrayo", "Embryo", "Embryoo", "Embrayo"],
["Fetus", "Feetus", "Feetus", "Fetus", "Feetus", "Feetus"],
["Childbirth", "Chiildbirth", "Chiildbirth", "Childbirth", "Chiildbirth", "Chiildbirth"],
["Labor", "Laabor", "Laborr", "Labor", "Laabor", "Labor"],
["Delivery", "Deliveery", "Deliveryy", "Delivery", "Deliveery", "Delivery"],
["Menopause", "Menopausse", "Menopauuse", "Menopause", "Menopausse", "Menopauuse"],
["Andropause", "Androopause", "Andropausse", "Andropause", "Androopausse", "Androopause"],
["Hormonal Imbalance", "Hormonaal Imbalance", "Hormonal Imbalancee", "Hormonall Imbalance", "Hormonal Imbalance", "Hormonaal Imbalance"],
["Adrenal Gland", "Adrenall Gland", "Adrenal Glandd", "Adrenall Gland", "Adrenall Glandd", "Adrenal Glandd"],
["Pineal Gland", "Pineall Gland", "Pineal Glandd", "Pineall Gland", "Pineal Glandd", "Pineall Gland"],
["Thyroid Gland", "Thyroidd Gland", "Thyroid Gland", "Thyroid Gland", "Thyroidd Gland", "Thyroidd Gland"],
["Pituitary Gland", "Pituitaary Gland", "Pituitaary Gland", "Pituitary Gland", "Pituitary Gland", "Pituitaary Gland"],
["Parathyroid Gland", "Parathyroidd Gland", "Parathyroid Glandd", "Parathyroid Gland", "Parathyroidd Gland", "Parathyroid Glandd"],
["Pancreatic Islets", "Pancreatiic Islets", "Pancreatic Isletts", "Pancreatiic Islets", "Pancreatic Isletts", "Pancreatiic Islets"],
["Epinephrine", "Eppinephrine", "Epinephrini", "Epinephrini", "Epinephrine", "Epinephrini"],
["Norepinephrine", "Noreppinephrine", "Norepinephrini", "Noreppinephrine", "Noreppinephrine", "Norepinephrini"],
["Melatonin", "Mellatonin", "Melatonin", "Mellatonin", "Mellatonin", "Melatonin"],
["Thyroxine", "Thyyroxine", "Thyroxine", "Thyyroxine", "Thyroxine", "Thyroxine"],
["Insulin", "Inssulin", "Insuliin", "Insulin", "Inssulin", "Insuliin"],
["Glucagon", "Glucagoon", "Glucagon", "Glucagon", "Glucagoon", "Glucagon"],
["Calcitonin", "Calciitonin", "Calcitonin", "Calciitonin", "Calciitonin", "Calcitonin"],
["Parathyroid Hormone", "Parathyroid Hormone", "Parathyroid Hormon", "Parathyroid Hormone", "Parathyroid Hormon", "Parathyroid Hormone"],
["Growth Hormone", "Groowth Hormon", "Growth Hormon", "Groowth Hormone", "Growth Hormone", "Groowth Hormon"],
["Prolactin", "Prolaactin", "Prolactin", "Prolactin", "Prolaactin", "Prolactin"],
["Follicle-Stimulating Hormone", "Follicle-Stimulatin Hormone", "Follicle-Stimulatiin Hormon", "Follicle-Stimulatin Hormone", "Follicle-Stimulatin Hormon", "Follicle-Stimulatin Hormone"],
["Luteinizing Hormone", "Luteenizing Hormon", "Luteinizing Hormon", "Luteinizing Hormone", "Luteenizing Hormon", "Luteinizing Hormone"],
["Oxytocin", "Oxytocinn", "Oxytocin", "Oxytocinn", "Oxytocin", "Oxytocinn"],
["Antidiuretic Hormone", "Antidiuretiic Hormon", "Antidiuretic Hormone", "Antidiuretic Hormon", "Antidiuretic Hormone", "Antidiuretic Hormon"],
["Estradiol", "Estraadiol", "Estradiol", "Estraadiol", "Estradiol", "Estradiol"],
["Progesterone", "Progesteronne", "Progesterone", "Progesteronne", "Progesterone", "Progesteronne"],
["Testosterone", "Testosteroone", "Testosterone", "Testosteroone", "Testosterone", "Testosteroone"],
["Follicle", "Folicle", "Folliclee", "Folicle", "Follicle", "Folicle"],
["Ovum", "Ovvum", "Ovvum", "Ovum", "Ovvum", "Ovum"],
["Zygote", "Zygoote", "Zygoote", "Zygote", "Zygoote", "Zygote"],
["Blastocyst", "Blastocyst", "Blastocystt", "Blastocyst", "Blastocyst", "Blastocystt"],
["Embryo", "Emmbryo", "Embryo", "Emmbryo", "Embryo", "Emmbryo"],
["Fetus", "Feetus", "Feetus", "Fetus", "Feetus", "Feetus"],
["Gestation", "Gestattion", "Gestation", "Gestattion", "Gestattion", "Gestation"],
["Placenta", "Placenta", "Placenta", "Placenta", "Placenta", "Placenta"],
["Amnion", "Amnionn", "Amnion", "Amnionn", "Amnion", "Amnionn"],
["Umbilical Cord", "Umbillical Cord", "Umbilical Cord", "Umbillical Cord", "Umbillical Cord", "Umbilical Cord"],
["Parturition", "Parturiition", "Parturition", "Parturiition", "Parturition", "Parturiition"],
["Lactation", "Lactationn", "Lactationn", "Lactation", "Lactationn", "Lactationn"],
["Milk", "Milk", "Milk", "Milk", "Milk", "Milk"],
["Colostrum", "Colosttrum", "Colostrum", "Colosttrum", "Colosttrum", "Colostrum"],
["Neonate", "Neonatte", "Neonate", "Neonatte", "Neonatte", "Neonate"],
["Infant", "Infannt", "Infant", "Infannt", "Infannt", "Infant"],
["Toddler", "Toddller", "Toddler", "Toddller", "Toddller", "Toddler"],
["Adolescent", "Adolesccent", "Adolescent", "Adolesccent", "Adolesccent", "Adolescent"],
["Puberty", "Puberrty", "Puberty", "Puberrty", "Puberrty", "Puberty"],
["Adulthood", "Adullthood", "Adulthood", "Adullthood", "Adulthood", "Adullthood"],
["Senescence", "Senesccence", "Senescence", "Senesccence", "Senescence", "Senesccence"],
["Mortality", "Mortalityy", "Mortality", "Mortalityy", "Mortality", "Mortalityy"],
["Metabolic Respiration", "Cellular Respiration", "Cellular oxidation", "Biological oxidation", "Bioenergetics", "Respiratory metabolism"],
     [
    'my name', 'myname', 'my nme', 'm name', 'my naem', 'mi name', 'my nmae', 'mi nme',
    'my naame', 'my naam', 'my names', 'my nam', 'mi nam', 'my nma', 'my nmame'
    ],
    ["introduce yourself", "present yourself", "tell me about yourself", "who are you", "can you introduce yourself", "give me your introduction", "provide your introduction", "what is your name and role", "can you tell me who you are", "please introduce yourself"],
    ["how old are you", "what is your age", "can you tell me your age", "what’s your age", "how many years old are you", "how long have you existed", "how old do you claim to be", "how many years have you been around", "what’s your birth year", "when were you created"],
    ["are you human", "are you a human", "are you a person", "are you a human being", "are you a real person", "are you flesh and blood", "are you an actual human", "are you of human origin", "do you have a human form"],
    ["are you a robot", "are you an AI", "are you a machine", "are you an artificial intelligence", "are you a bot", "are you an automaton", "are you a programmed entity", "are you a robotic assistant", "are you a software agent"],
    ["are you a chatbot", "are you a virtual assistant", "are you a conversational agent", "are you an AI assistant", "are you an automated responder", "are you a chat assistant", "are you a text-based AI", "are you an interactive agent", "are you a digital assistant"],
    ["what is typewriters","what are typewriters", "what is typing machines","what are the typing machines","what are typing machines"],
    ["hello", "hi", "hey", "greetings", "howdy", "hiya"],
    ["goodbye", "bye", "farewell", "see you", "later", "adios", "ciao"],
    ["thank you", "thanks", "thx", "thankful", "grateful", "appreciate it"],
    ["no", "nope", "nah", "nay", "no thanks", "no thank you"],
    ["yes", "yeah", "yep", "yea", "yup", "yupp", "yuppy", "yuppie", "yuppie", "yuppies", "yuppies", "yuppies", "yuppies", "yuppies", "yuppies", "yuppies", "yuppies", "yuppies", "yuppies"],
    ['astronomy', 'astrology', 'space science', 'celestial study'],
    ['geology', 'earth science', 'geological science', 'study of rocks'],
    ['meteorology', 'weather science', 'climate science', 'atmospheric science'],
    ['ecology', 'environmental science', 'ecosystem study', 'study of organisms'],
    ['botany', 'plant science', 'plant biology', 'study of plants'],
    ['zoology', 'animal science', 'animal biology', 'study of animals'],
    ['genetics', 'gene study', 'heredity science', 'study of genes'],
    ['microbiology', 'microbe study', 'microbe biology', 'study of microorganisms'],
    ['biochemistry', 'chemical biology', 'biological chemistry', 'study of biochemical processes'],
    ['organic chemistry', 'carbon chemistry', 'study of organic compounds', 'organic chem'],
    ['inorganic chemistry', 'non-organic chemistry', 'study of inorganic compounds', 'inorganic chem'],
    ['physical chemistry', 'physicochemical science', 'study of physical properties of chemicals', 'phys chem'],
    ['nuclear physics', 'nuclear science', 'study of atomic nuclei', 'nuclear phys'],
    ['quantum physics', 'quantum mechanics', 'study of quantum phenomena', 'quantum phys'],
    ['particle physics', 'subatomic physics', 'study of particles', 'particle phys'],
    ['cosmology', 'universe study', 'study of the cosmos', 'cosmological science'],
    ['planetary science', 'planetary study', 'study of planets', 'planetology'],
    ['seismology', 'earthquake science', 'study of seismic waves', 'seismic study'],
    ['volcanology', 'volcano science', 'study of volcanoes', 'volcanic study'],
    ['climatology', 'climate science', 'study of climate', 'climatic study'],
    ['oceanography', 'ocean science', 'study of oceans', 'marine science'],
    ['environmental science', 'environmental studies', 'study of the environment', 'enviro science'],
    ['ecosystem', 'ecological system', 'ecology', 'biome', 'environment'],
    ['evolution', 'evolutionary science', 'study of evolution', 'evolutionary biology'],
    ['natural selection', 'evolutionary mechanism', 'survival of the fittest', 'selection process'],
    ['cell biology', 'cytology', 'study of cells', 'cellular biology'],
    ['molecular biology', 'molecular science', 'study of molecules', 'molecular bio'],
    ['neuroscience', 'brain science', 'study of the nervous system', 'neural science'],
    ['cell', 'cellular unit', 'biological cell', 'basic unit of life'],
    ['natural', 'nature', 'natural world', 'naturally occurring'],
    ['geography', 'geographical', 'geography study', 'geo study', 'study of earth'],
    ['terrain', 'landform', 'landscape', 'ground', 'topography'],
    ['climate', 'weather patterns', 'weather', 'climatic conditions', 'regional weather'],
    ['ecosystem', 'ecological system', 'ecology', 'biome', 'environment'],
    ['latitude', 'lat', 'parallel', 'horizontal coordinate'],
    ['longitude', 'long', 'meridian', 'vertical coordinate'],
    ['continent', 'landmass', 'mainland'],
    ['island', 'isle', 'islet', 'atoll', 'land in water'],
    ['ocean', 'sea', 'big water body', 'marine'],
    ['river', 'stream', 'watercourse', 'creek', 'brook'],
    ['mountain', 'mount', 'hill', 'peak', 'summit'],
    ['plateau', 'tableland', 'high plain', 'mesa'],
    ['valley', 'dale', 'glen', 'hollow'],
    ['desert', 'arid region', 'drought area', 'sandy area'],
    ['forest', 'woods', 'woodland', 'jungle'],
    ['tundra', 'frozen plain', 'treeless plain'],
    ['glacier', 'ice mass', 'ice sheet', 'glacial ice'],
    ['coastline', 'coast', 'shoreline', 'shore', 'seaboard'],
    ['delta', 'river delta', 'river mouth'],
    ['canyon', 'gorge', 'ravine', 'chasm'],
    ['programming', 'coding', 'software development', 'scripting', 'progrmming', 'progrmming', 'prgramming'],
    ['computer', 'PC', 'desktop', 'laptop', 'compter', 'computr', 'compoter'],
    ['code', 'script', 'source code', 'program', 'coe', 'cod', 'coe'],
    ['algorithm', 'procedure', 'formula', 'recipe', 'algorthm', 'algorith', 'algoritm'],
    ['debug', 'troubleshoot', 'fix bugs', 'resolve issues', 'debbug', 'debugg', 'debg'],
    ['compile', 'build', 'assemble', 'generate', 'compil', 'compilee', 'complie'],
    ['execute', 'run', 'perform', 'carry out', 'execut', 'exectue', 'exxecute'],
    ['variable', 'placeholder', 'identifier', 'storage', 'varible', 'variabl', 'variaable'],
    ['function', 'method', 'procedure', 'routine', 'functin', 'fucntion', 'funtion'],
    ['loop', 'iteration', 'repeat', 'lop', 'loo', 'lopp'],
    ['condition', 'if statement', 'branch', 'decision', 'conditon', 'conditionn', 'conditio'],
    ['array', 'list', 'collection', 'sequence', 'aray', 'arry', 'arrray'],
    ['object', 'instance', 'entity', 'item', 'objct', 'obect', 'objectt'],
    ['class', 'blueprint', 'template', 'prototype', 'clas', 'clss', 'clsss'],
    ['inheritance', 'subclassing', 'derivation', 'extending', 'inheritnce', 'inheritanc', 'inheritane'],
    ['interface', 'API', 'contract', 'boundary', 'interace', 'interfac', 'interfaace'],
    ['network', 'internet', 'web', 'intranet', 'netwrk', 'netwrok', 'neetwork'],
    ['database', 'DB', 'data store', 'repository', 'databasee', 'databse', 'databaase'],
    ['server', 'host', 'backend', 'web server', 'serve', 'serverr', 'servver'],
    ['client', 'user', 'frontend', 'consumer', 'clent', 'clinet', 'cliennt'],
    ['cloud', 'cloud computing', 'online storage', 'cloud service', 'clud', 'clou', 'cloudd'],
    ['storage', 'memory', 'disk', 'data store', 'storae', 'storag', 'stoorage'],
    ['hardware', 'equipment', 'machinery', 'device', 'hardwar', 'hardwaare', 'hardwaer'],
    ['software', 'application', 'program', 'app', 'sftware', 'softwar', 'sofware'],
    ['operating system', 'system software', 'platform', 'oerating system', 'operatig system', 'operating syste'],
    ['file', 'document', 'record', 'data', 'fle', 'fie', 'fil'],
    ['folder', 'directory', 'subdirectory', 'catalog', 'foler', 'foldr', 'foldder'],
    ['GUI', 'graphical user interface', 'interface', 'UI', 'GUi', 'GUUI', 'GGUI'],
    ['CLI', 'command line interface', 'terminal', 'shell', 'CLO', 'CLII', 'CLIi'],
    ['encryption', 'coding', 'scrambling', 'encoding', 'encrytion', 'encription', 'encrption'],
    ['decryption', 'decoding', 'unscrambling', 'deciphering', 'decryptio', 'decription', 'decrytion'],
    ['data', 'information', 'details', 'facts', 'dta', 'daa', 'dat'],
    ['backup', 'copy', 'duplicate', 'archive', 'bakup', 'bacup', 'bckup'],
    ['restore', 'recover', 'retrieve', 'reinstate', 'restor', 'restoer', 'restoree'],
    ['security', 'protection', 'safety', 'defense', 'seurity', 'scurity', 'secuirty'],
    ['virus', 'malware', 'trojan', 'worm', 'virs', 'viruss', 'vrius'],
    ['firewall', 'security barrier', 'protective barrier', 'filter', 'fireall', 'firwall', 'fiirewall'],
    ['protocol', 'standard', 'rule', 'procedure', 'protoocl', 'protocool', 'protoco'],
    ['bandwidth', 'data transfer rate', 'network capacity', 'bit rate', 'bandwdth', 'bandwitdh', 'bandwiidth'],
    ['browser', 'web browser', 'internet browser', 'navigator', 'browsr', 'bowser', 'brouser'],
    ['url', 'web address', 'link', 'uniform resource locator', 'urll', 'ur', 'uuurll'],
    ['https', 'secure hypertext transfer protocol', 'secure web protocol', 'secure internet protocol', 'HTTPSS', 'HTPPS', 'HTTPSSS'],
    ['http', 'hypertext transfer protocol', 'web protocol', 'internet protocol', 'HHTP', 'HTPP', 'HTTTP'],
    ['ip', 'internet protocol', 'IP address', 'network address', 'PI', 'IPP', 'IIP'],
    ['bernoulli\'s theorem', 'bernoullis theorem', 'bernoullis theorum', 'bernoulli theorem', 'bernoulis theorem', 'bernouli\'s theorem'],
    ['theorem', 'theorum', 'theoram', 'theorm', 'therom'],
    ['physics', 'phyics', 'phsics', 'physic', 'phycis'],
    ['physician', 'physcian', 'phycisian', 'physican', 'phycisian'],
    ['newton', 'newten', 'newtn', 'neewton', 'newtin'],
    ['einstein', 'einstien', 'enstein', 'instien', 'einstin'],
    ['relativity', 'relativty', 'relativitiy', 'relativiti', 'relativiti'],
    ['quantum mechanics', 'quantum mecanics', 'quantum mechancis', 'quantum machanics', 'quantam mechanics'],
    ['thermodynamics', 'thermodinamics', 'thermodynmics', 'thermodinamic', 'thermodinamics'],
    ['electromagnetism', 'electromagnatism', 'electromagnatism', 'electromagnetisum', 'electromagmetism'],
    ['gravity', 'gravty', 'gravitiy', 'gravaty', 'gravitty'],
    ['force', 'forse', 'foce', 'forc', 'fore'],
    ['energy', 'enery', 'enegy', 'energey', 'energi'],
    ['momentum', 'momntum', 'momentun', 'momentom', 'momentim'],
    ['velocity', 'velociti', 'velocitty', 'velocty', 'velosity'],
    ['acceleration', 'aceleration', 'accleration', 'accelaration', 'accelration'],
    ['mass', 'mas', 'mase', 'muss', 'maas'],
    ['wave', 'wae', 'wve', 'waav', 'wav'],
    ['particle', 'partical', 'particale', 'prarticle', 'particl'],
    ['atom', 'atm', 'aotm', 'atomm', 'atomn'],
    ['molecule', 'molecul', 'moleculle', 'molecle', 'molcule'],
    ['proton', 'proten', 'protn', 'protton', 'protun'],
    ['neutron', 'neutrn', 'nutron', 'newtron', 'neutorn'],
    ['electron', 'electrn', 'electorn', 'electrun', 'eletron'],
    ['photon', 'photen', 'fotom', 'photn', 'fotun'],
    ['neutrino', 'nutrino', 'neutreno', 'nutreno'],
    ['quark', 'quarck', 'quarkk', 'qark'],
    ['string theory', 'string theoy', 'string theori', 'string theeory', 'sting theory'],
    ['black hole', 'blackhol', 'black hoe', 'blackholl', 'blak hole'],
    ['singularity', 'singularty', 'singulairty', 'singularityy'],
    ['big bang', 'bigbang', 'big bangg', 'bigbng'],
    ['cosmology', 'cosmolgy', 'cosmoology', 'cosmologyy', 'cosmoloy'],
    ['entropy', 'entropi', 'enttropy', 'entropiy', 'entopy'],
    ['fission', 'fision', 'fissoon', 'fissionn', 'fisioin'],
    ['fusion', 'fuson', 'fuson', 'fusionn', 'fusioon'],
    ['radioactivity', 'radiocativity', 'radioactivty', 'radiocativity', 'radioactiviti'],
    ['half-life', 'half life', 'halflife', 'half lif', 'halflif'],
    ['magnetism', 'magnetisum', 'magentism', 'magnetim', 'magnatism'],
    ['superconductivity', 'superconductvity', 'superconductiviity', 'superconductivty', 'superconductiviti'],
    ['crystallography', 'crystallogaphy', 'crystalography', 'crystalographi', 'crystalograpy'],
    ['fluid dynamics', 'fluid dynamcs', 'fluid dinamics', 'fluide dynamics', 'fluide dynamcs'],
    ['plasma', 'plsm', 'plasme', 'plasama', 'plasama'],
    ['solid', 'solidd', 'soild', 'solidt', 'soildd'],
    ['liquid', 'liqud', 'liquidd', 'liqid', 'liquidd'],
    ['gas', 'gass', 'gasss', 'gase', 'gaas'],
    ['matter', 'matteer', 'mater', 'matterr', 'materr'],
    ['antimatter', 'antimaterr', 'antimater', 'antimattr'],
    ['dark matter', 'dark mater', 'darkmatter', 'dark mater'],
    ['dark energy', 'darkenergy', 'dark enegy', 'darkenergey', 'dark enery'],
    ['universe', 'univers', 'unviverse', 'universse', 'univerce'],
    ['multiverse', 'multivers', 'multiversse', 'multiverce', 'multversee'],
    ['space-time', 'space time', 'spacetime', 'space-timee', 'spacetim'],
    ['dimension', 'dimesion', 'dimensin', 'dimensioon', 'dimention'],
    ['wave-particle duality', 'wave particle duality', 'wave-particle dualty', 'wave-particle dualiity', 'wave-particle dualy'],
    ["Cell", "Cel", "Celll", "Celle", "Cll", "Cle", "Celul"],
];

function normalizePhrase(phrase) {
    let normalizedPhrase = removeSomeDt(phrase).toLowerCase();
    
    synonymsArray.forEach(synonyms => {
        synonyms.slice(1).forEach(synonym => {
            const regex = new RegExp(`\\b${synonym}\\b`, 'g');
            normalizedPhrase = normalizedPhrase.replace(regex, synonyms[0]);
        });
    });
    
    return normalizedPhrase;
}

function phraseWords(phrase) {
    var freshWords = removeSomeDt(phrase); 
    freshWords = normalizePhrase(phrase)
    var words = freshWords.split(/\s+/);
    var botResponse = "";

    var dissatisfactionResponse = handleUserDissatisfaction(freshWords);
    if (dissatisfactionResponse) {
        botResponse = dissatisfactionResponse;
    } else {
        var matchedStatementGreeting = statementGreetings.find(greeting => freshWords.includes(greeting.toLowerCase()));
        var matchedThankingStatement = thankingStatements.find(thanking => freshWords.includes(thanking.toLowerCase()));
        var botWordsQns = botDetailsWords.find(botQns => freshWords.includes(botQns.toLowerCase()));
        var matchedOtherPhrases = otherPhasesList.find(matchedPhrasedOther => freshWords.includes(matchedPhrasedOther.toLowerCase()));
        var matchedSciencePhrases = scienceWordList.find(matchedScienceP => freshWords.includes(matchedScienceP.toLowerCase()));
        var matchedGeoWord = geoWordList.find(matchedgeoWord => freshWords.includes(matchedgeoWord.toLowerCase()));
        var matchedCodeWords = codeWordList.find(matchedWordesCode => freshWords.includes(matchedWordesCode.toLowerCase()));
        var matchedPhysWord = physWordList.find(matchedphysWord => freshWords.includes(matchedphysWord.toLowerCase()));
        var matchedBiosWord = biosWordList.find(matchedbiosWord => freshWords.includes(matchedbiosWord.toLowerCase()));
        if (matchedStatementGreeting) {
            botResponse = statementGreetingsResponse(matchedStatementGreeting);
        }else if (matchedBiosWord) {
                botResponse = biosWords(matchedBiosWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            }  else if (matchedPhysWord) {
                botResponse = physicsWords(matchedPhysWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedCodeWords) {
                botResponse = handleCodeWords(matchedCodeWords)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            }  else if (matchedGeoWord) {
                botResponse = geoWords(matchedGeoWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            }  else if (matchedSciencePhrases) {
            botResponse = handleSciencePhrases(matchedSciencePhrases)
            .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
        }  else if (matchedThankingStatement) {
            botResponse = thankingStatementsResponse(matchedThankingStatement);
        }  else if (matchedThankingStatement) {
            botResponse = thankingStatementsResponse(matchedThankingStatement);
        } else if (botWordsQns) {
            botResponse = handleBotDetails(botWordsQns);
        } else if (matchedOtherPhrases) {
            botResponse = handleothersPhrases(matchedOtherPhrases);
        } else {
            var matchedOthersWord = othersWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedEnvironmentWord = environmentWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedMathWord = mathWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedCivicWord = civicWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedEntertainWord = entertainWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedTechWord = techWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedEconomicWord = economicWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedBotWord = botWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedEnvirnWord = envirnWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedChemWord = chemWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedStreetWord = streetWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedThankWord = thankWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedSwahiliWord = swahiliWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedHistoryWord = historyWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));
            var matchedCodeWord = codeWordList.find(word => words.some(w => w.toLowerCase() === word.toLowerCase()));

            if (matchedOthersWord) {
                botResponse = otherWord(matchedOthersWord);
            }  else if (matchedEnvironmentWord) {
                botResponse = environmentWordResponse(matchedEnvironmentWord);
            }else if (matchedPhysWord) {
                botResponse = physicsWords(matchedPhysWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedMathWord) {
                botResponse = mathWords(matchedMathWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedCivicWord) {
                botResponse = civicsWords(matchedCivicWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedEntertainWord) {
                botResponse = entertainWords(matchedEntertainWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedTechWord) {
                botResponse = techWords(matchedTechWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedEconomicWord) {
                botResponse = economicWords(matchedEconomicWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\.s{2,}/g, ' ');
            } else if (matchedBotWord) {
                botResponse = botWords(matchedBotWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedEnvirnWord) {
                botResponse = environmentWords(matchedEnvirnWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedChemWord) {
                botResponse = chemistryWords(matchedChemWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedStreetWord) {
                botResponse = streetWords(matchedStreetWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedThankWord) {
                botResponse = thankWords(matchedThankWord);
            } else if (matchedSwahiliWord) {
                botResponse = kiswahiliWords(matchedSwahiliWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            }else if (matchedCodeWord) {
                botResponse = codeWords(matchedCodeWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else if (matchedHistoryWord) {
                botResponse = historyWords(matchedHistoryWord)
                    .replace(/[\/\-@]/g, '')
                    .replace(/\./g, ".<br><br>")
                    .replace(/\s{2,}/g, ' ');
            } else {
                botResponse = `Apologies, I may not have comprehended your question regarding "${freshWords.toLowerCase()}". This could be due to the information I last trained on in January 2024 or a possible misphrasing on your part. I am having difficulty understanding it. Please consider rephrasing your question, and I'll be happy to assist. I apologize for any inconvenience caused.`;
            }
        }
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
    var interval = setInterval(function () {
        if (index === remainingText.length) {
            clearInterval(interval);
            isBotTyping = false;
            chatBotElement.scrollTop = chatBotElement.scrollHeight;

            var speakButton = document.createElement("button");
                speakButton.classList.add("speakButton");
            var speakButtonId = 'speakButton-' + new Date().getTime();
            speakButton.id = speakButtonId;
            speakButton.innerText = "play";
            messageElement.appendChild(speakButton);

            speakButton.addEventListener("click", function () {
                if (isSpeaking) {
                    stopSpeaking(speakButtonId);
                } else {
                    speakText(message, speakButtonId);
                }
            });

            var copyButton = document.createElement("button");
            copyButton.id = "copyButton";
            copyButton.innerText = "Copy ";
            messageElement.appendChild(copyButton);

            copyButton.addEventListener("click", function () {
                copyToClipboard(message);
                copyButton.innerText = "copied!";
                setTimeout(function() {
                    copyButton.innerText = "copy";
        },2000); 
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
    },2);
}

var isSpeaking = false;
var currentUtterance;

function speakText(text, buttonId) {
    const cleanText = stripHtmlTags(text);
    currentUtterance = new SpeechSynthesisUtterance(cleanText);
    var voices = window.speechSynthesis.getVoices();
    const language = 'en-US';
    const regionalVoices = voices.filter(voice => voice.lang === language);
    const maleVoices = voices.filter(voice => voice.name.toLowerCase().includes('male'));
    currentUtterance.voice = maleVoices.length > 0 ? maleVoices[0] : null;
    currentUtterance.volume = 1;
    currentUtterance.pitch = 0.7; 
    currentUtterance.rate = 1; 

    if (maleVoices.length > 0) {
        currentUtterance.voice = maleVoices[0];
    } else {
        console.log("No male voice found, using default voice.");
    }

    currentUtterance.onend = function () {
        isSpeaking = false;
        document.getElementById(buttonId).innerText = "play";
    };

    window.speechSynthesis.speak(currentUtterance);
    isSpeaking = true;
    document.getElementById(buttonId).innerText = "stop";
}

function stopSpeaking(buttonId) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    document.getElementById(buttonId).innerText = "play";
}

function addParagraphBreaks(text) {
    return text.split('.').join('.\n');
}

function copyToClipboard(text) {
    var cleanText = stripHtmlTags(text);
    var formattedText = addParagraphBreaks(cleanText);

    var tempElem = document.createElement("textarea");
    tempElem.value = formattedText;
    document.body.appendChild(tempElem);

    tempElem.select();
    tempElem.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");
    document.body.removeChild(tempElem);
}

function stripHtmlTags(str) {
    var div = document.createElement("div");
    div.innerHTML = str;
    return div.textContent || div.innerText || "";
}
