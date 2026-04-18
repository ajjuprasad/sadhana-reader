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
        "Nakṣatra-graha-tārāṇām adhipo viśvabhāvanaḥ.\nTejasām api tejasvī dvādaśātman namo'stu te.",
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
  ],
};

export const stotras: Stotra[] = [
  adityaHridayaStotram,
  bhajaGovindam,
  ganeshaPancharatnam,
  hanumanChalisa,
  lingashtakam,
  madhurashtakam,
  mahalakshmiAshtakam,
  shivaPanchakshara,
  saraswatiStotram,
  shivaAshtottara,
  subrahmanyaBhujangam,
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
  {
    id: 'mahishasura-mardini-stotram',
    title: 'Mahishasura Mardini Stotram',
    deity: 'Durga',
  },
  {
    id: 'ram-raksha-stotra',
    title: 'Ram Raksha Stotra',
    deity: 'Rama',
  },
  {
    id: 'kanakadhara-stotram',
    title: 'Kanakadhara Stotram',
    deity: 'Lakshmi',
  },
  {
    id: 'ashtalakshmi-stotram',
    title: 'Ashtalakshmi Stotram',
    deity: 'Ashtalakshmi',
  },
];
