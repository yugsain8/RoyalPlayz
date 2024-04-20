//variableDelaration
const body = document.body;
const loader = document.querySelector("#loader");
const loaderContainer = document.querySelector('#loaderContainer');
const fullWebveiw = document.querySelector('#fullWebView');
const headingDiv = document.querySelector("#headingDiv");
const brandingDiv = document.querySelector("#brandingDiv");
const brandingH1 = document.querySelector("h1");
const headPc = document.querySelector("#headPc");
const logo = document.querySelector("#logo");
const navOption = Array.from(document.querySelectorAll(".navOption"));
const oHome = document.querySelector('#oHome');
// const oFavourites = document.querySelector('#oFavourites');
const links = Array.from(document.querySelectorAll(".links"))
const feedback = document.querySelector("#feedback");
const outerHead = document.querySelector('#headingDiv');
const pageHeading = document.querySelector('#pageHeading');
const mobLogo = document.querySelector('#mobLogo');
const oPlaylists = document.querySelector('#oPlaylists');
const oMore = document.querySelector('#oMore');
const oContact = document.querySelector('#oContact');
const dropdown1 = document.querySelector('#dropdownPlaylists');
const dropdown2 = document.querySelector('#dropdownMore');
const dropdown3 = document.querySelector('#dropdownContact');
const dropdownArrow = Array.from(document.querySelectorAll('.dropdownArrow'));
const dropdownOptions = Array.from(document.querySelectorAll('.dropdownOptions'));
const arrow1 = document.querySelector('#arrow1');
const arrow2 = document.querySelector('#arrow2');
const arrow3 = document.querySelector('#arrow3')
const forwardBtn = document.querySelector("#forward");
const backwardBtn = document.querySelector("#backward");
const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const pauseBtn = document.querySelector("#pause");
const searchBarContainer = document.querySelector("#searchBarContainer");
const searchBarIcon = document.querySelector("#searchBarIcon");
const searchBar = document.querySelector('#searchBar');
const images = document.querySelectorAll('img');
const progressBar = document.querySelector("#progressBar");
const songInfoText = Array.from(document.getElementsByClassName("songInfoText"));
const songPosters = Array.from(document.querySelectorAll(".songPoster"));
const imgPoster = Array.from(document.querySelectorAll(".imgPoster"));
const singer = Array.from(document.querySelectorAll(".singer"));
const album = Array.from(document.querySelectorAll(".album"));
const timeStamp = Array.from(document.querySelectorAll(".timeStamp"));
const realseDates = Array.from(document.querySelectorAll(".realseDate"));
const albums = Array.from(document.querySelectorAll(".album"));
const selectType = document.querySelector("#typeSelect");
const songContainer = document.querySelector("#container");
const artistsContainer = document.querySelector("#artistsContainer");
const playlistsContainer = document.querySelector("#playlistsContainer");
const playlistIndex = Array.from(document.querySelectorAll(".playlistIndex"));
const bottom = document.querySelector('#bottom');
const footer = document.querySelector('footer');
const songNameDisplay = document.querySelector('#songNameDisplay');
const currentTimeDisplay = document.querySelector('#currentTimeDisplay');
const totalTimeDisplay = document.querySelector("#totalTimeDisplay");
const confirmationContainer = document.querySelector('#confirmationContainer');
const confirmationMsg = document.querySelector('#confirmationMsg');
const acceptBtn = document.querySelector('#accept');
const rejectBtn = document.querySelector('#reject');
const plusImg = document.querySelector("#plusImg");
// const shareBtn = document.querySelector("#share");
const feedbackBtn = document.querySelector("#feedback");
const suggestSong = document.querySelector('#suggestSong')
const jumpToFooter = document.querySelector("#jumpToFooter");
const jumpToTopDiv = document.querySelector("#jumpToTopDiv");
const closeBottom = document.querySelector('#closeBottom');
const closeBottomI = document.querySelector('#closeBottomI');
const dropdowns = Array.from(document.querySelectorAll(".dropdown"));
const suggestionContainer = document.querySelector("#suggestionContainer");
const closeSuggestionBtn = document.querySelector("#closeSuggestionBtn");
const suggestionInput = document.querySelector("#suggestionInput");
const btnSubmit = document.querySelector('#btnSubmit');
const suggestionDoneTxt = document.querySelector("#suggestionDoneTxt");
const feedbackContainer = document.querySelector('#feedbackContainer')
const closeFeedbackBtn = document.querySelector("#closeFeedbacknBtn");
const feedbackInput = document.querySelector("#feedbackInput")
const resetFeedbackcBtn = document.querySelector("#resetFeedbackBtn")
const submitFeedbackBtn = document.querySelector("#submitFeedbackBtn")
const feedbackDoneTxt = document.querySelector('#feedbackDoneTxt')
const bestUserExpTxt = document.querySelector("#bestUserExpTxt")

let translated = false;
let audioElement = new Audio('');

//songsArray
let songs = [
    //Jassie Gill
    { songName: "Guitar Sikhda", singerName: "Jassie Gill", posterPath: "https://covers.djpunjab.pro/image/13636/Bapu-Zimidar-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201712/Guitar_Sikhda/128/Guitar_Sikhda_1" },
    { songName: "Nikle Current", singerName: "Jassie Gill", posterPath: "https://covers.djpunjab.pro/image/481345/Nikle-Currant-1.jpg", link: "https://s320.djpunjab.is/data/48/43738/289456/Nikle%20Currant%20-%20Jassi%20Gill.mp3" },
    { songName: "Ferr Ohi Hoya", singerName: "Jassie Gill", posterPath: "https://covers.djpunjab.pro/image/35160/Fer-Ohi-Hoyea-1.jpg", link: "https://s320.djpunjab.is/data/48/39310/282775/Fer%20Ohi%20Hoyea%20-%20Jassi%20Gill.mp3" },
    { songName: "Bapu Zimidaar", singerName: "Jassie Gill", posterPath: "https://covers.djpunjab.pro/image/13636/Bapu-Zimidar-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201409/Replay_Return_of_Melody/128/Bapu_Zimidar" },
    { songName: "Laden", singerName: "Jassie Gill", posterPath: "https://covers.djpunjab.pro/image/13636/Laden-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201409/Replay_Return_of_Melody/128/Laden" },
    { songName: "Lancer", singerName: "Jassie Gill", posterPath: "https://raag.fm/image/250/1106501/Batchmate_2_Jassi_Gill.jpg", link: "https://p320.djpunjab.is/data/48/7426/74049/Lancer%20-%20Jassi%20Gill.mp3" },
    { songName: "Jatt Tere Sehar", singerName: "Jassie Gill", posterPath: "https://cover.djpunjab.is/53480/300x700/gill-skill---ep(vol-1)-jassie-gill.webp", link: "jattTereShehar" },
    { songName: "Ehna Chauni Aa", singerName: "Jassie Gill", posterPath: "https://cover.djpunjab.is/47949/300x700/ehna-chauni-aa-jassie-gill.webp", link: "https://s320.djpunjab.is/data/48/47949/295304/Ehna%20Chauni%20Aa%20-%20Jassie%20Gill.mp3" },
    { songName: "Aukaat", singerName: "Jassie Gill & Karan Aujla", posterPath: "https://cover.djpunjab.is/46691/300x700/aukaat-ft.-karan-aujla-jassi-gill.webp", link: "https://cdnsongs.com/music/data/Single_Track/201902/Aukaat/128/Aukaat_1" },
    { songName: "Oye Hoye Hoye", singerName: "Jassie Gill", posterPath: "https://cover.djpunjab.is/49891/300x700/oye-hoye-hoye-jassie-gill.webp", link: "https://s320.djpunjab.is/data/48/49891/297473/Oye%20Hoye%20Hoye%20-%20Jassie%20Gill.mp3" },
    { songName: "Nakhre", singerName: "Jassie Gill", posterPath: "https://covers.djpunjab.pro/image/34743/Nakhre-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201702/Jump_2_Bhangraaa/128/Nakhre" },
    { songName: "Naina Nu", singerName: "Jassie Gill", posterPath: "https://cover.djpunjab.is/7846/300x700/mr.-nd-mrs.-420-ft.-babbal-rai,jassi-gill-various.webp", link: "https://p320.djpunjab.is/data/48/7846/77799/Jassi%20Gill%20-%20Naina%20Nu%20-%20Various.mp3" },
    { songName: "Dill Ton Blacck", singerName: "Jassie Gill & Badshah", posterPath: "https://covers.djpunjab.pro/image/42089/Dill-Ton-Blacck-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201801/Dill_Ton_Blacck/128/Dill_Ton_Blacck_1" },
    // { songName: "", singerName: "Jassie Gill", posterPath: "", link: "" },

    //Karan Aujla
    { songName: "52 Bars", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/53216/300x700/four-you-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/53216/301381/52%20Bars%20-%20Karan%20Aujla.mp3" },
    { songName: "Bachke Bachke", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/54172/300x700/making-memories-karan-aujla.webp", link: "https://p320.djpunjab.is/data/48/54172/302538/Bachke%20Bachke%20(feat.%20Yarah)%20-%20Karan%20Aujla.mp3" },
    { songName: "2 AM", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/46439/300x700/2-am-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/46439/293286/2%20AM%20-%20Karan%20Aujla.mp3" },
    { songName: "Softly", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/54172/300x700/making-memories-karan-aujla.webp", link: "https://p320.djpunjab.is/data/48/54172/302540/Softly%20-%20Karan%20Aujla.mp3" },
    { songName: "On Top", singerName: "Karan Aujla", posterPath: "https://covers.djpunjab.pro/image/503230/On-Top-1669295239.jpg", link: "https://s320.djpunjab.is/data/48/52751/300803/On%20Top%20-%20Karan%20Aujla.mp3" },
    { songName: "Try Me", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/54172/300x700/making-memories-karan-aujla.webp", link: "https://p320.djpunjab.is/data/48/54172/302539/Try%20Me%20-%20Karan%20Aujla.mp3" },
    { songName: "What...?", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/54172/300x700/making-memories-karan-aujla.webp", link: "https://p320.djpunjab.is/data/48/54172/302534/What%20-%20Karan%20Aujla.mp3" },
    { songName: "Jee Ni Lagda", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/54172/300x700/making-memories-karan-aujla.webp", link: "https://p320.djpunjab.is/data/48/54172/302537/Jee%20Ni%20Lagda%20-%20Karan%20Aujla.mp3" },
    { songName: "Champion's Antem", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/54172/300x700/making-memories-karan-aujla.webp", link: "https://p320.djpunjab.is/data/48/54172/302536/Champions%20Anthem%20-%20Karan%20Aujla.mp3" },
    { songName: "P.O.V.(Point Of View)", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/53672/300x700/p.o.v-(point-of-view)-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/53672/301898/P.O.V%20(Point%20Of%20View)%20-%20Karan%20Aujla.mp3" },
    { songName: "Take It Easy", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/53216/300x700/four-you-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/53216/301382/Take%20It%20Easy%20-%20Karan%20Aujla.mp3" },
    { songName: "Fallin Apart", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/53216/300x700/four-you-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/53216/301383/Fallin%20Apart%20-%20Karan%20Aujla.mp3" },
    { songName: "Yeah Naah", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/53216/300x700/four-you-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/53216/301384/Yeah%20Naah%20-%20Karan%20Aujla.mp3" },
    { songName: "Sheesha", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/52361/300x700/sheesha-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/52361/300365/Sheesha%20-%20Karan%20Aujla.mp3" },
    { songName: "Aadhiya", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/49086/300x700/adhiya-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/49086/296609/Adhiya%20-%20Karan%20Aujla.mp3" },
    { songName: "White Brown Black", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/52840/300x700/white-brown-black-avvy-sra.webp", link: "https://s320.djpunjab.is/data/48/52840/300918/White%20Brown%20Black%20-%20Avvy%20Sra.mp3" },
    { songName: "Admirin You", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/54095/300x300/admirin-you-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/54095/302451/Admirin%20You%20-%20Karan%20Aujla.mp3" },
    { songName: "Chitta Kurata", singerName: "Karan Aujla", posterPath: "https://covers.djpunjab.pro/image/487236/Chitta-Kurta-1.jpg", link: "https://s320.djpunjab.is/data/48/47081/294165/Chitta%20Kurta%20-%20Karan%20Aujla.mp3" },
    { songName: "Let 'em Play", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/48290/300x700/let-em-play-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/48290/295684/Let%20Em%20Play%20-%20Karan%20Aujla.mp3" },
    { songName: "Koka Vs Coca", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/48798/300x700/koka-vs-coca-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/48798/296280/Koka%20Vs%20Coca%20-%20Karan%20Aujla.mp3" },
    { songName: "Red Eyes", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/47699/300x700/red-eyes-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/47699/295004/Red%20Eyes%20-%20Karan%20Aujla.mp3" },
    { songName: "Jhanjar", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/47450/300x700/jhanjar-(original)-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/47450/294654/Jhanjar%20(Original)%20-%20Karan%20Aujla.mp3" },
    { songName: "Hint", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/46831/300x700/hint-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/46831/293833/Hint%20-%20Karan%20Aujla.mp3" },
    { songName: "Rim Vs Jhanjar", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/44256/300x700/rim-vs-jhanjar-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/44256/290134/Rim%20Vs%20Jhanjar%20-%20Karan%20Aujla.mp3" },
    { songName: "kya Baat Ae", singerName: "Karan Aujla", posterPath: "https://cover.djpunjab.is/48701/300x700/kya-baat-aa-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/48701/296175/Kya%20Baat%20Aa%20-%20Karan%20Aujla.mp3" },
    { songName: "Hisaab", singerName: "Karan Aujla & Divine", posterPath: "https://cover.djpunjab.is/55105/300x700/street-dreams-karan-aujla.webp", link: "https://p320.djpunjab.is/data/48/55105/303875/Hisaab%20-%20Karan%20Aujla.mp3" },
    { songName: "100 Million", singerName: "Karan Aujla & Divine", posterPath: "https://cover.djpunjab.is/54966/300x700/100-million-karan-aujla.webp", link: "https://s320.djpunjab.is/data/48/54966/303670/100%20Million%20-%20Karan%20Aujla.mp3" },
    { songName: "Gangsta", singerName: "Karan Aujla", posterPath: "https://covers.djpunjab.pro/image/501671/Gangsta-1652134228.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202205/Way_Ahead_EP/128/Gangsta" },
    // { songName: "", singerName: "Karan Aujla", posterPath: "", link: "" },

    //Babu Maan
    { songName: "Mittran Di Chhatri", singerName: "Babu Maan", posterPath: "", link: "https://p320.djpunjab.is/data/48/3468/11117/Mitran%20Di%20Chhatri%20-%20Babbu%20Maan.mp3" },
    { songName: "Mehfil Mitraan Di", singerName: "Babu Maan", posterPath: "", link: "https://p320.djpunjab.is/data/48/5723/53820/Mehfil%20Mitran%20Di%20-%20Babbu%20Maan.mp3" },
    { songName: "Shounk Hathiyaraan Da", singerName: "Babu Maan", posterPath: "", link: "https://p320.djpunjab.is/data/48/4365/16718/Shaunk%20Hathyaran%20Da%20-%20Babbu%20Maan.mp3" },
    { songName: "Mere Dil Wich", singerName: "Babu Maan", posterPath: "", link: "https://p320.djpunjab.is/data/48/3468/11118/Mere%20Dil%20Vich%20-%20Babbu%20Maan.mp3" },
    { songName: "Pagal Shayar", singerName: "Babu Maan", posterPath: "", link: "https://s320.djpunjab.is/data/48/51230/299064/Pagal%20Shayar%20-%20Babbu%20Maan.mp3" },
    { songName: "Saaun Di Jhadi", singerName: "Babu Maan", posterPath: "", link: "https://p320.djpunjab.is/data/48/3495/67610/Saaun%20Di%20Jhadi%20-%20Babbu%20Maan.mp3" },
    { songName: "Jatt Di Joon Buri", singerName: "Babu Maan", posterPath: "", link: "https://p320.djpunjab.is/data/48/3571/30061/Jatt%20Di%20Joon%20Buri%20-%20Babbu%20Maan.mp3" },
    { songName: "Touch Wood", singerName: "Babu Maan", posterPath: "", link: "https://p320.djpunjab.is/data/48/4410/67753/Touch%20Wood%20-%20Babbu%20Maan.mp3" },
    { songName: "Dil Tan Pagal Hai", singerName: "Babu Maan", posterPath: "", link: "https://p320.djpunjab.is/data/48/3495/67607/Dil%20Tan%20Pagal%20Hai%20-%20Babbu%20Maan.mp3" },
    { songName: "Clickan", singerName: "Babu Maan", posterPath: "https://cover.djpunjab.is/47157/300x700/clickan-babbu-maan.webp", link: "https://s320.djpunjab.is/data/48/47157/294248/Clickan%20-%20Babbu%20Maan.mp3" },
    { songName: "Pehli Vaari Peeti A", singerName: "Babu Maan", posterPath: "https://cover.djpunjab.is/53685/300x700/pehli-vaari-peeti-a-babbu-maan.webp", link: "https://s320.djpunjab.is/data/48/53685/301911/Pehli%20Vaari%20Peeti%20A%20-%20Babbu%20Maan.mp3" },
    { songName: "Singh Soorme", singerName: "Babu Maan", posterPath: "https://covers.djpunjab.pro/image/501509/Gal-Ni-Hoyi-1.jpg", link: "https://s320.djpunjab.is/data/48/53290/301487/Singh%20Soorme%20-%20Babbu%20Maan" },
    { songName: "Gall Ni Hoyi", singerName: "Babu Maan", posterPath: "https://covers.djpunjab.pro/image/501509/Mexican-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202204/Adab_Punjabi/128/Gal_Ni_Hoyi" },
    { songName: "Mexican", singerName: "Babu Maan", posterPath: "https://covers.djpunjab.pro/image/501509/Mexican-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202204/Adab_Punjabi/128/Mexican" },
    { songName: "Deg", singerName: "Babu Maan", posterPath: "https://covers.djpunjab.pro/image/501509/Deg-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202204/Adab_Punjabi/128/Deg" },
    // { songName: "", singerName: "Babu Maan", posterPath: "", link: "" },

    //Jordan Sandhu
    { songName: "Black Effect", singerName: "Jordan Sandhu", posterPath: "https://cover.djpunjab.is/51247/300x700/black-effect-jordan-sandhu.webp", link: "https://s320.djpunjab.is/data/48/51247/299081/Black%20Effect%20-%20Jordan%20Sandhu.mp3" },
    { songName: "Positivity", singerName: "Jordan Sandhu", posterPath: "https://cover.djpunjab.is/51870/300x700/positivity-jordan-sandhu.webp", link: "https://s320.djpunjab.is/data/48/51870/299799/Positivity%20-%20Jordan%20Sandhu.mp3" },
    { songName: "Mind Map", singerName: "Jordan Sandhu", posterPath: "https://cover.djpunjab.is/54929/300x700/mind-map-jordan-sandhu.webp", link: "https://s320.djpunjab.is/data/48/54929/303620/Mind%20Map%20-%20Jordan%20Sandhu.mp3" },
    { songName: "Good Luck", singerName: "Jordan Sandhu", posterPath: "https://djpunjab.com.se/upload_file/414/416/1/400x400/thumb_6399ab520490f.jpg", link: "https://djpunjab.com.se/upload_file/414/416/1/Good_Luck_Jordan_Sandhu.mp3" },
    { songName: "Jattiye Ni", singerName: "Jordan Sandhu", posterPath: "https://cover.djpunjab.is/46490/300x700/jattiye-ni-jordan-sandhu.webp", link: "https://s320.djpunjab.is/data/48/46490/293362/Jattiye%20Ni%20-%20Jordan%20Sandhu.mp3" },
    { songName: "Bajan Waleya", singerName: "Jordan Sandhu", posterPath: "https://cover.djpunjab.is/52928/300x700/bajan-waleya-jordan-sandhu.webp", link: "https://s320.djpunjab.is/data/48/52928/301019/Bajan%20Waleya%20-%20Jordan%20Sandhu.mp3" },
    { songName: "Enemy", singerName: "Jordan Sandhu", posterPath: "https://cover.djpunjab.is/55195/300x700/enemy-jordan-sandhu.webp", link: "https://s320.djpunjab.is/data/48/55195/304027/Enemy%20-%20Jordan%20Sandhu.mp3" },
    { songName: "Free Flow", singerName: "Jordan Sandhu", posterPath: "https://cover.djpunjab.is/54009/300x700/free-flow-jordan-sandhu.webp", link: "https://s320.djpunjab.is/data/48/54009/302333/Free%20Flow%20-%20Jordan%20Sandhu.mp3" },
    { songName: "Zulfaan", singerName: "Jordan Sandhu", posterPath: "https://cover.djpunjab.is/54305/300x300/zulfaan-jordan-sandhu.webp", link: "https://s320.djpunjab.is/data/48/54305/302693/Zulfaan%20-%20Jordan%20Sandhu.mp3" },
    { songName: "Chann Chann", singerName: "Jordan Sandhu", posterPath: "https://cover.djpunjab.is/51005/300x700/chann-chann-jordan-sandhu.webp", link: "https://s320.djpunjab.is/data/48/51005/298803/Chann%20Chann%20-%20Jordan%20Sandhu.mp3" },
    { songName: "Semi Auto", singerName: "Jordan Sandhu", posterPath: "https://cover.djpunjab.is/54549/300x700/semi---auto-jordan-sandhu.webp", link: "https://s320.djpunjab.is/data/48/54549/303071/Semi%20-%20Auto%20-%20Jordan%20Sandhu.mp3" },
    // { songName: "", singerName: "Jordan Sandhu", posterPath: "", link: "" },

    //Jerry
    { songName: "Pta Ni", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/53615/300x700/pta-ni-jerry.webp", link: "https://s320.djpunjab.is/data/48/53615/301841/Pta%20Ni%20-%20Jerry.mp3" },
    { songName: "Showstopper", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/53600/300x700/showstopper-jerry.webp", link: "https://s320.djpunjab.is/data/48/53600/301826/Showstopper%20-%20Jerry.mp3" },
    { songName: "Trippin", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/51586/300x700/trippin-jerry.webp", link: "https://s320.djpunjab.is/data/48/51586/299479/Trippin%20-%20Jerry.mp3" },
    { songName: "Street Style", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/52096/300x700/street-style-jerry.webp", link: "https://s320.djpunjab.is/data/48/52096/300035/Street%20Style%20-%20Jerry.mp3" },
    { songName: "She's The One", singerName: "Jerry", posterPath: "https://covers.djpunjab.pro/image/498638/Shes-The-One-1.jpg", link: "https://s320.djpunjab.is/data/48/50578/298265/She%20S%20The%20One%20-%20Jerry.mp3" },
    { songName: "Confess", singerName: "Jerry", posterPath: "https://cover.mr-jatt.im/thumb/503872/Confess-1.jpg", link: "https://s320.djpunjab.is/data/48/53229/301409/Confess%20-%20Jerry.mp3" },
    { songName: "Icon", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/54184/300x700/icon-thiarajxtt.webp", link: "https://s320.djpunjab.is/data/48/54184/302554/Icon%20-%20thiarajxtt.mp3" },
    { songName: "Top Flame", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/54312/300x700/top-flame-jerry.webp", link: "https://s320.djpunjab.is/data/48/54312/302701/Top%20Flame%20-%20Jerry.mp3" },
    { songName: "Casanova", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/50285/300x700/casanova-jerry.webp", link: "https://s320.djpunjab.is/data/48/50285/297921/Casanova%20-%20Jerry.mp3" },
    { songName: "Gaani", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/51758/300x700/gaani-jerry.webp", link: "https://s320.djpunjab.is/data/48/51758/299662/Gaani%20-%20Jerry.mp3" },
    { songName: "Mainu Ni Pehchaandi", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/50568/300x700/mainu-nai-pehchaandi-jerry.webp", link: "https://s320.djpunjab.is/data/48/50568/298255/Mainu%20Nai%20Pehchaandi%20-%20Jerry.mp3" },
    { songName: "Young G", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/54473/300x700/young-g-jerry.webp", link: "https://s320.djpunjab.is/data/48/54473/302959/Young%20G%20-%20Jerry.mp3" },
    { songName: "Palm Angels", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/52679/300x700/palm-angels-jerry.webp", link: "https://s320.djpunjab.is/data/48/52679/300728/Palm%20Angels%20-%20Jerry.mp3" },
    { songName: "Goddamn", singerName: "Jerry", posterPath: "https://cover.djpunjab.is/52960/300x700/goddamn-jerry.webp", link: "https://s320.djpunjab.is/data/48/52960/301051/Goddamn%20-%20Jerry.mp3" },
    // { songName: "", singerName: "Jerry", posterPath: "", link: "" },

    //Korala Maan
    { songName: "Gal Mukdi", singerName: "Korala Maan", posterPath: "https://covers.djpunjab.pro/image/509684/Gal-Mukdi-1.jpg", link: "https://s320.djpunjab.is/data/48/55202/304034/Gal%20Mukdi%20-%20Korala%20Maan.mp3" },
    { songName: "Dismiss 141", singerName: "Korala Maan", posterPath: "https://cover.djpunjab.is/47934/300x700/dismiss-141-korala-maan.webp", link: "https://s320.djpunjab.is/data/48/47934/295274/Dismiss%20141%20-%20Korala%20Maan.mp3" },
    { songName: "Barood Dil", singerName: "Korala Maan", posterPath: "https://cover.djpunjab.is/47431/300x700/barood-dil-korala-maan.webp", link: "https://s320.djpunjab.is/data/48/47431/294635/Barood%20Dil%20-%20Korala%20Maan.mp3" },
    { songName: "Careless", singerName: "Korala Maan", posterPath: "https://cover.mr-jatt.im/thumb/501126/Careless-1.jpg", link: "https://s320.djpunjab.is/data/48/51577/299470/Careless%20-%20Korala%20Maan.mp3" },
    { songName: "Straight Forward", singerName: "Korala Maan", posterPath: "https://cover.djpunjab.is/52208/300x700/straight-forward-korala-maan.webp", link: "https://s320.djpunjab.is/data/48/52208/300155/Straight%20Forward%20-%20Korala%20Maan.mp3" },
    { songName: "Pinda Ale", singerName: "Korala Maan", posterPath: "https://cover.djpunjab.is/54655/300x300/pinda-ale-gill-raunta.webp", link: "https://s320.djpunjab.is/data/48/54655/303209/Pinda%20Ale%20-%20Gill%20Raunta.mp3" },
    { songName: "Hul Chul", singerName: "Korala Maan", posterPath: "https://cover.djpunjab.is/51319/300x300/hul-chul-korala-maan.webp", link: "https://s320.djpunjab.is/data/48/51319/299153/Hul%20Chul%20-%20Korala%20Maan.mp3" },
    { songName: "Dont Care", singerName: "Korala Maan & R Nait", posterPath: "https://cover.djpunjab.is/51267/300x300/dont-care-r-nait.webp", link: "https://s320.djpunjab.is/data/48/51267/299101/Dont%20Care%20-%20R%20Nait.mp3" },
    { songName: "1 Hour", singerName: "Korala Maan", posterPath: "https://cover.djpunjab.is/50971/300x700/1-hour-korala-maan.webp", link: "https://s320.djpunjab.is/data/48/50971/298770/1%20Hour%20-%20Korala%20Maan.mp3" },
    { songName: "Filmy Scene", singerName: "Korala Maan", posterPath: "https://c.saavncdn.com/254/Filmy-Scene-Punjabi-2020-20201105030356-500x500.jpg", link: "https://s320.djpunjab.is/data/48/46695/293665/Filmy%20Scene%20-%20Korala%20Maan.mp3" },
    // { songName: "", singerName: "Korala Maan", posterPath: "", link: "" },

    //Akhil
    { songName: "Gaani", singerName: "Akhil", posterPath: "https://covers.djpunjab.pro/image/32182/Gani-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201606/Welcome_To_the_Future/128/Gani" },
    { songName: "Khaab", singerName: "Akhil", posterPath: "https://covers.djpunjab.pro/image/29529/Khaab-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201601/Khaab/128/Khaab_1" },
    { songName: "Rukh", singerName: "Akhil", posterPath: "https://covers.djpunjab.pro/image/38340/Rukh-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201708/Rukh/128/Rukh_1" },
    { songName: "Supne", singerName: "Akhil", posterPath: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/srch_believe_A10320WT0306395362.jpg", link: "https://cdnsongs.com/mrisky/data3/Punjabi_Single/201511/Supne/128/Supne" },
    { songName: "Duniyaa", singerName: "Akhil", posterPath: "https://cdn.jattpendu.com/thumbmed/15194556.jpg", link: "https://cdn7.jattpendu.com/download/128k-dggqm/Duniyaa" },
    { songName: "Bollywood", singerName: "Akhil", posterPath: "https://covers.djpunjab.pro/image/40864/Bollywood-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201712/Bollywood/128/Bollywood_1" },
    { songName: "Bachalo", singerName: "Akhil", posterPath: "https://covers.djpunjab.pro/image/491050/Bachalo-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202010/Bachalo/128/Bachalo_1" },
    { songName: "Paagla", singerName: "Akhil", posterPath: "https://covers.djpunjab.pro/image/497911/Paagla-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202106/Paagla/128/Paagla_1" },
    // { songName: "", singerName: "Akhil", posterPath: "", link: "" },

    //Ninja
    { songName: "Aadat", singerName: "Ninja", posterPath: "https://covers.djpunjab.pro/image/17088/Aadat-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201507/Aadat/128/Aadat_1" },
    { songName: "Aadat Ve", singerName: "Ninja", posterPath: "https://pagalnew.com/coverimages/Aadat-Ve-Ninja-500-500.jpg", link: "https://pagalnew.com/download128/19030" },
    { songName: "Roi Na", singerName: "Ninja", posterPath: "https://covers.djpunjab.pro/image/40482/Roi-Na-Shiddat-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201711/Roi_Na_Shiddat/128/Roi_Na_Shiddat_1" },
    { songName: "Oh kyu Ni Jaan Ske", singerName: "Ninja", posterPath: "https://cover.djpunjab.is/39051/300x700/oh-kyu-ni-jaan-ske-ninja.webp", link: "https://s320.djpunjab.is/data/48/39051/282292/Oh%20Kyu%20Ni%20Jaan%20Ske%20-%20Ninja" },
    { songName: "Death Row", singerName: "Ninja", posterPath: "https://cover.djpunjab.is/53699/300x700/death-row-ninja.webp", link: "https://s320.djpunjab.is/data/48/53699/301925/Death%20Row%20-%20Ninja.mp3" },
    { songName: "Dhokha", singerName: "Ninja", posterPath: "https://cover.djpunjab.is/49245/300x700/dhokha-ninja.webp", link: "https://s320.djpunjab.is/data/48/49245/296789/Dhokha%20-%20Ninja.mp3" },
    { songName: "Kalla Changa", singerName: "Ninja", posterPath: "https://covers.djpunjab.pro/image/486858/Kalla-Changa-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201911/Kalla_Changa/128/Kalla_Changa_1" },
    { songName: "License", singerName: "Ninja", posterPath: "https://a10.gaanacdn.com/gn_img/albums/qaLKY23pO4/aLKYpNqPbp/size_l.webp", link: "https://s320.djpunjab.is/data/48/38149/302173/License%20-%20Ninja.mp3" },
    { songName: "Barood", singerName: "Ninja", posterPath: "https://covers.djpunjab.pro/image/509563/Barood-1709050993.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202402/Barood/128/Barood_1" },
    { songName: "Dil", singerName: "Ninja", posterPath: "https://covers.djpunjab.pro/image/30059/Dil-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201602/Dil/128/Dil_1" },
    { songName: "Befikra", singerName: "Ninja", posterPath: "https://covers.djpunjab.pro/image/497598/Befikra-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202105/Befikra/128/Befikra_1" },
    // { songName: "", singerName: "Ninja", posterPath: "", link: "" },

    //Ammy Virk
    { songName: "Qismat", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/37662/Qismat-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201707/Qismat/128/Qismat_1" },
    { songName: "Jatti Teri", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/500460/Teri-Jatti-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202201/Teri_Jatti/128/Teri_Jatti_1" },
    { songName: "Zindabaad Yaarian", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/28887/Zindabaad-Yaarian-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201512/Zindabaad_Yaarian/128/Zindabaad_Yaarian_1" },
    { songName: "Happiness", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/509307/Happiness-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202401/Happiness/128/Happiness_1" },
    { songName: "Main Suneya", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/488924/Main-Suneya-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202005/Main_Suneya-1/128/Main_Suneya_1" },
    { songName: "Chann Sitare", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/502974/Chann-Sitare-1667122366.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202210/Chann_Sitare/128/Chann_Sitare_1" },
    { songName: "Kya Hi battan", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/505370/Kya-Hi-Baataan-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202309/Gaddi_Jaandi_Ae_Chalaangaan_Maardi/128/Kya_Hi_Baataan" },
    { songName: "Wang Da Naap", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/484163/Wang-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201905/Wang/128/Wang_1" },
    { songName: "Khabbi Seat", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/496942/Khabbi-Seat-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202104/Khabbi_Seat-1/128/Khabbi_Seat_1" },
    { songName: "Mini Cooper", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/33330/Mini-Cooper-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201609/Nikka_Zaildar/128/Mini_Cooper" },
    { songName: "Haan Kargi", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/31304/Haan-Kargi-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201604/Haan_Kargi/128/Haan_Kargi_1" },
    { songName: "Kunndhi Muchh", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/504354/Kunndhi-Muchhh-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202304/Kunndhi_Muchhh/128/Kunndhi_Muchhh_1" },
    { songName: "Sohni Sohni", singerName: "Ammy Virk", posterPath: "https://cover.djpunjab.is/51912/300x700/sohni-sohni-ammy-virk.webp", link: "https://cdnsongs.com/music/data/Single_Track/202205/Sohni_Sohni/128/Sohni_Sohni_1" },
    { songName: "Saade Kothe Utte", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/501558/Saade-Kothe-Utte-1651316251.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202204/Saade_Kothe_Utte/128/Saade_Kothe_Utte_1" },
    { songName: "Hath Chumme", singerName: "Ammy Virk & B Praak", posterPath: "https://covers.djpunjab.pro/image/479761/Hath-Chumme-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201806/Hath_Chumme/128/Hath_Chumme_1" },
    { songName: "Tod Da E Dil", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/488826/Tod-Da-E-Dil-Full-Version-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202005/Tod_Da_E_Dil_Full_Version/128/Tod_Da_E_Dil_Full_Version_1" },
    { songName: "Daryaa", singerName: "Shahid Mallya & Ammy Virk", posterPath: "https://cover.djpunjab.is/43161/300x700/daryaa-(manmarziyaan)-ammy-virk.webp", link: "https://s320.djpunjab.is/data/48/43161/288642/Daryaa%20(Manmarziyaan)%20-%20Ammy%20Virk.mp3" },
    { songName: "Regret", singerName: "Ammy Virk", posterPath: "https://cover.djpunjab.is/48760/300x700/regret-ammy-virk.webp", link: "https://s320.djpunjab.is/data/48/48760/296234/Regret%20-%20Ammy%20Virk.mp3" },
    { songName: "Kade Kade", singerName: "Ammy Virk", posterPath: "https://cover.djpunjab.is/50290/300x700/kade-kade-ammy-virk.webp", link: "https://s320.djpunjab.is/data/48/50290/297926/Kade%20Kade%20-%20Ammy%20Virk.mp3" },
    { songName: "Jaan Deyan Ge", singerName: "Ammy Virk", posterPath: "https://cover.djpunjab.is/47456/300x700/jaan-deyan-ge-(sufna)-ammy-virk.webp", link: "https://s320.djpunjab.is/data/48/47456/294660/Jaan%20Deyan%20Ge%20(Sufna)%20-%20Ammy%20Virk.mp3" },
    { songName: "Double Cross", singerName: "Ammy Virk", posterPath: "https://cover.djpunjab.is/44001/300x700/double-cross-ammy-virk.webp", link: "https://s320.djpunjab.is/data/48/44001/289829/Double%20Cross%20-%20Ammy%20Virk.mp3" },
    { songName: "Hassiyan Khedian", singerName: "Ammy Virk", posterPath: "https://raag.fm/image/250/3230157/Hassiyan_Khedian_Ammy_Virk.jpg", link: "https://raag.fm/files/mp3/128/Punjabi-Singles/3230157/Hassiyan%20Khedian%20-%20(Raag.Fm).mp3" },
    { songName: "Bullet vs Chammak Challo", singerName: "Ammy Virk", posterPath: "https://cover.djpunjab.is/7769/300x700/jattizm-ammy-virk.webp", link: "https://p320.djpunjab.is/data/48/7769/77130/Bullet%20vs%20Chammak%20Challo%20-%20Ammy%20Virk" },
    { songName: "Hanju", singerName: "Ammy Virk", posterPath: "https://covers.djpunjab.pro/image/39313/Hanju-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201710/Hanju/128/Hanju_1" },
    // { songName: "", singerName: "Ammy Virk", posterPath: "", link: "" },

    //Parmish Verma
    { songName: "Aam Jahe Munde", singerName: "Parmish Verma & Laddi Chahal", posterPath: "https://covers.djpunjab.pro/image/488572/Aam-Jahe-Munde-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202005/Aam_Jahe_Munde/128/Aam_Jahe_Munde_1" },
    { songName: "Gaal Ni Kadni", singerName: "Parmish Verma", posterPath: "https://a10.gaanacdn.com/gn_img/albums/ZaP37OR3Dy/aP37B9Q1KD/size_l.webp", link: "https://cdnsongs.com/music/data/Single_Track/201711/Gaal_Ni_Kadni-1/128/Gaal_Ni_Kadni_1" },
    { songName: "Patiala Flow", singerName: "Parmish Verma & Laddi Chahal", posterPath: "https://covers.djpunjab.pro/image/509444/Patiala-Flow-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202402/Y_Hate/128/Patiala_Flow" },
    { songName: "Ohi Munde", singerName: "Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/505118/Ohi-Munde-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202308/Ohi_Munde/128/Ohi_Munde_1" },
    { songName: "Sab Fade Jange", singerName: "Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/482201/Sab-Fade-Jange-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201812/Sab_Fade_Jange/128/Sab_Fade_Jange_1" },
    { songName: "Yaar Mere", singerName: "Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/509444/Yaar-Mere-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202402/Y_Hate/128/Yaar_Mere" },
    { songName: "Munde Pind De", singerName: "Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/489402/Munde-Pind-De-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202007/Munde_Pind_De/128/Munde_Pind_De_1" },
    { songName: "The Hanuman", singerName: "Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/505677/The-Hanuman-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202310/The_Hanuman/128/The_Hanuman_1" },
    { songName: "Chirri Udd Kaa Udd", singerName: "Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/480566/Chirri-Udd-Kaa-Udd-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201808/Chirri_Udd_Kaa_Udd-1/128/Chirri_Udd_Kaa_Udd_1" },
    { songName: "Check It Out", singerName: "Parmish Verma & Paradox", posterPath: "https://covers.djpunjab.pro/image/504908/Check-It-Out-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202306/Check_It_Out/128/Check_It_Out_1" },
    { songName: "Le Chak Main Aa Gya", singerName: "Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/37967/Le-Chakk-Main-Aa-Geya-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201708/Le_Chakk_Main_Aa_Geya/128/Le_Chakk_Main_Aa_Geya_1" },
    { songName: "No Reason", singerName: "Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/503829/No-Reason-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202302/No_Reason/128/No_Reason_1" },
    { songName: "Shada", singerName: "Parmish Verma", posterPath: "https://cover.djpunjab.is/42142/300x700/shada-parmish-verma.webp", link: "https://s320.djpunjab.is/data/48/42142/287163/Shada%20-%20Parmish%20Verma.mp3" },
    { songName: "No More Shada", singerName: "Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/499493/No-More-Shada-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202110/No_More_Shada-1/128/No_More_Shada_1" },
    { songName: "Lambo Flow", singerName: "Parmish Verma", posterPath: "https://cover.djpunjab.is/54274/300x700/lambo-flow-parmish-verma.webp", link: "https://s320.djpunjab.is/data/48/54274/302662/Lambo%20Flow%20-%20Parmish%20Verma" },
    { songName: "Neat", singerName: "Parmish Verma", posterPath: "https://cover.djpunjab.is/49798/300x700/neat-parmish-verma.webp", link: "https://s320.djpunjab.is/data/48/49798/297380/Neat%20-%20Parmish%20Verma" },
    { songName: "Pinda Ale Jatt", singerName: "Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/483652/Pinda-Aale-Jatt-Dil-Diyan-Gallan-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201903/Pinda_Aale_Jatt_Dil_Diyan_Gallan/128/Pinda_Aale_Jatt_Dil_Diyan_Gal_1" },
    // { songName: "",singerName: "Parmish Verma",posterPath: "",link: ""},

    //Laddi Chahal
    { songName: "Farmaish", singerName: "Laddi Chahal", posterPath: "https://covers.djpunjab.pro/image/505911/Farmaish-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202311/Farmaish/128/Farmaish_1" },
    { songName: "Rubicon Drill", singerName: "Laddi Chahal & Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/503111/Rubicon-Drill-1.jpg", link: 'https://cdnsongs.com/music/data/Punjabi/202211/Forever/128/Rubicon_Drill' },
    { songName: "Farming", singerName: "Laddi Chahal & Gurlej Akhtar", posterPath: "https://covers.djpunjab.pro/image/498582/Farming-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202108/Farming/128/Farming_1" },
    { songName: "Chori Da Pistol", singerName: "Laddi Chahal & Parmish Verma", posterPath: "https://covers.djpunjab.pro/image/499320/Chori-Da-Pistol-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202110/Chori_Da_Pistol/128/Chori_Da_Pistol_1" },
    { songName: "Leja Ve Leja", singerName: "Laddi Chahal", posterPath: "https://covers.djpunjab.pro/image/506411/Leja-Ve-Leja-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202401/Notes/128/Leja_Ve_Leja" },
    { songName: "4 Yaar", singerName: "Parmish Verma & Laddi Chahal", posterPath: "https://covers.djpunjab.pro/image/486421/4-Yaar-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201909/4_Yaar/128/4_Yaar_1" },
    { songName: "Thaa", singerName: "Laddi Chahal", posterPath: "https://covers.djpunjab.pro/image/499900/Thaa-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202111/Thaa/128/Thaa_1" },
    { songName: "Hasdi Tu Reh Sohniye", singerName: "Laddi Chahal & Permish Verma", posterPath: "https://covers.djpunjab.pro/image/484002/Hasdi-Tu-Reh-Sohniye-Dil-Diyan-Gallan-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201905/Hasdi_Tu_Reh_Sohniye_Dil_Diyan_Gallan/128/Hasdi_Tu_Reh_Sohniye_Dil_Diya_1" },
    { songName: "Na Jatta Na", singerName: "Laddi Chahal", posterPath: "https://covers.djpunjab.pro/image/500994/Na-Jatta-Na-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202202/Na_Jatta_Na/128/Na_Jatta_Na_1" },
    { songName: "Sohn Kha Ke", singerName: "Laddi Chahal", posterPath: "https://covers.djpunjab.pro/image/506411/Sohn-Kha-Ke-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202401/Notes/128/Sohn_Kha_Ke" },
    { songName: "Rattan Kaaliyan", singerName: "Laddi Chahal", posterPath: "https://cover.djpunjab.is/54903/300x700/notes-laddi-chahal.webp", link: "https://p320.djpunjab.is/data/48/54903/303591/Raatan%20Kaaliyan%20-%20Laddi%20Chahal.mp3" },
    // { songName: "",singerName: "Laddi Chahal",posterPath: "",link: ""},

    //Amrit Maan
    { songName: "Bambiha Bole", singerName: "Amrit Maan & Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/489110/Bambiha-Bole-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202006/Bambiha_Bole/128/Bambiha_Bole_1" },
    { songName: "By Birth", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/506657/By-Birth-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202401/Elite/128/By_Birth_1" },
    { songName: "Bapu", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/497496/Bapu-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202105/Bapu/128/Bapu_1" },
    { songName: "Peg Di Waashna", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/41358/Peg-Di-Waashna-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201712/Peg_Di_Waashna/128/Peg_Di_Waashna_1" },
    { songName: "Hype", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/506657/Hype-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202401/Elite/128/Hype_1" },
    { songName: "Bismillah", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/498517/Bismillah-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202108/Bismillah/128/Bismillah_1" },
    { songName: "Trending Nakhra", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/478159/Trending-Nakhra-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201803/Trending_Nakhra/128/Trending_Nakhra_1" },
    { songName: "Pink Pink Addiyaan", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/487967/Pink-Pink-Addiyaan-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202002/Pink_Pink_Addiyaan/128/Pink_Pink_Addiyaan_1" },
    { songName: "Mitha Mitha", singerName: "Amrit Maan & R Nait", posterPath: "https://covers.djpunjab.pro/image/497120/Mitha-Mitha-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202104/Mitha_Mitha-1/128/Mitha_Mitha_1" },
    { songName: "Bamb Jatt", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/35421/Bamb-Jatt-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201703/Bamb_Jatt/128/Bamb_Jatt_1" },
    { songName: "Maa", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/492065/Maa-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202101/Maa/128/Maa_1" },
    { songName: "Guerrilla War", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/39456/Guerrilla-War-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201710/Guerrilla_War/128/Guerrilla_War_1" },
    { songName: "Marji De Malak", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/481353/Marji-De-Malak-Aate-Di-Chidi-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201810/Marji_De_Malak_Aate_Di_Chidi/128/Marji_De_Malak_Aate_Di_Chidi_1" },
    { songName: "The King", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/486329/The-King-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201909/The_King/128/The_King_1" },
    { songName: "All Bamb", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/497706/All-Bamb-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202106/All_Bamb/128/All_Bamb_1" },
    { songName: "Sira E Hou", singerName: "Amrit Maan", posterPath: "https://cover.djpunjab.is/49768/300x700/sira-e-hou-amrit-maan.webp", link: "https://s320.djpunjab.is/data/48/49768/297350/Sira%20E%20Hou%20-%20Amrit%20Maan" },
    { songName: "Whenever", singerName: "Amrit Maan", posterPath: "https://cover.djpunjab.is/53956/300x700/whenever-amrit-maan.webp", link: "https://s320.djpunjab.is/data/48/53956/302252/Whenever%20-%20Amrit%20Maan" },
    { songName: "Kaali Camaro", singerName: "Amrit Maan", posterPath: "https://covers.djpunjab.pro/image/31963/Kaali-Camaro-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201605/Kaali_Camaro/128/Kaali_Camaro_1" },
    { songName: "Sunshine", singerName: "Amrit Maan", posterPath: "https://cover.djpunjab.is/54775/300x700/sunshine-amrit-maan.webp", link: "https://s320.djpunjab.is/data/48/54775/303425/Sunshine%20-%20Amrit%20Maan" },
    { songName: "Difference", singerName: "Amrit Maan", posterPath: "https://cover.djpunjab.is/42686/300x700/difference-amrit-maan.webp", link: "https://s320.djpunjab.is/data/48/42686/288015/Difference%20-%20Amrit%20Maan" },
    { songName: "Jatt Flex", singerName: "Amrit Maan", posterPath: "https://cover.djpunjab.is/51325/300x700/jatt-flex-amrit-maan.webp", link: "https://s320.djpunjab.is/data/48/51325/299171/Jatt%20Flex%20-%20Amrit%20Maan" },
    { songName: "Journey", singerName: "Amrit Maan", posterPath: "https://pagalnew.com/coverimages/JOURNEY-GLOBAL-WARNING-500-500.jpg", link: "https://pagalnew.com/download128/42903" },
    { songName: "Supreme", singerName: "Amrit Maan", posterPath: "https://mr-jat.in/siteuploads/generaltheme/thumb/files/sft11/5051/5051-2.webp", link: "https://mr-jat.in/dlod/5051?&volume=75&showstop=1&showvolume=1" },
    { songName: "Burberry", singerName: "Amrit Maan", posterPath: "https://pagalnew.com/coverimages/BURBERRY-XPENSIVE-500-500.jpg", link: "https://pagalnew.com/download128/37074" },
    // { songName: "",singerName: "Amrit Maan",posterPath: "",link: ""},

    //AP Dhillon
    { songName: "Excuses", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/489751/Excuses-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202007/Excuses/128/Excuses_1" },
    { songName: "With You", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/505163/With-You-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202308/With_You/128/With_You_1" },
    { songName: "True Stories", singerName: "AP Dhillon", posterPath: "https://cover.djpunjab.is/53918/300x700/true-stories-ap-dhillon.webp", link: "https://s320.djpunjab.is/data/48/53918/302191/True%20Stories%20-%20AP%20Dhillon.mp3" },
    { songName: "Summer High", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/502332/Summer-High-1659684687.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202208/Summer_High/128/Summer_High_1" },
    { songName: "Brown Munde", singerName: "AP Dhillon", posterPath: "https://pagalnew.com/coverimages/Brown-Munde-Ap-Dhillon-500-500.jpg", link: "https://pagalnew.com/download128/25007" },
    { songName: "Hustling", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/509706/Hustling-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202403/Hustling/128/Hustling_1" },
    { songName: "Insane", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/497111/Insane-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202104/Insane/128/Insane_1" },
    { songName: "Ma Belle", singerName: "AP Dhillon", posterPath: "https://cover.djpunjab.is/50418/300x700/ma-belle-ap-dhillon.webp", link: "https://s320.djpunjab.is/data/48/50418/298096/Ma%20Belle%20-%20AP%20Dhillon.mp3" },
    { songName: "Against All Odds", singerName: "AP Dhillon", posterPath: "https://cover.djpunjab.is/50925/300x700/against-all-odds-ap-dhillon.webp", link: "https://s320.djpunjab.is/data/48/50925/298712/Against%20All%20Odds%20-%20AP%20Dhillon.mp3" },
    { songName: "War", singerName: "AP Dhillon", posterPath: "https://cover.djpunjab.is/50927/300x700/war-ap-dhillon.webp", link: "https://s320.djpunjab.is/data/48/50927/298714/War%20-%20AP%20Dhillon.mp3" },
    { songName: "Desires", singerName: "AP Dhillon", posterPath: "https://cover.djpunjab.is/50926/300x700/desires-ap-dhillon.webp", link: "https://s320.djpunjab.is/data/48/50926/298713/Desires%20-%20AP%20Dhillon.mp3" },
    { songName: "Toxic", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/490924/Toxic-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202010/Toxic/128/Toxic_1" },
    { songName: "Arrogant", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/489745/Arrogant-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202007/Desi_Family_3/128/Arrogant_1" },
    { songName: "Final Thoughts", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/502806/Final-Thoughts-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202210/Two_Hearts_Never_Break_The_Same_EP/128/Final_Thoughts" },
    { songName: "Majhe Ale", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/499820/Majhe-Aale-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202111/Hidden_Gems_EP/128/Majhe_Aale_1" },
    { songName: "Wo Noor", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/502806/Wo-Noor-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202210/Two_Hearts_Never_Break_The_Same_EP/128/Wo_Noor" },
    { songName: "Dil Nu", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/502806/Dil-Nu-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202210/Two_Hearts_Never_Break_The_Same_EP/128/Dil_Nu" },
    { songName: "Problems Over Peace", singerName: "AP Dhillon", posterPath: "https://cover.djpunjab.is/55330/300x700/problems-over-peace-ap-dhillon.webp", link: "https://s320.djpunjab.is/data/48/55330/304265/Problems%20Over%20Peace%20-%20AP%20Dhillon.mp3" },
    { songName: "Tere Te", singerName: "AP Dhillon", posterPath: "https://c.saavncdn.com/886/Tere-Te-Punjabi-2018-20220825191054-500x500.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202111/Hidden_Gems_EP/128/Tere_Te_1" },
    { songName: "Foreigns", singerName: "AP Dhillon", posterPath: "https://covers.djpunjab.pro/image/491467/Foreigns-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202011/Foreigns/128/Foreigns_1" },
    // { songName: "",singerName: "AP Dhillon",posterPath: "",link: ""},

    //Gippy Gerewal
    { songName: "Dang", singerName: "Gippy Gerewal", posterPath: "https://covers.djpunjab.pro/image/509747/Dang-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202403/Ride_With_Me/128/Dang" },
    { songName: "Amiri", singerName: "Gippy Gerewal", posterPath: "https://covers.djpunjab.pro/image/509747/Amiri-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202403/Ride_With_Me/128/Amiri" },
    { songName: "Defender", singerName: "Gippy Gerewal", posterPath: "https://covers.djpunjab.pro/image/509747/Defender-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202403/Ride_With_Me/128/Defender" },
    { songName: "Do Bottlan", singerName: "Gippy Gerewal", posterPath: "https://covers.djpunjab.pro/image/509747/Do-Bottlan-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202403/Ride_With_Me/128/Do_Bottlan" },
    { songName: "Gedi", singerName: "Gippy Gerewal", posterPath: "https://covers.djpunjab.pro/image/509747/Gedi-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202403/Ride_With_Me/128/Gedi" },
    { songName: "Fark", singerName: "Gippy Gerewal", posterPath: "https://covers.djpunjab.pro/image/499632/Fark-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202111/Fark/128/Fark_1" },
    { songName: "Lahore", singerName: "Gippy Gerewal", posterPath: "https://cover.djpunjab.is/39173/300x700/lahore-gippy-grewal.webp", link: "https://s320.djpunjab.is/data/48/39173/282515/Lahore%20-%20Gippy%20Grewal" },
    { songName: "Nava Nava Pyar", singerName: "Gippy Gerewal", posterPath: "https://cover.djpunjab.is/52311/300x700/nava-nava-pyar-gippy-grewal.webp", link: "https://s320.djpunjab.is/data/48/52311/300305/Nava%20Nava%20Pyar%20-%20Gippy%20Grewal.mp3" },
    { songName: "Kale Jaadu", singerName: "Gippy Gerewal", posterPath: "https://cover.djpunjab.is/54002/300x700/kaale-jaadu-gippy-grewal.webp", link: "https://s320.djpunjab.is/data/48/54002/302322/Kaale%20Jaadu%20-%20Gippy%20Grewal.mp3" },
    { songName: "Kach Da Samaan", singerName: "Gippy Gerewal", posterPath: "", link: "https://cdnsongs.com/music/data/Punjabi_Movies/201403/Lucky_Di_Unlucky_Story/128/Kach_da_Samaan_4" },
    { songName: "By Name", singerName: "Gippy Gerewal", posterPath: "https://cover.djpunjab.is/50710/300x700/limited-edition-gippy-grewal.webp", link: "https://p320.djpunjab.is/data/48/50710/298474/By%20Name%20-%20Gippy%20Grewal.mp3" },
    { songName: "Mar Jawan", singerName: "Gippy Gerewal", posterPath: "", link: "https://cdnsongs.com/music/data/Punjabi_Movies/201403/_Carry_On_Jatta/128/Mar_Jawan_4" },
    { songName: "Budwaar", singerName: "Gippy Gerewal", posterPath: "https://cover.djpunjab.is/35200/300x300/faraar-gippy-grewal.webp", link: "https://p320.djpunjab.is/data/48/35200/275612/Budwaar%20-%20Gippy%20Grewal.mp3" },
    { songName: "Sooraj", singerName: "Gippy Gerewal", posterPath: "https://cover.djpunjab.is/42907/300x700/sooraj-gippy-grewal.webp", link: "https://s320.djpunjab.is/data/48/42907/288324/Sooraj%20-%20Gippy%20Grewal" },
    { songName: "90-90 Nabbe Nabbe", singerName: "Gippy Gerewal", posterPath: "https://cover.djpunjab.is/55121/300x700/90-90-nabbe-nabbe-gippy-grewal.webp", link: "https://s320.djpunjab.is/data/48/55121/303893/90-90%20Nabbe%20Nabbe%20-%20Gippy%20Grewal.mp3" },
    { songName: "Honeymoon", singerName: "Gippy Gerewal", posterPath: "https://cover.djpunjab.is/52628/300x700/honeymoon-gippy-grewal.webp", link: "https://s320.djpunjab.is/data/48/52628/300677/Honeymoon%20-%20Gippy%20Grewal.mp3" },
    { songName: "Angreji Beat", singerName: "Gippy Gerewal & Yo Yo Honey Singh", posterPath: "https://i.scdn.co/image/ab67616d0000b2736119682d5b9f8b1ba6919ed9", link: "https://cdnsongs.com/music/data/Punjabi/201506/Bring_Me_Back-1/128/Angreji_Beat" },
    // { songName: "", singerName: "Gippy Gerewal", posterPath: "", link: "" },

    //Guru Randhawa
    { songName: "Lahore", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/40892/Lahore-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201712/Lahore/128/Lahore_1" },
    { songName: "Nach Meri Rani", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/490976/Naach-Meri-Rani-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202010/Naach_Meri_Rani/128/Naach_Meri_Rani_1" },
    { songName: "High Rated Gabru", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/37439/High-Rated-Gabru-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201707/High_Rated_Gabru/128/High_Rated_Gabru_1" },
    { songName: "Ishq Tera", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/486174/Ishq-Tera-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201909/Ishq_Tera/128/Ishq_Tera_1" },
    { songName: "Suit Suit", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/40334/Suit-Suit-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201711/Hits_Of_Guru_Randhawa/128/Suit_Suit" },
    { songName: "Morni Banke", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/480993/Morni-Banke-Badhaai-Ho-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201809/Morni_Banke_Badhaai_Ho/128/Morni_Banke_Badhaai_Ho_1" },
    { songName: "Patola", singerName: "Guru Randhawa", posterPath: "https://cdnsongs.com/music/data/Punjabi/201711/Hits_Of_Guru_Randhawa/128/Patola.mp3", link: "https://cdnsongs.com/music/data/Punjabi/201711/Hits_Of_Guru_Randhawa/128/Patola" },
    { songName: "Downtown", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/481403/Downtown-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201810/Downtown/128/Downtown_1" },
    { songName: "Yaar Mod Do", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/29709/Yaar-Mod-Do-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201601/Yaar_Mod_Do/128/Yaar_Mod_Do_1" },
    { songName: "Tere Te", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/482114/Tere-Te-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201811/Tere_Te/128/Tere_Te_1" },
    { songName: "Moon Rise", singerName: "Guru Randhawa", posterPath: "https://cover.djpunjab.is/52341/300x700/man-of-the-moon-guru-radhawa.webp", link: "https://p320.djpunjab.is/data/48/52341/300342/Moon%20Rise%20-%20Guru%20Radhawa" },
    { songName: "Kaun Nachdi", singerName: "Guru Randhawa", posterPath: "https://hindi.djpunjab.app/cover/gaeoyT0OpFIpLOnbiOMbpg==/sonu-ke-titu-ki-sweety-cover-image.webp", link: "https://hindi.djpunjab.app/load/ZuNp8EiOAhFb67uTmIx99A==/Kaun%20Nachdi.mp3" },
    { songName: "Made In India", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/479488/Made-In-India-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201806/Made_In_India/128/Made_In_India_1" },
    { songName: "Fashion", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/33267/Fashion-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201609/Fashion/128/Fashion_1" },
    { songName: "Raat Kamaal Hai", singerName: "Guru Randhawa", posterPath: "https://cover.djpunjab.is/42427/300x700/ratt-kamaal-hai-guru-randhawa.webp", link: "https://s320.djpunjab.is/data/48/42427/287637/Ratt%20Kamaal%20Hai%20-%20Guru%20Randhawa.mp3" },
    { songName: "Ban Ja Rani", singerName: "Guru Randhawa", posterPath: "https://covers.djpunjab.pro/image/40334/Ban-Ja-Rani-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201711/Hits_Of_Guru_Randhawa/128/Ban_Ja_Rani" },
    // { songName: "",singerName: "Guru Randhawa",posterPath: "",link: ""},

    //Yo Yo Honey Singh
    { songName: "Love Dose", singerName: "Yo Yo Honey Singh", posterPath: "https://hindi.djpunjab.app/cover/PTMy26PQx16IRwyaMz6Rdg==/desi-kalakaar-cover-image.webp", link: "https://hindi.djpunjab.app/load/tubwEG3QDxZ04eGlIKMNOA==/Love%20Dose%20(From%20Desi%20Kalakaar).mp3" },
    { songName: "Desi Kalakaar", singerName: "Yo Yo Honey Singh", posterPath: "https://hindi.djpunjab.app/cover/PTMy26PQx16IRwyaMz6Rdg==/desi-kalakaar-cover-image.webp", link: "https://hindi.djpunjab.app/load/GKZCxe9Nl4QYYIk7B5orxw==/Desi%20Kalakaar%20(From%20Desi%20Kalakaar).mp3" },
    { songName: "Blue Eyes", singerName: "Yo Yo Honey Singh", posterPath: "https://hindi.djpunjab.app/cover/m_HlGWl-4LcqLdvft8EmnQ==/blue-eyes-cover-image.webp", link: "https://hindi.djpunjab.app/load/NgoKdOk05fFANAAwwUdsYg==/Blue%20Eyes.mp3" },
    { songName: "Chal Mere Ghar", singerName: "Yo Yo Honey Singh", posterPath: "https://hindi.djpunjab.app/cover/PTMy26PQx16IRwyaMz6Rdg==/desi-kalakaar-cover-image.webp", link: "https://hindi.djpunjab.app/load/7ZYjLWvOrh4Kx2LvZgdbAQ==/Chal%20Mere%20Ghar" },
    { songName: "Dil Chori", singerName: "Yo Yo Honey Singh", posterPath: "https://c.saavncdn.com/074/Sonu-Ke-Titu-Ki-Sweety-Hindi-2018-20180214153942-500x500.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201712/Dil_Chori/128/Dil_Chori_1" },
    { songName: "Yaar Naa Miley", singerName: "Yo Yo Honey Singh", posterPath: "", link: "https://cdnsongs.com/music/data/Punjabi/201506/Music_Cafe/128/Yaar_Naa_Miley" },
    { songName: "Brown Rang", singerName: "Yo Yo Honey Singh", posterPath: "https://i.scdn.co/image/ab67616d0000b2736119682d5b9f8b1ba6919ed9", link: "https://cdnsongs.com/music/data/Punjabi/201403/High_Heels/128/Brown_Rang_2" },
    { songName: "Beautiful", singerName: "Yo Yo Honey Singh", posterPath: "https://i.scdn.co/image/ab67616d0000b2736119682d5b9f8b1ba6919ed9", link: "https://cdnsongs.com/music/data/Punjabi/201506/Me_My_Rap/128/Beautiful" },
    { songName: "Dope Shope", singerName: "Yo Yo Honey Singh", posterPath: "https://i.scdn.co/image/ab67616d0000b2736119682d5b9f8b1ba6919ed9", link: "https://cdnsongs.com/music/data/Punjabi/201506/Me_My_Rap/128/Dope_Shope" },
    { songName: "Getup Jawani", singerName: "Yo Yo Honey Singh & Badshah", posterPath: "https://i.scdn.co/image/ab67616d0000b2736119682d5b9f8b1ba6919ed9", link: "https://cdnsongs.com/music/data/Punjabi/201506/Yo_Yo_Hits/128/Get_Up_Jawani" },
    { songName: "One Thousand Miles", singerName: "Yo Yo Honey Singh", posterPath: "https://i.scdn.co/image/ab67616d0000b2736119682d5b9f8b1ba6919ed9", link: "https://hindi.djpunjab.app/load/yeuG5U4CdZJVNUdIu4WroA==/One%20Thousand%20Miles.mp3" },
    { songName: "Lungi Dance", singerName: "Yo Yo Honey Singh", posterPath: "https://covers.djpunjab.pro/image/12716/Lungi-Dance-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201403/Hits_of_Honey_Singh/128/Lungi_Dance_11" },
    // { songName: "Kalaastar",singerName: "Yo Yo Honey Singh",posterPath: "https://pagalworld.com.vc/uploads/thumb/sft33/16297_4.jpg",link: "https://pagalworld.com.vc/files/download/id/16297.mp3"},
    // { songName: "Kuley Kuley",singerName: "Yo Yo Honey Singh",posterPath: "",link: ""},
    { songName: "Sunny Sunny", singerName: "Yo Yo Honey Singh", posterPath: "", link: "https://cdnsongs.com/mrisky/data2/Punjabi/201510/Yo_Yo_Party_Anthems/128/Sunny_Sunny" },
    // { songName: "",singerName: "Yo Yo Honey Singh",posterPath: "",link: ""},

    //Diljit Dosanjh
    { songName: "Kinni Kinni", singerName: "Diljit Dosanjh", posterPath: "https://lq.djjohal.com/covers/730657/Lalkara.jpg", link: "https://p320.djpunjab.is/data/48/54347/302742/Kinni%20Kinni%20-%20Diljit%20Dosanjh.mp3" },
    { songName: "Lemonade", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/502196/Lemonade-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202207/Drive_Thru_EP/128/Lemonade" },
    { songName: "Lalkara", singerName: "Diljit Dosanjh", posterPath: "https://lq.djjohal.com/covers/730657/Lalkara.jpg", link: "https://dl2.djring.com/sd2.djjohal.com/128/517317/Lalkara(DJJOhAL.Com).mp3" },
    { songName: "Hass Hass", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/505739/Hass-Hass-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202310/Hass_Hass/128/Hass_Hass_1" },
    { songName: "Love Ya", singerName: "Diljit Dosanjh", posterPath: "https://cover.djpunjab.is/54904/300x700/love-ya-diljit-dosanjh.webp", link: "https://s320.djpunjab.is/data/48/54904/303595/Love%20Ya%20-%20Diljit%20Dosanjh.mp3" },
    { songName: "G.O.A.T.", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/489786/G-O-A-T-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202007/G_O_A_T/128/G_O_A_T_1" },
    { songName: "Clash", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/489789/Clash-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202007/G_O_A_T/128/Clash_1" },
    { songName: "Icon", singerName: "Diljit Dosanjh", posterPath: "https://lq.djjohal.com/covers/730657/Lalkara.jpg", link: "https://p320.djpunjab.is/data/48/54347/302745/Icon%20-%20Diljit%20Dosanjh.mp3" },
    { songName: "Amiri", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/505461/Amiri-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202309/Ghost/128/Amiri" },
    { songName: "Case", singerName: "Diljit Dosanjh", posterPath: "https://lq.djjohal.com/covers/730657/Lalkara.jpg", link: "https://p320.djpunjab.is/data/48/54347/302751/Case%20-%20Diljit%20Dosanjh.mp3" },
    { songName: "Track Suit", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/489789/Track-Suit-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202007/G_O_A_T/128/Track_Suit_1" },
    { songName: "Born To Shine", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/489789/Born-To-Shine-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202007/G_O_A_T/128/Born_To_Shine_1" },
    { songName: "Do You Know", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/33292/Do-You-Know-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201609/Do_You_Know/128/Do_You_Know_1" },
    { songName: "Laembadgini", singerName: "Diljit Dosanjh", posterPath: "https://lq.djjohal.com/covers/55078/Laembadgini.jpg", link: "https://dl2.djring.com/sd2.djjohal.com/128/478322/(DJJOhAL.Com).mp3" },
    { songName: "Lak 28 Kudi Da", singerName: "Diljit Dosanjh", posterPath: "https://pagalnew.com/coverimages/Lak-28-Kudi-Da-Diljit-Dosanjh-500-500.jpg", link: "https://pagalnew.com/download128/30327" },
    { songName: "Patila Peg", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/13991/Patiala-Peg-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201411/Patiala_Peg-1/128/Patiala_Peg_1" },
    { songName: "Jatti", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/489789/Jatti-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202007/G_O_A_T/128/Jatti_1" },
    { songName: "Vanilla", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/502196/Vanilla-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202207/Drive_Thru_EP/128/Vanilla" },
    { songName: "Khutti", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/509750/Khutti-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202403/Khutti/128/Khutti_1" },
    { songName: "5 Taara", singerName: "Diljit Dosanjh", posterPath: "https://covers.djpunjab.pro/image/29008/5-Taara-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201512/5_Taara/128/5_Taara_1" },
    // { songName: "",singerName: "Diljit Dosanjh",posterPath: "",link: ""},

    //B Praak
    { songName: "Koi Aye Na", singerName: "B Praak", posterPath: "https://covers.djpunjab.pro/image/486861/Koi-Aaye-Na-Rabba-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201911/Daaka/128/Koi_Aaye_Na_Rabba" },
    { songName: "Jhaanjar", singerName: "B Praak", posterPath: "https://cover.djpunjab.is/52480/300x700/jhaanjar-b-praak.webp", link: "https://s320.djpunjab.is/data/48/52480/300507/Jhaanjar%20-%20B%20Praak.mp3" },
    { songName: "Saari Duniya Jalaa Denge", singerName: "B Praak", posterPath: "https://hindi.djpunjab.app/cover/y-5hpED_pCJK9TY5u5phyg==/animal-cover-image.webp", link: "https://hindi.djpunjab.app/load/Mme5aDIu4p8ICWNnakCQKA==/Saari%20Duniya%20Jalaa%20Denge.mp3" },
    { songName: "Ranjha", singerName: "B Praak", posterPath: "https://hindi.djpunjab.app/cover/f_CQnyA0_BvrbxF-6QNNcg==/shershaah-original-motion-picture-soundtrack--cover-image.webp", link: "https://hindi.djpunjab.app/load/74Ipk3l-C5y5ikOtqP2pRA==/Ranjha.mp3" },
    { songName: "Kya Loge Tum", singerName: "B Praak", posterPath: "https://hindi.djpunjab.app/load/74Ipk3l-C5y5ikOtqP2pRA==/Ranjha.mp3", link: "https://s320.djpunjab.is/data/48/53787/302020/Kya%20Loge%20Tum%20-%20B%20Praak.mp3" },
    { songName: "Man Bharryaa 2.0", singerName: "B Praak", posterPath: "https://hindi.djpunjab.app/cover/f_CQnyA0_BvrbxF-6QNNcg==/shershaah-original-motion-picture-soundtrack--cover-image.webp", link: "https://hindi.djpunjab.app/load/XUsm9Bzo5Cl-VDOYiVC99w==/Mann%20Bharryaa%202.0.mp3" },
    { songName: "Qismat 2", singerName: "B Praak", posterPath: "https://cover.djpunjab.is/50591/300x300/qismat-2-b-praak.webp", link: "https://pagalfree.com/musics/128-Qismat%202%20Title%20Track%20-%20B%20Praak%20128%20Kbps.mp3" },
    { songName: "Filhall", singerName: "B Praak", posterPath: "https://covers.djpunjab.pro/image/486962/Filhall-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201911/Filhall/128/Filhall_1" },
    { songName: "Baarish Ki Jaaye", singerName: "B Praak", posterPath: "https://cover.djpunjab.is/49970/300x700/baarish-ki-jaaye-b-praak.webp", link: "https://s320.djpunjab.is/data/48/49970/297565/Baarish%20Ki%20Jaaye%20-%20B%20Praak.mp3" },
    { songName: "Achha Sila Diya", singerName: "B Praak", posterPath: "https://cover.djpunjab.is/53136/300x700/achha-sila-diya-b-praak.webp", link: "https://s320.djpunjab.is/data/48/53136/301290/Achha%20Sila%20Diya%20-%20B%20Praak.mp3" },
    { songName: "Allah De Bandeya", singerName: "B Praak", posterPath: "https://covers.djpunjab.pro/image/505081/Allah-De-Bandeya-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202307/Zohrajabeen/128/Allah_De_Bandeya" },
    { songName: "Pachtaoge", singerName: "B Praak", posterPath: "https://covers.djpunjab.pro/image/486012/Pachtaoge-Jaani-Ve-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201908/Pachtaoge_Jaani_Ve/128/Pachtaoge_Jaani_Ve_1" },
    { songName: "Jannat", singerName: "B Praak", posterPath: "https://cover.djpunjab.is/47601/300x700/jannat-(sufna)-b-praak.webp", link: "https://s320.djpunjab.is/data/48/47601/294882/Jannat%20(Sufna)%20-%20B%20Praak.mp3" },
    { songName: "Rabba Ve", singerName: "B Praak", posterPath: "https://covers.djpunjab.pro/image/482827/Rabba-Ve-High-End-Yaariyaan-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201901/Rabba_Ve_High_End_Yaariyaan/128/Rabba_Ve_High_End_Yaariyaan_1" },
    { songName: "Aa Chaliye", singerName: "B Praak", posterPath: "https://cover.djpunjab.is/52540/300x700/aa-chaliye-b-praak.webp", link: "https://s320.djpunjab.is/data/48/52540/300570/Aa%20Chaliye%20-%20B%20Praak.mp3" },
    { songName: "Filhall 2", singerName: "B Praak", posterPath: "https://cover.djpunjab.is/50386/300x700/filhal-2-b-praak.webp", link: "https://s320.djpunjab.is/data/48/50386/298062/Filhal%202%20-%20B%20Praak.mp3" },
    // { songName: "",singerName: "B Praak",posterPath: "",link: ""},

    //Ranjit Bawa
    { songName: "Chote Chote Ghar", singerName: "Ranjit Bawa", posterPath: "https://covers.djpunjab.pro/image/489882/Chote-Chote-Ghar-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202008/Chote_Chote_Ghar/128/Chote_Chote_Ghar_1" },
    { songName: "Dollar Vs Roti", singerName: "Ranjit Bawa", posterPath: "https://cover.djpunjab.is/35040/300x700/dollar-vs-roti-ranjit-bawa.webp", link: "https://s320.djpunjab.is/data/48/35040/275418/DOLLAR%20Vs%20ROTI%20-%20Ranjit%20Bawa" },
    { songName: "Heavyweight Bhangra", singerName: "Ranjit Bawa", posterPath: "https://covers.djpunjab.pro/image/40767/Heavy-Weight-Bhangra-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201712/Heavy_Weight_Bhangra/128/Heavy_Weight_Bhangra_1" },
    { songName: "Chandigarh Returns", singerName: "Ranjit Bawa", posterPath: "https://covers.djpunjab.pro/image/30780/Chandigarh-Returns-3-Lakh-1.jpg", link: "https://covers.djpunjab.pro/image/30780/Chandigarh-Returns-3-Lakh-1.jpg" },
    { songName: "Truckan Wale", singerName: "Ranjit Bawa", posterPath: "https://cover.djpunjab.is/42594/300x700/ik-tare-wala-(album)-ranjit-bawa.webp", link: "https://p320.djpunjab.is/data/48/42594/287902/Truckan%20Wale%20-%20Ranjit%20Bawa.mp3" },
    { songName: "Chann Wargi", singerName: "Ranjit Bawa", posterPath: "https://cover.djpunjab.is/43124/300x700/mr-and-mrs-420-returns-ranjit-bawa.webp", link: "https://p320.djpunjab.is/data/48/43124/288580/Chann%20Wargi%20-%20Ranjit%20Bawa.mp3" },
    { songName: "Yaari Chandigarh Waliye", singerName: "Ranjit Bawa", posterPath: "https://covers.djpunjab.pro/image/14798/Yaari-Chandigarh-Waliye-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201502/Mitti_Da_Bawa/128/Yaari_Chandigarh_Waliye" },
    { songName: "Phulkari", singerName: "Ranjit Bawa", posterPath: "https://cover.djpunjab.is/40628/300x700/phulkari-ranjit-bawa.webp", link: "https://s320.djpunjab.is/data/48/40628/284941/Phulkari%20-%20Ranjit%20Bawa.mp3" },
    { songName: "Sun Sohniye", singerName: "Ranjit Bawa", posterPath: "https://cover.djpunjab.is/43518/300x700/sun-sohniye-(afsar)-ranjit-bawa.webp", link: "https://s320.djpunjab.is/data/48/43518/289120/Sun%20Sohniye%20(Afsar)%20-%20Ranjit%20Bawa.mp3" },
    { songName: "Impress", singerName: "Ranjit Bawa", posterPath: "https://cover.djpunjab.is/46900/300x700/impress-ranjit-bawa.webp", link: "https://s320.djpunjab.is/data/48/46900/293925/Impress%20-%20Ranjit%20Bawa.mp3" },
    { songName: "Do Nain", singerName: "Ranjit Bawa", posterPath: "https://cover.djpunjab.is/49168/300x700/do-nain-ranjit-bawa.webp", link: "https://s320.djpunjab.is/data/48/49168/296712/Do%20Nain%20-%20Ranjit%20Bawa.mp3" },
    { songName: "Koka", singerName: "Ranjit Bawa", posterPath: "https://cover.djpunjab.is/49981/300x700/koka-ranjit-bawa.webp", link: "https://s320.djpunjab.is/data/48/49981/297586/Koka%20-%20Ranjit%20Bawa.mp3" },
    // { songName: "",singerName: "",posterPath: "Ranjit Bawa",link: ""},

    //Jas Manak
    { songName: "Parada", singerName: "Jas Manak", posterPath: "https://c.saavncdn.com/522/Prada-Punjabi-2018-20220803074505-500x500.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201806/Prada/128/Prada_1" },
    { songName: "Girlfriend", singerName: "Jas Manak", posterPath: "https://cdn.djjaani.com/180x180/966.jpg", link: "https://cdn.djjaani.com/upload/Girlfriend-Jass_Manak-(JattZone.com)" },
    { songName: "Suit Punjabi", singerName: "Jas Manak", posterPath: "https://cover.mr-jatt.im/thumb/479480/Suit-Punjabi-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201806/Suit_Punjabi/128/Suit_Punjabi_1" },
    { songName: "Lehanga", singerName: "Jas Manak", posterPath: "https://covers.djpunjab.pro/image/485638/Lehanga-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201907/Lehanga/128/Lehanga_1" },
    { songName: "Viah", singerName: "Jas Manak", posterPath: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/itunes%20Jass%20manak.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201904/Viah-1/128/Viah_1" },
    { songName: "Chehra Tera", singerName: "Jas Manak", posterPath: "https://c.saavncdn.com/618/Age-19-Punjabi-2019-20220803203205-500x500.jpg", link: "https://cdn.djjaani.com/upload/Chehra_Tera-Jass_Manak-(JattZone.com)" },
    { songName: "No Compition", singerName: "Jas Manak & Divine", posterPath: "https://covers.djpunjab.pro/image/490078/No-Competition-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202008/No_Competition/128/No_Competition" },
    { songName: "Yes Or NO", singerName: "Jas Manak", posterPath: "https://covers.djpunjab.pro/image/489995/Yes-Or-No-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202008/Yes_Or_No/128/Yes_Or_No_1" },
    { songName: "Kali Range", singerName: "Jas Manak", posterPath: "https://pagalnew.com/coverimages/Kali-Range-Age-19-500-500.jpg", link: "https://pagalnew.com/download128/24834" },
    { songName: "Shoot Da Order", singerName: "Jas Manak & Jagpal Sandhu", posterPath: "https://covers.djpunjab.pro/image/487670/Shoot-Da-Order-Shooter-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202001/Shoot_Da_Order_Shooter/128/Shoot_Da_Order_Shooter_1" },
    { songName: "Shopping", singerName: "Jas Manak", posterPath: "https://covers.djpunjab.pro/image/487759/Shopping-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202002/Shopping/128/Shopping_1" },
    { songName: "Butterfly", singerName: "Jas Manak", posterPath: "https://pagalnew.com/coverimages/Butterfly-Jass-Manak-500-500.jpg", link: "https://pagalnew.com/download128/24793" },
    { songName: "Toronto", singerName: "Jas Manak", posterPath: "https://c.saavncdn.com/197/Toronto-Punjabi-2018-20220803030805-500x500.jpg", link: "https://cdn.djjaani.com/upload/Toronto-Jass_Manak_Ft_Priya-(JattZone.com)" },
    { songName: "Shaka Laka Boom Boom", singerName: "Jas Manak", posterPath: "https://covers.djpunjab.pro/image/498615/Shaka-Laka-Boom-Boom-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202108/Bad_Munda/128/Shaka_Laka_Boom_Boom_1" },
    { songName: "Rabb Wangu", singerName: "Jas Manak", posterPath: "https://covers.djpunjab.pro/image/485575/Rabb-Wangu-Sikander-2-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201907/Rabb_Wangu_Sikander_2/128/Rabb_Wangu_Sikander_2_1" },
    { songName: "Age 19", singerName: "Jas Manak", posterPath: "https://cdn.djjaani.com/180x180/944.jpg", link: "https://cdn.djjaani.com/upload/Age_19-Jass_Manak-(JattZone.com).mp3" },
    // { songName: "",singerName: "Jas Manak",posterPath: "",link: ""},

    //Shary Maan
    { songName: "3 Peg", singerName: "Shary Maan", posterPath: "https://covers.djpunjab.pro/image/34122/3-Peg-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201612/3_Peg-1/128/3_Peg_1" },
    { songName: "Hostel", singerName: "Shary Maan", posterPath: "https://covers.djpunjab.pro/image/36859/Hostel-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201705/Hostel/128/Hostel_1" },
    { songName: "Yaar Anmulle", singerName: "Shary Maan", posterPath: "https://a10.gaanacdn.com/gn_img/albums/4Z9bqZoKyQ/Z9bqrvz5Ky/size_l.webp", link: "https://cdnsongs.com/music/data/Punjabi/201506/Tohr_Shokeena_Di_The_Official_Elite_8_Mixtape-3/128/Yaar_Anmulle" },
    { songName: "Dua", singerName: "Shary Maan", posterPath: "https://cover.djpunjab.is/53932/300x700/the-last-good-sharry-maan.webp", link: "https://p320.djpunjab.is/data/48/53932/302211/Dua%20-%20Sharry%20Maan" },
    { songName: "Boomerang", singerName: "Shary Maan", posterPath: "https://cover.djpunjab.is/53932/300x700/the-last-good-sharry-maan.webp", link: "https://p320.djpunjab.is/data/48/53932/302208/Boomerang%20-%20Sharry%20Maan" },
    { songName: "Shakti Water", singerName: "Shary Maan", posterPath: "https://covers.djpunjab.pro/image/501189/Shakti-Water-1647377147.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202203/Shakti_Water/128/Shakti_Water_1" },
    { songName: "Yaar Beli", singerName: "Shary Maan", posterPath: "https://cover.djpunjab.is/53932/300x700/the-last-good-sharry-maan.webp", link: "https://p320.djpunjab.is/data/48/53932/302222/Yaar%20Belli%20-%20Sharry%20Maan.mp3" },
    { songName: "Yaar Jigree Kasooti Degree", singerName: "Shary Maan", posterPath: "https://covers.djpunjab.pro/image/480470/Yaar-Jigree-Kasooti-Degree-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201808/Yaar_Jigree_Kasooti_Degree/128/Yaar_Jigree_Kasooti_Degree_1" },
    // { songName: "",singerName: "Shary Maan",posterPath: "",link: ""},

    //Jassy B
    { songName: "This Party Getting Hot", singerName: "Jassy B & Yo Yo Honey Singh", posterPath: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/20221206143723611/3617053781960/1670334116852/resources/3617053781960.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201403/Top_10_Punjabi_Songs_21_3_2013/128/This_Party_Getting_Hot_1" },
    { songName: "Mitran De Boot", singerName: "Jassy B", posterPath: "https://a10.gaanacdn.com/gn_img/albums/Oxd3xzPbgV/xd3x9vwRWg/size_l.webp", link: "https://cdnsongs.com/music/data/Punjabi/201505/Smash_Hits_of_2015_Vol_1/128/Mitraan_De_Boot" },
    { songName: "All Eyez On Me", singerName: "Jassy B", posterPath: "https://cover.djpunjab.is/47858/300x700/all-eyez-on-me-jazzy-b.webp", link: "https://s320.djpunjab.is/data/48/47858/295198/All%20Eyez%20On%20Me%20-%20Jazzy%20B.mp3" },
    // { songName: "",singerName: "Jassy B",posterPath: "",link: ""},

    //Mankirat Aulakh
    { songName: "Koka", singerName: "Mankirat Aulakh", posterPath: "https://pagalnew.com/coverimages/Koka-Mankirt-Aulakh-500-500.jpg", link: "https://pagalnew.com/download128/44452" },
    { songName: "Vail", singerName: "Mankirat Aulakh", posterPath: "https://covers.djpunjab.pro/image/489322/Vail-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202006/Vail-1/128/Vail_1" },
    { songName: "Gangland", singerName: "Mankirat Aulakh", posterPath: "https://covers.djpunjab.pro/image/36687/Gangland-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201705/Gangland-2/128/Gangland_1" },
    { songName: "Dang", singerName: "Mankirat Aulakh", posterPath: "https://covers.djpunjab.pro/image/39830/Daang-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201710/Daang-1/128/Daang_1" },
    { songName: "Badnam", singerName: "Mankirat Aulakh", posterPath: "https://covers.djpunjab.pro/image/39023/Badnam-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201709/Badnam/128/Badnam_1" },
    { songName: "Putt Jattan De", singerName: "Mankirat Aulakh", posterPath: "https://cover.djpunjab.is/55067/300x700/putt-jattan-de-mankirt-aulakh.webp", link: "https://s320.djpunjab.is/data/48/55067/303830/Putt%20Jattan%20De%20-%20Mankirt%20Aulakh.mp3" },
    { songName: "Daaru Band", singerName: "Mankirat Aulakh", posterPath: "https://cover.djpunjab.is/42618/300x700/daaru-band-mankirt-aulakh.webp", link: "https://s320.djpunjab.is/data/48/42618/287929/Daaru%20Band%20-%20Mankirt%20Aulakh.mp3" },
    { songName: "Brotherhood", singerName: "Mankirat Aulakh", posterPath: "https://covers.djpunjab.pro/image/480678/Brotherhood-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201809/Brotherhood/128/Brotherhood_1" },
    { songName: "Kamli", singerName: "Mankirat Aulakh", posterPath: "https://covers.djpunjab.pro/image/481701/Kamli-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201811/Kamli/128/Kamli_1" },
    { songName: "Lucky No. 7", singerName: "Mankirat Aulakh", posterPath: "https://cover.djpunjab.is/53850/300x700/lucky-no.-7-mankirt-aulakh.webp", link: "https://s320.djpunjab.is/data/48/53850/302118/Lucky%20No.%207%20-%20Mankirt%20Aulakh.mp3" },
    { songName: "Jatt Di Clip", singerName: "Mankirat Aulakh", posterPath: "https://covers.djpunjab.pro/image/40611/Jatt-Di-Clip-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201711/Jatt_Di_Clip-1/128/Jatt_Di_Clip_1" },
    { songName: "Paapi Munda", singerName: "Mankirat Aulakh", posterPath: "https://cover.djpunjab.is/48695/300x700/paapi-munda-mankirt-aulakh.webp", link: "https://s320.djpunjab.is/data/48/48695/296169/Paapi%20Munda%20-%20Mankirt%20Aulakh.mp3" },
    { songName: "Arnold", singerName: "Mankirat Aulakh", posterPath: "https://covers.djpunjab.pro/image/485496/Arnold-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201907/Arnold/128/Arnold_1" },
    { songName: "Jatt Da Blood", singerName: "Mankirat Aulakh", posterPath: "https://covers.djpunjab.pro/image/28940/Jatt-Da-Blood-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201512/Jatt_Da_Blood/128/Jatt_Da_Blood_1" },
    // { songName: "",singerName: "Mankirat Aulakh",posterPath: "",link: ""},

    //Neha Kakkar
    { songName: "Tu Hi Yaar Mera", singerName: "Neha Kakkar", posterPath: "https://hindi.djpunjab.app/cover/aBeaOi3KYoSLjSc_haDXgA==/tu-hi-yaar-mera-from-pati-patni-aur-woh--cover-image.webp", link: "https://hindi.djpunjab.app/load/NVfvWJ6AGQurIsgkkq0BQQ==/Tu%20Hi%20Yaar%20Mera%20(From%20Pati%20Patni%20Aur%20Woh).mp3" },
    { songName: "Dilbar", singerName: "Neha Kakkar", posterPath: "https://hindi.djpunjab.app/cover/qqpeR-DRT5zZoyJag1BDrA==/party-songs-neha-kakkar-cover-image.webp", link: "https://hindi.djpunjab.app/load/DOaTG1M8Ayp0HINkSrHcnA==/Dilbar%20(From%20Satyameva%20Jayate).mp3" },
    { songName: "Kar Gayi Chull", singerName: "Neha Kakkar", posterPath: "https://hindi.djpunjab.app/cover/jtvI6KrWWe--CvYkuKW6aA==/kar-gayi-chull-cover-image.webp", link: "https://hindi.djpunjab.app/load/zPATsZ9btFLVmhcVvx-hzQ==/Kar%20Gayi%20Chull.mp3" },
    { songName: "Dil Ko Karaar Aaya", singerName: "Neha Kakkar", posterPath: "https://hindi.djpunjab.app/cover/CyB98Wvn9QG-CCPnljm0UA==/dil-ko-karaar-aaya-reprise--cover-image.webp", link: "https://hindi.djpunjab.app/load/G3g-MQ_CeZL2E2CNGoXh-w==/Dil%20Ko%20Karaar%20Aaya%20(Reprise).mp3" },
    // { songName: "Teri Aakhon Mein", singerName: "Neha Kakkar", posterPath: "https://www.pagalworld.com.cm/siteuploads/thumb/sft12/5545_4.jpg", link: "https://www.pagalworld.com.cm/files/download/id/5545.mp3" },
    { songName: "Hauli Hauli", singerName: "Neha Kakkar", posterPath: "https://covers.djpunjab.pro/image/483933/Hauli-Hauli-De-De-Pyaar-De-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201904/Hauli_Hauli_De_De_Pyaar_De/128/Hauli_Hauli_De_De_Pyaar_De_1" },
    // { songName: "The Hook Up Song", singerName: "Neha Kakkar", posterPath: "", link: "" },
    // { songName: "Aao Raja", singerName: "Neha Kakkar", posterPath: "", link: "" },
    // { songName: "",singerName: "Neha Kakkar",posterPath: "",link: ""},

    //Shubh
    { songName: "One Love", singerName: "Shubh", posterPath: "https://cover.djpunjab.is/54173/300x700/one-love-shubh.webp", link: "https://s320.djpunjab.is/data/48/54173/302543/One%20Love%20-%20Shubh.mp3" },
    { songName: "King Shit", singerName: "Shubh", posterPath: "https://cover.djpunjab.is/54902/300x700/leo-ep-shubh.webp", link: "https://p320.djpunjab.is/data/48/54902/303590/King%20Shit%20-%20Shubh.mp3" },
    { songName: "Cheques", singerName: "Shubh", posterPath: "https://cover.djpunjab.is/53792/300x700/still-rollin-shubh.webp", link: "https://p320.djpunjab.is/data/48/53792/302025/Cheques%20-%20Shubh.mp3" },
    { songName: "Still Rollin", singerName: "Shubh", posterPath: "https://cover.djpunjab.is/53792/300x700/still-rollin-shubh.webp", link: "https://p320.djpunjab.is/data/48/53792/302030/Still%20Rollin%20-%20Shubh.mp3" },
    { songName: "You And Me", singerName: "Shubh", posterPath: "https://cover.djpunjab.is/54902/300x700/leo-ep-shubh.webp", link: "https://p320.djpunjab.is/data/48/54902/303587/You%20And%20Me%20-%20Shubh.mp3" },
    { songName: "OG", singerName: "Shubh", posterPath: "https://covers.djpunjab.pro/image/504656/OG-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202305/Still_Rollin/128/OG" },
    { songName: "Dior", singerName: "Shubh", posterPath: "https://cover.djpunjab.is/53792/300x700/still-rollin-shubh.webp", link: "https://p320.djpunjab.is/data/48/53792/302026/Dior%20-%20Shubh.mp3" },
    { songName: "Baller", singerName: "Shubh", posterPath: "https://covers.djpunjab.pro/image/502549/Baller-1662699254.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202209/Baller/128/Baller_1" },
    { songName: "No Love", singerName: "Shubh", posterPath: "https://cover.djpunjab.is/51515/300x700/no-love-shubh.webp", link: "https://s320.djpunjab.is/data/48/51515/299399/No%20Love%20-%20Shubh.mp3" },
    { songName: "Elevated", singerName: "Shubh", posterPath: "https://covers.djpunjab.pro/image/500184/Elevated-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202112/Elevated/128/Elevated_1" },
    { songName: "Offshore", singerName: "Shubh", posterPath: "https://covers.djpunjab.pro/image/500183/Offshore-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202112/Offshore/128/Offshore_1" },
    { songName: "We Rollin", singerName: "Shubh", posterPath: "https://www.pagalworld.online/GpE34Kg9Gq/113515/148245-we-rollin-shubh-mp3-song-300.jpg", link: "https://pwdown.info/113515/We%20Rollin%20-%20Shubh" },
    { songName: "Bandana", singerName: "Shubh", posterPath: "https://covers.djpunjab.pro/image/509801/Bandana-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202403/Bandana/128/Bandana_1" },
    // { songName: "", singerName: "Shubh", posterPath: "", link: "" },

    //Bohemia
    { songName: "Jaguar", singerName: "Bohemia", posterPath: "https://c.saavncdn.com/196/Jaguar-Punjabi-2015-500x500.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201501/Jaguar_feat_Bohemia/128/Jaguar_feat_Bohemia_1" },
    // { songName: "Mi Amor", singerName: "Bohemia", posterPath: "https://www.pagalwrold.com/siteuploads/thumb/sft34/16984_4.jpg", link: "https://mp3fix.in/files/download/id/27516.mp3" },
    // { songName: "", singerName: "Bohemia", posterPath: "", link: "" },

    //Hardy Sandhu
    { songName: "Kya Baat Ay", singerName: "Hardy Sandhu", posterPath: "https://covers.djpunjab.pro/image/480966/Kya-Baat-Ay-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201809/Kya_Baat_Ay/128/Kya_Baat_Ay_1" },
    { songName: "Titliaan Warga", singerName: "Hardy Sandhu", posterPath: "https://covers.djpunjab.pro/image/491875/Titliaan-Warga-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202101/Titliaan_Warga/128/Titliaan_Warga_1" },
    { songName: "Naah", singerName: "Hardy Sandhu", posterPath: "https://covers.djpunjab.pro/image/40662/Naah-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201711/Naah/128/Naah_1" },
    { songName: "Backbone", singerName: "Hardy Sandhu", posterPath: "https://pagalnew.com/coverimages/Backbone-Harrdy-Sandhu-500-500.jpg", link: "https://pagalnew.com/download128/4182" },
    { songName: "Hornn Blow", singerName: "Hardy Sandhu", posterPath: "https://pagalnew.com/coverimages/Hornn-Blow-Harrdy-Sandhu-500-500.jpg", link: "https://pagalnew.com/download128/4177" },
    { songName: "Joker", singerName: "Hardy Sandhu", posterPath: "https://covers.djpunjab.pro/image/13816/Joker-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201410/Joker/128/Joker_1" },
    { songName: "Bijlee Bijlee", singerName: "Hardy Sandhu", posterPath: "https://covers.djpunjab.pro/image/499527/Bijlee-Bijlee-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202110/Bijlee_Bijlee/128/Bijlee_Bijlee_1" },
    { songName: "Psycho", singerName: "Hardy Sandhu", posterPath: "https://cover.djpunjab.is/54014/300x700/pleasures-hardy-sandhu.webp", link: "https://p320.djpunjab.is/data/48/54014/302339/Psycho%20-%20Hardy%20Sandhu.mp3" },
    // { songName: "",singerName: "Hardy Sandhu",posterPath: "",link: ""},

    //Prem Dhillon
    { songName: "Majha Block", singerName: "Prem Dhillon", posterPath: "https://covers.djpunjab.pro/image/491355/Majha-Block-Original-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202011/Majha_Block_Original-1/128/Majha_Block_Original_1" },
    { songName: "Old Skool", singerName: "Prem Dhillon & Sidhu Moose Wala", posterPath: "https://cover.djpunjab.is/47388/300x700/old-skool-ft.-sidhu-moose-wala-prem-dhillon.webp", link: "https://s320.djpunjab.is/data/48/47388/294583/Old%20Skool%20Ft.%20Sidhu%20Moose%20Wala%20-%20Prem%20Dhillon.mp3" },
    { songName: "Rubicon", singerName: "Prem Dhillon", posterPath: "https://cover.djpunjab.is/54131/300x700/rubicon-prem-dhillon.webp", link: "https://s320.djpunjab.is/data/48/54131/302488/Rubicon%20-%20Prem%20Dhillon" },
    { songName: "OG", singerName: "Prem Dhillon", posterPath: "https://cover.djpunjab.is/52290/300x700/no-lookin-back-prem-dhillon.webp", link: "https://p320.djpunjab.is/data/48/52290/300271/OG%20-%20Prem%20Dhillon.mp3" },
    { songName: "Lost Love", singerName: "Prem Dhillon", posterPath: "https://cover.djpunjab.is/49709/300x700/lost-love-prem-dhillon.webp", link: "https://s320.djpunjab.is/data/48/49709/297290/Lost%20Love%20-%20Prem%20Dhillon.mp3" },
    { songName: "Sit Down", singerName: "Prem Dhillon", posterPath: "https://cover.djpunjab.is/54483/300x700/limitless-prem-dhillon.webp", link: "https://p320.djpunjab.is/data/48/54483/302973/Sit%20Down%20-%20Prem%20Dhillon.mp3" },
    { songName: "2 Number", singerName: "Prem Dhillon", posterPath: "https://cover.djpunjab.is/54483/300x700/limitless-prem-dhillon.webp", link: "https://p320.djpunjab.is/data/48/54483/302974/2%20Number%20-%20Prem%20Dhillon.mp3" },
    { songName: "Flowers & Saints", singerName: "Prem Dhillon", posterPath: "https://cover.djpunjab.is/54932/300x700/stolen-dreams-prem-dhillon.webp", link: "https://p320.djpunjab.is/data/48/54932/303624/FLOWER%20N%20SAINTS%20-%20Prem%20Dhillon.mp3" },
    { songName: "Nah They Can't", singerName: "Prem Dhillon", posterPath: "https://covers.djpunjab.pro/image/502371/Nah-They-Can-t-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202208/No_Lookin_Back_EP/128/Nah_They_Can_t" },
    { songName: "Badberry", singerName: "Prem Dhillon", posterPath: "https://cover.djpunjab.is/54483/300x700/limitless-prem-dhillon.webp", link: "https://p320.djpunjab.is/data/48/54483/302970/Badberry%20-%20Prem%20Dhillon.mp3" },
    { songName: "Boot Cut", singerName: "Prem Dhillon", posterPath: "https://covers.djpunjab.pro/image/486390/Boot-Cut-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201909/Boot_Cut/128/Boot_Cut_1" },
    { songName: "Prahune", singerName: "Prem Dhillon & Amrit Maan", posterPath: "https://cover.djpunjab.is/49982/300x700/prahune-prem-dhillon.webp", link: "https://s320.djpunjab.is/data/48/49982/297587/Prahune%20-%20Prem%20Dhillon.mp3" },
    { songName: "Bidhichand De Dushale", singerName: "Prem Dhillon", posterPath: "https://covers.djpunjab.pro/image/509746/Bidhichand-De-Dushale-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202403/Bidhichand_De_Dushale/128/Bidhichand_De_Dushale_1" },
    // { songName: "",singerName: "Prem Dhillon",posterPath: "",link: ""},

    //Harnoor
    { songName: "Moonlight", singerName: "Harnoor", posterPath: "https://cover.djpunjab.is/49510/300x700/moonlight-harnoor.webp", link: "https://s320.djpunjab.is/data/48/49510/297073/Moonlight%20-%20Harnoor.mp3" },
    { songName: "Waalian", singerName: "Harnoor", posterPath: "https://cover.djpunjab.is/49154/300x700/waalian-harnoor.webp", link: "https://s320.djpunjab.is/data/48/49154/296698/Waalian%20-%20Harnoor.mp3" },
    { songName: "Ayee", singerName: "Harnoor & Jassa Dhillon", posterPath: "https://cover.djpunjab.is/54323/300x700/ayee-harnoor.webp", link: "https://cover.djpunjab.is/54323/300x700/ayee-harnoor.webp" },
    { songName: "Parshawan", singerName: "Harnoor", posterPath: "https://a10.gaanacdn.com/gn_img/albums/zLp36v3rGe/p36PAY1Dbr/size_l.webp", link: "https://cdn.djjaani.com/upload/Parshawan-Harnoor-(JattZone.com)" },
    { songName: "Jatta", singerName: "Harnoor", posterPath: "https://c.saavncdn.com/555/8-Chances-Punjabi-1900-20230927014444-500x500.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202112/8_Chances/128/Jatta_1" },
    { songName: "She Got Me", singerName: "Harnoor", posterPath: "https://covers.djpunjab.pro/image/500226/She-Got-Me-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202112/8_Chances/128/She_Got_Me_1" },
    { songName: "Chan Vekhya", singerName: "Harnoor", posterPath: "https://covers.djpunjab.pro/image/497258/Chan-Vekhya-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202104/Chan_Vekhya/128/Chan_Vekhya_1" },
    // { songName: "",singerName: "Harnoor",posterPath: "",link: ""},

    //Hustle
    { songName: "Chehre", singerName: "MC Square", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35141" },
    { songName: "Ram Ram", singerName: "MC Square", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://cdnsongs.com/music/data/Haryanvi/202210/Ram_Ram/128/Ram_Ram_1" },
    { songName: "Badmos Chora", singerName: "MC Square", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/33036" },
    { songName: "Adha Gyaan", singerName: "MC Square", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35127" },
    { songName: "Chore NCR Ale", singerName: "MC Square & Paradox", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/36638" },
    { songName: "Hasti Rahe Tu", singerName: "Paradox", posterPath: "https://lq.djjohal.com/covers/730053/Hasti%20Rahe%20Tu.jpg", link: "https://dl2.djring.com/sd2.djjohal.com/128/516408/(DJJOhAL.Com)" },
    { songName: "BT Ho Gayi", singerName: "Paradox", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/33033" },
    { songName: "Jaadugar", singerName: "Paradox", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35152" },
    { songName: "Cowboy", singerName: "Paradox", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35144" },
    { songName: "Aur Kon Hoga", singerName: "Manikk", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35131" },
    { songName: "PCO Wala Pyaar", singerName: "Rhyme", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35168" },
    { songName: "Mere Papa Mast", singerName: "MC Headshot", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35817" },
    { songName: "Itni Shakti", singerName: "Paradox", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35813" },
    { songName: "Naina Ki Talwar", singerName: "MC Square", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35819" },
    { songName: "Laado", singerName: "MC Square", posterPath: "https://covers.djpunjab.pro/image/505608/Laado-1.jpg", link: "https://cdnsongs.com/music/data/Haryanvi/202310/Laado/128/Laado_1" },
    { songName: "Chota Don", singerName: "Srushti Tawade", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35142" },
    { songName: "Main Nahi Toh Kaun?", singerName: "Srushti Tawade", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/36664" },
    { songName: "Bam Bam", singerName: "Paradox", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalfree.com/musics/128-Babam%20Bam%20-%20Paradox%20128%20Kbps" },
    { songName: "Ami Tomake", singerName: "MC Headshot", posterPath: "https://i.scdn.co/image/ab67616d0000b2731b706bbdda832bdc3f2264a0", link: "https://pagalnew.com/download128/35129" },
    // { songName: "", singerName: "", posterPath: "", link: "" },


    //Sidhu Moose Wala
    { songName: "Its All About You", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/477330/Its-All-About-You-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201802/Its_All_About_You/128/Its_All_About_You_1" },
    { songName: "So High", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/38175/So-High-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201708/So_High/128/So_High_1" },
    { songName: "Dhakka", singerName: "Sidhu Moose Wala", posterPath: "https://cover.djpunjab.is/47078/300x700/dhakka-(original)-sidhu-moose-wala.webp", link: "https://s320.djpunjab.is/data/48/47078/294162/Dhakka%20(Original)%20-%20Sidhu%20Moose%20Wala.mp3" },
    { songName: "Bapu", singerName: "Sidhu Moose Wala", posterPath: "https://lq.djjohal.com/covers/721030/Baapu.jpg", link: "https://dl2.djring.com/sd2.djjohal.com/128/504757/Baapu(DJJOhAL.Com)" },
    { songName: "295", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/501896/295-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202206/Moosetape_Full_Album/128/295" },
    { songName: "Aroma", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/501896/Aroma-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202206/Moosetape_Full_Album/128/Aroma" },
    { songName: "IDGAF", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/498184/IDGAF-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202107/IDGAF/128/IDGAF_1" },
    { songName: "Jatti Jeone Morh Wargi", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/486809/Jatti-Jeone-Morh-Wargi-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201910/Ardab_Mutiyaran/128/Jatti_Jeone_Morh_Wargi_1" },
    { songName: "Vaar", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/503041/Vaar-1667884686.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202211/Vaar/128/Vaar_1" },
    { songName: "Drippy", singerName: "Sidhu Moose Wala", posterPath: "https://cover.djpunjab.is/55030/300x700/drippy-sidhu-moose-wala.webp", link: "https://s320.djpunjab.is/data/48/55030/303757/Drippy%20-%20Sidhu%20Moose%20Wala" },
    { songName: "Death Route", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/481429/Gaddi-Death-Route-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201810/PBX_1/128/Gaddi_Death_Route" },
    { songName: "The Last Ride", singerName: "Sidhu Moose Wala", posterPath: "https://cover.djpunjab.is/51922/300x700/the-last-ride-sidhu-moose-wala.webp", link: "https://s320.djpunjab.is/data/48/51922/299856/The%20Last%20Ride%20-%20Sidhu%20Moose%20Wala" },
    { songName: "Never Fold", singerName: "Sidhu Moose Wala", posterPath: "https://pagalnew.com/coverimages/never-fold-no-name-500-500.jpg", link: "https://pagalnew.com/download128/26087" },
    { songName: "Chorni", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/504970/Chorni-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202307/Chorni/128/Chorni_1" },
    { songName: "Everybody Hurts", singerName: "Sidhu Moose Wala", posterPath: "https://pagalnew.com/coverimages/everybody-hurts-no-name-500-500.jpg", link: "https://pagalnew.com/download128/26085" },
    { songName: "These Days", singerName: "Sidhu Moose Wala & Bohemia", posterPath: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/810063889609/1628580650/srch_hungama_67015078.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202106/These_Days_Full/128/These_Days_Full_1" },
    { songName: "Bitch I'm Back", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/497472/Bitch-Im-Back-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202105/Bitch_Im_Back/128/Bitch_Im_Back_1" },
    { songName: "Burberry", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/497478/Burberry-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202105/Burberry/128/Burberry_1" },
    { songName: "US", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/501896/US-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202206/Moosetape_Full_Album/128/US" },
    { songName: "Moosedrilla", singerName: "Sidhu Moose Wala & Divine", posterPath: "https://covers.djpunjab.pro/image/497611/Moosedrilla-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202105/Moosedrilla/128/Moosedrilla_1" },
    { songName: "Same Beef", singerName: "Sidhu Moose Wala & Bohemia", posterPath: "https://covers.djpunjab.pro/image/485969/Same-Beef-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201908/Same_Beef/128/Same_Beef_1" },
    { songName: "GOAT", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/498283/Goat-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202107/Goat/128/Goat_1" },
    { songName: "Sidhu Son", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/501896/Sidhu-Son-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202206/Moosetape_Full_Album/128/Sidhu_Son" },
    { songName: "Signed To God", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/497801/Signed-To-God-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202106/Signed_To_God/128/Signed_To_God_1" },
    { songName: "Regret", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/497848/Regret-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202106/Regret/128/Regret_1" },
    { songName: "G-Shit", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/501896/G-Shit-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202206/Moosetape_Full_Album/128/G_Shit" },
    { songName: "Power", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/498222/Power-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202107/Power/128/Power_1" },
    { songName: "Love Sick", singerName: "Sidhu Moose Wala", posterPath: "https://pagalnew.com/coverimages/love-sick-no-name-500-500.jpg", link: "https://pagalnew.com/download128/26086" },
    { songName: "0 To 100", singerName: "Sidhu Moose Wala", posterPath: "https://djpunjab.com.se/upload_file/414/415/176/532/533/538/400x400/thumb_64e18ffa75e63.webp", link: "https://djpunjab.com.se/upload_file/414/415/176/532/533/538/0_To_100_Sidhu_Moose_Wala" },
    { songName: "Jatt Da Muqabala", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/480623/Jatt-Da-Muqabla-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201808/Jatt_Da_Mukabla/128/Jatt_Da_Muqabla_1" },
    { songName: "Dawood", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/481429/Dawood-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201810/PBX_1/128/Dawood" },
    { songName: "Selfmade", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/481429/Selfmade-Chaache-Maame-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201810/PBX_1/128/Selfmade_Chaache_Maame" },
    { songName: "Sanju", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/489640/Sanju-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202007/Sanju/128/Sanju_Original_1" },
    { songName: "Pittal", singerName: "Sidhu Moose Wala", posterPath: "https://cover.djpunjab.is/48139/300x700/snitches-get-stiches-sidhu-moose-wala.webp", link: "https://p320.djpunjab.is/data/48/48139/295513/Pittal%20-%20Sidhu%20Moose%20Wala" },
    { songName: "Devil", singerName: "Sidhu Moose Wala", posterPath: "https://cover.djpunjab.is/42883/300x700/devil-sidhu-moose-wala.webp", link: "https://s320.djpunjab.is/data/48/42883/288285/Devil%20-%20Sidhu%20Moose%20Wala.mp3" },
    { songName: "Trend", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/481429/Trend-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201810/PBX_1/128/Trend" },
    { songName: "Outlaw", singerName: "Sidhu Moose Wala", posterPath: "https://c.saavncdn.com/505/Outlaw-Punjabi-2019-20220803141405-500x500.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201901/Outlaw-1/128/Outlaw_1" },
    { songName: "Sidhu's Anthem", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/483680/Sidhu-s-Anthem-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201904/Sidhu_s_Anthem-1/128/Sidhu_s_Anthem_1" },
    { songName: "East Side Flow", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/483520/East-Side-Flow-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201903/East_Side_Flow/128/East_Side_Flow_1" },
    { songName: "Jailaan", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/498811/Jailaan-From-Moosa-Jatt-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202109/Jailaan_From_Moosa_Jatt/128/Jailaan_From_Moosa_Jatt_1" },
    { songName: "Dark Love", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/479857/Dark-Love-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201807/Dark_Love/128/Dark_Love_1" },
    { songName: "SYL", singerName: "Sidhu Moose Wala", posterPath: "https://djpunjab.com.se/upload_file/414/416/1/400x400/thumb_62b4208c69557.jpg", link: "https://raag.fm/files/mp3/128/Punjabi-Singles/23206/SYL%20-%20(Raag.Fm)" },
    { songName: "Levels", singerName: "Sidhu Moose Wala & Sunny Malton", posterPath: "https://djpunjab.com.se/upload_file/414/415/176/532/534/400x400/thumb_64e2070be756e.webp", link: "https://djpunjab.com.se/upload_file/414/415/176/532/534/Levels_Sidhu_Moose_Wala_Sunny_Malton.mp3" },
    { songName: "Fuck Em All", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/501253/Fuck-Em-All-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202203/Fuck_Em_All/128/Fuck_Em_All_1" },
    { songName: "Bad", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/491006/Bad-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202010/Bad/128/Bad_1" },
    { songName: "Satisfy", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/499773/Satisfy-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202111/Satisfy-1/128/Satisfy_1" },
    { songName: "Athra Style", singerName: "Sidhu Moose Wala", posterPath: "https://djpunjab.com.se/upload_file/414/415/176/532/533/540/400x400/thumb_64e20dc756321.webp", link: "https://pagalnew.com/download128/20277" },
    { songName: "Game", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/490230/Game-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202008/Game-1/128/Game_1" },
    { songName: "Doctor", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/489861/Doctor-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202008/Doctor/128/Doctor_1" },
    { songName: "Dollar", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/480304/Dollar-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201808/Dollar_Dakuaan_Da_Munda/128/Dollar_1" },
    { songName: "Dear Mama", singerName: "Sidhu Moose Wala", posterPath: "https://pagalnew.com/coverimages/Dear-Mama-Sidhu-Moose-Wala-500-500.jpg", link: "https://pagalnew.com/download128/14492" },
    { songName: "Legend", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/483301/Legend-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201902/Legend/128/Legend_1" },
    { songName: "Just Listen", singerName: "Sidhu Moose Wala", posterPath: "https://covers.djpunjab.pro/image/41472/Just-Listen-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201801/Just_Listen/128/Just_Listen_1" },
    { songName: "410", singerName: "Sidhu Moose Wala & Sunny Malton", posterPath: "https://covers.djpunjab.pro/image/509885/410-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202404/410/128/410_1" },
    // { songName: "",singerName: "Sidhu Moose Wala",posterPath: "",link: ""},

    //Arjan Dhillon
    { songName: "Hot Shit", singerName: "Arjan Dhillon", posterPath: "https://cover.djpunjab.is/55028/300x700/chobar-arjan-dhillon.webp", link: "https://p320.djpunjab.is/data/48/55028/303742/Hot%20Shit%20-%20Arjan%20Dhillon.mp3" },
    { songName: "Glorious", singerName: "Arjan Dhillon", posterPath: "https://covers.djpunjab.pro/image/509329/Glorious-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202402/Chobar/128/Glorious_1" },
    { songName: "25-25", singerName: "Arjan Dhillon", posterPath: "https://cover.djpunjab.is/52563/300x700/jalwa-arjan-dhillon.webp", link: "https://p320.djpunjab.is/data/48/52563/300596/25-25%20-%20Arjan%20Dhillon.mp3" },
    { songName: "Way Bigger", singerName: "Arjan Dhillon", posterPath: "https://cover.djpunjab.is/55028/300x700/chobar-arjan-dhillon.webp", link: "https://p320.djpunjab.is/data/48/55028/303743/Way%20Bigger%20-%20Arjan%20Dhillon.mp3" },
    { songName: "Ilzam", singerName: "Arjan Dhillon", posterPath: "https://covers.djpunjab.pro/image/504919/Ilzaam-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202306/Saroor/128/Ilzaam" },
    { songName: "Kala Jaadu", singerName: "Arjan Dhillon", posterPath: "https://covers.djpunjab.pro/image/490951/Kala-Jaadu-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202010/Kala_Jaadu/128/Kala_Jaadu_1" },
    { songName: "Bai Bai", singerName: "Arjan Dhillon", posterPath: "https://covers.djpunjab.pro/image/491076/Bai-Bai-Full-Song-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202010/Bai_Bai_Full_Song/128/Bai_Bai_Full_Song_1" },
    { songName: "Jawani", singerName: "Arjan Dhillon", posterPath: "https://covers.djpunjab.pro/image/501257/Jawani-1648153440.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202203/Jawani/128/Jawani_1" },
    { songName: "Daru Sasti", singerName: "Arjan Dhillon", posterPath: "https://cover.djpunjab.is/49299/300x700/daru-sasti-arjan-dhillon.webp", link: "https://s320.djpunjab.is/data/48/49299/296843/Daru%20Sasti%20-%20Arjan%20Dhillon.mp3" },
    { songName: "Jaagde Raho", singerName: "Arjan Dhillon", posterPath: "https://cover.djpunjab.is/50176/300x700/jaagde-raho-arjan-dhillon.webp", link: "https://s320.djpunjab.is/data/48/50176/297804/Jaagde%20Raho%20-%20Arjan%20Dhillon.mp3" },
    { songName: "Youth Flow", singerName: "Arjan Dhillon", posterPath: "https://cover.djpunjab.is/55028/300x700/chobar-arjan-dhillon.webp", link: "https://p320.djpunjab.is/data/48/55028/303745/Youth%20Flow%20-%20Arjan%20Dhillon" },
    { songName: "Woah", singerName: "Arjan Dhillon", posterPath: "https://cover.djpunjab.is/55028/300x700/chobar-arjan-dhillon.webp", link: "https://p320.djpunjab.is/data/48/55028/303750/Woah%20-%20Arjan%20Dhillon.mp3" },
    { songName: "Gutt", singerName: "Arjan Dhillon", posterPath: "https://covers.djpunjab.pro/image/492368/Gutt-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202102/Gutt/128/Gutt_1" },
    // { songName: "",singerName: "Arjan Dhillon",posterPath: "",link: ""},

    //Gurnam Bhullar
    { songName: "Wakh Ho jana", singerName: "Gurnam Bhullar", posterPath: "https://c.saavncdn.com/778/Main-Viyah-Nahi-Karona-Tere-Naal-Punjabi-2022-20220302002122-500x500.jpg", link: "https://cdn.djjaani.com/upload/Wakh_Ho_Jana-Gurnam_Bhullar-(JattZone.com)" },
    { songName: "Mera Yaar", singerName: "Gurnam Bhullar", posterPath: "https://cover.djpunjab.is/51643/300x700/mera-yaar-(lekh)-gurnam-bhullar.webp", link: "https://s320.djpunjab.is/data/48/51643/299547/Mera%20Yaar%20(Lekh)%20-%20Gurnam%20Bhullar.mp3" },
    { songName: "Pagal", singerName: "Gurnam Bhullar", posterPath: "https://covers.djpunjab.pro/image/486281/Pagal-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201909/Pagal/128/Pagal_1" },
    { songName: "Ikk Number", singerName: "Gurnam Bhullar", posterPath: "https://cover.djpunjab.is/54553/300x700/ikk-number-gurnam-bhullar.webp", link: "https://s320.djpunjab.is/data/48/54553/303075/Ikk%20Number%20-%20Gurnam%20Bhullar.mp3" },
    { songName: "Diamond", singerName: "Gurnam Bhullar", posterPath: "https://covers.djpunjab.pro/image/41523/Diamond-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201801/Diamond/128/Diamond_1" },
    { songName: "Tohr", singerName: "Gurnam Bhullar", posterPath: "https://cover.djpunjab.is/50732/300x700/tohr-gurnam-bhullar.webp", link: "https://s320.djpunjab.is/data/48/50732/298517/Tohr%20-%20Gurnam%20Bhullar.mp3" },
    { songName: "Guddiyan Patole", singerName: "Gurnam Bhullar", posterPath: "https://covers.djpunjab.pro/image/483220/Guddiyan-Patole-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201902/Guddiyan_Patole/128/Guddiyan_Patole_1" },
    { songName: "Pasand Bangi", singerName: "Gurnam Bhullar & Gurlez Akhtar", posterPath: "https://cover.djpunjab.is/49746/300x700/pasand-bangi-gurnam-bhullar.webp", link: "https://s320.djpunjab.is/data/48/49746/297328/Pasand%20Bangi%20-%20Gurnam%20Bhullar.mp3" },
    { songName: "Phone Maar Di", singerName: "Gurnam Bhullar", posterPath: "https://cover.djpunjab.is/42738/300x700/phone-maar-di-gurnam-bhullar.webp", link: "https://s320.djpunjab.is/data/48/42738/288084/Phone%20Maar%20Di%20-%20Gurnam%20Bhullar.mp3" },
    { songName: "Koke Vich Dil", singerName: "Gurnam Bhullar", posterPath: "https://covers.djpunjab.pro/image/504051/Koke-Vich-Dil-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202302/Koke_Vich_Dil/128/Koke_Vich_Dil_1" },
    { songName: "Jhanjran", singerName: "Gurnam Bhullar", posterPath: "https://covers.djpunjab.pro/image/487582/Jhanjran-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202001/Jhanjran/128/Jhanjran_1" },
    { songName: "Mera Haal", singerName: "Gurnam Bhullar", posterPath: "https://covers.djpunjab.pro/image/498226/Mera-Haal-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202107/Mera_Haal/128/Mera_Haal_1" },
    { songName: "Beliya", singerName: "Gurnam Bhullar", posterPath: "https://covers.djpunjab.pro/image/501280/Beliya-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202203/Lekh_EP/128/Beliya_1" },
    { songName: "Jhalle", singerName: "Gurnam Bhullar", posterPath: "https://covers.djpunjab.pro/image/486869/Jhalle-Title-Song-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201911/Jhalle_Title_Song/128/Jhalle_Title_Song_1" },
    { songName: "Qaatal Akhan", singerName: "Gurnam Bhullar", posterPath: "https://cover.djpunjab.is/48772/300x700/qaatal-akhan-gurnam-bhullar.webp", link: "https://s320.djpunjab.is/data/48/48772/296253/Qaatal%20Akhan%20-%20Gurnam%20Bhullar.mp3" },
    { songName: "Nakhro", singerName: "Gurnam Bhullar", posterPath: "https://covers.djpunjab.pro/image/509795/Nakhro-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202403/Nakhro/128/Nakhro_1" },
    // { songName: "",singerName: "Gurnam Bhullar",posterPath: "",link: ""},

    //Dilpreet Dhillon
    { songName: "Note", singerName: "Dilpreet Dhillon", posterPath: "https://covers.djpunjab.pro/image/505704/Note-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202310/Note/128/Note_1" },
    { songName: "Jatt Te Jawani", singerName: "Dilpreet Dhillon & Karan Aujla", posterPath: "https://cover.djpunjab.is/49785/300x700/jatt-te-jawani-dilpreet-dhillon.webp", link: "https://s320.djpunjab.is/data/48/49785/297367/Jatt%20Te%20Jawani%20-%20Dilpreet%20Dhillon" },
    { songName: "Sunday", singerName: "Dilpreet Dhillon", posterPath: "https://cover.djpunjab.is/54591/300x700/lets-go-dilpreet-dhillon.webp", link: "https://p320.djpunjab.is/data/48/54591/303137/Sunday%20-%20Dilpreet%20Dhillon.mp3" },
    { songName: "Kisaan Anthem", singerName: "Dilpreet Dhillon, Jordan Sandhu, Jas Bajwa & Afsana Khan", posterPath: "https://cover.djpunjab.is/49376/300x700/kisan-anthem-shree-brar.webp", link: "https://s320.djpunjab.is/data/48/49376/296925/Kisan%20Anthem%20-%20Nishawn%20Bhullar.mp3" },
    { songName: "Picka", singerName: "Dilpreet Dhillon", posterPath: "https://covers.djpunjab.pro/image/481059/Picka-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201810/Picka/128/Picka_1" },
    { songName: "Jodhpur", singerName: "Dilpreet Dhillon", posterPath: "https://cover.djpunjab.is/50329/300x300/jodhpur-dilpreet-dhillon.webp", link: "https://pagalnew.com/download128/18697" },
    { songName: "Shining Koka", singerName: "Dilpreet Dhillon", posterPath: "https://covers.djpunjab.pro/image/498462/Shining-Koka-Remix-1.jpg", link: "https://pagalnew.com/download128/18696" },
    { songName: "Shraab Wargi", singerName: "Dilpreet Dhillon & Gurlez Akhtar", posterPath: "https://covers.djpunjab.pro/image/497001/Shraab-Wargi-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202104/Shraab_Wargi-1/128/Shraab_Wargi_1" },
    { songName: "Tohar", singerName: "Dilpreet Dhillon", posterPath: "https://pagalnew.com/coverimages/Tohar-Next-Chapter-500-500.jpg", link: "https://pagalnew.com/download128/18702" },
    { songName: "Sira", singerName: "Dilpreet Dhillon", posterPath: "https://covers.djpunjab.pro/image/500222/Sira-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202112/Sira/128/Sira_1" },
    { songName: "Kabza", singerName: "Dilpreet Dhillon & Gurlez Akhtar", posterPath: "https://cover.djpunjab.is/47346/300x700/kabza-dilpreet-dhillon.webp", link: "https://s320.djpunjab.is/data/48/47346/294527/Kabza%20-%20Dilpreet%20Dhillon" },
    { songName: "Chandigarh", singerName: "Dilpreet Dhillon & Gurlez Akhtar", posterPath: "https://cover.djpunjab.is/47343/300x700/dushman-dilpreet-dhillon.webp", link: "https://p320.djpunjab.is/data/48/47343/294520/Chandigarh%20-%20Dilpreet%20Dhillon" },
    // { songName: "",singerName: "Dilpreet Dhillon",posterPath: "",link: ""},

    //kaka
    { songName: "Libaas", singerName: "Kaka", posterPath: "https://covers.djpunjab.pro/image/491512/Libaas-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202012/Libaas/128/Libaas_1" },
    { songName: "Temporary Pyar", singerName: "Kaka", posterPath: "https://cover.djpunjab.is/49435/300x700/temporary-pyar-kaka.webp", link: "https://s320.djpunjab.is/data/48/49435/296984/Temporary%20Pyar%20-%20Kaka" },
    { songName: "Mitti De Tibbe", singerName: "Kaka", posterPath: "https://cover.djpunjab.is/52228/300x700/mitti-de-tibbe-kaka.webp", link: "https://s320.djpunjab.is/data/48/52228/300175/Mitti%20De%20Tibbe%20-%20Kaka" },
    { songName: "Keh Len De", singerName: "Kaka", posterPath: "https://cover.djpunjab.is/49096/300x700/keh-len-de-kaka.webp", link: "https://s320.djpunjab.is/data/48/49096/296630/Keh%20Len%20De%20-%20Kaka" },
    { songName: "Aashiq Purana", singerName: "Kaka", posterPath: "https://covers.djpunjab.pro/image/491502/Aashiq-Purana-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202012/Aashiq_Purana/128/Aashiq_Purana_1" },
    { songName: "Teeji Seat", singerName: "Kaka", posterPath: "https://covers.djpunjab.pro/image/492197/Teeji-Seat-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202102/Teeji_Seat/128/Teeji_Seat_1" },
    { songName: "Ik Kahani", singerName: "Kaka", posterPath: "https://cover.djpunjab.is/51284/300x700/ik-kahani-kaka.webp", link: "https://s320.djpunjab.is/data/48/51284/299118/Ik%20Kahani%20-%20Kaka.mp3" },
    { songName: "Ki Likha", singerName: "Kaka", posterPath: "https://cover.djpunjab.is/52512/300x700/ki-likha-kaka.webp", link: "https://s320.djpunjab.is/data/48/52512/300542/Ki%20Likha%20-%20Kaka" },
    { songName: "Arzi", singerName: "Kaka", posterPath: "https://cover.djpunjab.is/54375/300x700/aarzi-kaka.webp", link: "https://s320.djpunjab.is/data/48/54375/302815/Aarzi%20-%20Kaka.mp3" },
    // { songName: "", singerName: "Kaka", posterPath: "", link: "" },

    //Sajjan Adeeb
    { songName: "Ishq Toh Vadh K", singerName: "Sajjan Adeeb", posterPath: "https://covers.djpunjab.pro/image/487767/Ishq-Toh-Vadh-K-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202002/Ishq_Toh_Vadh/128/Ishq_Toh_Vadh_K_1" },
    { songName: "Akh Na Lagdi", singerName: "Sajjan Adeeb", posterPath: "https://covers.djpunjab.pro/image/481841/Akh-Na-Lagdi-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201811/Akh_Na_Lagdi/128/Akh_Na_Lagdi_1" },
    { songName: "Pinda De Jaye", singerName: "Sajjan Adeeb", posterPath: "https://cover.djpunjab.is/48025/300x700/pindan-de-jaye-sajjan-adeeb.webp", link: "https://s320.djpunjab.is/data/48/48025/295389/Pindan%20De%20Jaye%20-%20Sajjan%20Adeeb.mp3" },
    { songName: "Sohni Zindgi", singerName: "Sajjan Adeeb", posterPath: "https://cover.djpunjab.is/52387/300x700/sohni-zindgi-sajjan-adeeb.webp", link: "https://s320.djpunjab.is/data/48/52387/300391/Sohni%20Zindgi%20-%20Sajjan%20Adeeb.mp3" },
    { songName: "Saukha Nayio Mileya", singerName: "Sajjan Adeeb", posterPath: "https://cover.djpunjab.is/50330/300x700/saukha-nayio-mileya-sajjan-adeeb.webp", link: "https://s320.djpunjab.is/data/48/50330/297966/Saukha%20Nayio%20Mileya%20-%20Sajjan%20Adeeb.mp3" },
    { songName: "Ishqan De Lekhe", singerName: "Sajjan Adeeb", posterPath: "https://covers.djpunjab.pro/image/34433/Ishqan-De-Lekhe-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201701/Ishqan_De_Lekhe/128/Ishqan_De_Lekhe_1" },
    { songName: "Cheta Tera", singerName: "Sajjan Adeeb", posterPath: "https://covers.djpunjab.pro/image/478080/Cheta-Tera-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201803/Cheta_Tera/128/Cheta_Tera_1" },
    // { songName: "",singerName: "Sajjan Adeeb",posterPath: "",link: ""},

    //R Nait
    { songName: "Tere Bin", singerName: "R Nait", posterPath: "https://covers.djpunjab.pro/image/509802/Tere-Bin-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202403/Tere_Bin/128/Tere_Bin_1" },
    { songName: "Big Men", singerName: "R Nait & Gurlez Akhtar", posterPath: "https://cover.djpunjab.is/51661/300x700/big-men-r-nait.webp", link: "https://s320.djpunjab.is/data/48/51661/299565/Big%20Men%20-%20R%20Nait.mp3" },
    { songName: "Big Men - Chapter 2", singerName: "R Nait", posterPath: "https://covers.djpunjab.pro/image/501702/Big-Men-Chapter-2-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202205/Big_Men_Chapter_2/128/Big_Men_Chapter_2_1" },
    { songName: "Big Men - Chapter 3", singerName: "R Nait & Gurlez Akhtar", posterPath: "https://cover.djpunjab.is/52217/300x700/big-men-(chapter-3)-r-nait.webp", link: "https://s320.djpunjab.is/data/48/52217/300164/Big%20Men%20(Chapter%203)%20-%20R%20Nait.mp3" },
    { songName: "Defaulter", singerName: "R Nait & Gurlez Akhtar", posterPath: "https://c.saavncdn.com/023/Defaulter-Punjabi-2019-20190213031405-500x500.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201902/Defaulter-1/128/Defaulter_1" },
    { songName: "Distance Age", singerName: "R Nait", posterPath: "https://cover.djpunjab.is/48600/300x700/distance-age-r-nait.webp", link: "https://s320.djpunjab.is/data/48/48600/296052/Distance%20Age%20-%20R%20Nait.mp3" },
    { songName: "Naan", singerName: "R Nait", posterPath: "https://covers.djpunjab.pro/image/486762/Naan-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201910/Naan/128/Naan_1.mp3" },
    { songName: "Homeless", singerName: "R Nait", posterPath: "https://cover.djpunjab.is/54159/300x700/homeless-(chapter-1)-r-nait.webp", link: "https://s320.djpunjab.is/data/48/54159/302521/Homeless%20(Chapter%201)%20-%20R%20Nait.mp3" },
    { songName: "Struggler", singerName: "R Nait", posterPath: "https://covers.djpunjab.pro/image/485589/Struggler-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201907/Struggler/128/Struggler_1" },
    { songName: "Reela Wala Deck", singerName: "R Nait", posterPath: "https://covers.djpunjab.pro/image/487179/Reela-Wala-Deck-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201911/Reela_Wala_Deck/128/Reela_Wala_Deck_1" },
    { songName: "Karobar", singerName: "R Nait & Gurlez Akhtar", posterPath: "https://cover.djpunjab.is/52310/300x700/karobar-r-nait.webp", link: "https://s320.djpunjab.is/data/48/52310/300304/Karobar%20-%20R%20Nait.mp3" },
    { songName: "Teri Life Meri Life", singerName: "R Nait & Kaur B", posterPath: "https://covers.djpunjab.pro/image/500221/Teri-Life-Meri-Life-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202112/Teri_Life_Meri_Life-1/128/Teri_Life_Meri_Life_1" },
    // { songName: "",singerName: "R Nait",posterPath: "",link: ""},

    //Other
    { songName: "Dheeme Dheeme", singerName: "Tonny Kakkar", posterPath: "https://hindi.djpunjab.app/cover/_mZyvBaW0NC8BaK2YB186A==/dheeme-dheeme-cover-image.webp", link: "https://hindi.djpunjab.app/load/9ogQTSovWmknsTuLJaWEyQ==/Dheeme%20Dheeme.mp3" },
    { songName: "Kikkli", singerName: "Kaptaan", posterPath: "https://covers.djpunjab.pro/image/497630/Kikli-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202105/Kikli/128/Kikli_1" },
    { songName: "Roots", singerName: "Bintu Pabra", posterPath: "https://covers.djpunjab.pro/image/502231/Roots-1.jpg", link: "https://cdnsongs.com/music/data/Haryanvi/202207/Roots/128/Roots_1" },
    { songName: "Behti Hawa Sa Tha Woh", singerName: "Shah", posterPath: "https://hindi.djpunjab.app/cover/oiJa54aPulSdU9UyCyXlMA==/shaan-golden-voice-of-india-cover-image.webp", link: "https://hindi.djpunjab.app/load/fog7ca2qzuNkZmh__beRzA==/Behti%20Hawa%20Sa%20Tha%20Woh" },
    { songName: "Na Kar Gayee", singerName: "Babal Rai", posterPath: "https://covers.djpunjab.pro/image/34743/Na-Kar-Gayee-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/201702/Jump_2_Bhangraaa/128/Na_Kar_Gayee" },
    { songName: "Dream Boy", singerName: "Babal Rai", posterPath: "https://covers.djpunjab.pro/image/37367/Dream-Boy-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201706/Dream_Boy/128/Dream_Boy_1" },
    { songName: "Daaru Badnam", singerName: "Param Singh & Kamal Kahlon", posterPath: "https://covers.djpunjab.pro/image/34236/Daru-Badnaam-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201612/Daru_Badnaam/128/Daru_Badnaam_1" },
    { songName: "12 Bande", singerName: "Varinder Brar", posterPath: "https://covers.djpunjab.pro/image/499305/12-Bande-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202110/12_Bande/128/12_Bande_1" },
    { songName: "Expert Jatt", singerName: "Mista Baaz & Nawab", posterPath: "https://covers.djpunjab.pro/image/41986/Expert-Jatt-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/201801/Expert_Jatt/128/Expert_Jatt_1" },
    // { songName: "Meri Tarha", singerName: "Akhil Redhu", posterPath: "", link: "https://paglasongs.com/files/download/id/6156" },
    { songName: "Husn", singerName: "Anuv Jain", posterPath: "https://pagalfree.com/images/128Husn%20-%20Anuv%20Jain%20128%20Kbps.jpg", link: "https://pagalfree.com/musics/128-Husn%20-%20Anuv%20Jain%20128%20Kbps" },
    // { songName: "Divya Drishti", singerName: "DeeVoy Singh", posterPath: "", link: "" },
    // { songName: "Mahahetvali", singerName: "Aditya Gadhvi", posterPath: "", link: "" },
    // { songName: "Laare Chootee", singerName: "Call", posterPath: "", link: "" },
    // { songName: "Bikra", singerName: "Abdul Hannan & Rovalio", posterPath: "", link: "" },
    { songName: "Matkar Maya Ko Ahankar(Orignal)", singerName: "Vikram Hazra", posterPath: "https://pagalnew.com/coverimages/Mat-Kar-Maya-Ko-Ahankar-Vikram-Hazra-500-500.jpg", link: "https://pagalnew.com/download128/12897" },
    // { songName: "Kahani Suno", singerName: "Kaifi Khalil", posterPath: "", link: "" },
    // { songName: "Long Time No See", singerName: "AUR & Taimour Baig", posterPath: "", link: "" },
    { songName: "Tu Hai Kahan", singerName: "AUR", posterPath: "https://pagalnew.com/coverimages/tu-hai-kahan-aur-500-500.jpg", link: "https://pagalnew.com/download128/44225" },
    // { songName: "Dooriyaan", singerName: "AUR", posterPath: "", link: "" },
    // { songName: "Shikayat", singerName: "AUR", posterPath: "", link: "" },
    // { songName: "Kahan", singerName: "AUR", posterPath: "", link: "" },
    // { songName: "Tommy",singerName: "",posterPath: "",link: ""},
    { songName: "Kamla", singerName: "Rajvir Jawanda", posterPath: "https://cover.djpunjab.is/48413/300x700/kamla-rajvir-jawanda.webp", link: "https://s320.djpunjab.is/data/48/48413/295850/Kamla%20-%20Rajvir%20Jawanda" },
    { songName: "Lettter To Sidhu", singerName: "Sunny Malton", posterPath: "https://covers.djpunjab.pro/image/502991/Letter-to-Sidhu-1667365322.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202211/Letter_to_Sidhu/128/Letter_to_Sidhu_1" },
    { songName: "Red Alert", singerName: "Rav Aulakh", posterPath: "https://covers.djpunjab.pro/image/498527/Red-Alert-1.jpg", link: "https://cdnsongs.com/music/data/Single_Track/202108/Red_Alert/128/Red_Alert_1.mp3" },
    { songName: "California Love", singerName: "Gur Sidhu & Cheema Y", posterPath: "https://covers.djpunjab.pro/image/503787/California-Love-1.jpg", link: "https://cdnsongs.com/music/data/Punjabi/202301/Anyway/128/California_Love" },
    { songName: "See My Hype", singerName: "Roop Bhullar & Wazir Patar", posterPath: "https://cover.djpunjab.is/54937/300x700/see-my-hype-roop-bhullar.webp", link: "https://s320.djpunjab.is/data/48/54937/303630/SEE%20MY%20HYPE%20-%20Roop%20Bhullar.mp3" },
    { songName: "Proud To Be Desi", singerName: "Khan Bhaini & Fateh", posterPath: "https://cover.djpunjab.is/48810/300x700/proud-to-be-desi-khan-bhaini.webp", link: "https://s320.djpunjab.is/data/48/48810/296292/Proud%20To%20Be%20Desi%20-%20Khan%20Bhaini.mp3" },
    { songName: "Off Roading", singerName: "Khan Bhaini", posterPath: "https://cover.djpunjab.is/54487/300x700/off-roading-khan-bhaini.webp", link: "https://s320.djpunjab.is/data/48/54487/302979/Off%20Roading%20-%20Khan%20Bhaini.mp3" },
    { songName: "Dekhya Kite", singerName: "Davy", posterPath: "https://cover.djpunjab.is/52541/300x700/dekhya-kite-davy.webp", link: "https://s320.djpunjab.is/data/48/52541/300571/Dekhya%20Kite%20-%20Davy.mp3" },
    // { songName: "",singerName: "",posterPath: "",link: ""},
]

//funtions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}
window.onload = shuffleArray(songs);

function hideLoader() {
    loaderContainer.style.display = 'none'
}

function showLoader() {
    loaderContainer.style.display = 'block'
}

function showContent() {
    fullWebveiw.style.display = 'block'
}

function hideContent() {
    fullWebveiw.style.display = 'none'
}

searchBar.addEventListener('focus', () => {
    searchBar.select()
})

function search() {
    toTop()
    const searchQuery = searchBar.value.toLowerCase();
    songCards.forEach(songCard => {
        const songName = songCard.querySelector(".songName").innerText.toLowerCase();
        const singerName = songCard.querySelector(".singer").innerText.toLowerCase();
        if (
            searchQuery === '' ||
            songName.indexOf(searchQuery) !== -1 ||
            singerName.indexOf(searchQuery) !== -1
        ) {
            songCard.style.display = "";
        } else {
            songCard.style.display = "none";
        }
    });
}

function showDropdown1() {
    if (arrow1.style.transform == "rotate(180deg)") {
        arrow1.style.transform = "rotate(0deg)";
        dropdown1.style.display = 'none'
    }
    else {
        arrow1.style.transform = "rotate(180deg)";
        dropdown1.style.display = 'block'
    }
}

function showDropdown2() {
    if (arrow2.style.transform == "rotate(180deg)") {
        arrow2.style.transform = "rotate(0deg)";
        dropdown2.style.display = 'none'
    }
    else {
        arrow2.style.transform = "rotate(180deg)";
        dropdown2.style.display = 'block'
    }
}

function showDropdown3() {
    if (arrow3.style.transform == "rotate(180deg)") {
        arrow3.style.transform = "rotate(0deg)";
        dropdown3.style.display = 'none'
    }
    else {
        arrow3.style.transform = "rotate(180deg)";
        dropdown3.style.display = 'block'
    }
}

function showSuggestionContainer() {
    suggestionContainer.style.display = 'flex'
    suggestionInput.value = ''
    suggestionDoneTxt.style.display = 'none'
    toTop()
    body.style.overflow = 'hidden'
}

function hideSuggestionContainer() {
    suggestionContainer.style.display = 'none'
    suggestionInput.value = ''
    suggestionDoneTxt.style.display = 'none'
    toTop()
    body.style.overflow = ''
}

function submitSuggestion() {
    let suggestion = suggestionInput.value
    suggestionDoneTxt.innerText = `Your suggestion "${suggestion}" has been sumbited successfuly`
    suggestionDoneTxt.style.display = 'block'
    suggestionInput.value = ''
}

function showFeedbackContainer() {
    feedbackContainer.style.display = 'flex'
    feedbackInput.value = ''
    feedbackDoneTxt.style.display = 'none'
    toTop()
    body.style.overflow = 'hidden'
}

function hideFeedbackContainer() {
    feedbackContainer.style.display = 'none'
    feedbackInput.value = ''
    feedbackDoneTxt.style.display = 'none'
    toTop()
    body.style.overflow = ''
}

function resetFeedback() {
    feedbackInput.value = ''
    feedbackDoneTxt.style.display = 'none'
}

function submitFeedback() {
    resetFeedback()
    feedbackDoneTxt.style.display = 'block'
    feedbackDoneTxt.innerText = 'Thanks for your valuable feedback, Your feedback has been sumbited successfully'
}

function playSong() {
    audioElement.play()
}

function pauseSong() {
    audioElement.pause()
}

function skipSong() {
    audioElement.currentTime = progressBar.value * audioElement.duration / 1000;
}

function updateProgressBar() {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 1000)
    progressBar.value = progress
}

function forwardSong() {
    audioElement.currentTime += 30
}

function backwardSong() {
    audioElement.currentTime -= 30
}

function showAndHideLoader() {
    pauseBtn.style.display = 'none';
    loader.style.display = '';
    audioElement.onloadeddata = function () {
        pauseBtn.style.display = '';
        loader.style.display = 'none';
    };
}

function updateSong(index) {
    audioElement.src = `${songs[index].link}.mp3`;
    playSong();
    songNameDisplay.innerText = `"${songs[index].songName}"`;
}

function showSongs() {
    songContainer.style.display = 'block'
    playlistsContainer.style.display = 'none'
    artistsContainer.style.display = 'none'
}

function showArtists() {
    artistsContainer.style.display = 'block'
    songContainer.style.display = 'none'
    playlistsContainer.style.display = 'none'
}

function showConfirmationContainer(msg, accept, reject) {
    confirmationContainer.style.display = 'block'
    confirmationMsg.innerText = msg
    acceptBtn.innerText = accept
    rejectBtn.innerText = reject
    body.style.overflow = 'hidden'
}

function hideConfirmationContainer() {
    confirmationContainer.style.display = 'none'
    body.style.overflow = ''
}

function showPlaylists() {
    playlistsContainer.style.display = 'block'
    artistsContainer.style.display = 'none'
    songContainer.style.display = 'none'
}

function openHomePage() {
    window.location.href = 'index.html';
}

function toBottom() {
    window.scrollTo({
        top: body.scrollHeight,
        behavior: 'smooth'
    });
}

function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function translateBottom() {
    //ifBottomIsNotTranslated
    if (!translated) {
        footer.style.marginBottom = `${bottom.offsetHeight - 60}px`
        bottom.style.transform = "translateY(60px)";
        closeBottomI.className = 'fa-regular fa-square-caret-up'
        translated = true;
        //ifMobileDevice
        if (window.innerWidth <= 550) {
            jumpToTopDiv.style.bottom = '2.8em'
        }
        //ifAnyOtherDevice
        else {
            jumpToTopDiv.style.bottom = '3.25em'
        }
    }
    //ifBottomIsTranslated
    else {
        footer.style.marginBottom = `${bottom.offsetHeight}px`
        bottom.style.transform = "translateY(0)";
        closeBottomI.className = 'fa-regular fa-square-caret-down'
        translated = false;
        //ifMobileDevice
        if (window.innerWidth <= 550) {
            jumpToTopDiv.style.bottom = '6.5em'
        }
        //ifAnyOtherDevice
        else {
            jumpToTopDiv.style.bottom = '7em'
        }
    }
}

function featureNotAvalible() {
    showConfirmationContainer('Sorry for the inconvenience but, This feature is not availble yet', 'Ok', 'Ok')
    rejectBtn.style.display = 'none'
    acceptBtn.addEventListener('click', () => {
        hideConfirmationContainer()
    })
}

function notWorking() {
    showConfirmationContainer('This feature is under maintenance', 'Ok', 'Ok')
    rejectBtn.style.display = 'none'
    acceptBtn.addEventListener('click', () => {
        hideConfirmationContainer()
    })
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function currentScreenSize() {
    let width = window.innerWidth
    let height = window.innerHeight
    bestUserExpTxt.innerText = `You can have the best user experience for this website between 1380 x 800 px. to 1200 x 700 px. screen resolution (Current screen resolution ${width} x ${height} px. )`
}
window.onload = currentScreenSize();

//eventListners
oHome.addEventListener('click', openHomePage);
// oFavourites.addEventListener('click', featureNotAvalible);
// shareBtn.addEventListener('click', featureNotAvalible);
oPlaylists.addEventListener('click', showDropdown1);
oMore.addEventListener('click', showDropdown2);
oContact.addEventListener('click', showDropdown3);

suggestSong.addEventListener('click', showSuggestionContainer);
closeSuggestionBtn.addEventListener('click', hideSuggestionContainer);
btnSubmit.addEventListener('click', submitSuggestion);
suggestionInput.addEventListener('keyup',function(event){
    if(event.keyCode == 13) {
        submitSuggestion()
    }
})

feedback.addEventListener('click', showFeedbackContainer);
closeFeedbackBtn.addEventListener('click',hideFeedbackContainer);
resetFeedbackcBtn.addEventListener('click',resetFeedback);
submitFeedbackBtn.addEventListener('click',submitFeedback);

closeBottom.addEventListener('click', translateBottom);

jumpToFooter.addEventListener('click', toBottom);
jumpToTopDiv.addEventListener('click', toTop);

progressBar.addEventListener('change', skipSong);

searchBar.addEventListener("keyup", search);

searchBar.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && isMobileDevice()) {
        searchBar.blur();
        suggestionInput.blur();
        feedbackInput.blur();
    }
});

pauseBtn.addEventListener('click', () => {
    if (pauseBtn.className == 'fa-solid fa-play') {
        playSong()
    }
    else {
        pauseSong()
    }
});

selectType.addEventListener('change', function () {
    if (this.value === 'songs') {
        showSongs()
    }
    if (this.value === 'artists') {
        // showArtists()
        featureNotAvalible()
        this.value = 'songs'
    }
    if (this.value === 'playlists') {
        // showPlaylists()
        featureNotAvalible()
        this.value = 'songs'
    }
});

audioElement.addEventListener('pause', () => {
    pauseBtn.className = 'fa-solid fa-play'
});

audioElement.addEventListener('play', () => {
    pauseBtn.className = 'fa-solid fa-pause'
    forwardBtn.addEventListener('click', forwardSong)
    backwardBtn.addEventListener('click', backwardSong)
    bottom.style.display = 'block'
    footer.style.marginBottom = `${bottom.offsetHeight}px`
    //ifMobileDevice
    if (window.innerWidth <= 550) {
        if (bottom.style.transform == "translateY(60px)") {
            jumpToTopDiv.style.bottom = '2.8em'
        }
        else {
            jumpToTopDiv.style.bottom = '6.5em'
        }
    }

    //ifAnyOtherDevice
    else {
        if (bottom.style.transform == "translateY(60px)") {
            jumpToTopDiv.style.bottom = '3.25em'
        }
        else {
            jumpToTopDiv.style.bottom = '7em'
        }
    }
});

audioElement.addEventListener('timeupdate', () => {
    updateProgressBar()

    let currentMinutes = Math.floor(audioElement.currentTime / 60)
    let currentSeconds = Math.floor(audioElement.currentTime % 60)
    let currentMinutesLen = String(currentMinutes).length
    let currentSecondsLen = String(currentSeconds).length
    let totalMinutes = Math.floor(audioElement.duration / 60)
    let totalSeconds = Math.floor(audioElement.duration % 60)
    let totalMinutesLen = String(totalMinutes).length
    let totalSecondsLen = String(totalSeconds).length

    if (currentMinutesLen == 1) {
        currentTimeDisplay.innerText = '0' + currentMinutes + ':' + currentSeconds
    }
    if (currentSecondsLen == 1) {
        currentTimeDisplay.innerText = '0' + currentMinutes + ':' + '0' + currentSeconds
    }
    if (totalMinutesLen == 1) {
        totalTimeDisplay.innerText = '0' + totalMinutes + ':' + totalSeconds
    }
    if (totalSecondsLen == 1) {
        totalTimeDisplay.innerText = '0' + totalMinutes + ':' + '0' + totalSeconds
    }
});

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 500) {
        jumpToTopDiv.style.display = 'flex';
    } else {
        jumpToTopDiv.style.display = 'none';
    }
});

document.addEventListener("keydown", function (event) {
    //forwardSongShortcut(ctrl+right)
    if (event.keyCode === 39 && document.activeElement !== searchBar) {
        if (!audioElement.paused) {
            event.preventDefault();
            forwardSong()
        }
    }

    //backwardSongShortcut(ctrl+left)
    if (event.keyCode === 37 && document.activeElement !== searchBar) {
        if (!audioElement.paused) {
            event.preventDefault();
            backwardSong()
        }
    }

    //pauseSongShortcut(spaceBar)
    if (event.key === " " && document.activeElement !== searchBar && document.activeElement !== suggestionInput && document.activeElement !== feedbackInput) {
        event.preventDefault();
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }
    //closeKeyboardOnMoblie
    if (event.keyCode == 13) {
        if (document.activeElement == searchBar) {
            search()
        }
    }
    //redirectToSearchBar
    if (event.key == '/') {
        if (document.activeElement !== searchBar) {
            event.preventDefault();
            searchBar.focus();
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    images.forEach(function (image) {
        image.addEventListener('dragstart', function (event) {
            event.preventDefault();
        });
    });
});

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

//forEach
songs.forEach((song) => {
    //creatingSongCardDynamically-----[div.songCards]
    let songCardsDy = document.createElement("div");
    songCardsDy.classList.add("songCards");

    //creatingSongPosterDynamically-----[img.songPoster]
    let songPosterDy = document.createElement('img');
    songPosterDy.classList.add("songPoster");
    songPosterDy.src = song.posterPath;
    songPosterDy.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
    songPosterDy.onerror = function () {
        songPosterDy.src = 'default.png';
    };

    //creatingSongInfoTextDynamically-----[div.songInfoText]
    let songInfoTextDy = document.createElement("div");
    songInfoTextDy.classList.add("songInfoText");

    //creatingSongNameDynamically-----[p.songName]
    let songNameDy = document.createElement('p');
    songNameDy.classList.add("songName");
    songNameDy.innerText = song.songName;
    if (songNameDy.innerText == '') {
        songNameDy.innerText = 'NaN';
    }
    if (window.innerWidth <= 550) {
        if (song.songName.length >= 12) {
            songNameDy.style.fontSize = "2em";
        }
        if (song.songName.length >= 15) {
            songNameDy.style.fontSize = "1.6em";
        }
        if (song.songName.length >= 18) {
            songNameDy.style.fontSize = "1.6em";
        }
        if (song.songName.length >= 20) {
            songNameDy.style.fontSize = "1.3em";
        }
        if (song.songName.length >= 25) {
            songNameDy.style.fontSize = "1em";
        }
    }

    //creatingAllOtherInfoDynamically-----[div.allOtherInfo]
    let allOtherInfoDy = document.createElement("div");
    allOtherInfoDy.classList.add("allOtherInfo");

    //creatingSingerNameDynamically-----[p.singerName]
    let singerNameDy = document.createElement('p');
    singerNameDy.classList.add("singer");
    singerNameDy.innerHTML = `<i class="fa-solid fa-user"></i> ${song.singerName}`;
    if (window.innerWidth <= 550) {
        if (song.singerName.length >= 28) {
            singerNameDy.style.fontSize = ".8em";
        }
        if (song.singerName.length >= 32) {
            singerNameDy.style.fontSize = ".8em";
        }
        if (song.singerName.length >= 35) {
            singerNameDy.style.fontSize = ".6em";
        }
    }

    //implementingAllChanges
    songContainer.appendChild(songCardsDy);
    songCardsDy.appendChild(songPosterDy);
    songCardsDy.appendChild(songInfoTextDy);
    songInfoTextDy.appendChild(songNameDy);
    songInfoTextDy.appendChild(allOtherInfoDy);
    allOtherInfoDy.appendChild(singerNameDy);

});

const songCards = Array.from(document.getElementsByClassName("songCards"));
const songNames = Array.from(document.querySelectorAll(".songName"));
let totalIndex = songCards.length - 1;
songCards.forEach(function (card, i) {
    card.addEventListener('click', function () {
        index = i;
        songNameDisplay.innerText = `"${songs[i].songName}"`;
        audioElement.src = `${songs[i].link}.mp3`;
        pauseBtn.className = "fa-solid fa-pause";
        showAndHideLoader()
        playSong();
        songCards.forEach((songCard)=>{
            songCard.style.backgroundColor = 'black'
        })
        songCards[i].style.backgroundColor = '#2970ff'

        //previousSong
        previousBtn.addEventListener('click', () => {
            showAndHideLoader()
            if (index === 0) {
                index = totalIndex;
            } else {
                index--;
            }
            updateSong(index);
            songCards.forEach((songCard)=>{
                songCard.style.backgroundColor = 'black'
            })
            songCards[index].style.backgroundColor = '#2970ff'
        });
        //nextSong
        nextBtn.addEventListener('click', () => {
            showAndHideLoader()
            if (index === totalIndex) {
                index = 0;
            } else {
                index++;
            }
            updateSong(index);
            songCards.forEach((songCard)=>{
                songCard.style.backgroundColor = 'black'
            })
            songCards[index].style.backgroundColor = '#2970ff'
        });
        //nextSongOnFinish
        audioElement.addEventListener("timeupdate", () => {
            if (audioElement.currentTime === audioElement.duration) {
                showAndHideLoader()
                if (index === totalIndex) {
                    index = 0;
                } else {
                    index++;
                }
                updateSong(index)
            }
            songCards.forEach((songCard)=>{
                songCard.style.backgroundColor = 'black'
            })
            songCards[index].style.backgroundColor = '#2970ff'
        });

        //nextSongShortcut(ctrl+right)
        document.addEventListener("keydown", function (event) {
            if (event.ctrlKey && event.keyCode === 39) {
                if (document.activeElement !== searchBar) {
                    showAndHideLoader()
                    if (index === totalIndex) {
                        index = 0;
                    } else {
                        index++;
                    }
                    updateSong(index);
                }
            }
            songCards.forEach((songCard)=>{
                songCard.style.backgroundColor = 'black'
            })
            songCards[index].style.backgroundColor = '#2970ff'
        });
        //previousSongShortcut(ctrl+left)
        document.addEventListener("keydown", function (event) {
            if (event.ctrlKey && event.keyCode === 37) {
                if (document.activeElement !== searchBar) {
                    showAndHideLoader()
                    if (index === 0) {
                        index = totalIndex;
                    } else {
                        index--;
                    }
                    updateSong(index);
                }
            }
            songCards.forEach((songCard)=>{
                songCard.style.backgroundColor = 'black'
            })
            songCards[index].style.backgroundColor = '#2970ff'
        });
    });
});

playlistIndex.forEach(function (list) {
    list.addEventListener('click', featureNotAvalible)
});

dropdownOptions.forEach(function (dropdownOption) {
    dropdownOption.addEventListener('click', () => {
        dropdown1.style.display = 'none'
        dropdown2.style.display = 'none'
        dropdown3.style.display = 'none'
        arrow1.style.transform = 'rotate(0deg)'
        arrow2.style.transform = 'rotate(0deg)'
        arrow3.style.transform = 'rotate(0deg)'
    })
});