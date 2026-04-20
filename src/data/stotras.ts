export interface Verse {
  id: number;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  verseLabel?: string;
}

export interface Stotra {
  id: string;
  title: string;
  subtitle: string;
  deity: string;
  description: string;
  benefits: string[];
  estimatedMinutes: number;
  icon: string;
  verses: Verse[];
}

const hanumanChalisa: Stotra = {
  id: 'hanuman-chalisa',
  title: 'Hanuman Chalisa',
  subtitle: 'हनुमान चालीसा',
  deity: 'Hanuman',
  description: 'The forty verses in praise of Lord Hanuman, composed by Tulsidas.',
  benefits: [
    'Bestows physical strength, courage, and mental fortitude',
    'Dispels fear, negativity, and malevolent influences',
    'Invokes Hanuman\'s protection in times of trouble',
  ],
  estimatedMinutes: 15,
  icon: 'M16 4 L16 14 M13 8 L19 8 M12 28 L16 18 L20 28 Z M8 28 L24 28',
  verses: [
    {
      id: 1,
      verseLabel: 'Doha 1',
      sanskrit: 'श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।\nबरनउँ रघुबर बिमल जसु, जो दायकु फल चारि॥',
      transliteration: 'Shri Guru Charan Saroj Raj, Nij Manu Mukuru Sudhari.\nBaranau Raghubar Bimal Jasu, Jo Dayaku Phal Chari.',
      meaning: 'Cleansing the mirror of my mind with the dust of the Guru\'s lotus feet, I describe the pure glory of Raghuvara (Lord Rama), who bestows the four fruits of life.',
    },
    {
      id: 2,
      verseLabel: 'Doha 2',
      sanskrit: 'बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।\nबल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥',
      transliteration: 'Buddhiheen Tanu Jaanike, Sumirau Pavan Kumar.\nBal Buddhi Vidya Dehu Mohi, Harahu Kalesh Bikaar.',
      meaning: 'Knowing my body to be devoid of intelligence, I remember Hanuman, the son of the Wind. Grant me strength, wisdom, and knowledge, and remove my afflictions and blemishes.',
    },
    {
      id: 3,
      verseLabel: 'Chaupai 1',
      sanskrit: 'जय हनुमान ज्ञान गुन सागर।\nजय कपीस तिहुँ लोक उजागर॥',
      transliteration: 'Jai Hanuman Gyan Gun Sagar.\nJai Kapees Tihun Lok Ujagar.',
      meaning: 'Victory to Hanuman, ocean of wisdom and virtue. Victory to the Lord of monkeys, illuminator of the three worlds.',
    },
    {
      id: 4,
      verseLabel: 'Chaupai 2',
      sanskrit: 'राम दूत अतुलित बल धामा।\nअंजनि पुत्र पवनसुत नामा॥',
      transliteration: 'Ram Doot Atulit Bal Dhama.\nAnjani Putra Pavansut Nama.',
      meaning: 'Messenger of Rama, repository of immeasurable strength. Known as the son of Anjani and the son of the Wind.',
    },
    {
      id: 5,
      verseLabel: 'Chaupai 3',
      sanskrit: 'महावीर विक्रम बजरंगी।\nकुमति निवार सुमति के संगी॥',
      transliteration: 'Mahaveer Vikram Bajrangi.\nKumati Nivaar Sumati Ke Sangi.',
      meaning: 'O great hero of tremendous valour with a body hard as a thunderbolt, you dispel evil thoughts and are the companion of good wisdom.',
    },
    {
      id: 6,
      verseLabel: 'Chaupai 4',
      sanskrit: 'कंचन बरन बिराज सुबेसा।\nकानन कुंडल कुंचित केसा॥',
      transliteration: 'Kanchan Baran Biraaj Subesa.\nKanan Kundal Kunchit Kesa.',
      meaning: 'Golden-complexioned and splendidly adorned, you wear earrings and have curly hair.',
    },
    {
      id: 7,
      verseLabel: 'Chaupai 5',
      sanskrit: 'हाथ बज्र औ ध्वजा बिराजै।\nकाँधे मूँज जनेऊ साजै॥',
      transliteration: 'Hath Bajra Aur Dhvaja Birajai.\nKandhe Moonj Janeu Sajai.',
      meaning: 'In your hands shine the thunderbolt and the flag, and on your shoulder is the sacred thread of munja grass.',
    },
    {
      id: 8,
      verseLabel: 'Chaupai 6',
      sanskrit: 'शंकर सुवन केसरीनंदन।\nतेज प्रताप महा जग वंदन॥',
      transliteration: 'Shankar Suvan Kesari Nandan.\nTej Pratap Maha Jag Vandan.',
      meaning: 'Incarnation of Shiva and son of Kesari, your radiance and might are revered throughout the world.',
    },
    {
      id: 9,
      verseLabel: 'Chaupai 7',
      sanskrit: 'विद्यावान गुनी अति चातुर।\nराम काज करिबे को आतुर॥',
      transliteration: 'Vidyavaan Guni Ati Chatur.\nRam Kaj Karibe Ko Aatur.',
      meaning: 'You are learned, virtuous, and supremely clever, always eager to carry out the tasks of Lord Rama.',
    },
    {
      id: 10,
      verseLabel: 'Chaupai 8',
      sanskrit: 'प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया॥',
      transliteration: 'Prabhu Charitra Sunibe Ko Rasiya.\nRam Lakhan Sita Man Basiya.',
      meaning: 'You delight in hearing the tales of the Lord. Rama, Lakshmana, and Sita dwell in your heart.',
    },
    {
      id: 11,
      verseLabel: 'Chaupai 9',
      sanskrit: 'सूक्ष्म रूप धरि सियहिं दिखावा।\nविकट रूप धरि लंक जरावा॥',
      transliteration: 'Sukshma Roop Dhari Siyahin Dikhava.\nVikat Roop Dhari Lanka Jarava.',
      meaning: 'Assuming a tiny form, you appeared before Sita. Assuming a fearsome form, you burned Lanka.',
    },
    {
      id: 12,
      verseLabel: 'Chaupai 10',
      sanskrit: 'भीम रूप धरि असुर संहारे।\nरामचंद्र के काज सँवारे॥',
      transliteration: 'Bheem Roop Dhari Asur Samhare.\nRamachandra Ke Kaj Sanvare.',
      meaning: 'Taking a mighty form, you destroyed the demons and accomplished the mission of Lord Rama.',
    },
    {
      id: 13,
      verseLabel: 'Chaupai 11',
      sanskrit: 'लाय सजीवन लखन जियाये।\nश्रीरघुवीर हरषि उर लाये॥',
      transliteration: 'Laay Sajivan Lakhan Jiyaye.\nShri Raghuveer Harashi Ur Laaye.',
      meaning: 'Bringing the Sanjeevani herb, you revived Lakshmana. Shri Rama embraced you with great joy.',
    },
    {
      id: 14,
      verseLabel: 'Chaupai 12',
      sanskrit: 'रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥',
      transliteration: 'Raghupati Keenhi Bahut Badai.\nTum Mama Priya Bharatahi Sam Bhai.',
      meaning: 'Raghupati (Rama) praised you greatly, saying: You are as dear to me as my brother Bharata.',
    },
    {
      id: 15,
      verseLabel: 'Chaupai 13',
      sanskrit: 'सहस बदन तुम्हरो जस गावैं।\nअस कहि श्रीपति कंठ लगावैं॥',
      transliteration: 'Sahas Badan Tumharo Jas Gaavein.\nAs Kahi Shripati Kanth Lagaavein.',
      meaning: 'The thousand-headed Shesha sings your glory. Saying this, Shri Rama embraced you.',
    },
    {
      id: 16,
      verseLabel: 'Chaupai 14',
      sanskrit: 'सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥',
      transliteration: 'Sanakadik Brahmadi Muneesa.\nNarad Sarad Sahit Aheesa.',
      meaning: 'Sanaka and the other sages, Brahma and the great munis, Narada, Saraswati, and the king of serpents — all sing your praise.',
    },
    {
      id: 17,
      verseLabel: 'Chaupai 15',
      sanskrit: 'जम कुबेर दिगपाल जहाँ ते।\nकबि कोबिद कहि सके कहाँ ते॥',
      transliteration: 'Jam Kuber Digpal Jahan Te.\nKabi Kobid Kahi Sake Kahan Te.',
      meaning: 'Yama, Kubera, and the guardians of the directions — even poets and scholars cannot fully describe your glory.',
    },
    {
      id: 18,
      verseLabel: 'Chaupai 16',
      sanskrit: 'तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राजपद दीन्हा॥',
      transliteration: 'Tum Upkaar Sugreevahin Keenha.\nRam Milay Rajpad Deenha.',
      meaning: 'You did a great favour to Sugriva by introducing him to Rama and restoring his kingship.',
    },
    {
      id: 19,
      verseLabel: 'Chaupai 17',
      sanskrit: 'तुम्हरो मंत्र विभीषन माना।\nलंकेश्वर भए सब जग जाना॥',
      transliteration: 'Tumharo Mantra Vibheeshan Maana.\nLankeshwar Bhaye Sab Jag Jaana.',
      meaning: 'Vibhishana heeded your counsel and became the Lord of Lanka, as the whole world knows.',
    },
    {
      id: 20,
      verseLabel: 'Chaupai 18',
      sanskrit: 'जुग सहस्र जोजन पर भानू।\nलील्यो ताहि मधुर फल जानू॥',
      transliteration: 'Yug Sahasra Yojan Par Bhanu.\nLeelyo Taahi Madhur Phal Jaanu.',
      meaning: 'The sun, which is thousands of yojanas away, you swallowed thinking it to be a sweet fruit.',
    },
    {
      id: 21,
      verseLabel: 'Chaupai 19',
      sanskrit: 'प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लाँघि गये अचरज नाहीं॥',
      transliteration: 'Prabhu Mudrika Meli Mukh Maahi.\nJaladhi Langhi Gaye Acharaj Naahi.',
      meaning: 'Carrying the Lord\'s ring in your mouth, you leapt across the ocean — no wonder at all.',
    },
    {
      id: 22,
      verseLabel: 'Chaupai 20',
      sanskrit: 'दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हरे तेते॥',
      transliteration: 'Durgam Kaj Jagat Ke Jete.\nSugam Anugrah Tumhare Tete.',
      meaning: 'All the difficult tasks in the world become easy by your grace.',
    },
    {
      id: 23,
      verseLabel: 'Chaupai 21',
      sanskrit: 'राम दुआरे तुम रखवारे।\nहोत न आज्ञा बिनु पैसारे॥',
      transliteration: 'Ram Duaare Tum Rakhvare.\nHot Na Aagya Binu Paisare.',
      meaning: 'You are the guardian at the door of Rama. No one may enter without your permission.',
    },
    {
      id: 24,
      verseLabel: 'Chaupai 22',
      sanskrit: 'सब सुख लहै तुम्हारी सरना।\nतुम रक्षक काहू को डरना॥',
      transliteration: 'Sab Sukh Lahai Tumhari Sarna.\nTum Rakshak Kaahu Ko Darna.',
      meaning: 'All happiness is found in your refuge. With you as protector, there is nothing to fear.',
    },
    {
      id: 25,
      verseLabel: 'Chaupai 23',
      sanskrit: 'आपन तेज सम्हारो आपै।\nतीनों लोक हाँक तें काँपै॥',
      transliteration: 'Aapan Tej Samharo Aapai.\nTeenon Lok Hank Te Kanpai.',
      meaning: 'Only you can control your own splendour. All three worlds tremble at your roar.',
    },
    {
      id: 26,
      verseLabel: 'Chaupai 24',
      sanskrit: 'भूत पिशाच निकट नहिं आवै।\nमहावीर जब नाम सुनावै॥',
      transliteration: 'Bhoot Pishach Nikat Nahi Aavai.\nMahaveer Jab Naam Sunavai.',
      meaning: 'Ghosts and evil spirits dare not come near when one utters the name of Mahaveer (Hanuman).',
    },
    {
      id: 27,
      verseLabel: 'Chaupai 25',
      sanskrit: 'नासै रोग हरै सब पीरा।\nजपत निरंतर हनुमत बीरा॥',
      transliteration: 'Naasai Rog Harai Sab Peera.\nJapat Nirantar Hanumat Beera.',
      meaning: 'Diseases are destroyed and all pain is removed by constantly chanting the name of brave Hanuman.',
    },
    {
      id: 28,
      verseLabel: 'Chaupai 26',
      sanskrit: 'संकट तें हनुमान छुड़ावै।\nमन क्रम बचन ध्यान जो लावै॥',
      transliteration: 'Sankat Te Hanuman Chhudaavai.\nMan Kram Bachan Dhyan Jo Laavai.',
      meaning: 'Hanuman rescues from calamity those who meditate on him in thought, deed, and word.',
    },
    {
      id: 29,
      verseLabel: 'Chaupai 27',
      sanskrit: 'सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा॥',
      transliteration: 'Sab Par Ram Tapasvi Raja.\nTin Ke Kaj Sakal Tum Saaja.',
      meaning: 'Rama is the supreme ascetic king over all. You carry out all his tasks.',
    },
    {
      id: 30,
      verseLabel: 'Chaupai 28',
      sanskrit: 'और मनोरथ जो कोई लावै।\nसोइ अमित जीवन फल पावै॥',
      transliteration: 'Aur Manorath Jo Koi Laavai.\nSoi Amit Jeevan Phal Paavai.',
      meaning: 'Whoever comes to you with any desire obtains the abundant fruit of life.',
    },
    {
      id: 31,
      verseLabel: 'Chaupai 29',
      sanskrit: 'चारों जुग परताप तुम्हारा।\nहै परसिद्ध जगत उजियारा॥',
      transliteration: 'Charon Jug Partap Tumhara.\nHai Parsiddh Jagat Ujiyara.',
      meaning: 'Your glory pervades all four ages. Your fame illuminates the entire world.',
    },
    {
      id: 32,
      verseLabel: 'Chaupai 30',
      sanskrit: 'साधु संत के तुम रखवारे।\nअसुर निकंदन राम दुलारे॥',
      transliteration: 'Sadhu Sant Ke Tum Rakhvare.\nAsur Nikandan Ram Dulare.',
      meaning: 'You are the protector of saints and sages, the destroyer of demons, and the beloved of Rama.',
    },
    {
      id: 33,
      verseLabel: 'Chaupai 31',
      sanskrit: 'अष्ट सिद्धि नौ निधि के दाता।\nअस बर दीन जानकी माता॥',
      transliteration: 'Ashta Siddhi Nau Nidhi Ke Daata.\nAs Bar Deen Janaki Mata.',
      meaning: 'You can grant the eight siddhis and the nine nidhis. Mother Janaki (Sita) has given you this boon.',
    },
    {
      id: 34,
      verseLabel: 'Chaupai 32',
      sanskrit: 'राम रसायन तुम्हरे पासा।\nसदा रहो रघुपति के दासा॥',
      transliteration: 'Ram Rasayan Tumhare Paasa.\nSada Raho Raghupati Ke Daasa.',
      meaning: 'You hold the elixir of devotion to Rama. You remain forever the servant of Raghupati.',
    },
    {
      id: 35,
      verseLabel: 'Chaupai 33',
      sanskrit: 'तुम्हरे भजन राम को पावै।\nजनम जनम के दुख बिसरावै॥',
      transliteration: 'Tumhare Bhajan Ram Ko Paavai.\nJanam Janam Ke Dukh Bisraavai.',
      meaning: 'Through devotion to you, one attains Rama and forgets the sorrows of many lifetimes.',
    },
    {
      id: 36,
      verseLabel: 'Chaupai 34',
      sanskrit: 'अंतकाल रघुबर पुर जाई।\nजहाँ जन्म हरिभक्त कहाई॥',
      transliteration: 'Antakaal Raghubar Pur Jaai.\nJahan Janm Haribhakt Kahaai.',
      meaning: 'At the time of death, one goes to the abode of Rama, and if born again, is known as a devotee of Hari.',
    },
    {
      id: 37,
      verseLabel: 'Chaupai 35',
      sanskrit: 'और देवता चित्त न धरई।\nहनुमत सेइ सर्ब सुख करई॥',
      transliteration: 'Aur Devata Chitt Na Dharai.\nHanumat Sei Sarba Sukh Karai.',
      meaning: 'One need not think of any other deity. Serving Hanuman alone brings all happiness.',
    },
    {
      id: 38,
      verseLabel: 'Chaupai 36',
      sanskrit: 'संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥',
      transliteration: 'Sankat Katai Mitai Sab Peera.\nJo Sumirai Hanumat Balbeera.',
      meaning: 'All afflictions cease and all pain is removed for those who remember the mighty brave Hanuman.',
    },
    {
      id: 39,
      verseLabel: 'Chaupai 37',
      sanskrit: 'जय जय जय हनुमान गोसाईं।\nकृपा करहु गुरुदेव की नाईं॥',
      transliteration: 'Jai Jai Jai Hanuman Gosain.\nKripa Karahu Gurudev Ki Naain.',
      meaning: 'Victory, victory, victory to Lord Hanuman! Bestow your grace upon us as our supreme guru.',
    },
    {
      id: 40,
      verseLabel: 'Chaupai 38',
      sanskrit: 'जो सत बार पाठ कर कोई।\nछूटहि बंदि महा सुख होई॥',
      transliteration: 'Jo Sat Baar Paath Kar Koi.\nChhootahi Bandi Maha Sukh Hoi.',
      meaning: 'Whoever recites this a hundred times is freed from bondage and attains great bliss.',
    },
    {
      id: 41,
      verseLabel: 'Chaupai 39',
      sanskrit: 'जो यह पढ़ै हनुमान चालीसा।\nहोय सिद्धि साखी गौरीसा॥',
      transliteration: 'Jo Yah Padhai Hanuman Chaleesa.\nHoy Siddhi Saakhi Gaureesa.',
      meaning: 'Whoever reads this Hanuman Chalisa attains perfection, as Lord Shiva is witness.',
    },
    {
      id: 42,
      verseLabel: 'Chaupai 40',
      sanskrit: 'तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय महँ डेरा॥',
      transliteration: 'Tulsidas Sada Hari Chera.\nKeejai Nath Hriday Mahan Dera.',
      meaning: 'Tulsidas, the eternal servant of Hari, prays: O Lord, make your abode in my heart.',
    },
    {
      id: 43,
      verseLabel: 'Closing Doha',
      sanskrit: 'पवनतनय संकट हरन, मंगल मूरति रूप।\nराम लखन सीता सहित, हृदय बसहु सुर भूप॥',
      transliteration: 'Pavantanay Sankat Haran, Mangal Murti Roop.\nRam Lakhan Sita Sahit, Hriday Basahu Sur Bhoop.',
      meaning: 'O son of the Wind, remover of calamities, embodiment of auspiciousness — dwell in my heart together with Rama, Lakshmana, and Sita, O king of gods.',
    },
  ],
};

const ganeshaPancharatnam: Stotra = {
  id: 'ganesha-pancharatnam',
  title: 'Ganesha Pancharatnam',
  subtitle: 'गणेश पञ्चरत्नम्',
  deity: 'Ganesha',
  description: 'Five gems in praise of Lord Ganesha, composed by Adi Shankaracharya.',
  benefits: [
    'Removes obstacles from every endeavor',
    'Grants clarity of intellect and wisdom',
    'Invokes prosperity, harmony, and success',
  ],
  estimatedMinutes: 5,
  icon: 'M16 4 Q12 4 10 8 Q8 12 10 16 L14 16 L14 28 L18 28 L18 16 L22 16 Q24 12 22 8 Q20 4 16 4 M10 16 Q8 20 6 24 M22 16 Q24 20 26 24',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit: 'मुदाकरात्तमोदकं सदा विमुक्तिसाधकम्।\nकलाधरावतंसकं विलासिलोकरक्षकम्॥\nअनायकैकनायकं विनाशितेभदैत्यकम्।\nनताशुभाशुनाशकं नमामि तं विनायकम्॥',
      transliteration: 'Mudakaraatta Modakam Sada Vimukti Sadhakam.\nKaladharavatamsakam Vilasi Loka Rakshakam.\nAnayakaika Nayakam Vinashitebha Daityakam.\nNatashubhashu Nashakam Namami Tam Vinayakam.',
      meaning: 'I salute that Vinayaka who joyfully holds modaka in His hand, who is the eternal bestower of liberation, who wears the crescent moon as an ornament, who protects the world with grace, who is the sole leader of the leaderless, who destroyed the demon Gajasura, and who swiftly destroys the inauspiciousness of those who bow to Him.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit: 'नतेतरातिभीकरं नवोदितार्कभास्वरम्।\nनमत्सुरारिनिर्जरं नताधिकापदुद्धरम्॥\nसुरेश्वरं निधीश्वरं गजेश्वरं गणेश्वरम्।\nमहेश्वरं तमाश्रये परात्परं निरन्तरम्॥',
      transliteration: 'Natetarati Bheekaram Navoditarka Bhaswaram.\nNamat Surari Nirjaram Natadhika Paduddharam.\nSureshwaram Nidhishwaram Gajeshwaram Ganeshwaram.\nMaheshwaram Tamashraye Paratparam Nirantaram.',
      meaning: 'He who is terrifying to those who do not bow, who shines like the newly risen sun, who makes the enemies of the gods tremble, who uplifts those bowed with burdens — I take refuge in that supreme Lord of lords, Lord of treasures, Lord of elephants, Lord of ganas, the great Lord, supreme and eternal.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit: 'समस्तलोकशंकरं निरस्तदैत्यकुञ्जरम्।\nदरेतरोदरं वरं वरेभवक्त्रमक्षरम्॥\nकृपाकरं क्षमाकरं मुदाकरं यशस्करम्।\nमनस्करं नमस्कृतां नमस्करोमि भास्करम्॥',
      transliteration: 'Samasta Loka Shankaram Nirasta Daitya Kunjaram.\nDaretarodaram Varam Varebha Vaktram Aksharam.\nKripakaram Kshamakaram Mudakaram Yashaskaram.\nManaskaram Namaskritam Namaskaromi Bhaskaram.',
      meaning: 'He who brings happiness to all the worlds, who vanquished the elephant demon, whose belly is vast, who has the face of the best of elephants, who is imperishable, who is the source of compassion, forgiveness, joy, and fame — I bow to that radiant one who is worshipped by all.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit: 'अकिञ्चनार्तिमार्जनं चिरन्तनोक्तिभाजनम्।\nपुरारिपूर्वनन्दनं सुरारिगर्वचर्वणम्॥\nप्रपञ्चनाशभीषणं धनञ्जयादिभूषणम्।\nकपोलदानवारणं भजे पुराणवारणम्॥',
      transliteration: 'Akinchanarthi Marjanam Chirantanokti Bhajanam.\nPurari Purva Nandanam Surari Garva Charvanam.\nPrapancha Nasha Bhishanam Dhananjayadi Bhushanam.\nKapola Dana Varanam Bhaje Purana Varanam.',
      meaning: 'He who removes the afflictions of the destitute, who is the recipient of ancient prayers, the first-born son of the destroyer of Tripura, who crushes the pride of the enemies of the gods, who is fearsome as the destroyer of the universe, adorned with the serpent Dhananjaya, whose temples exude ichor like a mighty elephant — I worship that ancient elephant-faced Lord.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit: 'नितान्तकान्तदन्तकान्तिमन्तकान्तकात्मजम्।\nअचिन्त्यरूपमन्तहीनमन्तरायकृन्तनम्॥\nहृदन्तरे निरन्तरं वसन्तमेव योगिनाम्।\nतमेकदन्तमेव तं विचिन्तयामि सन्ततम्॥',
      transliteration: 'Nitanta Kanta Danta Kanti Mantakanta Katmajam.\nAchintya Rupam Antahinam Antaraya Krintanam.\nHridantare Nirantaram Vasantameva Yoginam.\nTam Ekadantam Eva Tam Vichintayami Santatam.',
      meaning: 'He whose lustrous tusks are exceedingly beautiful, the son of the destroyer of the god of death, whose form is beyond thought, who is infinite, who removes all obstacles, who dwells forever in the hearts of yogis — I constantly meditate upon that single-tusked Lord.',
    },
  ],
};

const shivaPanchakshara: Stotra = {
  id: 'shiva-panchakshara',
  title: 'Shiva Panchakshara Stotram',
  subtitle: 'शिव पञ्चाक्षर स्तोत्रम्',
  deity: 'Shiva',
  description: 'Five verses on the five syllables Na-Ma-Shi-Va-Ya, by Adi Shankaracharya.',
  benefits: [
    'Invokes the power of the sacred "Namah Shivāya" mantra',
    'Purifies the mind and awakens inner stillness',
    'Bestows Shiva\'s grace and ultimate liberation',
  ],
  estimatedMinutes: 4,
  icon: 'M16 4 L16 28 M8 4 Q8 12 16 16 M24 4 Q24 12 16 16 M12 28 L20 28',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1 (Na)',
      sanskrit: 'नागेन्द्रहाराय त्रिलोचनाय भस्माङ्गरागाय महेश्वराय।\nनित्याय शुद्धाय दिगम्बराय तस्मै नकाराय नमः शिवाय॥',
      transliteration: 'Nagendra Haraya Trilochanaya Bhashmanga Ragaya Maheshwaraya.\nNityaya Shuddhaya Digambaraya Tasmai Nakaraya Namah Shivaya.',
      meaning: 'Salutations to Shiva, who wears the king of serpents as a garland, who has three eyes, whose body is smeared with sacred ash, the great Lord, eternal, pure, and sky-clad — I bow to the syllable Na.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2 (Ma)',
      sanskrit: 'मन्दाकिनीसलिलचन्दनचर्चिताय नन्दीश्वरप्रमथनाथमहेश्वराय।\nमन्दारपुष्पबहुपुष्पसुपूजिताय तस्मै मकाराय नमः शिवाय॥',
      transliteration: 'Mandakini Salila Chandana Charchitaya Nandishwara Pramathanatha Maheshwaraya.\nMandara Pushpa Bahu Pushpa Supujitaya Tasmai Makaraya Namah Shivaya.',
      meaning: 'Salutations to Shiva, who is anointed with the waters of the Mandakini and sandalwood paste, who is the Lord of Nandi and the Pramatha ganas, the great Lord, worshipped with mandara flowers and many other flowers — I bow to the syllable Ma.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3 (Shi)',
      sanskrit: 'शिवाय गौरीवदनाब्जबृन्दसूर्याय दक्षाध्वरनाशकाय।\nश्रीनीलकण्ठाय वृषध्वजाय तस्मै शिकाराय नमः शिवाय॥',
      transliteration: 'Shivaya Gauri Vadanabja Vrnda Suryaya Dakshadhvara Nashakaya.\nShri Neelakanthaya Vrishadhvajaya Tasmai Shikaraya Namah Shivaya.',
      meaning: 'Salutations to Shiva, who is like the sun to the lotus face of Gauri, who destroyed the sacrifice of Daksha, the blue-throated one, whose banner bears the bull — I bow to the syllable Shi.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4 (Va)',
      sanskrit: 'वसिष्ठकुम्भोद्भवगौतमार्यमुनीन्द्रदेवार्चितशेखराय।\nचन्द्रार्कवैश्वानरलोचनाय तस्मै वकाराय नमः शिवाय॥',
      transliteration: 'Vasishtha Kumbhodbhava Gautamarya Muneendra Devarchita Shekharaya.\nChandrarka Vaishvanara Lochanaya Tasmai Vakaraya Namah Shivaya.',
      meaning: 'Salutations to Shiva, whose head is worshipped by the great sages Vasishtha, Agastya, Gautama, and the best of gods, whose three eyes are the moon, sun, and fire — I bow to the syllable Va.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5 (Ya)',
      sanskrit: 'यक्षस्वरूपाय जटाधराय पिनाकहस्ताय सनातनाय।\nदिव्याय देवाय दिगम्बराय तस्मै यकाराय नमः शिवाय॥',
      transliteration: 'Yaksha Swarupaya Jatadharaya Pinaka Hastaya Sanatanaya.\nDivyaya Devaya Digambaraya Tasmai Yakaraya Namah Shivaya.',
      meaning: 'Salutations to Shiva, who is in the form of Yaksha, who wears matted hair, who holds the Pinaka bow, the eternal one, the divine, the radiant, the sky-clad — I bow to the syllable Ya.',
    },
  ],
};

const mahalakshmiAshtakam: Stotra = {
  id: 'mahalakshmi-ashtakam',
  title: 'Mahalakshmi Ashtakam',
  subtitle: 'महालक्ष्मी अष्टकम्',
  deity: 'Lakshmi',
  description: 'Eight verses in praise of Goddess Mahalakshmi.',
  benefits: [
    'Invokes Mahalakshmi for prosperity and abundance',
    'Removes poverty, debt, and financial hardship',
    'Grants health, happiness, and fulfillment of desires',
  ],
  estimatedMinutes: 6,
  icon: 'M16 8 Q12 8 10 12 Q8 16 12 20 Q14 22 16 22 Q18 22 20 20 Q24 16 22 12 Q20 8 16 8 M16 22 L16 28 M10 12 Q6 10 4 12 M22 12 Q26 10 28 12',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit: 'नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते।\nशङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तु ते॥',
      transliteration: 'Namaste\'stu Mahamaye Shripeethe Surapujite.\nShankha Chakra Gada Haste Mahalakshmi Namo\'stu Te.',
      meaning: 'Salutations to the great illusion, worshipped by the gods at Sripeetha, who holds the conch, discus, and mace in Her hands — O Mahalakshmi, I bow to You.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit: 'नमस्ते गरुडारूढे कोलासुरभयंकरि।\nसर्वपापहरे देवि महालक्ष्मि नमोऽस्तु ते॥',
      transliteration: 'Namaste Garudarudhe Kolasura Bhayankari.\nSarva Papa Hare Devi Mahalakshmi Namo\'stu Te.',
      meaning: 'Salutations to You who ride upon Garuda, who are fearsome to the demon Kolasura, who remove all sins — O Goddess Mahalakshmi, I bow to You.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit: 'सर्वज्ञे सर्ववरदे सर्वदुष्टभयंकरि।\nसर्वदुःखहरे देवि महालक्ष्मि नमोऽस्तु ते॥',
      transliteration: 'Sarvajne Sarva Varade Sarva Dushta Bhayankari.\nSarva Duhkha Hare Devi Mahalakshmi Namo\'stu Te.',
      meaning: 'O all-knowing one, bestower of all boons, terrifying to the wicked, remover of all sorrows — O Goddess Mahalakshmi, I bow to You.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit: 'सिद्धिबुद्धिप्रदे देवि भुक्तिमुक्तिप्रदायिनि।\nमन्त्रमूर्ते सदा देवि महालक्ष्मि नमोऽस्तु ते॥',
      transliteration: 'Siddhi Buddhi Prade Devi Bhukti Mukti Pradayini.\nMantra Murte Sada Devi Mahalakshmi Namo\'stu Te.',
      meaning: 'O Goddess who bestows success and wisdom, who grants worldly enjoyment and liberation, who is the embodiment of mantras — O Mahalakshmi, I bow to You.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit: 'आद्यन्तरहिते देवि आद्यशक्तिमहेश्वरि।\nयोगजे योगसम्भूते महालक्ष्मि नमोऽस्तु ते॥',
      transliteration: 'Adyanta Rahite Devi Adya Shakti Maheshwari.\nYogaje Yoga Sambhute Mahalakshmi Namo\'stu Te.',
      meaning: 'O Goddess without beginning or end, the primal power, the great sovereign, born of yoga and manifested through yoga — O Mahalakshmi, I bow to You.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit: 'स्थूलसूक्ष्ममहारौद्रे महाशक्तिमहोदरे।\nमहापापहरे देवि महालक्ष्मि नमोऽस्तु ते॥',
      transliteration: 'Sthula Sukshma Maha Raudre Maha Shakti Mahodare.\nMaha Papa Hare Devi Mahalakshmi Namo\'stu Te.',
      meaning: 'O Goddess who is gross, subtle, and most terrifying, who possesses great power and a vast form, who destroys the greatest sins — O Mahalakshmi, I bow to You.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit: 'पद्मासनस्थिते देवि परब्रह्मस्वरूपिणि।\nपरमेशि जगन्मातर्महालक्ष्मि नमोऽस्तु ते॥',
      transliteration: 'Padmasana Sthite Devi Parabrahma Swarupini.\nParameshi Jagan Matar Mahalakshmi Namo\'stu Te.',
      meaning: 'O Goddess seated on a lotus, who is the embodiment of the Supreme Brahman, the supreme ruler, mother of the universe — O Mahalakshmi, I bow to You.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit: 'श्वेताम्बरधरे देवि नानालङ्कारभूषिते।\nजगत्स्थिते जगन्मातर्महालक्ष्मि नमोऽस्तु ते॥',
      transliteration: 'Shvetambara Dhare Devi Nanalankara Bhushite.\nJagat Sthite Jagan Matar Mahalakshmi Namo\'stu Te.',
      meaning: 'O Goddess clad in white garments, adorned with various ornaments, who pervades the universe, mother of the world — O Mahalakshmi, I bow to You.',
    },
    {
      id: 9,
      verseLabel: 'Phala Shruti',
      sanskrit: 'महालक्ष्म्यष्टकं स्तोत्रं यः पठेद्भक्तिमान्नरः।\nसर्वसिद्धिमवाप्नोति राज्यं प्राप्नोति सर्वदा॥',
      transliteration: 'Mahalakshmyashtakam Stotram Yah Pathed Bhaktiman Narah.\nSarva Siddhim Avapnoti Rajyam Prapnoti Sarvada.',
      meaning: 'The devoted person who recites this Mahalakshmi Ashtakam hymn attains all accomplishments and gains sovereignty always.',
    },
  ],
};

const lingashtakam: Stotra = {
  id: 'lingashtakam',
  title: 'Lingashtakam',
  subtitle: 'लिङ्गाष्टकम्',
  deity: 'Shiva',
  description: 'Eight verses glorifying the Shiva Lingam.',
  benefits: [
    'Purifies the heart and mind of accumulated sins',
    'Bestows Shiva\'s boundless grace and blessings',
    'Liberates the soul from the cycle of birth and death',
  ],
  estimatedMinutes: 5,
  icon: 'M16 6 C11 6 8 10 8 16 C8 22 11 26 16 26 C21 26 24 22 24 16 C24 10 21 6 16 6 M8 26 L24 26 M6 28 L26 28',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit: 'ब्रह्ममुरारिसुरार्चितलिङ्गं निर्मलभासितशोभितलिङ्गम्।\nजन्मजदुःखविनाशकलिङ्गं तत्प्रणमामि सदाशिवलिङ्गम्॥',
      transliteration: 'Brahma Murari Surarchita Lingam Nirmala Bhasita Shobhita Lingam.\nJanmaja Duhkha Vinashaka Lingam Tat Pranamami Sadashiva Lingam.',
      meaning: 'I bow to that Sadashiva Lingam which is worshipped by Brahma, Vishnu, and the gods, which shines with spotless brilliance, and which destroys the sorrows born of worldly existence.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit: 'देवमुनिप्रवरार्चितलिङ्गं कामदहं करुणाकरलिङ्गम्।\nरावणदर्पविनाशनलिङ्गं तत्प्रणमामि सदाशिवलिङ्गम्॥',
      transliteration: 'Deva Muni Pravararchita Lingam Kamadaham Karunakara Lingam.\nRavana Darpa Vinashana Lingam Tat Pranamami Sadashiva Lingam.',
      meaning: 'I bow to that Sadashiva Lingam which is worshipped by the best of gods and sages, which burned Kama (desire), which is the abode of compassion, and which destroyed the pride of Ravana.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit: 'सर्वसुगन्धिसुलेपितलिङ्गं बुद्धिविवर्धनकारणलिङ्गम्।\nसिद्धसुरासुरवन्दितलिङ्गं तत्प्रणमामि सदाशिवलिङ्गम्॥',
      transliteration: 'Sarva Sugandhi Sulepita Lingam Buddhi Vivardhana Karana Lingam.\nSiddha Surasura Vandita Lingam Tat Pranamami Sadashiva Lingam.',
      meaning: 'I bow to that Sadashiva Lingam which is anointed with all fragrances, which is the cause of the growth of wisdom, and which is venerated by the Siddhas, gods, and demons.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit: 'कनकमहामणिभूषितलिङ्गं फणिपतिवेष्टितशोभितलिङ्गम्।\nदक्षसुयज्ञविनाशनलिङ्गं तत्प्रणमामि सदाशिवलिङ्गम्॥',
      transliteration: 'Kanaka Mahamani Bhushita Lingam Phanipati Veshtita Shobhita Lingam.\nDaksha Suyajna Vinashana Lingam Tat Pranamami Sadashiva Lingam.',
      meaning: 'I bow to that Sadashiva Lingam which is adorned with gold and precious jewels, which is beautified by the king of serpents coiled around it, and which destroyed the great sacrifice of Daksha.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit: 'कुङ्कुमचन्दनलेपितलिङ्गं पङ्कजहारसुशोभितलिङ्गम्।\nसञ्चितपापविनाशनलिङ्गं तत्प्रणमामि सदाशिवलिङ्गम्॥',
      transliteration: 'Kumkuma Chandana Lepita Lingam Pankaja Hara Sushobhita Lingam.\nSanchita Papa Vinashana Lingam Tat Pranamami Sadashiva Lingam.',
      meaning: 'I bow to that Sadashiva Lingam which is anointed with kumkum and sandalwood paste, which is beautifully adorned with garlands of lotuses, and which destroys accumulated sins.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit: 'देवगणार्चितसेवितलिङ्गं भावैर्भक्तिभिरेव च लिङ्गम्।\nदिनकरकोटिप्रभाकरलिङ्गं तत्प्रणमामि सदाशिवलिङ्गम्॥',
      transliteration: 'Devagana Archita Sevita Lingam Bhavair Bhaktibhireva Cha Lingam.\nDinakara Koti Prabhakara Lingam Tat Pranamami Sadashiva Lingam.',
      meaning: 'I bow to that Sadashiva Lingam which is worshipped and served by hosts of gods, which is worshipped with devotion and true feeling, and which shines with the radiance of a million suns.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit: 'अष्टदलोपरिवेष्टितलिङ्गं सर्वसमुद्भवकारणलिङ्गम्।\nअष्टदरिद्रविनाशनलिङ्गं तत्प्रणमामि सदाशिवलिङ्गम्॥',
      transliteration: 'Ashtadalo Pariveshtita Lingam Sarva Samudbhava Karana Lingam.\nAshta Daridra Vinashana Lingam Tat Pranamami Sadashiva Lingam.',
      meaning: 'I bow to that Sadashiva Lingam which is surrounded by eight-petaled flowers, which is the cause of all creation, and which destroys the eight forms of poverty.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit: 'सुरगुरुसुरवरपूजितलिङ्गं सुरवनपुष्पसदार्चितलिङ्गम्।\nपरात्परं परमात्मकलिङ्गं तत्प्रणमामि सदाशिवलिङ्गम्॥',
      transliteration: 'Suraguru Suravara Pujita Lingam Suravana Pushpa Sadarchita Lingam.\nParatparam Paramatmaka Lingam Tat Pranamami Sadashiva Lingam.',
      meaning: 'I bow to that Sadashiva Lingam which is worshipped by the preceptor of gods and the best of gods, which is always worshipped with flowers from the celestial gardens, and which is the Supreme Being, the ultimate soul.',
    },
  ],
};

const madhurashtakam: Stotra = {
  id: 'madhurashtakam',
  title: 'Madhurashtakam',
  subtitle: 'मधुराष्टकम्',
  deity: 'Krishna',
  description: 'Eight sweet verses by Vallabhacharya — everything about Krishna is Madhuram (sweet).',
  benefits: [
    'Cultivates divine love and the mādhurya-bhāva',
    'Draws the heart intimately towards Bhagavān Krishna',
    'Fills daily life with sweetness, joy, and inner bliss',
  ],
  estimatedMinutes: 5,
  icon: 'M6 16 L26 16 M10 12 L10 20 M16 10 L16 22 M22 12 L22 20 M6 16 Q4 10 8 6 M26 16 Q28 22 24 26',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit: 'अधरं मधुरं वदनं मधुरं नयनं मधुरं हसितं मधुरम्।\nहृदयं मधुरं गमनं मधुरं मधुराधिपतेरखिलं मधुरम्॥',
      transliteration: 'Adharam Madhuram Vadanam Madhuram Nayanam Madhuram Hasitam Madhuram.\nHridayam Madhuram Gamanam Madhuram Madhuradhipater Akhilam Madhuram.',
      meaning: 'His lips are sweet, His face is sweet, His eyes are sweet, His smile is sweet. His heart is sweet, His gait is sweet — everything about the Lord of sweetness is sweet.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit: 'वचनं मधुरं चरितं मधुरं वसनं मधुरं वलितं मधुरम्।\nचलितं मधुरं भ्रमितं मधुरं मधुराधिपतेरखिलं मधुरम्॥',
      transliteration: 'Vachanam Madhuram Charitam Madhuram Vasanam Madhuram Valitam Madhuram.\nChalitam Madhuram Bhramitam Madhuram Madhuradhipater Akhilam Madhuram.',
      meaning: 'His speech is sweet, His character is sweet, His garments are sweet, His posture is sweet. His movements are sweet, His wandering is sweet — everything about the Lord of sweetness is sweet.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit: 'वेणुर्मधुरो रेणुर्मधुरः पाणिर्मधुरः पादौ मधुरौ।\nनृत्यं मधुरं सख्यं मधुरं मधुराधिपतेरखिलं मधुरम्॥',
      transliteration: 'Venur Madhuro Renur Madhurah Panir Madhurah Padau Madhurau.\nNrityam Madhuram Sakhyam Madhuram Madhuradhipater Akhilam Madhuram.',
      meaning: 'His flute is sweet, His dust is sweet, His hands are sweet, His feet are sweet. His dance is sweet, His friendship is sweet — everything about the Lord of sweetness is sweet.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit: 'गीतं मधुरं पीतं मधुरं भुक्तं मधुरं सुप्तं मधुरम्।\nरूपं मधुरं तिलकं मधुरं मधुराधिपतेरखिलं मधुरम्॥',
      transliteration: 'Gitam Madhuram Pitam Madhuram Bhuktam Madhuram Suptam Madhuram.\nRupam Madhuram Tilakam Madhuram Madhuradhipater Akhilam Madhuram.',
      meaning: 'His song is sweet, His drinking is sweet, His eating is sweet, His sleeping is sweet. His form is sweet, His tilak is sweet — everything about the Lord of sweetness is sweet.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit: 'करणं मधुरं तरणं मधुरं हरणं मधुरं रमणं मधुरम्।\nवमितं मधुरं शमितं मधुरं मधुराधिपतेरखिलं मधुरम्॥',
      transliteration: 'Karanam Madhuram Taranam Madhuram Haranam Madhuram Ramanam Madhuram.\nVamitam Madhuram Shamitam Madhuram Madhuradhipater Akhilam Madhuram.',
      meaning: 'His deeds are sweet, His liberation is sweet, His stealing (of hearts) is sweet, His love-play is sweet. His giving is sweet, His pacifying is sweet — everything about the Lord of sweetness is sweet.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit: 'गुञ्जा मधुरा माला मधुरा यमुना मधुरा वीची मधुरा।\nसलिलं मधुरं कमलं मधुरं मधुराधिपतेरखिलं मधुरम्॥',
      transliteration: 'Gunja Madhura Mala Madhura Yamuna Madhura Vichi Madhura.\nSalilam Madhuram Kamalam Madhuram Madhuradhipater Akhilam Madhuram.',
      meaning: 'His gunja berry necklace is sweet, His garland is sweet, the Yamuna is sweet, its waves are sweet. Its water is sweet, the lotus is sweet — everything about the Lord of sweetness is sweet.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit: 'गोपी मधुरा लीला मधुरा युक्तं मधुरं मुक्तं मधुरम्।\nदृष्टं मधुरं शिष्टं मधुरं मधुराधिपतेरखिलं मधुरम्॥',
      transliteration: 'Gopi Madhura Leela Madhura Yuktam Madhuram Muktam Madhuram.\nDrishtam Madhuram Shishtam Madhuram Madhuradhipater Akhilam Madhuram.',
      meaning: 'His gopis are sweet, His divine play is sweet, His union is sweet, His liberation is sweet. His glance is sweet, His discipline is sweet — everything about the Lord of sweetness is sweet.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit: 'गोपा मधुरा गावो मधुरा यष्टिर्मधुरा सृष्टिर्मधुरा।\nदलितं मधुरं फलितं मधुरं मधुराधिपतेरखिलं मधुरम्॥',
      transliteration: 'Gopa Madhura Gavo Madhura Yashtir Madhura Srishtir Madhura.\nDalitam Madhuram Phalitam Madhuram Madhuradhipater Akhilam Madhuram.',
      meaning: 'His cowherds are sweet, His cows are sweet, His staff is sweet, His creation is sweet. His destruction is sweet, His fruition is sweet — everything about the Lord of sweetness is sweet.',
    },
  ],
};

const shivaAshtottara: Stotra = {
  id: 'shiva-ashtottara',
  title: 'Sri Shiva Ashtottara',
  subtitle: 'श्री शिव अष्टोत्तर शतनाम स्तोत्रम्',
  deity: 'Shiva',
  description: 'The 108 sacred names of Lord Shiva, arranged in thirteen melodious verses.',
  benefits: [
    'Invokes Lord Shiva through his 108 sacred names',
    'Bestows peace, health, and long life',
    'Leads the sincere devotee towards moksha',
  ],
  estimatedMinutes: 10,
  icon: 'M8 5 L24 5 L16 16 Z M8 27 L24 27 L16 16 Z',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit: 'शिवो महेश्वरः शम्भुः पिनाकी शशिशेखरः।\nवामदेवो विरूपाक्षः कपर्दी नीललोहितः॥',
      transliteration: 'Shivo Maheshwarah Shambhuh Pinaki Shashishekharah.\nVamadevo Virupakshah Kapardi Neelalohitah.',
      meaning: 'Shiva (the auspicious), Maheshwara (great Lord), Shambhu (source of joy), Pinaki (wielder of the bow Pinaka), Shashishekhara (moon-crested); Vamadeva (beautiful god), Virupaksha (three-eyed), Kapardi (with matted locks), Neelalohita (blue and red-hued).',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit: 'शङ्करः शूलपाणिश्च खट्वाङ्गी विष्णुवल्लभः।\nशिपिविष्टोऽम्बिकानाथः श्रीकण्ठो भक्तवत्सलः॥',
      transliteration: 'Shankarah Shulapanishcha Khatvangi Vishnuvallabhah.\nShipivishto\'mbikanathah Shrikantho Bhaktavatsalah.',
      meaning: 'Shankara (bestower of bliss), Shulapani (trident-holder), Khatvangi (holder of the khatvanga staff), Vishnuvallabha (dear to Vishnu); Shipivishta (pervader of forms), Ambikanatha (Lord of Ambika), Shrikantha (auspicious-throated), Bhaktavatsala (loving to devotees).',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit: 'भवः शर्वस्त्रिलोकेशः शितिकण्ठः शिवाप्रियः।\nउग्रः कपाली कामारिरन्धकासुरसूदनः॥',
      transliteration: 'Bhavah Sharvastrilokeshah Shitikanthah Shivapriyah.\nUgrah Kapali Kamarirandhakasurasudanah.',
      meaning: 'Bhava (source of existence), Sharva (destroyer of evil), Trilokesha (Lord of the three worlds), Shitikantha (dark-throated), Shivapriya (beloved of Shiva/Parvati); Ugra (fierce), Kapali (bearer of the skull), Kamari (enemy of Kama), Andhakasurasudana (slayer of demon Andhaka).',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit: 'गङ्गाधरो ललाटाक्षः कालकालः कृपानिधिः।\nभीमः परशुहस्तश्च मृगपाणिर्जटाधरः॥',
      transliteration: 'Gangadharo Lalatakshah Kalakalah Kripanidhih.\nBhimah Parashuhastashcha Mrigapanirjatadharah.',
      meaning: 'Gangadhara (bearer of the Ganges), Lalataksha (eye on the forehead), Kalakala (death of Death), Kripanidhi (treasure of grace); Bhima (fearsome), Parashuhasta (axe-wielder), Mrigapani (deer-holder), Jatadhara (with matted hair).',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit: 'कैलासवासी कवची कठोरस्त्रिपुरान्तकः।\nवृषाङ्को वृषभारूढो भस्मोद्धूलितविग्रहः॥',
      transliteration: 'Kailasavasi Kavachi Kathorastripurantakah.\nVrishanko Vrishabharudho Bhasmoddhulitavigrahah.',
      meaning: 'Kailasavasi (dweller of Mount Kailasa), Kavachi (armored), Kathora (firm), Tripurantaka (destroyer of the three cities); Vrishanka (with the bull emblem), Vrishabharudha (rider of the bull), Bhasmoddhulitavigraha (body smeared with sacred ash).',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit: 'सामप्रियः स्वरमयस्त्रयीमूर्तिरनीश्वरः।\nसर्वज्ञः परमात्मा च सोमसूर्याग्निलोचनः॥',
      transliteration: 'Samapriyah Svaramayastrayimurtiranishvarah.\nSarvajnah Paramatma Cha Somasuryagnilochanah.',
      meaning: 'Samapriya (lover of the Sama Veda), Svaramaya (embodiment of musical notes), Trayimurti (form of the three Vedas), Anishvara (without a superior); Sarvajna (all-knowing), Paramatma (supreme Self), Somasuryagnilochana (eyes of moon, sun, and fire).',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit: 'हविर्यज्ञमयः सोमः पञ्चवक्त्रः सदाशिवः।\nविश्वेश्वरो वीरभद्रो गणनाथः प्रजापतिः॥',
      transliteration: 'Haviryajnamayah Somah Panchavaktrah Sadashivah.\nVishveshvaro Virabhadro Gananathah Prajapatih.',
      meaning: 'Haviryajnamaya (form of the oblation-sacrifice), Soma (the nectar-bearing), Panchavaktra (five-faced), Sadashiva (ever-auspicious); Vishveshvara (Lord of the universe), Virabhadra (the heroic one), Gananatha (Lord of the ganas), Prajapati (Lord of creatures).',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit: 'हिरण्यरेता दुर्धर्षो गिरीशो गिरिशोऽनघः।\nभुजङ्गभूषणो भर्गो गिरिधन्वा गिरिप्रियः॥',
      transliteration: 'Hiranyareta Durdharsho Girisho Girisho\'naghah.\nBhujangabhushano Bhargo Giridhanva Giripriyah.',
      meaning: 'Hiranyareta (of golden seed), Durdharsha (invincible), Girisha (Lord of mountains), Girisha (dweller on the mountain), Anagha (sinless); Bhujangabhushana (adorned with serpents), Bharga (the effulgent), Giridhanva (whose bow is a mountain), Giripriya (lover of mountains).',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit: 'कृत्तिवासाः पुरारातिर्भगवान् प्रमथाधिपः।\nमृत्युञ्जयः सूक्ष्मतनुर्जगद्व्यापी जगद्गुरुः॥',
      transliteration: 'Krittivasah Puraratir Bhagavan Pramathadhipah.\nMrityunjayah Sukshmatanur Jagadvyapi Jagadguruh.',
      meaning: 'Krittivasah (clad in tiger-skin), Purarati (enemy of the three cities), Bhagavan (the blessed Lord), Pramathadhipa (chief of the Pramatha ganas); Mrityunjaya (conqueror of death), Sukshmatanu (of subtle body), Jagadvyapi (pervader of the universe), Jagadguru (teacher of the world).',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit: 'व्योमकेशो महासेनजनकश्चारुविक्रमः।\nरुद्रो भूतपतिः स्थाणुरहिर्बुध्न्यो दिगम्बरः॥',
      transliteration: 'Vyomakesho Mahasenajanakashcharuvikramah.\nRudro Bhutapatih Sthanurahirbudhnyo Digambarah.',
      meaning: 'Vyomakesha (sky-haired), Mahasenajanaka (father of Kartikeya), Charuvikrama (of graceful valour); Rudra (the howler), Bhutapati (Lord of beings), Sthanu (the steady pillar), Ahirbudhnya (serpent of the deep), Digambara (sky-clad).',
    },
    {
      id: 11,
      verseLabel: 'Verse 11',
      sanskrit: 'अष्टमूर्तिरनेकात्मा सात्त्विकः शुद्धविग्रहः।\nशाश्वतः खण्डपरशुरजः पाशविमोचकः॥',
      transliteration: 'Ashtamurtiranekatma Sattvikah Shuddhavigrahah.\nShashvatah Khandaparashurajah Pashavimochakah.',
      meaning: 'Ashtamurti (of eight forms), Anekatma (of many selves), Sattvika (pure of quality), Shuddhavigraha (of pure form); Shashvata (eternal), Khandaparashu (wielder of the broken axe), Aja (unborn), Pashavimochaka (liberator from bondage).',
    },
    {
      id: 12,
      verseLabel: 'Verse 12',
      sanskrit: 'मृडः पशुपतिर्देवो महादेवोऽव्ययो हरिः।\nपूषदन्तभिदव्यग्रो दक्षाध्वरहरो हरः॥',
      transliteration: 'Mridah Pashupatirdevo Mahadevo\'vyayo Harih.\nPushadantabhidavyagro Dakshadhvaraharo Harah.',
      meaning: 'Mrida (the gracious), Pashupati (Lord of all creatures), Deva (the shining one), Mahadeva (great god), Avyaya (imperishable), Hari (remover of sins); Pushadantabhid (breaker of Pushan\'s teeth), Avyagra (unperturbed), Dakshadhvarahara (destroyer of Daksha\'s sacrifice), Hara (the remover).',
    },
    {
      id: 13,
      verseLabel: 'Verse 13',
      sanskrit: 'भगनेत्रभिदव्यक्तः सहस्राक्षः सहस्रपात्।\nअपवर्गप्रदोऽनन्तस्तारकः परमेश्वरः॥',
      transliteration: 'Bhaganetrabhidavyaktah Sahasrakshah Sahasrapat.\nApavargaprado\'nantastarakah Parameshvarah.',
      meaning: 'Bhaganetrabhid (who pierced Bhaga\'s eye), Avyakta (the unmanifest), Sahasraksha (thousand-eyed), Sahasrapat (thousand-footed); Apavargaprada (bestower of liberation), Ananta (the endless), Taraka (the deliverer), Parameshvara (supreme Lord).',
    },
    {
      id: 14,
      verseLabel: 'Phala Shruti',
      sanskrit: 'एवं श्रीशम्भुदेवस्य नाम्नामष्टोत्तरं शतम्।\nयः पठेच्छृणुयाद्वापि सर्वपापैः प्रमुच्यते॥',
      transliteration: 'Evam Shri Shambhudevasya Namnamashtottaram Shatam.\nYah Pathechchhrinuyadvapi Sarvapapaih Pramuchyate.',
      meaning: 'Thus are the one hundred and eight names of Lord Shambhu. Whoever recites or even hears them is freed from all sins.',
    },
  ],
};

const vishnuSahasranamam: Stotra = {
  id: 'vishnu-sahasranamam',
  title: 'Vishnu Sahasranamam',
  subtitle: 'विष्णु सहस्रनाम स्तोत्रम्',
  deity: 'Vishnu',
  description: 'The thousand sacred names of Lord Vishnu from the Mahabharata — dhyana verses followed by the complete sahasranama shlokas and concluding invocation.',
  benefits: [
    'Bestows peace of mind, health, and longevity',
    'Grants wealth, success, and lasting victory',
    'Leads the devotee to ultimate liberation (moksha)',
  ],
  estimatedMinutes: 40,
  icon: 'M16 6 L16 26 M6 16 L26 16 M8.9 8.9 L23.1 23.1 M23.1 8.9 L8.9 23.1',
  verses: [
    {
      id: 1,
      verseLabel: 'Dhyana 1',
      sanskrit: 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम्।\nप्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये॥',
      transliteration: 'Shuklambaradharam Vishnum Shashivarnam Chaturbhujam.\nPrasannavadanam Dhyayet Sarvavighnopashantaye.',
      meaning: 'I meditate upon Lord Vishnu, clad in white, moon-hued, four-armed, of a serene countenance — for the stilling of all obstacles.',
    },
    {
      id: 2,
      verseLabel: 'Dhyana 2',
      sanskrit: 'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं\nविश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्।\nलक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं\nवन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्॥',
      transliteration: 'Shantakaram Bhujagashayanam Padmanabham Suresham\nVishvadharam Gaganasadrisham Meghavarnam Shubhangam.\nLakshmikantam Kamalanayanam Yogibhir Dhyanagamyam\nVande Vishnum Bhavabhayaharam Sarvalokaikanatham.',
      meaning: 'I bow to Vishnu — of peaceful form, reclining on the serpent, lotus-naveled, Lord of gods; supporter of the universe, vast as the sky, cloud-hued, of auspicious limbs; beloved of Lakshmi, lotus-eyed, attainable by yogis in meditation; the destroyer of the fear of existence, the one Lord of all worlds.',
    },
    {
      id: 3,
      verseLabel: 'Shloka 1',
      sanskrit: 'विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः।\nभूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः॥',
      transliteration: 'Vishvam Vishnur Vashatkaro Bhutabhavyabhavatprabhuh.\nBhutakrid Bhutabhrid Bhavo Bhutatma Bhutabhavanah.',
      meaning: 'The Universe, the all-pervading, the sacred syllable Vashat, the Lord of the past, future, and present; the Creator of beings, the Sustainer of beings, pure Existence, the Self of all beings, the Source of all beings.',
    },
    {
      id: 4,
      verseLabel: 'Shloka 2',
      sanskrit: 'पूतात्मा परमात्मा च मुक्तानां परमा गतिः।\nअव्ययः पुरुषः साक्षी क्षेत्रज्ञोऽक्षर एव च॥',
      transliteration: 'Putatma Paramatma Cha Muktanam Parama Gatih.\nAvyayah Purushah Sakshi Kshetrajno\'kshara Eva Cha.',
      meaning: 'The Pure-Souled, the Supreme Self, the highest goal of the liberated; the Imperishable, the Cosmic Person, the Witness, the Knower of the field, and the Indestructible.',
    },
    {
      id: 5,
      verseLabel: 'Shloka 3',
      sanskrit: 'योगो योगविदां नेता प्रधानपुरुषेश्वरः।\nनारसिंहवपुः श्रीमान् केशवः पुरुषोत्तमः॥',
      transliteration: 'Yogo Yogavidam Neta Pradhanapurusheshvarah.\nNarasimhavapuh Shriman Keshavah Purushottamah.',
      meaning: 'Yoga itself, the guide of the knowers of Yoga, the Lord of Prakriti and Purusha; of the form of Narasimha, the glorious one, Keshava (of beautiful hair), the Supreme Person.',
    },
    {
      id: 6,
      verseLabel: 'Shloka 4',
      sanskrit: 'सर्वः शर्वः शिवः स्थाणुर्भूतादिर्निधिरव्ययः।\nसम्भवो भावनो भर्ता प्रभवः प्रभुरीश्वरः॥',
      transliteration: 'Sarvah Sharvah Shivah Sthanur Bhutadir Nidhiravyayah.\nSambhavo Bhavano Bharta Prabhavah Prabhurishvarah.',
      meaning: 'The All, the Destroyer of all, the Auspicious, the Steadfast Pillar, the Origin of beings, the Inexhaustible Treasure; the Self-Born, the Producer, the Supporter, the Source, the mighty Lord.',
    },
    {
      id: 7,
      verseLabel: 'Shloka 5',
      sanskrit: 'स्वयम्भूः शम्भुरादित्यः पुष्कराक्षो महास्वनः।\nअनादिनिधनो धाता विधाता धातुरुत्तमः॥',
      transliteration: 'Svayambhuh Shambhuradityah Pushkaraksho Mahasvanah.\nAnadinidhano Dhata Vidhata Dhaturuttamah.',
      meaning: 'The Self-Existent, the Giver of joy, the Sun, the lotus-eyed, of great and resonant voice; without beginning or end, the Supporter, the Dispenser, the Supreme among the sustainers.',
    },
    {
      id: 8,
      verseLabel: 'Shloka 6',
      sanskrit: 'अप्रमेयो हृषीकेशः पद्मनाभोऽमरप्रभुः।\nविश्वकर्मा मनुस्त्वष्टा स्थविष्ठः स्थविरो ध्रुवः॥',
      transliteration: 'Aprameyo Hrishikeshah Padmanabho\'maraprabhuh.\nVishvakarma Manustvashta Sthavishthah Sthaviro Dhruvah.',
      meaning: 'The Immeasurable, Lord of the senses, lotus-naveled, Lord of the immortals; the Universal Maker, the Thinker, the Shaper, the most solid, the ancient, the steadfast.',
    },
    {
      id: 9,
      verseLabel: 'Shloka 7',
      sanskrit: 'अग्राह्यः शाश्वतः कृष्णो लोहिताक्षः प्रतर्दनः।\nप्रभूतस्त्रिककुब्धाम पवित्रं मङ्गलं परम्॥',
      transliteration: 'Agrahyah Shashvatah Krishno Lohitakshah Pratardanah.\nPrabhutastrikakubdhama Pavitram Mangalam Param.',
      meaning: 'Incomprehensible, Eternal, Krishna (the dark-hued), the red-eyed, the Destroyer; the Abundant, whose abode spans the three directions, the Pure, the Supreme Auspiciousness.',
    },
    {
      id: 10,
      verseLabel: 'Shloka 8',
      sanskrit: 'ईशानः प्राणदः प्राणो ज्येष्ठः श्रेष्ठः प्रजापतिः।\nहिरण्यगर्भो भूगर्भो माधवो मधुसूदनः॥',
      transliteration: 'Ishanah Pranadah Prano Jyeshthah Shreshthah Prajapatih.\nHiranyagarbho Bhugarbho Madhavo Madhusudanah.',
      meaning: 'The Ruler, the Giver of life, the vital breath itself, the Eldest, the Most Excellent, Lord of creatures; the Golden Womb, the Womb of the earth, Madhava (Lord of Lakshmi), Slayer of Madhu.',
    },
    {
      id: 11,
      verseLabel: 'Shloka 9',
      sanskrit: 'ईश्वरो विक्रमी धन्वी मेधावी विक्रमः क्रमः।\nअनुत्तमो दुराधर्षः कृतज्ञः कृतिरात्मवान्॥',
      transliteration: 'Ishvaro Vikrami Dhanvi Medhavi Vikramah Kramah.\nAnuttamo Duradharshah Kritajnah Kritir Atmavan.',
      meaning: 'The Supreme Lord, the Valorous, the Wielder of the Bow, the Wise, the Mighty-Strider, the Ordered Progression; the Incomparable, the Unassailable, the Knower of all deeds, Action itself, the Master of His own Self.',
    },
    {
      id: 12,
      verseLabel: 'Shloka 10',
      sanskrit: 'सुरेशः शरणं शर्म विश्वरेताः प्रजाभवः।\nअहः संवत्सरो व्यालः प्रत्ययः सर्वदर्शनः॥',
      transliteration: 'Sureshah Sharanam Sharma Vishvaretah Prajabhavah.\nAhah Samvatsaro Vyalah Pratyayah Sarvadarshanah.',
      meaning: 'Lord of the gods, the Refuge, pure Bliss, the Seed of the universe, the Source of beings; the radiant Day, the Year itself, the elusive Serpent, Knowledge itself, the All-Seer.',
    },
    {
      id: 13,
      verseLabel: 'Shloka 11',
      sanskrit: 'अजः सर्वेश्वरः सिद्धः सिद्धिः सर्वादिरच्युतः।\nवृषाकपिरमेयात्मा सर्वयोगविनिःसृतः॥',
      transliteration: 'Ajah Sarveshvarah Siddhah Siddhih Sarvadir Achyutah.\nVrishakapir Ameyatma Sarvayogavinihsritah.',
      meaning: 'The Unborn, the Lord of all, the Ever-Accomplished, Accomplishment itself, the Origin of all, the Unfallen; the bestower of dharma who lifts the earth, the immeasurable Self, detached from and untouched by all bonds of yoga.',
    },
    {
      id: 14,
      verseLabel: 'Shloka 12',
      sanskrit: 'वसुर्वसुमनाः सत्यः समात्मा सम्मितः समः।\nअमोघः पुण्डरीकाक्षो वृषकर्मा वृषाकृतिः॥',
      transliteration: 'Vasur Vasumanah Satyah Samatma Sammitah Samah.\nAmoghah Pundarikaksho Vrishakarma Vrishakritih.',
      meaning: 'The Abode of all, of pure and noble mind, Truth itself, the Equal-Souled, the All-Comprehending, the Impartial; the Unfailing, the lotus-eyed, whose every act is righteous, whose very form is Dharma.',
    },
    {
      id: 15,
      verseLabel: 'Shloka 13',
      sanskrit: 'रुद्रो बहुशिरा बभ्रुर्विश्वयोनिः शुचिश्रवाः।\nअमृतः शाश्वतः स्थाणुर्वरारोहो महातपाः॥',
      transliteration: 'Rudro Bahushira Babhrur Vishvayonih Shuchishravah.\nAmritah Shashvatah Sthanur Vararoho Mahatapah.',
      meaning: 'The Destroyer of sorrow, the many-headed, the Ruler, the Womb of the universe, of sacred glory; the Immortal, the Eternal, the Unchanging Pillar, the auspicious Refuge, of great tapas.',
    },
    {
      id: 16,
      verseLabel: 'Shloka 14',
      sanskrit: 'सर्वगः सर्वविद्भानुर्विष्वक्सेनो जनार्दनः।\nवेदो वेदविदव्यङ्गो वेदाङ्गो वेदवित् कविः॥',
      transliteration: 'Sarvagah Sarvavid Bhanur Vishvakseno Janardanah.\nVedo Vedavid Avyango Vedango Vedavit Kavih.',
      meaning: 'The All-pervading, the All-knowing, the Radiant One, Leader of hosts across the universe, the Tormentor of the wicked; the Vedas themselves, the Knower of the Vedas, the Flawless, whose limbs are the Vedangas, the Knower of the Veda, the Seer.',
    },
    {
      id: 17,
      verseLabel: 'Shloka 15',
      sanskrit: 'लोकाध्यक्षः सुराध्यक्षो धर्माध्यक्षः कृताकृतः।\nचतुरात्मा चतुर्व्यूहश्चतुर्दंष्ट्रश्चतुर्भुजः॥',
      transliteration: 'Lokadhyakshah Suradhyakshah Dharmadhyakshah Kritakritah.\nChaturatma Chaturvyuhash Chaturdamshtrash Chaturbhujah.',
      meaning: 'Overseer of the worlds, Overseer of the gods, Overseer of dharma, both the accomplished effect and the action itself; of four-fold Self, of four manifestations (Vasudeva, Sankarshana, Pradyumna, Aniruddha), of four tusks (as Narasimha), of four arms.',
    },
    {
      id: 18,
      verseLabel: 'Shloka 16',
      sanskrit: 'भ्राजिष्णुर्भोजनं भोक्ता सहिष्णुर्जगदादिजः।\nअनघो विजयो जेता विश्वयोनिः पुनर्वसुः॥',
      transliteration: 'Bhrajishnur Bhojanam Bhokta Sahishnur Jagadadijah.\nAnagho Vijayo Jeta Vishvayonih Punarvasuh.',
      meaning: 'The Ever-Radiant, the Enjoyed, the Enjoyer, the All-forbearing, the first-born of the world; the Sinless, Victory itself, the Conqueror, the Womb of the universe, who dwells again and again.',
    },
    {
      id: 19,
      verseLabel: 'Shloka 17',
      sanskrit: 'उपेन्द्रो वामनः प्रांशुरमोघः शुचिरूर्जितः।\nअतीन्द्रः संग्रहः सर्गो धृतात्मा नियमो यमः॥',
      transliteration: 'Upendro Vamanah Pramshur Amoghah Shuchir Urjitah.\nAtindrah Samgrahah Sargo Dhritatma Niyamo Yamah.',
      meaning: 'The younger brother of Indra, the Dwarf incarnation, the Tall one, the Unfailing, the Pure, the Ever-Vigorous; beyond Indra and the senses, the Gatherer, Creation itself, the self-poised, Restraint, the Controller.',
    },
    {
      id: 20,
      verseLabel: 'Shloka 18',
      sanskrit: 'वेद्यो वैद्यः सदायोगी वीरहा माधवो मधुः।\nअतीन्द्रियो महामायो महोत्साहो महाबलः॥',
      transliteration: 'Vedyo Vaidyah Sadayogi Viraha Madhavo Madhuh.\nAtindriyo Mahamayo Mahotsaho Mahabalah.',
      meaning: 'The One to be known, the supreme Physician, the eternal Yogi, slayer of heroic foes, Madhava, Sweetness itself; beyond the senses, the great Illusionist, of great zeal, of great strength.',
    },
    {
      id: 21,
      verseLabel: 'Shloka 19',
      sanskrit: 'महाबुद्धिर्महावीर्यो महाशक्तिर्महाद्युतिः।\nअनिर्देश्यवपुः श्रीमानमेयात्मा महाद्रिधृक्॥',
      transliteration: 'Mahabuddhir Mahaviryo Mahashaktir Mahadyutih.\nAnirdeshyavapuh Shriman Ameyatma Mahadridhrik.',
      meaning: 'Of great intellect, great valor, great power, great splendor; of indefinable form, the glorious one, the immeasurable Self, the upholder of the great mountain.',
    },
    {
      id: 22,
      verseLabel: 'Shloka 20',
      sanskrit: 'महेष्वासो महीभर्ता श्रीनिवासः सतां गतिः।\nअनिरुद्धः सुरानन्दो गोविन्दो गोविदां पतिः॥',
      transliteration: 'Maheshvaso Mahibharta Shrinivasah Satam Gatih.\nAniruddhah Surananda Govindo Govidam Patih.',
      meaning: 'Wielder of the great bow, bearer of the earth, abode of Shri, refuge of the virtuous; the Unobstructed, bliss of the gods, Govinda, Lord of the knowers of speech.',
    },
    {
      id: 23,
      verseLabel: 'Shloka 21',
      sanskrit: 'मरीचिर्दमनो हंसः सुपर्णो भुजगोत्तमः।\nहिरण्यनाभः सुतपाः पद्मनाभः प्रजापतिः॥',
      transliteration: 'Marichir Damano Hamsah Suparno Bhujagottamah.\nHiranyanabhah Sutapah Padmanabhah Prajapatih.',
      meaning: 'The ray of light, the Chastiser, the Swan, the fair-winged Garuda, the supreme of serpents; of golden navel, of pure austerity, lotus-naveled, Lord of creatures.',
    },
    {
      id: 24,
      verseLabel: 'Shloka 22',
      sanskrit: 'अमृत्युः सर्वदृक् सिंहः सन्धाता सन्धिमान् स्थिरः।\nअजो दुर्मर्षणः शास्ता विश्रुतात्मा सुरारिहा॥',
      transliteration: 'Amrityuh Sarvadrik Simhah Sandhata Sandhiman Sthirah.\nAjo Durmarshanah Shasta Vishrutatma Surariha.',
      meaning: 'The Deathless, the All-Seer, the Lion, the Unifier, the possessor of union, the Steadfast; the Unborn, the Invincible, the Teacher, the renowned Self, slayer of the enemies of the gods.',
    },
    {
      id: 25,
      verseLabel: 'Shloka 23',
      sanskrit: 'गुरुर्गुरुतमो धाम सत्यः सत्यपराक्रमः।\nनिमिषोऽनिमिषः स्रग्वी वाचस्पतिरुदारधीः॥',
      transliteration: 'Gurur Gurutamo Dhama Satyah Satyaparakramah.\nNimisho\'nimishah Sragvi Vachaspatir Udaradhih.',
      meaning: 'The Teacher, the Supreme Teacher, the Abode, Truth itself, of true valor; the winking one in yoga-nidra, the ever-unwinking, the garland-bearer, Lord of speech, of magnanimous intellect.',
    },
    {
      id: 26,
      verseLabel: 'Shloka 24',
      sanskrit: 'अग्रणीर्ग्रामणीः श्रीमान् न्यायो नेता समीरणः।\nसहस्रमूर्धा विश्वात्मा सहस्राक्षः सहस्रपात्॥',
      transliteration: 'Agranir Gramanih Shriman Nyayo Neta Samiranah.\nSahasramurdha Vishvatma Sahasrakshah Sahasrapat.',
      meaning: 'The Leader, the Chief of hosts, the glorious one, Justice itself, the Guide, the Breath of life; thousand-headed, Soul of the universe, thousand-eyed, thousand-footed.',
    },
    {
      id: 27,
      verseLabel: 'Shloka 25',
      sanskrit: 'आवर्तनो निवृत्तात्मा संवृतः संप्रमर्दनः।\nअहःसंवर्तको वह्निरनिलो धरणीधरः॥',
      transliteration: 'Avartano Nivrittatma Samvritah Sampramardanah.\nAhahsamvartako Vahnir Anilo Dharanidharah.',
      meaning: 'The turning wheel of samsara, the withdrawn Self, the Veiled, the Crusher of adharma; who rolls out the days, Fire, Air, the Supporter of the earth.',
    },
    {
      id: 28,
      verseLabel: 'Shloka 26',
      sanskrit: 'सुप्रसादः प्रसन्नात्मा विश्वधृग्विश्वभुग्विभुः।\nसत्कर्ता सत्कृतः साधुर्जह्नुर्नारायणो नरः॥',
      transliteration: 'Suprasadah Prasannatma Vishvadhrig Vishvabhug Vibhuh.\nSatkarta Satkritah Sadhur Jahnur Narayano Narah.',
      meaning: 'The well-graced, the serene Self, Upholder of all, Enjoyer of all, the Omnipresent; Honorer of the good, honored by the good, the Virtuous, the Remover (Jahnu), Narayana, the Guide of men.',
    },
    {
      id: 29,
      verseLabel: 'Shloka 27',
      sanskrit: 'असङ्ख्येयोऽप्रमेयात्मा विशिष्टः शिष्टकृच्छुचिः।\nसिद्धार्थः सिद्धसङ्कल्पः सिद्धिदः सिद्धिसाधनः॥',
      transliteration: 'Asankhyeyo\'prameyatma Vishishtah Shishtakrich Chuchih.\nSiddharthah Siddhasankalpah Siddhidah Siddhisadhanah.',
      meaning: 'The Innumerable, of immeasurable Self, the Distinguished, Maker of the wise, the Pure; whose purpose is ever fulfilled, whose resolve is always accomplished, Giver of siddhi, the very means of accomplishment.',
    },
    {
      id: 30,
      verseLabel: 'Shloka 28',
      sanskrit: 'वृषाही वृषभो विष्णुर्वृषपर्वा वृषोदरः।\nवर्धनो वर्धमानश्च विविक्तः श्रुतिसागरः॥',
      transliteration: 'Vrishahi Vrishabho Vishnur Vrishaparva Vrishodarah.\nVardhano Vardhamanash Cha Viviktah Shrutisagarah.',
      meaning: 'Whose day is dharma, the Showerer of boons, Vishnu, the ladder of dharma, whose belly bears dharma; the Nourisher, the Ever-Growing, the Distinct, the ocean of the Shrutis.',
    },
    {
      id: 31,
      verseLabel: 'Shloka 29',
      sanskrit: 'सुभुजो दुर्धरो वाग्मी महेन्द्रो वसुदो वसुः।\nनैकरूपो बृहद्रूपः शिपिविष्टः प्रकाशनः॥',
      transliteration: 'Subhujo Durdharo Vagmi Mahendro Vasudo Vasuh.\nNaikarupo Brihadrupah Shipivishtah Prakashanah.',
      meaning: 'Of auspicious arms, the Hard-to-hold, the Eloquent, the supreme Indra, the Giver of wealth, Wealth itself; of manifold form, of vast form, who pervades the rays of light, the Illuminator.',
    },
    {
      id: 32,
      verseLabel: 'Shloka 30',
      sanskrit: 'ओजस्तेजोद्युतिधरः प्रकाशात्मा प्रतापनः।\nऋद्धः स्पष्टाक्षरो मन्त्रश्चन्द्रांशुर्भास्करद्युतिः॥',
      transliteration: 'Ojastejodyutidharah Prakashatma Pratapanah.\nRiddhah Spashtaksharo Mantrash Chandramshur Bhaskaradyutih.',
      meaning: 'Bearer of vitality, brilliance and splendor; the luminous Self, the radiant Burner; the Prosperous, of clear syllables (OM), the Mantra itself, moon-rayed, of sun-like radiance.',
    },
    {
      id: 33,
      verseLabel: 'Shloka 31',
      sanskrit: 'अमृतांशूद्भवो भानुः शशबिन्दुः सुरेश्वरः।\nऔषधं जगतः सेतुः सत्यधर्मपराक्रमः॥',
      transliteration: 'Amritamshudbhavo Bhanuh Shashabinduh Sureshvarah.\nAushadham Jagatah Setuh Satyadharmaparakramah.',
      meaning: 'Origin of the nectar-rayed moon, the Sun, the hare-marked moon, Lord of the gods; the Medicine, the Bridge of the world, whose valor is truth and dharma.',
    },
    {
      id: 34,
      verseLabel: 'Shloka 32',
      sanskrit: 'भूतभव्यभवन्नाथः पवनः पावनोऽनलः।\nकामहा कामकृत्कान्तः कामः कामप्रदः प्रभुः॥',
      transliteration: 'Bhutabhavyabhavannathah Pavanah Pavano\'nalah.\nKamaha Kamakrit Kantah Kamah Kamapradah Prabhuh.',
      meaning: 'Lord of the past, future, and present; the Wind, the Purifier, the Fire; destroyer of desires, fulfiller of desires, the Beloved, Desire itself, bestower of desires, the Lord.',
    },
    {
      id: 35,
      verseLabel: 'Shloka 33',
      sanskrit: 'युगादिकृद्युगावर्तो नैकमायो महाशनः।\nअदृश्योऽव्यक्तरूपश्च सहस्रजिदनन्तजित्॥',
      transliteration: 'Yugadikrid Yugavarto Naikamayo Mahashanah.\nAdrishyo\'vyaktarupash Cha Sahasrajid Anantajit.',
      meaning: 'Maker of the beginnings of yugas, the revolver of yugas, of manifold illusions, the great Devourer; invisible, of unmanifest form, conqueror of thousands, the endlessly victorious.',
    },
    {
      id: 36,
      verseLabel: 'Shloka 34',
      sanskrit: 'इष्टोऽविशिष्टः शिष्टेष्टः शिखण्डी नहुषो वृषः।\nक्रोधहा क्रोधकृत्कर्ता विश्वबाहुर्महीधरः॥',
      transliteration: 'Ishto\'vishishtah Shishteshtah Shikhandi Nahusho Vrishah.\nKrodhaha Krodhakrit Karta Vishvabahur Mahidharah.',
      meaning: 'The Beloved, the Undistinguished, beloved of the wise, the crested, the Binder, the Showerer; destroyer of anger, wielder of righteous wrath, the Doer, whose arms are the universe, the Bearer of the earth.',
    },
    {
      id: 37,
      verseLabel: 'Shloka 35',
      sanskrit: 'अच्युतः प्रथितः प्राणः प्राणदो वासवानुजः।\nअपां निधिरधिष्ठानमप्रमत्तः प्रतिष्ठितः॥',
      transliteration: 'Achyutah Prathitah Pranah Pranado Vasavanujah.\nApam Nidhir Adhishthanam Apramattah Pratishthitah.',
      meaning: 'The Unfallen, the Renowned, the Life-breath, the Giver of life, the younger brother of Indra (as Vamana); repository of the waters, the Support, the Ever-vigilant, the Well-established.',
    },
    {
      id: 38,
      verseLabel: 'Shloka 36',
      sanskrit: 'स्कन्दः स्कन्दधरो धुर्यो वरदो वायुवाहनः।\nवासुदेवो बृहद्भानुरादिदेवः पुरन्दरः॥',
      transliteration: 'Skandah Skandadharo Dhuryo Varado Vayuvahanah.\nVasudevo Brihadbhanur Adidevah Purandarah.',
      meaning: 'The Swift-mover, upholder of the righteous, supporter of the yoke, Giver of boons, borne by the wind; Vasudeva, the great light, the primal God, the destroyer of strongholds.',
    },
    {
      id: 39,
      verseLabel: 'Shloka 37',
      sanskrit: 'अशोकस्तारणस्तारः शूरः शौरिर्जनेश्वरः।\nअनुकूलः शतावर्तः पद्मी पद्मनिभेक्षणः॥',
      transliteration: 'Ashokas Taranas Tarah Shurah Shaurir Janeshvarah.\nAnukulah Shatavartah Padmi Padmanibhekshanah.',
      meaning: 'The Sorrowless, the Deliverer, the Savior, the Brave, born in the line of Shura, Lord of beings; the Favorable, of a hundred incarnations, the lotus-bearer, of lotus-petal eyes.',
    },
    {
      id: 40,
      verseLabel: 'Shloka 38',
      sanskrit: 'पद्मनाभोऽरविन्दाक्षः पद्मगर्भः शरीरभृत्।\nमहर्द्धिरृद्धो वृद्धात्मा महाक्षो गरुडध्वजः॥',
      transliteration: 'Padmanabho\'ravindakshah Padmagarbhah Sharirabhrit.\nMaharddhir Riddho Vriddhatma Mahaksho Garudadhvajah.',
      meaning: 'Lotus-naveled, lotus-eyed, the womb of the lotus, bearer of bodies; of great prosperity, the Prosperous, the ancient Self, of great eyes, whose banner is Garuda.',
    },
    {
      id: 41,
      verseLabel: 'Shloka 39',
      sanskrit: 'अतुलः शरभो भीमः समयज्ञो हविर्हरिः।\nसर्वलक्षणलक्षण्यो लक्ष्मीवान् समितिञ्जयः॥',
      transliteration: 'Atulah Sharabho Bhimah Samayajno Havir Harih.\nSarvalakshanalakshanyo Lakshmivan Samitinjayah.',
      meaning: 'The Unequaled, Sharabha (reprover of pride), the Terrible, the knower of occasions, the Oblation, the Remover of sins; known through all auspicious marks, the consort of Lakshmi, the victor in battles.',
    },
    {
      id: 42,
      verseLabel: 'Shloka 40',
      sanskrit: 'विक्षरो रोहितो मार्गो हेतुर्दामोदरः सहः।\nमहीधरो महाभागो वेगवानमिताशनः॥',
      transliteration: 'Viksharo Rohito Margo Heturdamodarah Sahah.\nMahidharo Mahabhago Vegavan Amitashanah.',
      meaning: 'The Immovable, the red-hued, the Path, the Cause, Damodara (whose waist was bound), the Forbearing; Bearer of the earth, of great glory, the Swift, the one whose appetite has no limit.',
    },
    {
      id: 43,
      verseLabel: 'Shloka 41',
      sanskrit: 'उद्भवः क्षोभणो देवः श्रीगर्भः परमेश्वरः।\nकरणं कारणं कर्ता विकर्ता गहनो गुहः॥',
      transliteration: 'Udbhavah Kshobhano Devah Shrigarbhah Parameshvarah.\nKaranam Karanam Karta Vikarta Gahano Guhah.',
      meaning: 'The Source of manifestation, the Agitator, the Shining One, in whose womb lies Shri, the Supreme Lord; the instrument, the cause, the doer, the modifier, the unfathomable, the Hidden.',
    },
    {
      id: 44,
      verseLabel: 'Shloka 42',
      sanskrit: 'व्यवसायो व्यवस्थानः संस्थानः स्थानदो ध्रुवः।\nपरर्द्धिः परमस्पष्टस्तुष्टः पुष्टः शुभेक्षणः॥',
      transliteration: 'Vyavasayo Vyavasthanah Samsthanah Sthanado Dhruvah.\nParardhih Paramaspashtas Tushtah Pushtah Shubhekshanah.',
      meaning: 'Resolve itself, the Regulator, the final abode, the Giver of station, the Fixed; of supreme opulence, the most clearly manifest, the Content, the Nourished, of auspicious gaze.',
    },
    {
      id: 45,
      verseLabel: 'Shloka 43',
      sanskrit: 'रामो विरामो विरजो मार्गो नेयो नयोऽनयः।\nवीरः शक्तिमतां श्रेष्ठो धर्मो धर्मविदुत्तमः॥',
      transliteration: 'Ramo Viramo Virajo Margo Neyo Nayo\'nayah.\nVirah Shaktimatam Shreshtho Dharmo Dharmavid Uttamah.',
      meaning: 'Rama (the delight of all), the cessation of all, the stainless, the Path, the Goal, the Leader, the one beyond guidance; the Hero, the best among the powerful, Dharma itself, the supreme knower of Dharma.',
    },
    {
      id: 46,
      verseLabel: 'Shloka 44',
      sanskrit: 'वैकुण्ठः पुरुषः प्राणः प्राणदः प्रणवः पृथुः।\nहिरण्यगर्भः शत्रुघ्नो व्याप्तो वायुरधोक्षजः॥',
      transliteration: 'Vaikunthah Purushah Pranah Pranadah Pranavah Prithuh.\nHiranyagarbhah Shatrughno Vyapto Vayur Adhokshajah.',
      meaning: 'Vaikuntha, the Cosmic Person, the Life-breath, the Giver of life, OM itself, the Vast; the Golden-wombed, slayer of foes, the All-pervading, the Wind, Adhokshaja (who never falls from his own essence).',
    },
    {
      id: 47,
      verseLabel: 'Shloka 45',
      sanskrit: 'ऋतुः सुदर्शनः कालः परमेष्ठी परिग्रहः।\nउग्रः संवत्सरो दक्षो विश्रामो विश्वदक्षिणः॥',
      transliteration: 'Rituh Sudarshanah Kalah Parameshthi Parigrahah.\nUgrah Samvatsaro Dakshah Vishramo Vishvadakshinah.',
      meaning: 'The seasons themselves, the ever-auspicious-to-behold (wielder of the Sudarshana chakra), Time, dweller in the supreme abode, the Receiver of offerings; the Fierce, the Year, the Skilful, the repose of all, skilful in every direction.',
    },
    {
      id: 48,
      verseLabel: 'Shloka 46',
      sanskrit: 'विस्तारः स्थावरस्थाणुः प्रमाणं बीजमव्ययम्।\nअर्थोऽनर्थो महाकोशो महाभोगो महाधनः॥',
      transliteration: 'Vistarah Sthavarah Sthanuh Pramanam Bijam Avyayam.\nArtho\'nartho Mahakosho Mahabhogo Mahadhanah.',
      meaning: 'The Expanse, the Immovable, the Pillar, the Standard, the Seed, the Inexhaustible; Wealth, beyond need of wealth, the great Treasury, the great Enjoyment, of great riches.',
    },
    {
      id: 49,
      verseLabel: 'Shloka 47',
      sanskrit: 'अनिर्विण्णः स्थविष्ठोऽभूर्धर्मयूपो महामखः।\nनक्षत्रनेमिर्नक्षत्री क्षमः क्षामः समीहनः॥',
      transliteration: 'Anirvinnah Sthavishtho\'bhur Dharmayupo Mahamakhah.\nNakshatranemir Nakshatri Kshamah Kshamah Samihanah.',
      meaning: 'The Unwearied, the most solid, the Self-existent, the Pillar of dharma, the great Sacrifice; the nave of the constellations, the Lord of stars, the Patient, the Forbearing, who wishes well for all.',
    },
    {
      id: 50,
      verseLabel: 'Shloka 48',
      sanskrit: 'यज्ञ इज्यो महेज्यश्च क्रतुः सत्रं सतां गतिः।\nसर्वदर्शी विमुक्तात्मा सर्वज्ञो ज्ञानमुत्तमम्॥',
      transliteration: 'Yajna Ijyo Mahejyash Cha Kratuh Satram Satam Gatih.\nSarvadarshi Vimuktatma Sarvajno Jnanam Uttamam.',
      meaning: 'Sacrifice itself, the Worshiped, worthy of great worship, the Kratu, the Soma-sacrifice, refuge of the virtuous; All-Seer, the liberated Self, the All-Knower, the highest Knowledge.',
    },
    {
      id: 51,
      verseLabel: 'Shloka 49',
      sanskrit: 'सुव्रतः सुमुखः सूक्ष्मः सुघोषः सुखदः सुहृत्।\nमनोहरो जितक्रोधो वीरबाहुर्विदारणः॥',
      transliteration: 'Suvratah Sumukhah Sukshmah Sughoshah Sukhadah Suhrit.\nManoharo Jitakrodho Virabahur Vidaranah.',
      meaning: 'Of good vows, of pleasing face, the Subtle, of auspicious sound, giver of joy, the true friend; stealer of minds, conqueror of anger, of heroic arms, the tearer-asunder of evil.',
    },
    {
      id: 52,
      verseLabel: 'Shloka 50',
      sanskrit: 'स्वापनः स्ववशो व्यापी नैकात्मा नैककर्मकृत्।\nवत्सरो वत्सलो वत्सी रत्नगर्भो धनेश्वरः॥',
      transliteration: 'Svapanah Svavasho Vyapi Naikatma Naikakarmakrit.\nVatsaro Vatsalo Vatsi Ratnagarbho Dhaneshvarah.',
      meaning: 'The causer of the sleep of maya, the Self-dependent, the Pervader, of manifold forms, doer of manifold deeds; the Dweller-in-all, the Affectionate, the tender father, the womb of jewels, Lord of wealth.',
    },
    {
      id: 53,
      verseLabel: 'Shloka 51',
      sanskrit: 'धर्मगुब्धर्मकृद्धर्मी सदसत्क्षरमक्षरम्।\nअविज्ञाता सहस्रांशुर्विधाता कृतलक्षणः॥',
      transliteration: 'Dharmagub Dharmakrid Dharmi Sadasat Ksharam Aksharam.\nAvijnata Sahasramshur Vidhata Kritalakshanah.',
      meaning: 'Protector of dharma, doer of dharma, possessor of dharma, Being and Non-being, the perishable and the imperishable; the Unknowable, the thousand-rayed, the Dispenser, of fixed characteristics.',
    },
    {
      id: 54,
      verseLabel: 'Shloka 52',
      sanskrit: 'गभस्तिनेमिः सत्त्वस्थः सिंहो भूतमहेश्वरः।\nआदिदेवो महादेवो देवेशो देवभृद्गुरुः॥',
      transliteration: 'Gabhastinemih Sattvasthah Simho Bhutamaheshvarah.\nAdidevo Mahadevo Devesho Devabhrid Guruh.',
      meaning: 'The nave of light-rays, seated in sattva, the Lion, the great Lord of beings; the primal God, the great God, Lord of the gods, sustainer of gods, the Teacher.',
    },
    {
      id: 55,
      verseLabel: 'Shloka 53',
      sanskrit: 'उत्तरो गोपतिर्गोप्ता ज्ञानगम्यः पुरातनः।\nशरीरभूतभृद्भोक्ता कपीन्द्रो भूरिदक्षिणः॥',
      transliteration: 'Uttaro Gopatir Gopta Jnanagamyah Puratanah.\nSharirabhutabhrid Bhokta Kapindro Bhuridakshinah.',
      meaning: 'The Supreme, Lord of the rays (and cows), the Protector, attainable only through wisdom, the Ancient; sustainer of embodied beings, the Enjoyer, Lord of monkeys (as Rama), of abundant gifts.',
    },
    {
      id: 56,
      verseLabel: 'Shloka 54',
      sanskrit: 'सोमपोऽमृतपः सोमः पुरुजित्पुरुसत्तमः।\nविनयो जयः सत्यसन्धो दाशार्हः सात्वतां पतिः॥',
      transliteration: 'Somapo\'mritapah Somah Purujit Purusattamah.\nVinayo Jayah Satyasandho Dasharhah Satvatam Patih.',
      meaning: 'Drinker of Soma, drinker of nectar, Soma itself, conqueror of many, the Supreme among beings; Humility, Victory, true to His pledge, the descendant of Dasharha, Lord of the Satvatas.',
    },
    {
      id: 57,
      verseLabel: 'Shloka 55',
      sanskrit: 'जीवो विनयिता साक्षी मुकुन्दोऽमितविक्रमः।\nअम्भोनिधिरनन्तात्मा महोदधिशयोऽन्तकः॥',
      transliteration: 'Jivo Vinayita Sakshi Mukundo\'mitavikramah.\nAmbhonidhir Anantatma Mahodadhishayo\'ntakah.',
      meaning: 'The living one, the Humbler of the arrogant, the Witness, Mukunda (the Giver of liberation), of boundless prowess; the repository of waters, of infinite Self, who reposes on the great ocean, the End of all.',
    },
    {
      id: 58,
      verseLabel: 'Shloka 56',
      sanskrit: 'अजो महार्हः स्वाभाव्यो जितामित्रः प्रमोदनः।\nआनन्दो नन्दनो नन्दः सत्यधर्मा त्रिविक्रमः॥',
      transliteration: 'Ajo Maharhah Svabhavyo Jitamitrah Pramodanah.\nAnando Nandano Nandah Satyadharma Trivikramah.',
      meaning: 'The Unborn, worthy of highest worship, settled in His own nature, conqueror of foes, who makes others rejoice; Bliss, the Bestower of joy, Joy itself, of true dharma, Trivikrama of three strides.',
    },
    {
      id: 59,
      verseLabel: 'Shloka 57',
      sanskrit: 'महर्षिः कपिलाचार्यः कृतज्ञो मेदिनीपतिः।\nत्रिपदस्त्रिदशाध्यक्षो महाशृङ्गः कृतान्तकृत्॥',
      transliteration: 'Maharshih Kapilacharyah Kritajno Medinipatih.\nTripadas Tridashadhyaksho Mahashringah Kritantakrit.',
      meaning: 'The great sage, the Acharya Kapila, the knower of deeds, Lord of the earth; of three strides, overseer of the thirty gods, of the great horn (as Matsya), the ender of the created order at pralaya.',
    },
    {
      id: 60,
      verseLabel: 'Shloka 58',
      sanskrit: 'महावराहो गोविन्दः सुषेणः कनकाङ्गदी।\nगुह्यो गभीरो गहनो गुप्तश्चक्रगदाधरः॥',
      transliteration: 'Mahavaraho Govindah Sushenah Kanakangadi.\nGuhyo Gabhiro Gahano Guptash Chakragadadharah.',
      meaning: 'The great Boar (Varaha), Govinda, of excellent army, with golden armlets; the Hidden, the Profound, the Unfathomable, the Concealed, wielder of the discus and mace.',
    },
    {
      id: 61,
      verseLabel: 'Shloka 59',
      sanskrit: 'वेधाः स्वाङ्गोऽजितः कृष्णो दृढः सङ्कर्षणोऽच्युतः।\nवरुणो वारुणो वृक्षः पुष्कराक्षो महामनाः॥',
      transliteration: 'Vedhah Svango\'jitah Krishno Dridhah Sankarshano\'chyutah.\nVaruno Varuno Vrikshah Pushkaraksho Mahamanah.',
      meaning: 'The Creator, of graceful limbs, the Invincible, Krishna, the Firm, Sankarshana the Unfallen; Varuna (Lord of waters), the son of Varuna, the Tree, lotus-eyed, the magnanimous.',
    },
    {
      id: 62,
      verseLabel: 'Shloka 60',
      sanskrit: 'भगवान् भगहाऽऽनन्दी वनमाली हलायुधः।\nआदित्यो ज्योतिरादित्यः सहिष्णुर्गतिसत्तमः॥',
      transliteration: 'Bhagavan Bhagaha\'nandi Vanamali Halayudhah.\nAdityo Jyotiradityah Sahishnur Gatisattamah.',
      meaning: 'The Bhagavan, the Destroyer of evil fortunes, the Blissful, wearer of the forest garland, the plough-armed (as Balarama); son of Aditi, the luminous Sun, the Patient, the supreme Goal.',
    },
    {
      id: 63,
      verseLabel: 'Shloka 61',
      sanskrit: 'सुधन्वा खण्डपरशुर्दारुणो द्रविणप्रदः।\nदिविस्पृक् सर्वदृग्व्यासो वाचस्पतिरयोनिजः॥',
      transliteration: 'Sudhanva Khandaparashur Daruno Dravinapradah.\nDivisprik Sarvadrig Vyaso Vachaspatir Ayonijah.',
      meaning: 'Of excellent bow, wielder of the terrible axe (as Parashurama), the Fierce, the Giver of wealth; touching the heavens, the All-seeing Vyasa, Lord of speech, the one not born of a womb.',
    },
    {
      id: 64,
      verseLabel: 'Shloka 62',
      sanskrit: 'त्रिसामा सामगः साम निर्वाणं भेषजं भिषक्।\nसंन्यासकृच्छमः शान्तो निष्ठा शान्तिः परायणम्॥',
      transliteration: 'Trisama Samagah Sama Nirvanam Bheshajam Bhishak.\nSannyasakrich Chhamah Shanto Nishtha Shantih Parayanam.',
      meaning: 'Of the three Samans, the singer of Saman, the Saman itself, Nirvana, the Medicine, the Physician; the establisher of sannyasa, the peaceful, the Serene, Steadfastness, Peace, the supreme Refuge.',
    },
    {
      id: 65,
      verseLabel: 'Shloka 63',
      sanskrit: 'शुभाङ्गः शान्तिदः स्रष्टा कुमुदः कुवलेशयः।\nगोहितो गोपतिर्गोप्ता वृषभाक्षो वृषप्रियः॥',
      transliteration: 'Shubhangah Shantidah Srashta Kumudah Kuvaleshayah.\nGohito Gopatir Gopta Vrishabhaksho Vrishapriyah.',
      meaning: 'Of auspicious form, giver of peace, the Creator, the rejoicer in the earth, who reposes in the waters; beneficent to dharma, Lord of cows, their protector, whose glance rains blessings, the lover of righteousness.',
    },
    {
      id: 66,
      verseLabel: 'Shloka 64',
      sanskrit: 'अनिवर्ती निवृत्तात्मा संक्षेप्ता क्षेमकृच्छिवः।\nश्रीवत्सवक्षाः श्रीवासः श्रीपतिः श्रीमतां वरः॥',
      transliteration: 'Anivarti Nivrittatma Samkshepta Kshemakrich Chhivah.\nShrivatsavakshah Shrivasah Shripatih Shrimatam Varah.',
      meaning: 'Never-turning-back, the withdrawn Self, the Condenser of all, the Benefactor, the Auspicious; whose chest bears the Shrivatsa, the abode of Shri, Lord of Shri, best among the glorious.',
    },
    {
      id: 67,
      verseLabel: 'Shloka 65',
      sanskrit: 'श्रीदः श्रीशः श्रीनिवासः श्रीनिधिः श्रीविभावनः।\nश्रीधरः श्रीकरः श्रेयः श्रीमान् लोकत्रयाश्रयः॥',
      transliteration: 'Shridah Shrishah Shrinivasah Shrinidhih Shrivibhavanah.\nShridharah Shrikarah Shreyah Shriman Lokatrayashrayah.',
      meaning: 'Giver of Shri, Lord of Shri, abode of Shri, treasury of Shri, manifester of Shri; bearer of Shri, causer of Shri, the Good, the glorious, the refuge of the three worlds.',
    },
    {
      id: 68,
      verseLabel: 'Shloka 66',
      sanskrit: 'स्वक्षः स्वङ्गः शतानन्दो नन्दिर्ज्योतिर्गणेश्वरः।\nविजितात्मा विधेयात्मा सत्कीर्तिश्छिन्नसंशयः॥',
      transliteration: 'Svakshah Svangah Shatanando Nandir Jyotir Ganeshvarah.\nVijitatma Vidheyatma Satkirtish Chhinnasamshayah.',
      meaning: 'Of beautiful eyes, of beautiful limbs, of a hundred joys, the Joyous, Lord of hosts of lights; self-controlled, the compliant Self, of true renown, the cleaver of doubt.',
    },
    {
      id: 69,
      verseLabel: 'Shloka 67',
      sanskrit: 'उदीर्णः सर्वतश्चक्षुरनीशः शाश्वतस्थिरः।\nभूशयो भूषणो भूतिर्विशोकः शोकनाशनः॥',
      transliteration: 'Udirnah Sarvatash Chakshur Anishah Shashvatasthirah.\nBhushayo Bhushano Bhutir Vishokah Shokanashanah.',
      meaning: 'The Exalted, whose eyes are on every side, beyond any superior, eternally steady; who rested on the earth (as Rama), the Ornament, Existence itself, the Sorrowless, the destroyer of sorrow.',
    },
    {
      id: 70,
      verseLabel: 'Shloka 68',
      sanskrit: 'अर्चिष्मानर्चितः कुम्भो विशुद्धात्मा विशोधनः।\nअनिरुद्धोऽप्रतिरथः प्रद्युम्नोऽमितविक्रमः॥',
      transliteration: 'Archishman Architah Kumbho Vishuddhatma Vishodhanah.\nAniruddho\'pratirathah Pradyumno\'mitavikramah.',
      meaning: 'The Effulgent, the Worshiped, the Pot that holds all, of pure Self, the Purifier; Aniruddha, the matchless warrior, Pradyumna, of boundless prowess.',
    },
    {
      id: 71,
      verseLabel: 'Shloka 69',
      sanskrit: 'कालनेमिनिहा वीरः शौरिः शूरजनेश्वरः।\nत्रिलोकात्मा त्रिलोकेशः केशवः केशिहा हरिः॥',
      transliteration: 'Kalaneminiha Virah Shaurih Shurajaneshvarah.\nTrilokatma Trilokeshah Keshavah Keshiha Harih.',
      meaning: 'Slayer of Kalanemi, the Hero, the scion of Shura, Lord of the brave; Soul of the three worlds, Lord of the three worlds, Keshava, slayer of Keshi, Hari.',
    },
    {
      id: 72,
      verseLabel: 'Shloka 70',
      sanskrit: 'कामदेवः कामपालः कामी कान्तः कृतागमः।\nअनिर्देश्यवपुर्विष्णुर्वीरोऽनन्तो धनञ्जयः॥',
      transliteration: 'Kamadevah Kamapalah Kami Kantah Kritagamah.\nAnirdeshyavapur Vishnur Viro\'nanto Dhananjayah.',
      meaning: 'Lord of desire, protector of the desirable, the Desirous, the beloved, revealer of scriptures; of indescribable form, Vishnu, the Hero, the Infinite, the conqueror of wealth (as Arjuna).',
    },
    {
      id: 73,
      verseLabel: 'Shloka 71',
      sanskrit: 'ब्रह्मण्यो ब्रह्मकृद् ब्रह्मा ब्रह्म ब्रह्मविवर्धनः।\nब्रह्मविद् ब्राह्मणो ब्रह्मी ब्रह्मज्ञो ब्राह्मणप्रियः॥',
      transliteration: 'Brahmanyo Brahmakrid Brahma Brahma Brahmavivardhanah.\nBrahmavid Brahmano Brahmi Brahmajno Brahmanapriyah.',
      meaning: 'Beloved of the brahmanas, maker of Brahma, Brahma himself, Brahman absolute, promoter of Brahman; knower of Brahman, a brahmana, possessor of Brahma, the Brahma-knowing, lover of brahmanas.',
    },
    {
      id: 74,
      verseLabel: 'Shloka 72',
      sanskrit: 'महाक्रमो महाकर्मा महातेजा महोरगः।\nमहाक्रतुर्महायज्वा महायज्ञो महाहविः॥',
      transliteration: 'Mahakramo Mahakarma Mahateja Mahoragah.\nMahakratur Mahayajva Mahayajno Mahahavih.',
      meaning: 'Of great stride, of great deeds, of great splendor, the great serpent (Shesha); the great sacrifice, the great sacrificer, the great yajna, the great oblation.',
    },
    {
      id: 75,
      verseLabel: 'Shloka 73',
      sanskrit: 'स्तव्यः स्तवप्रियः स्तोत्रं स्तुतिः स्तोता रणप्रियः।\nपूर्णः पूरयिता पुण्यः पुण्यकीर्तिरनामयः॥',
      transliteration: 'Stavyah Stavapriyah Stotram Stutih Stota Ranapriyah.\nPurnah Purayita Punyah Punyakirtir Anamayah.',
      meaning: 'The praiseworthy, the lover of praise, the hymn itself, praise itself, the praiser, the delighter in battle; the Full, the Fulfiller, the Holy, of holy fame, the ever-healthy.',
    },
    {
      id: 76,
      verseLabel: 'Shloka 74',
      sanskrit: 'मनोजवस्तीर्थकरो वसुरेता वसुप्रदः।\nवसुप्रदो वासुदेवो वसुर्वसुमना हविः॥',
      transliteration: 'Manojavas Tirthakaro Vasureta Vasupradah.\nVasuprado Vasudevo Vasur Vasumana Havih.',
      meaning: 'Swift as the mind, founder of sacred fords, of golden seed, bestower of wealth; bestower of the supreme wealth of liberation, Vasudeva, the Abode, of pure mind, the oblation.',
    },
    {
      id: 77,
      verseLabel: 'Shloka 75',
      sanskrit: 'सद्गतिः सत्कृतिः सत्ता सद्भूतिः सत्परायणः।\nशूरसेनो यदुश्रेष्ठः सन्निवासः सुयामुनः॥',
      transliteration: 'Sadgatih Satkritih Satta Sadbhutih Satparayanah.\nShurasenah Yadushreshthah Sannivasah Suyamunah.',
      meaning: 'The good refuge, good deeds embodied, pure Being, manifest reality, the supreme goal of the good; of a heroic army, best of the Yadus, the abode of the good, surrounded by the gopis of the Yamuna.',
    },
    {
      id: 78,
      verseLabel: 'Shloka 76',
      sanskrit: 'भूतावासो वासुदेवः सर्वासुनिलयोऽनलः।\nदर्पहा दर्पदो दृप्तो दुर्धरोऽथापराजितः॥',
      transliteration: 'Bhutavaso Vasudevah Sarvasunilayo\'nalah.\nDarpaha Darpado Dripto Durdharo\'thaparajitah.',
      meaning: 'Abode of beings, Vasudeva, the resting-place of all life-breaths, the Fire; destroyer of pride, bestower of pride in the righteous, the exalted, the hard-to-hold, the undefeated.',
    },
    {
      id: 79,
      verseLabel: 'Shloka 77',
      sanskrit: 'विश्वमूर्तिर्महामूर्तिर्दीप्तमूर्तिरमूर्तिमान्।\nअनेकमूर्तिरव्यक्तः शतमूर्तिः शताननः॥',
      transliteration: 'Vishvamurtir Mahamurtir Diptamurtir Amurtiman.\nAnekamurtir Avyaktah Shatamurtih Shatananah.',
      meaning: 'Of universal form, of great form, of luminous form, the formless; of manifold forms, the Unmanifest, of a hundred forms, of a hundred faces.',
    },
    {
      id: 80,
      verseLabel: 'Shloka 78',
      sanskrit: 'एको नैकः सवः कः किं यत्तत्पदमनुत्तमम्।\nलोकबन्धुर्लोकनाथो माधवो भक्तवत्सलः॥',
      transliteration: 'Eko Naikah Savah Kah Kim Yat Tat Padam Anuttamam.\nLokabandhur Lokanatho Madhavo Bhaktavatsalah.',
      meaning: 'The One, yet the Many, the Soma-sacrifice, Who?, What?, That which is, the unparalleled supreme state; friend of the world, Lord of the world, Madhava, lover of devotees.',
    },
    {
      id: 81,
      verseLabel: 'Shloka 79',
      sanskrit: 'सुवर्णवर्णो हेमाङ्गो वराङ्गश्चन्दनाङ्गदी।\nवीरहा विषमः शून्यो घृताशीरचलश्चलः॥',
      transliteration: 'Suvarnavarno Hemango Varangash Chandanangadi.\nViraha Vishamah Shunyo Ghritashir Achalash Chalah.',
      meaning: 'Of golden hue, of golden limbs, of graceful form, adorned with sandal-paste armlets; slayer of heroic foes, the unequaled, the Void, whose blessings are pure as ghee, the Steady and the Mover.',
    },
    {
      id: 82,
      verseLabel: 'Shloka 80',
      sanskrit: 'अमानी मानदो मान्यो लोकस्वामी त्रिलोकधृक्।\nसुमेधा मेधजो धन्यः सत्यमेधा धराधरः॥',
      transliteration: 'Amani Manado Manyo Lokasvami Trilokadhrik.\nSumedha Medhajo Dhanyah Satyamedha Dharadharah.',
      meaning: 'Free of pride, the bestower of honor, the venerable, the Lord of the world, upholder of the three worlds; of noble intellect, born of sacrifice, the blessed, of true wisdom, supporter of the earth.',
    },
    {
      id: 83,
      verseLabel: 'Shloka 81',
      sanskrit: 'तेजोवृषो द्युतिधरः सर्वशस्त्रभृतां वरः।\nप्रग्रहो निग्रहो व्यग्रो नैकशृङ्गो गदाग्रजः॥',
      transliteration: 'Tejovrisho Dyutidharah Sarvashastrabhritam Varah.\nPragraho Nigraho Vyagro Naikashringo Gadagrajah.',
      meaning: 'The Shower of splendor, bearer of radiance, best among the bearers of weapons; the Acceptor of devotion, the Restrainer, the ever-eager Protector, of many horns, elder brother of Gada (Krishna).',
    },
    {
      id: 84,
      verseLabel: 'Shloka 82',
      sanskrit: 'चतुर्मूर्तिश्चतुर्बाहुश्चतुर्व्यूहश्चतुर्गतिः।\nचतुरात्मा चतुर्भावश्चतुर्वेदविदेकपात्॥',
      transliteration: 'Chaturmurtish Chaturbahush Chaturvyuhash Chaturgatih.\nChaturatma Chaturbhavash Chaturvedavid Ekapat.',
      meaning: 'Of four forms, of four arms, of four-fold manifestation, of four destinies; of four-fold Self, of four states, knower of the four Vedas, the one-footed (Supreme).',
    },
    {
      id: 85,
      verseLabel: 'Shloka 83',
      sanskrit: 'समावर्तोऽनिवृत्तात्मा दुर्जयो दुरतिक्रमः।\nदुर्लभो दुर्गमो दुर्गो दुरावासो दुरारिहा॥',
      transliteration: 'Samavarto\'nivrittatma Durjayo Duratikramah.\nDurlabho Durgamo Durgo Duravaso Durariha.',
      meaning: 'The supreme Wheel of samsara, the Self that never turns back, hard to conquer, not to be transgressed; hard to attain, hard to reach, the inaccessible fortress, hard to dwell in, the slayer of invincible foes.',
    },
    {
      id: 86,
      verseLabel: 'Shloka 84',
      sanskrit: 'शुभाङ्गो लोकसारङ्गः सुतन्तुस्तन्तुवर्धनः।\nइन्द्रकर्मा महाकर्मा कृतकर्मा कृतागमः॥',
      transliteration: 'Shubhango Lokasarangah Sutantus Tantuvardhanah.\nIndrakarma Mahakarma Kritakarma Kritagamah.',
      meaning: 'Of auspicious limbs, the essence of the world, of excellent thread, the extender of the thread of existence; of Indra-like deeds, of great deeds, having accomplished all deeds, the revealer of scriptures.',
    },
    {
      id: 87,
      verseLabel: 'Shloka 85',
      sanskrit: 'उद्भवः सुन्दरः सुन्दो रत्ननाभः सुलोचनः।\nअर्को वाजसनः शृङ्गी जयन्तः सर्वविज्जयी॥',
      transliteration: 'Udbhavah Sundarah Sundo Ratnanabhah Sulochanah.\nArko Vajasanah Shringi Jayantah Sarvavijjayi.',
      meaning: 'The Source, the Beautiful, the Charming, of jeweled navel, of lovely eyes; the Sun, the giver of food, the horned (as Matsya), Victorious, the all-knowing Conqueror.',
    },
    {
      id: 88,
      verseLabel: 'Shloka 86',
      sanskrit: 'सुवर्णबिन्दुरक्षोभ्यः सर्ववागीश्वरेश्वरः।\nमहाह्रदो महागर्तो महाभूतो महानिधिः॥',
      transliteration: 'Suvarnabindur Akshobhyah Sarvavagishvareshvarah.\nMahahrado Mahagarto Mahabhuto Mahanidhih.',
      meaning: 'The golden-dot, the Unperturbed, the Lord of all masters of speech; the great lake, the great chasm (of maya), the great being, the great treasure.',
    },
    {
      id: 89,
      verseLabel: 'Shloka 87',
      sanskrit: 'कुमुदः कुन्दरः कुन्दः पर्जन्यः पावनोऽनिलः।\nअमृताशोऽमृतवपुः सर्वज्ञः सर्वतोमुखः॥',
      transliteration: 'Kumudah Kundarah Kundah Parjanyah Pavano\'nilah.\nAmritasho\'mritavapuh Sarvajnah Sarvatomukhah.',
      meaning: 'The delighter in earth, the protector of the earth, pure as jasmine, the rain-cloud, the Purifier, the Wind; whose food is nectar, of nectar-like body, the All-knowing, whose faces are everywhere.',
    },
    {
      id: 90,
      verseLabel: 'Shloka 88',
      sanskrit: 'सुलभः सुव्रतः सिद्धः शत्रुजिच्छत्रुतापनः।\nन्यग्रोधोऽदुम्बरोऽश्वत्थश्चाणूरान्ध्रनिषूदनः॥',
      transliteration: 'Sulabhah Suvratah Siddhah Shatrujich Chhatrutapanah.\nNyagrodho\'dumbaro\'shvatthash Chanurandhranishudanah.',
      meaning: 'Easily attained, of noble vows, the Perfected, victor over foes, tormentor of foes; the banyan, the udumbara, the ashvattha, slayer of Chanura and the Andhras.',
    },
    {
      id: 91,
      verseLabel: 'Shloka 89',
      sanskrit: 'सहस्रार्चिः सप्तजिह्वः सप्तैधाः सप्तवाहनः।\nअमूर्तिरनघोऽचिन्त्यो भयकृद्भयनाशनः॥',
      transliteration: 'Sahasrarchih Saptajihvah Saptaidhah Saptavahanah.\nAmurtir Anagho\'chintyo Bhayakrid Bhayanashanah.',
      meaning: 'Of a thousand rays, of seven tongues of flame, of sevenfold fuel, of seven mounts (the Sun\'s horses); the Formless, the Sinless, the Inconceivable, the Causer of fear to the wicked, the destroyer of fear for devotees.',
    },
    {
      id: 92,
      verseLabel: 'Shloka 90',
      sanskrit: 'अणुर्बृहत्कृशः स्थूलो गुणभृन्निर्गुणो महान्।\nअधृतः स्वधृतः स्वास्यः प्राग्वंशो वंशवर्धनः॥',
      transliteration: 'Anur Brihat Krishah Sthulo Gunabhrin Nirguno Mahan.\nAdhritah Svadhritah Svasyah Pragvamsho Vamshavardhanah.',
      meaning: 'Subtler than the atom, yet the Vast; the lean, the stout; bearer of qualities, beyond qualities, the great; unsupported, self-sustained, of auspicious face, of ancient lineage, the promoter of the dynasty.',
    },
    {
      id: 93,
      verseLabel: 'Shloka 91',
      sanskrit: 'भारभृत्कथितो योगी योगीशः सर्वकामदः।\nआश्रमः श्रमणः क्षामः सुपर्णो वायुवाहनः॥',
      transliteration: 'Bharabhrit Kathito Yogi Yogishah Sarvakamadah.\nAshramah Shramanah Kshamah Suparno Vayuvahanah.',
      meaning: 'Bearer of the earth\'s burden, the celebrated, the Yogi, Lord of yogis, bestower of all desires; the shelter, the humbler of pride, the Reducer, the fair-winged, whose mount is the wind.',
    },
    {
      id: 94,
      verseLabel: 'Shloka 92',
      sanskrit: 'धनुर्धरो धनुर्वेदो दण्डो दमयिता दमः।\nअपराजितः सर्वसहो नियन्ताऽनियमोऽयमः॥',
      transliteration: 'Dhanurdharo Dhanurvedo Dando Damayita Damah.\nAparajitah Sarvasaho Niyanta\'niyamo\'yamah.',
      meaning: 'Wielder of the bow, knower of Dhanur-Veda, the Rod of discipline, the Subduer, Restraint itself; the Undefeated, the all-enduring, the Director, beyond rule, beyond constraint.',
    },
    {
      id: 95,
      verseLabel: 'Shloka 93',
      sanskrit: 'सत्त्ववान् सात्त्विकः सत्यः सत्यधर्मपरायणः।\nअभिप्रायः प्रियार्होऽर्हः प्रियकृत् प्रीतिवर्धनः॥',
      transliteration: 'Sattvavan Sattvikah Satyah Satyadharmaparayanah.\nAbhiprayah Priyarho\'rhah Priyakrit Pritivardhanah.',
      meaning: 'Full of sattva, of pure sattvic nature, the Truth, devoted to Truth and Dharma; the goal of the aspiring, worthy of love, the worthy, doer of dear deeds, the increaser of love.',
    },
    {
      id: 96,
      verseLabel: 'Shloka 94',
      sanskrit: 'विहायसगतिर्ज्योतिः सुरुचिर्हुतभुग्विभुः।\nरविर्विरोचनः सूर्यः सविता रविलोचनः॥',
      transliteration: 'Vihayasagatir Jyotih Suruchir Hutabhug Vibhuh.\nRavir Virochanah Suryah Savita Ravilochanah.',
      meaning: 'The mover through the heavens, the Light, of fair radiance, consumer of oblations, the all-pervading; the Sun, the Brightly-shining, the Surya, the Inspirer, whose eye is the sun.',
    },
    {
      id: 97,
      verseLabel: 'Shloka 95',
      sanskrit: 'अनन्तो हुतभुग्भोक्ता सुखदो नैकजोऽग्रजः।\nअनिर्विण्णः सदामर्षी लोकाधिष्ठानमद्भुतः॥',
      transliteration: 'Ananto Hutabhug Bhokta Sukhado Naikajo\'grajah.\nAnirvinnah Sadamarshi Lokadhishthanam Adbhutah.',
      meaning: 'The Infinite, consumer of oblations, the Enjoyer, giver of joy, born many times, the first-born; the Undespondent, the ever-forgiving, the foundation of the worlds, the Wonderful.',
    },
    {
      id: 98,
      verseLabel: 'Shloka 96',
      sanskrit: 'सनात्सनातनतमः कपिलः कपिरव्ययः।\nस्वस्तिदः स्वस्तिकृत् स्वस्ति स्वस्तिभुक् स्वस्तिदक्षिणः॥',
      transliteration: 'Sanat Sanatanatamah Kapilah Kapir Avyayah.\nSvastidah Svastikrit Svasti Svastibhuk Svastidakshinah.',
      meaning: 'The Ancient, the most Eternal, Kapila, the Boar, the Imperishable; giver of auspiciousness, doer of auspiciousness, Auspiciousness itself, enjoyer of auspiciousness, the bestower of auspicious gifts.',
    },
    {
      id: 99,
      verseLabel: 'Shloka 97',
      sanskrit: 'अरौद्रः कुण्डली चक्री विक्रम्यूर्जितशासनः।\nशब्दातिगः शब्दसहः शिशिरः शर्वरीकरः॥',
      transliteration: 'Araudrah Kundali Chakri Vikramyurjitashasanah.\nShabdatigah Shabdasahah Shishirah Sharvarikarah.',
      meaning: 'The non-furious, the wearer of earrings, wielder of the discus, the Valorous, whose decree prevails; beyond the reach of words, the bearer of the Vedas, the Cool, the maker of night.',
    },
    {
      id: 100,
      verseLabel: 'Shloka 98',
      sanskrit: 'अक्रूरः पेशलो दक्षो दक्षिणः क्षमिणां वरः।\nविद्वत्तमो वीतभयः पुण्यश्रवणकीर्तनः॥',
      transliteration: 'Akrurah Peshalo Daksho Dakshinah Kshaminam Varah.\nVidvattamo Vitabhayah Punyashravanakirtanah.',
      meaning: 'Free from cruelty, the Graceful, the Dexterous, the Liberal, best among the patient; the most learned, free from fear, whose hearing and singing bring merit.',
    },
    {
      id: 101,
      verseLabel: 'Shloka 99',
      sanskrit: 'उत्तारणो दुष्कृतिहा पुण्यो दुःस्वप्ननाशनः।\nवीरहा रक्षणः सन्तो जीवनं पर्यवस्थितः॥',
      transliteration: 'Uttarano Dushkritiha Punyo Duhsvapnanashanah.\nViraha Rakshanah Santo Jivanam Paryavasthitah.',
      meaning: 'The Rescuer, destroyer of evil deeds, the Holy, remover of bad dreams; slayer of heroic demons, the Protector, of the good, Life itself, the all-pervading.',
    },
    {
      id: 102,
      verseLabel: 'Shloka 100',
      sanskrit: 'अनन्तरूपोऽनन्तश्रीर्जितमन्युर्भयापहः।\nचतुरश्रो गभीरात्मा विदिशो व्यादिशो दिशः॥',
      transliteration: 'Anantarupo\'nantashrir Jitamanyur Bhayapahah.\nChaturashro Gabhiratma Vidisho Vyadisho Dishah.',
      meaning: 'Of infinite forms, of boundless glory, conqueror of anger, dispeller of fear; perfectly square in justice, of profound Self, the guide, the commander, the revealer of directions.',
    },
    {
      id: 103,
      verseLabel: 'Shloka 101',
      sanskrit: 'अनादिर्भूर्भुवो लक्ष्मीः सुवीरो रुचिराङ्गदः।\nजननो जनजन्मादिर्भीमो भीमपराक्रमः॥',
      transliteration: 'Anadir Bhur Bhuvo Lakshmih Suviro Ruchirangadah.\nJanano Janajanmadir Bhimo Bhimaparakramah.',
      meaning: 'The Beginningless, the earth, the glory of the worlds, of excellent heroism, of beautiful armlets; the Creator, source of the births of beings, the Terrible, of terrifying prowess.',
    },
    {
      id: 104,
      verseLabel: 'Shloka 102',
      sanskrit: 'आधारनिलयोऽधाता पुष्पहासः प्रजागरः।\nऊर्ध्वगः सत्पथाचारः प्राणदः प्रणवः पणः॥',
      transliteration: 'Adharanilayo\'dhata Pushpahasah Prajagarah.\nUrdhvagah Satpathacharah Pranadah Pranavah Panah.',
      meaning: 'The abode of all support, supporter of all supporters, smiling like a flower, the Ever-awake; moving upward, treader of the path of the righteous, giver of life, OM, the supreme transaction.',
    },
    {
      id: 105,
      verseLabel: 'Shloka 103',
      sanskrit: 'प्रमाणं प्राणनिलयः प्राणभृत् प्राणजीवनः।\nतत्त्वं तत्त्वविदेकात्मा जन्ममृत्युजरातिगः॥',
      transliteration: 'Pramanam Prananilayah Pranabhrit Pranajivanah.\nTattvam Tattvavid Ekatma Janmamrityujaratigah.',
      meaning: 'The Authority, abode of the life-breaths, bearer of prana, giver of life to prana; Reality itself, the knower of Reality, the One Self, beyond birth, death, and old age.',
    },
    {
      id: 106,
      verseLabel: 'Shloka 104',
      sanskrit: 'भूर्भुवःस्वस्तरुस्तारः सविता प्रपितामहः।\nयज्ञो यज्ञपतिर्यज्वा यज्ञाङ्गो यज्ञवाहनः॥',
      transliteration: 'Bhurbhuvahsvastarus Tarah Savita Prapitamahah.\nYajno Yajnapatir Yajva Yajnango Yajnavahanah.',
      meaning: 'The tree of the three worlds (bhuh, bhuvah, svah), the Deliverer, the Inspirer, the great-grandfather; Sacrifice, Lord of sacrifice, the Sacrificer, of sacrificial limbs, the bearer of sacrifice.',
    },
    {
      id: 107,
      verseLabel: 'Shloka 105',
      sanskrit: 'यज्ञभृद् यज्ञकृद् यज्ञी यज्ञभुग् यज्ञसाधनः।\nयज्ञान्तकृद् यज्ञगुह्यमन्नमन्नाद एव च॥',
      transliteration: 'Yajnabhrid Yajnakrid Yajni Yajnabhug Yajnasadhanah.\nYajnantakrid Yajnaguhyam Annam Annada Eva Cha.',
      meaning: 'Bearer of sacrifice, doer of sacrifice, the Sacrificial One, enjoyer of sacrifice, the fulfiller of sacrifice; the finisher of sacrifice, the secret of sacrifice, Food itself, and the eater of food.',
    },
    {
      id: 108,
      verseLabel: 'Shloka 106',
      sanskrit: 'आत्मयोनिः स्वयञ्जातो वैखानः सामगायनः।\nदेवकीनन्दनः स्रष्टा क्षितीशः पापनाशनः॥',
      transliteration: 'Atmayonih Svayanjato Vaikhanah Samagayanah.\nDevakinandanah Srashta Kshitishah Papanashanah.',
      meaning: 'Source of the Self, the self-born, who dug the earth as Varaha, the singer of Saman; delight of Devaki, the Creator, Lord of the earth, destroyer of sins.',
    },
    {
      id: 109,
      verseLabel: 'Shloka 107',
      sanskrit: 'शङ्खभृन्नन्दकी चक्री शार्ङ्गधन्वा गदाधरः।\nरथाङ्गपाणिरक्षोभ्यः सर्वप्रहरणायुधः॥',
      transliteration: 'Shankhabhrin Nandaki Chakri Sharngadhanva Gadadharah.\nRathangapanir Akshobhyah Sarvapraharanayudhah.',
      meaning: 'Bearer of the Panchajanya conch, holder of the Nandaka sword, wielder of the Sudarshana discus, the Sharnga-bowman, the mace-bearer; whose hand holds the wheel, the Unperturbed, armed with all weapons of every kind.',
    },
    {
      id: 110,
      verseLabel: 'Concluding Verse',
      sanskrit: 'वनमाली गदी शार्ङ्गी शङ्खी चक्री च नन्दकी।\nश्रीमान्नारायणो विष्णुर्वासुदेवोऽभिरक्षतु॥',
      transliteration: 'Vanamali Gadi Sharngi Shankhi Chakri Cha Nandaki.\nShriman Narayano Vishnur Vasudevo\'bhirakshatu.',
      meaning: 'Wearer of the forest garland, the mace-wielder, the Sharnga-bowman, the conch-bearer, the discus-holder, and wielder of Nandaka — may the glorious Narayana, Vishnu, Vasudeva, protect us all.',
    },
  ],
};

const venkateswaraSuprabhatam: Stotra = {
  id: 'venkateswara-suprabhatam',
  title: 'Venkateswara Suprabhatam',
  subtitle: 'श्री वेङ्कटेश सुप्रभातम्',
  deity: 'Venkateswara',
  description:
    'The morning awakening hymn to Lord Venkateswara of Tirumala, composed by Sri Prativadi Bhayankaram Annangaracharya. Sung at dawn to gently rouse the Lord and consecrate the day.',
  benefits: [
    'Begins the day with the grace of Lord Venkateswara',
    'Bestows prosperity, peace, and divine protection',
    'Awakens devotion and sanctifies the home at dawn',
  ],
  estimatedMinutes: 8,
  icon: '',
  verses: [
    {
      id: 1,
      verseLabel: 'Shloka 1',
      sanskrit:
        'कौसल्या सुप्रजा राम पूर्वा सन्ध्या प्रवर्तते।\nउत्तिष्ठ नरशार्दूल कर्तव्यं दैवमाह्निकम्॥',
      transliteration:
        'Kausalyā suprajā Rāma pūrvā sandhyā pravartate.\nUttiṣṭha naraśārdūla kartavyaṁ daivam āhnikam.',
      meaning:
        'O Rama, illustrious son of Kausalya! The eastern dawn is breaking. Arise, O lion among men, and perform the daily divine duties (sandhyā).',
    },
    {
      id: 2,
      verseLabel: 'Shloka 2',
      sanskrit:
        'उत्तिष्ठोत्तिष्ठ गोविन्द उत्तिष्ठ गरुडध्वज।\nउत्तिष्ठ कमलाकान्त त्रैलोक्यं मङ्गलं कुरु॥',
      transliteration:
        'Uttiṣṭhottiṣṭha Govinda uttiṣṭha garuḍadhvaja.\nUttiṣṭha kamalākānta trailokyaṁ maṅgalaṁ kuru.',
      meaning:
        'Arise, arise, O Govinda! Arise, O Lord whose banner bears Garuda. Arise, O beloved of Lakshmi (the lotus-dweller), and bestow auspiciousness upon the three worlds.',
    },
    {
      id: 3,
      verseLabel: 'Shloka 3',
      sanskrit:
        'मातस्समस्तजगतां मधुकैटभारेः वक्षोविहारिणि मनोहरदिव्यमूर्ते।\nश्रीस्वामिनि श्रितजनप्रियदानशीले श्रीवेङ्कटेशदयिते तव सुप्रभातम्॥',
      transliteration:
        'Mātassamasta-jagatāṁ Madhukaiṭabhāreḥ vakṣo-vihāriṇi manohara-divya-mūrte.\nŚrī-svāmini śritajana-priya-dāna-śīle Śrī-Veṅkaṭeśa-dayite tava suprabhātam.',
      meaning:
        'O Mother of all the worlds, who dwells upon the breast of the slayer of Madhu and Kaitabha (Vishnu), of enchanting and divine form! O Sri Lakshmi, beloved consort of Sri Venkateswara, ever generous to those who take refuge in You — may this dawn be auspicious for You.',
    },
    {
      id: 4,
      verseLabel: 'Shloka 4',
      sanskrit:
        'तव सुप्रभातमरविन्दलोचने भवतु प्रसन्नमुखचन्द्रमण्डले।\nविधिशङ्करेन्द्रवनिताभिरर्चिते वृषशैलनाथदयिते दयानिधे॥',
      transliteration:
        'Tava suprabhātam aravinda-locane bhavatu prasanna-mukha-candra-maṇḍale.\nVidhi-śaṅkarendra-vanitābhir arcite vṛṣa-śaila-nātha-dayite dayānidhe.',
      meaning:
        'O lotus-eyed One, with face serene as the moon! Worshipped by the consorts of Brahma, Shankara and Indra. Beloved of the Lord of Vrishabhachala (Tirumala), and ocean of compassion — may this dawn be auspicious for You.',
    },
    {
      id: 5,
      verseLabel: 'Shloka 5',
      sanskrit:
        'अत्र्यादि सप्तऋषयस्समुपास्य सन्ध्यां आकाशसिन्धुकमलानि मनोहराणि।\nआदाय पादयुगमर्चयितुं प्रपन्नाः शेषाद्रिशेखरविभो तव सुप्रभातम्॥',
      transliteration:
        'Atryādi-saptarṣayas-samupāsya sandhyāṁ ākāśa-sindhu-kamalāni manoharāṇi.\nĀdāya pāda-yugam arcayituṁ prapannāḥ śeṣādri-śekhara-vibho tava suprabhātam.',
      meaning:
        'The seven sages led by Atri, having performed their dawn worship, have gathered enchanting lotuses from the celestial Ganga and now stand surrendered, ready to worship Your sacred feet — O resplendent Lord whose abode crowns Sheshachala, may this dawn be auspicious for You.',
    },
    {
      id: 6,
      verseLabel: 'Shloka 6',
      sanskrit:
        'पञ्चाननाब्जभवषण्मुखवासवाद्याः त्रैविक्रमादिचरितं विबुधाः स्तुवन्ति।\nभाषापतिः पठति वासरशुद्धिमारात् शेषाद्रिशेखरविभो तव सुप्रभातम्॥',
      transliteration:
        'Pañcānana-abja-bhava-ṣaṇmukha-vāsavādyāḥ traivikramādi-caritaṁ vibudhāḥ stuvanti.\nBhāṣāpatiḥ paṭhati vāsara-śuddhim ārāt śeṣādri-śekhara-vibho tava suprabhātam.',
      meaning:
        'The devas — five-faced Shiva, lotus-born Brahma, six-faced Skanda, Indra and others — extol Your exploits beginning with Trivikrama. Nearby, Brihaspati (Lord of Speech) reads out the auspiciousness of the day — O resplendent Lord who crowns Sheshachala, may this dawn be auspicious for You.',
    },
    {
      id: 7,
      verseLabel: 'Shloka 7',
      sanskrit:
        'ईषत्प्रफुल्लसरसीरुहनारिकेलपूगद्रुमादि सुमनोहरपालिकानाम्।\nआवाति मन्दमनिलस्सह दिव्यगन्धैः शेषाद्रिशेखरविभो तव सुप्रभातम्॥',
      transliteration:
        'Īṣat-praphulla-sarasīruha-nārikela-pūga-drumādi sumanohara-pālikānām.\nĀvāti mandam anilaḥ saha divya-gandhaiḥ śeṣādri-śekhara-vibho tava suprabhātam.',
      meaning:
        'A gentle breeze carrying divine fragrances from the groves of half-bloomed lotuses, coconut palms, areca trees, and other enchanting rows of flowering plants softly wafts towards You — O resplendent Lord who crowns Sheshachala, may this dawn be auspicious for You.',
    },
    {
      id: 8,
      verseLabel: 'Shloka 8',
      sanskrit:
        'उन्मील्य नेत्रयुगमुत्तमपञ्जरस्थाः पात्रावशिष्टकदलीफलपायसानि।\nभुक्त्वा सलीलमथ केलिशुकाः पठन्ति शेषाद्रिशेखरविभो तव सुप्रभातम्॥',
      transliteration:
        'Unmīlya netra-yugam uttama-pañjara-sthāḥ pātrāvaśiṣṭa-kadalī-phala-pāyasāni.\nBhuktvā salīlam atha keli-śukāḥ paṭhanti śeṣādri-śekhara-vibho tava suprabhātam.',
      meaning:
        'The playful parrots perched in fine cages open their pair of eyes; having eaten the bananas and payasam left in their bowls, they now playfully begin to recite — O resplendent Lord who crowns Sheshachala, may this dawn be auspicious for You.',
    },
    {
      id: 9,
      verseLabel: 'Shloka 9',
      sanskrit:
        'तन्त्रीप्रहर्षमधुरस्वनया विपञ्च्या गायत्यनन्तचरितं तव नारदोऽपि।\nभाषासमग्रमसकृत्करचाररम्यं शेषाद्रिशेखरविभो तव सुप्रभातम्॥',
      transliteration:
        "Tantrī-praharṣa-madhura-svanayā vipañcyā gāyaty ananta-caritaṁ tava nārado'pi.\nBhāṣā-samagram asakṛt-kara-cāra-ramyaṁ śeṣādri-śekhara-vibho tava suprabhātam.",
      meaning:
        'Even Narada sings of Your infinite exploits upon his vipanchi vina, its strings yielding the richest, most joyful sweetness of tone — eloquent in every language, graceful with the constant play of his fingers. O resplendent Lord who crowns Sheshachala, may this dawn be auspicious for You.',
    },
    {
      id: 10,
      verseLabel: 'Shloka 10',
      sanskrit:
        'भृङ्गावली च मकरन्दरसानुविद्धझङ्कारगीतनिनदैः सह सेवनाय।\nनिर्यात्युपान्तसरसीकमलोदरेभ्यः शेषाद्रिशेखरविभो तव सुप्रभातम्॥',
      transliteration:
        'Bhṛṅgāvalī ca makaranda-rasānuviddha-jhaṅkāra-gīta-ninadaiḥ saha sevanāya.\nNiryāty upānta-sarasī-kamalodarebhyaḥ śeṣādri-śekhara-vibho tava suprabhātam.',
      meaning:
        'From within the lotuses of the nearby pond, swarms of bees — their humming songs infused with the taste of nectar — emerge forth to render their service. O resplendent Lord who crowns Sheshachala, may this dawn be auspicious for You.',
    },
    {
      id: 11,
      verseLabel: 'Shloka 11',
      sanskrit:
        'योषागणेन वरदध्नि विमथ्यमाने घोषालयेषु दधिमन्थनतीव्रघोषाः।\nरोषात्कलिं विदधते ककुभश्च कुम्भाः शेषाद्रिशेखरविभो तव सुप्रभातम्॥',
      transliteration:
        'Yoṣā-gaṇena vara-dadhni vimathyamāne ghoṣālayeṣu dadhi-manthana-tīvra-ghoṣāḥ.\nRoṣāt kaliṁ vidadhate kakubhaś ca kumbhāḥ śeṣādri-śekhara-vibho tava suprabhātam.',
      meaning:
        'In the cowherd settlements, as bands of women churn the finest curd, the loud sounds of churning rise up — the very pots and the eight directions seem to quarrel in mock anger. O resplendent Lord who crowns Sheshachala, may this dawn be auspicious for You.',
    },
    {
      id: 12,
      verseLabel: 'Shloka 12',
      sanskrit:
        'पद्मेशमित्रशतपत्रगतालिवर्गाः हर्तुं श्रियं कुवलयस्य निजाङ्गलक्ष्म्या।\nभेरीनिनादमिव बिभ्रति तीव्रनादं शेषाद्रिशेखरविभो तव सुप्रभातम्॥',
      transliteration:
        'Padmeśa-mitra-śatapatra-gatāli-vargāḥ hartuṁ śriyaṁ kuvalayasya nijāṅga-lakṣmyā.\nBherī-ninādam iva bibhrati tīvra-nādaṁ śeṣādri-śekhara-vibho tava suprabhātam.',
      meaning:
        'Swarms of bees settled within the hundred-petalled lotuses — friends of the sun, lord of the lotus — vie to outshine the beauty of the blue water-lily by the luster of their own bodies; their humming swells loud like the beat of war-drums. O resplendent Lord who crowns Sheshachala, may this dawn be auspicious for You.',
    },
    {
      id: 13,
      verseLabel: 'Shloka 13',
      sanskrit:
        'श्रीमन्नभीष्टवरदाखिललोकबन्धो श्रीश्रीनिवास जगदेकदयैकसिन्धो।\nश्रीदेवतागृहभुजान्तर दिव्यमूर्ते श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Śrīmann-abhīṣṭa-varadākhila-loka-bandho Śrī-Śrīnivāsa jagad-eka-dayaika-sindho.\nŚrī-devatā-gṛha-bhujāntara divya-mūrte Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'O glorious granter of every desired boon, kinsman of all the worlds! O Sri Srinivasa, sole ocean of compassion for the universe! Whose divine form abides between the arms of the Goddess Sri — O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 14,
      verseLabel: 'Shloka 14',
      sanskrit:
        'श्रीस्वामिपुष्करिणिकाऽऽप्लवनिर्मलाङ्गाः श्रेयोऽर्थिनो हरविरिञ्चिसनन्दनाद्याः।\nद्वारे वसन्ति वरवेत्रहतोत्तमाङ्गाः श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        "Śrī-svāmi-puṣkariṇikā''plava-nirmalāṅgāḥ śreyo'rthino hara-viriñci-sanandanādyāḥ.\nDvāre vasanti vara-vetra-hatottamāṅgāḥ Śrī-Veṅkaṭācalapate tava suprabhātam.",
      meaning:
        "With limbs purified by their dip in the holy Sri Swami Pushkarini, seekers of the highest welfare — Hara (Shiva), Virinchi (Brahma), Sanandana and other great ones — wait at Your gate, their heads gently tapped by the doorkeeper's fine cane. O Lord of Venkata Hill, may this dawn be auspicious for You.",
    },
    {
      id: 15,
      verseLabel: 'Shloka 15',
      sanskrit:
        'श्रीशेषशैलगरुडाचलवेङ्कटाद्रिनारायणाद्रिवृषभाद्रिवृषाद्रिमुख्याम्।\nआख्यां त्वदीयवसतेरनिशं वदन्ति श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Śrī-Śeṣa-śaila-Garuḍācala-Veṅkaṭādri-Nārāyaṇādri-Vṛṣabhādri-Vṛṣādri-mukhyām.\nĀkhyāṁ tvadīya-vasater aniśaṁ vadanti Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'Sri Sheshashaila, Garudachala, Venkatadri, Narayanadri, Vrishabhadri, Vrishadri — by these and the like the seven sacred names of Your abode are unceasingly proclaimed. O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 16,
      verseLabel: 'Shloka 16',
      sanskrit:
        'सेवापराः शिवसुरेशकृशानुधर्मरक्षोऽम्बुनाथपवमानधनाधिनाथाः।\nबद्धाञ्जलिप्रविलसन्निजशीर्षदेशाः श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        "Sevā-parāḥ śiva-sureśa-kṛśānu-dharma-rakṣo'mbu-nātha-pavamāna-dhanādhi-nāthāḥ.\nBaddhāñjali-pravilasan-nija-śīrṣa-deśāḥ Śrī-Veṅkaṭācalapate tava suprabhātam.",
      meaning:
        'Intent on Your service, the eight guardians of the quarters — Shiva (Ishana), Indra (Sureśa), Agni (Kṛśānu), Yama (Dharma), Nirriti (Rakṣo-nātha), Varuna (Ambu-nātha), Vayu (Pavamāna), and Kubera (Dhanādhi-nātha) — stand with hands folded in añjali shining above their crowned heads. O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 17,
      verseLabel: 'Shloka 17',
      sanskrit:
        'धाटीषु ते विहगराजमृगाधिराजनागाधिराजगजराजहयाधिराजाः।\nस्वस्वाधिकारमहिमाधिकमर्थयन्ते श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Dhāṭīṣu te vihaga-rāja-mṛgādhirāja-nāgādhirāja-gaja-rāja-hayādhirājāḥ.\nSvasvādhikāra-mahimādhikam arthayante Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'In Your processions, the king of birds (Garuda), the king of beasts (the lion), the king of serpents (Adishesha), the king of elephants (Airavata), and the king of horses (Uchchaihshravas) each entreat that Your service be granted to them as an honor surpassing their own sovereignty. O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 18,
      verseLabel: 'Shloka 18',
      sanskrit:
        'सूर्येन्दुभौमबुधवाक्पतिकाव्यसौरिस्वर्भानुकेतुदिविषत्परिषत्प्रधानाः।\nत्वद्दासदासचरमावधिदासदासाः श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Sūryendu-bhauma-budha-vākpati-kāvya-sauri-svarbhānu-ketu-diviṣat-pariṣat-pradhānāḥ.\nTvad-dāsa-dāsa-caramāvadhi-dāsa-dāsāḥ Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'The Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu — chiefs of the celestial assembly — count themselves servants of the servants down to the very last of Your servants. O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 19,
      verseLabel: 'Shloka 19',
      sanskrit:
        'त्वत्पादधूलिभरितस्फुरितोत्तमाङ्गाः स्वर्गापवर्गनिरपेक्षनिजान्तरङ्गाः।\nकल्पागमाकलनयाऽऽकुलतां लभन्ते श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        "Tvat-pāda-dhūli-bharita-sphuritottamāṅgāḥ svargāpavarga-nirapekṣa-nijāntaraṅgāḥ.\nKalpāgamākalanayā''kulatāṁ labhante Śrī-Veṅkaṭācalapate tava suprabhātam.",
      meaning:
        'With heads gloriously bedecked with the dust of Your feet, with hearts wholly indifferent to both heaven and liberation — Your devotees grow anxious at the mere thought of the aeon drawing to a close. O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 20,
      verseLabel: 'Shloka 20',
      sanskrit:
        'त्वद्गोपुराग्रशिखराणि निरीक्षमाणाः स्वर्गापवर्गपदवीं परमां श्रयन्तः।\nमर्त्या मनुष्यभुवने मतिमाश्रयन्ते श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Tvad-gopurāgra-śikharāṇi nirīkṣamāṇāḥ svargāpavarga-padavīṁ paramāṁ śrayantaḥ.\nMartyā manuṣya-bhuvane matim āśrayante Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'Gazing upon the crowning peaks of Your gopuras, and thereby attaining the supreme path of heaven and liberation, mortals — even while dwelling in this human world — take refuge in the highest wisdom. O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 21,
      verseLabel: 'Shloka 21',
      sanskrit:
        'श्रीभूमिनायक दयादिगुणामृताब्धे देवाधिदेव जगदेकशरण्यमूर्ते।\nश्रीमन्ननन्तगरुडादिभिरर्चिताङ्घ्रे श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Śrī-bhūmi-nāyaka dayādi-guṇāmṛtābdhe devādhideva jagad-eka-śaraṇya-mūrte.\nŚrīmann-ananta-garuḍādibhir arcitāṅghre Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'O Lord of Sri and Bhumi, ocean of nectar-like virtues beginning with compassion! O God of gods, sole refuge of the universe! Whose feet are worshipped by Ananta, Garuda, and other divine attendants — O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 22,
      verseLabel: 'Shloka 22',
      sanskrit:
        'श्रीपद्मनाभ पुरुषोत्तम वासुदेव वैकुण्ठ माधव जनार्दन चक्रपाणे।\nश्रीवत्सचिह्न शरणागतपारिजात श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Śrī-padmanābha puruṣottama vāsudeva vaikuṇṭha mādhava janārdana cakrapāṇe.\nŚrīvatsa-cihna śaraṇāgata-pārijāta Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'O Padmanabha, Purushottama, Vasudeva, Vaikuntha, Madhava, Janardana, wielder of the discus! O You who bear the Srivatsa mark, wish-fulfilling tree to those who seek refuge — O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 23,
      verseLabel: 'Shloka 23',
      sanskrit:
        'कन्दर्पदर्पहरसुन्दरदिव्यमूर्ते कान्ताकुचाम्बुरुहकुड्मललोलदृष्टे।\nकल्याणनिर्मलगुणाकरदिव्यकीर्ते श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Kandarpa-darpa-hara-sundara-divya-mūrte kāntā-kucāmburuha-kuḍmala-lola-dṛṣṭe.\nKalyāṇa-nirmala-guṇākara-divya-kīrte Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'O divine form whose beauty humbles the pride of Manmatha! Whose playful glance lingers upon the lotus-bud bosom of Your consort! Repository of auspicious, spotless virtues and divine fame — O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 24,
      verseLabel: 'Shloka 24',
      sanskrit:
        'मीनाकृते कमठकोलनृसिंहवर्णिन् स्वामिन् परश्वधतपोधन रामचन्द्र।\nशेषांशराम यदुनन्दन कल्किरूप श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Mīnākṛte kamaṭha-kola-nṛsiṁha-varṇin svāmin paraśvadha-tapodhana rāmacandra.\nŚeṣāṁśa-rāma yadu-nandana kalki-rūpa Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'O You who assumed the forms of the Fish, Tortoise, Boar, and Man-Lion! O Lord, Parashurama, Sage-Warrior, Ramachandra! Balarama (portion of Shesha), delight of the Yadus, and Kalki yet to come — O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 25,
      verseLabel: 'Shloka 25',
      sanskrit:
        'एलालवङ्गघनसारसुगन्धितीर्थं दिव्यं वियत्सरिति हेमघटेषु पूर्णम्।\nधृत्वाऽऽद्य वैदिकशिखामणयः प्रहृष्टाः तिष्ठन्ति वेङ्कटपते तव सुप्रभातम्॥',
      transliteration:
        "Elā-lavaṅga-ghanasāra-sugandhi-tīrthaṁ divyaṁ viyat-sariti hema-ghaṭeṣu pūrṇam.\nDhṛtvā''dya vaidika-śikhāmaṇayaḥ prahṛṣṭāḥ tiṣṭhanti Veṅkaṭapate tava suprabhātam.",
      meaning:
        'Having filled golden vessels with the divine, fragrant water of the celestial river — perfumed with cardamom, clove, and camphor — the foremost of Vedic scholars stand rejoicing. O Lord of Venkata, may this dawn be auspicious for You.',
    },
    {
      id: 26,
      verseLabel: 'Shloka 26',
      sanskrit:
        'भास्वानुदेति विकचानि सरोरुहाणि सम्पूरयन्ति निनदैः ककुभो विहङ्गाः।\nश्रीवैष्णवास्सततमर्थितमङ्गलास्ते धामाश्रयन्ति तव वेङ्कट सुप्रभातम्॥',
      transliteration:
        'Bhāsvān udeti vikacāni saroruhāṇi sampūrayanti ninadaiḥ kakubho vihaṅgāḥ.\nŚrī-vaiṣṇavās satataṁ arthita-maṅgalās te dhāmāśrayanti tava Veṅkaṭa suprabhātam.',
      meaning:
        'The sun rises and the lotuses bloom; birds fill the quarters with their songs. The Srivaishnavas, ever seeking auspiciousness, throng to Your abode. O Venkata, may this dawn be auspicious for You.',
    },
    {
      id: 27,
      verseLabel: 'Shloka 27',
      sanskrit:
        'ब्रह्मादयस्सुरवरास्समहर्षयस्ते सन्तस्सनन्दनमुखास्त्वथ योगिवर्याः।\nधामान्तिके तव हि मङ्गलवस्तुहस्ताः श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Brahmādayas sura-varās samaharṣayas te santas sanandana-mukhās tvatha yogivaryāḥ.\nDhāmāntike tava hi maṅgala-vastu-hastāḥ Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'Brahma and the chief gods, the great sages, the saints led by Sanandana, and the foremost yogis — all stand near Your abode with auspicious offerings in hand. O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 28,
      verseLabel: 'Shloka 28',
      sanskrit:
        'लक्ष्मीनिवास निरवद्यगुणैकसिन्धो संसारसागरसमुत्तरणैकसेतो।\nवेदान्तवेद्य निजवैभव भक्तभोग्य श्रीवेङ्कटाचलपते तव सुप्रभातम्॥',
      transliteration:
        'Lakṣmī-nivāsa niravadya-guṇaika-sindho saṁsāra-sāgara-samuttaraṇaika-seto.\nVedānta-vedya nija-vaibhava bhakta-bhogya Śrī-Veṅkaṭācalapate tava suprabhātam.',
      meaning:
        'O abode of Lakshmi, sole ocean of flawless virtues, sole bridge for crossing the ocean of worldly existence! Knowable through Vedanta, whose own glory is enjoyed by devotees — O Lord of Venkata Hill, may this dawn be auspicious for You.',
    },
    {
      id: 29,
      verseLabel: 'Shloka 29',
      sanskrit:
        'इत्थं वृषाचलपतेरिह सुप्रभातम् ये मानवाः प्रतिदिनं पठितुं प्रवृत्ताः।\nतेषां प्रभातसमये स्मृतिरङ्गभाजां प्रज्ञां परार्थसुलभां परमां प्रसूते॥',
      transliteration:
        'Itthaṁ vṛṣācalapateriha suprabhātam ye mānavāḥ pratidinaṁ paṭhituṁ pravṛttāḥ.\nTeṣāṁ prabhāta-samaye smṛtir aṅga-bhājāṁ prajñāṁ parārtha-sulabhāṁ paramāṁ prasūte.',
      meaning:
        'Those who daily recite this Suprabhatam of the Lord of Vrishachala — in them, at the break of dawn, memory gives birth to the supreme wisdom that easily bestows the highest goal.',
    },
  ],
};

const adityaHridayaStotram: Stotra = {
  id: 'aditya-hridaya-stotram',
  title: 'Aditya Hridaya Stotram',
  subtitle: 'आदित्यहृदयम्',
  deity: 'Surya',
  description:
    'The hymn to the heart of the Sun, taught by Sage Agastya to Lord Rama on the battlefield before his final confrontation with Ravana. From the Yuddha Kanda of Valmiki Ramayana.',
  benefits: [
    'Grants victory over adversaries and removal of obstacles',
    'Bestows radiant health, vitality, and long life',
    'Dispels fear, worry, and grief',
  ],
  estimatedMinutes: 10,
  icon: '',
  verses: [
    {
      id: 1,
      verseLabel: 'Shloka 1',
      sanskrit:
        'ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम्।\nरावणं चाग्रतो दृष्ट्वा युद्धाय समुपस्थितम्॥',
      transliteration:
        'Tato yuddha-pariśrāntaṁ samare cintayā sthitam.\nRāvaṇaṁ cāgrato dṛṣṭvā yuddhāya samupasthitam.',
      meaning:
        'Then, seeing Rama standing exhausted and anxious on the battlefield, and Ravana arriving before him ready for combat...',
    },
    {
      id: 2,
      verseLabel: 'Shloka 2',
      sanskrit:
        'दैवतैश्च समागम्य द्रष्टुमभ्यागतो रणम्।\nउपागम्याब्रवीद्रामं अगस्त्यो भगवान्ऋषिः॥',
      transliteration:
        'Daivataiś ca samāgamya draṣṭum abhyāgato raṇam.\nUpāgamyābravīd Rāmaṁ Agastyo bhagavān ṛṣiḥ.',
      meaning:
        'The venerable sage Agastya, who had come with the gods to witness the battle, approached Rama and spoke thus.',
    },
    {
      id: 3,
      verseLabel: 'Shloka 3',
      sanskrit:
        'राम राम महाबाहो शृणु गुह्यं सनातनम्।\nयेन सर्वानरीन् वत्स समरे विजयिष्यसि॥',
      transliteration:
        'Rāma Rāma mahābāho śṛṇu guhyaṁ sanātanam.\nYena sarvān arīn vatsa samare vijayiṣyasi.',
      meaning:
        'O Rama, O mighty-armed one, hear this eternal secret by which, dear child, you shall conquer all enemies in battle.',
    },
    {
      id: 4,
      verseLabel: 'Shloka 4',
      sanskrit:
        'आदित्यहृदयं पुण्यं सर्वशत्रुविनाशनम्।\nजयावहं जपेन्नित्यम् अक्षय्यं परमं शिवम्॥',
      transliteration:
        'Āditya-hṛdayaṁ puṇyaṁ sarva-śatru-vināśanam.\nJayāvahaṁ japen nityam akṣayyaṁ paramaṁ śivam.',
      meaning:
        'This is the Aditya Hridayam — sacred, destroyer of all enemies, bestower of victory. One should recite it daily; it is imperishable and supremely auspicious.',
    },
    {
      id: 5,
      verseLabel: 'Shloka 5',
      sanskrit:
        'सर्वमङ्गलमाङ्गल्यं सर्वपापप्रणाशनम्।\nचिन्ताशोकप्रशमनम् आयुर्वर्धनमुत्तमम्॥',
      transliteration:
        'Sarva-maṅgala-māṅgalyaṁ sarva-pāpa-praṇāśanam.\nCintā-śoka-praśamanam āyur-vardhanam uttamam.',
      meaning:
        'It is the most auspicious of all auspicious things, the destroyer of all sins, the dispeller of all worry and grief, and the supreme bestower of long life.',
    },
    {
      id: 6,
      verseLabel: 'Shloka 6',
      sanskrit:
        'रश्मिमन्तं समुद्यन्तं देवासुरनमस्कृतम्।\nपूजयस्व विवस्वन्तं भास्करं भुवनेश्वरम्॥',
      transliteration:
        'Raśmimantaṁ samudyantaṁ devāsura-namaskṛtam.\nPūjayasva vivasvantaṁ bhāskaraṁ bhuvaneśvaram.',
      meaning:
        'Worship the radiant one who rises with splendor, saluted by gods and demons alike — Vivasvan, the light-maker, the lord of all worlds.',
    },
    {
      id: 7,
      verseLabel: 'Shloka 7',
      sanskrit:
        'सर्वदेवात्मको ह्येष तेजस्वी रश्मिभावनः।\nएष देवासुरगणान् लोकान् पाति गभस्तिभिः॥',
      transliteration:
        'Sarva-devātmako hy eṣa tejasvī raśmi-bhāvanaḥ.\nEṣa devāsura-gaṇān lokān pāti gabhastibhiḥ.',
      meaning:
        'He is the self of all the gods, resplendent, the source of all rays. He protects the hosts of gods and demons and all the worlds with his beams.',
    },
    {
      id: 8,
      verseLabel: 'Shloka 8',
      sanskrit:
        'एष ब्रह्मा च विष्णुश्च शिवः स्कन्दः प्रजापतिः।\nमहेन्द्रो धनदः कालो यमः सोमो ह्यपां पतिः॥',
      transliteration:
        'Eṣa Brahmā ca Viṣṇuś ca Śivaḥ Skandaḥ Prajāpatiḥ.\nMahendro Dhanadaḥ Kālo Yamaḥ Somo hy apāṁ patiḥ.',
      meaning:
        'He is Brahma, Vishnu, Shiva, Skanda, and Prajapati. He is Mahendra, Kubera, Kala (Time), Yama, Soma, and the lord of the waters.',
    },
    {
      id: 9,
      verseLabel: 'Shloka 9',
      sanskrit:
        'पितरो वसवः साध्या ह्यश्विनौ मरुतो मनुः।\nवायुर्वह्निः प्रजाप्राणा ऋतुकर्ता प्रभाकरः॥',
      transliteration:
        'Pitaro Vasavaḥ Sādhyā hy Aśvinau Maruto Manuḥ.\nVāyur Vahniḥ prajā-prāṇā ṛtu-kartā prabhākaraḥ.',
      meaning:
        'He is the Pitris, the Vasus, the Sadhyas, the Ashvins, the Maruts, and Manu. He is Vayu, Agni, the life-breath of all beings, the maker of seasons, and the source of light.',
    },
    {
      id: 10,
      verseLabel: 'Shloka 10',
      sanskrit:
        'आदित्यः सविता सूर्यः खगः पूषा गभस्तिमान्।\nसुवर्णसदृशो भानुर्हिरण्यरेता दिवाकरः॥',
      transliteration:
        'Ādityaḥ Savitā Sūryaḥ Khagaḥ Pūṣā Gabhastimān.\nSuvarṇa-sadṛśo Bhānur Hiraṇya-retā Divākaraḥ.',
      meaning:
        'He is Aditya, Savita, Surya, Khaga, Pusha, and Gabhastiman. He is golden-hued Bhanu, Hiranyareta (of golden seed), and Divakara (maker of day).',
    },
    {
      id: 11,
      verseLabel: 'Shloka 11',
      sanskrit:
        'हरिदश्वः सहस्रार्चिः सप्तसप्तिर्मरीचिमान्।\nतिमिरोन्मथनः शम्भुस्त्वष्टा मार्ताण्ड अंशुमान्॥',
      transliteration:
        'Haridaśvaḥ Sahasrārciḥ Saptasaptir Marīcimān.\nTimironmathanaḥ Śambhus Tvaṣṭā Mārtāṇḍa Aṁśumān.',
      meaning:
        'He is Haridashva (of green horses), Sahasrarchi (of a thousand rays), Saptasapti (of seven horses), and Marichiman. He is the destroyer of darkness, Shambhu, Tvashta, Martanda, and Amshuman.',
    },
    {
      id: 12,
      verseLabel: 'Shloka 12',
      sanskrit:
        'हिरण्यगर्भः शिशिरस्तपनो भास्करो रविः।\nअग्निगर्भोऽदितेः पुत्रः शङ्खः शिशिरनाशनः॥',
      transliteration:
        "Hiraṇyagarbhaḥ Śiśiras Tapano Bhāskaro Raviḥ.\nAgnigarbho'diteḥ putraḥ Śaṅkhaḥ Śiśira-nāśanaḥ.",
      meaning:
        'He is Hiranyagarbha, Shishira (cool), Tapana (scorching), Bhaskara (light-maker), and Ravi. He is Agnigarbha (womb of fire), son of Aditi, Shankha, and the destroyer of cold.',
    },
    {
      id: 13,
      verseLabel: 'Shloka 13',
      sanskrit:
        'व्योमनाथस्तमोभेदी ऋग्यजुस्सामपारगः।\nघनवृष्टिरपां मित्रो विन्ध्यवीथीप्लवङ्गमः॥',
      transliteration:
        'Vyomanāthas tamobhedī Ṛgyajussāma-pāragaḥ.\nGhanavṛṣṭir apāṁ mitro Vindhyavīthī-plavaṅgamaḥ.',
      meaning:
        'He is the lord of the sky, the dispeller of darkness, and the master of the Rig, Yajur, and Sama Vedas. He is the bringer of heavy rains, the friend of waters, and he who courses swiftly over the Vindhya ranges.',
    },
    {
      id: 14,
      verseLabel: 'Shloka 14',
      sanskrit:
        'आतपी मण्डली मृत्युः पिङ्गलः सर्वतापनः।\nकविर्विश्वो महातेजाः रक्तः सर्वभवोद्भवः॥',
      transliteration:
        'Ātapī Maṇḍalī Mṛtyuḥ Piṅgalaḥ Sarvatāpanaḥ.\nKavir Viśvo Mahātejāḥ Raktaḥ Sarvabhavodbhavaḥ.',
      meaning:
        'He is the source of heat, the orbed one, death, the tawny one, and the scorcher of all. He is the seer, the all-pervading, of immense splendor, the red one, and the origin of all that exists.',
    },
    {
      id: 15,
      verseLabel: 'Shloka 15',
      sanskrit:
        'नक्षत्रग्रहताराणामधिपो विश्वभावनः।\nतेजसामपि तेजस्वी द्वादशात्मन् नमोऽस्तु ते॥',
      transliteration:
        "Nakṣatra-graha-tārāṇām adhipo viśvabhāvanaḥ.\nTejasām api tejasvī dvādaśātman namo\'stu te.",
      meaning:
        'Lord of the stars, planets, and constellations, sustainer of the universe! O most radiant among all that is radiant, O twelve-formed one — salutations to you!',
    },
    {
      id: 16,
      verseLabel: 'Shloka 16',
      sanskrit:
        'नमः पूर्वाय गिरये पश्चिमायाद्रये नमः।\nज्योतिर्गणानां पतये दिनाधिपतये नमः॥',
      transliteration:
        'Namaḥ pūrvāya giraye paścimāyādraye namaḥ.\nJyotir-gaṇānāṁ pataye dinādhipataye namaḥ.',
      meaning:
        'Salutations to the eastern mountain (of sunrise) and to the western mountain (of sunset). Salutations to the lord of all luminaries and the lord of the day.',
    },
    {
      id: 17,
      verseLabel: 'Shloka 17',
      sanskrit:
        'जयाय जयभद्राय हर्यश्वाय नमो नमः।\nनमो नमः सहस्रांशो आदित्याय नमो नमः॥',
      transliteration:
        'Jayāya jayabhadrāya haryaśvāya namo namaḥ.\nNamo namaḥ sahasrāṁśo Ādityāya namo namaḥ.',
      meaning:
        'Salutations again and again to the victorious one, the bestower of auspicious victory, and the one with green horses. Salutations to the thousand-rayed one, salutations to Aditya!',
    },
    {
      id: 18,
      verseLabel: 'Shloka 18',
      sanskrit:
        'नम उग्राय वीराय सारङ्गाय नमो नमः।\nनमः पद्मप्रबोधाय मार्ताण्डाय नमो नमः॥',
      transliteration:
        'Nama ugrāya vīrāya sāraṅgāya namo namaḥ.\nNamaḥ padma-prabodhāya Mārtāṇḍāya namo namaḥ.',
      meaning:
        'Salutations to the fierce and heroic one, to the one who moves swiftly. Salutations to the awakener of lotuses, to Martanda!',
    },
    {
      id: 19,
      verseLabel: 'Shloka 19',
      sanskrit:
        'ब्रह्मेशानाच्युतेशाय सूर्यायादित्यवर्चसे।\nभास्वते सर्वभक्षाय रौद्राय वपुषे नमः॥',
      transliteration:
        'Brahmeśānācyuteśāya Sūryāyāditya-varcase.\nBhāsvate sarva-bhakṣāya raudrāya vapuṣe namaḥ.',
      meaning:
        'Salutations to the lord of Brahma, Ishana, and Achyuta, to Surya of the splendor of the Adityas. Salutations to the shining one, the all-consuming, the fierce-formed one.',
    },
    {
      id: 20,
      verseLabel: 'Shloka 20',
      sanskrit:
        'तमोघ्नाय हिमघ्नाय शत्रुघ्नायामितात्मने।\nकृतघ्नघ्नाय देवाय ज्योतिषां पतये नमः॥',
      transliteration:
        'Tamoghnāya himaghnāya śatrughnāyāmitātmane.\nKṛtaghna-ghnāya devāya jyotiṣāṁ pataye namaḥ.',
      meaning:
        'Salutations to the destroyer of darkness, the destroyer of cold, the destroyer of enemies, and the one of immeasurable nature. Salutations to the slayer of the ungrateful, the god who is the lord of all luminaries.',
    },
    {
      id: 21,
      verseLabel: 'Shloka 21',
      sanskrit:
        'तप्तचामीकराभाय वह्नये विश्वकर्मणे।\nनमस्तमोऽभिनिघ्नाय रुचये लोकसाक्षिणे॥',
      transliteration:
        "Tapta-cāmīkarābhāya vahnaye viśvakarmaṇe.\nNamas tamo'bhinighnāya rucaye loka-sākṣiṇe.",
      meaning:
        'Salutations to the one who shines like molten gold, the fire, the cosmic architect. Salutations to the vanquisher of darkness, the radiant one, the witness of the world.',
    },
    {
      id: 22,
      verseLabel: 'Shloka 22',
      sanskrit:
        'नाशयत्येष वै भूतं तदेव सृजति प्रभुः।\nपायत्येष तपत्येष वर्षत्येष गभस्तिभिः॥',
      transliteration:
        'Nāśayaty eṣa vai bhūtaṁ tad eva sṛjati prabhuḥ.\nPāyaty eṣa tapaty eṣa varṣaty eṣa gabhastibhiḥ.',
      meaning:
        'This Lord destroys all beings and creates them again. He nourishes, he scorches, and he sends forth rain through his rays.',
    },
    {
      id: 23,
      verseLabel: 'Shloka 23',
      sanskrit:
        'एष सुप्तेषु जागर्ति भूतेषु परिनिष्ठितः।\nएष एवाग्निहोत्रं च फलं चैवाग्निहोत्रिणाम्॥',
      transliteration:
        'Eṣa supteṣu jāgarti bhūteṣu pariniṣṭhitaḥ.\nEṣa evāgnihotraṁ ca phalaṁ caivāgnihotriṇām.',
      meaning:
        'He remains awake when all beings sleep, abiding in all creatures. He himself is the Agnihotra sacrifice and the fruit of those who perform the Agnihotra.',
    },
    {
      id: 24,
      verseLabel: 'Shloka 24',
      sanskrit:
        'वेदाश्च क्रतवश्चैव क्रतूनां फलमेव च।\nयानि कृत्यानि लोकेषु सर्वेषु परमप्रभुः॥',
      transliteration:
        'Vedāś ca kratavaś caiva kratūnāṁ phalam eva ca.\nYāni kṛtyāni lokeṣu sarveṣu paramaprabhūḥ.',
      meaning:
        'He is the Vedas, the sacrifices, and the fruit of all sacrifices. He is the supreme lord of all activities performed in all the worlds.',
    },
    {
      id: 25,
      verseLabel: 'Shloka 25',
      sanskrit:
        'एनमापत्सु कृच्छ्रेषु कान्तारेषु भयेषु च।\nकीर्तयन् पुरुषः कश्चिन्नावसीदति राघव॥',
      transliteration:
        'Enam āpatsu kṛcchreṣu kāntāreṣu bhayeṣu ca.\nKīrtayan puruṣaḥ kaścin nāvasīdati Rāghava.',
      meaning:
        'O Raghava, whoever glorifies this Sun god in times of danger, hardship, in wilderness, and in fear — that person never comes to grief.',
    },
    {
      id: 26,
      verseLabel: 'Shloka 26',
      sanskrit:
        'पूजयस्वैनमेकाग्रो देवदेवं जगत्पतिम्।\nएतत् त्रिगुणितं जप्त्वा युद्धेषु विजयिष्यसि॥',
      transliteration:
        'Pūjayasvainam ekāgro devadevaṁ jagatpatim.\nEtat triguṇitaṁ japtvā yuddheṣu vijayiṣyasi.',
      meaning:
        'Worship this god of gods, the lord of the universe, with single-minded devotion. By reciting this hymn thrice, you shall be victorious in battle.',
    },
    {
      id: 27,
      verseLabel: 'Shloka 27',
      sanskrit:
        'अस्मिन् क्षणे महाबाहो रावणं त्वं वधिष्यसि।\nएवमुक्त्वा तदाऽगस्त्यो जगाम च यथागतम्॥',
      transliteration:
        "Asmin kṣaṇe mahābāho Rāvaṇaṁ tvaṁ vadhiṣyasi.\nEvam uktvā tadā'gastyo jagāma ca yathāgatam.",
      meaning:
        'At this very moment, O mighty-armed one, you shall slay Ravana. Having spoken thus, Sage Agastya departed the way he had come.',
    },
    {
      id: 28,
      verseLabel: 'Shloka 28',
      sanskrit:
        'एतच्छ्रुत्वा महातेजाः नष्टशोकोऽभवत्तदा।\nधारयामास सुप्रीतो राघवः प्रयतात्मवान्॥',
      transliteration:
        "Etac chrutvā mahātejāḥ naṣṭa-śoko'bhavat tadā.\nDhārayām āsa suprīto Rāghavaḥ prayatātmavān.",
      meaning:
        'Hearing this, the resplendent Rama was freed from sorrow. With a purified and joyful heart, Raghava absorbed the hymn within himself.',
    },
    {
      id: 29,
      verseLabel: 'Shloka 29',
      sanskrit:
        'आदित्यं प्रेक्ष्य जप्त्वा तु परं हर्षमवाप्तवान्।\nत्रिराचम्य शुचिर्भूत्वा धनुरादाय वीर्यवान्॥',
      transliteration:
        'Ādityaṁ prekṣya japtvā tu paraṁ harṣam avāptavān.\nTrirācamya śucir bhūtvā dhanur ādāya vīryavān.',
      meaning:
        'Gazing upon the Sun and reciting the hymn, he was filled with supreme joy. Having sipped water thrice for purification, the valiant one took up his bow.',
    },
    {
      id: 30,
      verseLabel: 'Shloka 30',
      sanskrit:
        'रावणं प्रेक्ष्य हृष्टात्मा युद्धाय समुपागमत्।\nसर्वयत्नेन महता वधे तस्य धृतोऽभवत्॥',
      transliteration:
        "Rāvaṇaṁ prekṣya hṛṣṭātmā yuddhāya samupāgamat.\nSarva-yatnena mahatā vadhe tasya dhṛto'bhavat.",
      meaning:
        'With an exultant heart, he faced Ravana and advanced to battle. With supreme effort and resolve, he became determined to slay him.',
    },
    {
      id: 31,
      verseLabel: 'Shloka 31',
      sanskrit:
        'अथ रविरवदन्निरीक्ष्य रामं मुदितमनाः परमं प्रहृष्यमाणः।\nनिशिचरपतिसंक्षयं विदित्वा सुरगणमध्यगतो वचस्त्वरेति॥',
      transliteration:
        'Atha ravir avadan nirīkṣya Rāmaṁ mudita-manāḥ paramaṁ prahṛṣyamāṇaḥ.\nNiśicara-pati-saṁkṣayaṁ viditvā sura-gaṇa-madhyagato vacas tvareti.',
      meaning:
        'Then the Sun god, gazing upon Rama with a delighted mind and supremely joyful, knowing that the destruction of the lord of the night-wanderers was at hand, spoke from amidst the gods: "Make haste!"',
    },
  ],
};

const bhajaGovindam: Stotra = {
  id: 'bhaja-govindam',
  title: 'Bhaja Govindam',
  subtitle: 'भज गोविन्दम्',
  deity: 'Govinda',
  description:
    'Thirty-one verses on renunciation and devotion, composed by Adi Shankaracharya. Also known as Moha Mudgara — the hammer that shatters delusion.',
  benefits: [
    'Awakens viveka (discrimination) between the real and the unreal',
    'Cultivates vairagya (dispassion) and freedom from worldly attachment',
    'Inspires single-pointed devotion to the Lord',
  ],
  estimatedMinutes: 10,
  icon: '',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'भज गोविन्दं भज गोविन्दं गोविन्दं भज मूढमते।\nसम्प्राप्ते सन्निहिते काले नहि नहि रक्षति डुकृञ्करणे॥',
      transliteration:
        'Bhaja Govindam Bhaja Govindam Govindam Bhaja Moodhamate.\nSamprapte Sannihite Kale Nahi Nahi Rakshati Dukrinkarane.',
      meaning:
        'Worship Govinda, worship Govinda, worship Govinda, O fool! When the appointed time of death arrives, the rules of grammar will not save you.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'मूढ जहीहि धनागमतृष्णां कुरु सद्बुद्धिं मनसि वितृष्णाम्।\nयल्लभसे निजकर्मोपात्तं वित्तं तेन विनोदय चित्तम्॥',
      transliteration:
        'Moodha Jaheehi Dhanagama Trishnam Kuru Sadbuddhim Manasi Vitrishnam.\nYallabhase Nijakarmopattam Vittam Tena Vinodaya Chittam.',
      meaning:
        'O fool, give up the thirst for accumulating wealth. Create in your mind thoughts free of desire. Be content with what comes through your own righteous deeds.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'नारीस्तनभरनाभीदेशं दृष्ट्वा मा गा मोहावेशम्।\nएतन्मांसवसादिविकारं मनसि विचिन्तय वारं वारम्॥',
      transliteration:
        'Naree Stanabhara Nabheedesham Drishtva Ma Ga Mohavesham.\nEtan Mamsavasadi Vikaram Manasi Vichintaya Varam Varam.',
      meaning:
        'Seeing the body of a woman, do not fall into delusion. It is but a modification of flesh and fat. Reflect upon this again and again in your mind.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'नलिनीदलगतजलमतितरलं तद्वज्जीवितमतिशयचपलम्।\nविद्धि व्याध्यभिमानग्रस्तं लोकं शोकहतं च समस्तम्॥',
      transliteration:
        'Nalineedala Gata Jalam Atitaralam Tadvaj Jeevitam Atishaya Chapalam.\nViddhi Vyadhyabhimana Grastam Lokam Shokahatam Cha Samastam.',
      meaning:
        'The water drop on a lotus petal is extremely unsteady; so too is life exceedingly unstable. Know that the entire world is consumed by disease, ego, and grief.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'यावद्वित्तोपार्जनसक्तः स्तावन्निजपरिवारो रक्तः।\nपश्चाज्जीवति जर्जरदेहे वार्तां कोऽपि न पृच्छति गेहे॥',
      transliteration:
        'Yavad Vittopaarjana Saktah Taavan Nija Parivaro Raktah.\nPashchaj Jeevati Jarjara Dehe Vartam Kopi Na Prichchhati Gehe.',
      meaning:
        'As long as you are able to earn wealth, so long will your family be attached to you. After you grow old and your body becomes infirm, no one at home even asks how you are.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'यावत्पवनो निवसति देहे तावत्पृच्छति कुशलं गेहे।\nगतवति वायौ देहापाये भार्या बिभ्यति तस्मिन्काये॥',
      transliteration:
        'Yavat Pavano Nivasati Dehe Tavat Prichchhati Kushalam Gehe.\nGatavati Vayau Dehapaye Bharya Bibhyati Tasmin Kaye.',
      meaning:
        'As long as the breath dwells in the body, so long do people at home inquire about your welfare. Once the breath leaves and the body decays, even your wife fears that very body.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'बालस्तावत्क्रीडासक्तः तरुणस्तावत्तरुणीसक्तः।\nवृद्धस्तावच्चिन्तासक्तः परमे ब्रह्मणि कोऽपि न सक्तः॥',
      transliteration:
        'Balastavat Kreedasaktah Tarunastavat Taruneesaktah.\nVriddhastavach Chintasaktah Parame Brahmani Kopi Na Saktah.',
      meaning:
        'The child is attached to play, the youth is attached to a young woman, the old man is attached to anxiety — yet no one is attached to the Supreme Brahman.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'का ते कान्ता कस्ते पुत्रः संसारोऽयमतीव विचित्रः।\nकस्य त्वं कः कुत आयातः तत्त्वं चिन्तय तदिह भ्रातः॥',
      transliteration:
        'Ka Te Kanta Kaste Putrah Samsaroyam Ateeva Vichitrah.\nKasya Tvam Kah Kuta Ayatah Tattvam Chintaya Tadiha Bhratah.',
      meaning:
        'Who is your wife? Who is your son? This worldly existence is exceedingly strange. Whose are you? Who are you? Where have you come from? Ponder over that truth here, O brother.',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'सत्सङ्गत्वे निस्सङ्गत्वं निस्सङ्गत्वे निर्मोहत्वम्।\nनिर्मोहत्वे निश्चलतत्त्वं निश्चलतत्त्वे जीवन्मुक्तिः॥',
      transliteration:
        'Satsangatve Nissangatvam Nissangatve Nirmohatvam.\nNirmohatve Nischalatattvam Nischalatat tve Jeevanmuktih.',
      meaning:
        'Through the company of the good arises non-attachment; through non-attachment arises freedom from delusion; through freedom from delusion arises steadfastness in truth; through steadfastness in truth arises liberation while living.',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'वयसि गते कः कामविकारः शुष्के नीरे कः कासारः।\nक्षीणे वित्ते कः परिवारः ज्ञाते तत्त्वे कः संसारः॥',
      transliteration:
        'Vayasi Gate Kah Kamavikarah Shushke Neere Kah Kasarah.\nKsheene Vitte Kah Parivarah Jnate Tattve Kah Samsarah.',
      meaning:
        'When youth has passed, where is lust? When water has dried up, where is the lake? When wealth is depleted, where is the retinue? When the truth is known, where is worldly bondage?',
    },
    {
      id: 11,
      verseLabel: 'Verse 11',
      sanskrit:
        'मा कुरु धनजनयौवनगर्वं हरति निमेषात्कालः सर्वम्।\nमायामयमिदमखिलं हित्वा ब्रह्मपदं त्वं प्रविश विदित्वा॥',
      transliteration:
        'Ma Kuru Dhana Jana Yauvana Garvam Harati Nimeshat Kalah Sarvam.\nMayamayam Idam Akhilam Hitva Brahmapadam Tvam Pravisha Viditva.',
      meaning:
        'Do not be proud of wealth, people, or youth — time takes away all these in a moment. Knowing this entire world to be an illusion wrought by maya, enter the state of Brahman.',
    },
    {
      id: 12,
      verseLabel: 'Verse 12',
      sanskrit:
        'दिनयामिन्यौ सायं प्रातः शिशिरवसन्तौ पुनरायातः।\nकालः क्रीडति गच्छत्यायुः तदपि न मुञ्चत्याशावायुः॥',
      transliteration:
        'Dinayaminyau Sayam Pratah Shishiravasantau Punarayatah.\nKalah Kreedati Gachchhatyayuh Tadapi Na Munchaty Ashavayuh.',
      meaning:
        'Day and night, evening and morning, winter and spring come and go again and again. Time plays, life ebbs away — yet the wind of desire does not leave.',
    },
    {
      id: 13,
      verseLabel: 'Verse 13',
      sanskrit:
        'द्वादशमञ्जरिकाभिरशेषः कथितो वैयाकरणस्यैषः।\nउपदेशो भूद्विद्यानिपुणैः श्रीमच्छन्करभगवच्छरणैः॥',
      transliteration:
        'Dvadashamanjarikabhir Asheshah Kathito Vaiyakaranasyaishah.\nUpadesho Bhud Vidyanipunaih Shrimachchhankara Bhagavachchharanaih.',
      meaning:
        'Thus through twelve verse-bouquets was this complete teaching told by the master grammarian. This instruction was given by the blessed Shankaracharya, at whose feet the learned take refuge.',
    },
    {
      id: 14,
      verseLabel: 'Verse 14',
      sanskrit:
        'काते कान्ता धनगतचिन्ता वातुल किं तव नास्ति नियन्ता।\nत्रिजगति सज्जनसङ्गतिरेका भवति भवार्णवतरणे नौका॥',
      transliteration:
        'Kate Kanta Dhana Gata Chinta Vatula Kim Tava Nasti Niyanta.\nTrijagati Sajjana Sangatireka Bhavati Bhavarnava Tarane Nauka.',
      meaning:
        'O distracted one, why this worry about wealth and wife? Is there no one to guide you? In all three worlds, the company of the virtuous alone is the boat to cross the ocean of worldly existence.',
    },
    {
      id: 15,
      verseLabel: 'Verse 15',
      sanskrit:
        'जटिलो मुण्डी लुञ्छितकेशः काषायाम्बरबहुकृतवेषः।\nपश्यन्नपि चन पश्यति मूढः उदरनिमित्तं बहुकृतवेषः॥',
      transliteration:
        'Jatilo Mundee Lunchhitakeshah Kashayambara Bahukritaveshah.\nPashyannapi Cha Na Pashyati Moodhah Udaranimitam Bahukritaveshah.',
      meaning:
        'One wears matted locks, another shaves his head, another plucks his hair out, another dons ochre robes — various disguises. The fool, seeing, does not see; all these outward shows are but for the sake of the belly.',
    },
    {
      id: 16,
      verseLabel: 'Verse 16',
      sanskrit:
        'अङ्गं गलितं पलितं मुण्डं दशनविहीनं जातं तुण्डम्।\nवृद्धो याति गृहीत्वा दण्डं तदपि न मुञ्चत्याशापिण्डम्॥',
      transliteration:
        'Angam Galitam Palitam Mundam Dashanavihinam Jatam Tundam.\nVriddho Yati Grihitva Dandam Tadapi Na Munchatyashapindam.',
      meaning:
        'The body has become decrepit, the head has turned grey, the mouth has become toothless. The old man walks leaning on a staff, yet the bundle of desires does not leave him.',
    },
    {
      id: 17,
      verseLabel: 'Verse 17',
      sanskrit:
        'अग्रे वह्निः पृष्ठे भानुः रात्रौ चुबुकसमर्पितजानुः।\nकरतलभिक्षस्तरुतलवासः तदपि न मुञ्चत्याशापाशः॥',
      transliteration:
        'Agre Vahnih Prishthe Bhanuh Ratrau Chubuka Samarpita Januh.\nKaratala Bhikshas Tarutala Vasah Tadapi Na Munchaty Ashapaashah.',
      meaning:
        'Before him is fire, behind him is the sun, at night he sits with knees held to his chin. He receives alms in his palms and lives under a tree, yet the noose of desire does not release him.',
    },
    {
      id: 18,
      verseLabel: 'Verse 18',
      sanskrit:
        'कुरुते गङ्गासागरगमनं व्रतपरिपालनमथवा दानम्।\nज्ञानविहीनः सर्वमतेन मुक्तिं न भजति जन्मशतेन॥',
      transliteration:
        'Kurute Gangasagara Gamanam Vrataparipalanam Athava Danam.\nJnanavihinah Sarvamatena Muktim Na Bhajati Janmashatena.',
      meaning:
        'One may go on pilgrimage to where the Ganga meets the ocean, observe vows, or give charity. Yet without knowledge, by the consensus of all teachings, one does not attain liberation even in a hundred births.',
    },
    {
      id: 19,
      verseLabel: 'Verse 19',
      sanskrit:
        'सुरमन्दिरतरुमूलनिवासः शय्या भूतलमजिनं वासः।\nसर्वपरिग्रहभोगत्यागः कस्य सुखं न करोति विरागः॥',
      transliteration:
        'Sura Mandira Taru Moola Nivasah Shayya Bhutalam Ajinam Vasah.\nSarva Parigraha Bhoga Tyagah Kasya Sukham Na Karoti Viragah.',
      meaning:
        'Dwelling at the foot of a temple or a tree, sleeping on the bare ground, wearing a deerskin, renouncing all possessions and pleasures — to whom does such dispassion not bring happiness?',
    },
    {
      id: 20,
      verseLabel: 'Verse 20',
      sanskrit:
        'योगरतो वा भोगरतो वा सङ्गरतो वा सङ्गविहीनः।\nयस्य ब्रह्मणि रमते चित्तं नन्दति नन्दति नन्दत्येव॥',
      transliteration:
        'Yogarato Va Bhogarato Va Sangarato Va Sangaviheenah.\nYasya Brahmani Ramate Chittam Nandati Nandati Nandatyeva.',
      meaning:
        'Whether one delights in yoga or in enjoyment, whether in company or in solitude — he whose mind revels in Brahman, he alone rejoices, rejoices, truly rejoices.',
    },
    {
      id: 21,
      verseLabel: 'Verse 21',
      sanskrit:
        'भगवद्गीता किञ्चिदधीता गङ्गाजललवकणिका पीता।\nसकृदपि येन मुरारिसमर्चा क्रियते तस्य यमेन न चर्चा॥',
      transliteration:
        'Bhagavad Geeta Kinchid Adheeta Gangajala Lavakanika Peeta.\nSakridapi Yena Murari Samarcha Kriyate Tasya Yamena Na Charcha.',
      meaning:
        'For one who has studied even a little of the Bhagavad Gita, who has drunk even a drop of Ganga water, and who has worshipped Lord Murari even once — Yama, the god of death, has no hold over him.',
    },
    {
      id: 22,
      verseLabel: 'Verse 22',
      sanskrit:
        'पुनरपि जननं पुनरपि मरणं पुनरपि जननीजठरे शयनम्।\nइह संसारे बहुदुस्तारे कृपयापारे पाहि मुरारे॥',
      transliteration:
        'Punarapi Jananam Punarapi Maranam Punarapi Janani Jathare Shayanam.\nIha Samsare Bahudustare Kripayapare Pahi Murare.',
      meaning:
        'Again birth, again death, again lying in a mother\'s womb — this worldly existence is exceedingly difficult to cross. O Lord Murari, save me through Your boundless compassion.',
    },
    {
      id: 23,
      verseLabel: 'Verse 23',
      sanskrit:
        'रथ्याचर्पटविरचितकन्थः पुण्यापुण्यविवर्जितपन्थः।\nयोगी योगनियोजितचित्तो रमते बालोन्मत्तवदेव॥',
      transliteration:
        'Rathyacharpata Virachita Kanthah Punyapunya Vivarjita Panthah.\nYogi Yoganiyojita Chitto Ramate Balonmattavadeva.',
      meaning:
        'Wearing a garment patched from rags found on the road, treading a path beyond merit and demerit, the yogi whose mind is yoked in yoga revels like a child or a madman.',
    },
    {
      id: 24,
      verseLabel: 'Verse 24',
      sanskrit:
        'कस्त्वं कोऽहं कुत आयातः का मे जननी को मे तातः।\nइति परिभावय सर्वमसारं विश्वं त्यक्त्वा स्वप्नविचारम्॥',
      transliteration:
        'Kastvam Koham Kuta Ayatah Ka Me Janani Ko Me Tatah.\nIti Paribhavaya Sarvamasaram Vishvam Tyaktva Svapna Vicharam.',
      meaning:
        'Who are you? Who am I? Where have I come from? Who is my mother? Who is my father? Thus reflect, and see that the entire world is without substance — abandon it as a dream.',
    },
    {
      id: 25,
      verseLabel: 'Verse 25',
      sanskrit:
        'त्वयि मयि चान्यत्रैको विष्णुः व्यर्थं कुप्यसि मय्यसहिष्णुः।\nभव समचित्तः सर्वत्र त्वं वाञ्छस्यचिराद्यदि विष्णुत्वम्॥',
      transliteration:
        'Tvayi Mayi Chanyatraiko Vishnuh Vyartham Kupyasi Mayyasahishnuh.\nBhava Samachittah Sarvatra Tvam Vanchasyachirad Yadi Vishnutvam.',
      meaning:
        'In you, in me, and everywhere else there is but one Vishnu. In vain do you get angry with me, being impatient. See yourself in all beings and abandon all sense of difference — if you wish to attain Vishnu-hood soon.',
    },
    {
      id: 26,
      verseLabel: 'Verse 26',
      sanskrit:
        'शत्रौ मित्रे पुत्रे बन्धौ मा कुरु यत्नं विग्रहसन्धौ।\nसर्वस्मिन्नपि पश्यात्मानं सर्वत्रोत्सृज भेदाज्ञानम्॥',
      transliteration:
        'Shatrau Mitre Putre Bandhau Ma Kuru Yatnam Vigraha Sandhau.\nSarvasminapi Pashyatmanam Sarvatrotsrija Bhedajnanam.',
      meaning:
        'Do not waste your effort in strife or reconciliation with enemy, friend, son, or kinsman. See the Self in all beings and abandon everywhere the sense of difference born of ignorance.',
    },
    {
      id: 27,
      verseLabel: 'Verse 27',
      sanskrit:
        'कामं क्रोधं लोभं मोहं त्यक्त्वाऽत्मानं भावय कोऽहम्।\nआत्मज्ञानविहीना मूढाः ते पच्यन्ते नरकनिगूढाः॥',
      transliteration:
        'Kamam Krodham Lobham Moham Tyaktvatmanam Bhavaya Koham.\nAtmajnana Vihina Mudhah Te Pachyante Naraka Nigudhah.',
      meaning:
        'Giving up desire, anger, greed, and delusion, contemplate "Who am I?" Those fools who are devoid of Self-knowledge are tormented, bound in the unseen prison of hell.',
    },
    {
      id: 28,
      verseLabel: 'Verse 28',
      sanskrit:
        'गेयं गीतानामसहस्रं ध्येयं श्रीपतिरूपमजस्रम्।\nनेयं सज्जनसङ्गे चित्तं देयं दीनजनाय च वित्तम्॥',
      transliteration:
        'Geyam Geetanama Sahasram Dhyeyam Shripatiroopam Ajasram.\nNeyam Sajjana Sange Chittam Deyam Deenajanaya Cha Vittam.',
      meaning:
        'Sing the Bhagavad Gita and the thousand names of Vishnu, meditate ceaselessly on the form of the Lord of Lakshmi, lead the mind to the company of the good, and give your wealth to the poor and needy.',
    },
    {
      id: 29,
      verseLabel: 'Verse 29',
      sanskrit:
        'सुखतः क्रियते रामाभोगः पश्चाद्धन्त शरीरे रोगः।\nयद्यपि लोके मरणं शरणं तदपि न मुञ्चति पापाचरणम्॥',
      transliteration:
        'Sukhatah Kriyate Ramabhogah Pashchaddhanta Shareere Rogah.\nYadyapi Loke Maranam Sharanam Tadapi Na Munchati Papacharanam.',
      meaning:
        'Pleasures are enjoyed with ease, but afterwards disease afflicts the body. Though death is the certain refuge of all in this world, even so one does not give up sinful conduct.',
    },
    {
      id: 30,
      verseLabel: 'Verse 30',
      sanskrit:
        'अर्थमनर्थं भावय नित्यं नास्तिततः सुखलेशः सत्यम्।\nपुत्रादपि धनभाजां भीतिः सर्वत्रैषा विहिता रीतिः॥',
      transliteration:
        'Artham Anartham Bhavaya Nityam Nasti Tatah Sukhaleshah Satyam.\nPutradapi Dhanabhajam Bheetih Sarvatraisha Vihita Reetih.',
      meaning:
        'Reflect always that wealth is calamitous — truly there is not the least happiness from it. The wealthy fear even their own sons. This is the established way everywhere.',
    },
    {
      id: 31,
      verseLabel: 'Verse 31',
      sanskrit:
        'प्राणायामं प्रत्याहारं नित्यानित्यविवेकविचारम्।\nजाप्यसमेतसमाधिविधानं कुर्ववधानं महदवधानम्॥',
      transliteration:
        'Pranayamam Pratyaharam Nityanitya Viveka Vicharam.\nJapyasameta Samadhi Vidhanam Kurvavathanam Mahadavadhanam.',
      meaning:
        'Practice breath control, sense withdrawal, discrimination between the eternal and the transient, and the discipline of samadhi accompanied by japa. Do this with great care and attention.',
    },
  ],
};

const subrahmanyaBhujangam: Stotra = {
  id: 'subrahmanya-bhujangam',
  title: 'Subrahmanya Bhujangam',
  subtitle: 'सुब्रह्मण्यभुजङ्गम्',
  deity: 'Subrahmanya',
  description:
    'Thirty-three verses in the serpentine (bhujanga) metre, composed by Adi Shankaracharya at Tiruchendur. A deeply personal hymn of devotion to Lord Subrahmanya.',
  benefits: [
    'Bestows divine protection and freedom from fear',
    'Grants healing from illness and removal of afflictions',
    'Awakens deep devotion and inner peace',
  ],
  estimatedMinutes: 12,
  icon: '',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'सदा बालरूपाऽपि विघ्नाद्रिहन्त्री\nमहादन्तिवक्त्राऽपि पञ्चास्यमान्या।\nविधीन्द्रादिमृग्या गणेशाभिधा मे\nविधत्तां श्रियं कापि कल्याणमूर्तिः॥',
      transliteration:
        'Sada Balarupaapi Vighnadrihanstree\nMahadantivaktraapi Panchasyamanya.\nVidheendradimrigya Ganeshaabhidha Me\nVidhattam Shriyam Kapi Kalyanamoortih.',
      meaning:
        'May that auspicious form called Ganesha — though ever child-like, yet the destroyer of the mountain of obstacles; though elephant-faced, yet honored by the five-faced Shiva; sought by Brahma, Indra, and others — bestow prosperity upon me.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'न जानामि शब्दं न जानामि चार्थं\nन जानामि पद्यं न जानामि गद्यम्।\nचिदेका षडास्या हृदि द्योतते मे\nमुखान्निःसरन्ते गिरश्चापि चित्रम्॥',
      transliteration:
        'Na Janami Shabdam Na Janami Chartham\nNa Janami Padyam Na Janami Gadyam.\nChideka Shadasya Hridi Dyotate Me\nMukhannirsarante Girashchapi Chitram.',
      meaning:
        'I know not words, I know not meanings, I know not poetry, I know not prose. Yet the one consciousness of the six-faced Lord shines in my heart, and wondrous words flow from my mouth.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'मयूराधिरूढं महावाक्यगूढं\nमनोहारिदेहं महच्चित्तगेहम्।\nमहीदेवदेवं महावेदभावं\nमहादेवबालं भजे लोकपालम्॥',
      transliteration:
        'Mayuradhiroodham Mahavakyagoodham\nManoharideham Mahachchittageham.\nMaheedevadevan Mahavedabhavam\nMahadevabalam Bhaje Lokapalam.',
      meaning:
        'I worship the protector of the worlds — who rides the peacock, who embodies the secret of the great Vedic utterances, whose form captivates the mind, who dwells in great hearts, who is the God of gods on earth, the essence of the great Vedas, the son of Mahadeva.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'यदा सन्निधानं गता मानवा मे\nभवाम्भोधिपारं गतास्ते तदैव।\nइति व्यञ्जयन्सिन्धुतीरे य आस्ते\nतमीडे पवित्रं पराशक्तिपुत्रम्॥',
      transliteration:
        'Yada Sannidhanam Gata Manava Me\nBhavambhodhiparam Gataste Tadaiva.\nIti Vyanjayan Sindhutere Ya Aste\nTameede Pavitram Parashaktiputram.',
      meaning:
        '"When people come to my presence, they have at that very moment crossed the ocean of worldly existence" — thus proclaiming, He who sits on the seashore, that pure son of Parashakti, Him I praise.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'यथाब्धेस्तरङ्गा लयं यान्ति तुङ्गाः\nतथैवापदः सन्निधौ सेवतां मे।\nइतीवोर्मिपङ्क्तीर्नृणां दर्शयन्तं\nसदा भावये हृत्सरोजे गुहं तम्॥',
      transliteration:
        'Yathabdhestaranga Layam Yanti Tungah\nTathaivapadah Sannidhau Sevatam Me.\nIteevormipankteernrinam Darshayantam\nSada Bhavaye Hritsaroje Guham Tam.',
      meaning:
        '"Just as the mighty waves of the ocean subside, so too do the calamities of those who serve in my presence" — thus showing through the rows of waves, I always meditate on that Guha in the lotus of my heart.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'गिरौ मन्निवासे नरा येऽधिरूढाः\nतदा पर्वतं नौमि गौरीसमेतम्।\nइतीव ब्रुवन्गन्धशैलाधिरूढः\nस देवो मुदा मे ददात्विष्टसिद्धिम्॥',
      transliteration:
        'Girau Mannivase Nara Yedhiroohah\nTada Parvatam Naumi Gaurisameetam.\nIteeva Bruvan Gandhashailadhiroohah\nSa Devo Muda Me Dadatvishta Siddhim.',
      meaning:
        '"Those who ascend the mountain where I dwell — them I consider equal to Parvata (Shiva) accompanied by Gauri" — thus speaking, may that God who sits atop the fragrant hill joyfully grant me the fulfillment of my desires.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'महाम्भोधितीरे महापापचोरे\nमुनीन्द्रानुकूले सुगन्धाख्यशैले।\nगुहायां वसन्तं स्वभासा लसन्तं\nजनार्तिं हरन्तं श्रयामो गुहं तम्॥',
      transliteration:
        'Mahambhodhitere Mahapapachore\nMuneendranukule Sugandhakhyashaile.\nGuhayam Vasantam Svabhasa Lasantam\nJanartim Harantam Shrayamo Guham Tam.',
      meaning:
        'On the shore of the great ocean, at the mountain called Sugandha, favorable to the great sages, the stealer of great sins — we take refuge in that Guha who dwells in the cave, who shines with His own radiance, who removes the afflictions of people.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'लसत्स्वर्णगेहे नृणां कामदोहे\nसुमस्तोमसञ्छन्नमाणिक्यमञ्चे।\nसमुद्यत्सहस्रार्कतुल्यप्रकाशं\nसदा भावये कार्तिकेयं सुरेशम्॥',
      transliteration:
        'Lasat Svarnagehe Nrinam Kamadohe\nSumastoma Sanchhannamanikya Manche.\nSamudyat Sahasrarka Tulya Prakasham\nSada Bhavaye Kartikeyam Suresham.',
      meaning:
        'In a resplendent golden temple that fulfills the desires of people, on a jeweled throne covered with heaps of flowers, I always meditate on Kartikeya, the lord of the gods, whose radiance equals a thousand rising suns.',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'रणद्धंसके मञ्जुलेऽत्यन्तशोणे\nमनोहारिलावण्यपीयूषपूर्णे।\nमनःषट्पदो मे भवक्लेशतप्तः\nसदा मोदतां स्कन्द ते पादपद्मे॥',
      transliteration:
        'Ranaddhamske Manjuletyanta Shone\nManohari Lavanya Peeyusha Purne.\nManah Shatpado Me Bhavakleshataptah\nSada Modatam Skanda Te Padapadme.',
      meaning:
        'O Skanda, may my mind — like a bee scorched by the afflictions of worldly existence — always delight in Your lotus feet, which are beautiful, exceedingly red with tinkling anklets, and filled with the nectar of enchanting grace.',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'सुवर्णाभदिव्याम्बरैर्भासमानां\nक्वणत्किङ्किणीमेखलाशोभमानाम्।\nलसद्धेमपट्टेन विद्योतमानां\nकटिं भावये स्कन्द ते दीप्यमानाम्॥',
      transliteration:
        'Suvarnabha Divyambarair Bhasamanam\nKvanat Kinkini Mekhala Shobhamanam.\nLasad Hema Pattena Vidyotamanam\nKatim Bhavaye Skanda Te Deepyamanam.',
      meaning:
        'O Skanda, I meditate on Your radiant waist, which shines with golden divine garments, is adorned with a girdle of tinkling bells, and blazes with a brilliant golden belt.',
    },
    {
      id: 11,
      verseLabel: 'Verse 11',
      sanskrit:
        'पुलिन्देशकन्याघनाभोगतुङ्ग-\nस्तनालिङ्गनासक्तकाश्मीररागम्।\nनमस्यामहं कार्तिकेयस्य कान्तम्-\nउरश्शोभमानं महाभूषणाढ्यम्॥',
      transliteration:
        'Pulindeshakanya Ghanabhoga Tunga\nStanalingana Asakta Kashmeera Ragam.\nNamasyamaham Kartikeyasya Kantam\nUrah Shobhamanam Mahabhushanadhyam.',
      meaning:
        'I adore the beautiful chest of Kartikeya, reddened with saffron marks from the embrace of the full-breasted daughter of the Pulinda chief (Valli), shining with magnificent ornaments.',
    },
    {
      id: 12,
      verseLabel: 'Verse 12',
      sanskrit:
        'विधौ क्लृप्तदण्डान् स्वलीलाधृतण्डान्\nनिरस्तेभशुण्डान् द्विषत्कालदण्डान्।\nहतेन्द्रारिषण्डान् जगत्त्राणशौण्डान्\nसदा ते प्रचण्डान् श्रये बाहुदण्डान्॥',
      transliteration:
        'Vidhau Klriptadandan Svaleeladhritandan\nNirastebhashundan Dvishatkaladandan.\nHatendrarisandan JagattranaShaundan\nSada Te Prachandan Shraye Bahudandan.',
      meaning:
        'I take refuge in Your mighty arms — which punished Brahma, playfully hold the lance, severed the elephant demon\'s trunk, are the rod of death for enemies, destroyed the hordes of Indra\'s foes, and are bold in protecting the world.',
    },
    {
      id: 13,
      verseLabel: 'Verse 13',
      sanskrit:
        'सदा शारदाम्भोजपत्रायताक्षं\nस्फुरन्मन्दहासं कृपापूर्णदृष्टिम्।\nमहामुक्तिदं देवसेनाधिनाथं\nसदा भावयेऽहं महासेनदेवम्॥',
      transliteration:
        'Sada Sharadambhoja Patrayataksham\nSphuran Mandahasam Kripapurnadrishtim.\nMahamuktidan Devasenaadhinatham\nSada Bhavayeham Mahasenadevam.',
      meaning:
        'I always meditate on Lord Mahasena — whose eyes are wide like autumn lotus petals, whose gentle smile radiates, whose glance is full of compassion, who grants great liberation, the lord of Devasena.',
    },
    {
      id: 14,
      verseLabel: 'Verse 14',
      sanskrit:
        'ज्वलच्छक्तिहस्तं त्रिलोकैकनाथं\nप्रवालप्रभाशोणकान्तिप्रपूर्णम्।\nशरत्कालचन्द्रप्रभावक्त्ररम्यं\nनमस्यामि देवं सदा कार्तिकेयम्॥',
      transliteration:
        'Jvalachchhakti Hastam Trilokaiknatham\nPravalaprabha Shona Kanti Prapurnam.\nSharatkala Chandra Prabha Vaktram Ramyam\nNamasyami Devam Sada Kartikeyam.',
      meaning:
        'I bow always to Lord Kartikeya — who holds the blazing Vel in His hand, the sole lord of the three worlds, filled with a radiance red as coral, whose face is lovely as the autumn moon.',
    },
    {
      id: 15,
      verseLabel: 'Verse 15',
      sanskrit:
        'समस्तासुरान्हन्तुमुग्रं प्रयातं\nसुराणामभीष्टार्थसिद्धिप्रदान्तम्।\nधृतं शक्तिशूलं जगत्त्राणशीलं\nनमस्यामि सेनान्यमार्याभिवन्द्यम्॥',
      transliteration:
        'Samastasuraan Hantum Ugram Prayatam\nSuranam Abhishtartha Siddhipradantam.\nDhritam Shakti Shulam Jagatrana Sheelam\nNamasyami Senanyam Aryabhivandyam.',
      meaning:
        'I bow to the commander of the divine army, revered by the noble — who set forth fiercely to slay all the demons, who grants the gods the fulfillment of their desires, who holds the lance and spear, whose nature is to protect the world.',
    },
    {
      id: 16,
      verseLabel: 'Verse 16',
      sanskrit:
        'लसद्देवसेनाभुजालिङ्गिताङ्गं\nवलल्लीकराम्भोजसम्प्रीतवक्त्रम्।\nउमापुत्रमार्तस्य रक्षापरं तं\nशरण्यं गुहं वायुवेगं प्रपद्ये॥',
      transliteration:
        'Lasad Devasena Bhujalingitangam\nValalleekarambhoja Sampreetavaktram.\nUmaputram Artasya Rakshaparam Tam\nSharanyam Guham Vayuvegam Prapadye.',
      meaning:
        'I take refuge in that Guha, swift as the wind — whose body is embraced by the radiant arms of Devasena, whose face beams with joy at Valli\'s lotus hands, the son of Uma, devoted to protecting the afflicted, the worthy refuge.',
    },
    {
      id: 17,
      verseLabel: 'Verse 17',
      sanskrit:
        'गुरुत्वं निजं दर्शयन्ब्रह्मणस्तं\nचतुर्वक्त्रदेवं स्वयं शिक्षयन्तम्।\nप्रणम्यास्मि देवं सनातार्थदं तं\nकुमारं षडास्यं गुहं भावयामि॥',
      transliteration:
        'Gurutvam Nijam Darshayan Brahmanastam\nChaturvaktra Devam Svayam Shikshayantam.\nPranamyasmi Devam Sanatarthadam Tam\nKumaram Shadasyam Guham Bhavayami.',
      meaning:
        'I prostrate before that God who demonstrated His own guru-hood by teaching Brahma himself, the four-faced lord. I meditate on that Kumara, the six-faced Guha, the bestower of eternal truth.',
    },
    {
      id: 18,
      verseLabel: 'Verse 18',
      sanskrit:
        'उमाशम्भुपुत्रं शिवं श्रीनिवासं\nसुराराध्यपादं सुधाधारभासम्।\nजनार्तिप्रणाशं जगत्कल्पवृक्षं\nनमस्यामि देवं सुरेशं सदैव॥',
      transliteration:
        'Umashambhu Putram Shivam Shreeneevasam\nSuraradhyapadam Sudhadharabhasm.\nJanartipranasham Jagatkalpavriksham\nNamasyami Devam Suresham Sadaiva.',
      meaning:
        'I bow always to the lord of the gods — the son of Uma and Shambhu, the auspicious one, the abode of Shri, whose feet are worshipped by the gods, who shines like a stream of nectar, who destroys the sorrows of people, the wish-fulfilling tree of the world.',
    },
    {
      id: 19,
      verseLabel: 'Verse 19',
      sanskrit:
        'महाम्भोनिधेस्तीरसंस्थं विभान्तं\nप्रभापूरितं रत्नसिंहासनस्थम्।\nमुनीन्द्रस्तुतं वेदवाक्यप्रतीतं\nसदा भावयेऽहं गुहं शैलवासम्॥',
      transliteration:
        'Mahambhonidhes Teerasamsttham Vibhantam\nPrabhapuritam Ratnasinhasanastham.\nMuneendrastutam Vedavakyaprateeram\nSada Bhavayeham Guham Shailvasam.',
      meaning:
        'I always meditate on Guha, the mountain-dweller — resplendent on the shore of the great ocean, radiant on a jeweled throne, praised by the greatest sages, known through Vedic declarations.',
    },
    {
      id: 20,
      verseLabel: 'Verse 20',
      sanskrit:
        'न विद्या न योगो न भोगो न सत्त्वं\nन मित्रं न पुत्रं न बन्धुर्न गोत्रम्।\nत्वदन्यत्र कृत्ये गतिं नैव पश्ये\nगुहं प्रार्थयेऽहं ददस्वेष्टसिद्धिम्॥',
      transliteration:
        'Na Vidya Na Yogo Na Bhogo Na Sattvam\nNa Mitram Na Putram Na Bandhurna Gotram.\nTvadanyatra Kritye Gatim Naiva Pashye\nGuham Prarthayeham Dadasveshta Siddhim.',
      meaning:
        'I have no learning, no yoga, no wealth, no goodness, no friend, no son, no kinsman, no lineage. I see no refuge anywhere other than You. O Guha, I pray to You — grant me the fulfillment of my desires.',
    },
    {
      id: 21,
      verseLabel: 'Verse 21',
      sanskrit:
        'न जानामि धर्मं न चैवात्मविद्यां\nन भक्तिं न मुक्तिं न चान्यत्प्रमाणम्।\nसदा दीनवत्सत्स्वभावं भवन्तं\nगुहं भावयन्मां सदा पालय त्वम्॥',
      transliteration:
        'Na Janami Dharmam Na Chaivatmavidyam\nNa Bhaktim Na Muktim Na Chanyatpramanam.\nSada Deenavatsatsvabhavam Bhavantam\nGuham Bhavayan Mam Sada Palaya Tvam.',
      meaning:
        'I know not dharma, nor Self-knowledge, nor devotion, nor liberation, nor any other means. You whose nature is always to cherish the meek — O Guha, meditating on You, always protect me.',
    },
    {
      id: 22,
      verseLabel: 'Verse 22',
      sanskrit:
        'पुनर्जन्मदुःखं सदा भोगसक्तं\nकदा मोक्षलाभं भवत्सन्निधानात्।\nत्वदेकं शरण्यं सदा देवदेव\nकृपालुं गुहं नौमि सन्तापहारम्॥',
      transliteration:
        'Punarjanma Duhkham Sada Bhogasaktam\nKada Mokshalabham Bhavatsannidhanat.\nTvadekam Sharanyam Sada Devadeva\nKripalum Guham Naumi Santapaharam.',
      meaning:
        'Always mired in the suffering of repeated birth and attached to sense pleasures — when will I attain liberation through Your presence? You alone are my refuge, O God of gods. I bow to the compassionate Guha, the remover of anguish.',
    },
    {
      id: 23,
      verseLabel: 'Verse 23',
      sanskrit:
        'विनाथं विपन्नं सदा दुःखसक्तं\nविमोचय भक्तं कृपालो दयालो।\nकृपाम्भोनिधिं शक्तिपाणिं गुहं तं\nनमस्यामि भक्त्या सदा मामुधर त्वम्॥',
      transliteration:
        'Vinatham Vipannam Sada Duhkhasaktam\nVimochaya Bhaktam Kripalo Dayalo.\nKripambhonidhim Shaktipaanim Guham Tam\nNamasyami Bhaktya Sada Mamuddhara Tvam.',
      meaning:
        'I am without a protector, fallen, ever gripped by suffering. O compassionate one, O merciful one, liberate this devotee. I bow with devotion to that Guha, the ocean of mercy who holds the Vel — always uplift me.',
    },
    {
      id: 24,
      verseLabel: 'Verse 24',
      sanskrit:
        'ददस्वैव बुद्धिं मनश्शुद्धिमात्मं\nभवन्मन्दिरे सन्ततं भक्तिमूर्तिम्।\nविभो शैलवास प्रसीद प्रसीद\nगुहप्राणनाथ प्रभो रक्ष भक्तम्॥',
      transliteration:
        'Dadasvaiva Buddhim Manah Shuddhim Atmam\nBhavan Mandire Santatam Bhaktimoortim.\nVibho Shailavasa Praseeda Praseeda\nGuha Prananatha Prabho Raksha Bhaktam.',
      meaning:
        'Grant me wisdom, purity of mind, and Self-knowledge. May I be an embodiment of devotion forever in Your temple. O all-pervading one, O mountain-dweller, be pleased, be pleased! O Guha, lord of my life-breath, O Lord, protect this devotee.',
    },
    {
      id: 25,
      verseLabel: 'Verse 25',
      sanskrit:
        'कदा वा त्वदीयं पदाम्भोजमूलं\nनमस्कृत्य दैन्यं त्यजित्वा भवन्तम्।\nसमालोक्य लोकान्समस्तान्विहाय\nभवत्सन्निधौ मे मनो लीनमस्तु॥',
      transliteration:
        'Kada Va Tvadeeyam Padambhojamoolam\nNamaskritya Dainyam Tyajitva Bhavantam.\nSamalokya Lokan Samastan Vihaya\nBhavatsannidhau Me Mano Leenamastu.',
      meaning:
        'When will I, having bowed at the root of Your lotus feet and cast off wretchedness, behold You, renounce all the worlds, and let my mind be absorbed in Your presence?',
    },
    {
      id: 26,
      verseLabel: 'Verse 26',
      sanskrit:
        'इदं विश्वमायाविलासं विचित्रं\nविधित्सामि मुक्तिं परेशात्कृपां ते।\nकदा स्कन्दमूर्तिं हृदि स्थापयित्वा\nभवाम्भोनिधिं तारयेमं प्रभो माम्॥',
      transliteration:
        'Idam Vishvamaya Vilasam Vichitram\nVidhitsami Muktim Pareshat Kripam Te.\nKada Skandamoortim Hridi Sthapayitva\nBhavambhonidhim Taraye Mam Prabho Mam.',
      meaning:
        'This world is a wondrous play of cosmic illusion. I seek liberation and Your grace, O supreme Lord. When will I, having installed the form of Skanda in my heart, be ferried across the ocean of worldly existence? O Lord, save me.',
    },
    {
      id: 27,
      verseLabel: 'Verse 27',
      sanskrit:
        'न कश्चिन्मयि स्नेहमीशे करोति\nन बन्धुर्न मित्रं न माता पिता वा।\nत्वमेकं शरण्यं भवाब्धिप्रवीणं\nगुहे रक्ष रक्ष प्रभो मां दयालो॥',
      transliteration:
        'Na Kashchinmayi Sneham Eeshe Karoti\nNa Bandhurna Mitram Na Mata Pita Va.\nTvamekam Sharanyam Bhavabdhipraveenam\nGuhe Raksha Raksha Prabho Mam Dayalo.',
      meaning:
        'No one in this world shows me affection — no kinsman, no friend, no mother, no father. You alone are my refuge, skilled in crossing the ocean of existence. O Guha, protect me, protect me, O compassionate Lord.',
    },
    {
      id: 28,
      verseLabel: 'Verse 28',
      sanskrit:
        'नमस्ते नमस्ते सदा शैलवास\nनमस्ते नमस्ते कृपापूर्णदृष्टे।\nनमस्ते नमस्ते गुहे दीनबन्धो\nनमस्ते नमस्ते सुब्रह्मण्यदेव॥',
      transliteration:
        'Namaste Namaste Sada Shailavasa\nNamaste Namaste Kripapurnadrishte.\nNamaste Namaste Guhe Deenabandho\nNamaste Namaste Subrahmanya Deva.',
      meaning:
        'Salutations, salutations to You, O eternal mountain-dweller. Salutations, salutations to You whose glance is full of compassion. Salutations, salutations to You, O Guha, friend of the meek. Salutations, salutations to You, O Lord Subrahmanya.',
    },
    {
      id: 29,
      verseLabel: 'Verse 29',
      sanskrit:
        'कदा योगसिद्धिं करोमीश भक्त्या\nकदा ते कटाक्षं लभेयं दयालो।\nकदा वीतशोकं पदं मे भवित्री\nकदा भक्तवात्सल्यमीशे कृपां ते॥',
      transliteration:
        'Kada Yogasiddhim Karomeesh Bhaktya\nKada Te Kataksham Labheyam Dayalo.\nKada Veetashokam Padam Me Bhavitree\nKada Bhaktavatsalyam Eeshe Kripam Te.',
      meaning:
        'When will I attain yogic perfection through devotion, O Lord? When will I receive Your side-glance, O merciful one? When will a state free of sorrow be mine? When will I know Your parental tenderness and grace?',
    },
    {
      id: 30,
      verseLabel: 'Verse 30',
      sanskrit:
        'कदा पश्यनन्तं पदं स्कन्दमीशं\nकदा रोगशोकादिनिर्मुक्तदेहम्।\nकदा शुद्धमाभासमाद्यन्तहीनं\nकदा मे मनो योगसिद्धिं लभेत॥',
      transliteration:
        'Kada Pashyanantam Padam Skanda Meesham\nKada Rogashokadi Nirmuktadeham.\nKada Shuddham Abhasam Adyantaheenam\nKada Me Mano Yogasiddhim Labhet.',
      meaning:
        'When will I behold the infinite state of Skanda, the Lord? When will my body be free from disease and grief? When will I see the pure effulgence that has no beginning or end? When will my mind attain yogic realization?',
    },
    {
      id: 31,
      verseLabel: 'Verse 31',
      sanskrit:
        'अपस्मारकुष्ठक्षयार्शःप्रमेह-\nज्वरोन्मादगुल्मादिरोगा महान्तः।\nपिशाचाश्च सर्वे भवत्पत्रभूतिं\nविलोक्य क्षणात्तारकारे द्रवन्ते॥',
      transliteration:
        'Apasmara Kushtha Kshayarshah Prameha\nJvaronmada Gulmadi Roga Mahantah.\nPishachascha Sarve Bhavatpatrabhutin\nVilokya Kshanat Tarakare Dravante.',
      meaning:
        'Epilepsy, leprosy, consumption, piles, diabetes, fever, madness, tumors, and all great diseases — and all evil spirits — upon beholding the sacred ash blessed by You, O slayer of Taraka, they flee in an instant.',
    },
    {
      id: 32,
      verseLabel: 'Verse 32',
      sanskrit:
        'दृशि स्कन्दमूर्तिः श्रुतौ स्कन्दकीर्तिः\nमुखे मे पवित्रं सदा तच्चरित्रम्।\nकरे तस्य कृत्यं वपुस्तस्य भृत्यं\nगुहे सन्तु लीना ममाशेषभावाः॥',
      transliteration:
        'Drishi Skandamoortih Shrutau Skandakeertih\nMukhe Me Pavitram Sada Tachchhritram.\nKare Tasya Krityam Vapustasya Bhrityam\nGuhe Santu Leena Mamasheshabhavah.',
      meaning:
        'In my eyes, the form of Skanda; in my ears, the glory of Skanda; on my lips, His sacred story always; in my hands, His work; my body, His servant. May all my faculties be absorbed in Guha.',
    },
    {
      id: 33,
      verseLabel: 'Verse 33',
      sanskrit:
        'मुनीनामुताहो नृणां भक्तिभाजाम्-\nअभीष्टप्रदाः सन्ति सर्वत्र देवाः।\nनृणामन्त्यजानामपि स्वार्थदाने\nगुहाद्देवमन्यं न जाने न जाने॥',
      transliteration:
        'Muninaam Utaho Nrinam Bhaktibhajam\nAbhishtapradah Santi Sarvatra Devah.\nNrinam Antyajaanam Api Svarthadane\nGuhad Devam Anyam Na Jane Na Jane.',
      meaning:
        'For sages, and indeed for all devotees, there are gods everywhere who grant their wishes. But for the lowliest of people too, in granting their heart\'s desire — I know of no god other than Guha, I know of no god other than Guha.',
    },
  ],
};

const saraswatiStotram: Stotra = {
  id: 'saraswati-stotram',
  title: 'Saraswati Stotram',
  subtitle: 'सरस्वतीस्तोत्रम्',
  deity: 'Saraswati',
  description: 'Twenty-one verses by Sage Agastya in praise of Goddess Saraswati, the divine bestower of knowledge, wisdom, and speech.',
  benefits: [
    'Sharpens intellect, memory, and power of speech',
    'Removes ignorance and the darkness of delusion',
    'Bestows mastery in learning, arts, and all vidyās',
  ],
  estimatedMinutes: 8,
  icon: 'M9 24 Q4 24 4 20 Q4 16 9 16 Q14 16 14 20 Q14 24 9 24 M13.5 21.5 L26 6.5 M11 20 L24 5',
  verses: [
    {
      id: 1,
      verseLabel: 'Shloka 1',
      sanskrit:
        'या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता\nया वीणावरदण्डमण्डितकरा या श्वेतपद्मासना।\nया ब्रह्माच्युतशङ्करप्रभृतिभिर्देवैः सदा पूजिता\nसा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥',
      transliteration:
        'Yā kundendu-tuṣāra-hāra-dhavalā yā śubhra-vastrāvṛtā\nyā vīṇā-vara-daṇḍa-maṇḍita-karā yā śveta-padmāsanā |\nyā brahmācyuta-śaṅkara-prabhṛtibhir-devaiḥ sadā pūjitā\nsā māṁ pātu sarasvatī bhagavatī niḥśeṣa-jāḍyāpahā ||',
      meaning:
        'May Goddess Saraswati protect me — she who is as radiant as the jasmine, the moon, and a garland of snow; who is draped in pure white garments; whose hands are adorned with the veena; who is seated on a white lotus; and who is ever worshipped by Brahma, Vishnu, Shankara, and all the gods — the remover of all ignorance.',
    },
    {
      id: 2,
      verseLabel: 'Shloka 2',
      sanskrit:
        'दोर्भिर्युक्ता चतुर्भिः स्फटिकमणिनिभैरक्षमालां दधाना\nहस्तेनैकेन पद्मं सितमपि च शुकं पुस्तकं चापरेण।\nभासा कुन्देन्दुशङ्खस्फटिकमणिनिभा भासमानाऽसमाना\nसा मे वाग्देवतेयं निवसतु वदने सर्वदा सुप्रसन्ना॥',
      transliteration:
        'Dorbhir-yuktā caturbhiḥ sphaṭika-maṇi-nibhair-akṣamālāṁ dadhānā\nhastenaikena padmaṁ sitam-api ca śukaṁ pustakaṁ cāpareṇa |\nbhāsā kundendu-śaṅkha-sphaṭika-maṇi-nibhā bhāsamānā-samānā\nsā me vāg-devateyaṁ nivasatu vadane sarvadā suprasannā ||',
      meaning:
        'With four crystal-bright arms — holding a rosary, a white lotus, a parrot, and a book — shining with the lustre of jasmine, moon, conch, and crystal, beyond compare — may that ever-gracious Goddess of Speech dwell upon my tongue.',
    },
    {
      id: 3,
      verseLabel: 'Shloka 3',
      sanskrit:
        'सुरासुरसेवितपादपङ्कजा\nकरे विराजत्कमनीयपुस्तका।\nविरिञ्चिपत्नी कमलासनस्थिता\nसरस्वती नृत्यतु वाचि मे सदा॥',
      transliteration:
        'Surāsura-sevita-pāda-paṅkajā\nkare virājat-kamanīya-pustakā |\nviriñci-patnī kamalāsana-sthitā\nsarasvatī nṛtyatu vāci me sadā ||',
      meaning:
        'She whose lotus feet are served by gods and demons, who holds a beautiful book in her hand, the consort of Brahma, seated on a lotus — may Saraswati dance forever upon my speech.',
    },
    {
      id: 4,
      verseLabel: 'Shloka 4',
      sanskrit:
        'सरस्वती सरसिजकेसरप्रभा\nतपस्विनी सितकमलासनप्रिया।\nघनस्तनी कमलविलोललोचना\nमनस्विनी भवतु वरप्रसादिनी॥',
      transliteration:
        'Sarasvatī sarasija-kesara-prabhā\ntapasvinī sita-kamalāsana-priyā |\nghanastanī kamala-vilola-locanā\nmanasvinī bhavatu vara-prasādinī ||',
      meaning:
        'Saraswati, radiant as the filament of a lotus, devoted to austerity, fond of the white lotus seat, full-bosomed, with eyes playful as lotuses, noble-minded — may she bestow her choicest blessings.',
    },
    {
      id: 5,
      verseLabel: 'Shloka 5',
      sanskrit:
        'सरस्वति नमस्तुभ्यं वरदे कामरूपिणि।\nविद्यारम्भं करिष्यामि सिद्धिर्भवतु मे सदा॥',
      transliteration:
        'Sarasvati namastubhyaṁ varade kāma-rūpiṇi |\nvidyārambhaṁ kariṣyāmi siddhir-bhavatu me sadā ||',
      meaning:
        'O Saraswati, I bow to you, O bestower of boons, O fulfiller of desires. I am about to begin my studies — may success always be mine.',
    },
    {
      id: 6,
      verseLabel: 'Shloka 6',
      sanskrit:
        'सरस्वति नमस्तुभ्यं सर्वदेवि नमो नमः।\nशान्तरूपे शशिधरे सर्वयोगे नमो नमः॥',
      transliteration:
        'Sarasvati namastubhyaṁ sarva-devi namo namaḥ |\nśānta-rūpe śaśi-dhare sarva-yoge namo namaḥ ||',
      meaning:
        'O Saraswati, salutations to you, O Goddess of all, obeisance again and again. O peaceful one, bearer of the moon, embodiment of all yoga — salutations to you.',
    },
    {
      id: 7,
      verseLabel: 'Shloka 7',
      sanskrit:
        'नित्यानन्दे निराधारे निष्कलायै नमो नमः।\nविद्याधरे विशालाक्षि शुद्धज्ञाने नमो नमः॥',
      transliteration:
        'Nityānande nirādhāre niṣkalāyai namo namaḥ |\nvidyā-dhare viśālākṣi śuddha-jñāne namo namaḥ ||',
      meaning:
        'O eternal bliss, O self-sustained one, O partless one — salutations. O bearer of knowledge, O large-eyed one, O pure wisdom — salutations.',
    },
    {
      id: 8,
      verseLabel: 'Shloka 8',
      sanskrit:
        'शुद्धस्फटिकरूपायै सूक्ष्मरूपे नमो नमः।\nशब्दब्रह्मि चतुर्हस्ते सर्वसिद्ध्यै नमो नमः॥',
      transliteration:
        'Śuddha-sphaṭika-rūpāyai sūkṣma-rūpe namo namaḥ |\nśabda-brahmi catur-haste sarva-siddhyai namo namaḥ ||',
      meaning:
        'O one whose form is pure crystal, O subtle one — salutations. O embodiment of the Word-Brahman, O four-armed one, O granter of all accomplishments — salutations.',
    },
    {
      id: 9,
      verseLabel: 'Shloka 9',
      sanskrit:
        'मुक्तालङ्कृतसर्वाङ्ग्यै मूलाधारे नमो नमः।\nमूलमन्त्रस्वरूपायै मूलशक्त्यै नमो नमः॥',
      transliteration:
        'Muktālaṅkṛta-sarvāṅgyai mūlādhāre namo namaḥ |\nmūla-mantra-svarūpāyai mūla-śaktyai namo namaḥ ||',
      meaning:
        'O one whose entire body is adorned with pearls, O foundation of all existence — salutations. O one whose nature is the root-mantra, O primordial power — salutations.',
    },
    {
      id: 10,
      verseLabel: 'Shloka 10',
      sanskrit:
        'मनो मणिमहायोगे वागीश्वरि नमो नमः।\nवाग्भ्यै वरदहस्तायै वरदायै नमो नमः॥',
      transliteration:
        'Mano maṇi-mahā-yoge vāgīśvari namo namaḥ |\nvāgbhyai varada-hastāyai varadāyai namo namaḥ ||',
      meaning:
        'O jewel of the mind, O great yogini, O mistress of speech — salutations. O embodiment of speech, O one with boon-granting hands, O bestower of boons — salutations.',
    },
    {
      id: 11,
      verseLabel: 'Shloka 11',
      sanskrit:
        'वेदायै वेदरूपायै वेदान्तायै नमो नमः।\nगुणदोषविवर्जिन्यै गुणदीप्त्यै नमो नमः॥',
      transliteration:
        'Vedāyai veda-rūpāyai vedāntāyai namo namaḥ |\nguṇa-doṣa-vivarjinyai guṇa-dīptyai namo namaḥ ||',
      meaning:
        'O embodiment of the Vedas, O form of the Vedas, O essence of Vedanta — salutations. O one free from virtues and faults, O radiance of all qualities — salutations.',
    },
    {
      id: 12,
      verseLabel: 'Shloka 12',
      sanskrit:
        'सर्वज्ञाने सदानन्दे सर्वरूपे नमो नमः।\nसम्पन्नायै कुमार्यै च सर्वज्ञे ते नमो नमः॥',
      transliteration:
        'Sarva-jñāne sadānande sarva-rūpe namo namaḥ |\nsampannāyai kumāryai ca sarvajñe te namo namaḥ ||',
      meaning:
        'O all-knowledge, O eternal bliss, O all-form — salutations. O accomplished one, O ever-youthful maiden, O omniscient one — salutations to you.',
    },
    {
      id: 13,
      verseLabel: 'Shloka 13',
      sanskrit:
        'योगानार्य उमादेव्यै योगानन्दे नमो नमः।\nदिव्यज्ञान त्रिनेत्रायै दिव्यमूर्त्यै नमो नमः॥',
      transliteration:
        'Yogānārya umādevyai yogānande namo namaḥ |\ndivya-jñāna trinetrayai divya-mūrtyai namo namaḥ ||',
      meaning:
        'O noble yogini, O Goddess Uma, O bliss of yoga — salutations. O divine knowledge, O three-eyed one, O divine form — salutations.',
    },
    {
      id: 14,
      verseLabel: 'Shloka 14',
      sanskrit:
        'अर्धचन्द्रजटाधारि चन्द्रबिम्बे नमो नमः।\nचन्द्रादित्यजटाधारि चन्द्रबिम्बे नमो नमः॥',
      transliteration:
        'Ardha-candra-jaṭā-dhāri candra-bimbe namo namaḥ |\ncandrāditya-jaṭā-dhāri candra-bimbe namo namaḥ ||',
      meaning:
        'O wearer of the crescent moon in matted locks, O moon-orbed one — salutations. O bearer of the sun and moon in matted locks, O resplendent as the moon — salutations.',
    },
    {
      id: 15,
      verseLabel: 'Shloka 15',
      sanskrit:
        'अणुरूपे महारूपे विश्वरूपे नमो नमः।\nअणिमाद्यष्टसिद्धायै आनन्दायै नमो नमः॥',
      transliteration:
        'Aṇu-rūpe mahā-rūpe viśva-rūpe namo namaḥ |\naṇimādy-aṣṭa-siddhāyai ānandāyai namo namaḥ ||',
      meaning:
        'O atomic form, O great form, O universal form — salutations. O one endowed with the eight siddhis beginning with Anima, O bliss incarnate — salutations.',
    },
    {
      id: 16,
      verseLabel: 'Shloka 16',
      sanskrit:
        'ज्ञानविज्ञानरूपायै ज्ञानमूर्ते नमो नमः।\nनानाशास्त्रस्वरूपायै नानारूपे नमो नमः॥',
      transliteration:
        'Jñāna-vijñāna-rūpāyai jñāna-mūrte namo namaḥ |\nnānā-śāstra-svarūpāyai nānā-rūpe namo namaḥ ||',
      meaning:
        'O form of knowledge and wisdom, O embodiment of knowledge — salutations. O essence of all scriptures, O one of manifold forms — salutations.',
    },
    {
      id: 17,
      verseLabel: 'Shloka 17',
      sanskrit:
        'पद्मदा पद्मवंशा च पद्मरूपे नमो नमः।\nपरमेष्ठ्यै परामूर्त्यै नमस्ते पापनाशिनि॥',
      transliteration:
        'Padma-dā padma-vaṁśā ca padma-rūpe namo namaḥ |\nparameṣṭhyai parā-mūrtyai namaste pāpa-nāśini ||',
      meaning:
        'O lotus-giver, O one of the lotus lineage, O lotus-formed — salutations. O supreme one, O transcendent form — salutations to you, O destroyer of sins.',
    },
    {
      id: 18,
      verseLabel: 'Shloka 18',
      sanskrit:
        'महादेव्यै महाकाल्यै महालक्ष्म्यै नमो नमः।\nब्रह्मविष्णुशिवायै च ब्रह्मनार्यै नमो नमः॥',
      transliteration:
        'Mahā-devyai mahā-kālyai mahā-lakṣmyai namo namaḥ |\nbrahma-viṣṇu-śivāyai ca brahma-nāryai namo namaḥ ||',
      meaning:
        'O great Goddess, O Mahakali, O Mahalakshmi — salutations. O one who is Brahma, Vishnu, and Shiva, O consort of Brahma — salutations.',
    },
    {
      id: 19,
      verseLabel: 'Shloka 19',
      sanskrit:
        'कमलाकरपुष्पा च कामरूपे नमो नमः।\nकपालि कर्मदीप्तायै कर्मदायै नमो नमः॥',
      transliteration:
        'Kamalākara-puṣpā ca kāma-rūpe namo namaḥ |\nkapāli karma-dīptāyai karma-dāyai namo namaḥ ||',
      meaning:
        'O one adorned with lotus blossoms, O one of enchanting form — salutations. O skull-bearing one, O one blazing with sacred action, O bestower of righteous deeds — salutations.',
    },
    {
      id: 20,
      verseLabel: 'Phala Shruti',
      sanskrit:
        'सायं प्रातः पठेन्नित्यं षण्मासात् सिद्धिरुच्यते।\nचोरव्याघ्रभयं नास्ति पठतां शृण्वतामपि॥',
      transliteration:
        'Sāyaṁ prātaḥ paṭhen-nityaṁ ṣaṇ-māsāt siddhir-ucyate |\ncora-vyāghra-bhayaṁ nāsti paṭhatāṁ śṛṇvatām-api ||',
      meaning:
        'One who recites this daily, morning and evening, attains perfection within six months. For those who read or hear it, there is no fear from thieves or tigers.',
    },
    {
      id: 21,
      verseLabel: 'Shloka 21',
      sanskrit:
        'इत्थं सरस्वतीस्तोत्रमगस्त्यमुनिवाचकम्।\nसर्वसिद्धिकरं नॄणां सर्वपापप्रणाशनम्॥',
      transliteration:
        'Itthaṁ sarasvatī-stotram-agastya-muni-vācakam |\nsarva-siddhi-karaṁ nṝṇāṁ sarva-pāpa-praṇāśanam ||',
      meaning:
        'Thus ends this Saraswati Stotram composed by Sage Agastya, which grants all accomplishments to humankind and destroys all sins.',
    },
  ],
};

const kanikadharaStotram: Stotra = {
  id: 'kanakadhara-stotram',
  title: 'Kanakadhara Stotram',
  subtitle: 'कनकधारास्तवः',
  deity: 'Lakshmi',
  description: 'Twenty-two verses by Adi Shankaracharya invoking Goddess Lakshmi, composed to bring a shower of golden gooseberries upon a poor woman.',
  benefits: [
    'Invokes the grace and prosperity of Goddess Mahalakshmi',
    'Removes poverty, misfortune, and financial difficulties',
    'Bestows wealth, abundance, and auspiciousness',
  ],
  estimatedMinutes: 8,
  icon: 'M8 19 L8 22 M24 19 L24 22 M16 22 Q8 22 8 19 Q8 16 16 16 Q24 16 24 19 Q24 22 16 22 M10 10 Q10 7.5 12.5 7.5 M16 7 Q16 4.5 18.5 4.5 M22 11 Q22 8.5 24.5 8.5',
  verses: [
    {
      id: 1,
      verseLabel: 'Shloka 1',
      sanskrit:
        'अङ्गं हरेः पुलकभूषणमाश्रयन्ती\nभृङ्गाङ्गनेव मुकुलाभरणं तमालम्।\nअङ्गीकृताखिलविभूतिरपाङ्गलीला\nमाङ्गल्यदास्तु मम मङ्गलदेवतायाः॥',
      transliteration:
        'Aṅgaṁ hareḥ pulaka-bhūṣaṇam-āśrayantī\nbhṛṅgāṅganeva mukulābharaṇaṁ tamālam |\naṅgīkṛtākhila-vibhūtir-apāṅga-līlā\nmāṅgalya-dāstu mama maṅgala-devatāyāḥ ||',
      meaning:
        'Like a female bee seeking the buds of a tamāla tree, she clings to the body of Lord Hari adorned with goosebumps. May the playful sidelong glance of that Goddess of Auspiciousness — who has embraced all divine glory — bestow blessings upon me.',
    },
    {
      id: 2,
      verseLabel: 'Shloka 2',
      sanskrit:
        'मुग्धा मुहुर्विदधती वदने मुरारेः\nप्रेमत्रपाप्रणिहितानि गतागतानि।\nमाला दृशोर्मधुकरीव महोत्पले या\nसा मे श्रियं दिशतु सागरसम्भवायाः॥',
      transliteration:
        'Mugdhā muhur-vidadhatī vadane murāreḥ\nprema-trapā-praṇihitāni gatāgatāni |\nmālā dṛśor-madhukarīva mahotpale yā\nsā me śriyaṁ diśatu sāgara-sambhavāyāḥ ||',
      meaning:
        'Enchanting, she repeatedly casts upon the face of Murāri her glances that come and go — set in motion by love and modesty — like a garland of bees upon a great lotus. May she, the ocean-born, grant me prosperity.',
    },
    {
      id: 3,
      verseLabel: 'Shloka 3',
      sanskrit:
        'आमीलिताक्षमधिगम्य मुदा मुकुन्दम्\nआनन्दकन्दमनिमेषमनङ्गतन्त्रम्।\nआकेकरस्थितकनीनिकपक्ष्मनेत्रं\nभूत्यै भवेन्मम भुजङ्गशयाङ्गनायाः॥',
      transliteration:
        'Āmīlitākṣam-adhigamya mudā mukundam\nānanda-kandam-animesam-anaṅga-tantram |\nākekara-sthita-kanīnika-pakṣma-netraṁ\nbhūtyai bhaven-mama bhujaṅga-śayāṅganāyāḥ ||',
      meaning:
        'Approaching the blissful Mukunda — whose eyes are half-closed, unblinking, and governed by the ways of love — may the sidelong glance of the consort of the serpent-reclining Lord bring me prosperity.',
    },
    {
      id: 4,
      verseLabel: 'Shloka 4',
      sanskrit:
        'बाह्वन्तरे मधुजितः श्रितकौस्तुभे या\nहारावलीव हरिनीलमयी विभाति।\nकामप्रदा भगवतोऽपि कटाक्षमाला\nकल्याणमावहतु मे कमलालयायाः॥',
      transliteration:
        'Bāhvantare madhu-jitaḥ śrita-kaustubhe yā\nhārāvalīva harinīlamayī vibhāti |\nkāma-pradā bhagavato-\'pi kaṭākṣa-mālā\nkalyāṇam-āvahatu me kamalālayāyāḥ ||',
      meaning:
        'Between the arms of the slayer of Madhu, near the Kaustubha gem, she shines like a sapphire necklace. May the garland of sidelong glances of the lotus-dwelling Goddess — which fulfils even the desires of the Lord — bring me auspiciousness.',
    },
    {
      id: 5,
      verseLabel: 'Shloka 5',
      sanskrit:
        'कालाम्बुदालिललितोरसि कैटभारेः\nधाराधरे स्फुरति या तडिदङ्गनेव।\nमातुः समस्तजगतां महनीयमूर्तिः\nभद्राणि मे दिशतु भार्गवनन्दनायाः॥',
      transliteration:
        'Kālāmbudāli-lalitorasi kaiṭabhāreḥ\ndhārādhare sphurati yā taḍid-aṅganeva |\nmātuḥ samasta-jagatāṁ mahanīya-mūrtiḥ\nbhadrāṇi me diśatu bhārgava-nandanāyāḥ ||',
      meaning:
        'Upon the broad chest of the slayer of Kaitabha — beautiful as a bank of dark rain clouds — she flashes like a streak of lightning. May the glorious form of the Mother of all worlds, the daughter of Bhrigu, grant me well-being.',
    },
    {
      id: 6,
      verseLabel: 'Shloka 6',
      sanskrit:
        'प्राप्तं पदं प्रथमतः खलु यत्प्रभावात्\nमाङ्गल्यभाजि मधुमाथिनि मन्मथेन।\nमय्यापतेत्तदिह मन्थरमीक्षणार्धं\nमन्दालसं च मकरालयकन्यकायाः॥',
      transliteration:
        'Prāptaṁ padaṁ prathamataḥ khalu yat-prabhāvāt\nmāṅgalya-bhāji madhu-māthini manmathena |\nmayy-āpatet-tad-iha mantharam-īkṣaṇārdhaṁ\nmandālasaṁ ca makarālaya-kanyakāyāḥ ||',
      meaning:
        'It was by the power of her glance that Manmatha (the god of love) first attained his exalted position with the auspicious Madhusudana. May that slow, languid half-glance of the daughter of the ocean fall upon me.',
    },
    {
      id: 7,
      verseLabel: 'Shloka 7',
      sanskrit:
        'विश्वामरेन्द्रपदवीभ्रमदानदक्षम्\nआनन्दहेतुरधिकं मुरविद्विषोऽपि।\nईषन्निषीदतु मयि क्षणमीक्षणार्द्धम्\nइन्दीवरोदरसहोदरमिन्दिरायाः॥',
      transliteration:
        'Viśvāmarendra-padavī-bhrama-dāna-dakṣam\nānanda-hetur-adhikaṁ mura-vidviṣo-\'pi |\nīṣan-niṣīdatu mayi kṣaṇam-īkṣaṇārddham\nindīvarodara-sahodaram-indirāyāḥ ||',
      meaning:
        'Capable of conferring the position of Indra of the universe, and the source of supreme delight even to the slayer of Mura — may that half-glance of Indirā, akin to the inner petal of a blue lotus, rest upon me for just a moment.',
    },
    {
      id: 8,
      verseLabel: 'Shloka 8',
      sanskrit:
        'इष्टा विशिष्टमतयोऽपि यया दयार्द्र-\nदृष्ट्या त्रिविष्टपपदं सुलभं लभन्ते।\nदृष्टिः प्रहृष्टकमलोदरदीप्तिरिष्टां\nपुष्टिं कृषीष्ट मम पुष्करविष्टरायाः॥',
      transliteration:
        'Iṣṭā viśiṣṭa-matayo-\'pi yayā dayārdra-\ndṛṣṭyā triviṣṭapa-padaṁ sulabhaṁ labhante |\ndṛṣṭiḥ prahṛṣṭa-kamalodara-dīptir-iṣṭāṁ\npuṣṭiṁ kṛṣīṣṭa mama puṣkara-viṣṭarāyāḥ ||',
      meaning:
        'Even the most distinguished seekers easily attain heaven through her compassion-moistened glance. May the gaze of the lotus-seated Goddess — radiant as the heart of a blooming lotus — draw unto me the nourishment I desire.',
    },
    {
      id: 9,
      verseLabel: 'Shloka 9',
      sanskrit:
        'दद्याद्दयानुपवनो द्रविणाम्बुधाराम्\nअस्मिन्नकिञ्चनविहङ्गशिशौ विषण्णे।\nदुष्कर्मघर्ममपनीय चिराय दूरं\nनारायणप्रणयिनीनयनाम्बुवाहः॥',
      transliteration:
        'Dadyād-dayānu-pavano draviṇāmbu-dhārām\nasmin-nakiñcana-vihaṅga-śiśau viṣaṇṇe |\nduṣkarma-gharmam-apanīya cirāya dūraṁ\nnārāyaṇa-praṇayinī-nayanāmbu-vāhaḥ ||',
      meaning:
        'May the rain-cloud of the beloved of Nārāyaṇa\'s glance, driven by the wind of compassion, pour a shower of wealth upon this desolate, penniless fledgling — dispelling the heat of past misdeeds far away forever.',
    },
    {
      id: 10,
      verseLabel: 'Shloka 10',
      sanskrit:
        'गीर्देवतेति गरुडध्वजसुन्दरीति\nशाकम्भरीति शशिशेखरवल्लभेति।\nसृष्टिस्थितिप्रलयकेलिषु संस्थितायै\nतस्यै नमस्त्रिभुवनैकगुरोस्तरुण्यै॥',
      transliteration:
        'Gīr-devateti garuḍa-dhvaja-sundarīti\nśākambharīti śaśi-śekhara-vallabheti |\nsṛṣṭi-sthiti-pralaya-keliṣu saṁsthitāyai\ntasyai namas-tribhuvanaikaguros-taruṇyai ||',
      meaning:
        'She is Saraswati the Goddess of Speech, the beauty of Vishnu, Shakambhari the sustainer, and the beloved of Shiva. To her who presides over creation, preservation, and dissolution — to that youthful consort of the sole Guru of the three worlds — I bow.',
    },
    {
      id: 11,
      verseLabel: 'Shloka 11',
      sanskrit:
        'श्रुत्यै नमोऽस्तु शुभकर्मफलप्रसूत्यै\nरत्यै नमोऽस्तु रमणीयगुणार्णवायै।\nशक्त्यै नमोऽस्तु शतपत्रनिकेतनायै\nपुष्ट्यै नमोऽस्तु पुरुषोत्तमवल्लभायै॥',
      transliteration:
        'Śrutyai namo-\'stu śubha-karma-phala-prasūtyai\nratyai namo-\'stu ramaṇīya-guṇārṇavāyai |\nśaktyai namo-\'stu śata-patra-niketanāyai\npuṣṭyai namo-\'stu puruṣottama-vallabhāyai ||',
      meaning:
        'Salutations to her as Shruti, the bestower of fruits of good deeds; as Rati, the ocean of delightful virtues; as Shakti, who dwells in the hundred-petalled lotus; and as Pushti, the beloved of Purushottama.',
    },
    {
      id: 12,
      verseLabel: 'Shloka 12',
      sanskrit:
        'नमोऽस्तु नालीकनिभाननायै\nनमोऽस्तु दुग्धोदधिजन्मभूम्यै।\nनमोऽस्तु सोमामृतसोदरायै\nनमोऽस्तु नारायणवल्लभायै॥',
      transliteration:
        'Namo-\'stu nālīka-nibhānanāyai\nnamo-\'stu dugdhodadhi-janma-bhūmyai |\nnamo-\'stu somāmṛta-sodarāyai\nnamo-\'stu nārāyaṇa-vallabhāyai ||',
      meaning:
        'Salutations to her whose face resembles a lotus; who was born from the ocean of milk; who is the sister of the moon and ambrosia; and who is the beloved of Nārāyaṇa.',
    },
    {
      id: 13,
      verseLabel: 'Shloka 13',
      sanskrit:
        'नमोऽस्तु हेमाम्बुजपीठिकायै\nनमोऽस्तु भूमण्डलनायिकायै।\nनमोऽस्तु देवादिदयापरायै\nनमोऽस्तु शार्ङ्गायुधवल्लभायै॥',
      transliteration:
        'Namo-\'stu hemāmbuja-pīṭhikāyai\nnamo-\'stu bhū-maṇḍala-nāyikāyai |\nnamo-\'stu devādi-dayāparāyai\nnamo-\'stu śārṅgāyudha-vallabhāyai ||',
      meaning:
        'Salutations to her who is seated on a golden lotus throne; who is the sovereign of the earth; who is compassionate towards the gods and all beings; and who is the beloved of the wielder of the Shārṅga bow.',
    },
    {
      id: 14,
      verseLabel: 'Shloka 14',
      sanskrit:
        'नमोऽस्तु देव्यै भृगुनन्दनायै\nनमोऽस्तु विष्णोरुरसि स्थितायै।\nनमोऽस्तु लक्ष्म्यै कमलालयायै\nनमोऽस्तु दामोदरवल्लभायै॥',
      transliteration:
        'Namo-\'stu devyai bhṛgu-nandanāyai\nnamo-\'stu viṣṇor-urasi sthitāyai |\nnamo-\'stu lakṣmyai kamalālayāyai\nnamo-\'stu dāmodara-vallabhāyai ||',
      meaning:
        'Salutations to the Goddess, the daughter of Bhrigu; who resides upon the chest of Vishnu; who is Lakshmi dwelling in the lotus; and who is the beloved of Dāmodara.',
    },
    {
      id: 15,
      verseLabel: 'Shloka 15',
      sanskrit:
        'नमोऽस्तु कान्त्यै कमलेक्षणायै\nनमोऽस्तु भूत्यै भुवनप्रसूत्यै।\nनमोऽस्तु देवादिभिरर्चितायै\nनमोऽस्तु नन्दात्मजवल्लभायै॥',
      transliteration:
        'Namo-\'stu kāntyai kamalekṣaṇāyai\nnamo-\'stu bhūtyai bhuvana-prasūtyai |\nnamo-\'stu devādibhir-arcitāyai\nnamo-\'stu nandātmaja-vallabhāyai ||',
      meaning:
        'Salutations to her as Radiance, the lotus-eyed one; as Prosperity, the mother of the universe; who is worshipped by the gods and all beings; and who is the beloved of the son of Nanda.',
    },
    {
      id: 16,
      verseLabel: 'Shloka 16',
      sanskrit:
        'सम्पत्कराणि सकलेन्द्रियनन्दनानि\nसाम्राज्यदानविभवानि सरोरुहाक्षि।\nत्वद्वन्दनानि दुरिताहरणोद्यतानि\nमामेव मातरनिशं कलयन्तु मान्ये॥',
      transliteration:
        'Sampat-karāṇi sakalendriya-nandanāni\nsāmrājya-dāna-vibhavāni saroruhākṣi |\ntvad-vandanāni duritāharaṇodyatāni\nmām-eva mātar-aniśaṁ kalayantu mānye ||',
      meaning:
        'O lotus-eyed Mother, may my salutations to you — which bring wealth, delight all the senses, confer the splendour of sovereignty, and are ever ready to destroy sins — ceaselessly bear fruit for me, O revered one.',
    },
    {
      id: 17,
      verseLabel: 'Shloka 17',
      sanskrit:
        'यत्कटाक्षसमुपासनाविधिः\nसेवकस्य सकलार्थसम्पदः।\nसन्तनोति वचनाङ्गमानसैः\nत्वां मुरारिहृदयेश्वरीं भजे॥',
      transliteration:
        'Yat-kaṭākṣa-samupāsanā-vidhiḥ\nsevakasya sakalārtha-sampadaḥ |\nsantanoti vacanāṅga-mānasaiḥ\ntvāṁ murāri-hṛdayeśvarīṁ bhaje ||',
      meaning:
        'The mere practice of worshipping your sidelong glance bestows upon the devotee all manner of wealth and prosperity. With my words, body, and mind, I worship you, O sovereign of Murāri\'s heart.',
    },
    {
      id: 18,
      verseLabel: 'Shloka 18',
      sanskrit:
        'सरसिजनिलये सरोजहस्ते\nधवलतमांशुकगन्धमाल्यशोभे।\nभगवति हरिवल्लभे मनोज्ञे\nत्रिभुवनभूतिकरि प्रसीद मह्यम्॥',
      transliteration:
        'Sarasija-nilaye saroja-haste\ndhavalatamāṁśuka-gandha-mālya-śobhe |\nbhagavati hari-vallabhe manojñe\ntribhuvana-bhūti-kari prasīda mahyam ||',
      meaning:
        'O Goddess dwelling in the lotus, holding a lotus, resplendent in pure white garments, fragrant garlands, and perfumes — O captivating beloved of Hari, who bestows prosperity upon the three worlds — be gracious unto me.',
    },
    {
      id: 19,
      verseLabel: 'Shloka 19',
      sanskrit:
        'दिग्घस्तिभिः कनककुम्भमुखावसृष्ट-\nस्वर्वाहिनी विमलचारुजलाप्लुताङ्गीम्।\nप्रातर्नमामि जगतां जननीमशेष-\nलोकाधिनाथगृहिणीम् अमृताब्धिपुत्रीम्॥',
      transliteration:
        'Dig-ghastibiḥ kanaka-kumbha-mukhāvasṛṣṭa-\nsvarvāhinī vimala-cāru-jalāplutāṅgīm |\nprātar-namāmi jagatāṁ jananīm-aśeṣa-\nlokādhi-nātha-gṛhiṇīm amṛtābdhi-putrīm ||',
      meaning:
        'I bow each morning to the Mother of the worlds — bathed in the pure, beautiful waters of the celestial river poured from golden pots by the elephants of the directions — the consort of the Lord of all realms, the daughter of the ocean of nectar.',
    },
    {
      id: 20,
      verseLabel: 'Shloka 20',
      sanskrit:
        'कमले कमलाक्षवल्लभे त्वं\nकरुणापूरतरङ्गितैरपाङ्गैः।\nअवलोकय मामकिञ्चनानां\nप्रथमं पात्रमकृत्रिमं दयायाः॥',
      transliteration:
        'Kamale kamalākṣa-vallabhe tvaṁ\nkaruṇā-pūra-taraṅgitair-apāṅgaiḥ |\navalokaya mām-akiñcanānāṁ\nprathamaṁ pātram-akṛtrimaṁ dayāyāḥ ||',
      meaning:
        'O Kamala, O beloved of the lotus-eyed Lord — with your sidelong glances rippling with waves of compassion — look upon me, the foremost and most genuine vessel of your mercy among the destitute.',
    },
    {
      id: 21,
      verseLabel: 'Shloka 21',
      sanskrit:
        'स्तुवन्ति ये स्तुतिभिरमीभिरन्वहं\nत्रयीमयीं त्रिभुवनमातरं रमाम्।\nगुणाधिका गुरुतरभाग्यभागिनो\nभवन्ति ते भुवि बुधभाविताशयाः॥',
      transliteration:
        'Stuvanti ye stutibhir-amībhir-anvahaṁ\ntrayīmayīṁ tribhuvana-mātaraṁ ramām |\nguṇādhikā gurutara-bhāgya-bhāgino\nbhavanti te bhuvi budha-bhāvitāśayāḥ ||',
      meaning:
        'Those who daily praise Ramā — the Mother of the three worlds, the embodiment of the Vedas — with hymns such as these, become endowed with superior virtues and the greatest fortune, their minds illumined by the wise.',
    },
    {
      id: 22,
      verseLabel: 'Shloka 22',
      sanskrit:
        'देवि प्रसीद जगदीश्वरि लोकमातः\nकल्याणगात्रि कमलेक्षणजीवनाथे।\nदारिद्र्यभीतिहृदयं शरणागतं माम्\nआलोकय प्रतिदिनं सदयैरपाङ्गैः॥',
      transliteration:
        'Devi prasīda jagadīśvari loka-mātaḥ\nkalyāṇa-gātri kamalekṣaṇa-jīva-nāthe |\ndāridrya-bhīti-hṛdayaṁ śaraṇāgataṁ mām\nālokaya pratidinaṁ sadayair-apāṅgaiḥ ||',
      meaning:
        'Be gracious, O Goddess, O sovereign of the world, O Mother of all beings, O one of auspicious form, O life-partner of the lotus-eyed Lord. Look upon me each day with your compassionate glance — I who have taken refuge in you, my heart trembling with the fear of poverty.',
    },
  ],
};

const ramRakshaStotra: Stotra = {
  id: 'ram-raksha-stotra',
  title: 'Ram Raksha Stotra',
  subtitle: 'रामरक्षास्तोत्रम्',
  deity: 'Rama',
  description:
    'The divine armor of Lord Rama, revealed by Lord Shiva in a dream to Sage Budha Kaushika. Known as Vajrapanjara (diamond cage), it invokes Rama\'s protection over every part of the body.',
  benefits: [
    'Creates an impenetrable shield of divine protection around the devotee',
    'Destroys all sins and fulfills desires through the power of Rama\'s name',
    'Bestows long life, happiness, victory, and humility',
  ],
  estimatedMinutes: 15,
  icon: 'bow',
  verses: [
    {
      id: 1,
      verseLabel: 'Dhyana Shloka',
      sanskrit:
        'ध्यायेदाजानुबाहुं धृतशरधनुषं बद्धपद्मासनस्थं\nपीतं वासो वसानं नवकमलदलस्पर्धिनेत्रं प्रसन्नम्।\nवामाङ्कारूढसीतामुखकमलमिलल्लोचनं नीरदाभं\nनानालङ्कारदीप्तं दधतमुरुजटामण्डनं रामचन्द्रम्॥',
      transliteration:
        'Dhyāyed-ājānubāhuṁ dhṛta-śara-dhanuṣaṁ baddha-padmāsana-sthaṁ\npītaṁ vāso vasānaṁ nava-kamala-dala-spardhhi-netraṁ prasannam |\nvāmāṅkārūḍha-sītā-mukha-kamala-milal-locanaṁ nīradābhaṁ\nnānālaṅkāra-dīptaṁ dadhatam-uru-jaṭā-maṇḍanaṁ rāmacandram ||',
      meaning:
        'Meditate upon Ramachandra — whose arms reach his knees, who holds an arrow and bow, seated in lotus posture, wearing yellow garments, with eyes rivalling fresh lotus petals, serene, gazing at Sita seated on his left lap, dark as a rain cloud, resplendent with many ornaments, wearing a great crown of matted locks.',
    },
    {
      id: 2,
      verseLabel: 'Shloka 2',
      sanskrit:
        'चरितं रघुनाथस्य शतकोटिप्रविस्तरम्।\nएकैकमक्षरं पुंसां महापातकनाशनम्॥',
      transliteration:
        'Caritaṁ raghunāthasya śata-koṭi-pravistaram |\nekaikam-akṣaraṁ puṁsāṁ mahā-pātaka-nāśanam ||',
      meaning:
        'The story of Lord Raghunatha extends over a hundred crore verses. Each single syllable of it destroys the greatest sins of mankind.',
    },
    {
      id: 3,
      verseLabel: 'Shloka 3',
      sanskrit:
        'ध्यात्वा नीलोत्पलश्यामं रामं राजीवलोचनम्।\nजानकीलक्ष्मणोपेतं जटामुकुटमण्डितम्॥\nसासितूणधनुर्बाणपाणिं नक्तञ्चरान्तकम्।\nस्वलीलया जगत्त्रातुमाविर्भूतमजं विभुम्॥',
      transliteration:
        'Dhyātvā nīlotpala-śyāmaṁ rāmaṁ rājīva-locanam |\njānakī-lakṣmaṇopetaṁ jaṭā-mukuṭa-maṇḍitam ||\nsāsi-tūṇa-dhanur-bāṇa-pāṇiṁ naktañcarāntakam |\nsvalīlayā jagat-trātum-āvirbhūtam-ajaṁ vibhum ||',
      meaning:
        'Having meditated upon Rama — dark as a blue lotus, lotus-eyed, accompanied by Janaki and Lakshmana, adorned with a crown of matted hair, holding sword, quiver, bow, and arrow, the destroyer of demons — the unborn, all-pervading Lord who manifested by his own play to protect the world.',
    },
    {
      id: 4,
      verseLabel: 'Shloka 4',
      sanskrit:
        'रामरक्षां पठेत्प्राज्ञः पापघ्नीं सर्वकामदाम्।\nशिरो मे राघवः पातु भालं दशरथात्मजः॥',
      transliteration:
        'Rāma-rakṣāṁ paṭhet-prājñaḥ pāpa-ghnīṁ sarva-kāma-dām |\nśiro me rāghavaḥ pātu bhālaṁ daśarathātmajaḥ ||',
      meaning:
        'The wise one should recite this Rama Raksha, which destroys sins and fulfills all desires. May Raghava protect my head; may the son of Dasharatha protect my forehead.',
    },
    {
      id: 5,
      verseLabel: 'Shloka 5',
      sanskrit:
        'कौसल्येयो दृशौ पातु विश्वामित्रप्रियः श्रुती।\nघ्राणं पातु मखत्राता मुखं सौमित्रिवत्सलः॥',
      transliteration:
        'Kausalyeyo dṛśau pātu viśvāmitra-priyaḥ śrutī |\nghrāṇaṁ pātu makha-trātā mukhaṁ saumitri-vatsalaḥ ||',
      meaning:
        'May the son of Kausalya protect my eyes; may the beloved of Vishvamitra protect my ears. May the protector of sacrifices protect my nose; may the one affectionate to Lakshmana protect my mouth.',
    },
    {
      id: 6,
      verseLabel: 'Shloka 6',
      sanskrit:
        'जिह्वां विद्यानिधिः पातु कण्ठं भरतवन्दितः।\nस्कन्धौ दिव्यायुधः पातु भुजौ भग्नेशकार्मुकः॥',
      transliteration:
        'Jihvāṁ vidyā-nidhiḥ pātu kaṇṭhaṁ bharata-vanditaḥ |\nskandhau divyāyudhaḥ pātu bhujau bhagneśa-kārmukaḥ ||',
      meaning:
        'May the treasury of knowledge protect my tongue; may the one worshipped by Bharata protect my throat. May the wielder of divine weapons protect my shoulders; may the breaker of Shiva\'s bow protect my arms.',
    },
    {
      id: 7,
      verseLabel: 'Shloka 7',
      sanskrit:
        'करौ सीतापतिः पातु हृदयं जामदग्न्यजित्।\nमध्यं पातु खरध्वंसी नाभिं जाम्बवदाश्रयः॥',
      transliteration:
        'Karau sītā-patiḥ pātu hṛdayaṁ jāmadagnya-jit |\nmadhyaṁ pātu khara-dhvaṁsī nābhiṁ jāmbavad-āśrayaḥ ||',
      meaning:
        'May the husband of Sita protect my hands; may the conqueror of Parashurama protect my heart. May the destroyer of Khara protect my waist; may the refuge of Jambavan protect my navel.',
    },
    {
      id: 8,
      verseLabel: 'Shloka 8',
      sanskrit:
        'सुग्रीवेशः कटी पातु सक्थिनी हनुमत्प्रभुः।\nऊरू रघूत्तमः पातु रक्षःकुलविनाशकृत्॥',
      transliteration:
        'Sugrīveśaḥ kaṭī pātu sakthinī hanumat-prabhuḥ |\nūrū raghūttamaḥ pātu rakṣaḥ-kula-vināśa-kṛt ||',
      meaning:
        'May the lord of Sugriva protect my hips; may the master of Hanuman protect my thighs. May the best of the Raghus, the destroyer of the demon race, protect my knees.',
    },
    {
      id: 9,
      verseLabel: 'Shloka 9',
      sanskrit:
        'जानुनी सेतुकृत्पातु जङ्घे दशमुखान्तकः।\nपादौ विभीषणश्रीदः पातु रामोऽखिलं वपुः॥',
      transliteration:
        'Jānunī setu-kṛt-pātu jaṅghe daśa-mukhāntakaḥ |\npādau vibhīṣaṇa-śrīdaḥ pātu rāmo\'khilaṁ vapuḥ ||',
      meaning:
        'May the builder of the bridge protect my knees; may the slayer of the ten-headed one protect my shins. May the bestower of glory upon Vibhishana protect my feet; may Rama protect my entire body.',
    },
    {
      id: 10,
      verseLabel: 'Shloka 10',
      sanskrit:
        'एतां रामबलोपेतां रक्षां यः सुकृती पठेत्।\nस चिरायुः सुखी पुत्री विजयी विनयी भवेत्॥',
      transliteration:
        'Etāṁ rāma-balopetāṁ rakṣāṁ yaḥ sukṛtī paṭhet |\nsa cirāyuḥ sukhī putrī vijayī vinayī bhavet ||',
      meaning:
        'The virtuous one who recites this protective hymn empowered by Rama shall be blessed with long life, happiness, progeny, victory, and humility.',
    },
    {
      id: 11,
      verseLabel: 'Shloka 11',
      sanskrit:
        'पातालभूतलव्योमचारिणश्छद्मचारिणः।\nन द्रष्टुमपि शक्तास्ते रक्षितं रामनामभिः॥',
      transliteration:
        'Pātāla-bhūtala-vyoma-cāriṇaś-chadma-cāriṇaḥ |\nna draṣṭum-api śaktās-te rakṣitaṁ rāma-nāmabhiḥ ||',
      meaning:
        'Those who roam the netherworld, the earth, or the sky in disguise — even they cannot so much as see the one who is protected by the names of Rama.',
    },
    {
      id: 12,
      verseLabel: 'Shloka 12',
      sanskrit:
        'रामेति रामभद्रेति रामचन्द्रेति वा स्मरन्।\nनरो न लिप्यते पापैर्भुक्तिं मुक्तिं च विन्दति॥',
      transliteration:
        'Rāmeti rāma-bhadreti rāma-candreti vā smaran |\nnaro na lipyate pāpair-bhuktiṁ muktiṁ ca vindati ||',
      meaning:
        'The person who remembers "Rama", "Ramabhadra", or "Ramachandra" is not tainted by sins and attains both worldly enjoyment and liberation.',
    },
    {
      id: 13,
      verseLabel: 'Shloka 13',
      sanskrit:
        'जगज्जैत्रैकमन्त्रेण रामनाम्नाभिरक्षितम्।\nयः कण्ठे धारयेत्तस्य करस्थाः सर्वसिद्धयः॥',
      transliteration:
        'Jagaj-jaitraika-mantreṇa rāma-nāmnābhirakṣitam |\nyaḥ kaṇṭhe dhārayet-tasya kara-sthāḥ sarva-siddhayaḥ ||',
      meaning:
        'One who wears on their neck this hymn protected by the name of Rama — the sole mantra that conquers the world — all spiritual powers rest in the palm of their hand.',
    },
    {
      id: 14,
      verseLabel: 'Shloka 14',
      sanskrit:
        'वज्रपञ्जरनामेदं यो रामकवचं स्मरेत्।\nअव्याहताज्ञः सर्वत्र लभते जयमङ्गलम्॥',
      transliteration:
        'Vajra-pañjara-nāmedaṁ yo rāma-kavacaṁ smaret |\navyāhatājñaḥ sarvatra labhate jaya-maṅgalam ||',
      meaning:
        'One who remembers this armor of Rama named Vajrapanjara (diamond cage) — their command is never thwarted and they attain victory and auspiciousness everywhere.',
    },
    {
      id: 15,
      verseLabel: 'Shloka 15',
      sanskrit:
        'आदिष्टवान्यथा स्वप्ने रामरक्षामिमां हरः।\nतथा लिखितवान्प्रातः प्रबुद्धो बुधकौशिकः॥',
      transliteration:
        'Ādiṣṭavān-yathā svapne rāma-rakṣām-imāṁ haraḥ |\ntathā likhitavān-prātaḥ prabuddho budha-kauśikaḥ ||',
      meaning:
        'As Lord Shiva instructed this Rama Raksha in a dream, so did Sage Budha Kaushika write it down upon waking at dawn.',
    },
    {
      id: 16,
      verseLabel: 'Shloka 16',
      sanskrit:
        'आरामः कल्पवृक्षाणां विरामः सकलापदाम्।\nअभिरामस्त्रिलोकानां रामः श्रीमान्स नः प्रभुः॥',
      transliteration:
        'Ārāmaḥ kalpa-vṛkṣāṇāṁ virāmaḥ sakalāpadām |\nabhirāmas-trilokānāṁ rāmaḥ śrīmān-sa naḥ prabhuḥ ||',
      meaning:
        'He is the garden of wish-fulfilling trees, the cessation of all calamities, the delight of the three worlds — that glorious Rama is our Lord.',
    },
    {
      id: 17,
      verseLabel: 'Shloka 17',
      sanskrit:
        'तरुणौ रूपसम्पन्नौ सुकुमारौ महाबलौ।\nपुण्डरीकविशालाक्षौ चीरकृष्णाजिनाम्बरौ॥',
      transliteration:
        'Taruṇau rūpa-sampannau sukumārau mahābalau |\npuṇḍarīka-viśālākṣau cīra-kṛṣṇājināmbarau ||',
      meaning:
        'The two brothers are youthful, endowed with beauty, delicate yet mighty, with eyes wide as lotuses, wearing bark garments and black deerskin.',
    },
    {
      id: 18,
      verseLabel: 'Shloka 18',
      sanskrit:
        'फलमूलाशनौ दान्तौ तापसौ ब्रह्मचारिणौ।\nपुत्रौ दशरथस्यैतौ भ्रातरौ रामलक्ष्मणौ॥',
      transliteration:
        'Phala-mūlāśanau dāntau tāpasau brahmacāriṇau |\nputrau daśarathasyaitau bhrātarau rāma-lakṣmaṇau ||',
      meaning:
        'Living on fruits and roots, self-controlled, ascetic, and celibate — these two sons of Dasharatha, the brothers Rama and Lakshmana.',
    },
    {
      id: 19,
      verseLabel: 'Shloka 19',
      sanskrit:
        'शरण्यौ सर्वसत्त्वानां श्रेष्ठौ सर्वधनुष्मताम्।\nरक्षःकुलनिहन्तारौ त्रायेतां नो रघूत्तमौ॥',
      transliteration:
        'Śaraṇyau sarva-sattvānāṁ śreṣṭhau sarva-dhanuṣmatām |\nrakṣaḥ-kula-nihantārau trāyetāṁ no raghūttamau ||',
      meaning:
        'The refuge of all beings, the foremost among all archers, the destroyers of the demon race — may the best of the Raghus protect us.',
    },
    {
      id: 20,
      verseLabel: 'Shloka 20',
      sanskrit:
        'आत्तसज्जधनुषाविषुस्पृशाव् अक्षयाशुगनिषङ्गसङ्गिनौ।\nरक्षणाय मम रामलक्ष्मणाव् अग्रतः पथि सदैव गच्छताम्॥',
      transliteration:
        'Ātta-sajja-dhanuṣāv-iṣu-spṛśāv akṣayāśuga-niṣaṅga-saṅginau |\nrakṣaṇāya mama rāma-lakṣmaṇāv agrataḥ pathi sadaiva gacchatām ||',
      meaning:
        'With bows strung and ready, fingers touching their arrows, bearing inexhaustible quivers — may Rama and Lakshmana always walk ahead of me on my path for my protection.',
    },
    {
      id: 21,
      verseLabel: 'Shloka 21',
      sanskrit:
        'सन्नद्धः कवची खड्गी चापबाणधरो युवा।\nगच्छन्मनोरथोऽस्माकं रामः पातु सलक्ष्मणः॥',
      transliteration:
        'Sannaddhaḥ kavacī khaḍgī cāpa-bāṇa-dharo yuvā |\ngacchan-manoratho\'smākaṁ rāmaḥ pātu sa-lakṣmaṇaḥ ||',
      meaning:
        'Armored, wearing a cuirass, bearing sword, bow and arrow — that youthful Rama, who fulfills our heart\'s desires, may he protect us along with Lakshmana.',
    },
    {
      id: 22,
      verseLabel: 'Shloka 22',
      sanskrit:
        'रामो दाशरथिः शूरो लक्ष्मणानुचरो बली।\nकाकुत्स्थः पुरुषः पूर्णः कौसल्येयो रघूत्तमः॥',
      transliteration:
        'Rāmo dāśarathiḥ śūro lakṣmaṇānucaro balī |\nkākutsthaḥ puruṣaḥ pūrṇaḥ kausalyeyo raghūttamaḥ ||',
      meaning:
        'Rama, son of Dasharatha, valiant hero, accompanied by Lakshmana, mighty one, descendant of Kakutstha, the complete Supreme Being, son of Kausalya, the best of the Raghus.',
    },
    {
      id: 23,
      verseLabel: 'Shloka 23',
      sanskrit:
        'वेदान्तवेद्यो यज्ञेशः पुराणपुरुषोत्तमः।\nजानकीवल्लभः श्रीमानप्रमेयपराक्रमः॥',
      transliteration:
        'Vedānta-vedyo yajñeśaḥ purāṇa-puruṣottamaḥ |\njānakī-vallabhaḥ śrīmān-aprameya-parākramaḥ ||',
      meaning:
        'He who is known through Vedanta, the Lord of sacrifices, the Supreme Being praised in the Puranas, the beloved of Janaki, the glorious one of immeasurable valor.',
    },
    {
      id: 24,
      verseLabel: 'Shloka 24',
      sanskrit:
        'इत्येतानि जपन्नित्यं मद्भक्तः श्रद्धयान्वितः।\nअश्वमेधाधिकं पुण्यं सम्प्राप्नोति न संशयः॥',
      transliteration:
        'Ityetāni japan-nityaṁ mad-bhaktaḥ śraddhayānvitaḥ |\naśvamedh-ādhikaṁ puṇyaṁ samprāpnoti na saṁśayaḥ ||',
      meaning:
        'One who daily recites these names with devotion and faith attains merit greater than the Ashvamedha sacrifice — of this there is no doubt.',
    },
    {
      id: 25,
      verseLabel: 'Shloka 25',
      sanskrit:
        'रामं दूर्वादलश्यामं पद्माक्षं पीतवाससम्।\nस्तुवन्ति नामभिर्दिव्यैर्न ते संसारिणो नरः॥',
      transliteration:
        'Rāmaṁ dūrvā-dala-śyāmaṁ padmākṣaṁ pīta-vāsasam |\nstuvanti nāmabhir-divyair-na te saṁsāriṇo naraḥ ||',
      meaning:
        'Those who praise Rama — dark as durva grass, lotus-eyed, clad in yellow garments — with divine names, they are no longer bound to the cycle of worldly existence.',
    },
    {
      id: 26,
      verseLabel: 'Shloka 26',
      sanskrit:
        'रामं लक्ष्मणपूर्वजं रघुवरं सीतापतिं सुन्दरं\nकाकुत्स्थं करुणार्णवं गुणनिधिं विप्रप्रियं धार्मिकम्।\nराजेन्द्रं सत्यसन्धं दशरथतनयं श्यामलं शान्तमूर्तिं\nवन्दे लोकाभिरामं रघुकुलतिलकं राघवं रावणारिम्॥',
      transliteration:
        'Rāmaṁ lakṣmaṇa-pūrvajaṁ raghu-varaṁ sītā-patiṁ sundaraṁ\nkākutsthaṁ karuṇārṇavaṁ guṇa-nidhiṁ vipra-priyaṁ dhārmikam |\nrājendraṁ satya-sandhaṁ daśaratha-tanayaṁ śyāmalaṁ śānta-mūrtiṁ\nvande lokābhirāmaṁ raghu-kula-tilakaṁ rāghavaṁ rāvaṇārim ||',
      meaning:
        'I salute Rama — elder brother of Lakshmana, best of the Raghus, husband of Sita, beautiful, descendant of Kakutstha, ocean of compassion, treasure of virtues, beloved of the learned, righteous, king of kings, true to his word, son of Dasharatha, dark-complexioned, of peaceful form, the delight of the world, the jewel of the Raghu dynasty, the enemy of Ravana.',
    },
    {
      id: 27,
      verseLabel: 'Shloka 27',
      sanskrit:
        'रामाय रामभद्राय रामचन्द्राय वेधसे।\nरघुनाथाय नाथाय सीतायाः पतये नमः॥',
      transliteration:
        'Rāmāya rāma-bhadrāya rāma-candrāya vedhase |\nraghunāthāya nāthāya sītāyāḥ pataye namaḥ ||',
      meaning:
        'Salutations to Rama, to Ramabhadra, to Ramachandra the creator, to Raghunatha the Lord, to the husband of Sita.',
    },
    {
      id: 28,
      verseLabel: 'Shloka 28',
      sanskrit:
        'श्रीराम राम रघुनन्दन राम राम\nश्रीराम राम भरताग्रज राम राम।\nश्रीराम राम रणकर्कश राम राम\nश्रीराम राम शरणं भव राम राम॥',
      transliteration:
        'Śrīrāma rāma raghunandana rāma rāma\nśrīrāma rāma bharatāgraja rāma rāma |\nśrīrāma rāma raṇa-karkaśa rāma rāma\nśrīrāma rāma śaraṇaṁ bhava rāma rāma ||',
      meaning:
        'O Sri Rama, O joy of the Raghu dynasty! O Sri Rama, O elder brother of Bharata! O Sri Rama, O fierce one in battle! O Sri Rama, be my refuge, O Rama!',
    },
    {
      id: 29,
      verseLabel: 'Shloka 29',
      sanskrit:
        'श्रीरामचन्द्रचरणौ मनसा स्मरामि\nश्रीरामचन्द्रचरणौ वचसा गृणामि।\nश्रीरामचन्द्रचरणौ शिरसा नमामि\nश्रीरामचन्द्रचरणौ शरणं प्रपद्ये॥',
      transliteration:
        'Śrīrāmacandra-caraṇau manasā smarāmi\nśrīrāmacandra-caraṇau vacasā gṛṇāmi |\nśrīrāmacandra-caraṇau śirasā namāmi\nśrīrāmacandra-caraṇau śaraṇaṁ prapadye ||',
      meaning:
        'I remember the feet of Sri Ramachandra in my mind. I praise the feet of Sri Ramachandra with my words. I bow to the feet of Sri Ramachandra with my head. I take refuge at the feet of Sri Ramachandra.',
    },
    {
      id: 30,
      verseLabel: 'Shloka 30',
      sanskrit:
        'माता रामो मत्पिता रामचन्द्रः\nस्वामी रामो मत्सखा रामचन्द्रः।\nसर्वस्वं मे रामचन्द्रो दयालुः\nनान्यं जाने नैव जाने न जाने॥',
      transliteration:
        'Mātā rāmo mat-pitā rāmacandraḥ\nsvāmī rāmo mat-sakhā rāmacandraḥ |\nsarvasvaṁ me rāmacandro dayāluḥ\nnānyaṁ jāne naiva jāne na jāne ||',
      meaning:
        'Rama is my mother, Ramachandra is my father. Rama is my master, Ramachandra is my friend. The compassionate Ramachandra is my everything — I know no other, I know no other, I know no other.',
    },
    {
      id: 31,
      verseLabel: 'Shloka 31',
      sanskrit:
        'दक्षिणे लक्ष्मणो यस्य वामे तु जनकात्मजा।\nपुरतो मारुतिर्यस्य तं वन्दे रघुनन्दनम्॥',
      transliteration:
        'Dakṣiṇe lakṣmaṇo yasya vāme tu janakātmajā |\npurato mārutir-yasya taṁ vande raghunandanam ||',
      meaning:
        'I salute that joy of the Raghu dynasty — Lakshmana on his right, the daughter of Janaka on his left, and Maruti (Hanuman) before him.',
    },
    {
      id: 32,
      verseLabel: 'Shloka 32',
      sanskrit:
        'लोकाभिरामं रणरङ्गधीरं राजीवनेत्रं रघुवंशनाथम्।\nकारुण्यरूपं करुणाकरं तं श्रीरामचन्द्रं शरणं प्रपद्ये॥',
      transliteration:
        'Lokābhirāmaṁ raṇa-raṅga-dhīraṁ rājīva-netraṁ raghu-vaṁśa-nātham |\nkāruṇya-rūpaṁ karuṇākaraṁ taṁ śrīrāmacandraṁ śaraṇaṁ prapadye ||',
      meaning:
        'I take refuge in Sri Ramachandra — the delight of the world, steadfast on the battlefield, lotus-eyed, lord of the Raghu dynasty, the embodiment of compassion, the mine of mercy.',
    },
    {
      id: 33,
      verseLabel: 'Shloka 33',
      sanskrit:
        'मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्।\nवातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥',
      transliteration:
        'Manojavaṁ māruta-tulya-vegaṁ jitendriyaṁ buddhimatāṁ variṣṭham |\nvātātmajaṁ vānara-yūtha-mukhyaṁ śrīrāma-dūtaṁ śaraṇaṁ prapadye ||',
      meaning:
        'I take refuge in the messenger of Sri Rama — swift as thought, fast as the wind, master of the senses, foremost among the wise, son of the Wind God, chief of the monkey host.',
    },
    {
      id: 34,
      verseLabel: 'Shloka 34',
      sanskrit:
        'कूजन्तं रामरामेति मधुरं मधुराक्षरम्।\nआरुह्य कविताशाखां वन्दे वाल्मीकिकोकिलम्॥',
      transliteration:
        'Kūjantaṁ rāma-rāmeti madhuraṁ madhurākṣaram |\nāruhya kavitā-śākhāṁ vande vālmīki-kokilam ||',
      meaning:
        'I salute Valmiki, the cuckoo bird who, perched upon the branch of poetry, sweetly sings the sweet syllables "Rama, Rama."',
    },
    {
      id: 35,
      verseLabel: 'Shloka 35',
      sanskrit:
        'आपदामपहर्तारं दातारं सर्वसम्पदाम्।\nलोकाभिरामं श्रीरामं भूयो भूयो नमाम्यहम्॥',
      transliteration:
        'Āpadām-apahartāraṁ dātāraṁ sarva-sampadām |\nlokābhirāmaṁ śrīrāmaṁ bhūyo bhūyo namāmy-aham ||',
      meaning:
        'I bow again and again to Sri Rama — the remover of calamities, the bestower of all prosperity, the delight of the world.',
    },
    {
      id: 36,
      verseLabel: 'Shloka 36',
      sanskrit:
        'भर्जनं भवबीजानामर्जनं सुखसम्पदाम्।\nतर्जनं यमदूतानां रामरामेति गर्जनम्॥',
      transliteration:
        'Bharjanaṁ bhava-bījānām-arjanaṁ sukha-sampadām |\ntarjanaṁ yama-dūtānāṁ rāma-rāmeti garjanam ||',
      meaning:
        'The roar of "Rama! Rama!" burns the seeds of worldly existence, earns the wealth of happiness, and threatens the messengers of Yama (death).',
    },
    {
      id: 37,
      verseLabel: 'Shloka 37',
      sanskrit:
        'रामो राजमणिः सदा विजयते रामं रमेशं भजे\nरामेणाभिहता निशाचरचमू रामाय तस्मै नमः।\nरामान्नास्ति परायणं परतरं रामस्य दासोऽस्म्यहं\nरामे चित्तलयः सदा भवतु मे भो राम मामुद्धर॥',
      transliteration:
        'Rāmo rāja-maṇiḥ sadā vijayate rāmaṁ rameśaṁ bhaje\nrāmeṇābhihatā niśācara-camū rāmāya tasmai namaḥ |\nrāmān-nāsti parāyaṇaṁ parataraṁ rāmasya dāso\'smy-ahaṁ\nrāme citta-layaḥ sadā bhavatu me bho rāma mām-uddhara ||',
      meaning:
        'Rama the jewel among kings is ever victorious — I worship Rama, the Lord of Lakshmi. By Rama the demon army was slain — I bow to that Rama. There is no higher refuge than Rama — I am the servant of Rama. May my mind always dissolve in Rama — O Rama, uplift me!',
    },
    {
      id: 38,
      verseLabel: 'Mangala Shloka',
      sanskrit:
        'मङ्गलं कोसलेन्द्राय महनीयगुणाब्धये।\nचक्रवर्तितनूजाय सार्वभौमाय मङ्गलम्॥',
      transliteration:
        'Maṅgalaṁ kosalendarāya mahanīya-guṇābdhaye |\ncakravarti-tanūjāya sārvabhaumāya maṅgalam ||',
      meaning:
        'Auspiciousness to the Lord of Kosala, the ocean of magnificent virtues! Auspiciousness to the son of the emperor, the sovereign of all!',
    },
  ],
};

const mahishasuraMardiniStotram: Stotra = {
  id: 'mahishasura-mardini-stotram',
  title: 'Mahishasura Mardini Stotram',
  subtitle: 'महिषासुरमर्दिनिस्तोत्रम्',
  deity: 'Durga',
  description:
    'The 21 thunderous verses by Adi Shankaracharya praising Goddess Durga as the slayer of the buffalo demon Mahishasura. Known as Aigiri Nandini, each verse builds to the triumphant refrain.',
  benefits: [
    'Invokes the fierce protective power of the Divine Mother',
    'Destroys fear, negativity, and obstacles in the devotee\'s life',
    'Bestows courage, victory, and spiritual strength',
  ],
  estimatedMinutes: 12,
  icon: 'trishul',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'अयि गिरिनन्दिनि नन्दितमेदिनि विश्वविनोदिनि नन्दनुते\nगिरिवरविन्ध्यशिरोऽधिनिवासिनि विष्णुविलासिनि जिष्णुनुते।\nभगवति हे शितिकण्ठकुटुम्बिनि भूरिकुटुम्बिनि भूरिकृते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Ayi giri-nandini nandita-medini viśva-vinodini nandanute\ngiri-vara-vindhya-śiro\'dhi-nivāsini viṣṇu-vilāsini jiṣṇunute |\nbhagavati he śiti-kaṇṭha-kuṭumbini bhūri-kuṭumbini bhūri-kṛte\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O daughter of the mountain, who delights the earth, who entertains the universe, praised by Nandana! O dweller on the peak of the great Vindhya, O playful consort of Vishnu, praised by the victorious! O Bhagavati, O family of Shiva, O one of vast kinship and vast deeds — victory, victory to you, O slayer of Mahishasura, O one with beautiful braided hair, O daughter of the mountain!',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'सुरवरवर्षिणि दुर्धरधर्षिणि दुर्मुखमर्षिणि हर्षरते\nत्रिभुवनपोषिणि शङ्करतोषिणि किल्बिषमोषिणि घोषरते।\nदनुजनिरोषिणि दितिसुतरोषिणि दुर्मदशोषिणि सिन्धुसुते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Sura-vara-varṣiṇi durdhara-dharṣiṇi durmukha-marṣiṇi harṣa-rate\ntri-bhuvana-poṣiṇi śaṅkara-toṣiṇi kilbiṣa-moṣiṇi ghoṣa-rate |\ndanuja-niroṣiṇi diti-suta-roṣiṇi durmada-śoṣiṇi sindhu-sute\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O bestower of boons upon the gods, O subduer of the irrepressible, O one who tolerates the wicked, delighting in joy! O nourisher of the three worlds, O one who pleases Shankara, O remover of sins, delighting in celebration! O one furious at demons, wrathful toward the sons of Diti, who dries up evil pride, O daughter of the ocean — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'अयि जगदम्ब मदम्ब कदम्बवनप्रियवासिनि हासरते\nशिखरिशिरोमणि तुङ्गहिमालयशृङ्गनिजालयमध्यगते।\nमधुमधुरे मधुकैटभगञ्जिनि कैटभभञ्जिनि रासरते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Ayi jagadamba madamba kadamba-vana-priya-vāsini hāsa-rate\nśikhari-śiromaṇi tuṅga-himālaya-śṛṅga-nijālaya-madhya-gate |\nmadhu-madhure madhu-kaiṭabha-gañjini kaiṭabha-bhañjini rāsa-rate\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O Mother of the world, my own Mother, who loves to dwell in the kadamba forest, delighting in laughter! O crest-jewel of mountains, residing amidst the lofty peaks of the Himalayas! O one sweet as honey, vanquisher of Madhu and Kaitabha, destroyer of Kaitabha, delighting in the divine dance — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'अयि शतखण्ड विखण्डितरुण्ड वितुण्डितशुण्ड गजाधिपते\nरिपुगजगण्ड विदारणचण्ड पराक्रमशुण्ड मृगाधिपते।\nनिजभुजदण्ड निपातितखण्ड विपातितमुण्ड भटाधिपते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Ayi śata-khaṇḍa vikhaṇḍita-ruṇḍa vituṇḍita-śuṇḍa gajādhipate\nripu-gaja-gaṇḍa vidāraṇa-caṇḍa parākrama-śuṇḍa mṛgādhipate |\nnija-bhuja-daṇḍa nipātita-khaṇḍa vipātita-muṇḍa bhaṭādhipate\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one who shattered heads into a hundred pieces, who crushed the trunks of the lord of elephants! O one whose fierce valor tore the temples of enemy elephants like a lion! O one by whose mighty arms the commanders of warriors were felled and their heads severed — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'अयि रणदुर्मदशत्रुवधोदित दुर्धरनिर्जरशक्तिभृते\nचतुरविचारधुरीणमहाशिव दूतकृतप्रमथाधिपते।\nदुरितदुरीहदुराशयदुर्मति दानवदूतकृतान्तमते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Ayi raṇa-durmada-śatru-vadhodita durdhara-nirjara-śakti-bhṛte\ncatura-vicāra-dhurīṇa-mahāśiva dūta-kṛta-pramathādhipate |\ndurita-durīha-durāśaya-durmati dānava-dūta-kṛtānta-mate\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O wielder of irresistible divine power, aroused by the slaying of battle-maddened foes! O one who made the lord of Pramatha ganas a messenger, whose wisdom even great Shiva esteems! O one who brings death to the envoys of demons of evil deeds, wicked desires, and corrupt minds — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'अयि शरणागतवैरिवधूवर वीरवराभयदायकरे\nत्रिभुवनमस्तकशूलविरोधिशिरोऽधिकृतामलशूलकरे।\nदुमिदुमितामरदुन्दुभिनादमहोमुखरीकृतदिग्म्बरे\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Ayi śaraṇāgata-vairi-vadhū-vara vīra-varābhaya-dāya-kare\ntri-bhuvana-mastaka-śūla-virodhi-śiro\'dhi-kṛtāmala-śūla-kare |\ndumi-dumitāmara-dundubhi-nāda-maho-mukharī-kṛta-digmbare\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one who grants fearlessness to the heroic husbands of the wives of enemies who seek refuge! O one who holds the spotless trident planted in the head of the foe who opposes the three worlds! O one by the thunder of whose divine drums the directions resound — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'अयि निजहुङ्कृतिमात्रनिराकृतधूम्रविलोचनधूम्रशते\nसमरविशोषितशोणितबीजसमुद्भवशोणितबीजलते।\nशिवशिवशुम्भनिशुम्भमहाहवतर्पितभूतपिशाचरते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Ayi nija-huṅkṛti-mātra-nirākṛta-dhūmra-vilocana-dhūmra-śate\nsamara-viśoṣita-śoṇita-bīja-samudbhava-śoṇita-bīja-late |\nśiva-śiva-śumbha-niśumbha-mahāhava-tarpita-bhūta-piśāca-rate\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one who vanquished the smoke-eyed demon Dhumralocana with a mere roar! O one who dried up the blood-seeds sprouting from the battlefield of Raktabija! O one whose great battle with Shumbha and Nishumbha gratified the ghouls and spirits — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'धनुरनुषङ्गरणक्षणसङ्गपरिस्फुरदङ्गनटत्कटके\nकनकपिशङ्गपृषत्कनिषङ्गरसद्भटशृङ्गहतावटुके।\nकृतचतुरङ्गबलक्षितिरङ्गघटद्बहुरङ्गरटद्बटुके\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Dhanur-anuṣaṅga-raṇa-kṣaṇa-saṅga-parisphurat-aṅga-naṭat-kaṭake\nkanaka-piśaṅga-pṛṣatka-niṣaṅga-rasad-bhaṭa-śṛṅga-hatāvaṭuke |\nkṛta-caturaṅga-bala-kṣiti-raṅga-ghaṭad-bahu-raṅga-raṭad-baṭuke\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one whose bracelets dance on limbs that flash in the instant of bow-strung battle! O one whose golden-hued arrows from the quiver struck the horned warriors! O one on whose battlefield the fourfold army clashed in many formations with roaring warriors — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'सुरललनातततथेयितथाभिनयोत्तरनृत्यरते\nजितकनकाहलमोरजमुद्घुमगुङ्गुमविद्यमते।\nधिमिकिटधिक्कटधिक्कटधिक्कटधिध्वनिघोरमृदङ्गनिनादते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Sura-lalanā-tata-theyi-tathā-abhinayottara-nṛtya-rate\njita-kanakāhala-mora-ja-mudghuma-guṅguma-vidyamate |\ndhimikiṭa-dhikkaṭa-dhikkaṭa-dhikkaṭa-dhidhvani-ghora-mṛdaṅga-ninādate\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one who delights in the expressive dance of the celestial maidens moving to the rhythm! O one whose knowledge surpasses the sound of golden kettledrums and peacock cries! O one accompanied by the thunderous "dhimikita-dhikkata" beats of the fierce mridanga — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'जय जय जप्यजये जयशब्दपरस्तुतितत्परविश्वनुते\nझणझणझिञ्झिमिझिङ्कृतनूपुरसिञ्जितमोहितभूतपते।\nनटितनटार्धनटीनटनायकनाटितनाट्यसुगानरते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Jaya jaya japya-jaye jaya-śabda-parastuti-tatpara-viśvanute\njhaṇa-jhaṇa-jhiñjhimi-jhiṅkṛta-nūpura-siñjita-mohita-bhūtapate |\nnaṭita-naṭārdha-naṭī-naṭa-nāyaka-nāṭita-nāṭya-sugāna-rate\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one victorious in the chant of victory, praised by the universe devoted to singing your glory! O one whose jingling anklets enchant even the Lord of beings with their jhana-jhana melody! O one who delights in the beautiful song of the cosmic dance, where Nataraja himself dances as the half-female — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 11,
      verseLabel: 'Verse 11',
      sanskrit:
        'अयि सुमनःसुमनःसुमनः सुमनःसुमनोहरकान्तियुते\nश्रितरजनीरजनीरजनीरजनीरजनीकरवक्त्रवृते।\nसुनयनविभ्रमरभ्रमरभ्रमरभ्रमरभ्रमराधिपते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Ayi sumanaḥ-sumanaḥ-sumanaḥ-sumanaḥ-sumanohara-kānti-yute\nśrita-rajanī-rajanī-rajanī-rajanī-rajanī-kara-vaktra-vṛte |\nsunayanaṃ-vibhramara-bhramara-bhramara-bhramara-bhramarādhipate\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one endowed with the captivating radiance of the finest flowers! O one whose face is surrounded by the glow of the moonlit night! O one whose beautiful eyes are like the lord of the bees hovering among blossoms — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 12,
      verseLabel: 'Verse 12',
      sanskrit:
        'सहितमहाहवमल्लमतल्लिकमल्लितरल्लकमल्लरते\nविरचितवल्लिकपल्लिकमल्लिकझिल्लिकभिल्लिकवर्गवृते।\nसितकृतफुल्लसमुल्लसितारुणतल्लजपल्लवसल्ललिते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Sahita-mahāhava-malla-matallika-mallita-rallaka-malla-rate\nviracita-vallika-pallika-mallika-jhillika-bhillika-varga-vṛte |\nsita-kṛta-phulla-samullasitāruṇa-tallaja-pallava-sallalite\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one who delights in the great wrestling match of battle with mighty warriors! O one surrounded by groups of tribal women wearing jasmine creepers! O one who plays gracefully amidst fresh reddish sprouts in full bloom — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 13,
      verseLabel: 'Verse 13',
      sanskrit:
        'अविरलगण्डगलन्मदमेदुरमत्तमतङ्गजराजपते\nत्रिभुवनभूषणभूतकलानिधिरूपपयोनिधिराजसुते।\nअयि सुदतीजनलालसमानसमोहनमन्मथराजसुते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Avirala-gaṇḍa-galan-mada-medura-matta-mataṅgaja-rāja-pate\ntri-bhuvana-bhūṣaṇa-bhūta-kalā-nidhi-rūpa-payo-nidhi-rāja-sute |\nayi sudatī-jana-lālasa-mānasa-mohana-manmatha-rāja-sute\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one who commands the lordly elephants intoxicated with must flowing profusely from their temples! O daughter of the ocean — the ornament of the three worlds, beautiful as the moon! O daughter of the king of love who enchants the hearts of beautiful women — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 14,
      verseLabel: 'Verse 14',
      sanskrit:
        'कमलदलामलकोमलकान्तिकलाकलितामलभालतले\nसकलविलासकलानिलयक्रमकेलिचलत्कलहंसकुले।\nअलिकुलसङ्कुलकुवलयमण्डलमौलिमिलद्बकुलालिकुले\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Kamala-dalāmala-komala-kānti-kalā-kalitāmala-bhāla-tale\nsakala-vilāsa-kalā-nilaya-krama-keli-calat-kala-haṁsa-kule |\nali-kula-saṅkula-kuvalaya-maṇḍala-mauli-milad-bakulāli-kule\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one whose spotless forehead shines with the soft radiance of lotus petals! O one around whom graceful swans move playfully as the abode of all arts! O one whose hair is adorned with bakula flowers amidst clusters of bees hovering over blue lotuses — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 15,
      verseLabel: 'Verse 15',
      sanskrit:
        'करमुरलीरवमीजितकूजितलज्जितकोकिलमञ्जुमते\nमिलितपुलिन्दमनोहरगुञ्जितरञ्जितशैलनिकुञ्जगते।\nनिजगणभूतमहाशबरीगणसद्गुणसम्भृतकेलितले\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Kara-muralī-rava-vījita-kūjita-lajjita-kokila-mañju-mate\nmilita-pulinda-manohara-guñjita-rañjita-śaila-nikuñja-gate |\nnija-gaṇa-bhūta-mahā-śabarī-gaṇa-sad-guṇa-sambhṛta-keli-tale\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one of sweet wisdom whose flute in hand puts the cuckoo to shame with its melody! O one who dwells in the mountain groves colored by the charming songs of the Pulinda tribes! O one whose playgrounds are filled with the virtuous deeds of the great Shabari women of her retinue — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 16,
      verseLabel: 'Verse 16',
      sanskrit:
        'कटितटपीतदुकूलविचित्रमयूखतिरस्कृतचन्द्ररुचे\nप्रणतसुरासुरमौलिमणिस्फुरदंशुलसन्नखचन्द्ररुचे।\nजितकनकाचलमौलिपदोर्जितनिर्भरकुञ्जरकुम्भकुचे\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Kaṭi-taṭa-pīta-dukūla-vicitra-mayūkha-tiraskṛta-candra-ruce\npraṇata-surāsura-mauli-maṇi-sphurat-aṁśu-lasan-nakha-candra-ruce |\njita-kanakācala-mauli-padorjita-nirbhara-kuñjara-kumbha-kuce\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one whose yellow silken garment at the waist outshines the moon with its wonderful radiance! O one whose toenails gleam like moons with the sparkle from the crest-gems of prostrating gods and demons! O one whose bosom surpasses the frontal globes of elephants and the peaks of golden Mount Meru — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 17,
      verseLabel: 'Verse 17',
      sanskrit:
        'विजितसहस्रकरैकसहस्रकरैकसहस्रकरैकनुते\nकृतसुरतारकसङ्गरतारकसङ्गरतारकसूनुसुते।\nसुरथसमाधिसमानसमाधिसमाधिसमाधिसुजातरते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Vijita-sahasra-karaika-sahasra-karaika-sahasra-karaika-nute\nkṛta-sura-tāraka-saṅgara-tāraka-saṅgara-tāraka-sūnu-sute |\nsuratha-samādhi-samāna-samādhi-samādhi-samādhi-sujāta-rate\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O one praised by the thousand-rayed sun who outshines a thousand suns! O daughter of the one who battled Tarakasura in the war of the gods! O one who delights in the deep meditation like that of King Suratha — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 18,
      verseLabel: 'Verse 18',
      sanskrit:
        'पदकमलं करुणानिलये वरिवस्यति योऽनुदिनं सुशिवे\nअयि कमले कमलानिलये कमलानिलयः स कथं न भवेत्।\nतव पदमेव परम्पदमित्यनुशीलयतो मम किं न शिवे\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Pada-kamalaṁ karuṇā-nilaye varivasyati yo\'nudinaṁ su-śive\nayi kamale kamalā-nilaye kamalā-nilayaḥ sa kathaṁ na bhavet |\ntava padam-eva param-padam-ity-anuśīlayato mama kiṁ na śive\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O auspicious one, abode of compassion — one who daily worships your lotus feet, O lotus-dwelling one, how can they not become the abode of Lakshmi? For one who contemplates that your feet alone are the supreme abode, what is not attained, O Shive? — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 19,
      verseLabel: 'Verse 19',
      sanskrit:
        'कनकलसत्कलसिन्धुजलैरनुसिञ्चिनुतेगुणरङ्गभुवम्\nभजति स किं न शचीकुचकुम्भतटीपरिरम्भसुखानुभवम्।\nतव चरणं शरणं करवाणि नतामरवाणिनिवासिशिवम्\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Kanaka-lasat-kala-sindhu-jalair-anusiñcinute-guṇa-raṅga-bhuvam\nbhajati sa kiṁ na śacī-kuca-kumbha-taṭī-parirambha-sukhānubhavam |\ntava caraṇaṁ śaraṇaṁ karavāṇi natāmara-vāṇi-nivāsi-śivam\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'One who sprinkles the arena of virtues with golden waters from the ocean — does he not attain the bliss of Indra embracing Shachi? I make your feet my refuge, O auspicious one in whom Saraswati and all the gods find their home — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 20,
      verseLabel: 'Verse 20',
      sanskrit:
        'तव विमलेन्दुकुलं वदनेन्दुमलं सकलं ननु कूलयते\nकिमु पुरुहूतपुरीन्दुमुखीसुमुखीभिरसौ विमुखीक्रियते।\nमम तु मतं शिवनामधने भवती कृपया किमुत क्रियते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Tava vimalendu-kulaṁ vadanendu-malaṁ sakalaṁ nanu kūlayate\nkimu puruhūta-purīndu-mukhī-sumukhī-bhir-asau vimukhī-kriyate |\nmama tu mataṁ śiva-nāma-dhane bhavatī kṛpayā kim-uta kriyate\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'Your spotless moon-like face puts to shame the entire moon dynasty. Are the beautiful moon-faced women of Indra\'s city turned away before you? My conviction is this, O one whose wealth is the name of Shiva — what cannot be achieved by your grace? — victory to you, O slayer of Mahishasura!',
    },
    {
      id: 21,
      verseLabel: 'Verse 21',
      sanskrit:
        'अयि मयि दीनदयालुतया कृपयैव त्वया भवितव्यमुमे\nअयि जगतो जननी कृपयासि यथासि तथानुमितासिरते।\nयदुचितमत्र भवत्युररीकुरुतादुरुतापमपाकुरुते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते॥',
      transliteration:
        'Ayi mayi dīna-dayālutayā kṛpayaiva tvayā bhavitavyam-ume\nayi jagato jananī kṛpayāsi yathāsi tathānumitāsi-rate |\nyad-ucitam-atra bhavaty-urarikurutād-urutāpam-apākurute\njaya jaya he mahiṣāsura-mardini ramya-kapardini śailasute ||',
      meaning:
        'O Uma, you must be compassionate to me with your kindness for the helpless! O Mother of the world, you are known to be as merciful as you truly are! Do what is fitting here — accept this prayer and remove the great affliction — victory, victory to you, O slayer of Mahishasura, O one with beautiful braided hair, O daughter of the mountain!',
    },
  ],
};

const ashtalakshmiStotram: Stotra = {
  id: 'ashtalakshmi-stotram',
  title: 'Ashtalakshmi Stotram',
  subtitle: 'अष्टलक्ष्मीस्तोत्रम्',
  deity: 'Ashtalakshmi',
  description:
    'Eight melodious verses celebrating the eight forms of Goddess Lakshmi — from primeval abundance to wealth, grain, courage, elephants, progeny, victory, and knowledge.',
  benefits: [
    'Invokes the blessings of all eight forms of Lakshmi for complete prosperity',
    'Bestows material and spiritual wealth, courage, and wisdom',
    'Grants progeny, victory, and protection from misfortune',
  ],
  estimatedMinutes: 8,
  icon: 'kalasha',
  verses: [
    {
      id: 1,
      verseLabel: 'Adi Lakshmi',
      sanskrit:
        'सुमनसवन्दित सुन्दरि माधवि चन्द्रसहोदरि हेममये\nमुनिगणमण्डित मोक्षप्रदायिनि मञ्जुलभाषिणि वेदनुते।\nपङ्कजवासिनि देवसुपूजित सद्गुणवर्षिणि शान्तियुते\nजय जय हे मधुसूदनकामिनि आदिलक्ष्मि सदा पालय माम्॥',
      transliteration:
        'Sumanasa-vandita sundari mādhavi candra-sahodari hema-maye\nmuni-gaṇa-maṇḍita mokṣa-pradāyini mañjula-bhāṣiṇi vedanute |\npaṅkaja-vāsini deva-supūjita sad-guṇa-varṣiṇi śānti-yute\njaya jaya he madhusūdana-kāmini ādi-lakṣmi sadā pālaya mām ||',
      meaning:
        'O beautiful one praised by the wise, O Madhavi, sister of the moon, golden one! O one adorned by sages, granter of liberation, sweet-spoken, praised by the Vedas! O lotus-dweller, worshipped by gods, showering noble virtues, endowed with peace — victory to you, O beloved of Madhusudana, O Adi Lakshmi, protect me always!',
    },
    {
      id: 2,
      verseLabel: 'Dhanya Lakshmi',
      sanskrit:
        'अयिकलिकल्मषनाशिनि कामिनि वैदिकरूपिणि वेदमये\nक्षीरसमुद्भवमङ्गलरूपिणि मन्त्रनिवासिनि मन्त्रनुते।\nमङ्गलदायिनि अम्बुजवासिनि देवगणाश्रितपादयुते\nजय जय हे मधुसूदनकामिनि धान्यलक्ष्मि सदा पालय माम्॥',
      transliteration:
        'Ayi-kali-kalmaṣa-nāśini kāmini vaidika-rūpiṇi veda-maye\nkṣīra-samudbhava-maṅgala-rūpiṇi mantra-nivāsini mantranute |\nmaṅgala-dāyini ambuja-vāsini deva-gaṇāśrita-pāda-yute\njaya jaya he madhusūdana-kāmini dhānya-lakṣmi sadā pālaya mām ||',
      meaning:
        'O destroyer of the sins of Kali Yuga, O beautiful one of Vedic form, embodiment of the Vedas! O auspicious one born of the milky ocean, dwelling in mantras, praised by mantras! O bestower of auspiciousness, lotus-dweller, whose feet are sought by the gods — victory to you, O beloved of Madhusudana, O Dhanya Lakshmi, protect me always!',
    },
    {
      id: 3,
      verseLabel: 'Dhairya Lakshmi',
      sanskrit:
        'जयवरवर्णिनि वैष्णवि भार्गवि मन्त्रस्वरूपिणि मन्त्रमये\nसुरगणपूजित शीघ्रफलप्रद ज्ञानविकासिनि शास्त्रनुते।\nभवभयहारिणि पापविमोचनि साधुजनाश्रितपादयुते\nजय जय हे मधुसूदनकामिनि धैर्यलक्ष्मि सदा पालय माम्॥',
      transliteration:
        'Jaya-vara-varṇini vaiṣṇavī bhārgavī mantra-svarūpiṇi mantra-maye\nsura-gaṇa-pūjita śīghra-phala-prada jñāna-vikāsini śāstranute |\nbhava-bhaya-hāriṇi pāpa-vimocani sādhu-janāśrita-pāda-yute\njaya jaya he madhusūdana-kāmini dhairya-lakṣmi sadā pālaya mām ||',
      meaning:
        'O one who describes victory, O Vaishnavi, O Bhargavi, embodiment of mantras! O one worshipped by gods, granting swift results, expanding knowledge, praised by scriptures! O remover of the fear of existence, liberator from sin, whose feet are the refuge of the virtuous — victory to you, O beloved of Madhusudana, O Dhairya Lakshmi, protect me always!',
    },
    {
      id: 4,
      verseLabel: 'Gaja Lakshmi',
      sanskrit:
        'जय जय दुर्गतिनाशिनि कामिनि सर्वफलप्रदशास्त्रमये\nरथगजतुरगपदातिसमावृत परिजनमण्डितलोकनुते।\nहरिहरब्रह्मसुपूजितसेवित तापनिवारिणि पादयुते\nजय जय हे मधुसूदनकामिनि गजलक्ष्मि सदा पालय माम्॥',
      transliteration:
        'Jaya jaya durgati-nāśini kāmini sarva-phala-prada-śāstra-maye\nratha-gaja-turaga-padāti-samāvṛta parijana-maṇḍita-lokanute |\nhari-hara-brahma-supūjita-sevita tāpa-nivāriṇi pāda-yute\njaya jaya he madhusūdana-kāmini gaja-lakṣmi sadā pālaya mām ||',
      meaning:
        'Victory, victory! O destroyer of misfortune, O beautiful one, embodiment of all fruit-granting scriptures! O one surrounded by chariots, elephants, horses, and infantry, attended by retinues, praised by the world! O one worshipped by Hari, Hara, and Brahma, whose feet remove afflictions — victory to you, O beloved of Madhusudana, O Gaja Lakshmi, protect me always!',
    },
    {
      id: 5,
      verseLabel: 'Santana Lakshmi',
      sanskrit:
        'अयिखगवाहिनि मोहिनि चक्रिणि रागविवर्धिनि ज्ञानमये\nगुणगणवारिधि लोकहितैषिणि सप्तस्वरभूषितगाननुते।\nसकलसुरासुरदेवमुनीश्वर मानसवन्दितपादयुते\nजय जय हे मधुसूदनकामिनि सन्तानलक्ष्मि सदा पालय माम्॥',
      transliteration:
        'Ayi-khaga-vāhini mohini cakriṇi rāga-vivardhinī jñāna-maye\nguṇa-gaṇa-vāridhi loka-hitaiṣiṇi sapta-svara-bhūṣita-gāna-nute |\nsakala-surāsura-deva-munīśvara mānasa-vandita-pāda-yute\njaya jaya he madhusūdana-kāmini santāna-lakṣmi sadā pālaya mām ||',
      meaning:
        'O one who rides the bird Garuda, enchanting one, wielder of the discus, increaser of love, embodiment of knowledge! O ocean of virtues, well-wisher of the world, praised by song adorned with seven notes! O one whose feet are worshipped in the minds of all gods, demons, and great sages — victory to you, O beloved of Madhusudana, O Santana Lakshmi, protect me always!',
    },
    {
      id: 6,
      verseLabel: 'Vijaya Lakshmi',
      sanskrit:
        'जय कमलासनि सद्गतिदायिनि ज्ञानविकासिनि गानमये\nअनुदिनमर्चित कुङ्कुमधूसरभूषितवासितवाद्यनुते।\nकनकधरास्तुतिवैभववन्दित शङ्करदेशिकमान्यपदे\nजय जय हे मधुसूदनकामिनि विजयलक्ष्मि सदा पालय माम्॥',
      transliteration:
        'Jaya kamalāsani sad-gati-dāyini jñāna-vikāsini gāna-maye\nanudinam-arcita kuṅkuma-dhūsara-bhūṣita-vāsita-vādya-nute |\nkanakadhārā-stuti-vaibhava-vandita śaṅkara-deśika-mānya-pade\njaya jaya he madhusūdana-kāmini vijaya-lakṣmi sadā pālaya mām ||',
      meaning:
        'Victory to the lotus-seated one, granter of noble destiny, expander of knowledge, embodiment of music! O one worshipped daily with saffron-dusted ornaments, fragrant offerings, and instruments! O one whose glory is praised in the Kanakadhara hymn, whose feet are honored by Shankaracharya — victory to you, O beloved of Madhusudana, O Vijaya Lakshmi, protect me always!',
    },
    {
      id: 7,
      verseLabel: 'Vidya Lakshmi',
      sanskrit:
        'प्रणत सुरेश्वरि भारति भार्गवि शोकविनाशिनि रत्नमये\nमणिमयभूषित कर्णविभूषण शान्तिसमावृतहासमुखे।\nनवनिधिदायिनि कलिमलहारिणि कामितफलप्रदहस्तयुते\nजय जय हे मधुसूदनकामिनि विद्यालक्ष्मि सदा पालय माम्॥',
      transliteration:
        'Praṇata sureśvari bhāratī bhārgavī śoka-vināśini ratna-maye\nmaṇi-maya-bhūṣita karṇa-vibhūṣaṇa śānti-samāvṛta-hāsa-mukhe |\nnava-nidhi-dāyini kali-mala-hāriṇi kāmita-phala-prada-hasta-yute\njaya jaya he madhusūdana-kāmini vidyā-lakṣmi sadā pālaya mām ||',
      meaning:
        'O one bowed to by the lord of gods, O Bharati, O Bhargavi, destroyer of sorrow, jewel-adorned! O one with gem-studded ear ornaments, whose smiling face is surrounded by peace! O bestower of the nine treasures, remover of the impurities of Kali Yuga, whose hands grant desired fruits — victory to you, O beloved of Madhusudana, O Vidya Lakshmi, protect me always!',
    },
    {
      id: 8,
      verseLabel: 'Dhana Lakshmi',
      sanskrit:
        'धिमिधिमि धिन्धिमि धिन्धिमि धिन्धिमि दुन्दुभिनादसुपूर्णमये\nघुमघुम घुङ्घुम घुङ्घुम घुङ्घुम शङ्खनिनादसुवाद्यनुते।\nवेदपुराणेतिहाससुपूजित वैदिकमार्गप्रदर्शयुते\nजय जय हे मधुसूदनकामिनि धनलक्ष्मि सदा पालय माम्॥',
      transliteration:
        'Dhimi-dhimi dhindhimi dhindhimi dhindhimi dundubhi-nāda-supūrṇa-maye\nghuma-ghuma ghuṅghuma ghuṅghuma ghuṅghuma śaṅkha-nināda-suvādya-nute |\nveda-purāṇetihāsa-supūjita vaidika-mārga-pradarśa-yute\njaya jaya he madhusūdana-kāmini dhana-lakṣmi sadā pālaya mām ||',
      meaning:
        'O one filled with the resounding beats of "dhimi-dhimi-dhindhimi" of the kettledrum! O one praised by the melodious "ghuma-ghuma" of conch shells and fine instruments! O one worshipped in the Vedas, Puranas, and epics, who shows the Vedic path — victory to you, O beloved of Madhusudana, O Dhana Lakshmi, protect me always!',
    },
  ],
};

const achyutashtakam: Stotra = {
  id: 'achyutashtakam',
  title: 'Achyutashtakam',
  subtitle: 'अच्युताष्टकम्',
  deity: 'Krishna',
  description:
    'Eight verses by Adi Shankaracharya invoking the infallible Lord through his many divine names — Achyuta, Keshava, Rama, Narayana, Govinda — celebrating both his Krishna and Rama avatars.',
  benefits: [
    'Invokes the protection and grace of Lord Vishnu through his many names',
    'Purifies the mind through the remembrance of divine forms and incarnations',
    'Bestows devotion, peace, and liberation from the cycle of worldly existence',
  ],
  estimatedMinutes: 5,
  icon: 'crown',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'अच्युतं केशवं रामनारायणं कृष्णदामोदरं वासुदेवं हरिम्।\nश्रीधरं माधवं गोपिकावल्लभं जानकीनायकं रामचन्द्रं भजे॥',
      transliteration:
        'Acyutaṁ keśavaṁ rāma-nārāyaṇaṁ kṛṣṇa-dāmodaraṁ vāsudevaṁ harim |\nśrīdharaṁ mādhavaṁ gopikā-vallabhaṁ jānakī-nāyakaṁ rāmacandraṁ bhaje ||',
      meaning:
        'I worship Achyuta, Keshava, Rama, Narayana, Krishna, Damodara, Vasudeva, Hari, Shridhara, Madhava, the beloved of the gopis, the lord of Janaki — Ramachandra.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'अच्युतं केशवं सत्यभामाधवं माधवं श्रीधरं राधिकाराधितम्।\nइन्दिरामन्दिरं चेतसा सुन्दरं देवकीनन्दनं नन्दनं सन्दधे॥',
      transliteration:
        'Acyutaṁ keśavaṁ satyabhāmā-dhavaṁ mādhavaṁ śrīdharaṁ rādhikā-rādhitam |\nindirā-mandiraṁ cetasā sundaraṁ devakī-nandanaṁ nandanaṁ sandadhe ||',
      meaning:
        'I hold in my heart Achyuta, Keshava, the lord of Satyabhama, Madhava, Shridhara, the one worshipped by Radhika — the temple of Indira (Lakshmi), beautiful in consciousness, the joy of Devaki, the son of Nanda.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'विष्णवे जिष्णवे शङ्खिने चक्रिणे रुक्मिणीरागिणे जानकीजानये।\nवल्लवीवल्लभायाऽर्चितायात्मने कंसविध्वंसिने वंशिने ते नमः॥',
      transliteration:
        'Viṣṇave jiṣṇave śaṅkhine cakriṇe rukmiṇī-rāgiṇe jānakī-jānaye |\nvallavī-vallabhāyārcitāyātmane kaṁsa-vidhvaṁsine vaṁśine te namaḥ ||',
      meaning:
        'Salutations to you, Vishnu, the victorious one, bearer of the conch and discus, the beloved of Rukmini, the consort of Janaki, the beloved of the gopis, the worshipped Self, the destroyer of Kamsa, the flute-player.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'कृष्ण गोविन्द हे राम नारायण श्रीपते वासुदेवाजित श्रीनिधे।\nअच्युतानन्त हे माधवाधोक्षज द्वारकानायक द्रौपदीरक्षक॥',
      transliteration:
        'Kṛṣṇa govinda he rāma nārāyaṇa śrīpate vāsudevājita śrī-nidhe |\nacyutānanta he mādhavādhokṣaja dvārakā-nāyaka draupadī-rakṣaka ||',
      meaning:
        'O Krishna, Govinda, O Rama, Narayana, Lord of Shri, Vasudeva, the unconquered, treasure of glory! O Achyuta, Ananta, O Madhava, Adhokshaja, Lord of Dvaraka, protector of Draupadi!',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'राक्षसक्षोभितः सीतया शोभितो दण्डकारण्यभूपुण्यताकारणः।\nलक्ष्मणेनान्वितो वानरैः सेवितोऽगस्त्यसम्पूजितो राघवः पातु माम्॥',
      transliteration:
        'Rākṣasa-kṣobhitaḥ sītayā śobhito daṇḍakāraṇya-bhū-puṇyatā-kāraṇaḥ |\nlakṣmaṇenānvito vānaraiḥ sevito\'gastyasampūjito rāghavaḥ pātu mām ||',
      meaning:
        'May Raghava protect me — he who troubled the demons, who was adorned by Sita, who sanctified the land of Dandakaranya, who was accompanied by Lakshmana, served by the monkeys, and worshipped by Sage Agastya.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'धेनुकारिष्टकोऽनिष्टकृद्द्वेषिणां केशिहा कंसहृद्वंशिकावादकः।\nपूतनाकोपकः सूरजाखेलनो बालगोपालकः पातु मां सर्वदा॥',
      transliteration:
        'Dhenukāriṣṭako\'niṣṭa-kṛd-dveṣiṇāṁ keśi-hā kaṁsa-hṛd-vaṁśikā-vādakaḥ |\npūtanā-kopakaḥ sūrajā-khelano bāla-gopālakaḥ pātu māṁ sarvadā ||',
      meaning:
        'May the child cowherd protect me always — the slayer of Dhenuka and Arishtaka, the destroyer of all who harbored malice, the killer of Keshi, the slayer of Kamsa, the flute player, the enrager of Putana, the one who played by the river Yamuna.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'विद्युदुद्योतवान्प्रस्फुरद्वाससं प्रावृडम्भोदवत्प्रोल्लसद्विग्रहम्।\nवन्यया मालया शोभितोरस्थलं लोहिताङ्घ्रिद्वयं वारिजाक्षं भजे॥',
      transliteration:
        'Vidyud-udyotavān-prasphurad-vāsasaṁ prāvṛḍ-ambhodavat-prollasad-vigraham |\nvanyayā mālayā śobhitorasthalaṁ lohitāṅghri-dvayaṁ vārijākṣaṁ bhaje ||',
      meaning:
        'I worship the lotus-eyed Lord whose garment flashes like lightning, whose form gleams like a monsoon cloud, whose chest is adorned with a garland of wild flowers, and whose two feet are red.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'कुञ्चितैः कुन्तलैर्भ्राजमानाननं रत्नमौलिं लसत्कुण्डलं गण्डयोः।\nहारकेयूरकं कङ्कणप्रोज्ज्वलं किङ्किणीमञ्जुलं श्यामलं तं भजे॥',
      transliteration:
        'Kuñcitaiḥ kuntalair-bhrājamānānanaṁ ratna-mauliṁ lasat-kuṇḍalaṁ gaṇḍayoḥ |\nhāra-keyūrakaṁ kaṅkaṇa-projjvalaṁ kiṅkiṇī-mañjulaṁ śyāmalaṁ taṁ bhaje ||',
      meaning:
        'I worship that dark-complexioned Lord whose face shines with curly locks, who wears a jeweled crown, whose cheeks are lit by sparkling earrings, who is adorned with necklaces, armlets, and blazing bracelets, and whose anklet bells chime sweetly.',
    },
  ],
};

const narasimhaKaravalambaStotram: Stotra = {
  id: 'narasimha-karavalamba-stotram',
  title: 'Narasimha Karavalamba Stotram',
  subtitle: 'लक्ष्मीनृसिंहकरावलम्बस्तोत्रम्',
  deity: 'Narasimha',
  description:
    'Ten soul-stirring verses by Adi Shankaracharya pleading for the protective hand of Lord Lakshmi Narasimha. Each verse ends with the desperate cry: "O Lakshmi Narasimha, extend your hand to me!"',
  benefits: [
    'Invokes the fierce protective grace of Lord Narasimha against all dangers',
    'Grants refuge from the ocean of worldly existence and the fear of death',
    'Bestows courage, faith, and liberation through surrender to the Lord',
  ],
  estimatedMinutes: 6,
  icon: 'pillar',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'श्रीमत्पयोनिधिनिकेतनचक्रपाणे भोगीन्द्रभोगमणिराजितपुण्यमूर्ते।\nयोगीश शाश्वत शरण्य भवाब्धिपोत लक्ष्मीनृसिंह मम देहि करावलम्बम्॥',
      transliteration:
        'Śrīmat-payonidhi-niketana-cakra-pāṇe bhogīndra-bhoga-maṇi-rājita-puṇya-mūrte |\nyogīśa śāśvata śaraṇya bhavābdhi-pota lakṣmī-nṛsiṁha mama dehi karāvalambam ||',
      meaning:
        'O wielder of the discus who dwells in the glorious milky ocean, O sacred form illumined by the jewel on the hood of the serpent king! O lord of yogis, eternal one, refuge of all, boat across the ocean of existence — O Lakshmi Narasimha, extend your hand to me!',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'ब्रह्मेन्द्ररुद्रमरुदर्ककिरीटकोटिसङ्घट्टिताङ्घ्रिकमलामलकान्तिकान्त।\nलक्ष्मीलसत्कुचसरोरुहराजहंस लक्ष्मीनृसिंह मम देहि करावलम्बम्॥',
      transliteration:
        'Brahmendra-rudra-marud-arka-kirīṭa-koṭi-saṅghaṭṭitāṅghri-kamalāmala-kānti-kānta |\nlakṣmī-lasat-kuca-saroruha-rāja-haṁsa lakṣmī-nṛsiṁha mama dehi karāvalambam ||',
      meaning:
        'O one whose spotless, radiant lotus feet are touched by the crests of millions of crowns of Brahma, Indra, Rudra, the Maruts, and the Sun! O royal swan sporting on the lotus-lake of Lakshmi\'s resplendent bosom — O Lakshmi Narasimha, extend your hand to me!',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'संसारदावदहनाकरभीकरोरुज्वालावलीभिरतिदग्धतनूरुहस्य।\nत्वत्पादपद्मसरसीरुहमागतस्य लक्ष्मीनृसिंह मम देहि करावलम्बम्॥',
      transliteration:
        'Saṁsāra-dāva-dahanākara-bhīkarorujvālāvalībhir-atidagdha-tanūruhasya |\ntvat-pāda-padma-sarasīruham-āgatasya lakṣmī-nṛsiṁha mama dehi karāvalambam ||',
      meaning:
        'My body is scorched by the terrible, fierce flames of the forest fire of worldly existence. I have come to the cool lotus-lake of your lotus feet — O Lakshmi Narasimha, extend your hand to me!',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'संसारजालपतितस्य जगन्निवास सर्वेन्द्रियार्थबडिशाग्रझषोपमस्य।\nप्रोत्कम्पितप्रचुरतालुकमस्तकस्य लक्ष्मीनृसिंह मम देहि करावलम्बम्॥',
      transliteration:
        'Saṁsāra-jāla-patitasya jagan-nivāsa sarvendriyārtha-baḍiśāgra-jhaṣopamaysa |\nprotkampita-pracura-tāluka-mastakasya lakṣmī-nṛsiṁha mama dehi karāvalambam ||',
      meaning:
        'O abode of the universe! I have fallen into the net of worldly existence, like a fish caught on the hook of sense objects, my head and palate violently thrashing — O Lakshmi Narasimha, extend your hand to me!',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'संसारकूपमतिघोरमगाधमूलं सम्प्राप्य दुःखशतसर्पसमाकुलस्य।\nदीनस्य देव कृपया पदमागतस्य लक्ष्मीनृसिंह मम देहि करावलम्बम्॥',
      transliteration:
        'Saṁsāra-kūpam-atighorem-agādha-mūlaṁ samprāpya duḥkha-śata-sarpa-samākulasya |\ndīnasya deva kṛpayā padam-āgatasya lakṣmī-nṛsiṁha mama dehi karāvalambam ||',
      meaning:
        'I have fallen into the terrifying, bottomless well of worldly existence, surrounded by hundreds of serpents of sorrow. O Lord, I am wretched and have come to your feet seeking mercy — O Lakshmi Narasimha, extend your hand to me!',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'संसारभीकरकरीन्द्रकराभिघात निष्पीड्यमानवपुषः सकलार्तिनाश।\nप्राणप्रयाणभवभीतिसमाकुलस्य लक्ष्मीनृसिंह मम देहि करावलम्बम्॥',
      transliteration:
        'Saṁsāra-bhīkara-karīndra-karābhighāta niṣpīḍyamāna-vapuṣaḥ sakalārti-nāśa |\nprāṇa-prayāṇa-bhava-bhīti-samākulasya lakṣmī-nṛsiṁha mama dehi karāvalambam ||',
      meaning:
        'My body is crushed by the blows of the terrible elephant of worldly existence. O destroyer of all afflictions! I am overwhelmed by the fear of death and rebirth — O Lakshmi Narasimha, extend your hand to me!',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'संसारवृक्षमघबीजमनन्तकर्म शाखायुतं करणपत्रमनङ्गपुष्पम्।\nआरुह्य दुःखफलितं पततो दयालो लक्ष्मीनृसिंह मम देहि करावलम्बम्॥',
      transliteration:
        'Saṁsāra-vṛkṣam-agha-bījam-ananta-karma śākhāyutaṁ karaṇa-patram-anaṅga-puṣpam |\nāruhya duḥkha-phalitaṁ patato dayālo lakṣmī-nṛsiṁha mama dehi karāvalambam ||',
      meaning:
        'I have climbed the tree of worldly existence — its seed is sin, its endless branches are karma, its leaves the senses, its flowers desire — and now I fall from its fruit of sorrow. O compassionate one — O Lakshmi Narasimha, extend your hand to me!',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'संसारसागरविशालकरालकाल नक्रग्रहग्रसितनिग्रहविग्रहस्य।\nव्यग्रस्य रागरसनोर्मिनिपीडितस्य लक्ष्मीनृसिंह मम देहि करावलम्बम्॥',
      transliteration:
        'Saṁsāra-sāgara-viśāla-karāla-kāla nakra-graha-grasita-nigraha-vigrahasya |\nvyagrasya rāga-rasanormi-nipīḍitasya lakṣmī-nṛsiṁha mama dehi karāvalambam ||',
      meaning:
        'In the vast ocean of worldly existence, I am seized by the terrible crocodile of time, my body overwhelmed and restrained. I am agitated, tormented by waves of passion and desire — O Lakshmi Narasimha, extend your hand to me!',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'संसारसागरनिमज्जनमुह्यमानं दीनं विलोकय विभो करुणानिधे माम्।\nप्रह्लादखेदपरिहारपरावतार लक्ष्मीनृसिंह मम देहि करावलम्बम्॥',
      transliteration:
        'Saṁsāra-sāgara-nimajjana-muhyamānaṁ dīnaṁ vilokaya vibho karuṇā-nidhe mām |\nprahlāda-kheda-parihāra-parāvatāra lakṣmī-nṛsiṁha mama dehi karāvalambam ||',
      meaning:
        'O all-pervading one, O treasure of compassion — look upon me, wretched and bewildered, drowning in the ocean of worldly existence! O one who incarnated to relieve the suffering of Prahlada — O Lakshmi Narasimha, extend your hand to me!',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'बद्ध्वा गले यमभटा बहु तर्जयन्तः कर्षन्ति यत्र भवपाशशतैर्युतं माम्।\nएकाकिनं परवशं बतदीनबन्धो लक्ष्मीनृसिंह मम देहि करावलम्बम्॥',
      transliteration:
        'Baddhvā gale yama-bhaṭā bahu tarjayantaḥ karṣanti yatra bhava-pāśa-śatair-yutaṁ mām |\nekākinaṁ paravaśaṁ bata-dīna-bandho lakṣmī-nṛsiṁha mama dehi karāvalambam ||',
      meaning:
        'The soldiers of Yama bind my neck and drag me away, threatening me violently, bound by hundreds of nooses of worldly existence. I am alone, helpless — O friend of the wretched — O Lakshmi Narasimha, extend your hand to me!',
    },
  ],
};

const shivaTandavaStotram: Stotra = {
  id: 'shiva-tandava-stotram',
  title: 'Shiva Tandava Stotram',
  subtitle: 'शिवताण्डवस्तोत्रम्',
  deity: 'Shiva',
  description:
    'Composed by the demon king Ravana, this powerful hymn describes Lord Shiva\'s cosmic dance (Tandava) with vivid imagery of his matted locks, serpent ornaments, and thundering damaru.',
  benefits: [
    'Invokes the raw power and grace of Lord Shiva\'s cosmic dance',
    'Develops deep devotion to Mahadeva through magnificent poetry',
    'Brings spiritual strength and fearlessness',
  ],
  estimatedMinutes: 6,
  icon: 'shiva-tandava-stotram',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'जटाटवीगलज्जलप्रवाहपावितस्थले\nगलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम् ।\nडमड्डमड्डमड्डमन्निनादवड्डमर्वयं\nचकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥',
      transliteration:
        'jaṭāṭavī-galaj-jala-pravāha-pāvita-sthale\ngale\'valambya lambitāṁ bhujaṅga-tuṅga-mālikām |\nḍamaḍ-ḍamaḍ-ḍamaḍ-ḍaman-nināda-vaḍḍamarvayaṁ\ncakāra caṇḍa-tāṇḍavaṁ tanotu naḥ śivaḥ śivam ||',
      meaning:
        'On the sacred ground purified by the streams flowing from the dense forest of his matted locks, wearing a magnificent garland of serpents swinging on his neck, producing the thundering sound of the damaru — Shiva performed his fierce Tandava dance. May he bestow prosperity upon us.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी-\nविलोलवीचिवल्लरीविराजमानमूर्धनि ।\nधगद्धगद्धगज्ज्वलल्ललाटपट्टपावके\nकिशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम ॥',
      transliteration:
        'jaṭā-kaṭāha-sambhrama-bhraman-nilimpa-nirjharī-\nvilola-vīci-vallarī-virājamāna-mūrdhani |\ndhagad-dhagad-dhagaj-jvalal-lalāṭa-paṭṭa-pāvake\nkiśora-candra-śekhare ratiḥ pratikṣaṇaṁ mama ||',
      meaning:
        'On his head shines the celestial river Ganga, her restless, creeper-like waves whirling within the basin of his matted locks. His forehead blazes with the fire that flickers ceaselessly. My love grows every moment for the one crowned with the crescent moon.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'धराधरेन्द्रनन्दिनीविलासबन्धुबन्धुर-\nस्फुरद्दिगन्तसन्ततिप्रमोदमानमानसे ।\nकृपाकटाक्षधोरणीनिरुद्धदुर्धरापदि\nक्वचिद्दिगम्बरे मनो विनोदमेतु वस्तुनि ॥',
      transliteration:
        'dharādharendra-nandinī-vilāsa-bandhu-bandhura-\nsphurad-diganta-santati-pramoda-māna-mānase |\nkṛpā-kaṭākṣa-dhoraṇī-niruddha-durdharāpadi\nkvacid-digambare mano vinodametu vastuni ||',
      meaning:
        'His heart rejoices, delighted by the playful beauty of Parvati, daughter of the mountain king, which illuminates all directions. His compassionate glance arrests even the most insurmountable calamities. May my mind find joy in this sky-clad being.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'जटाभुजङ्गपिङ्गलस्फुरत्फणामणिप्रभा-\nकदम्बकुङ्कुमद्रवप्रलिप्तदिग्वधूमुखे ।\nमदान्धसिन्धुरस्फुरत्त्वगुत्तरीयमेदुरे\nमनो विनोदमद्भुतं बिभर्तु भूतभर्तरि ॥',
      transliteration:
        'jaṭā-bhujaṅga-piṅgala-sphurat-phaṇā-maṇi-prabhā-\nkadamba-kuṅkuma-drava-pralipta-dig-vadhū-mukhe |\nmadāndha-sindhura-sphurat-tvag-uttarīya-medure\nmano vinodam-adbhutaṁ bibhartu bhūta-bhartari ||',
      meaning:
        'The tawny glow of the gems on the hoods of the serpents in his matted locks anoints the faces of the directions like saffron paste. He wears the hide of a maddened elephant as his upper garment. May my mind find wondrous delight in the lord of all beings.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'सहस्रलोचनप्रभृत्यशेषलेखशेखर-\nप्रसूनधूलिधोरणी विधूसराङ्घ्रिपीठभूः ।\nभुजङ्गराजमालया निबद्धजाटजूटक\nश्रियै चिराय जायतां चकोरबन्धुशेखरः ॥',
      transliteration:
        'sahasra-locana-prabhṛty-aśeṣa-lekha-śekhara-\nprasūna-dhūli-dhoraṇī vidhūsarāṅghri-pīṭha-bhūḥ |\nbhujaṅga-rāja-mālayā nibaddha-jāṭa-jūṭaka\nśriyai cirāya jāyatāṁ cakora-bandhu-śekharaḥ ||',
      meaning:
        'The dust of the flowers from the crowns of Indra and all the gods renders his footstool grey. His matted hair is bound by the king of serpents as a garland. May he who wears the moon — friend of the chakora bird — as his crest-jewel, bring lasting glory.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'ललाटचत्वरज्वलद्धनञ्जयस्फुलिङ्गभा-\nनिपीतपञ्चसायकं नमन्निलिम्पनायकम् ।\nसुधामयूखलेखया विराजमानशेखरं\nमहाकपालिसम्पदेशिरोजटालमस्तु नः ॥',
      transliteration:
        'lalāṭa-catvara-jvalad-dhanañjaya-sphuliṅga-bhā-\nnipīta-pañca-sāyakaṁ naman-nilimpa-nāyakam |\nsudhā-mayūkha-lekhayā virājamāna-śekharaṁ\nmahā-kapāli-sampadē-śiro-jaṭālam-astu naḥ ||',
      meaning:
        'The sparks of the fire blazing on the courtyard of his forehead consumed the five arrows of Kamadeva. Before him bows the lord of the gods. His crest shines with the streak of the nectar-rayed moon. May his matted locks, the wealth of the great skull-bearer, bless us.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'करालभालपट्टिकाधगद्धगद्धगज्ज्वल-\nद्धनञ्जयाहुतीकृतप्रचण्डपञ्चसायके ।\nधराधरेन्द्रनन्दिनीकुचाग्रचित्रपत्रक-\nप्रकल्पनैकशिल्पिनि त्रिलोचने रतिर्मम ॥',
      transliteration:
        'karāla-bhāla-paṭṭikā-dhagad-dhagad-dhagaj-jvala-\nddhanañjayāhutī-kṛta-pracaṇḍa-pañca-sāyake |\ndharādharendra-nandinī-kucāgra-citra-patraka-\nprakalpanaika-śilpini trilocane ratir-mama ||',
      meaning:
        'In the three-eyed Lord whose terrible forehead-fire blazes and consumes the mighty five arrows of Kama as oblation, and who is the sole artist painting decorative patterns on the bosom of Parvati — in him is my delight.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'नवीनमेघमण्डलीनिरुद्धदुर्धरस्फुरत्-\nकुहूनिशीथिनीतमः प्रबन्धबद्धकन्धरः ।\nनिलिम्पनिर्झरीधरस्तनोतु कृत्तिसिन्धुरः\nकलानिधानबन्धुरः श्रियं जगद्धुरन्धरः ॥',
      transliteration:
        'navīna-megha-maṇḍalī-niruddha-durdhara-sphurat-\nkuhū-niśīthinī-tamaḥ prabandha-baddha-kandharaḥ |\nnilimpa-nirjharī-dharas-tanotu kṛtti-sindhuraḥ\nkalā-nidhāna-bandhuraḥ śriyaṁ jagad-dhurandharaḥ ||',
      meaning:
        'His neck is dark as the dense darkness of a new-moon night veiled by fresh rain clouds. He bears the celestial river, wears the elephant hide, and is adorned by the crescent moon. May this upholder of the universe bestow prosperity.',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'प्रफुल्लनीलपङ्कजप्रपञ्चकालिमप्रभा-\nवलम्बिकण्ठकन्दलीरुचिप्रबद्धकन्धरम् ।\nस्मरच्छिदं पुरच्छिदं भवच्छिदं मखच्छिदं\nगजच्छिदान्धकच्छिदं तमन्तकच्छिदं भजे ॥',
      transliteration:
        'praphulla-nīla-paṅkaja-prapañca-kālima-prabhā-\nvalambi-kaṇṭha-kandalī-ruci-prabaddha-kandharam |\nsmarac-chidaṁ purac-chidaṁ bhavac-chidaṁ makhac-chidaṁ\ngajac-chidāndhakac-chidaṁ tam-antakac-chidaṁ bhaje ||',
      meaning:
        'I worship him whose throat shines with the dark lustre of a fully bloomed blue lotus — the destroyer of Kama, the destroyer of Tripura, the destroyer of worldly bonds, the destroyer of sacrifice, the slayer of the elephant-demon, the slayer of Andhaka, and the destroyer of Death itself.',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'अखर्वसर्वमङ्गलाकलाकदम्बमञ्जरी-\nरसप्रवाहमाधुरीविजृम्भणामधुव्रतम् ।\nस्मरान्तकं पुरान्तकं भवान्तकं मखान्तकं\nगजान्तकान्धकान्तकं तमन्तकान्तकं भजे ॥',
      transliteration:
        'akharva-sarva-maṅgalā-kalā-kadamba-mañjarī-\nrasa-pravāha-mādhurī-vijṛmbhaṇā-madhuvratam |\nsmarāntakaṁ purāntakaṁ bhavāntakaṁ makhāntakaṁ\ngajāntakāndhakāntakaṁ tam-antakāntakaṁ bhaje ||',
      meaning:
        'I worship him who is like a bee reveling in the sweet nectar flowing from the cluster of buds of the great, all-auspicious art — the ender of Kama, the ender of Tripura, the ender of worldly existence, the ender of sacrifice, the ender of the elephant-demon and Andhaka, the ender of Death.',
    },
    {
      id: 11,
      verseLabel: 'Verse 11',
      sanskrit:
        'जयत्वदभ्रविभ्रमभ्रमद्भुजङ्गमश्वस-\nद्विनिर्गमत्क्रमस्फुरत्करालभालहव्यवाट् ।\nधिमिद्धिमिद्धिमिध्वनन्मृदङ्गतुङ्गमङ्गल-\nध्वनिक्रमप्रवर्तितप्रचण्डताण्डवः शिवः ॥',
      transliteration:
        'jayatvadabhra-vibhrama-bhramad-bhujaṅgam-aśvasa-\ndvinirgamat-krama-sphurat-karāla-bhāla-havyavāṭ |\ndhimid-dhimid-dhimi-dhvanan-mṛdaṅga-tuṅga-maṅgala-\ndhvani-krama-pravartita-pracaṇḍa-tāṇḍavaḥ śivaḥ ||',
      meaning:
        'Victory to Shiva! The serpents whirl in confusion, their hissing breath fans the terrible fire on his forehead. To the auspicious, thundering rhythm of the mridanga — "dhimid dhimid dhimi" — he performs his fierce Tandava dance.',
    },
    {
      id: 12,
      verseLabel: 'Verse 12',
      sanskrit:
        'दृषद्विचित्रतल्पयोर्भुजङ्गमौक्तिकस्रजो-\nर्गरिष्ठरत्नलोष्ठयोः सुहृद्विपक्षपक्षयोः ।\nतृणारविन्दचक्षुषोः प्रजामहीमहेन्द्रयोः\nसमप्रवृत्तिकः कदा सदाशिवं भजाम्यहम् ॥',
      transliteration:
        'dṛṣad-vicitra-talpayōr-bhujaṅga-mauktika-srajō-\nrgariṣṭha-ratna-lōṣṭhayōḥ suhṛd-vipakṣa-pakṣayōḥ |\ntṛṇāravinda-cakṣuṣōḥ prajā-mahī-mahendrayōḥ\nsama-pravṛttikaḥ kadā sadāśivaṁ bhajāmyaham ||',
      meaning:
        'When shall I worship Sadashiva with equal vision — seeing no difference between a bed of stone and a decorated couch, between a serpent and a pearl necklace, between a precious gem and a clod of earth, between a friend and a foe, between a blade of grass and a lotus-eyed beauty, between a common man and a great king?',
    },
    {
      id: 13,
      verseLabel: 'Verse 13',
      sanskrit:
        'कदा निलिम्पनिर्झरीनिकुञ्जकोटरे वसन्\nविमुक्तदुर्मतिः सदा शिरःस्थमञ्जलिं वहन् ।\nविमुक्तलोललोचनो ललामभाललग्नकः\nशिवेति मन्त्रमुच्चरन् कदा सुखी भवाम्यहम् ॥',
      transliteration:
        'kadā nilimpa-nirjharī-nikuñja-kōṭare vasan\nvimukta-durmatiḥ sadā śiraḥ-stham-añjaliṁ vahan |\nvimukta-lōla-lōcanō lalāma-bhāla-lagnakaḥ\nśiveti mantram-uccaran kadā sukhī bhavāmyaham ||',
      meaning:
        'When shall I live in a cave near the banks of the Ganga, free from all evil thoughts, with folded hands always held above my head, eyes closed in meditation, the sacred mark on my forehead — chanting the mantra "Shiva" — when shall I be truly happy?',
    },
    {
      id: 14,
      verseLabel: 'Verse 14',
      sanskrit:
        'निलिम्पनाथनागरीकदम्बमौलिमल्लिका-\nनिगुम्फनिर्भरक्षरन्मधूष्णिकामनोहरः ।\nतनोतु नो मनोमुदं विनोदिनीमहर्निशं\nपरिश्रियं परं पदं तदङ्गजत्विषां चयः ॥',
      transliteration:
        'nilimpa-nātha-nāgarī-kadamba-mauli-mallikā-\nnigumpha-nirbhara-kṣaran-madhūṣṇikā-manōharaḥ |\ntanōtu nō manō-mudaṁ vinōdinī-maharniśaṁ\npariśriyaṁ paraṁ padaṁ tadaṅgaja-tviṣāṁ cayaḥ ||',
      meaning:
        'The jasmine flowers woven in the braids of the celestial women overflow with enchanting fragrance of honey. May that radiance of Shiva, the source of supreme glory and the highest state, grant us joy and delight day and night.',
    },
    {
      id: 15,
      verseLabel: 'Verse 15',
      sanskrit:
        'इमं हि नित्यमेवमुक्तमुत्तमोत्तमं स्तवं\nपठन्स्मरन्ब्रुवन्नरो विशुद्धिमेतिसन्ततम् ।\nहरे गुरौ सुभक्तिमाशु याति नान्यथा गतिं\nविमोहनं हि देहिनां सुशङ्करस्य चिन्तनम् ॥',
      transliteration:
        'imaṁ hi nityam-evam-uktam-uttamōttamaṁ stavaṁ\npaṭhan-smaran-bruvan-narō viśuddhim-eti-santatam |\nhare gurau subhaktim-āśu yāti nānyathā gatiṁ\nvimōhanaṁ hi dehināṁ su-śaṅkarasya cintanam ||',
      meaning:
        'One who reads, remembers, or recites this supreme hymn daily attains ever-lasting purity. They quickly develop deep devotion to Lord Shiva, the guru — there is no other path. Indeed, the contemplation of the auspicious Shankara is the enchantment of all embodied beings.',
    },
    {
      id: 16,
      verseLabel: 'Verse 16',
      sanskrit:
        'पूजावसानसमये दशवक्त्रगीतं\nयः शम्भुपूजनपरं पठति प्रदोषे ।\nतस्य स्थिरां रथगजेन्द्रतुरङ्गयुक्तां\nलक्ष्मीं सदैव सुमुखीं प्रददाति शम्भुः ॥',
      transliteration:
        'pūjāvasāna-samaye daśavaktra-gītaṁ\nyaḥ śambhu-pūjana-paraṁ paṭhati pradōṣe |\ntasya sthirāṁ ratha-gajendra-turaṅga-yuktāṁ\nlakṣmīṁ sadaiva sumukhīṁ pradadāti śambhuḥ ||',
      meaning:
        'Whoever recites this hymn sung by the ten-headed Ravana at the end of worship during the Pradosha hour, to him Lord Shambhu bestows enduring wealth complete with chariots, mighty elephants, and horses — and the ever-gracious Goddess Lakshmi.',
    },
  ],
};

const annapoornaAshtakam: Stotra = {
  id: 'annapoorna-ashtakam',
  title: 'Annapoorna Ashtakam',
  subtitle: 'अन्नपूर्णाष्टकम्',
  deity: 'Annapurna',
  description:
    'Eight verses by Adi Shankaracharya praising Goddess Annapurna, the divine mother of nourishment who presides over the sacred city of Kashi, seeking her grace for both sustenance and spiritual wisdom.',
  benefits: [
    'Invokes the blessings of Goddess Annapurna for sustenance and abundance',
    'Cultivates gratitude and devotion to the divine mother',
    'Seeks knowledge and detachment through divine grace',
  ],
  estimatedMinutes: 3,
  icon: 'annapoorna-ashtakam',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'नित्यानन्दकरी वराभयकरी सौन्दर्यरत्नाकरी\nनिर्धूताखिलघोरपावनकरी प्रत्यक्षमाहेश्वरी ।\nप्रालेयाचलवंशपावनकरी काशीपुराधीश्वरी\nभिक्षां देहि कृपावलम्बनकरी मातान्नपूर्णेश्वरी ॥',
      transliteration:
        'nityānandakarī varābhayakarī saundaryaratnākarī\nnirdhūtākhilaghorapāvanakarī pratyakṣamāheśvarī |\nprāleyācalavaṁśapāvanakarī kāśīpurādhīśvarī\nbhikṣāṁ dehi kṛpāvalambanakari mātānnapūrṇeśvarī ||',
      meaning:
        'O Mother Annapurna, giver of eternal bliss, bestower of boons and fearlessness, ocean of beauty, purifier of all that is terrible, the visible Maheshvari, sanctifier of the Himalayan dynasty, sovereign of the city of Kashi — grant me alms, O compassionate mother!',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'नानारत्नविचित्रभूषणकरी हेमाम्बराडम्बरी\nमुक्ताहारविलम्बमानविलसद्वक्षोजकुम्भान्तरी ।\nकाश्मीरागरुवासिताङ्गरुचिरे काशीपुराधीश्वरी\nभिक्षां देहि कृपावलम्बनकरी मातान्नपूर्णेश्वरी ॥',
      transliteration:
        'nānāratnavicitrabhūṣaṇakarī hemāmbarāḍambarī\nmuktāhāravilambamānavilasadvakṣojakumbhāntarī |\nkāśmīrāgaruvāsitāṅgarucire kāśīpurādhīśvarī\nbhikṣāṁ dehi kṛpāvalambanakari mātānnapūrṇeśvarī ||',
      meaning:
        'Adorned with wondrous ornaments of various gems, resplendent in golden garments, her bosom graced by a swaying pearl necklace, her body fragrant with saffron and agaru — O sovereign of Kashi, grant me alms, O compassionate Mother Annapurna!',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'योगानन्दकरी रिपुक्षयकरी धर्मार्थनिष्ठाकरी\nचन्द्रार्कानलभासमानलहरी त्रैलोक्यरक्षाकरी ।\nसर्वैश्वर्यसमस्तवाञ्छितकरी काशीपुराधीश्वरी\nभिक्षां देहि कृपावलम्बनकरी मातान्नपूर्णेश्वरी ॥',
      transliteration:
        'yogānandakarī ripukṣayakarī dharmārthaniṣṭhākarī\ncandrārkānalabhāsamānalaharī trailokyarakṣākarī |\nsarvaiśvaryasamastavāñchitakarī kāśīpurādhīśvarī\nbhikṣāṁ dehi kṛpāvalambanakari mātānnapūrṇeśvarī ||',
      meaning:
        'Bestower of yogic bliss, destroyer of enemies, establisher of righteous purpose, radiant as waves of moonlight, sunlight, and fire, protector of the three worlds, fulfiller of all desires and wealth — O sovereign of Kashi, grant me alms, O compassionate Mother Annapurna!',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'कैलासाचलकन्दरालयकरी गौरी उमा शङ्करी\nकौमारी निगमार्थगोचरकरी ओङ्कारबीजाक्षरी ।\nमोक्षद्वारकपाटपाटनकरी काशीपुराधीश्वरी\nभिक्षां देहि कृपावलम्बनकरी मातान्नपूर्णेश्वरी ॥',
      transliteration:
        'kailāsācalakandarālayakarī gaurī umā śaṅkarī\nkaumārī nigamārthagōcarakarī oṅkārabījākṣarī |\nmōkṣadvārakapāṭapāṭanakarī kāśīpurādhīśvarī\nbhikṣāṁ dehi kṛpāvalambanakari mātānnapūrṇeśvarī ||',
      meaning:
        'She who dwells in the caves of Mount Kailasa — Gauri, Uma, Shankari, Kumari — revealer of the meaning of the Vedas, the seed-syllable Om, opener of the doors of liberation — O sovereign of Kashi, grant me alms, O compassionate Mother Annapurna!',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'दृश्यादृश्यविभूतिवाहनकरी ब्रह्माण्डभाण्डोदरी\nलीलानाटकसूत्रभेदनकरी विज्ञानदीपाङ्कुरी ।\nश्रीविश्वेशमनःप्रसादनकरी काशीपुराधीश्वरी\nभिक्षां देहि कृपावलम्बनकरी मातान्नपूर्णेश्वरी ॥',
      transliteration:
        'dṛśyādṛśyavibhūtivāhanakarī brahmāṇḍabhāṇḍōdarī\nlīlānāṭakasūtrabhedanakarī vijñānadīpāṅkurī |\nśrīviśveśamanaḥprasādanakarī kāśīpurādhīśvarī\nbhikṣāṁ dehi kṛpāvalambanakari mātānnapūrṇeśvarī ||',
      meaning:
        'Bearer of all visible and invisible glories, containing the entire universe within her being, director of the play of cosmic drama, the sprouting lamp of supreme knowledge, the delight of Lord Vishweshwara\'s heart — O sovereign of Kashi, grant me alms, O compassionate Mother Annapurna!',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'उर्वीसर्वजनेश्वरी भगवती मातान्नपूर्णेश्वरी\nवेणीनीलसमानकुन्तलधरी नित्यान्नदानेश्वरी ।\nसर्वानन्दकरी सदा शुभकरी काशीपुराधीश्वरी\nभिक्षां देहि कृपावलम्बनकरी मातान्नपूर्णेश्वरी ॥',
      transliteration:
        'urvīsarvajaneśvarī bhagavatī mātānnapūrṇeśvarī\nveṇīnīlasamānakuntaladhārī nityānnadāneśvarī |\nsarvānandakarī sadā śubhakarī kāśīpurādhīśvarī\nbhikṣāṁ dehi kṛpāvalambanakari mātānnapūrṇeśvarī ||',
      meaning:
        'Sovereign of all beings on earth, the blessed Mother Annapurna, she whose dark braided hair is like a blue serpent, eternal goddess of food-giving, bestower of all bliss, ever-auspicious — O sovereign of Kashi, grant me alms, O compassionate Mother Annapurna!',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'आदिक्षान्तसमस्तवर्णनकरी शम्भोस्त्रिभावाकरी\nकाश्मीरा त्रिपुरेश्वरी त्रिलहरी नित्याङ्कुरा शर्वरी ।\nकामाकाङ्क्षकरी जनोदयकरी काशीपुराधीश्वरी\nभिक्षां देहि कृपावलम्बनकरी मातान्नपूर्णेश्वरी ॥',
      transliteration:
        'ādikṣāntasamastavarṇanakarī śambhōstribhāvākarī\nkāśmīrā tripureśvarī trilaharī nityāṅkurā śarvarī |\nkāmākāṅkṣakarī janōdayakarī kāśīpurādhīśvarī\nbhikṣāṁ dehi kṛpāvalambanakari mātānnapūrṇeśvarī ||',
      meaning:
        'She who encompasses all letters from A to Ksha, who manifests the three aspects of Shambhu, who is saffron-hued Tripureshvari, the triple wave, the eternal sprout of the night — fulfiller of desires, uplifter of beings — O sovereign of Kashi, grant me alms, O compassionate Mother Annapurna!',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'देवी सर्वविचित्ररत्नरचिता दाक्षायणी सुन्दरी\nवामे स्वादुपयोधरा प्रियकरी सौभाग्यमाहेश्वरी ।\nभक्ताभीष्टकरी सदा शुभकरी काशीपुराधीश्वरी\nभिक्षां देहि कृपावलम्बनकरी मातान्नपूर्णेश्वरी ॥',
      transliteration:
        'devī sarvavicitraratnaracitā dākṣāyaṇī sundarī\nvāme svādupayōdharā priyakarī saubhāgyamāheśvarī |\nbhaktābhīṣṭakarī sadā śubhakarī kāśīpurādhīśvarī\nbhikṣāṁ dehi kṛpāvalambanakari mātānnapūrṇeśvarī ||',
      meaning:
        'The Goddess adorned with wondrous gems of every kind, the beautiful Dakshayani, at whose left side flows sweet nourishment, bestower of love, the auspicious Maheshvari, fulfiller of devotees\' wishes, ever-auspicious — O sovereign of Kashi, grant me alms, O compassionate Mother Annapurna!',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'अन्नपूर्णे सदापूर्णे शङ्करप्राणवल्लभे ।\nज्ञानवैराग्यसिद्ध्यर्थं भिक्षां देहि च पार्वति ॥\nमाता च पार्वती देवी पिता देवो महेश्वरः ।\nबान्धवाः शिवभक्ताश्च स्वदेशो भुवनत्रयम् ॥',
      transliteration:
        'annapūrṇe sadāpūrṇe śaṅkaraprāṇavallabhe |\njñānavairāgyasiddhyarthaṁ bhikṣāṁ dehi ca pārvati ||\nmātā ca pārvatī devī pitā devō maheśvaraḥ |\nbāndhavāḥ śivabhaktāśca svadeśō bhuvanatrayam ||',
      meaning:
        'O Annapurna, ever-complete, beloved of Shankara\'s life-breath — grant me the alms of knowledge and detachment, O Parvati! My mother is Goddess Parvati, my father is Lord Maheshvara, my kinsmen are the devotees of Shiva, and my homeland is the three worlds.',
    },
  ],
};

const kalabhairavaAshtakam: Stotra = {
  id: 'kalabhairava-ashtakam',
  title: 'Kalabhairava Ashtakam',
  subtitle: 'कालभैरवाष्टकम्',
  deity: 'Kalabhairava',
  description:
    'Eight verses by Adi Shankaracharya praising Lord Kalabhairava, the fierce manifestation of Shiva who is the lord of time and the presiding deity of Kashi.',
  benefits: [
    'Invokes the protection of Lord Kalabhairava, destroyer of fear',
    'Bestows liberation and freedom from the cycle of time',
    'Brings courage, discipline, and spiritual awakening',
  ],
  estimatedMinutes: 3,
  icon: 'kalabhairava-ashtakam',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं\nव्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम् ।\nनारदादियोगिवृन्दवन्दितं दिगम्बरं\nकाशिकापुराधिनाथकालभैरवं भजे ॥',
      transliteration:
        'devarāja-sevyamāna-pāvanāṅghri-paṅkajaṁ\nvyāla-yajña-sūtram-indu-śekharaṁ kṛpākaram |\nnāradādi-yogi-vṛnda-vanditaṁ digambaraṁ\nkāśikā-purādhi-nātha-kālabhairavaṁ bhaje ||',
      meaning:
        'I worship Kalabhairava, the lord of Kashi, whose sacred lotus feet are served by Indra, who wears serpents as his sacred thread and the moon on his head, who is compassionate, venerated by Narada and hosts of yogis, and who is sky-clad.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'भानुकोटिभास्वरं भवाब्धितारकं परं\nनीलकण्ठमीप्सितार्थदायकं त्रिलोचनम् ।\nकालकालमम्बुजाक्षमक्षशूलमक्षरं\nकाशिकापुराधिनाथकालभैरवं भजे ॥',
      transliteration:
        'bhānu-koṭi-bhāsvaraṁ bhavābdhi-tārakaṁ paraṁ\nnīlakaṇṭham-īpsitārtha-dāyakaṁ trilocanam |\nkāla-kālam-ambujākṣam-akṣa-śūlam-akṣaraṁ\nkāśikā-purādhi-nātha-kālabhairavaṁ bhaje ||',
      meaning:
        'I worship Kalabhairava, the lord of Kashi, who shines like a million suns, who liberates from the ocean of worldly existence, the supreme one, blue-throated, fulfiller of desires, three-eyed, the death of death itself, lotus-eyed, bearing a rosary and trident, imperishable.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'शूलटङ्कपाशदण्डपाणिमादिकारणं\nश्यामकायमादिदेवमक्षरं निरामयम् ।\nभीमविक्रमं प्रभुं विचित्रताण्डवप्रियं\nकाशिकापुराधिनाथकालभैरवं भजे ॥',
      transliteration:
        'śūla-ṭaṅka-pāśa-daṇḍa-pāṇim-ādi-kāraṇaṁ\nśyāma-kāyam-ādi-devam-akṣaraṁ nirāmayam |\nbhīma-vikramaṁ prabhuṁ vicitra-tāṇḍava-priyaṁ\nkāśikā-purādhi-nātha-kālabhairavaṁ bhaje ||',
      meaning:
        'I worship Kalabhairava, the lord of Kashi, who holds the trident, axe, noose, and staff in his hands, the primordial cause, dark-bodied, the first deity, imperishable, free from disease, of fearsome valour, the lord who delights in the wondrous Tandava dance.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'भुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहं\nभक्तवत्सलं स्थिरं समस्तलोकविग्रहम् ।\nविनिक्वणन्मनोज्ञहेमकिङ्किणीलसत्कटिं\nकाशिकापुराधिनाथकालभैरवं भजे ॥',
      transliteration:
        'bhukti-mukti-dāyakaṁ praśasta-cāru-vigrahaṁ\nbhakta-vatsalaṁ sthiraṁ samasta-loka-vigraham |\nvinikvanan-manojña-hema-kiṅkiṇī-lasat-kaṭiṁ\nkāśikā-purādhi-nātha-kālabhairavaṁ bhaje ||',
      meaning:
        'I worship Kalabhairava, the lord of Kashi, bestower of worldly enjoyment and liberation, of glorious and beautiful form, tender towards devotees, steady, the embodiment of all worlds, whose waist shines with tinkling golden bells that produce enchanting sounds.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'धर्मसेतुपालकं त्वधर्ममार्गनाशकं\nकर्मपाशमोचकं सुशर्मदायकं विभुम् ।\nस्वर्णवर्णशेषपाशशोभिताङ्गमण्डलं\nकाशिकापुराधिनाथकालभैरवं भजे ॥',
      transliteration:
        'dharma-setu-pālakaṁ tvadharma-mārga-nāśakaṁ\nkarma-pāśa-mocakaṁ suśarma-dāyakaṁ vibhum |\nsvarṇa-varṇa-śeṣa-pāśa-śobhitāṅga-maṇḍalaṁ\nkāśikā-purādhi-nātha-kālabhairavaṁ bhaje ||',
      meaning:
        'I worship Kalabhairava, the lord of Kashi, the guardian of the bridge of dharma, destroyer of the path of adharma, liberator from the noose of karma, bestower of great happiness, the all-pervading one whose body is adorned with a golden serpent-noose.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'रत्नपादुकाप्रभाभिरामपादयुग्मकं\nनित्यमद्वितीयमिष्टदैवतं निरञ्जनम् ।\nमृत्युदर्पनाशनं करालदंष्ट्रभूषणं\nकाशिकापुराधिनाथकालभैरवं भजे ॥',
      transliteration:
        'ratna-pādukā-prabhābhirāma-pāda-yugmakaṁ\nnityam-advitīyam-iṣṭa-daivataṁ nirañjanam |\nmṛtyu-darpa-nāśanaṁ karāla-daṁṣṭra-bhūṣaṇaṁ\nkāśikā-purādhi-nātha-kālabhairavaṁ bhaje ||',
      meaning:
        'I worship Kalabhairava, the lord of Kashi, whose pair of feet shine beautifully with jeweled sandals, the eternal one without a second, the chosen deity, the stainless one, the destroyer of the pride of death, adorned with terrible fangs.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'अट्टहासभिन्नपद्मजाण्डकोशसन्ततिं\nदृष्टिपातनष्टपापजालमुग्रशासनम् ।\nअष्टसिद्धिदायकं कपालमालिकाधरं\nकाशिकापुराधिनाथकालभैरवं भजे ॥',
      transliteration:
        'aṭṭahāsa-bhinna-padmajāṇḍa-kośa-santatiṁ\ndṛṣṭi-pāta-naṣṭa-pāpa-jālam-ugra-śāsanam |\naṣṭa-siddhi-dāyakaṁ kapāla-mālikā-dharaṁ\nkāśikā-purādhi-nātha-kālabhairavaṁ bhaje ||',
      meaning:
        'I worship Kalabhairava, the lord of Kashi, whose thunderous laughter shatters the cosmic egg of Brahma, whose mere glance destroys the web of sins, who enforces fierce discipline, bestower of the eight supernatural powers, wearer of a garland of skulls.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'भूतसङ्घनायकं विशालकीर्तिदायकं\nकाशिवासलोकपुण्यपापशोधकं विभुम् ।\nनीतिमार्गकोविदं पुरातनं जगत्पतिं\nकाशिकापुराधिनाथकालभैरवं भजे ॥',
      transliteration:
        'bhūta-saṅgha-nāyakaṁ viśāla-kīrti-dāyakaṁ\nkāśi-vāsa-loka-puṇya-pāpa-śodhakaṁ vibhum |\nnīti-mārga-kovidaṁ purātanaṁ jagat-patiṁ\nkāśikā-purādhi-nātha-kālabhairavaṁ bhaje ||',
      meaning:
        'I worship Kalabhairava, the lord of Kashi, the leader of the host of spirits, bestower of wide fame, purifier of the merits and sins of those dwelling in Kashi, the all-pervading one, expert in the path of righteousness, the ancient lord of the universe.',
    },
  ],
};

const nirvanaShatakam: Stotra = {
  id: 'nirvana-shatakam',
  title: 'Nirvana Shatakam',
  subtitle: 'निर्वाणषट्कम्',
  deity: 'Shiva',
  description:
    'Six profound verses by Adi Shankaracharya declaring the nature of the Self as pure consciousness-bliss, negating all limited identifications. Also known as Atma Shatakam.',
  benefits: [
    'Reveals the true nature of the Self beyond body, mind, and ego',
    'Cultivates Advaitic self-inquiry and detachment',
    'Brings deep inner peace through the realization "I am Shiva"',
  ],
  estimatedMinutes: 2,
  icon: 'nirvana-shatakam',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'मनोबुद्ध्यहङ्कारचित्तानि नाहं\nन च श्रोत्रजिह्वे न च घ्राणनेत्रे ।\nन च व्योमभूमिर्न तेजो न वायुः\nचिदानन्दरूपः शिवोऽहं शिवोऽहम् ॥',
      transliteration:
        'mano-buddhyahaṅkāra-cittāni nāhaṁ\nna ca śrotra-jihve na ca ghrāṇa-netre |\nna ca vyoma-bhūmir-na tejo na vāyuḥ\ncidānanda-rūpaḥ śivo\'haṁ śivo\'ham ||',
      meaning:
        'I am not the mind, intellect, ego, or memory. I am not the ears or tongue, nor the nose or eyes. I am not the sky, earth, fire, or air. I am the form of consciousness-bliss — I am Shiva, I am Shiva.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'न च प्राणसंज्ञो न वै पञ्चवायुः\nन वा सप्तधातुर्न वा पञ्चकोशः ।\nन वाक्पाणिपादं न चोपस्थपायु\nचिदानन्दरूपः शिवोऽहं शिवोऽहम् ॥',
      transliteration:
        'na ca prāṇa-saṁjño na vai pañca-vāyuḥ\nna vā sapta-dhātur-na vā pañca-kośaḥ |\nna vāk-pāṇi-pādaṁ na copastha-pāyu\ncidānanda-rūpaḥ śivo\'haṁ śivo\'ham ||',
      meaning:
        'I am not the vital breath, nor the five airs. I am not the seven bodily tissues, nor the five sheaths. I am not speech, hands, or feet, nor the organs of excretion or procreation. I am the form of consciousness-bliss — I am Shiva, I am Shiva.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'न मे द्वेषरागौ न मे लोभमोहौ\nमदो नैव मे नैव मात्सर्यभावः ।\nन धर्मो न चार्थो न कामो न मोक्षः\nचिदानन्दरूपः शिवोऽहं शिवोऽहम् ॥',
      transliteration:
        'na me dveṣa-rāgau na me lobha-mohau\nmado naiva me naiva mātsarya-bhāvaḥ |\nna dharmo na cārtho na kāmo na mokṣaḥ\ncidānanda-rūpaḥ śivo\'haṁ śivo\'ham ||',
      meaning:
        'I have neither aversion nor attachment, neither greed nor delusion. I have no pride, no envy. I have no dharma, no wealth, no desire, no liberation. I am the form of consciousness-bliss — I am Shiva, I am Shiva.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'न पुण्यं न पापं न सौख्यं न दुःखं\nन मन्त्रो न तीर्थं न वेदा न यज्ञाः ।\nअहं भोजनं नैव भोज्यं न भोक्ता\nचिदानन्दरूपः शिवोऽहं शिवोऽहम् ॥',
      transliteration:
        'na puṇyaṁ na pāpaṁ na saukhyaṁ na duḥkhaṁ\nna mantro na tīrthaṁ na vedā na yajñāḥ |\nahaṁ bhojanaṁ naiva bhojyaṁ na bhoktā\ncidānanda-rūpaḥ śivo\'haṁ śivo\'ham ||',
      meaning:
        'I have no merit or sin, no pleasure or pain. I am not mantras, pilgrimages, Vedas, or rituals. I am neither the food, nor the act of eating, nor the eater. I am the form of consciousness-bliss — I am Shiva, I am Shiva.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'न मे मृत्युशङ्का न मे जातिभेदः\nपिता नैव मे नैव माता न जन्म ।\nन बन्धुर्न मित्रं गुरुर्नैव शिष्यः\nचिदानन्दरूपः शिवोऽहं शिवोऽहम् ॥',
      transliteration:
        'na me mṛtyu-śaṅkā na me jāti-bhedaḥ\npitā naiva me naiva mātā na janma |\nna bandhur-na mitraṁ gurur-naiva śiṣyaḥ\ncidānanda-rūpaḥ śivo\'haṁ śivo\'ham ||',
      meaning:
        'I have no fear of death, no distinction of caste. I have no father, no mother, no birth. I have no relative, no friend, no guru, no disciple. I am the form of consciousness-bliss — I am Shiva, I am Shiva.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'अहं निर्विकल्पो निराकाररूपो\nविभुत्वाच्च सर्वत्र सर्वेन्द्रियाणाम् ।\nन चासङ्गतं नैव मुक्तिर्न मेयः\nचिदानन्दरूपः शिवोऽहं शिवोऽहम् ॥',
      transliteration:
        'ahaṁ nirvikalpo nirākāra-rūpo\nvibhutvācca sarvatra sarvendriyāṇām |\nna cāsaṅgataṁ naiva muktir-na meyaḥ\ncidānanda-rūpaḥ śivo\'haṁ śivo\'ham ||',
      meaning:
        'I am without thought-constructs, without form. Through my all-pervading nature, I am everywhere and in all senses. I am neither attached nor liberated, nor can I be measured. I am the form of consciousness-bliss — I am Shiva, I am Shiva.',
    },
  ],
};

const subramanyaAshtakam: Stotra = {
  id: 'subramanya-ashtakam',
  title: 'Subramanya Ashtakam',
  subtitle: 'सुब्रह्मण्याष्टकम्',
  deity: 'Subramanya',
  description:
    'Eight verses in praise of Lord Subramanya (Kartikeya/Murugan), the divine son of Shiva and Parvati. Attributed to Adi Shankaracharya, this hymn extols the glory, beauty, and grace of the six-faced deity who commands the celestial armies.',
  benefits: [
    'Removes obstacles and grants courage and confidence',
    'Bestows protection from negativity and enemies',
    'Blesses devotees with wisdom, health, and spiritual progress',
  ],
  estimatedMinutes: 3,
  icon: 'subramanya-ashtakam',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'हे स्वामिनाथ करुणाकर दीनबन्धो\nश्रीपार्वतीशमुखपङ्कजपद्मबन्धो ।\nश्रीशादिदेवगणपूजितपादपद्म\nवल्लीसनाथ मम देहि करावलम्बम् ॥',
      transliteration:
        'he svāminātha karuṇākara dīnabandho\nśrī-pārvatīśa-mukha-paṅkaja-padma-bandho |\nśrīśādi-deva-gaṇa-pūjita-pāda-padma\nvallī-sanātha mama dehi karāvalambam ||',
      meaning:
        'O Lord Swaminatha, ocean of compassion, friend of the destitute! O one born from the lotus face of Lord Shiva and Parvati! O one whose lotus feet are worshipped by Vishnu and all gods! O Lord of Valli, grant me the support of Your hand.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'देवादिदेवनुत देवगणाधिनाथ\nदेवेन्द्रवन्द्य मृदुपङ्कजमञ्जुपाद ।\nदेवर्षिनारदमुनीन्द्रसुगीतकीर्ते\nवल्लीसनाथ मम देहि करावलम्बम् ॥',
      transliteration:
        'devādi-deva-nuta deva-gaṇādhinātha\ndevendra-vandya mṛdu-paṅkaja-mañju-pāda |\ndevarṣi-nārada-munīndra-sugīta-kīrte\nvallī-sanātha mama dehi karāvalambam ||',
      meaning:
        'O Lord praised by the god of gods, chief of the celestial hosts! O one whose soft lotus feet are revered by Indra! O one whose glory is sung by the divine sage Narada and great munis! O Lord of Valli, grant me the support of Your hand.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'नित्यान्नदान निरताखिलरोगहारिन्\nतस्मात्प्रदान परिपूरितभक्तकाम ।\nश्रुत्यागमप्रणववाच्यनिजस्वरूप\nवल्लीसनाथ मम देहि करावलम्बम् ॥',
      transliteration:
        'nityānnadāna niratākhila-roga-hārin\ntasmātpradāna paripūrita-bhakta-kāma |\nśrutyāgama-praṇava-vācya-nija-svarūpa\nvallī-sanātha mama dehi karāvalambam ||',
      meaning:
        'O one ever engaged in giving food, destroyer of all diseases! O one who fulfills the desires of devotees through Your gifts! O one whose true nature is expressed by the Pranava of the Vedas and Agamas! O Lord of Valli, grant me the support of Your hand.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'क्रौञ्चासुरेन्द्र परिखण्डन शक्तिशूल\nपाशाङ्कुशध्वज कृपाकर कामदायिन् ।\nदेवादिदेवनुत देवगणोत्तमश्रीर्-\nवल्लीसनाथ मम देहि करावलम्बम् ॥',
      transliteration:
        'krauñcāsurendra parikhaṇḍana śakti-śūla-\npāśāṅkuśa-dhvaja kṛpākara kāmadāyin |\ndevādi-deva-nuta deva-gaṇottama-śrīr-\nvallī-sanātha mama dehi karāvalambam ||',
      meaning:
        'O destroyer of the demon Krauncha, wielder of the Shakti lance, trident, noose, goad, and flag! O compassionate one, fulfiller of desires! O glorious one praised by gods and foremost among divine hosts! O Lord of Valli, grant me the support of Your hand.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'देवादिदेव रथमण्डल मध्यवेद्य\nदेवेन्द्रपीठनगरं दृढचापहस्त ।\nशूरं निहत्य सुरकोटिभिरीड्यमान\nवल्लीसनाथ मम देहि करावलम्बम् ॥',
      transliteration:
        'devādi-deva ratha-maṇḍala madhya-vedya\ndevendra-pīṭha-nagaraṁ dṛḍha-cāpa-hasta |\nśūraṁ nihatya sura-koṭibhir-īḍyamāna\nvallī-sanātha mama dehi karāvalambam ||',
      meaning:
        'O god of gods, known in the midst of the chariot circle! O one who holds a firm bow, presiding over the city of Indra\'s throne! O one who slew the demon Sura and is praised by crores of gods! O Lord of Valli, grant me the support of Your hand.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'हीराद्रिरत्नमणियुक्तकिरीटहार-\nकेयूरकुण्डललसत्कवचाभिरामम् ।\nहे वीर तारकजयामरबृन्दवन्द्य\nवल्लीसनाथ मम देहि करावलम्बम् ॥',
      transliteration:
        'hīrādri-ratna-maṇi-yukta-kirīṭa-hāra-\nkeyūra-kuṇḍala-lasat-kavacābhirāmam |\nhe vīra tāraka-jayāmara-bṛnda-vandya\nvallī-sanātha mama dehi karāvalambam ||',
      meaning:
        'O one resplendent with crown, necklace, armlets, earrings, and shining armor set with diamonds and precious gems! O valiant hero who conquered the demon Taraka, worshipped by hosts of immortal gods! O Lord of Valli, grant me the support of Your hand.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'पञ्चाक्षरादिमनुमन्त्रितगाङ्गतोयैः\nपञ्चामृतैः प्रमुदितेन्द्रमुखैर्मुनीन्द्रैः ।\nपट्टाभिषिक्तहरियुक्तपरासनाथ\nवल्लीसनाथ मम देहि करावलम्बम् ॥',
      transliteration:
        'pañcākṣarādi-manu-mantrita-gāṅga-toyaiḥ\npañcāmṛtaiḥ pramudita-indra-mukhair-munīndraiḥ |\npaṭṭābhiṣikta-hari-yukta-parāsa-nātha\nvallī-sanātha mama dehi karāvalambam ||',
      meaning:
        'O one ceremonially anointed by jubilant Indra and foremost sages with Ganga water sanctified by the Panchakshara and other mantras, and bathed with the five nectars! O supreme lord united with Hari! O Lord of Valli, grant me the support of Your hand.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'श्रीकार्तिकेय करुणामृतपूर्णदृष्ट्या\nकामादिरोगकलुषीकृतदुष्टचित्तम् ।\nसिक्त्वा तु मामवकलाधरकान्तिकान्त्या\nवल्लीसनाथ मम देहि करावलम्बम् ॥',
      transliteration:
        'śrī-kārtikēya karuṇāmṛta-pūrṇa-dṛṣṭyā\nkāmādi-roga-kaluṣī-kṛta-duṣṭa-cittam |\nsiktvā tu mām-ava-kalādhara-kānti-kāntyā\nvallī-sanātha mama dehi karāvalambam ||',
      meaning:
        'O Sri Kartikeya, with Your glance full of the nectar of compassion, drench and purify my wicked mind defiled by the diseases of lust and other passions! O one who shines with the radiance of the moon! O Lord of Valli, grant me the support of Your hand.',
    },
  ],
};

const sudarshanaAshtakam: Stotra = {
  id: 'sudarshana-ashtakam',
  title: 'Sudarshana Ashtakam',
  subtitle: 'सुदर्शनाष्टकम्',
  deity: 'Vishnu',
  description:
    'Eight verses by Vedanta Desika (Swami Desikan) glorifying Lord Sudarshana, the divine discus of Lord Vishnu. Each verse builds with rhythmic compound words and culminates in the victorious refrain "Jaya Jaya Sri Sudarshana."',
  benefits: [
    'Invokes the protective power of Lord Sudarshana against all obstacles',
    'Removes negative energies and grants divine protection',
    'Bestows courage, clarity, and spiritual victory',
  ],
  estimatedMinutes: 3,
  icon: 'sudarshana-ashtakam',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'प्रतिभटश्रेणिभीषण वरगुणस्तोमभूषण\nजनिभयस्थानतारण जगदवस्थानकारण ।\nनिखिलदुष्कर्मकर्शन निगमसद्धर्मदर्शन\nजय जय श्रीसुदर्शन जय जय श्रीसुदर्शन ॥',
      transliteration:
        'pratibhaṭa-śreṇi-bhīṣaṇa vara-guṇa-stoma-bhūṣaṇa\njani-bhaya-sthāna-tāraṇa jagad-avasthāna-kāraṇa |\nnikhila-duṣkarma-karśana nigama-saddharma-darśana\njaya jaya śrī-sudarśana jaya jaya śrī-sudarśana ||',
      meaning:
        'O Lord Sudarshana, You terrify the ranks of adversaries and are adorned with a multitude of noble qualities. You rescue beings from the fear of birth and are the cause that sustains the universe. You destroy all evil deeds and reveal the true dharma of the Vedas. Victory, victory to You, O Sri Sudarshana!',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'शुभजगद्रूपमण्डन सुरगणत्रासखण्डन\nशतमखब्रह्मवन्दित शतपथब्रह्मनन्दित ।\nप्रथितविद्वत्सपक्षित भजदहिर्बुध्न्यलक्षित\nजय जय श्रीसुदर्शन जय जय श्रीसुदर्शन ॥',
      transliteration:
        'śubha-jagad-rūpa-maṇḍana sura-gaṇa-trāsa-khaṇḍana\nśatamakha-brahma-vandita śatapatha-brahma-nandita |\nprathita-vidvat-sapakṣita bhajad-ahirbudhnya-lakṣita\njaya jaya śrī-sudarśana jaya jaya śrī-sudarśana ||',
      meaning:
        'You adorn the auspicious world with beauty and shatter the fears of the celestials. You are worshipped by Indra and Brahma, and celebrated in the Shatapataha Brahmana. You side with the learned and are perceived by the devoted Ahirbudhnya. Victory, victory to You, O Sri Sudarshana!',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'निजपदप्रीतसद्गण निरुपधिस्फीतषड्गुण\nनिगमनिर्व्यूढवैभव निजपरव्यूहवैभव ।\nहरिहयद्वेषिदारण हरपुरप्लोषकारण\nजय जय श्रीसुदर्शन जय जय श्रीसुदर्शन ॥',
      transliteration:
        'nija-pada-prīta-sad-gaṇa nirupadhi-sphīta-ṣaḍ-guṇa\nnigama-nirvyūḍha-vaibhava nija-para-vyūha-vaibhava |\nhari-haya-dveṣi-dāraṇa hara-pura-ploṣa-kāraṇa\njaya jaya śrī-sudarśana jaya jaya śrī-sudarśana ||',
      meaning:
        'The virtuous who love Your feet are delighted; You possess the six divine qualities unconditionally. Your glory is established by the Vedas, and You shine in the supreme Vyuha emanation. You destroyed the enemy of Indra and caused the burning of Tripura. Victory, victory to You, O Sri Sudarshana!',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'स्फुटतटिज्जालपिञ्जर प्रथुतरज्वालपञ्जर\nपरिगतप्रत्नविग्रह परिमितप्रज्ञदुर्ग्रह ।\nप्रहरणग्राममण्डित परिजनत्राणपण्डित\nजय जय श्रीसुदर्शन जय जय श्रीसुदर्शन ॥',
      transliteration:
        'sphuṭa-taṭij-jāla-piñjara prathu-tara-jvāla-pañjara\nparigata-pratna-vigraha parimita-prajña-durgraha |\npraharaṇa-grāma-maṇḍita parijana-trāṇa-paṇḍita\njaya jaya śrī-sudarśana jaya jaya śrī-sudarśana ||',
      meaning:
        'You blaze golden with a web of lightning and are caged in towering flames. You assume an ancient transcendent form, incomprehensible to finite intellects. You are adorned with an arsenal of weapons and are expert in protecting Your devotees. Victory, victory to You, O Sri Sudarshana!',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'भुवननेत्रस्त्रयीमय सवनतेजस्त्रयीमय\nनिरवधिस्वादुचिन्मय निखिलशक्ते जगन्मय ।\nअमितविश्वक्रियामय शमितविश्वग्भयामय\nजय जय श्रीसुदर्शन जय जय श्रीसुदर्शन ॥',
      transliteration:
        'bhuvana-netra-strayī-maya savana-tejas-trayī-maya\nniravadhi-svādu-cin-maya nikhila-śakte jagan-maya |\namita-viśva-kriyā-maya śamita-viśvag-bhayā-maya\njaya jaya śrī-sudarśana jaya jaya śrī-sudarśana ||',
      meaning:
        'You are the eye of the world, embodiment of the three Vedas, and radiant with sacrificial splendor. You are limitless, sweet consciousness itself, all-powerful and pervading the universe. You are the infinite cosmic activity and the pacifier of all worldly fears. Victory, victory to You, O Sri Sudarshana!',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'महितसम्पत्सदक्षर विहितसम्पत्षडक्षर\nषडरचक्रप्रतिष्ठित सकलतत्त्वप्रतिष्ठित ।\nविविधसङ्कल्पकल्पक विबुधसङ्कल्पकल्पक\nजय जय श्रीसुदर्शन जय जय श्रीसुदर्शन ॥',
      transliteration:
        'mahita-sampat-sad-akṣara vihita-sampat-ṣaḍ-akṣara\nṣaḍ-ara-cakra-pratiṣṭhita sakala-tattva-pratiṣṭhita |\nvividha-saṅkalpa-kalpaka vibudha-saṅkalpa-kalpaka\njaya jaya śrī-sudarśana jaya jaya śrī-sudarśana ||',
      meaning:
        'You are the imperishable glory of great splendor, expressed in the sacred six-syllabled mantra. You are established in the six-spoked wheel and grounded in all cosmic principles. You fulfill diverse intentions and grant the wishes of the wise. Victory, victory to You, O Sri Sudarshana!',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'प्रतिमुखालीढबन्धुर प्रथुमहाहेतिदन्तुर\nविकटमायाबहिष्कृत विविधमालापरिष्कृत ।\nस्थिरमहायन्त्रतन्त्रित दृढदयातन्त्रयन्त्रित\nजय जय श्रीसुदर्शन जय जय श्रीसुदर्शन ॥',
      transliteration:
        'pratimukha-ālīḍha-bandhura prathu-mahā-heti-dantura\nvikaṭa-māyā-bahiṣkṛta vividha-mālā-pariṣkṛta |\nsthira-mahā-yantra-tantrita dṛḍha-dayā-tantra-yantrita\njaya jaya śrī-sudarśana jaya jaya śrī-sudarśana ||',
      meaning:
        'You stand graceful in the warrior stance, fearsome with a mighty array of great weapons. You banish terrible illusions and are adorned with diverse garlands. You preside over the great steadfast yantra and are governed by the firm mechanism of compassion. Victory, victory to You, O Sri Sudarshana!',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'दनुजविस्तारकर्तन जनितमिस्राविकर्तन\nदनुजविद्यानिकर्तन भजदविद्यानिवर्तन ।\nअमरदृष्टस्वविक्रम समरजुष्टभ्रमिक्रम\nजय जय श्रीसुदर्शन जय जय श्रीसुदर्शन ॥',
      transliteration:
        'danuja-vistāra-kartana janita-misrā-vikartana\ndanuja-vidyā-nikartana bhajad-avidyā-nivartana |\namara-dṛṣṭa-sva-vikrama samara-juṣṭa-bhrami-krama\njaya jaya śrī-sudarśana jaya jaya śrī-sudarśana ||',
      meaning:
        'You cut down the expanding ranks of demons and dispel the darkness they create. You destroy the sorcery of the Asuras and remove the ignorance of Your devotees. The gods behold Your valour, and in battle You whirl with devastating speed. Victory, victory to You, O Sri Sudarshana!',
    },
  ],
};

const bilvashtakam: Stotra = {
  id: 'bilvashtakam',
  title: 'Bilvashtakam',
  subtitle: 'बिल्वाष्टकम्',
  deity: 'Shiva',
  description:
    'Nine verses (eight plus phala shruti) by Adi Shankaracharya extolling the supreme merit of offering bilva (bael) leaves to Lord Shiva. Each verse culminates in the refrain "Eka Bilvam Shivārpaṇam."',
  benefits: [
    'Bestows the merit of offering bilva leaves to Lord Shiva',
    'Destroys sins accumulated over many lifetimes',
    'Leads to liberation and attainment of Shiva Loka',
  ],
  estimatedMinutes: 3,
  icon: 'bilvashtakam',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'त्रिदलं त्रिगुणाकारं त्रिनेत्रं च त्रियायुधम् ।\nत्रिजन्मपापसंहारं एकबिल्वं शिवार्पणम् ॥',
      transliteration:
        'tridalaṁ triguṇākāraṁ trinetraṁ ca triyāyudham |\ntrijanna-pāpa-saṁhāraṁ eka-bilvaṁ śivārpaṇam ||',
      meaning:
        'The bilva leaf has three leaves representing the three gunas, the three eyes of Shiva, and his three weapons. Offering one bilva leaf to Shiva destroys the sins of three lifetimes.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'त्रिशाखैर्बिल्वपत्रैश्च अच्छिद्रैः कोमलैः शुभैः ।\nतवपूजां करिष्यामि एकबिल्वं शिवार्पणम् ॥',
      transliteration:
        'triśākhair-bilva-patraiśca acchidraiḥ komalaiḥ śubhaiḥ |\ntava-pūjāṁ kariṣyāmi eka-bilvaṁ śivārpaṇam ||',
      meaning:
        'With three-branched bilva leaves that are unbroken, tender, and auspicious, I shall worship You. One bilva leaf offered to Shiva.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'कोटिकन्यामहादानं तिलपर्वतकोटिदम् ।\nकाञ्चनं क्षीरदानेन एकबिल्वं शिवार्पणम् ॥',
      transliteration:
        'koṭi-kanyā-mahā-dānaṁ tila-parvata-koṭidam |\nkāñcanaṁ kṣīra-dānena eka-bilvaṁ śivārpaṇam ||',
      meaning:
        'The merit of giving away millions of maidens in charity, mountains of sesame seeds, gold, and milk — all this equals the offering of one bilva leaf to Shiva.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'काशीक्षेत्रनिवासं च कालभैरवदर्शनम् ।\nप्रयागे माधवं दृष्ट्वा एकबिल्वं शिवार्पणम् ॥',
      transliteration:
        'kāśī-kṣetra-nivāsaṁ ca kāla-bhairava-darśanam |\nprayāge mādhavaṁ dṛṣṭvā eka-bilvaṁ śivārpaṇam ||',
      meaning:
        'Living in Kashi, beholding Kala Bhairava, and seeing Lord Madhava at Prayag — the merit of all this equals offering one bilva leaf to Shiva.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'इन्दुवारे व्रतं स्थित्वा निराहारो महेश्वरः ।\nनक्तं हौष्यामि देवेश एकबिल्वं शिवार्पणम् ॥',
      transliteration:
        'indu-vāre vrataṁ sthitvā nirāhāro maheśvaraḥ |\nnaktaṁ hauṣyāmi deveśa eka-bilvaṁ śivārpaṇam ||',
      meaning:
        'Observing a fast on Monday, remaining without food for Lord Maheshwara, and performing offerings at night — all this equals the offering of one bilva leaf to Shiva.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'रामलिङ्गप्रतिष्ठा च वैवाहिककृतं तथा ।\nतडागानिच सन्धानं एकबिल्वं शिवार्पणम् ॥',
      transliteration:
        'rāma-liṅga-pratiṣṭhā ca vaivāhika-kṛtaṁ tathā |\ntaḍāgāni ca sandhānaṁ eka-bilvaṁ śivārpaṇam ||',
      meaning:
        'The merit of consecrating a Rama Linga, performing marriages, and constructing reservoirs — all this equals the offering of one bilva leaf to Shiva.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'अखण्डबिल्वपत्रं च आयुतं शिवपूजनम् ।\nकृतं नाम सहस्रेण एकबिल्वं शिवार्पणम् ॥',
      transliteration:
        'akhaṇḍa-bilva-patraṁ ca āyutaṁ śiva-pūjanam |\nkṛtaṁ nāma sahasreṇa eka-bilvaṁ śivārpaṇam ||',
      meaning:
        'Offering unbroken bilva leaves ten thousand times and chanting Shiva\'s thousand names — all this equals the offering of one bilva leaf to Shiva.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'उमया सह देवेशं वाहनं नन्दिशेखरम् ।\nमुक्तिं च शाश्वतीं प्राप्य एकबिल्वं शिवार्पणम् ॥',
      transliteration:
        'umayā saha deveśaṁ vāhanaṁ nandi-śekharam |\nmuktiṁ ca śāśvatīṁ prāpya eka-bilvaṁ śivārpaṇam ||',
      meaning:
        'Beholding the Lord of the gods together with Uma, with Nandi as his vehicle, one attains eternal liberation — by offering one bilva leaf to Shiva.',
    },
    {
      id: 9,
      verseLabel: 'Phala Shruti',
      sanskrit:
        'बिल्वाष्टकमिदं पुण्यं यः पठेच्छिवसन्निधौ ।\nशिवलोकमवाप्नोति एकबिल्वं शिवार्पणम् ॥',
      transliteration:
        'bilvāṣṭakam-idaṁ puṇyaṁ yaḥ paṭhec-chiva-sannidhau |\nśiva-lokam-avāpnoti eka-bilvaṁ śivārpaṇam ||',
      meaning:
        'Whoever recites this sacred Bilvashtakam in the presence of Lord Shiva attains Shiva Loka — by the offering of one bilva leaf to Shiva.',
    },
  ],
};

const argalaStotram: Stotra = {
  id: 'argala-stotram',
  title: 'Argala Stotram',
  subtitle: 'अर्गलास्तोत्रम्',
  deity: 'Durga',
  description:
    'A powerful hymn from the Durga Saptashati (Devi Mahatmyam), recited as a preliminary prayer to unlock the full grace of Goddess Chandika. Most verses end with the refrain "Rūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi."',
  benefits: [
    'Removes obstacles and unlocks the full power of Devi worship',
    'Grants beauty, victory, fame, and destroys enemies',
    'Bestows health, prosperity, and liberation from worldly suffering',
  ],
  estimatedMinutes: 7,
  icon: 'argala-stotram',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'जय त्वं देवि चामुण्डे जय भूतापहारिणि ।\nजय सर्वगते देवि कालरात्रि नमोऽस्तु ते ॥',
      transliteration:
        'jaya tvaṁ devi cāmuṇḍe jaya bhūtāpahāriṇi |\njaya sarvagate devi kālarātri namo\'stu te ||',
      meaning:
        'Victory to You, O Goddess Chamunda! Victory to You who removes all evil beings. Victory to the all-pervading Goddess. O Kalaratri, salutations to You.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'जयन्ती मङ्गला काली भद्रकाली कपालिनी ।\nदुर्गा क्षमा शिवा धात्री स्वाहा स्वधा नमोऽस्तु ते ॥',
      transliteration:
        'jayantī maṅgalā kālī bhadrakālī kapālinī |\ndurgā kṣamā śivā dhātrī svāhā svadhā namo\'stu te ||',
      meaning:
        'O Jayanti, Mangala, Kali, Bhadrakali, Kapalini, Durga, Kshama, Shiva, Dhatri, Svaha, and Svadha — salutations to You.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'मधुकैटभविद्राविविधातृवरदे नमः ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'madhu-kaiṭabha-vidrāvi-vidhātṛ-varade namaḥ |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'Salutations to You who drove away Madhu and Kaitabha and granted a boon to Brahma. Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'महिषासुरनिर्णाशविधातृवरदे नमः ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'mahiṣāsura-nirṇāśa-vidhātṛ-varade namaḥ |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'Salutations to You who annihilated Mahishasura and granted boons to the creator. Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'रक्तबीजवधे देवि चण्डमुण्डविनाशिनि ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'raktabīja-vadhe devi caṇḍa-muṇḍa-vināśini |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Goddess who slew Raktabija and destroyed Chanda and Munda! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'शुम्भस्यैव निशुम्भस्य धूम्राक्षस्य च मर्दिनि ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'śumbhasyaiva niśumbhasya dhūmrākṣasya ca mardini |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O crusher of Shumbha, Nishumbha, and Dhumraksha! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'वन्दिताङ्घ्रियुगे देवि सर्वसौभाग्यदायिनि ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'vanditāṅghri-yuge devi sarva-saubhāgya-dāyini |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Goddess whose twin feet are worshipped, who bestows all good fortune! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'अचिन्त्यरूपचरिते सर्वशत्रुविनाशिनि ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'acintya-rūpa-carite sarva-śatru-vināśini |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Goddess of inconceivable form and deeds, destroyer of all enemies! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'नतेभ्यः सर्वदा भक्त्या चण्डिके दुरितापहे ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'natebhyaḥ sarvadā bhaktyā caṇḍike duritāpahe |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Chandika, remover of afflictions, to those who bow before You always with devotion! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'स्तुवद्भ्यो भक्तिपूर्वं त्वां चण्डिके व्याधिनाशिनि ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'stuvadbhyo bhakti-pūrvaṁ tvāṁ caṇḍike vyādhi-nāśini |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Chandika, destroyer of disease, to those who praise You with devotion! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 11,
      verseLabel: 'Verse 11',
      sanskrit:
        'चण्डिके सततं ये त्वामर्चयन्तीह भक्तितः ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'caṇḍike satataṁ ye tvām-arcayantīha bhaktitaḥ |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Chandika, for those who constantly worship You with devotion in this world! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 12,
      verseLabel: 'Verse 12',
      sanskrit:
        'देहि सौभाग्यमारोग्यं देहि मे परमं सुखम् ।\nरूपं देहि जयं देहi यशो देहि द्विषो जहि ॥',
      transliteration:
        'dehi saubhāgyam-ārogyaṁ dehi me paramaṁ sukham |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'Grant me good fortune and health, grant me supreme happiness. Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 13,
      verseLabel: 'Verse 13',
      sanskrit:
        'विधेहि द्विषतां नाशं विधेहि बलमुच्चकैः ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'vidhehi dviṣatāṁ nāśaṁ vidhehi balam-uccakaiḥ |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'Bring about the destruction of my foes and bestow upon me abundant strength. Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 14,
      verseLabel: 'Verse 14',
      sanskrit:
        'विधेहि देवि कल्याणं विधेहि परमां श्रियम् ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'vidhehi devi kalyāṇaṁ vidhehi paramāṁ śriyam |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'Bestow auspiciousness, O Goddess, and grant me supreme prosperity. Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 15,
      verseLabel: 'Verse 15',
      sanskrit:
        'सुरासुरशिरोरत्ननिघृष्टचरणेऽम्बिके ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'surāsura-śiro-ratna-nighṛṣṭa-caraṇe\'mbike |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Mother, whose feet are polished by the crest jewels of gods and demons alike! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 16,
      verseLabel: 'Verse 16',
      sanskrit:
        'विद्यावन्तं यशस्वन्तं लक्ष्मीवन्तं च मां कुरु ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'vidyāvantaṁ yaśasvantaṁ lakṣmīvantaṁ ca māṁ kuru |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'Make me learned, make me famous, and make me prosperous. Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 17,
      verseLabel: 'Verse 17',
      sanskrit:
        'प्रचण्डदैत्यदर्पघ्ने चण्डिके प्रणताय मे ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'pracaṇḍa-daitya-darpa-ghne caṇḍike praṇatāya me |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Chandika, destroyer of the pride of fierce demons, I bow before You! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 18,
      verseLabel: 'Verse 18',
      sanskrit:
        'चतुर्भुजे चतुर्वक्त्रसंस्तुते परमेश्वरि ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'caturbhuje catur-vaktra-saṁstute parameśvari |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Supreme Goddess with four arms, praised by the four-faced Brahma! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 19,
      verseLabel: 'Verse 19',
      sanskrit:
        'कृष्णेन संस्तुते देवि शश्वद्भक्त्या सदाम्बिके ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'kṛṣṇena saṁstute devi śaśvad-bhaktyā sadāmbike |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Goddess praised by Lord Krishna with eternal devotion, O ever-present Mother! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 20,
      verseLabel: 'Verse 20',
      sanskrit:
        'हिमाचलसुतानाथसंस्तुते परमेश्वरि ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'himācala-sutā-nātha-saṁstute parameśvari |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Supreme Goddess praised by the Lord of Himachala\'s daughter (Shiva)! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 21,
      verseLabel: 'Verse 21',
      sanskrit:
        'इन्द्राणीपतिसद्भावपूजिते परमेश्वरि ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'indrāṇī-pati-sadbhāva-pūjite parameśvari |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Supreme Goddess, worshipped with devotion by Indra, the lord of Indrani! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 22,
      verseLabel: 'Verse 22',
      sanskrit:
        'देवि प्रचण्डदोर्दण्डदैत्यदर्पविनाशिनि ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'devi pracaṇḍa-dor-daṇḍa-daitya-darpa-vināśini |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Goddess who destroys the pride of demons with Your mighty arms! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 23,
      verseLabel: 'Verse 23',
      sanskrit:
        'देवि भक्तजनोद्दामदत्तानन्दोदयेऽम्बिके ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥',
      transliteration:
        'devi bhakta-janod-dāma-dattānandodaye\'mbike |\nrūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||',
      meaning:
        'O Mother Goddess, who causes the rise of unbounded bliss in Your devotees! Grant me beauty, grant me victory, grant me fame, and destroy my enemies.',
    },
    {
      id: 24,
      verseLabel: 'Verse 24',
      sanskrit:
        'पत्नीं मनोरमां देहि मनोवृत्तानुसारिणीम् ।\nतारिणीं दुर्गसंसारसागरस्य कुलोद्भवाम् ॥',
      transliteration:
        'patnīṁ manoramāṁ dehi mano-vṛttānusāriṇīm |\ntāriṇīṁ durga-saṁsāra-sāgarasya kulodbhavām ||',
      meaning:
        'Grant me a charming spouse who follows the inclinations of my heart, one born of a noble family who can help me cross the difficult ocean of worldly existence.',
    },
    {
      id: 25,
      verseLabel: 'Phala Shruti',
      sanskrit:
        'इदं स्तोत्रं पठित्वा तु महास्तोत्रं पठेन्नरः ।\nसप्तशतीं समाराध्य वरमाप्नोति दुर्लभम् ॥',
      transliteration:
        'idaṁ stotraṁ paṭhitvā tu mahā-stotraṁ paṭhen-naraḥ |\nsaptaśatīṁ samārādhya varam-āpnoti durlabham ||',
      meaning:
        'Having recited this stotra, one should then recite the great Saptashati hymn. By worshipping through the seven hundred verses, one obtains rare and precious boons.',
    },
  ],
};

const damodarashtakam: Stotra = {
  id: 'damodarashtakam',
  title: 'Damodarashtakam',
  subtitle: 'दामोदराष्टकम्',
  deity: 'Krishna',
  description:
    'Eight verses by Satyavrata Muni from the Padma Purana, sung during the month of Kartik. They describe the childhood pastimes of Lord Krishna — especially Mother Yashoda binding Him with a rope around His waist (Damodara) — evoking deep parental love and devotion.',
  benefits: [
    'Invokes the grace of Lord Damodara during the sacred month of Kartik',
    'Cultivates intimate, loving devotion (vatsalya rasa) toward the Supreme Lord',
    'Bestows liberation and eternal service at the lotus feet of Krishna',
  ],
  estimatedMinutes: 4,
  icon: 'M16 4 L16 14 M13 8 L19 8',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'नमामीश्वरं सच्चिदानन्दरूपं\nललाटस्थकौस्तुभवह्निप्रभम्।\nयशोदाभियोलूखलाद्धावमानं\nपरामृष्टपृष्ठं नताम्यं परं वे॥',
      transliteration:
        'namāmīśvaraṁ sac-cid-ānanda-rūpaṁ\nlalāṭa-stha-kaustubha-vahni-prabham |\nyaśodā-bhiyolūkhalād-dhāvamānaṁ\nparāmṛṣṭa-pṛṣṭhaṁ natāmyaṁ paraṁ ve ||',
      meaning:
        'I bow to the Supreme Lord, whose form is eternal bliss and consciousness, whose forehead glows with the radiance of the Kaustubha gem. Fleeing in fear of Mother Yashoda, running from the wooden mortar, His back touched by her hand — I bow to that transcendent Lord.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'रुदन्तं मुहुर्नेत्रयुग्मं मृजन्तं\nकराम्भोजयुग्मेन सातङ्कनेत्रम्।\nमुहुः श्वासकम्पत्रिरेखाङ्ककण्ठ-\nस्थितग्रैवदामोदरं भक्तिबद्धम्॥',
      transliteration:
        'rudantaṁ muhur-netra-yugmaṁ mṛjantaṁ\nkarāmbhoja-yugmena sātaṅka-netram |\nmuhuḥ śvāsa-kampa-tri-rekhāṅka-kaṇṭha-\nsthita-graiva-dāmodaraṁ bhakti-baddham ||',
      meaning:
        'Crying again and again, rubbing both His eyes with His lotus hands, His eyes full of fear, His throat marked with three lines trembling with every breath, the necklace resting there — I worship Damodara, bound by the ropes of devotion.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'इतीदृक्स्वलीलाभिरानन्दकुण्डे\nस्वघोषं निमज्जन्तमाख्यापयन्तम्।\nतदीयेशितज्ञेषु भक्तैर्जितत्वं\nपुनः प्रेमतस्तं शताबृत्ति वन्दे॥',
      transliteration:
        'itīdṛk sva-līlābhir-ānanda-kuṇḍe\nsva-ghoṣaṁ nimajjantam-ākhyāpayantam |\ntadīyeśita-jñeṣu bhaktair-jitatvaṁ\npunaḥ prematas-taṁ śatāvṛtti vande ||',
      meaning:
        'Thus, by such childhood pastimes, He immerses His own Vraja community in a pool of bliss, proclaiming that He is conquered by the love of His devotees who know His supreme lordship. Again and again, with love, I offer a hundred salutations to Him.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'वरं देव मोक्षं न मोक्षावधिं वा\nन चान्यं वृणे ऽहं वरेशादपीह।\nइदं ते वपुर्नाथ गोपालबालं\nसदा मे मनस्यावि-रास्तां किमन्यैः॥',
      transliteration:
        'varaṁ deva mokṣaṁ na mokṣāvadhiṁ vā\nna cānyaṁ vṛṇe \'haṁ vareśād-apīha |\nidaṁ te vapur-nātha gopāla-bālaṁ\nsadā me manasy-āvirāstāṁ kim-anyaiḥ ||',
      meaning:
        'O Lord, I do not seek liberation, nor anything up to liberation, nor any other boon from the Lord of boons. O Master, may this form of Yours as the cowherd child forever manifest in my heart — what need have I of anything else?',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'इदं ते मुखाम्भोजमत्यन्तनीलै-\nर्वृतं कुन्तलैः स्निग्धरक्तैश्च गोप्या।\nमुहुश्चुम्बितं बिम्बरक्ताधरं मे\nमनस्यावि-रास्तामलं लक्षलाभैः॥',
      transliteration:
        'idaṁ te mukhāmbhojam-atyanta-nīlair-\nvṛtaṁ kuntalaiḥ snigdha-raktaiś-ca gopyā |\nmuhuś-cumbitaṁ bimba-raktādharaṁ me\nmanasy-āvirāstām-alaṁ lakṣa-lābhaiḥ ||',
      meaning:
        'This lotus face of Yours, framed by deep blue curls, kissed again and again by the gopi (Yashoda) on its bimba-red lips — may it manifest in my heart. Enough with millions of other gains!',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'नमो देव दामोदरानन्त विष्णो\nप्रसीद प्रभो दुःखजालाब्धिमग्नम्।\nकृपादृष्टिवृष्ट्यातिदीनं बतानु-\nगृहाणेश मामज्ञमेधि प्रकाशम्॥',
      transliteration:
        'namo deva dāmodarānanta viṣṇo\nprasīda prabho duḥkha-jālābdhi-magnam |\nkṛpā-dṛṣṭi-vṛṣṭyāti-dīnaṁ batānu-\ngṛhāṇeśa mām-ajñam-edhi prakāśam ||',
      meaning:
        'O Lord Damodara, O infinite Vishnu, be pleased! O Master, I am drowning in an ocean of sorrow. Shower the rain of Your merciful glance upon this utterly wretched soul. O Lord, accept me, this ignorant one — become manifest before me!',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'कुवेरात्मजौ बद्धमूर्त्यैव यद्वत्\nत्वया मोचितौ भक्तिभाजौ कृतौ च।\nतथा प्रेमभक्तिं स्वकां मे प्रयच्छ\nन मोक्षे ग्रहो मे ऽस्ति दामोदरेह॥',
      transliteration:
        'kuverātmajau baddha-mūrtyaiva yadvat\ntvayā mocitau bhakti-bhājau kṛtau ca |\ntathā prema-bhaktiṁ svakāṁ me prayaccha\nna mokṣe graho me \'sti dāmodareha ||',
      meaning:
        'Just as You, in Your bound form, liberated the two sons of Kubera and made them recipients of devotion, in the same way, bestow upon me Your own loving devotion. O Damodara, I have no desire for liberation!',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'नमस्ते ऽस्तु दाम्ने स्फुरद्दीप्तिधाम्ने\nत्वदीयोदरायाथ विश्वस्य धाम्ने।\nनमो राधिकायै त्वदीयप्रियायै\nनमो ऽनन्तलीलाय देवाय तुभ्यम्॥',
      transliteration:
        'namas te \'stu dāmne sphurad-dīpti-dhāmne\ntvadīyodarāyātha viśvasya dhāmne |\nnamo rādhikāyai tvadīya-priyāyai\nnamo \'nanta-līlāya devāya tubhyam ||',
      meaning:
        'I bow to the rope that binds You, which shines with brilliant splendor. I bow to Your belly, which is the abode of the entire universe. I bow to Radhika, Your most beloved. I bow to You, the Lord of infinite pastimes!',
    },
  ],
};

const guruAshtakam: Stotra = {
  id: 'guru-ashtakam',
  title: 'Guru Ashtakam',
  subtitle: 'गुर्वष्टकम्',
  deity: 'Guru',
  description:
    'Eight verses by Adi Shankaracharya extolling the supreme importance of the Guru. Each verse describes worldly accomplishments and spiritual attainments, concluding with the refrain: "If the mind is not attached to the lotus feet of the Guru, then what? What? What? What?"',
  benefits: [
    'Deepens devotion and surrender to the spiritual teacher',
    'Cultivates humility and the recognition that all attainments are meaningless without the Guru\'s grace',
    'Inspires detachment from worldly pride and attachment to spiritual guidance',
  ],
  estimatedMinutes: 4,
  icon: 'M16 4 L16 14 M13 8 L19 8',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'शरीरं सुरूपं तथा वा कलत्रं\nयशश्चारु चित्रं धनं मेरुतुल्यम्।\nमनश्चेन्न लग्नं गुरोरङ्घ्रिपद्मे\nततः किं ततः किं ततः किं ततः किम्॥',
      transliteration:
        'śarīraṁ surūpaṁ tathā vā kalatraṁ\nyaśaś-cāru citraṁ dhanaṁ meru-tulyam |\nmanaś-cen-na lagnaṁ guror-aṅghri-padme\ntataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim ||',
      meaning:
        'One may have a beautiful body and a lovely spouse, fame that is wonderful and picturesque, wealth as vast as Mount Meru — but if the mind is not attached to the lotus feet of the Guru, then what? What? What? What?',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'कलत्रं धनं पुत्रपौत्रादि सर्वं\nगृहं बान्धवाः सर्वमेतद्धि जातम्।\nमनश्चेन्न लग्नं गुरोरङ्घ्रिपद्मे\nततः किं ततः किं ततः किं ततः किम्॥',
      transliteration:
        'kalatraṁ dhanaṁ putra-pautrādi sarvaṁ\ngṛhaṁ bāndhavāḥ sarvam-etaddhi jātam |\nmanaś-cen-na lagnaṁ guror-aṅghri-padme\ntataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim ||',
      meaning:
        'One may have a spouse, wealth, sons, grandsons, and all else — home, relatives, everything that is born of this world — but if the mind is not attached to the lotus feet of the Guru, then what? What? What? What?',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'षडङ्गादिवेदो मुखे शास्त्रविद्या\nकवित्वादि गद्यं सुपद्यं करोति।\nमनश्चेन्न लग्नं गुरोरङ्घ्रिपद्मे\nततः किं ततः किं ततः किं ततः किम्॥',
      transliteration:
        'ṣaḍaṅgādi-vedo mukhe śāstra-vidyā\nkavitvādi gadyaṁ su-padyaṁ karoti |\nmanaś-cen-na lagnaṁ guror-aṅghri-padme\ntataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim ||',
      meaning:
        'One may have the Vedas with their six limbs on the tip of one\'s tongue, mastery of scriptures and sciences, and the ability to compose fine prose and poetry — but if the mind is not attached to the lotus feet of the Guru, then what? What? What? What?',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'विदेशेषु मान्यः स्वदेशेषु धन्यः\nसदाचारवृत्तेषु मत्तो न चान्यः।\nमनश्चेन्न लग्नं गुरोरङ्घ्रिपद्मे\nततः किं ततः किं ततः किं ततः किम्॥',
      transliteration:
        'videśeṣu mānyaḥ svadeśeṣu dhanyaḥ\nsadācāra-vṛtteṣu matto na cānyaḥ |\nmanaś-cen-na lagnaṁ guror-aṅghri-padme\ntataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim ||',
      meaning:
        'One may be honored in foreign lands and fortunate in one\'s own country, unsurpassed in righteous conduct and virtuous behavior — but if the mind is not attached to the lotus feet of the Guru, then what? What? What? What?',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'क्षमामण्डले भूपभूपालवृन्दैः\nसदा सेवितं यस्य पादारविन्दम्।\nमनश्चेन्न लग्नं गुरोरङ्घ्रिपद्मे\nततः किं ततः किं ततः किं ततः किम्॥',
      transliteration:
        'kṣamā-maṇḍale bhūpa-bhūpāla-vṛndaiḥ\nsadā sevitaṁ yasya pādāravindam |\nmanaś-cen-na lagnaṁ guror-aṅghri-padme\ntataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim ||',
      meaning:
        'One whose lotus feet are always served by hosts of kings and emperors across the earth — but if the mind is not attached to the lotus feet of the Guru, then what? What? What? What?',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'यशो मे गतं दिक्षु दानप्रतापा-\nज्जगद्वस्तु सर्वं करे यत्प्रसादात्।\nमनश्चेन्न लग्नं गुरोरङ्घ्रिपद्मे\nततः किं ततः किं ततः किं ततः किम्॥',
      transliteration:
        'yaśo me gataṁ dikṣu dāna-pratāpāj-\njagad-vastu sarvaṁ kare yat-prasādāt |\nmanaś-cen-na lagnaṁ guror-aṅghri-padme\ntataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim ||',
      meaning:
        'One whose fame has spread in all directions through the glory of charity, by whose grace all the wealth of the world rests in one\'s hand — but if the mind is not attached to the lotus feet of the Guru, then what? What? What? What?',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'न भोगे न योगे न वा वाजिराजौ\nन कान्तामुखे नैव वित्तेषु चित्तम्।\nमनश्चेन्न लग्नं गुरोरङ्घ्रिपद्मे\nततः किं ततः किं ततः किं ततः किम्॥',
      transliteration:
        'na bhoge na yoge na vā vāji-rājau\nna kāntā-mukhe naiva vitteṣu cittam |\nmanaś-cen-na lagnaṁ guror-aṅghri-padme\ntataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim ||',
      meaning:
        'The mind finds no delight in pleasures, nor in yoga, nor in horses and royal steeds, nor in the face of the beloved, nor in wealth — but if the mind is not attached to the lotus feet of the Guru, then what? What? What? What?',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'अरण्ये न वा स्वस्य गेहे न कार्ये\nन देहे मनो वर्तते मे त्वनर्घ्ये।\nमनश्चेन्न लग्नं गुरोरङ्घ्रिपद्मे\nततः किं ततः किं ततः किं ततः किम्॥',
      transliteration:
        'araṇye na vā svasya gehe na kārye\nna dehe mano vartate me tvanarghye |\nmanaś-cen-na lagnaṁ guror-aṅghri-padme\ntataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim ||',
      meaning:
        'The mind dwells neither in the forest, nor in one\'s own home, nor in duties, nor in this priceless body — but if the mind is not attached to the lotus feet of the Guru, then what? What? What? What?',
    },
  ],
};

const pandurangashtakam: Stotra = {
  id: 'pandurangashtakam',
  title: 'Pandurangashtakam',
  subtitle: 'पाण्डुरङ्गाष्टकम्',
  deity: 'Vishnu',
  description:
    'Eight verses by Adi Shankaracharya glorifying Lord Panduranga (Vitthal), the beloved deity of Pandharpur standing on a brick on the banks of the Bhima river. Each verse culminates in the refrain "I worship Panduranga, the embodiment of the Supreme Brahman."',
  benefits: [
    'Bestows devotion and surrender to Lord Vitthal-Panduranga',
    'Purifies the mind and removes sins of past lives',
    'Grants liberation and a place in the abode of Vishnu',
  ],
  estimatedMinutes: 3,
  icon: 'pandurangashtakam',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'महायोगपीठे तटे भीमरथ्याः\nवरं पुण्डरीकाय दातुं मुनीन्द्रैः ।\nसमागत्य तिष्ठन्तमानन्दकन्दं\nपरब्रह्मलिङ्गं भजे पाण्डुरङ्गम् ॥',
      transliteration:
        'mahā-yoga-pīṭhe taṭe bhīma-rathyāḥ\nvaraṁ puṇḍarīkāya dātuṁ munīndraiḥ |\nsamāgatya tiṣṭhantam-ānanda-kandaṁ\npara-brahma-liṅgaṁ bhaje pāṇḍuraṅgam ||',
      meaning:
        'On the great seat of yoga, on the banks of the Bhima river, having come with the great sages to grant a boon to Pundalik — He stands there, the root of bliss. I worship that Panduranga, the embodiment of the Supreme Brahman.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'तडिद्वाससं नीलमेघावभासं\nरमामन्दिरं सुन्दरं चित्प्रकाशम् ।\nवरं त्विष्टिकायां समन्यस्तपादं\nपरब्रह्मलिङ्गं भजे पाण्डुरङ्गम् ॥',
      transliteration:
        'taḍid-vāsasaṁ nīla-meghāvabhāsaṁ\nramā-mandiraṁ sundaraṁ cit-prakāśam |\nvaraṁ tviṣṭikāyāṁ samanyasta-pādaṁ\npara-brahma-liṅgaṁ bhaje pāṇḍuraṅgam ||',
      meaning:
        'Clad in garments bright as lightning, radiant as a blue cloud, the abode of Lakshmi, beautiful, the light of pure consciousness — with His feet placed on the brick, I worship that Panduranga, the embodiment of the Supreme Brahman.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'प्रमाणं भवाब्धेरिदं मामकानां\nनितम्बः कराभ्यामसौ संगृहीतः ।\nइतीवोरुकट्यां विनिन्यस्तहस्तं\nपरब्रह्मलिङ्गं भजे पाण्डुरङ्गम् ॥',
      transliteration:
        'pramāṇaṁ bhavābdher-idaṁ māmakānāṁ\nnitambaḥ karābhyām-asau saṁgṛhītaḥ |\nitīvorukāṭyāṁ vininyasta-hastaṁ\npara-brahma-liṅgaṁ bhaje pāṇḍuraṅgam ||',
      meaning:
        'As if declaring "the measure of this ocean of worldly existence for My devotees is only up to My waist, which I hold with both hands" — with His hands placed on His waist, I worship that Panduranga, the embodiment of the Supreme Brahman.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'विभुं वेणुनादं चरन्तं दुरन्तं\nस्वयं लीलया गोपवेषं दधानम् ।\nगवां बृन्दकानन्ददं चारुहासं\nपरब्रह्मलिङ्गं भजे पाण्डुरङ्गम् ॥',
      transliteration:
        'vibhuṁ veṇu-nādaṁ carantaṁ durantaṁ\nsvayaṁ līlayā gopa-veṣaṁ dadhānam |\ngavāṁ bṛnda-kānandam caruhasaṁ\npara-brahma-liṅgaṁ bhaje pāṇḍuraṅgam ||',
      meaning:
        'The all-pervading Lord who plays the flute, who roams freely, boundless, who playfully dons the garb of a cowherd — who delights the herds of cows with His charming smile, I worship that Panduranga, the embodiment of the Supreme Brahman.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'अजं रुक्मिणीप्राणसञ्जीवनं तं\nपरं धाम कैवल्यमेकं तुरीयम् ।\nप्रसन्नं प्रपन्नार्तिहं देवदेवं\nपरब्रह्मलिङ्गं भजे पाण्डुरङ्गम् ॥',
      transliteration:
        'ajaṁ rukmiṇī-prāṇa-sañjīvanaṁ taṁ\nparaṁ dhāma kaivalyam-ekaṁ turīyam |\nprasannaṁ prapannārti-haṁ deva-devaṁ\npara-brahma-liṅgaṁ bhaje pāṇḍuraṅgam ||',
      meaning:
        'The unborn one who is the life of Rukmini, the supreme abode, the one absolute liberation, the fourth state of consciousness — gracious, the remover of the distress of those who surrender, the God of gods, I worship that Panduranga, the embodiment of the Supreme Brahman.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'श्रीराधाचकोरामृतं कृष्णचन्द्रं\nनवानन्दनृत्यं परं ब्रह्मसन्दम् ।\nरसालिङ्गनोत्कण्ठितोद्भूतहासं\nपरब्रह्मलिङ्गं भजे पाण्डुरङ्गम् ॥',
      transliteration:
        'śrī-rādhā-cakorāmṛtaṁ kṛṣṇa-candraṁ\nnavānanda-nṛtyaṁ paraṁ brahma-sandam |\nrasāliṅganotkaṇṭhitod-bhūta-hāsaṁ\npara-brahma-liṅgaṁ bhaje pāṇḍuraṅgam ||',
      meaning:
        'The moon-like Krishna who is the nectar for the chakora bird that is Radha, who dances in ever-new bliss, the supreme essence of Brahman — whose smile arises from the eagerness for the embrace of divine love, I worship that Panduranga, the embodiment of the Supreme Brahman.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'सदा ब्रह्मभूतं चिदानन्दरूपं\nगुणातीतमानन्दकन्दं स्वभक्तम् ।\nसदा सर्वभूतेषु सन्तं वसन्तं\nपरब्रह्मलिङ्गं भजे पाण्डुरङ्गम् ॥',
      transliteration:
        'sadā brahma-bhūtaṁ cid-ānanda-rūpaṁ\nguṇātītam-ānanda-kandaṁ sva-bhaktam |\nsadā sarva-bhūteṣu santaṁ vasantaṁ\npara-brahma-liṅgaṁ bhaje pāṇḍuraṅgam ||',
      meaning:
        'Ever established as Brahman, of the form of consciousness-bliss, beyond the gunas, the root of bliss, devoted to His devotees — ever present and dwelling in all beings, I worship that Panduranga, the embodiment of the Supreme Brahman.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'इदं पाण्डुरङ्गाष्टकं यः पठेत\nमनोवाञ्छितं तत्फलं लब्धमेव ।\nगतो योगिनां लक्ष्यमन्तस्त्रिणेत्रं\nपरब्रह्मलिङ्गं भजे पाण्डुरङ्गम् ॥',
      transliteration:
        'idaṁ pāṇḍuraṅgāṣṭakaṁ yaḥ paṭheta\nmano-vāñchitaṁ tat-phalaṁ labdham-eva |\ngato yogināṁ lakṣyam-antas-triṇetraṁ\npara-brahma-liṅgaṁ bhaje pāṇḍuraṅgam ||',
      meaning:
        'Whoever recites this Pandurangashtakam obtains the fruit of their heart\'s desire. Having reached the goal of yogis — the three-eyed one within — I worship that Panduranga, the embodiment of the Supreme Brahman.',
    },
  ],
};

const sankataNashanaGaneshaStotram: Stotra = {
  id: 'sankata-nashana-ganesha-stotram',
  title: 'Sankata Nashana Ganesha Stotram',
  subtitle: 'सङ्कटनाशनगणेशस्तोत्रम्',
  deity: 'Ganesha',
  description:
    'Eight verses from the Narada Purana praising Lord Ganesha as the remover of all obstacles and difficulties. This hymn invokes Ganesha\'s grace for the attainment of longevity, prosperity, wisdom, and fulfillment of desires.',
  benefits: [
    'Removes obstacles, difficulties, and dangers from life',
    'Bestows longevity, prosperity, and fulfillment of desires',
    'Grants wisdom and spiritual progress',
  ],
  estimatedMinutes: 3,
  icon: 'sankata-nashana-ganesha-stotram',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।\nभक्तावासं स्मरेन्नित्यमायुष्कामार्थसिद्धये ॥',
      transliteration:
        'praṇamya śirasā devaṁ gaurī-putraṁ vināyakam |\nbhaktāvāsaṁ smaren-nityam-āyuṣ-kāmārtha-siddhaye ||',
      meaning:
        'Bowing my head to the Lord, the son of Gauri, Vinayaka — the refuge of his devotees — I meditate on him always for the attainment of longevity, desires, and wealth.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'प्रथमं वक्रतुण्डं च एकदन्तं द्वितीयकम् ।\nतृतीयं कृष्णपिङ्गाक्षं गजवक्त्रं चतुर्थकम् ॥',
      transliteration:
        'prathamaṁ vakra-tuṇḍaṁ ca eka-dantaṁ dvitīyakam |\ntṛtīyaṁ kṛṣṇa-piṅgākṣaṁ gaja-vaktraṁ caturthakam ||',
      meaning:
        'First I remember Vakratunda (curved trunk), second Ekadanta (single tusk), third Krishnapingaksha (dark-tawny eyed), and fourth Gajavaktra (elephant-faced).',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'लम्बोदरं पञ्चमं च षष्ठं विकटमेव च ।\nसप्तमं विघ्नराजेन्द्रं धूम्रवर्णं तथाष्टमम् ॥',
      transliteration:
        'lambodaraṁ pañcamaṁ ca ṣaṣṭhaṁ vikaṭam-eva ca |\nsaptamaṁ vighna-rājendraṁ dhūmra-varṇaṁ tathāṣṭamam ||',
      meaning:
        'Fifth I remember Lambodara (large-bellied), sixth Vikata (the unusual), seventh Vighnarajendra (king of obstacles), and eighth Dhumravarna (smoke-colored).',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'नवमं भालचन्द्रं च दशमं तु विनायकम् ।\nएकादशं गणपतिं द्वादशं तु गजाननम् ॥',
      transliteration:
        'navamaṁ bhāla-candraṁ ca daśamaṁ tu vināyakam |\nekādaśaṁ gaṇapatiṁ dvādaśaṁ tu gajānanam ||',
      meaning:
        'Ninth I remember Bhalachandra (moon on forehead), tenth Vinayaka, eleventh Ganapati (lord of the ganas), and twelfth Gajanana (elephant-faced).',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'द्वादशैतानि नामानि त्रिसन्ध्यं यः पठेन्नरः ।\nन च विघ्नभयं तस्य सर्वसिद्धिकरं प्रभो ॥',
      transliteration:
        'dvādaśaitāni nāmāni tri-sandhyaṁ yaḥ paṭhen-naraḥ |\nna ca vighna-bhayaṁ tasya sarva-siddhi-karaṁ prabho ||',
      meaning:
        'Whoever recites these twelve names at the three junctions of the day (dawn, noon, dusk) — for them there is no fear of obstacles, and all accomplishments are granted, O Lord.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'विद्यार्थी लभते विद्यां धनार्थी लभते धनम् ।\nपुत्रार्थी लभते पुत्रान्मोक्षार्थी लभते गतिम् ॥',
      transliteration:
        'vidyārthī labhate vidyāṁ dhanārthī labhate dhanam |\nputrārthī labhate putrān-mokṣārthī labhate gatim ||',
      meaning:
        'The seeker of knowledge attains knowledge, the seeker of wealth attains wealth, the seeker of children attains children, and the seeker of liberation attains the supreme goal.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'जपेद्गणपतिस्तोत्रं षड्भिर्मासैः फलं लभेत् ।\nसंवत्सरेण सिद्धिं च लभते नात्र संशयः ॥',
      transliteration:
        'japed-gaṇapati-stotraṁ ṣaḍbhir-māsaiḥ phalaṁ labhet |\nsaṁvatsareṇa siddhiṁ ca labhate nātra saṁśayaḥ ||',
      meaning:
        'One who recites this Ganapati Stotra gains results within six months, and within a year attains complete spiritual perfection — there is no doubt about this.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'अष्टभ्यो ब्राह्मणेभ्यश्च लिखित्वा यः समर्पयेत् ।\nतस्य विद्या भवेत्सर्वा गणेशस्य प्रसादतः ॥',
      transliteration:
        'aṣṭabhyo brāhmaṇebhyaś-ca likhitvā yaḥ samarpayēt |\ntasya vidyā bhavet-sarvā gaṇeśasya prasādataḥ ||',
      meaning:
        'One who writes this stotra and offers it to eight learned ones — all knowledge becomes theirs by the grace of Lord Ganesha.',
    },
  ],
};

const dasharathaShaniStotram: Stotra = {
  id: 'dasharatha-shani-stotram',
  title: 'Dasharatha Shani Stotram',
  subtitle: 'दशरथकृतशनिस्तोत्रम्',
  deity: 'Shani',
  description:
    'A hymn composed by King Dasharatha, father of Lord Rama, to appease Lord Shani (Saturn). According to tradition, Dasharatha composed this when Shani threatened to enter the Rohini nakshatra, which would bring great calamity.',
  benefits: [
    'Mitigates the malefic effects of Saturn (Shani Dosha)',
    'Brings relief during Sade-Sati and Shani Dasha periods',
    'Bestows protection, peace, and removal of suffering',
  ],
  estimatedMinutes: 3,
  icon: 'dasharatha-shani-stotram',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'नमः कृष्णाय नीलाय शितिकण्ठनिभाय च ।\nनमः कालाग्निरूपाय कृतान्ताय च वै नमः ॥',
      transliteration:
        'namaḥ kṛṣṇāya nīlāya śitikaṇṭha-nibhāya ca |\nnamaḥ kālāgni-rūpāya kṛtāntāya ca vai namaḥ ||',
      meaning:
        'Salutations to the dark one, the blue one, who resembles Lord Shiva (the blue-throated). Salutations to the one who is the fire of time, to the finisher of all.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'नमो निर्मांसदेहाय दीर्घश्मश्रुजटाय च ।\nनमो विशालनेत्राय शुष्कोदरभयानक ॥',
      transliteration:
        'namo nirmāṁsa-dehāya dīrgha-śmaśru-jaṭāya ca |\nnamo viśāla-netrāya śuṣkodara-bhayānaka ||',
      meaning:
        'Salutations to the one with a fleshless body, with long beard and matted locks. Salutations to the large-eyed, fearsome one with a sunken belly.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'नमः पुष्कलगात्राय स्थूलरोम्णेऽथ वै नमः ।\nनमो दीर्घाय शुष्काय कालदंष्ट्र नमोऽस्तु ते ॥',
      transliteration:
        'namaḥ puṣkala-gātrāya sthūla-romṇe \'tha vai namaḥ |\nnamo dīrghāya śuṣkāya kāla-daṁṣṭra namo \'stu te ||',
      meaning:
        'Salutations to the one with a robust body and coarse hair. Salutations to the tall and gaunt one — O possessor of the fangs of time, salutations to you.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'नमोऽस्तु घोररूपाय दुर्निरीक्ष्याय वै नमः ।\nनमो घोराय रौद्राय भीषणाय करालिने ॥',
      transliteration:
        'namo \'stu ghora-rūpāya durnirīkṣyāya vai namaḥ |\nnamo ghorāya raudrāya bhīṣaṇāya karāline ||',
      meaning:
        'Salutations to the one of terrifying form, who is difficult to behold. Salutations to the fierce, wrathful, dreadful, and formidable one.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'नमस्ते सर्वभक्षाय वलीमुखनमोऽस्तु ते ।\nसूर्यपुत्र नमस्तेऽस्तु भास्करे भयदाय च ॥',
      transliteration:
        'namaste sarva-bhakṣāya valī-mukha namo \'stu te |\nsūrya-putra namaste \'stu bhāskare bhaya-dāya ca ||',
      meaning:
        'Salutations to the all-consuming one, to the wrinkle-faced one. O son of Surya, salutations to you, to the luminous one who inspires awe.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'अधो दृष्टे नमस्तेऽस्तु संवर्तक नमोऽस्तु ते ।\nनमो मन्दगते तुभ्यं निस्त्रिंशाय नमोऽस्तु ते ॥',
      transliteration:
        'adho dṛṣṭe namaste \'stu saṁvartaka namo \'stu te |\nnamo manda-gate tubhyaṁ nistriṁśāya namo \'stu te ||',
      meaning:
        'Salutations to the downward-gazing one, to the destroyer of the universe. Salutations to the slow-moving one, to the sword-bearing one.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'तपसा दग्धदेहाय नित्यं योगरताय च ।\nनमो नित्यं क्षुधार्ताय अतृप्ताय च वै नमः ॥',
      transliteration:
        'tapasā dagdha-dehāya nityaṁ yoga-ratāya ca |\nnamo nityaṁ kṣudhārtāya atṛptāya ca vai namaḥ ||',
      meaning:
        'Salutations to the one whose body is scorched by austerity, who is ever engaged in yoga. Salutations to the perpetually hungry and never-satiated one.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'ज्ञानचक्षुर्नमस्तेऽस्तु कश्यपात्मज सूनवे ।\nतुष्टो ददासि वै राज्यं रुष्टो हरसि तत्क्षणात् ॥',
      transliteration:
        'jñāna-cakṣur-namaste \'stu kaśyapātmaja-sūnave |\ntuṣṭo dadāsi vai rājyaṁ ruṣṭo harasi tat-kṣaṇāt ||',
      meaning:
        'Salutations to the one with the eye of wisdom, O grandson of Kashyapa. When pleased, you bestow kingdoms; when angered, you snatch them away in an instant.',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'देवासुरमनुष्याश्च सिद्धविद्याधरोरगाः ।\nत्वया विलोकिताः सर्वे नाशं यान्ति समूलतः ॥',
      transliteration:
        'devāsura-manuṣyāś-ca siddha-vidyādhara-uragāḥ |\ntvayā vilokitāḥ sarve nāśaṁ yānti samūlataḥ ||',
      meaning:
        'Gods, demons, humans, siddhas, vidyadharas, and serpents — all those upon whom you cast your gaze are destroyed completely.',
    },
  ],
};

const siddhaKunjikaStotram: Stotra = {
  id: 'siddha-kunjika-stotram',
  title: 'Siddha Kunjika Stotram',
  subtitle: 'सिद्धकुञ्जिकास्तोत्रम्',
  deity: 'Durga',
  description:
    'A powerful hymn from the Rudrayamala Tantra containing the essence of the Durga Saptashati. Lord Shiva teaches this to Parvati, declaring that recitation of this alone bestows the complete fruit of the seven hundred verses of the Devi Mahatmya.',
  benefits: [
    'Bestows the complete fruit of reciting the Durga Saptashati',
    'Destroys all enemies and removes all diseases',
    'Grants wealth, prosperity, and spiritual liberation',
  ],
  estimatedMinutes: 5,
  icon: 'siddha-kunjika-stotram',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'शिव उवाच —\nशृणु देवि प्रवक्ष्यामि कुञ्जिकास्तोत्रमुत्तमम् ।\nयेन मन्त्रप्रभावेण चण्डीजापः शुभो भवेत् ॥',
      transliteration:
        'śiva uvāca —\nśṛṇu devi pravakṣyāmi kuñjikā-stotram-uttamam |\nyena mantra-prabhāveṇa caṇḍī-jāpaḥ śubho bhavet ||',
      meaning:
        'Lord Shiva said: Listen, O Devi, I shall tell you the supreme Kunjika Stotram, by the power of whose mantra the recitation of the Chandi becomes auspicious and fruitful.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'न कवचं नार्गलास्तोत्रं कीलकं न रहस्यकम् ।\nन सूक्तं नापि ध्यानं च न न्यासो न च वार्चनम् ॥',
      transliteration:
        'na kavacaṁ nārgalā-stotraṁ kīlakaṁ na rahasyakam |\nna sūktaṁ nāpi dhyānaṁ ca na nyāso na ca vārcanam ||',
      meaning:
        'Neither the Kavacham, nor the Argala Stotram, nor the Kilakam, nor the secret text, nor the Sukta, nor meditation, nor Nyasa, nor any worship ritual is needed.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'कुञ्जिकापाठमात्रेण दुर्गापाठफलं लभेत् ।\nअति गुह्यतरं देवि देवानामपि दुर्लभम् ॥',
      transliteration:
        'kuñjikā-pāṭha-mātreṇa durgā-pāṭha-phalaṁ labhet |\nati guhyataraṁ devi devānām-api durlabham ||',
      meaning:
        'By merely reciting the Kunjika, one obtains the fruit of the entire Durga Saptashati. This is supremely secret, O Devi, rare even for the gods.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'गोपनीयं प्रयत्नेन स्वयोनिरिव पार्वति ।\nमारणं मोहनं वश्यं स्तम्भनोच्चाटनादिकम् ॥',
      transliteration:
        'gopanīyaṁ prayatnena sva-yonir-iva pārvati |\nmāraṇaṁ mohanaṁ vaśyaṁ stambhanoccāṭanādikam ||',
      meaning:
        'This is to be kept secret with great effort, O Parvati, as one would guard one\'s own origin. It grants powers of subduing, attracting, paralyzing, and all such accomplishments.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'पाठमात्रेण संसिद्ध्येत् कुञ्जिकास्तोत्रमुत्तमम् ।\nॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ।\nॐ ग्लौं हुं क्लीं जूं सः ज्वालय ज्वालय ज्वल ज्वल प्रज्वल प्रज्वल ॥',
      transliteration:
        'pāṭha-mātreṇa saṁsiddhyet kuñjikā-stotram-uttamam |\noṁ aiṁ hrīṁ klīṁ cāmuṇḍāyai vicce |\noṁ glauṁ huṁ klīṁ jūṁ saḥ jvālaya jvālaya jvala jvala prajvala prajvala ||',
      meaning:
        'By mere recitation, this supreme Kunjika Stotram becomes accomplished. Om Aim Hrim Klim Chamundayai Vichche. Om Glaum Hum Klim Jum Sah — blaze, blaze, flame, flame, ignite, ignite!',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'ऐं ह्रीं क्लीं चामुण्डायै विच्चे ज्वल हं सं लं क्षं फट् स्वाहा ।\nइति मन्त्रं समुच्चार्य सप्तशतीं पठेत् ॥',
      transliteration:
        'aiṁ hrīṁ klīṁ cāmuṇḍāyai vicce jvala haṁ saṁ laṁ kṣaṁ phaṭ svāhā |\niti mantraṁ samuccārya saptaśatīṁ paṭhet ||',
      meaning:
        'Aim Hrim Klim Chamundayai Vichche — Blaze! Ham Sam Lam Ksham Phat Svaha! Having uttered this mantra, one should recite the Saptashati.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ।\nनमस्ते रुद्ररूपिण्यै नमस्ते मधुमर्दिनि ।\nनमः कैटभनाशिन्यै नमस्ते महिषार्दिनि ॥',
      transliteration:
        'oṁ aiṁ hrīṁ klīṁ cāmuṇḍāyai vicce |\nnamaste rudra-rūpiṇyai namaste madhu-mardini |\nnamaḥ kaiṭabha-nāśinyai namaste mahiṣārdini ||',
      meaning:
        'Om Aim Hrim Klim Chamundayai Vichche! Salutations to the one of Rudra\'s form, to the slayer of Madhu! Salutations to the destroyer of Kaitabha, to the crusher of Mahishasura!',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'नमस्ते शुम्भहन्त्र्यै च निशुम्भासुरघातिनि ।\nजाग्रतं हि महादेवि जपं सिद्धं कुरुष्व मे ॥',
      transliteration:
        'namaste śumbha-hantryai ca niśumbhāsura-ghātini |\njāgrataṁ hi mahādevi japaṁ siddhaṁ kuruṣva me ||',
      meaning:
        'Salutations to the slayer of Shumbha and the destroyer of the demon Nishumbha! O great Goddess, be awakened and make my recitation fruitful!',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'ऐङ्कारी सृष्टिरूपायै ह्रींकारी प्रतिपालिका ।\nक्लींकारी कामरूपिण्यै बीजरूपे नमोऽस्तु ते ॥',
      transliteration:
        'aiṅkārī sṛṣṭi-rūpāyai hrīṁkārī pratipālikā |\nklīṁkārī kāma-rūpiṇyai bīja-rūpe namo \'stu te ||',
      meaning:
        'She whose form is the syllable Aim is the creator, she of the syllable Hrim is the protector, she of the syllable Klim is the fulfiller of desires — salutations to you, O embodiment of the seed syllables!',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'चामुण्डा चण्डघाती च यैकारी वरदायिनी ।\nविच्चे चाभयदा नित्यं नमस्ते मन्त्ररूपिणि ॥',
      transliteration:
        'cāmuṇḍā caṇḍa-ghātī ca yaikārī vara-dāyinī |\nvicce cābhaya-dā nityaṁ namaste mantra-rūpiṇi ||',
      meaning:
        'Chamunda, the slayer of Chanda, the giver of boons through the syllable Ya, and the giver of fearlessness through the syllable Vichche — salutations to you, O embodiment of the mantra!',
    },
    {
      id: 11,
      verseLabel: 'Verse 11',
      sanskrit:
        'धां धीं धूं धूर्जटेः पत्नी वां वीं वूं वागधीश्वरी ।\nक्रां क्रीं क्रूं कालिका देवि शां शीं शूं मे शुभं कुरु ॥',
      transliteration:
        'dhāṁ dhīṁ dhūṁ dhūrjaṭeḥ patnī vāṁ vīṁ vūṁ vāgadhīśvarī |\nkrāṁ krīṁ krūṁ kālikā devi śāṁ śīṁ śūṁ me śubhaṁ kuru ||',
      meaning:
        'Dham Dhim Dhum — O consort of Shiva! Vam Vim Vum — O sovereign of speech! Kram Krim Krum — O Goddess Kalika! Sham Shim Shum — bestow auspiciousness upon me!',
    },
    {
      id: 12,
      verseLabel: 'Verse 12',
      sanskrit:
        'हुं हुं हुंकाररूपिण्यै जं जं जं जम्भनादिनि ।\nभ्रां भ्रीं भ्रूं भैरवी भद्रे भवान्यै ते नमो नमः ॥',
      transliteration:
        'huṁ huṁ huṁkāra-rūpiṇyai jaṁ jaṁ jaṁ jambhanādini |\nbhrāṁ bhrīṁ bhrūṁ bhairavī bhadre bhavānyai te namo namaḥ ||',
      meaning:
        'Hum Hum — O one whose form is the Humkara! Jam Jam Jam — O one who paralyzes! Bhram Bhrim Bhrum — O Bhairavi, O auspicious one, O Bhavani — salutations to you again and again!',
    },
    {
      id: 13,
      verseLabel: 'Verse 13',
      sanskrit:
        'अं कं चं टं तं पं यं शं वीं दुं ऐं वीं हं क्षं ।\nधिजाग्रं धिजाग्रं त्रोटय त्रोटय दीप्तं कुरु कुरु स्वाहा ॥',
      transliteration:
        'aṁ kaṁ caṁ ṭaṁ taṁ paṁ yaṁ śaṁ vīṁ duṁ aiṁ vīṁ haṁ kṣaṁ |\ndhijāgraṁ dhijāgraṁ troṭaya troṭaya dīptaṁ kuru kuru svāhā ||',
      meaning:
        'Through the seed syllables of the alphabet — awaken, awaken! Break asunder, break asunder! Make it radiant, make it radiant! Svaha!',
    },
    {
      id: 14,
      verseLabel: 'Verse 14',
      sanskrit:
        'पां पीं पूं पार्वती पूर्णा खां खीं खूं खेचरी तथा ।\nसां सीं सूं सप्तशती देव्या मन्त्रसिद्धिं कुरुष्व मे ॥',
      transliteration:
        'pāṁ pīṁ pūṁ pārvatī pūrṇā khāṁ khīṁ khūṁ khecarī tathā |\nsāṁ sīṁ sūṁ saptaśatī devyā mantra-siddhiṁ kuruṣva me ||',
      meaning:
        'Pam Pim Pum — O complete Parvati! Kham Khim Khum — O Khechari who moves through the sky! Sam Sim Sum — O Goddess of the Saptashati, grant me mantra accomplishment!',
    },
  ],
};

const indrakshiStotram: Stotra = {
  id: 'indrakshi-stotram',
  title: 'Indrakshi Stotram',
  subtitle: 'इन्द्राक्षीस्तोत्रम्',
  deity: 'Durga',
  description:
    'A sacred hymn to Goddess Indrakshi, a powerful form of Durga, transmitted through the lineage of Narayana to Narada to Indra. Contains divine names and attributes of the Goddess in the Anushtup metre, prescribed as a remedy for all diseases and calamities.',
  benefits: [
    'Cures all diseases and bestows perfect health',
    'Provides divine protection and removes all obstacles',
    'Grants longevity, happiness, and spiritual liberation',
  ],
  estimatedMinutes: 5,
  icon: 'indrakshi-stotram',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'इन्द्राक्षी नाम सा देवी देवतैः समुदाहृता ।\nगौरी शाकम्भरी देवी दुर्गानामीति विश्रुता ॥',
      transliteration:
        'indrākṣī nāma sā devī devataiḥ samudāhṛtā |\ngaurī śākambharī devī durgā-nāmīti viśrutā ||',
      meaning:
        'She is called Goddess Indrakshi by the gods. She is known as Gauri, Shakambhari, and by the celebrated name Durga.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'नित्यानन्दा निराहारा निष्कलायै नमो नमः ।\nकात्यायन्यै च विद्महे कन्यकुमार्यै धीमहि ॥',
      transliteration:
        'nityānandā nirāhārā niṣkalāyai namo namaḥ |\nkātyāyanyai ca vidmahe kanyakumāryai dhīmahi ||',
      meaning:
        'Salutations to the eternally blissful one, who needs no sustenance, who is without parts. We meditate upon Katyayani, we contemplate the virgin Goddess.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'तन्नो दुर्गा प्रचोदयात् ।\nइन्द्राक्षीं द्विभुजां देवीं पीतवस्त्रद्वयान्विताम् ॥',
      transliteration:
        'tanno durgā pracodayāt |\nindrākṣīṁ dvibhujāṁ devīṁ pītavastra-dvayānvitām ||',
      meaning:
        'May Durga inspire and guide us. I meditate upon Indrakshi, the two-armed Goddess adorned in yellow garments.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'वामहस्तेन पद्मं च दक्षिणेन सुदर्शनम् ।\nइन्द्राक्षीं सहवक्त्रां च त्रिनेत्रां च चतुर्भुजाम् ॥',
      transliteration:
        'vāma-hastena padmaṁ ca dakṣiṇena sudarśanam |\nindrākṣīṁ saha-vaktrāṁ ca tri-netrāṁ ca caturbhujām ||',
      meaning:
        'With a lotus in her left hand and the Sudarshana discus in her right — I meditate upon Indrakshi with her beautiful face, three eyes, and four arms.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'देवीं पूजयते भक्त्या हवनं वा करोति यः ।\nतस्य रोगाः प्रणश्यन्ति ये च स्युः परमदारुणाः ॥',
      transliteration:
        'devīṁ pūjayate bhaktyā havanaṁ vā karoti yaḥ |\ntasya rogāḥ praṇaśyanti ye ca syuḥ parama-dāruṇāḥ ||',
      meaning:
        'Whoever worships the Goddess with devotion or performs the fire ritual — all their diseases, even the most terrible ones, are completely destroyed.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'इति ते कथितं देवि अन्यत्किमपि ब्रूहि मे ।\nमन्त्रौषधिमयं वापि जिह्वाचालनमात्रतः ॥',
      transliteration:
        'iti te kathitaṁ devi anyat-kimapi brūhi me |\nmantrauṣadhi-mayaṁ vāpi jihvā-cālana-mātrataḥ ||',
      meaning:
        'Thus has it been told to you, O Devi. Ask me whatever else you wish. By the mere movement of the tongue chanting this mantra-medicine...',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'महामारीं महोत्पातं महाज्वरमहारुजम् ।\nस्मरणादेव तत्सर्वमाशु नश्यत्यसंशयम् ॥',
      transliteration:
        'mahā-mārīṁ mahotpātaṁ mahā-jvara-mahārujam |\nsmaraṇād-eva tat-sarvam-āśu naśyaty-asaṁśayam ||',
      meaning:
        'Great plagues, great calamities, terrible fevers, and grievous diseases — by merely remembering this stotra, all these are quickly destroyed without doubt.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'ब्रह्मा च शङ्करश्चैव विष्णुश्च विबुधेश्वराः ।\nमुनयो मनवश्चैव इन्द्राक्षीं मुनयो विदुः ॥',
      transliteration:
        'brahmā ca śaṅkaraś-caiva viṣṇuś-ca vibudheśvarāḥ |\nmunayo manavaś-caiva indrākṣīṁ munayo viduḥ ||',
      meaning:
        'Brahma, Shankara, Vishnu, and the lords of the wise — the great sages and Manus all know Indrakshi well.',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'इन्द्राक्षीं शतवारं वा सहस्रं वा पठेन्नरः ।\nसर्वे रोगाः प्रणश्यन्ति सत्यं सत्यं वदाम्यहम् ॥',
      transliteration:
        'indrākṣīṁ śata-vāraṁ vā sahasraṁ vā paṭhen-naraḥ |\nsarve rogāḥ praṇaśyanti satyaṁ satyaṁ vadāmy-aham ||',
      meaning:
        'One who recites the Indrakshi Stotram a hundred or a thousand times — all diseases are destroyed. Truly, truly, I declare this.',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'स्तवराजमिदं देवि सर्वरोगनिवारणम् ।\nमया ते कथितं गौरि सर्वमन्त्रमयं शुभम् ॥',
      transliteration:
        'stava-rājam-idaṁ devi sarva-roga-nivāraṇam |\nmayā te kathitaṁ gauri sarva-mantra-mayaṁ śubham ||',
      meaning:
        'This king of hymns, O Devi, removes all diseases. I have told you, O Gauri, this auspicious prayer that is the essence of all mantras.',
    },
  ],
};

const narayanaKavacham: Stotra = {
  id: 'narayana-kavacham',
  title: 'Narayana Kavacham',
  subtitle: 'नारायणकवचम्',
  deity: 'Vishnu',
  description:
    'A divine armor prayer from the Srimad Bhagavatam (Canto 6, Chapter 8), given by Vishvarupa to Indra. This kavacham invokes Lord Narayana and His various forms for protection of every part of the body and in all directions.',
  benefits: [
    'Provides complete divine protection like an impenetrable armor',
    'Removes fear and grants courage in all situations',
    'Bestows spiritual strength and devotion to Lord Vishnu',
  ],
  estimatedMinutes: 8,
  icon: 'narayana-kavacham',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'अङ्गान्यस्तानि सर्वाणि शिरश्चैव ललाटकम् ।\nनारायणमयं वर्म सन्नह्येद्भय आगते ॥',
      transliteration:
        'aṅgāny-astāni sarvāṇi śiraś-caiva lalāṭakam |\nnārāyaṇa-mayaṁ varma sannahyed-bhaya āgate ||',
      meaning:
        'When fear approaches, one should don the armor of Narayana which protects all limbs, the head, and the forehead.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'ॐ नमो नारायणायेति मन्त्रमर्मात्मरक्षणम् ।\nनयेन्मातृकान्यादौ न्यसेदङ्गेषु कल्पयन् ॥',
      transliteration:
        'oṁ namo nārāyaṇāyeti mantram-armātma-rakṣaṇam |\nnayen-mātṛkāny-ādau nyased-aṅgeṣu kalpayan ||',
      meaning:
        'The mantra "Om Namo Narayanaya" is the self-protecting armor. One should first assign the seed letters to the limbs of the body.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'ॐ नमो भगवते वासुदेवाय ।\nॐ ॐ पादयोः पातु ।\nनं नं जानुनोः पातु ।\nमो मो ऊर्वोः पातु ।',
      transliteration:
        'oṁ namo bhagavate vāsudevāya |\noṁ oṁ pādayoḥ pātu |\nnaṁ naṁ jānunoḥ pātu |\nmo mo ūrvoḥ pātu |',
      meaning:
        'Om Namo Bhagavate Vasudevaya. May "Om" protect the feet, may "Na" protect the knees, may "Mo" protect the thighs.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'नां नां नाभौ तु पातु मे ।\nरां रां हृदि पातु मे ।\nयं यं मुखं पातु मे ।\nणां णां शिरसि पातु मे ॥',
      transliteration:
        'nāṁ nāṁ nābhau tu pātu me |\nrāṁ rāṁ hṛdi pātu me |\nyaṁ yaṁ mukhaṁ pātu me |\nṇāṁ ṇāṁ śirasi pātu me ||',
      meaning:
        'May "Na" protect my navel, may "Ra" protect my heart, may "Ya" protect my face, may "Na" protect my head.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'प्राच्यां पातु जनार्दनः ।\nआग्नेय्यामजितः पातु ।\nदक्षिणे हयग्रीवः पातु ।\nनैरृत्यां भूतनायकः ॥',
      transliteration:
        'prācyāṁ pātu janārdanaḥ |\nāgnēyyām-ajitaḥ pātu |\ndakṣiṇe hayagrīvaḥ pātu |\nnairṛtyāṁ bhūta-nāyakaḥ ||',
      meaning:
        'May Janardana protect me in the east, may the invincible Ajita protect me in the southeast, may Hayagriva protect me in the south, may the Lord of beings protect me in the southwest.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'प्रतीच्यां पातु श्रीपतिः ।\nवायव्यां पातु विश्वात्मा ।\nउदीच्यां पातु यज्ञभुक् ।\nऐशान्यां पातु धर्मविभुः ॥',
      transliteration:
        'pratīcyāṁ pātu śrīpatiḥ |\nvāyavyāṁ pātu viśvātmā |\nudīcyāṁ pātu yajñabhuk |\naiśānyāṁ pātu dharmavibhuḥ ||',
      meaning:
        'May the Lord of Lakshmi protect me in the west, may the Soul of the Universe protect me in the northwest, may the enjoyer of sacrifices protect me in the north, may the all-pervading Lord of Dharma protect me in the northeast.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'ऊर्ध्वं पातु त्रिविक्रमः ।\nअधः पातु वामनः ।\nमत्स्यः पातु जलेष्वन्तर्यामी ।\nस्थले कूर्मो मां पातु सर्वतः ॥',
      transliteration:
        'ūrdhvaṁ pātu trivikramaḥ |\nadhaḥ pātu vāmanaḥ |\nmatsyaḥ pātu jaleṣv-antaryāmī |\nsthale kūrmo māṁ pātu sarvataḥ ||',
      meaning:
        'May Trivikrama protect me above, may Vamana protect me below. May the Fish incarnation protect me in waters as the Indweller. May the Tortoise incarnation protect me on land from all sides.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'अटव्यामपि नारसिंहः पातु ।\nमार्गे वामनको मणिः ।\nस्वप्ने चावतु गोविन्दो ।\nप्रमत्तं पातु माधवः ॥',
      transliteration:
        'aṭavyām-api nārasiṁhaḥ pātu |\nmārge vāmanako maṇiḥ |\nsvapne cāvatu govindo |\npramattaṁ pātu mādhavaḥ ||',
      meaning:
        'May Narasimha protect me in the forest. May the jewel-like Vamana protect me on the road. May Govinda protect me in sleep. May Madhava protect me when I am careless.',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'इष्टापूर्तस्य रक्षां कुर्यात् हृषीकेशः ।\nधनधान्यादिरक्षां कुर्यात् श्रीधरः ।\nपुत्रपौत्रान् रक्षतु भगवान् माधवः ।\nगोषु रक्षतु गोविन्दः ॥',
      transliteration:
        'iṣṭāpūrtasya rakṣāṁ kuryāt hṛṣīkeśaḥ |\ndhana-dhānyādi-rakṣāṁ kuryāt śrīdharaḥ |\nputra-pautrān rakṣatu bhagavān mādhavaḥ |\ngoṣu rakṣatu govindaḥ ||',
      meaning:
        'May Hrishikesha protect the merit of my rituals. May Shridhara protect my wealth and grains. May Lord Madhava protect my children and grandchildren. May Govinda protect my cattle.',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'विद्यां रक्षतु केशवः ।\nधर्मं रक्षतु धर्मपालनः ।\nवैकुण्ठः सर्वतो रक्षेत् ।\nइति नारायणकवचम् ॥',
      transliteration:
        'vidyāṁ rakṣatu keśavaḥ |\ndharmaṁ rakṣatu dharma-pālanaḥ |\nvaikuṇṭhaḥ sarvato rakṣet |\niti nārāyaṇa-kavacam ||',
      meaning:
        'May Keshava protect my learning. May the upholder of Dharma protect my righteousness. May the Lord of Vaikuntha protect me from all sides. Thus ends the Narayana Kavacham.',
    },
  ],
};

const shivaMahimnaStotram: Stotra = {
  id: 'shiva-mahimna-stotram',
  title: 'Shiva Mahimna Stotram',
  subtitle: 'शिवमहिम्नस्तोत्रम्',
  deity: 'Shiva',
  description:
    'A celebrated hymn of 43 verses by the gandharva Pushpadanta, praising the boundless glory of Lord Shiva. Composed in repentance after Pushpadanta unknowingly trespassed on sacred flowers, this stotra is revered as one of the finest expressions of devotion to Shiva.',
  benefits: [
    'Bestows deep devotion and direct experience of Shiva\'s grace',
    'Removes sins and grants spiritual purification',
    'Brings peace, wisdom, and liberation',
  ],
  estimatedMinutes: 15,
  icon: 'shiva-mahimna-stotram',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'महिम्नः पारं ते परमविदुषो यद्यसदृशी\nस्तुतिर्ब्रह्मादीनामपि तदवसन्नास्त्वयि गिरः ।\nअथाऽवाच्यः सर्वः स्वमतिपरिणामावधि गृणन्\nममाप्येष स्तोत्रे हर निरपवादः परिकरः ॥',
      transliteration:
        'mahimnaḥ pāraṁ te parama-viduṣo yady-asadṛśī\nstutir-brahmādīnām-api tad-avasannāstvayi giraḥ |\nathā\'vācyaḥ sarvaḥ svamati-pariṇāmāvadhi gṛṇan\nmamāpyeṣa stotre hara nirapavādaḥ parikaraḥ ||',
      meaning:
        'O Hara, if even the praise of Brahma and other gods falls short of Your glory, which is beyond the reach of the greatest scholars — yet everyone who praises You according to their understanding is blameless. So too is my attempt at this hymn.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'अतीतः पन्थानं तव च महिमा वाङ्मनसयोः\nअतद्व्यावृत्त्या यं चकितमभिधत्ते श्रुतिरपि ।\nस कस्य स्तोतव्यः कतिविधगुणः कस्य विषयः\nपदे त्वर्वाचीने पतति न मनः कस्य न वचः ॥',
      transliteration:
        'atītaḥ panthānaṁ tava ca mahimā vāṅmanasayoḥ\natad-vyāvṛttyā yaṁ cakitam-abhidhatte śrutir-api |\nsa kasya stotavyaḥ katividha-guṇaḥ kasya viṣayaḥ\npade tvarvācīne patati na manaḥ kasya na vacaḥ ||',
      meaning:
        'Your glory transcends the paths of speech and mind. Even the Vedas describe You only by negation — "not this, not this." Who can adequately praise You? Of how many qualities? Yet whose mind and speech does not fall at Your feet in devotion?',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'मधुस्फीता वाचः परमममृतं निर्मितवतः\nस्तव ब्रह्मन्किं वागपि सुरगुरोर्विस्मयपदम् ।\nमम त्वेतां वाणीं गुणकथनपुण्येन भवतः\nपुनामीत्यर्थेऽस्मिन् पुरमथन बुद्धिर्व्यवसिता ॥',
      transliteration:
        'madhu-sphītā vācaḥ paramam-amṛtaṁ nirmitavataḥ\nstava brahman kiṁ vāgapi suraguror-vismayapadam |\nmama tvetāṁ vāṇīṁ guṇa-kathana-puṇyena bhavataḥ\npunāmīty-arthe \'smin puramathana buddhir-vyavasitā ||',
      meaning:
        'O Brahman, for You who created honey-sweet speech and supreme nectar — is even the speech of the guru of gods a matter of wonder? O destroyer of Tripura, my resolve is this: by narrating Your virtues, I shall purify my own speech.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'तवैश्वर्यं यत्तज्जगदुदयरक्षाप्रलयकृत्\nत्रयीवस्तु व्यस्तं तिसृषु गुणभिन्नासु तनुषु ।\nअभव्यानामस्मिन् वरद रमणीयामरमणीं\nविहन्तुं व्याक्रोशीं विदधत इहैके जडधियः ॥',
      transliteration:
        'tavaiśvaryaṁ yat-taj-jagad-udaya-rakṣā-pralaya-kṛt\ntrayī-vastu vyastaṁ tisṛṣu guṇa-bhinnāsu tanuṣu |\nabhavyānām-asmin varada ramaṇīyām-aramaṇīṁ\nvihantuṁ vyākrośīṁ vidadhata ihaike jaḍadhiyaḥ ||',
      meaning:
        'O bestower of boons, Your sovereignty — which creates, preserves, and dissolves the universe, distributed among Your three forms distinguished by the gunas — is the very subject of the Vedas. Yet some dull-witted ones try to deny this delightful truth.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'किमीहः किंकायः स खलु किमुपायस्त्रिभुवनं\nकिमाधारो धाता सृजति किमुपादान इति च ।\nअतर्क्यैश्वर्ये त्वय्यनवसरदुःस्थो हतधियः\nकुतर्कोऽयं कांश्चित्मुखरयति मोहाय जगतः ॥',
      transliteration:
        'kim-īhaḥ kiṁ-kāyaḥ sa khalu kim-upāyas-tribhuvanaṁ\nkim-ādhāro dhātā sṛjati kim-upādāna iti ca |\natarkyaiśvarye tvayy-anavasara-duḥstho hatadhiyaḥ\nkutarko \'yaṁ kāṁścit-mukharayati mohāya jagataḥ ||',
      meaning:
        'What is His purpose? What is His form? What is His means? What supports the Creator as He creates the three worlds? What is His material cause? — Such futile arguments by the deluded only confuse the world, for Your glory is beyond all reasoning.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'अजन्मानो लोकाः किमवयववन्तोऽपि जगतां\nअधिष्ठातारं किं भवविधिरनादृत्य भवति ।\nअनीशो वा कुर्याद्भुवनजनने कः परिकरो\nयतो मन्दास्त्वां प्रत्यमरवर संशेरत इमे ॥',
      transliteration:
        'ajanmāno lokāḥ kim-avayavavanto \'pi jagatāṁ\nadhiṣṭhātāraṁ kiṁ bhava-vidhir-anādṛtya bhavati |\nanīśo vā kuryād-bhuvana-janane kaḥ parikaro\nyato mandās-tvāṁ pratyamara-vara saṁśerata ime ||',
      meaning:
        'Are the worlds unborn? Are they composed of parts? Can the process of creation proceed without a presiding Lord? Can a powerless being create the universe? — O best of immortals, it is about You that the dull-witted harbor such doubts.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'त्रयी साङ्ख्यं योगः पशुपतिमतं वैष्णवमिति\nप्रभिन्ने प्रस्थाने परमिदमदः पथ्यमिति च ।\nरुचीनां वैचित्र्यादृजुकुटिलनानापथजुषां\nनृणामेको गम्यस्त्वमसि पयसामर्णव इव ॥',
      transliteration:
        'trayī sāṅkhyaṁ yogaḥ paśupati-mataṁ vaiṣṇavam-iti\nprabhinnē prasthāne param-idam-adaḥ pathyam-iti ca |\nrucīnāṁ vaicitryād-ṛju-kuṭila-nānā-patha-juṣāṁ\nnṛṇām-eko gamyas-tvam-asi payasām-arṇava iva ||',
      meaning:
        'The Vedas, Sankhya, Yoga, Shaiva, Vaishnava — these different paths each claim "this alone is supreme." But just as rivers flowing by various straight and winding courses all reach the ocean, so You alone are the one destination for all people of diverse preferences.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'महोक्षः खट्वाङ्गं परशुरजिनं भस्म फणिनः\nकपालं चेतीयत्तव वरद तन्त्रोपकरणम् ।\nसुरास्तां तामृद्धिं दधति तु भवद्भूप्रणिहितां\nन हि स्वात्मारामं विषयमृगतृष्णा भ्रमयति ॥',
      transliteration:
        'mahokṣaḥ khaṭvāṅgaṁ paraśur-ajinaṁ bhasma phaṇinaḥ\nkapālaṁ cetīyat-tava varada tantropakaraṇam |\nsurāstāṁ tām-ṛddhiṁ dadhati tu bhavad-bhūpraṇihitāṁ\nna hi svātmārāmaṁ viṣaya-mṛga-tṛṣṇā bhramayati ||',
      meaning:
        'O bestower of boons, Your ritual implements are a great bull, a skull-staff, an axe, a tiger skin, ashes, serpents, and a skull bowl. The gods hold their lordly possessions only at Your behest. The mirage of worldly desires does not delude one who delights in the Self.',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'ध्रुवं कश्चित्सर्वं सकलमपरस्त्वध्रुवमिदं\nपरो ध्रौव्याध्रौव्ये जगति गदति व्यस्तविषये ।\nसमस्तेऽप्येतस्मिन् पुरमथन तैर्विस्मित इव\nस्तुवन् जिह्रेमि त्वां न खलु ननु धृष्टा मुखरता ॥',
      transliteration:
        'dhruvaṁ kaścit-sarvaṁ sakalam-aparas-tv-adhruvam-idaṁ\nparo dhrauvy-ādhrauvy-e jagati gadati vyasta-viṣaye |\nsamaste \'py-etasmin puramathana tair-vismita iva\nstuvan jihremi tvāṁ na khalu nanu dhṛṣṭā mukharatā ||',
      meaning:
        'Some say everything is eternal; others say all is transient; still others speak of both permanence and impermanence in different aspects. O destroyer of the three cities, seeing all these learned ones perplexed, I venture to praise You — is not bold speech better than silence?',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'तवैश्वर्यं यत्नाद्यदुपरि विरिञ्चिर्हरिरधः\nपरिच्छेत्तुं यातावनलमनलस्कन्धवपुषः ।\nततो भक्तिश्रद्धाभरगुरुगृणद्भ्यां गिरिश यत्\nस्वयं तस्थे ताभ्यां तव किमनुवृत्तिर्न फलति ॥',
      transliteration:
        'tavaiśvaryaṁ yatnād-yad-upari viriñcir-harir-adhaḥ\nparicchettuṁ yātāv-analam-anala-skandha-vapuṣaḥ |\ntato bhakti-śraddhā-bhara-guru-gṛṇadbhyāṁ giriśa yat\nsvayaṁ tasthe tābhyāṁ tava kim-anuvṛttir-na phalati ||',
      meaning:
        'O Lord of the mountains, when Brahma flew upward and Vishnu dug downward to find the ends of Your column of fire, they could not. Then You, pleased by their devotion and faith, revealed Yourself to them. Does not sincere devotion to You always bear fruit?',
    },
    {
      id: 11,
      verseLabel: 'Verse 11',
      sanskrit:
        'अयत्नादापाद्य त्रिभुवनमवैरव्यतिकरं\nदशास्यो यद्बाहूनभृत रणकण्डूपरवशान् ।\nशिरःपद्मश्रेणीरचितचरणाम्भोरुहबलेः\nस्थिरायास्त्वद्भक्तेस्त्रिपुरहर विस्फूर्जितमिदम् ॥',
      transliteration:
        'ayatnād-āpādya tribhuvanam-avairavyatikaraṁ\ndaśāsyo yad-bāhūn-abhṛta raṇa-kaṇḍū-paravaśān |\nśiraḥ-padma-śreṇī-racita-caraṇāmbhoruha-baleḥ\nsthirāyās-tvad-bhaktes-tripurahara visphūrjitam-idam ||',
      meaning:
        'O destroyer of Tripura, Ravana, the ten-headed, who effortlessly brought the three worlds under his sway and whose arms itched for battle — even he offered lotuses of his heads at Your lotus feet. This is the power of steadfast devotion to You.',
    },
    {
      id: 12,
      verseLabel: 'Verse 12',
      sanskrit:
        'अमुष्य त्वत्सेवासमधिगतसारं भुजवनं\nबलात्कैलासेऽपि त्वदधिवसतौ विक्रमयतः ।\nअलभ्यापातालेऽप्यलसचलितांगुष्ठशिरसि\nप्रतिष्ठा त्वय्यासीद्ध्रुवमुपचितो मुह्यति खलः ॥',
      transliteration:
        'amuṣya tvat-sevā-samadhigata-sāraṁ bhujavanaṁ\nbalāt-kailāse \'pi tvad-adhivasatau vikramayataḥ |\nalabhyā-pātāle \'py-alasa-calitāṅguṣṭha-śirasi\npratiṣṭhā tvayy-āsīd-dhruvam-upacito muhyati khalaḥ ||',
      meaning:
        'That same Ravana, whose forest of arms gained strength from worshipping You, when he forcefully tried to uproot Your Kailasa abode — by the mere lazy movement of Your toe, he could find no ground even in the netherworld. Indeed, the wicked become deluded when puffed with pride.',
    },
    {
      id: 13,
      verseLabel: 'Verse 13',
      sanskrit:
        'यदृद्धिं सुत्राम्णो वरद परमोच्चैरपि सतीं\nअधश्चक्रे बाणः परिजनविधेयत्रिभुवनः ।\nन तच्चित्रं तस्मिन् वरिवसितरि त्वच्चरणयोः\nन कस्याप्युन्नत्यै भवति शिरसस्त्वय्यवनतिः ॥',
      transliteration:
        'yad-ṛddhiṁ sutrāmṇo varada paramoccair-api satīṁ\nadhaś-cakre bāṇaḥ parijana-vidheya-tribhuvanaḥ |\nna tac-citraṁ tasmin varivasi-tari tvac-caraṇayoḥ\nna kasyāpy-unnatyai bhavati śirasas-tvayy-avanatiḥ ||',
      meaning:
        'O bestower of boons, it is no wonder that Banasura, who worshipped Your feet, made the glory of even Indra bow low, keeping the three worlds at his command. For bowing one\'s head to You never fails to bring elevation.',
    },
    {
      id: 14,
      verseLabel: 'Verse 14',
      sanskrit:
        'अकाण्डब्रह्माण्डक्षयचकितदेवासुरकृपा\nविधेयस्यासीद्यस्त्रिनयनविषं संहृतवतः ।\nस कल्माषः कण्ठे तव न कुरुते न श्रियमहो\nविकारोऽपि श्लाघ्यो भुवनभयभङ्गव्यसनिनः ॥',
      transliteration:
        'akāṇḍa-brahmāṇḍa-kṣaya-cakita-devāsura-kṛpā\nvidheyasyāsīd-yas-trinayana-viṣaṁ saṁhṛtavataḥ |\nsa kalmāṣaḥ kaṇṭhe tava na kurute na śriyam-aho\nvikāro \'pi ślāghyo bhuvana-bhaya-bhaṅga-vyasaninaḥ ||',
      meaning:
        'When the universe faced sudden destruction and gods and demons trembled, You, the three-eyed one, mercifully swallowed the poison. That dark stain on Your throat only adds to Your beauty — even a blemish is praiseworthy in one addicted to removing the fears of the world.',
    },
    {
      id: 15,
      verseLabel: 'Verse 15',
      sanskrit:
        'असिद्धार्था नैव क्वचिदपि सदेवासुरनरे\nनिवर्तन्ते नित्यं जगति जयिनो यस्य विशिखाः ।\nस पश्यन्नीश त्वामितरसुरसाधारणमभूत्\nस्मरः स्मर्तव्यात्मा न हि वशिषु पथ्यः परिभवः ॥',
      transliteration:
        'asiddhārthā naiva kvacid-api sadevāsura-nare\nnivartante nityaṁ jagati jayino yasya viśikhāḥ |\nsa paśyann-īśa tvām-itara-sura-sādhāraṇam-abhūt\nsmaraḥ smartavyātmā na hi vaśiṣu pathyaḥ paribhavaḥ ||',
      meaning:
        'O Lord, Kamadeva, whose arrows never fail and who always conquers in the world of gods, demons, and men — he treated You as an ordinary god and was burned to ashes. Insult is never good for those who have mastered their senses.',
    },
    {
      id: 16,
      verseLabel: 'Verse 16',
      sanskrit:
        'मही पादाघाताद्व्रजति सहसा संशयपदं\nपदं विष्णोर्भ्राम्यद्भुजपरिघरुग्णग्रहगणम् ।\nमुहुर्द्यौर्दौस्थ्यं यात्यनिभृतजटाताडिततटा\nजगद्रक्षायै त्वं नटसि ननु वामैव विभुता ॥',
      transliteration:
        'mahī pādāghātād-vrajati sahasā saṁśaya-padaṁ\npadaṁ viṣṇor-bhrāmyad-bhuja-parigha-rugṇa-graha-gaṇam |\nmuhur-dyaur-dausthyaṁ yāty-anibhṛta-jaṭā-tāḍita-taṭā\njagad-rakṣāyai tvaṁ naṭasi nanu vāmaiva vibhutā ||',
      meaning:
        'When You dance the Tandava, the earth trembles under Your footsteps, the heavens are disturbed by Your whirling matted locks, and the planets are shattered by Your swinging arms. Yet this fierce dance is for the protection of the world — indeed, Your power works in wondrous ways.',
    },
    {
      id: 17,
      verseLabel: 'Verse 17',
      sanskrit:
        'वियद्व्यापी तारागणगुणितफेनोद्गमरुचिः\nप्रवाहो वारां यः पृषतलघुदृष्टः शिरसि ते ।\nजगद्द्वीपाकारं जलधिवलयं तेन कृतमि-\nत्यनेनैवोन्नेयं धृतमहिम दिव्यं तव वपुः ॥',
      transliteration:
        'viyad-vyāpī tārā-gaṇa-guṇita-phenodgama-ruciḥ\npravāho vārāṁ yaḥ pṛṣata-laghu-dṛṣṭaḥ śirasi te |\njagad-dvīpākāraṁ jaladhi-valayaṁ tena kṛtam-i-\nty-anenaivonneyaṁ dhṛta-mahima divyaṁ tava vapuḥ ||',
      meaning:
        'The Ganga, whose stream spans the sky adorned with stars like foam, appears as a mere droplet on Your head. This river encircles the earth-island like an ocean belt — by this alone can one infer the divine magnitude of Your form.',
    },
    {
      id: 18,
      verseLabel: 'Verse 18',
      sanskrit:
        'रथः क्षोणी यन्ता शतधृतिरगेन्द्रो धनुरथो\nरथाङ्गे चन्द्रार्कौ रथचरणपाणिः शर इति ।\nदिधक्षोस्ते कोऽयं त्रिपुरतृणमाडम्बरविधिः\nविधेयैः क्रीडन्त्यो न खलु परतन्त्राः प्रभुधियः ॥',
      transliteration:
        'rathaḥ kṣoṇī yantā śatadhṛtir-agendro dhanur-atho\nrathāṅge candrārkau ratha-caraṇa-pāṇiḥ śara iti |\ndidhakṣos-te ko \'yaṁ tripura-tṛṇam-āḍambara-vidhiḥ\nvidheyaiḥ krīḍantyo na khalu paratantrāḥ prabhu-dhiyaḥ ||',
      meaning:
        'The earth as chariot, Brahma as charioteer, Mount Meru as bow, sun and moon as wheels, Vishnu as arrow — all this grand preparation just to burn the straw-like Tripura? The intentions of a master are not bound by the instruments — He simply plays with His creation.',
    },
    {
      id: 19,
      verseLabel: 'Verse 19',
      sanskrit:
        'हरिस्ते साहस्रं कमलबलिमाधाय पदयोः\nयदेकोने तस्मिन्निजमुदहरन्नेत्रकमलम् ।\nगतो भक्त्युद्रेकः परिणतिमसौ चक्रवपुषा\nत्रयाणां रक्षायै त्रिपुरहर जागर्ति जगताम् ॥',
      transliteration:
        'haris-te sāhasraṁ kamala-balim-ādhāya padayoḥ\nyad-ekone tasmin-nija-mudaharan-netra-kamalam |\ngato bhakty-udrekaḥ pariṇatim-asau cakra-vapuṣā\ntrayāṇāṁ rakṣāyai tripurahara jāgarti jagatām ||',
      meaning:
        'O destroyer of Tripura, when Vishnu offered a thousand lotuses at Your feet and found one missing, He plucked out His own lotus-eye to complete the offering. That excess of devotion was transformed — You gave Him the Sudarshana Chakra, which now guards the three worlds.',
    },
    {
      id: 20,
      verseLabel: 'Verse 20',
      sanskrit:
        'क्रतौ सुप्ते जाग्रत्त्वमसि फलयोगे क्रतुमतां\nक्व कर्म प्रध्वस्तं फलति पुरुषाराधनमृते ।\nअतस्त्वां सम्प्रेक्ष्य क्रतुषु फलदानप्रतिभुवं\nश्रुतौ श्रद्धां बध्वा दृढपरिकरः कर्मसु जनः ॥',
      transliteration:
        'kratau supte jāgrat-tvam-asi phala-yoge kratumataṁ\nkva karma pradhvastaṁ phalati puruṣārādhanam-ṛte |\natas-tvāṁ samprekṣya kratuṣu phala-dāna-pratibhuvaṁ\nśrutau śraddhāṁ badhvā dṛḍha-parikaraḥ karmasu janaḥ ||',
      meaning:
        'When rituals are completed, You alone remain awake to grant their fruit. Without the worship of the Supreme Being, how can mere action bear fruit? Knowing You as the guarantor of the fruits of sacrifice, people bind their faith in the Vedas and undertake rituals with determination.',
    },
    {
      id: 21,
      verseLabel: 'Verse 21',
      sanskrit:
        'क्रियादक्षो दक्षः क्रतुपतिरधीशस्तनुभृता-\nमृषीणामार्त्विज्यं शरणद सदस्याः सुरगणाः ।\nक्रतुभ्रंशस्त्वत्तः क्रतुफलविधानव्यसनिनो\nध्रुवं कर्तुः श्रद्धाविधुरमभिचाराय हि मखाः ॥',
      transliteration:
        'kriyā-dakṣo dakṣaḥ kratu-patir-adhīśas-tanubhṛtām\nṛṣīṇām-ārtvijyaṁ śaraṇada sadasyāḥ sura-gaṇāḥ |\nkratu-bhraṁśas-tvattaḥ kratu-phala-vidhāna-vyasanino\ndhruvaṁ kartuḥ śraddhā-vidhuram-abhicārāya hi makhāḥ ||',
      meaning:
        'O giver of refuge, though Daksha was skilled in rituals and lord of sacrifice, the sages were priests and the gods were the assembly — still the sacrifice failed because of You. For one who is obsessed with the fruits of sacrifice but lacks devotion, the ritual itself becomes a curse.',
    },
    {
      id: 22,
      verseLabel: 'Verse 22',
      sanskrit:
        'प्रजानाथं नाथ प्रसभमभिकं स्वां दुहितरं\nगतं रोहिद्भूतां रिरमयिषुमृष्यस्य वपुषा ।\nधनुष्पाणेर्यातं दिवमपि सपत्राकृतममुं\nत्रसन्तं तेऽद्यापि त्यजति न मृगव्याधरभसः ॥',
      transliteration:
        'prajā-nāthaṁ nātha prasabham-abhikaṁ svāṁ duhitaraṁ\ngataṁ rohid-bhūtāṁ riramayiṣum-ṛṣyasya vapuṣā |\ndhanuṣ-pāṇer-yātaṁ divam-api sapatrākṛtam-amuṁ\ntrasantaṁ te \'dyāpi tyajati na mṛga-vyādha-rabhasaḥ ||',
      meaning:
        'O Lord, when the lord of creation, assuming the form of a deer, pursued his own daughter who had become a doe — You, bow in hand, chased him even to the heavens. That fierce hunter\'s zeal has not left You even today, O Mrigavyadha.',
    },
    {
      id: 23,
      verseLabel: 'Verse 23',
      sanskrit:
        'स्वलावण्याशंसा धृतधनुषमह्नाय तृणवत्\nपुरः प्लुष्टं दृष्ट्वा पुरमथन पुष्पायुधमपि ।\nयदि स्त्रैणं देवि यमनिरतदेहार्धघटनात्\nअवैति त्वामद्धा बत वरद मुग्धा युवतयः ॥',
      transliteration:
        'svalāvaṇyāśaṁsā dhṛta-dhanuṣam-ahnāya tṛṇavat\npuraḥ pluṣṭaṁ dṛṣṭvā puramathana puṣpāyudham-api |\nyadi straiṇaṁ devi yam-anirata-dehārdha-ghaṭanāt\navaiti tvām-addhā bata varada mugdhā yuvatayaḥ ||',
      meaning:
        'O destroyer of Tripura, having burned Kamadeva to ashes like straw — if young women still think You are susceptible to feminine charm because You gave half Your body to the Goddess, then alas, how naive they are, O bestower of boons!',
    },
    {
      id: 24,
      verseLabel: 'Verse 24',
      sanskrit:
        'श्मशानेष्वाक्रीडा स्मरहर पिशाचाः सहचराः\nचिताभस्मालेपः स्रगपि नृकरोटीपरिकरः ।\nअमङ्गल्यं शीलं तव भवतु नामैवमखिलं\nतथापि स्मर्तॄणां वरद परमं मङ्गलमसि ॥',
      transliteration:
        'śmaśāneṣv-ākrīḍā smarahara piśācāḥ sahacarāḥ\ncitā-bhasmālepaḥ sragapi nṛkaroṭī-parikaraḥ |\namaṅgalyaṁ śīlaṁ tava bhavatu nāmaivam-akhilaṁ\ntathāpi smartṝṇāṁ varada paramaṁ maṅgalam-asi ||',
      meaning:
        'O destroyer of Kama, Your playground is the cremation ground, Your companions are ghosts, Your body is smeared with funeral ash, Your garland is of skulls. All this may seem inauspicious — yet for those who remember You, O bestower of boons, You are the supreme auspiciousness.',
    },
    {
      id: 25,
      verseLabel: 'Verse 25',
      sanskrit:
        'मनः प्रत्यक्चित्ते सविधमविधायात्तमरुतः\nप्रहृष्यद्रोमाणः प्रमदसलिलोत्सङ्गितदृशः ।\nयदालोक्याह्लादं ह्रद इव निमज्ज्यामृतमये\nदधत्यन्तस्तत्त्वं किमपि यमिनस्तत्किल भवान् ॥',
      transliteration:
        'manaḥ pratyak-citte savidham-avidhāyātta-marutaḥ\nprahṛṣyad-romāṇaḥ pramada-salilotsaṅgita-dṛśaḥ |\nyad-ālokyāhlādaṁ hrada iva nimajjyāmṛta-maye\ndadhatyantas-tattvaṁ kim-api yaminas-tat-kila bhavān ||',
      meaning:
        'The yogis who turn the mind inward, control the breath, feel the hair standing on end in ecstasy, and eyes brimming with tears of joy — that ineffable truth they experience within, plunging into a pool of nectar-like bliss, that indeed is You.',
    },
    {
      id: 26,
      verseLabel: 'Verse 26',
      sanskrit:
        'त्वमर्कस्त्वं सोमस्त्वमसि पवनस्त्वं हुतवहः\nत्वमापस्त्वं व्योम त्वमु धरणिरात्मा त्वमिति च ।\nपरिच्छिन्नामेवं त्वयि परिणता बिभ्रति गिरं\nन विद्मस्तत्तत्त्वं वयमिह तु यत्त्वं न भवसि ॥',
      transliteration:
        'tvam-arkas-tvaṁ somas-tvam-asi pavanas-tvaṁ hutavahaḥ\ntvam-āpas-tvaṁ vyoma tvam-u dharaṇir-ātmā tvam-iti ca |\nparicchinnām-evaṁ tvayi pariṇatā bibhrati giraṁ\nna vidmas-tat-tattvaṁ vayam-iha tu yat-tvaṁ na bhavasi ||',
      meaning:
        'You are the sun, the moon, the wind, the fire, the waters, the sky, the earth, and the Self — thus do people describe You in limited terms. But we do not know of anything that You are NOT.',
    },
    {
      id: 27,
      verseLabel: 'Verse 27',
      sanskrit:
        'त्रयीं तिस्रो वृत्तीस्त्रिभुवनमथो त्रीनपि सुरान्\nअकाराद्यैर्वर्णैस्त्रिभिरभिदधत्तीर्णविकृति ।\nतुरीयं ते धाम ध्वनिभिरवरुन्धानमणुभिः\nसमस्तं व्यस्तं त्वां शरणद गृणात्योमिति पदम् ॥',
      transliteration:
        'trayīṁ tisro vṛttīs-tribhuvanam-atho trīn-api surān\nakārādyair-varṇais-tribhir-abhidadhat-tīrṇa-vikṛti |\nturīyaṁ te dhāma dhvanibhir-avarundhānam-aṇubhiḥ\nsamastaṁ vyastaṁ tvāṁ śaraṇada gṛṇātyom-iti padam ||',
      meaning:
        'O giver of refuge, the sacred syllable Om — with its three letters A, U, M — denotes the three Vedas, the three states of consciousness, the three worlds, and the three gods. Its subtle resonance beyond the letters is Your fourth state, the Turiya. Om thus proclaims You in both wholeness and parts.',
    },
    {
      id: 28,
      verseLabel: 'Verse 28',
      sanskrit:
        'भवः शर्वो रुद्रः पशुपतिरथोग्रः सहमहान्\nतथा भीमेशानाविति यदभिधानाष्टकमिदम् ।\nअमुष्मिन्प्रत्येकं प्रविचरति देव श्रुतिरपि\nप्रियायास्मैधाम्ने प्रविहितनमस्योऽस्मि भवते ॥',
      transliteration:
        'bhavaḥ śarvo rudraḥ paśupatir-athograḥ saha-mahān\ntathā bhīmeśānāv-iti yad-abhidhānāṣṭakam-idam |\namuṣmin pratyekaṁ pravicarati deva śrutir-api\npriyāyāsmai dhāmne pravihita-namasyo \'smi bhavate ||',
      meaning:
        'Bhava, Sharva, Rudra, Pashupati, Ugra, Mahadeva, Bhima, and Ishana — these are Your eight names. The Vedas elaborate on each of these. I bow to You, the beloved Supreme abode.',
    },
    {
      id: 29,
      verseLabel: 'Verse 29',
      sanskrit:
        'नमो नेदिष्ठाय प्रियदव दविष्ठाय च नमो\nनमः क्षोदिष्ठाय स्मरहर महिष्ठाय च नमः ।\nनमो वर्षिष्ठाय त्रिनयन यविष्ठाय च नमो\nनमः सर्वस्मै ते तदिदमितिशर्वाय च नमः ॥',
      transliteration:
        'namo nediṣṭhāya priyadava daviṣṭhāya ca namo\nnamaḥ kṣodiṣṭhāya smarahara mahiṣṭhāya ca namaḥ |\nnamo varṣiṣṭhāya trinayana yaviṣṭhāya ca namo\nnamaḥ sarvasmai te tad-idam-iti-śarvāya ca namaḥ ||',
      meaning:
        'Salutations to the nearest and the farthest, to the smallest and the greatest, to the eldest and the youngest. Salutations to You who are everything, and salutations to Sharva who is "this and that."',
    },
    {
      id: 30,
      verseLabel: 'Verse 30',
      sanskrit:
        'बहलरजसे विश्वोत्पत्तौ भवाय नमो नमः\nप्रबलतमसे तत्संहारे हराय नमो नमः ।\nजनसुखकृते सत्त्वोद्रिक्तौ मृडाय नमो नमः\nप्रमहसि पदे निस्त्रैगुण्ये शिवाय नमो नमः ॥',
      transliteration:
        'bahala-rajase viśvotpattau bhavāya namo namaḥ\nprabala-tamase tat-saṁhāre harāya namo namaḥ |\njana-sukha-kṛte sattvod-riktau mṛḍāya namo namaḥ\npramahasi pade nistraiguṇye śivāya namo namaḥ ||',
      meaning:
        'Salutations to Bhava, abounding in Rajas at the creation of the universe. Salutations to Hara, predominant in Tamas at its dissolution. Salutations to Mrida, established in Sattva for the happiness of beings. And salutations to Shiva, who transcends the three Gunas in the supreme state.',
    },
    {
      id: 31,
      verseLabel: 'Verse 31',
      sanskrit:
        'कृशपरिणति चेतः क्लेशवश्यं क्व चेदं\nक्व च तव गुणसीमोल्लङ्घिनी शश्वदृद्धिः ।\nइति चकितममन्दीकृत्य मां भक्तिराधाद्\nवरद चरणयोस्ते वाक्यपुष्पोपहारम् ॥',
      transliteration:
        'kṛśa-pariṇati cetaḥ kleśa-vaśyaṁ kva cedaṁ\nkva ca tava guṇa-sīmollaṅghinī śaśvad-ṛddhiḥ |\niti cakitam-amandī-kṛtya māṁ bhaktir-ādhād\nvarada caraṇayos-te vākya-puṣpopahaaram ||',
      meaning:
        'O bestower of boons, how meager is my intellect, subject to afflictions — and how boundless is Your ever-growing glory that transcends all limits! Yet devotion, emboldening my timid self, has placed this offering of word-flowers at Your feet.',
    },
    {
      id: 32,
      verseLabel: 'Verse 32',
      sanskrit:
        'असितगिरिसमं स्यात्कज्जलं सिन्धुपात्रे\nसुरतरुवरशाखा लेखनी पत्रमुर्वी ।\nलिखति यदि गृहीत्वा शारदा सर्वकालं\nतदपि तव गुणानामीश पारं न याति ॥',
      transliteration:
        'asita-giri-samaṁ syāt-kajjalaṁ sindhu-pātre\nsura-taru-vara-śākhā lekhanī patram-urvī |\nlikhati yadi gṛhītvā śāradā sarva-kālaṁ\ntad-api tava guṇānām-īśa pāraṁ na yāti ||',
      meaning:
        'O Lord, if the dark mountain were the ink, the ocean the inkpot, the branch of the wish-fulfilling tree the pen, and the earth the writing surface — even if Goddess Saraswati wrote for all eternity, she could not reach the end of Your glories.',
    },
    {
      id: 33,
      verseLabel: 'Verse 33',
      sanskrit:
        'असुरसुरमुनीन्द्रैरर्चितस्येन्दुमौलेः\nग्रथितगुणमहिम्नो निर्गुणस्येश्वरस्य ।\nसकलगणवरिष्ठः पुष्पदन्ताभिधानः\nरुचिरमलघुवृत्तैः स्तोत्रमेतच्चकार ॥',
      transliteration:
        'asura-sura-munīndrair-arcitasyendu-mauleḥ\ngrathita-guṇa-mahimno nirguṇasyeśvarasya |\nsakala-gaṇa-variṣṭhaḥ puṣpadantābhidhānaḥ\nruciram-alaghu-vṛttaiḥ stotram-etac-cakāra ||',
      meaning:
        'Pushpadanta, the foremost among the gandharvas, composed this hymn in beautiful, exalted verses — in praise of the moon-crested Lord worshipped by demons, gods, and great sages, whose glory is woven of qualities yet who is beyond all qualities.',
    },
    {
      id: 34,
      verseLabel: 'Verse 34',
      sanskrit:
        'अहरहरनवद्यं धूर्जटेः स्तोत्रमेतत्\nपठति परमभक्त्या शुद्धचित्तः पुमान्यः ।\nस भवति शिवलोके रुद्रतुल्यस्तथाऽत्र\nप्रचुरतरधनायुः पुत्रवान्कीर्तिमांश्च ॥',
      transliteration:
        'ahar-ahar-anavadyaṁ dhūrjaṭeḥ stotram-etat\npaṭhati parama-bhaktyā śuddha-cittaḥ pumān-yaḥ |\nsa bhavati śiva-loke rudra-tulyas-tathā \'tra\npracura-tara-dhanāyuḥ putra-vān-kīrtimāṁś-ca ||',
      meaning:
        'Whoever recites this flawless hymn of the matted-haired Lord daily with supreme devotion and a pure mind — they become equal to Rudra in Shiva\'s realm, and here on earth gain abundant wealth, long life, children, and fame.',
    },
    {
      id: 35,
      verseLabel: 'Verse 35',
      sanskrit:
        'महेशान्नापरो देवो महिम्नो नापरा स्तुतिः ।\nअघोरान्नापरो मन्त्रो नास्ति तत्त्वं गुरोः परम् ॥',
      transliteration:
        'maheśān-nāparo devo mahimno nāparā stutiḥ |\naghorān-nāparo mantro nāsti tattvaṁ guroḥ param ||',
      meaning:
        'There is no god higher than Mahesha, no hymn higher than the Mahimna Stotram, no mantra higher than the Aghora, and no truth higher than the Guru.',
    },
  ],
};

const shriRudramNamakam: Stotra = {
  id: 'shri-rudram-namakam',
  title: 'Shri Rudram (Namakam)',
  subtitle: 'श्रीरुद्रप्रश्नः — नमकम्',
  deity: 'Shiva',
  description:
    'The Namakam is the first part of the Sri Rudram from the Krishna Yajurveda (Taittiriya Samhita 4.5-4.7). Consisting of 11 anuvakas, it is the most ancient and sacred Vedic hymn to Lord Rudra, offering salutations (namas) to His countless forms and aspects throughout creation.',
  benefits: [
    'Purifies body, mind, and environment through sacred Vedic vibrations',
    'Bestows protection, prosperity, and universal harmony',
    'Grants longevity, destroys sins, and leads to spiritual liberation',
  ],
  estimatedMinutes: 20,
  icon: 'shri-rudram-namakam',
  verses: [
    {
      id: 1,
      verseLabel: 'Anuvaka 1.1',
      sanskrit:
        'ॐ नमो भगवते रुद्राय ।\nनमस्ते रुद्र मन्यव उतोत इषवे नमः ।\nनमस्ते अस्तु धन्वने बाहुभ्यामुत ते नमः ॥',
      transliteration:
        'oṁ namo bhagavate rudrāya |\nnamaste rudra manyava utota iṣave namaḥ |\nnamaste astu dhanvane bāhubhyām-uta te namaḥ ||',
      meaning:
        'Om, salutations to Lord Rudra. Salutations to Your wrath and to Your arrows. Salutations to Your bow and to Your mighty arms.',
    },
    {
      id: 2,
      verseLabel: 'Anuvaka 1.2',
      sanskrit:
        'या ते रुद्र शिवा तनूरघोराऽपापकाशिनी ।\nतया नस्तनुवा शन्तमया गिरिशन्ताभिचाकशीहि ॥',
      transliteration:
        'yā te rudra śivā tanūr-aghorā \'pāpakāśinī |\ntayā nas-tanuvā śantamayā giriśantābhicākaśīhi ||',
      meaning:
        'O Rudra, that form of Yours which is auspicious, not terrible, and which reveals no sin — with that most peaceful form, O dweller of mountains, reveal Yourself to us.',
    },
    {
      id: 3,
      verseLabel: 'Anuvaka 1.3',
      sanskrit:
        'यामिषुं गिरिशन्त हस्ते बिभर्ष्यस्तवे ।\nशिवां गिरित्र तां कुरु मा हिंसीः पुरुषं जगत् ॥',
      transliteration:
        'yām-iṣuṁ giriśanta haste bibharṣy-astave |\nśivāṁ giritra tāṁ kuru mā hiṁsīḥ puruṣaṁ jagat ||',
      meaning:
        'O dweller of mountains, that arrow which You hold in Your hand to shoot — make it auspicious, O protector of the mountains. Do not harm any person or any being.',
    },
    {
      id: 4,
      verseLabel: 'Anuvaka 1.4',
      sanskrit:
        'शिवेन वचसा त्वा गिरिशाच्छा वदामसि ।\nयथा नः सर्वमिज्जगदयक्ष्मं सुमना असत् ॥',
      transliteration:
        'śivena vacasā tvā giriśācchā vadāmasi |\nyathā naḥ sarvam-ij-jagad-ayakṣmaṁ sumanā asat ||',
      meaning:
        'O dweller of mountains, we address You with auspicious words, so that the whole world may be free from disease and well-disposed toward us.',
    },
    {
      id: 5,
      verseLabel: 'Anuvaka 2.1',
      sanskrit:
        'नमो हिरण्यबाहवे सेनान्ये दिशां च पतये नमो नमो\nवृक्षेभ्यो हरिकेशेभ्यः पशूनां पतये नमो नमः ॥',
      transliteration:
        'namo hiraṇya-bāhave senānye diśāṁ ca pataye namo namo\nvṛkṣebhyo harikeśebhyaḥ paśūnāṁ pataye namo namaḥ ||',
      meaning:
        'Salutations to the golden-armed one, the leader of hosts, the lord of the directions. Salutations to the trees with green foliage, to the lord of all creatures.',
    },
    {
      id: 6,
      verseLabel: 'Anuvaka 2.2',
      sanskrit:
        'सस्पिञ्जराय त्विषीमते पथीनां पतये नमो नमो\nबभ्लुशाय विव्याधिनेऽन्नानां पतये नमो नमः ॥',
      transliteration:
        'saspiñjarāya tviṣīmate pathīnāṁ pataye namo namo\nbabhluśāya vivyādhine \'nnānāṁ pataye namo namaḥ ||',
      meaning:
        'Salutations to the tawny, radiant lord of the paths. Salutations to the brown-hued one who pierces, the lord of all food.',
    },
    {
      id: 7,
      verseLabel: 'Anuvaka 3.1',
      sanskrit:
        'नमो भवाय च रुद्राय च\nनमः शर्वाय च पशुपतये च\nनमो नीलग्रीवाय च शितिकण्ठाय च ॥',
      transliteration:
        'namo bhavāya ca rudrāya ca\nnamaḥ śarvāya ca paśupataye ca\nnamo nīlagrīvāya ca śitikaṇṭhāya ca ||',
      meaning:
        'Salutations to Bhava (existence) and to Rudra (the howler). Salutations to Sharva (the archer) and to Pashupati (lord of creatures). Salutations to the blue-necked and the white-throated one.',
    },
    {
      id: 8,
      verseLabel: 'Anuvaka 3.2',
      sanskrit:
        'नमः कपर्दिने च व्युप्तकेशाय च\nनमः सहस्राक्षाय च शतधन्वने च\nनमो गिरिशाय च शिपिविष्टाय च ॥',
      transliteration:
        'namaḥ kapardine ca vyupta-keśāya ca\nnamaḥ sahasrākṣāya ca śata-dhanvane ca\nnamo giriśāya ca śipiviṣṭāya ca ||',
      meaning:
        'Salutations to the matted-haired and the shaven-headed. Salutations to the thousand-eyed and the hundred-bowed. Salutations to the mountain-dweller and the all-pervading one.',
    },
    {
      id: 9,
      verseLabel: 'Anuvaka 4.1',
      sanskrit:
        'नमो भवस्य हेत्यै जगतां पतये नमो नमो\nरुद्रायाततविने क्षेत्राणां पतये नमो नमः ॥',
      transliteration:
        'namo bhavasya hetyai jagatāṁ pataye namo namo\nrudrāyātatavine kṣetrāṇāṁ pataye namo namaḥ ||',
      meaning:
        'Salutations to the weapon of Bhava, the lord of the worlds. Salutations to Rudra who strings his bow, the lord of the fields.',
    },
    {
      id: 10,
      verseLabel: 'Anuvaka 5.1',
      sanskrit:
        'नमो भवाय च रुद्राय च\nनमः शर्वाय च पशुपतये च\nनम ईशानाय च भगवते च ॥',
      transliteration:
        'namo bhavāya ca rudrāya ca\nnamaḥ śarvāya ca paśupataye ca\nnama īśānāya ca bhagavate ca ||',
      meaning:
        'Salutations to Bhava and Rudra. Salutations to Sharva and Pashupati. Salutations to Ishana (the ruler) and to Bhagavan (the glorious one).',
    },
  ],
};

const dakshinamurthyStotram: Stotra = {
  id: 'dakshinamurthy-stotram',
  title: 'Dakshinamurthy Stotram',
  subtitle: 'दक्षिणामूर्तिस्तोत्रम्',
  deity: 'Shiva',
  description:
    'Ten verses by Adi Shankaracharya in praise of Lord Dakshinamurthy, the south-facing form of Shiva who is the supreme Guru. The hymn presents the Advaita Vedanta philosophy — that the entire universe is a projection of consciousness, like a city seen in a mirror or a dream.',
  benefits: [
    'Bestows clarity of philosophical understanding and self-knowledge (Atma-jnana)',
    'Invokes the grace of Dakshinamurthy, the primordial Guru who teaches through silence',
    'Dispels the veil of Maya and reveals the non-dual nature of reality',
  ],
  estimatedMinutes: 5,
  icon: 'M16 4 L16 14 M13 8 L19 8',
  verses: [
    {
      id: 1,
      verseLabel: 'Verse 1',
      sanskrit:
        'विश्वं दर्पणदृश्यमाननगरीतुल्यं निजान्तर्गतं\nपश्यन्नात्मनि मायया बहिरिवोद्भूतं यथा निद्रया।\nयः साक्षात्कुरुते प्रबोधसमये स्वात्मानमेवाद्वयं\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये॥',
      transliteration:
        'viśvaṁ darpaṇa-dṛśyamāna-nagarī-tulyaṁ nijāntar-gataṁ\npaśyann-ātmani māyayā bahir-ivodbhūtaṁ yathā nidrayā |\nyaḥ sākṣāt-kurute prabodha-samaye svātmānam-evādvayaṁ\ntasmai śrī-guru-mūrtaye nama idaṁ śrī-dakṣiṇā-mūrtaye ||',
      meaning:
        'The universe, like a city reflected in a mirror, appears to exist outside though it is within one\'s own self, projected by Maya as if in a dream. He who, at the time of awakening, realizes the non-dual Self — to that embodiment of the Guru, Sri Dakshinamurthy, I offer this salutation.',
    },
    {
      id: 2,
      verseLabel: 'Verse 2',
      sanskrit:
        'बीजस्यान्तरिवाङ्कुरो जगदिदं प्राङ्निर्विकल्पं पुनर्-\nमायाकल्पितदेशकालकलनावैचित्र्यचित्रीकृतम्।\nमायावीव विजृम्भयत्यपि महायोगीव यः स्वेच्छया\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये॥',
      transliteration:
        'bījasyāntar-ivāṅkuro jagad-idaṁ prāṅ-nirvikalpaṁ punar-\nmāyā-kalpita-deśa-kāla-kalanā-vaicitrya-citrī-kṛtam |\nmāyāvīva vijṛmbhayaty-api mahā-yogīva yaḥ svecchayā\ntasmai śrī-guru-mūrtaye nama idaṁ śrī-dakṣiṇā-mūrtaye ||',
      meaning:
        'Like a sprout latent within a seed, this universe existed in an undifferentiated state, then was made variegated through Maya\'s conjuring of space, time, and diverse forms. He who, like a great magician or supreme yogi, manifests all this by His own will — to that Sri Dakshinamurthy, I bow.',
    },
    {
      id: 3,
      verseLabel: 'Verse 3',
      sanskrit:
        'यस्यैव स्फुरणं सदात्मकमसत्कल्पार्थकं भासते\nसाक्षात्तत्त्वमसीति वेदवचसा यो बोधयत्याश्रितान्।\nयत्साक्षात्करणाद्भवेन्न पुनरावृत्तिर्भवाम्भोनिधौ\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये॥',
      transliteration:
        'yasyaiva sphuraṇaṁ sadātmakam-asat-kalpārtha-kaṁ bhāsate\nsākṣāt-tattvam-asīti veda-vacasā yo bodhayaty-āśritān |\nyat-sākṣāt-karaṇād-bhaven-na punar-āvṛttir-bhavāmbho-nidhau\ntasmai śrī-guru-mūrtaye nama idaṁ śrī-dakṣiṇā-mūrtaye ||',
      meaning:
        'He whose luminous presence alone, being of the nature of existence, makes the unreal appear as real, and who instructs seekers through the Vedic declaration "Thou art That" — by directly realizing whom, there is no return to the ocean of worldly existence — to that Sri Dakshinamurthy, I bow.',
    },
    {
      id: 4,
      verseLabel: 'Verse 4',
      sanskrit:
        'नानाच्छिद्रघटोदरस्थितमहादीपप्रभाभास्वरं\nज्ञानं यस्य तु चक्षुरादिकरणद्वारा बहिः स्पन्दते।\nजानामीति तमेव भान्तमनुभात्येतत्समस्तं जगत्\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये॥',
      transliteration:
        'nānā-cchidra-ghaṭodara-sthita-mahā-dīpa-prabhā-bhāsvaraṁ\njñānaṁ yasya tu cakṣur-ādi-karaṇa-dvārā bahiḥ spandate |\njānāmīti tam-eva bhāntam-anubhāty-etat-samastaṁ jagat\ntasmai śrī-guru-mūrtaye nama idaṁ śrī-dakṣiṇā-mūrtaye ||',
      meaning:
        'Like the radiance of a great lamp placed inside a pot with many holes, His consciousness shines outward through the doors of the senses — eyes and other organs. "I know" — by His light alone this entire universe shines after Him — to that Sri Dakshinamurthy, I bow.',
    },
    {
      id: 5,
      verseLabel: 'Verse 5',
      sanskrit:
        'देहं प्राणमपीन्द्रियाण्यपि चलां बुद्धिं च शून्यं विदुः\nस्त्रीबालान्धजडोपमास्त्वहमिति भ्रान्ता भृशं वादिनः।\nमायाशक्तिविलासकल्पितमहाव्यामोहसंहारिणे\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये॥',
      transliteration:
        'dehaṁ prāṇam-apīndriyāṇy-api calāṁ buddhiṁ ca śūnyaṁ viduḥ\nstrī-bālāndha-jaḍopamās-tv-aham-iti bhrāntā bhṛśaṁ vādinaḥ |\nmāyā-śakti-vilāsa-kalpita-mahā-vyāmoha-saṁhāriṇe\ntasmai śrī-guru-mūrtaye nama idaṁ śrī-dakṣiṇā-mūrtaye ||',
      meaning:
        'Those who, like women, children, the blind, and the dull, confusedly identify the Self with the body, vital airs, senses, fickle intellect, or the void — to Him who destroys the great delusion conjured by the play of Maya\'s power — to that Sri Dakshinamurthy, I bow.',
    },
    {
      id: 6,
      verseLabel: 'Verse 6',
      sanskrit:
        'राहुग्रस्तदिवाकरेन्दुसदृशो मायासमाच्छादनात्\nसन्मात्रः करणोपसंहरणतो योऽभूत्सुषुप्तः पुमान्।\nप्रागस्वाप्समिति प्रबोधसमये यः प्रत्यभिज्ञायते\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये॥',
      transliteration:
        'rāhu-grasta-divākara-indu-sadṛśo māyā-samācchādanāt\nsan-mātraḥ karaṇopa-saṁharaṇato yo \'bhūt-suṣuptaḥ pumān |\nprāg-asvāpsam-iti prabodha-samaye yaḥ pratyabhijñāyate\ntasmai śrī-guru-mūrtaye nama idaṁ śrī-dakṣiṇā-mūrtaye ||',
      meaning:
        'Like the sun or moon eclipsed by Rahu, when veiled by Maya and with senses withdrawn, the Self in deep sleep remains as pure existence. Upon waking, one recognizes "I slept before" — to Him who is that Self recognized upon awakening — to that Sri Dakshinamurthy, I bow.',
    },
    {
      id: 7,
      verseLabel: 'Verse 7',
      sanskrit:
        'बाल्यादिष्वपि जाग्रदादिषु तथा सर्वास्ववस्थासु अपि\nव्यावृत्तास्वनुवर्तमानमहमित्यन्तःस्फुरन्तं सदा।\nस्वात्मानं प्रकटीकरोति भजतां यो मुद्रया भद्रया\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये॥',
      transliteration:
        'bālyādiṣv-api jāgrad-ādiṣu tathā sarvāsv-avasthāsu api\nvyāvṛttāsv-anuvartamānam-aham-ity-antaḥ-sphurantaṁ sadā |\nsvātmānaṁ prakaṭī-karoti bhajatāṁ yo mudrayā bhadrayā\ntasmai śrī-guru-mūrtaye nama idaṁ śrī-dakṣiṇā-mūrtaye ||',
      meaning:
        'Through childhood and other stages of life, through waking and other states, across all changing conditions, the sense of "I" persists and shines within. He who reveals this Self to seekers through the auspicious chin-mudra — to that Sri Dakshinamurthy, I bow.',
    },
    {
      id: 8,
      verseLabel: 'Verse 8',
      sanskrit:
        'विश्वं पश्यति कार्यकारणतया स्वस्वामिसम्बन्धतः\nशिष्याचार्यतया तथैव पितृपुत्राद्यात्मना भेदतः।\nस्वप्ने जाग्रति वा य एष पुरुषो मायापरिभ्रामितः\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये॥',
      transliteration:
        'viśvaṁ paśyati kārya-kāraṇatayā sva-svāmi-sambandha-taḥ\nśiṣyācāryatayā tathaiva pitṛ-putrādyātmanā bhedataḥ |\nsvapne jāgrati vā ya eṣa puruṣo māyā-paribhrāmitaḥ\ntasmai śrī-guru-mūrtaye nama idaṁ śrī-dakṣiṇā-mūrtaye ||',
      meaning:
        'He who sees the universe through relations of cause and effect, master and servant, teacher and student, father and son — perceiving difference and distinction whether in dream or waking, deluded by Maya — to that Sri Dakshinamurthy who reveals the truth beyond, I bow.',
    },
    {
      id: 9,
      verseLabel: 'Verse 9',
      sanskrit:
        'भूरम्भांस्यनलोऽनिलोऽम्बरमहर्नाथो हिमांशुः पुमान्\nइत्याभाति चराचरात्मकमिदं यस्यैव मूर्त्यष्टकम्।\nनान्यत्किञ्चन विद्यते विमृशतां यस्मात्परस्माद्विभोः\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये॥',
      transliteration:
        'bhūr-ambhāṁsy-analo \'nilo \'mbaram-ahar-nātho himāṁśuḥ pumān\nity-ābhāti carācara-ātmakam-idaṁ yasyaiva mūrty-aṣṭakam |\nnānyat-kiñcana vidyate vimṛśatāṁ yasmāt-parasmād-vibhoḥ\ntasmai śrī-guru-mūrtaye nama idaṁ śrī-dakṣiṇā-mūrtaye ||',
      meaning:
        'Earth, water, fire, air, sky, the sun, the moon, and the individual soul — this eightfold manifest form constituting all moving and unmoving beings is His alone. Upon inquiry, nothing exists apart from that Supreme, all-pervading Lord — to that Sri Dakshinamurthy, I bow.',
    },
    {
      id: 10,
      verseLabel: 'Verse 10',
      sanskrit:
        'सर्वात्मत्वमिति स्फुटीकृतमिदं यस्मादमुष्मिन् स्तवे\nतेनास्य श्रवणात्तदर्थमननाद्ध्यानाच्च सङ्कीर्तनात्।\nसर्वात्मत्वमहाविभूतिसहितं स्यादीश्वरत्वं स्वतः\nसिद्ध्येत्तत्पुनरष्टधा परिणतं चैश्वर्यमव्याहतम्॥',
      transliteration:
        'sarvātmatvam-iti sphuṭī-kṛtam-idaṁ yasmād-amuṣmin stave\ntenāsya śravaṇāt-tad-artha-mananād-dhyānāc-ca saṅkīrtanāt |\nsarvātmatva-mahā-vibhūti-sahitaṁ syād-īśvaratvaṁ svataḥ\nsiddhyet-tat-punar-aṣṭadhā pariṇataṁ caiśvaryam-avyāhatam ||',
      meaning:
        'Since the truth of the Self being all has been made clear in this hymn, by hearing it, reflecting on its meaning, meditating upon it, and chanting it, one naturally attains the sovereignty of the Self with its great glory — the eightfold unobstructed divine powers arise of their own accord.',
    },
  ],
};

export const stotras: Stotra[] = [
  achyutashtakam,
  adityaHridayaStotram,
  annapoornaAshtakam,
  argalaStotram,
  ashtalakshmiStotram,
  bhajaGovindam,
  bilvashtakam,
  dakshinamurthyStotram,
  damodarashtakam,
  dasharathaShaniStotram,
  ganeshaPancharatnam,
  guruAshtakam,
  hanumanChalisa,
  indrakshiStotram,
  kalabhairavaAshtakam,
  kanikadharaStotram,
  lingashtakam,
  madhurashtakam,
  mahalakshmiAshtakam,
  mahishasuraMardiniStotram,
  narasimhaKaravalambaStotram,
  narayanaKavacham,
  nirvanaShatakam,
  pandurangashtakam,
  ramRakshaStotra,
  sankataNashanaGaneshaStotram,
  saraswatiStotram,
  shivaMahimnaStotram,
  shivaPanchakshara,
  shriRudramNamakam,
  shivaTandavaStotram,
  shivaAshtottara,
  siddhaKunjikaStotram,
  subrahmanyaBhujangam,
  subramanyaAshtakam,
  sudarshanaAshtakam,
  venkateswaraSuprabhatam,
  vishnuSahasranamam,
];

export interface ComingSoonStotra {
  id: string;
  title: string;
  deity: string;
}

export const comingSoonStotras: ComingSoonStotra[] = [
  {
    id: 'lalitha-sahasranamam',
    title: 'Lalitha Sahasranamam',
    deity: 'Lalita Tripurasundari',
  },
];
