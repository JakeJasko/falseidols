// The Four False Idols Diagnostic Framework
// Based on Arthur Brooks' synthesis of St. Thomas Aquinas (Summa Theologiae)

export const IDOLS = {
  money: {
    id: 'money',
    name: 'Money',
    latinName: 'Divitiae',
    subtitle: 'The Idol of Insulation & Resource Accumulation',
    archetype: 'The Sovereign Accumulator',
    accentColor: '#2D6A4F', // Deep spruce / forest green
    accentBg: '#EAF3EC',
    darkAccentColor: '#52B788',
    iconName: 'Coins',
    symbol: '⚖️',
    quote: '"Wealth is like sea-water; the more we drink, the thirstier we become."',
    quoteAuthor: 'Arthur C. Brooks (quoting Schopenhauer)',
    aquinasTeaching: 'Thomas Aquinas observed that wealth is merely an instrumental good—it exists solely to be traded for other things. When pursued as an ultimate end, it generates endless vigilance and zero intrinsic peace.',
    corePromise: 'Absolute autonomy and complete insulation from life’s contingencies.',
    underlyingFear: 'Scarcity, vulnerability, and being forced to accept terms dictated by others.',
    theTrap: 'The "Satisfaction Treadmill": Every increment of net worth shifts the threshold of what feels safe. Joy is rapidly replaced by the dread of market drawdowns or erosion.',
    blindSpot: 'You frequently evaluate relationships, career moves, and time expenditure strictly through cost-benefit ratios and financial return, starving your life of spontaneous, non-monetizable joy.',
    brooksPrescription: {
      virtue: 'Radical Generosity & Deliberate Detachment',
      actionableHabits: [
        'Set an explicit "Enough" ceiling for your capital reserves; commit any surplus beyond it to direct giving or community investment.',
        'Practice giving anonymously: experience the clean joy of relinquishing resources without acquiring reputational dividends.',
        'Regularly spend money on shared experiences with family and friends rather than accumulating balance-sheet insulation.'
      ],
      pillarAlignment: 'Invest heavily in Friendship & Family: true security is found in people who love you regardless of your ledger.'
    }
  },

  power: {
    id: 'power',
    name: 'Power',
    latinName: 'Potestas',
    subtitle: 'The Idol of Control & Architectural Agency',
    archetype: 'The Unilateral Sovereign',
    accentColor: '#364F6B', // Imperial slate / deep navy
    accentBg: '#EBF1F7',
    darkAccentColor: '#7E9CC7',
    iconName: 'Crown',
    symbol: '🏛️',
    quote: '"The appetite for control expands exponentially with every decision you monopolize."',
    quoteAuthor: 'Arthur C. Brooks',
    aquinasTeaching: 'Aquinas noted that power is simply the capacity to produce an effect. It is morally neutral and entirely contingent on the end toward which it is directed. When power is sought for itself, it breeds paranoia and tyranny.',
    corePromise: 'Agency over reality: ensuring no one can overrule your vision or subject you to incompetence.',
    underlyingFear: 'Helplessness, being at the mercy of arbitrary authorities, and losing the reins of your destiny.',
    theTrap: 'The "Fortress of Distrust": As your control grows, so does your conviction that no one else can execute with your standards. Delegating feels like dereliction, turning authority into a solitary prison.',
    blindSpot: 'You may mistake submission or obedience from colleagues and loved ones for genuine loyalty and respect. You struggle with being truly vulnerable.',
    brooksPrescription: {
      virtue: 'Subsidiarity & Servant Leadership',
      actionableHabits: [
        'Practice deliberate yielding: deliberately let others make final calls on decisions where you possess strong opinions.',
        'Shift your primary metric of success from "How many outcomes did I dictate?" to "How many autonomous leaders did I empower?"',
        'Confess a real weakness or uncertainty in your next high-stakes briefing to shatter the armor of infallibility.'
      ],
      pillarAlignment: 'Shift drive toward Service: direct your formidable executive horsepower toward advancing others who can offer you zero leverage in return.'
    }
  },

  pleasure: {
    id: 'pleasure',
    name: 'Pleasure',
    latinName: 'Voluptas',
    subtitle: 'The Idol of Frictionless Delight & Sensory Comfort',
    archetype: 'The Refined Epicurean',
    accentColor: '#9C3D54', // Vintage wine / terracotta rose
    accentBg: '#F8ECF0',
    darkAccentColor: '#E2738D',
    iconName: 'Sparkles',
    symbol: '🍷',
    quote: '"The pursuit of pure comfort paradoxically narrows the soul and lowers your threshold for joy."',
    quoteAuthor: 'Arthur C. Brooks',
    aquinasTeaching: 'Aquinas explained that pleasure is the natural resting state of having attained some genuine good. Treating sensory pleasure itself as the ultimate destination short-circuits moral growth and leads to numbness.',
    corePromise: 'A serene existence untroubled by physical distress, emotional confrontation, or grueling toil.',
    underlyingFear: 'Prolonged suffering, acute physical or mental friction, and relentless sensory deprivation.',
    theTrap: 'The "Satiety Cliff" (Hedonic Adaptation): The neurochemical receptors of comfort down-regulate rapidly. The luxury resort or vintage wine that dazzled last year becomes the baseline of expectation today.',
    blindSpot: 'You frequently avoid necessary, productive conflict or strenuous discipline because the immediate unpleasantness feels unbearable, stunting your long-term creative resilience.',
    brooksPrescription: {
      virtue: 'Voluntary Asceticism & Constructive Hardship',
      actionableHabits: [
        'Choose a daily physical discipline (e.g., rigorous cold exposure, endurance exercise, or strict fasting) to expand your distress tolerance.',
        'Engage directly with the unpleasant conversation or tedious task you have been evading through comfort distractions.',
        'Dedicate one weekend per month to austere simplicity: no luxury dining, minimal screens, and quiet contemplative reading.'
      ],
      pillarAlignment: 'Ground yourself in Faith / Philosophy: cultivate a transcendent conviction that real meaning is forged through suffering well, not fleeing discomfort.'
    }
  },

  fame: {
    id: 'fame',
    name: 'Fame & Honor',
    latinName: 'Gloria / Honor',
    subtitle: 'The Idol of Public Validation & Peer Esteem',
    archetype: 'The Celebrated Virtuoso',
    accentColor: '#B06818', // Burnished amber / warm ochre
    accentBg: '#F9F2E7',
    darkAccentColor: '#F4B251',
    iconName: 'Award',
    symbol: '🌟',
    quote: '"Honor exists in the mind of the person giving it, not the person receiving it. To live for applause is to place your soul in a stranger’s hands."',
    quoteAuthor: 'Arthur C. Brooks',
    aquinasTeaching: 'Aquinas warned that honor is merely the outward sign of someone else’s appreciation of your virtue. If you seek honor directly, you become an actor perpetually terrified of the audience walking out.',
    corePromise: 'Permanent social significance, historical remembrance, and unambiguous validation of your worth.',
    underlyingFear: 'Obscurity, being considered mediocre or ordinary, and public humiliation.',
    theTrap: 'The "Audience Captivity": You become incapable of enjoying an accomplishment unless it is observed, validated, or cheered by peers. Your self-worth becomes a volatile commodity traded on other people’s attention.',
    blindSpot: 'You curate your public persona so meticulously that your closest loved ones rarely encounter the genuine, unvarnished human underneath the pedestal.',
    brooksPrescription: {
      virtue: 'The Inner Scorecard & Quiet Love',
      actionableHabits: [
        'Perform major acts of excellence or kindness with strict confidentiality: tell no one, post nothing, and let the act remain hidden.',
        'Schedule a 48-hour total digital blackout each month: disconnect from metrics, likes, citations, and audience feedback.',
        'Practice praising peers publicly when they succeed in areas where you personally compete or desire recognition.'
      ],
      pillarAlignment: 'Anchor in Deep Relationships: nurture a small circle of friends who knew you before your achievements and who love you when you fail.'
    }
  }
};

export const FOUR_PILLARS = [
  {
    title: 'Faith / Philosophy',
    description: 'A transcendent framework greater than yourself. Engaging with timeless philosophical wisdom or spiritual discipline to transcend the ego.',
    icon: 'Compass'
  },
  {
    title: 'Family',
    description: 'Unconditional love and kinship. People bound by deep commitment where affection is an enduring duty, not an exchange of utility.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Friendship',
    description: 'Aristotelian "real friendships"—alliances of virtue where you seek each other’s moral and emotional good, rather than transactional deals.',
    icon: 'Users'
  },
  {
    title: 'Meaningful Work',
    description: 'Work pursued not for the idols of acclaim or hoard, but for the quiet dignity of creating value and serving others selflessly.',
    icon: 'Sparkle'
  }
];

export const SCENARIOS = [
  {
    id: 1,
    chapter: 'I',
    category: 'Resource Allocation',
    title: 'The Sudden Windfall',
    scenario: 'You unexpectedly inherit an eight-figure sum after taxes. All previous debts and basic family obligations are fully resolved. How do you deploy the bulk of this windfall?',
    options: [
      {
        idol: 'money',
        title: 'The Permanent Fortress',
        description: 'Lock it into an ironclad capital-preservation trust. The compounding yield guarantees you and your descendants are permanently insulated from any conceivable economic catastrophe.'
      },
      {
        idol: 'power',
        title: 'The Strategic Leverage',
        description: 'Acquire decisive controlling stakes in emerging companies or civic institutions, giving you direct voting power over board appointments and long-term organizational strategy.'
      },
      {
        idol: 'pleasure',
        title: 'The Epicurean Sanctuary',
        description: 'Secure a private, sunlit estate in Kyoto or Provence, equipped with master culinary facilities, spa grounds, and endless unhurried days dedicated to peace and sensory delight.'
      },
      {
        idol: 'fame',
        title: 'The Enduring Monolith',
        description: 'Endow a flagship research center or prestigious national prize bearing your family name, ensuring lasting public distinction and universal admiration across future generations.'
      }
    ]
  },
  {
    id: 2,
    chapter: 'II',
    category: 'Career & Ambition',
    title: 'The Four Paths',
    scenario: 'At the zenith of your creative energy, four distinct leadership opportunities present themselves. All carry respectable status, but each emphasizes a different horizon. Which do you choose?',
    options: [
      {
        idol: 'fame',
        title: 'The Public Luminary',
        description: 'A marquee speaking residency and high-visibility media platform where your books and keynotes are broadcast to an audience of millions worldwide.'
      },
      {
        idol: 'power',
        title: 'The Turnaround Commander',
        description: 'Chief executive officer of a distressed 5,000-person institution with sweeping unilateral authority to reshape operations, hire, fire, and enact your singular vision.'
      },
      {
        idol: 'money',
        title: 'The Capital Syndicate',
        description: 'Senior partner in a discreet private equity syndicate with enormous carried interest, guaranteeing tens of millions in net equity within five years.'
      },
      {
        idol: 'pleasure',
        title: 'The Frictionless Advisory',
        description: 'A 20-hour-a-week boutique advisory post: first-class global travel, five-star accommodations, zero administrative drudgery, and four months of paid sabbatical.'
      }
    ]
  },
  {
    id: 3,
    chapter: 'III',
    category: 'Underlying Anxiety',
    title: 'The 3:00 AM Dread',
    scenario: 'You wake up in the dead of night startled by an acute, gut-wrenching anxiety. If you listen closely to your deepest vulnerability, what terror is speaking?',
    options: [
      {
        idol: 'money',
        title: 'Financial Evaporation',
        description: 'The specter of an unforeseen macro collapse or catastrophic legal liability liquidating your reserves, leaving you financially stranded.'
      },
      {
        idol: 'fame',
        title: 'Public Disgrace',
        description: 'The horror of a humiliating blunder or exposure, watching peers dismiss you as an overrated fraud or gossiping behind your back.'
      },
      {
        idol: 'power',
        title: 'Subjugation & Impotence',
        description: 'The claustrophobia of finding yourself trapped under an arbitrary superior, forced to carry out irrational decrees with zero say in the outcome.'
      },
      {
        idol: 'pleasure',
        title: 'Unrelenting Grinding Agony',
        description: 'The prospect of entering months of acute chronic pain, sleep deprivation, physical deterioration, and inescapable daily distress.'
      }
    ]
  },
  {
    id: 4,
    chapter: 'IV',
    category: 'Unconscious Envy',
    title: 'The Bitter Mirror',
    scenario: 'You observe a former classmate whose trajectory strikes an uncomfortable nerve of envy. Whose current reality sparks that private sting of jealousy?',
    options: [
      {
        idol: 'pleasure',
        title: 'The Carefree Sybarite',
        description: 'The friend who never works past 3:00 PM, sleeps nine hours, frequents world-class restaurants, and glides through life in effortless, vibrant comfort.'
      },
      {
        idol: 'power',
        title: 'The Silent Kingmaker',
        description: 'The behind-the-scenes operator whose quiet telephone calls alter policy, settle boardroom wars, and summon governors to their table.'
      },
      {
        idol: 'fame',
        title: 'The Celebrated Icon',
        description: 'The colleague who just won the premier industry prize, celebrated with standing ovations, glowing magazine features, and widespread adoration.'
      },
      {
        idol: 'money',
        title: 'The Untouchable Rentier',
        description: 'The peer who sold their company for $150M and now holds pure liquid autonomy, insulated from the need to ever justify their time or expenses.'
      }
    ]
  },
  {
    id: 5,
    chapter: 'V',
    category: 'The Non-Negotiable',
    title: 'The Bitter Sacrifice',
    scenario: 'A three-year test of adversity is demanded of you. Which condition would be absolute psychic torment that you could least tolerate enduring?',
    options: [
      {
        idol: 'money',
        title: 'Living on the Knife-Edge',
        description: 'Watching your liquid savings plummet to zero, surviving month-to-month in precarious uncertainty where one flat tire ruins your budget.'
      },
      {
        idol: 'power',
        title: 'Total Disenfranchisement',
        description: 'Being stripped of all autonomy, subjected to an incompetent boss whose every contradictory whim you must implement without protest.'
      },
      {
        idol: 'fame',
        title: 'Universal Invisibility',
        description: 'Pouring your heart into exceptional work only for it to be completely ignored, credited to someone else, and being treated as a non-entity by peers.'
      },
      {
        idol: 'pleasure',
        title: 'Squalor & Physical Grime',
        description: 'Enduring freezing barracks, backbreaking labor, tasteless rations, constant physical blisters, and no moments of warmth or respite.'
      }
    ]
  },
  {
    id: 6,
    chapter: 'VI',
    category: 'Leisure & Solitude',
    title: 'The Sovereign Weekend',
    scenario: 'You are granted 72 hours of uninterrupted freedom with all digital demands suspended. Which itinerary represents the peak expression of personal fulfillment?',
    options: [
      {
        idol: 'pleasure',
        title: 'The Sensory Indulgence',
        description: 'Deep tissue therapy, world-class vintage wines, exquisite meals prepared by private chefs, and serene lounging in high-thread-count linen.'
      },
      {
        idol: 'money',
        title: 'The Capital Architect',
        description: 'Deep-diving into emerging market mispricings, optimizing asymmetric investment structures, and fortifying your portfolio’s return yield.'
      },
      {
        idol: 'fame',
        title: 'The High-Profile Salon',
        description: 'Attending an elite intellectual salon where you are the guest of honor, engaging in scintillating discourse and being praised by top minds.'
      },
      {
        idol: 'power',
        title: 'The Strategic War Room',
        description: 'Gathering your inner council over whiteboards to hammer out the operational blueprint for launching a dominant new initiative.'
      }
    ]
  },
  {
    id: 7,
    chapter: 'VII',
    category: 'Crisis Reflex',
    title: 'The Sudden Collapse',
    scenario: 'A major enterprise you spent two grueling years building suffers a sudden, catastrophic failure. What is your immediate psychological reflex?',
    options: [
      {
        idol: 'power',
        title: 'Reassert Command',
        description: 'Immediately step up to the podium, take the wheel from trembling lieutenants, and issue ironclad orders to control the restructuring.'
      },
      {
        idol: 'money',
        title: 'Halt the Bleeding',
        description: 'Immediately review balance sheets, consult counsel to ring-fence personal assets, and safeguard your liquidity against legal contagion.'
      },
      {
        idol: 'fame',
        title: 'Defend the Reputational Brand',
        description: 'Hire elite crisis communication advisors to sculpt the narrative, terrified that this stain will destroy your hard-won professional standing.'
      },
      {
        idol: 'pleasure',
        title: 'Escape the Toxic Fallout',
        description: 'Flee the hostile environment to recover in a restorative wellness resort, soothing the visceral bodily stress with rest and comfort.'
      }
    ]
  },
  {
    id: 8,
    chapter: 'VIII',
    category: 'Validation Fuel',
    title: 'The Soul-Level Compliment',
    scenario: 'Which unprompted tribute from someone whose discernment you hold in high esteem warms your core for weeks afterward?',
    options: [
      {
        idol: 'fame',
        title: '"A Master of Our Era"',
        description: '"Your work has redefined our field. Everyone is talking about your talent; your name is on everyone’s lips."'
      },
      {
        idol: 'power',
        title: '"The Gravitational Force"',
        description: '"When you speak, the room aligns. Things only move because you have the sheer force of will to drive them through."'
      },
      {
        idol: 'money',
        title: '"The Truly Sovereign"',
        description: '"You’ve achieved real ' + "f***-you" + ' independence. Nobody can bully you, nobody owns you, and your family is set for generations."'
      },
      {
        idol: 'pleasure',
        title: '"The Art of Living"',
        description: '"You are the only person I know who truly enjoys life. You radiate vitality, grace, ease, and effortless calm amid the chaos."'
      }
    ]
  },
  {
    id: 9,
    chapter: 'IX',
    category: 'Interpersonal Friction',
    title: 'The Unforgivable Slight',
    scenario: 'In a close partnership or friendship, what specific behavior from the other person triggers your most visceral, incandescent anger?',
    options: [
      {
        idol: 'power',
        title: 'Bypassing Your Authority',
        description: 'They execute a pivotal decision behind your back without your knowledge or consent, presenting you with a fait accompli.'
      },
      {
        idol: 'fame',
        title: 'Public Disparagement',
        description: 'They contradict, mock, or air your flaws in front of a circle of influential peers, tarnishing your social standing.'
      },
      {
        idol: 'money',
        title: 'Reckless Fiscal Exposure',
        description: 'They gamble or mismanage shared financial commitments, threatening your hard-won liquidity buffer and credit safety.'
      },
      {
        idol: 'pleasure',
        title: 'Chaos & Chronic Drama',
        description: 'They consistently inject hysterical arguments, emotional turmoil, and physical disarray into your tranquil home environment.'
      }
    ]
  },
  {
    id: 10,
    chapter: 'X',
    category: 'Existential Legacy',
    title: 'The Hollow Epitaph',
    scenario: 'At the twilight of your existence, looking back across the decades, which summary of your life would feel like a tragic, unforgivable squandering of your soul?',
    options: [
      {
        idol: 'fame',
        title: 'The Forgotten Footnote',
        description: '"They were a pleasant enough individual, but their name vanished with their casket, leaving no ripple on the wider world."'
      },
      {
        idol: 'power',
        title: 'The Passive Spectator',
        description: '"They lived comfortably, but were always a cog in someone else’s machine, never holding the reins or authoring their own fate."'
      },
      {
        idol: 'money',
        title: 'The Indigent Dreamer',
        description: '"They had grand ideas and warm applause, but died broke and dependent, leaving their loved ones destitute and insecure."'
      },
      {
        idol: 'pleasure',
        title: 'The Joyless Ascetic',
        description: '"They amassed immense empire and acclaim, yet spent their entire mortal span in sleepless torment, never savoring a single day."'
      }
    ]
  },
  {
    id: 11,
    chapter: 'XI',
    category: 'Symbolic Triumph',
    title: 'The Study Relic',
    scenario: 'In your private sanctuary, you are permitted to display one physical artifact that represents your personal triumph. Which holds the deepest quiet resonance?',
    options: [
      {
        idol: 'money',
        title: 'The Clean Ledger',
        description: 'A discreet cryptographic token proving unencumbered, sovereign assets sufficient to fund your family’s dreams indefinitely.'
      },
      {
        idol: 'power',
        title: 'The Founder’s Seal',
        description: 'An engraved charter granting you ultimate veto and executive governance authority over an enduring institution.'
      },
      {
        idol: 'fame',
        title: 'The Gilded Laurels',
        description: 'A framed international medallion and front-page career retrospective commemorating your genius and cultural impact.'
      },
      {
        idol: 'pleasure',
        title: 'The Panoramic Loggia',
        description: 'A bespoke hand-crafted chair positioned beside custom panoramic glass overlooking the sea, calibrated for exquisite relaxation.'
      }
    ]
  },
  {
    id: 12,
    chapter: 'XII',
    category: 'The Instinctive Reward',
    title: 'The Triumph Protocol',
    scenario: 'You just completed an exhausting, 100-day high-stakes trial of endurance. How do you instinctively reward yourself on night one?',
    options: [
      {
        idol: 'pleasure',
        title: 'The Hedonic Reconnection',
        description: 'Switch off all phones, sink into a thermal bath, order a transcendent multi-course dinner with vintage wine, and sleep without an alarm for four days.'
      },
      {
        idol: 'money',
        title: 'The Ledger Verification',
        description: 'Watch the wire transfer confirmation register in your private vault and immediately calculate the compounding gains toward ultimate freedom.'
      },
      {
        idol: 'fame',
        title: 'The Victor’s Dispatches',
        description: 'Release the celebratory announcement across industry channels, reading every laudatory comment and watching the congratulations pour in.'
      },
      {
        idol: 'power',
        title: 'The Escalation Briefing',
        description: 'Call your top directors into a private dinner to leverage your newly won victory into demanding expanded authority for the coming year.'
      }
    ]
  }
];

export function calculateResults(answers) {
  // answers is an object or array mapping questionId to selected idol
  const tallies = {
    money: 0,
    power: 0,
    pleasure: 0,
    fame: 0
  };

  Object.values(answers).forEach((idolKey) => {
    if (tallies[idolKey] !== undefined) {
      tallies[idolKey] += 1;
    }
  });

  const total = Object.values(tallies).reduce((acc, v) => acc + v, 0) || 1;

  const sorted = Object.entries(tallies).sort((a, b) => b[1] - a[1]);

  const primaryId = sorted[0][0];
  const secondaryId = sorted[1][0];

  const percentages = {
    money: Math.round((tallies.money / total) * 100),
    power: Math.round((tallies.power / total) * 100),
    pleasure: Math.round((tallies.pleasure / total) * 100),
    fame: Math.round((tallies.fame / total) * 100)
  };

  return {
    tallies,
    total,
    percentages,
    primary: IDOLS[primaryId],
    secondary: IDOLS[secondaryId],
    ranking: sorted.map(([id, count]) => ({
      idol: IDOLS[id],
      count,
      percentage: percentages[id]
    }))
  };
}
