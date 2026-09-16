// The Four False Idols Diagnostic Framework (Tailored for 30-Something Tech Workers with Young Kids)
// Based on Arthur Brooks' synthesis of St. Thomas Aquinas (Summa Theologiae)

export const IDOLS = {
  money: {
    id: 'money',
    name: 'Money',
    latinName: 'Divitiae',
    subtitle: 'The Idol of Runway, Liquid Insulation & Net Worth',
    archetype: 'The Runway Maximizer',
    accentColor: '#2D6A4F', // Deep spruce / forest green
    accentBg: '#EAF3EC',
    darkAccentColor: '#52B788',
    iconName: 'Coins',
    symbol: '⚖️',
    quote: '"Wealth is like sea-water; the more we drink, the thirstier we become."',
    quoteAuthor: 'Arthur C. Brooks (quoting Schopenhauer)',
    aquinasTeaching: 'Thomas Aquinas observed that wealth is merely an instrumental good—it exists solely to be traded for other things. When pursued as an ultimate end, it produces endless vigilance and zero intrinsic peace.',
    corePromise: 'Total financial insulation: an emergency runway and investment portfolio so vast that no tech layoff, daycare hike, or economic shock can threaten your family.',
    underlyingFear: 'Financial helplessness: waking up with drained reserves, being trapped in a toxic job because of a mortgage, or failing to provide for your children’s future.',
    theTrap: 'The "Moving Goalpost": Every salary bump, RSU vest, or brokerage milestone instantly shifts your definition of "safe." You tell yourself you’ll relax once you hit the next number, but the finish line never arrives.',
    blindSpot: 'You evaluate evening family time, health, and career choices through the lens of burn rate and financial upside, remaining mentally trapped in spreadsheets while your kids grow up in front of you.',
    brooksPrescription: {
      virtue: 'Radical Generosity & Defining "Enough"',
      actionableHabits: [
        'Establish an explicit, written "Enough" runway figure with your partner; celebrate hitting it rather than automatically raising the target.',
        'Intentionally budget for non-monetizable family experiences (trips, memories, leisure) without calculating the opportunity cost in lost market compounding.',
        'Practice giving away a meaningful sum annually to community causes or friends in need without tracking the financial tax deduction.'
      ],
      pillarAlignment: 'Shift drive toward Family & Friendship: your children remember your unhurried presence on the rug, not the balance in your 529 portfolio.'
    }
  },

  power: {
    id: 'power',
    name: 'Power',
    latinName: 'Potestas',
    subtitle: 'The Idol of Architectural Agency & Calendar Sovereignty',
    archetype: 'The Sovereign Architect',
    accentColor: '#364F6B', // Imperial slate / deep navy
    accentBg: '#EBF1F7',
    darkAccentColor: '#7E9CC7',
    iconName: 'Crown',
    symbol: '🏛️',
    quote: '"The appetite for control expands exponentially with every decision you monopolize."',
    quoteAuthor: 'Arthur C. Brooks',
    aquinasTeaching: 'Aquinas noted that power is simply the capacity to produce an effect. It is morally neutral and entirely contingent on the end toward which it is directed. When power is sought for itself, it breeds paranoia and loneliness.',
    corePromise: 'Absolute autonomy: sovereignty over your technical roadmap, work calendar, and home schedule, ensuring no micromanaging executive or chaotic circumstance overrules you.',
    underlyingFear: 'Disenfranchisement: being forced to execute flawed engineering decisions, having your schedule hijacked by senseless meetings, and losing agency over your time.',
    theTrap: 'The "Control Fortress": Because you believe no one else will execute with your rigor, you struggle to delegate at work and obsess over rigid household routines at home, turning daily life into an exhausting battle of wills.',
    blindSpot: 'You interpret your partner’s or team’s pushback as insubordination rather than collaboration, mistaking quiet compliance for genuine trust and connection.',
    brooksPrescription: {
      virtue: 'Subsidiarity & Surrendering the Need to Control',
      actionableHabits: [
        'Practice deliberate calendar yielding: leave at least 5 hours per week unbooked and allow spontaneous family chaos to unfold without intervention.',
        'Delegate an important architectural or household decision to someone else and commit to supporting their choice even if it differs from your blueprint.',
        'When your toddler has a meltdown or plans fall apart, reframe it not as a breakdown of your control, but as an invitation to practice patience and presence.'
      ],
      pillarAlignment: 'Shift drive toward Service: redirect your formidable organizational drive toward empowering your teammates and serving your household selflessly.'
    }
  },

  pleasure: {
    id: 'pleasure',
    name: 'Pleasure',
    latinName: 'Voluptas',
    subtitle: 'The Idol of Sensory Calm, Deep Sleep & Frictionless Comfort',
    archetype: 'The Sanctuary Seeker',
    accentColor: '#9C3D54', // Vintage wine / terracotta rose
    accentBg: '#F9ECF0',
    darkAccentColor: '#E2738D',
    iconName: 'Sparkles',
    symbol: '🍷',
    quote: '"The pursuit of pure comfort paradoxically narrows the soul and lowers your threshold for joy."',
    quoteAuthor: 'Arthur C. Brooks',
    aquinasTeaching: 'Aquinas explained that pleasure is the natural resting state of having attained some genuine good. Treating sensory pleasure itself as the ultimate destination short-circuits moral growth and leads to numbness.',
    corePromise: 'A tranquil sanctuary: unbroken 8-hour sleep, peace, sensory calm, ordering delivery sushi, and complete freedom from screaming toddlers and urgent Slack pings.',
    underlyingFear: 'Chronic physical depletion: months of sleep deprivation, relentless domestic grime, screaming noise, and having your personal vitality drained dry.',
    theTrap: 'The "Satiety Cliff": Escaping into late-night revenge bedtime procrastination (doomscrolling, gaming, shows) offers brief dopamine but deepens tomorrow’s exhaustion, making everyday family life feel unbearable.',
    blindSpot: 'You frequently check out mentally during high-stress parenting moments or avoid difficult, necessary conversations with your partner because you cannot stomach the immediate discomfort.',
    brooksPrescription: {
      virtue: 'Embracing the Chaos & Purposeful Hardship',
      actionableHabits: [
        'Replace late-night revenge screen time with an intentional, disciplined 10:00 PM lights-out routine to secure genuine physiological recovery.',
        'Reframe the noise and friction of young children not as an interruption to your peace, but as the precious, fleeting season where life is actually happening.',
        'Engage in a deliberate weekly physical workout that pushes your discomfort threshold, expanding your real resilience under domestic stress.'
      ],
      pillarAlignment: 'Ground yourself in Faith / Philosophy: true peace is not the absence of screaming toddlers, but the presence of meaning amid the messy reality.'
    }
  },

  fame: {
    id: 'fame',
    name: 'Fame & Honor',
    latinName: 'Gloria / Honor',
    subtitle: 'The Idol of Technical Prestige, Peer Esteem & Validation',
    archetype: 'The Validated Virtuoso',
    accentColor: '#B06818', // Burnished amber / warm ochre
    accentBg: '#F9F2E7',
    darkAccentColor: '#F4B251',
    iconName: 'Award',
    symbol: '🌟',
    quote: '"Honor exists in the mind of the person giving it, not the person receiving it. To live for applause is to place your soul in a stranger’s hands."',
    quoteAuthor: 'Arthur C. Brooks',
    aquinasTeaching: 'Aquinas warned that honor is merely the outward sign of someone else’s appreciation of your virtue. If you seek honor directly, you become an actor perpetually terrified of the audience walking out.',
    corePromise: 'Professional distinction: being recognized across the tech industry as a top-tier operator or 10x engineer, proving that having young kids didn’t diminish your brilliance.',
    underlyingFear: 'Professional irrelevance: being quietly written off as a distracted, coasting parent who clocks out early while childless peers get all the acclaim and promotions.',
    theTrap: 'The "Audience Captivity": Checking Slack channels, LinkedIn views, or GitHub stars for validation leaves your self-worth hostage to workplace feedback. You perform for colleagues while your real life happens offstage.',
    blindSpot: 'You obsess over maintaining an impressive professional image, spending your best intellectual and emotional energy on work while giving your family only the depleted leftovers.',
    brooksPrescription: {
      virtue: 'The Inner Scorecard & Quiet Devotion',
      actionableHabits: [
        'Close Slack and work email strictly at the end of the workday; refuse to check mentions or calibrate your self-worth by evening peer activity.',
        'Take full pride in unseen, uncelebrated acts of service at home: cleaning the kitchen, reading the fifth bedtime story, without needing praise for it.',
        'Measure your life success by whether the people in your home respect and love you, rather than whether strangers on LinkedIn admire your career trajectory.'
      ],
      pillarAlignment: 'Anchor in Deep Family & Relationships: the people who truly love you care nothing about your title, your GitHub stars, or your engineering level.'
    }
  }
};

export const FOUR_PILLARS = [
  {
    title: 'Faith / Philosophy',
    description: 'A transcendent framework greater than yourself. Engaging with timeless philosophical wisdom or spiritual discipline to transcend the ego and modern career rat race.',
    icon: 'Compass'
  },
  {
    title: 'Family',
    description: 'Unconditional love and presence. Being truly there on the living room rug with your children and partner without mental distractions or Slack notifications.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Friendship',
    description: 'Aristotelian "real friendships"—bonds of shared virtue and vulnerability with friends who know the real you, far beyond professional networking.',
    icon: 'Users'
  },
  {
    title: 'Meaningful Work',
    description: 'Work pursued not for the idols of acclaim, status, or hoarding, but for the quiet dignity of creating value and providing honorably for those you love.',
    icon: 'Sparkle'
  }
];

export const SCENARIOS = [
  {
    id: 1,
    chapter: 'I',
    category: 'Career & Autonomy',
    title: 'The Remote Flexibility Crossroads',
    scenario: 'Your company announces an ambiguous return-to-office policy requiring two days a week in an office 90 minutes away, right when your family routine finally stabilized. You receive four inbound offers. Which is the most compelling?',
    options: [
      {
        idol: 'pleasure',
        title: 'The Low-Friction Sanctuary',
        description: 'A fully remote European scale-up: 30 hours a week, zero on-call rotations, asynchronous Slack, generous PTO, and an explicit culture of logging off at 4:30 PM.'
      },
      {
        idol: 'money',
        title: 'The Financial Accelerator',
        description: 'A tier-1 firm offering a 40% salary bump and guaranteed quarterly liquidity, letting you max out the kids’ 529 college plans and pay down the mortgage years early.'
      },
      {
        idol: 'power',
        title: 'The Lead Architect / Founding Post',
        description: 'Lead technical architect at a well-funded seed startup: total sovereignty over the tech stack, hiring decisions, and your daily calendar, answering to no one but the CEO.'
      },
      {
        idol: 'fame',
        title: 'The High-Visibility Evangelist',
        description: 'A staff-level developer advocate role at a marquee tech unicorn: writing high-visibility open source, hosting key technical podcasts, and building an enviable personal brand.'
      }
    ]
  },
  {
    id: 2,
    chapter: 'II',
    category: 'Boundaries & Presence',
    title: 'The 8:30 PM Bedtime Meltdown',
    scenario: 'Your toddler is in the middle of a screaming, teeth-brushing standoff while your partner is managing the baby. Suddenly, your phone buzzes on the nightstand: a critical production outage just triggered. What is your immediate visceral reaction?',
    options: [
      {
        idol: 'pleasure',
        title: 'Sensory Overload & Craving Silence',
        description: 'Overwhelming sensory exhaustion: you want to close your eyes, shut out the screaming, and escape into 48 hours of quiet, dark, uninterrupted peace.'
      },
      {
        idol: 'money',
        title: 'Acute Job Security & Runway Panic',
        description: 'Spike of financial dread: you worry that missing a high-visibility incident during a season of tech layoffs will jeopardize your job and family runway.'
      },
      {
        idol: 'power',
        title: 'Fury at Lost Control & Shoddy Systems',
        description: 'Incandescent frustration: you are enraged that junior engineers broke production and that external chaos is hijacking your family evening without your consent.'
      },
      {
        idol: 'fame',
        title: 'Dread of Being Labeled Incompetent',
        description: 'Reputational insecurity: you dread your team thinking you’ve become a distracted parent who clocks out and drops the ball when stakes are high.'
      }
    ]
  },
  {
    id: 3,
    chapter: 'III',
    category: 'Protected Time',
    title: 'The Rare Golden Afternoon',
    scenario: 'A miraculous alignment of stars: daycare is open, your partner took the kids to the grandparents, and you finished your sprint tasks by 1:00 PM on Friday. You have five hours of total solitude in an empty house. How do you instinctively spend it?',
    options: [
      {
        idol: 'pleasure',
        title: 'The Sensory Indulgence & Deep Sleep',
        description: 'Pull the blackout shades, order high-end delivery takeout you don’t have to share, and take an unbroken 3-hour afternoon nap followed by guilt-free streaming.'
      },
      {
        idol: 'money',
        title: 'The Financial Runway Audit',
        description: 'Open your spreadsheets: model out your liquid runway, rebalance your portfolio, analyze tax-advantaged accounts, and calculate your exact FI/RE date.'
      },
      {
        idol: 'power',
        title: 'The Strategic Architecture Reset',
        description: 'Clean your workspace, overhaul your project roadmap, and write an authoritative architectural RFC to steer the engineering team’s next quarter on your terms.'
      },
      {
        idol: 'fame',
        title: 'The Thought-Leadership Dispatch',
        description: 'Polish a deep-dive technical article or open-source tool to share on X and LinkedIn, showing your peer network that you’re operating at the cutting edge.'
      }
    ]
  },
  {
    id: 4,
    chapter: 'IV',
    category: 'Under-the-Hood Dread',
    title: 'The 3:15 AM Teething Vigil',
    scenario: 'You are rocking a teething toddler back to sleep in the dark at 3:15 AM. As your exhausted brain drifts into the deepest, unvarnished fear keeping you up at night, what is it?',
    options: [
      {
        idol: 'money',
        title: 'Economic Vulnerability & Cash Drain',
        description: 'Getting blindsided by a tech layoff while carrying a mortgage and daycare costs, watching your hard-earned liquid buffer evaporate to zero.'
      },
      {
        idol: 'pleasure',
        title: 'The Endless Grind of Depletion',
        description: 'The terrifying feeling that your youth and vitality are permanently gone, replaced by an endless, joyless loop of chores, exhaustion, and bodily fatigue.'
      },
      {
        idol: 'power',
        title: 'Total Subjugation of Your Time',
        description: 'Realizing you have zero autonomy left: trapped between arbitrary corporate demands at work and unrelenting family needs at home with no say over your life.'
      },
      {
        idol: 'fame',
        title: 'Fading into Mediocre Obscurity',
        description: 'Looking back in ten years and realizing you became a forgettable, middle-tier cog who never built anything notable or achieved professional mastery.'
      }
    ]
  },
  {
    id: 5,
    chapter: 'V',
    category: 'Mental Load & Hustle Culture',
    title: 'The Sunday Evening PR Drop',
    scenario: 'It’s 9:00 PM Sunday. Toys cover the floor, the dishwasher is running, and you’re packing daycare lunches. A Slack notification from an ambitious, childless peer drops into the engineering channel with a massive weekend PR. What is your inner reflex?',
    options: [
      {
        idol: 'power',
        title: 'Resentment at Being Outmaneuvered',
        description: 'Irritation that this colleague is driving changes without consulting you, forcing you into a reactive position on Monday morning.'
      },
      {
        idol: 'pleasure',
        title: 'Visceral Weariness & Depletion',
        description: 'Bone-deep exhaustion: you just spent 48 hours changing diapers and mediating tantrums with zero rest, and now work is already demanding cognitive bandwidth.'
      },
      {
        idol: 'money',
        title: 'Bonus & Promotion Calibration Anxiety',
        description: 'Calculation: you wonder if this colleague’s unencumbered weekend grind will edge you out on performance calibrations and equity grant refreshes.'
      },
      {
        idol: 'fame',
        title: 'The Stigma of the "Distracted Parent"',
        description: 'Insecurity: you worry your manager will view them as the star "10x engineer" while you are quietly categorized as a coasting parent who clocks out at 5.'
      }
    ]
  },
  {
    id: 6,
    chapter: 'VI',
    category: 'Social Comparison',
    title: 'The Bitter Classmate Update',
    scenario: 'You catch up with a former engineering classmate whose trajectory strikes an uncomfortable, private nerve of envy. Whose current life sparks that twinge of jealousy?',
    options: [
      {
        idol: 'pleasure',
        title: 'The Unstressed Digital Nomad',
        description: 'The peer who took a low-stakes remote role in a quiet mountain town, sleeps 8.5 hours a night, surfs at lunch, and never experiences domestic chaos.'
      },
      {
        idol: 'money',
        title: 'The Liquid Multi-Millionaire',
        description: 'The colleague whose startup exited or who rode a massive stock run-up, sitting on millions liquid and never stressing over mortgage or tuition again.'
      },
      {
        idol: 'power',
        title: 'The Influential Decision-Maker',
        description: 'The VP who commands a 60-person organization, dictates the company’s strategic vision, and commands automatic deference in every boardroom.'
      },
      {
        idol: 'fame',
        title: 'The Celebrated Tech Icon',
        description: 'The engineer who authored a viral framework, has 80k Twitter followers, keynotes premier conferences, and is widely heralded as an industry authority.'
      }
    ]
  },
  {
    id: 7,
    chapter: 'VII',
    category: 'Relationship Friction',
    title: 'The Division of Labor Clashing',
    scenario: 'You and your partner are running on fumes, balancing two demanding careers, daycare sicknesses, and household chores. What recurring friction triggers your deepest internal resentment?',
    options: [
      {
        idol: 'pleasure',
        title: 'Zero Protected Rest or Downtime',
        description: 'Never getting a single unbroken block of quiet self-care, sleep, or physical recovery because every weekend is consumed by domestic errands.'
      },
      {
        idol: 'power',
        title: 'Chaos & Overridden Systems',
        description: 'When household systems and schedules feel chaotic, or when your partner overrides your organized routines and leaves you feeling out of control.'
      },
      {
        idol: 'money',
        title: 'Creeping Expenses & Eroded Margins',
        description: 'When unforeseen household expenses, impulse buys, or childcare costs feel like they are eating your savings rate and slowing your family runway.'
      },
      {
        idol: 'fame',
        title: 'Unrecognized Cognitive Contribution',
        description: 'Feeling like your partner doesn’t appreciate how demanding your professional role is, taking your intellectual labor and career sacrifices for granted.'
      }
    ]
  },
  {
    id: 8,
    chapter: 'VIII',
    category: 'Resource Allocation',
    title: 'The Unexpected Liquidity Event',
    scenario: 'A company secondary tender offer or annual performance bonus nets you $60,000 cash after taxes. How do you instinctively want to allocate the bulk of it?',
    options: [
      {
        idol: 'money',
        title: 'The Ironclad Emergency Runway',
        description: 'Shovel every dollar into safe index funds and high-yield savings to extend your family’s financial buffer and hedge against tech sector volatility.'
      },
      {
        idol: 'pleasure',
        title: 'The Sanity & Restoration Package',
        description: 'Book a luxury family resort with top-tier childcare, hire a regular cleaning and meal service, and buy yourself prime physical rest and comfort.'
      },
      {
        idol: 'power',
        title: 'The Autonomous Side-Venture',
        description: 'Fund a dedicated side-project or angel check where you have complete equity ownership and executive say over the product roadmap.'
      },
      {
        idol: 'fame',
        title: 'The Prestige & Brand Investment',
        description: 'Fund an ambitious public creative venture, sponsor a marquee tech community, or build credentials that dramatically elevate your professional standing.'
      }
    ]
  },
  {
    id: 9,
    chapter: 'IX',
    category: 'Validation & Performance',
    title: 'The Calibration Accolade',
    scenario: 'It’s annual performance calibration time. Your executive leadership pulls you aside for feedback. Which praise leaves you buzzing with pride for weeks?',
    options: [
      {
        idol: 'money',
        title: '"You’re in Our Top Pay Tier"',
        description: '"We’ve granted you our highest equity refresh and bonus; you are in the top compensation percentile across the engineering division."'
      },
      {
        idol: 'power',
        title: '"You Run the Show"',
        description: '"Whenever there’s an existential crisis, we hand the keys to you. You are the only person with the operational command to steer us through."'
      },
      {
        idol: 'pleasure',
        title: '"You’ve Mastered the Art of Life"',
        description: '"You have built an enviable rhythm. You ship great work without ever burning out, your calendar is sane, and you truly protect your family time."'
      },
      {
        idol: 'fame',
        title: '"A Master of the Craft"',
        description: '"Your engineering reputation is unmatched. Staff engineers from across the company look to your technical standards as the gold standard."'
      }
    ]
  },
  {
    id: 10,
    chapter: 'X',
    category: 'Crisis Reflex',
    title: 'The Layoff Wave Survivor',
    scenario: 'Your company announces a 15% reduction in force. You survive the cut, but three close teammates were let go. What is your immediate psychological reflex?',
    options: [
      {
        idol: 'money',
        title: 'Audit the Runway',
        description: 'Immediately calculate your family’s monthly burn rate, check liquid reserves, and verify how many months you could survive if you were next.'
      },
      {
        idol: 'power',
        title: 'Seize the Vacuum',
        description: 'Step into the leadership void: consolidate critical projects under your ownership and make your role indispensable to the reorganized company.'
      },
      {
        idol: 'pleasure',
        title: 'Numb the Survivor Guilt',
        description: 'The visceral physical stress leaves you depleted: you close your laptop early, order comfort takeout, and escape into mindless rest to soothe the anxiety.'
      },
      {
        idol: 'fame',
        title: 'Protect Your Brand & Optics',
        description: 'Worry about industry perception: what does this restructuring say about your company, and how can you update your public profile to stay desirable?'
      }
    ]
  },
  {
    id: 11,
    chapter: 'XI',
    category: 'Existential Triumph',
    title: 'The 30-Something Milestone',
    scenario: 'Looking toward the end of your 30s, which scenario would make you feel like you truly "won" this demanding chapter of life?',
    options: [
      {
        idol: 'money',
        title: 'Unshakable Financial Independence',
        description: 'Your investment portfolio can fund your mortgage, family lifestyle, and kids’ college even if you never work another day in tech.'
      },
      {
        idol: 'pleasure',
        title: 'A Rested, Unhurried Existence',
        description: 'Waking up refreshed, cooking unhurried dinners with your kids every night, working 25 flexible hours, and feeling physically vibrant.'
      },
      {
        idol: 'power',
        title: 'Complete Architectural Sovereignty',
        description: 'Being the undisputed technical decision-maker: designing the systems on your own terms with zero bureaucratic interference.'
      },
      {
        idol: 'fame',
        title: 'Celebrated Industry Eminence',
        description: 'Being recognized across the tech industry as a definitive authority, with respected publications, keynote invites, and widespread peer esteem.'
      }
    ]
  },
  {
    id: 12,
    chapter: 'XII',
    category: 'The Decompression Ritual',
    title: 'Friday Night Silence',
    scenario: 'You’ve just survived a brutal sprint where both kids had ear infections and you had to ship a critical production release. It’s 9:30 PM Friday, both kids are finally asleep. How do you decompress?',
    options: [
      {
        idol: 'pleasure',
        title: 'Deep Sensory Escape & Sleep',
        description: 'Pour a great drink, order premium takeout, put on noise-canceling headphones, and sleep until 9:00 AM without setting a single alarm.'
      },
      {
        idol: 'money',
        title: 'Checking the Financial Fruit',
        description: 'Open your portfolio dashboard, verify the direct deposit cleared, and find comfort in the numbers that make this grueling pace worthwhile.'
      },
      {
        idol: 'power',
        title: 'Autonomous Goal Calibration',
        description: 'Open your personal workspace and quietly draft your own strategic goals and project blueprints for next quarter on your own terms.'
      },
      {
        idol: 'fame',
        title: 'Savoring the Release Acclaim',
        description: 'Check the team Slack and company announcement thread to read the congratulatory messages and revel in the recognition of your hard work.'
      }
    ]
  }
];

export function calculateResults(answers) {
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
