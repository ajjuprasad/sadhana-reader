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
      sanskrit: 'महावीर विक्रम बजरंगी��\nकुमति निवार सुमति के संगी॥',
      transliteration: 'Mahaveer Vikram Bajrangi.\nKumati Nivaar Sumati Ke Sangi.',
      meaning: 'O great hero of tremendous valour with a body hard as a thunderbolt, you dispel evil thoughts and are the companion of good wisdom.',
    },
    {
      id: 6,
      verseLabel: 'Chaupai 4',
      sanskrit: 'कंचन बरन बिराज सुब��सा।\nकानन कुंडल कुंचित केसा॥',
      transliteration: 'Kanchan Baran Biraaj Subesa.\nKanan Kundal Kunchit Kesa.',
      meaning: 'Golden-complexioned and splendidly adorned, you wear earrings and have curly hair.',
    },
    {
      id: 7,
      verseLabel: 'Chaupai 5',
      sanskrit: 'हाथ बज्र औ ��्वजा बिराजै।\nकाँधे मूँज जनेऊ साज��॥',
      transliteration: 'Hath Bajra Aur Dhvaja Birajai.\nKandhe Moonj Janeu Sajai.',
      meaning: 'In your hands shine the thunderbolt and the flag, and on your shoulder is the sacred thread of munja grass.',
    },
    {
      id: 8,
      verseLabel: 'Chaupai 6',
      sanskrit: 'शंकर सु���न केसरीनंदन।\nतेज प्रताप महा जग ��ंदन॥',
      transliteration: 'Shankar Suvan Kesari Nandan.\nTej Pratap Maha Jag Vandan.',
      meaning: 'Incarnation of Shiva and son of Kesari, your radiance and might are revered throughout the world.',
    },
    {
      id: 9,
      verseLabel: 'Chaupai 7',
      sanskrit: 'विद्यावान गुनी अति ��ातुर।\nराम काज करिबे को आतुर॥',
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
      sanskrit: 'सूक्ष्म र���प धर��� सियहिं दिखावा।\nविकट रूप धरि लंक जरावा॥',
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
      sanskrit: 'लाय सजीवन लखन जियाये।\nश्रीरघुवीर हरषि उ�� लाये॥',
      transliteration: 'Laay Sajivan Lakhan Jiyaye.\nShri Raghuveer Harashi Ur Laaye.',
      meaning: 'Bringing the Sanjeevani herb, you revived Lakshmana. Shri Rama embraced you with great joy.',
    },
    {
      id: 14,
      verseLabel: 'Chaupai 12',
      sanskrit: 'रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्���िय भरतहि सम भाई॥',
      transliteration: 'Raghupati Keenhi Bahut Badai.\nTum Mama Priya Bharatahi Sam Bhai.',
      meaning: 'Raghupati (Rama) praised you greatly, saying: You are as dear to me as my brother Bharata.',
    },
  ],
};

const ganeshaPancharatnam: Stotra = {
  id: 'ganesha-pancharatnam',
  title: 'Ganesha Pancharatnam',
  subtitle: 'गणेश पञ्चरत्नम्',
  deity: 'Ganesha',
  description: 'Five gems in praise of Lord Ganesha, composed by Adi Shankaracharya.',
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

export const stotras: Stotra[] = [
  hanumanChalisa,
  ganeshaPancharatnam,
  shivaPanchakshara,
  mahalakshmiAshtakam,
  lingashtakam,
  madhurashtakam,
];
