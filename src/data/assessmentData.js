// The Four False Idols Diagnostic Framework (Realistic for an Average 30-Year-Old American)
// Based on Arthur Brooks' synthesis of St. Thomas Aquinas (Summa Theologiae)

export const IDOLS = {
  money: {
    id: 'money',
    name: 'Money',
    latinName: 'Divitiae',
    subtitle: 'The Pursuit of Financial Security, Cushion & Net Worth',
    archetype: 'The Security Builder',
    accentColor: '#2D6A4F', // Deep forest green
    accentBg: '#EAF3EC',
    darkAccentColor: '#52B788',
    iconName: 'Coins',
    symbol: '⚖️',
    quote: '"Wealth is like sea-water; the more we drink, the thirstier we become."',
    quoteAuthor: 'Arthur C. Brooks (quoting Schopenhauer)',
    aquinasTeaching: 'Thomas Aquinas observed that wealth is merely an instrumental good—it exists solely to be traded for other things. When pursued as an ultimate end, it generates endless vigilance and zero intrinsic peace.',
    corePromise: 'Total security: building a savings buffer and financial cushion so solid that unexpected bills, inflation, or layoffs can never threaten your family.',
    underlyingFear: 'Financial vulnerability: running out of savings, being trapped in a stressful job out of necessity, or feeling unable to provide a secure future for your loved ones.',
    theTrap: 'The "Moving Goalpost": Every raise, bonus, or savings milestone quickly becomes your new normal. You tell yourself you’ll finally relax once you reach the next number, but the finish line keeps moving.',
    blindSpot: 'You frequently evaluate free time, relationships, and life choices strictly through costs and financial trade-offs, remaining anxious about money even when you have enough.',
    brooksPrescription: {
      virtue: 'Radical Generosity & Defining "Enough"',
      actionableHabits: [
        'Set an explicit, written financial target with your partner that defines what "safe" actually means; celebrate reaching it rather than raising the bar.',
        'Intentionally budget for meaningful family experiences and small joys without obsessing over the opportunity cost of investing every spare dollar.',
        'Practice giving away money or helping someone in need quietly and without tracking the tax deduction.'
      ],
      pillarAlignment: 'Shift drive toward Family & Friendship: long-term happiness comes from deep, dependable relationships, not a slightly higher net worth.'
    }
  },

  power: {
    id: 'power',
    name: 'Power',
    latinName: 'Potestas',
    subtitle: 'The Pursuit of Independence, Agency & Control',
    archetype: 'The Autonomous Operator',
    accentColor: '#364F6B', // Slate / deep navy
    accentBg: '#EBF1F7',
    darkAccentColor: '#7E9CC7',
    iconName: 'Crown',
    symbol: '🏛️',
    quote: '"The appetite for control expands exponentially with every decision you monopolize."',
    quoteAuthor: 'Arthur C. Brooks',
    aquinasTeaching: 'Aquinas noted that power is simply the capacity to produce an effect. It is morally neutral and entirely contingent on the end toward which it is directed. When power is sought for itself, it breeds friction and isolation.',
    corePromise: 'True independence: having control over your time, schedule, and decisions, ensuring you call the shots rather than answering to other people’s whims.',
    underlyingFear: 'Being at the mercy of others: feeling micromanaged at work, trapped by circumstances, or powerless over how your days and life unfold.',
    theTrap: 'The "Control Trap": Believing that things will only turn out right if you manage every detail yourself, turning both work projects and domestic routines into exhausting battles for control.',
    blindSpot: 'You can easily mistake other people’s cooperation or silence for agreement, struggling to delegate and often creating unnecessary tension when things don’t go your way.',
    brooksPrescription: {
      virtue: 'Humility & Letting Go of Control',
      actionableHabits: [
        'Practice deliberate flexibility: leave unscheduled room in your week and allow unexpected interruptions or family chaos to unfold without irritation.',
        'Intentionally let someone else make the final call on a major decision at work or at home, and support their direction fully.',
        'When plans get derailed by traffic, sick kids, or work changes, practice seeing it as an opportunity to cultivate patience rather than a loss of control.'
      ],
      pillarAlignment: 'Shift drive toward Service: redirect your energy away from controlling outcomes and toward helping and supporting the people around you.'
    }
  },

  pleasure: {
    id: 'pleasure',
    name: 'Pleasure',
    latinName: 'Voluptas',
    subtitle: 'The Pursuit of Rest, Comfort & Relief from Stress',
    archetype: 'The Comfort Seeker',
    accentColor: '#9C3D54', // Vintage wine / terracotta rose
    accentBg: '#F9ECF0',
    darkAccentColor: '#E2738D',
    iconName: 'Sparkles',
    symbol: '🍷',
    quote: '"The pursuit of pure comfort paradoxically narrows the soul and lowers your threshold for joy."',
    quoteAuthor: 'Arthur C. Brooks',
    aquinasTeaching: 'Aquinas explained that pleasure is the natural resting state of having attained some genuine good. Treating sensory pleasure and comfort itself as the ultimate destination leads to numbness and low resilience.',
    corePromise: 'Peace and comfort: unbroken sleep, quiet evenings, great food, and escaping the constant noise, chores, and demands of daily adulthood.',
    underlyingFear: 'Burnout and exhaustion: feeling that life is becoming an unrelenting grind of work and domestic duties with zero relief or personal time.',
    theTrap: 'The "Revenge Bedtime Trap": Staying up late scrolling on your phone or streaming shows to claim "me time," only to wake up exhausted and make the next day harder to get through.',
    blindSpot: 'You often avoid necessary, productive hard conversations or healthy discipline because the immediate friction feels too unpleasant, inadvertently letting issues fester.',
    brooksPrescription: {
      virtue: 'Constructive Discipline & Embracing Meaningful Effort',
      actionableHabits: [
        'Set a firm lights-out sleep schedule to secure real physiological recovery rather than trading sleep for late-night screen time.',
        'Lean directly into the uncomfortable conversation or chore you have been avoiding instead of escaping into temporary distractions.',
        'Build a routine of physical activity or personal discipline that pushes your comfort zone, building real stamina for daily life.'
      ],
      pillarAlignment: 'Ground yourself in Faith / Philosophy: lasting joy is found in purposeful responsibility and shared love, not in avoiding all friction.'
    }
  },

  fame: {
    id: 'fame',
    name: 'Fame & Honor',
    latinName: 'Gloria / Honor',
    subtitle: 'The Pursuit of Respect, Recognition & Peer Esteem',
    archetype: 'The Respected Contributor',
    accentColor: '#B06818', // Burnished amber / warm ochre
    accentBg: '#F9F2E7',
    darkAccentColor: '#F4B251',
    iconName: 'Award',
    symbol: '🌟',
    quote: '"Honor exists in the mind of the person giving it, not the person receiving it. To live for applause is to place your soul in a stranger’s hands."',
    quoteAuthor: 'Arthur C. Brooks',
    aquinasTeaching: 'Aquinas warned that honor is merely the outward sign of someone else’s appreciation. If you seek praise directly, you become an actor perpetually anxious about what the audience thinks.',
    corePromise: 'Validation and respect: knowing that your peers, colleagues, and community recognize your talent, hard work, and unique contribution.',
    underlyingFear: 'Insignificance: the fear of being overlooked, taken for granted, or viewed as ordinary and replaceable by people you respect.',
    theTrap: 'The "Validation Treadmill": Relying on outside praise, workplace accolades, or social media feedback for your sense of worth, leaving your mood hostage to other people’s attention.',
    blindSpot: 'You expend your best energy trying to impress coworkers or maintain a polished public image, while leaving your family with the tired leftovers of your patience.',
    brooksPrescription: {
      virtue: 'The Inner Scorecard & Quiet Dedication',
      actionableHabits: [
        'Perform meaningful acts of excellence or kindness completely in secret: don’t mention them to friends or post about them online.',
        'Deliberately celebrate a colleague or friend’s success publicly, especially in an area where you privately compete.',
        'Measure your worth by how you show up for the small circle of people who love you unconditionally, rather than the opinions of professional acquaintances.'
      ],
      pillarAlignment: 'Anchor in Real Relationships: true belonging comes from being known and loved by family and true friends, not admired by strangers.'
    }
  }
};

export const FOUR_PILLARS = [
  {
    title: 'Faith / Philosophy',
    description: 'A broader perspective on life greater than your ego. Engaging with timeless philosophical wisdom or spiritual reflection to stay grounded amidst life’s daily chaos.',
    icon: 'Compass'
  },
  {
    title: 'Family',
    description: 'Unconditional commitment and affection. Being truly present with your partner, kids, and loved ones without letting work anxieties bleed into dinner and bedtime.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Friendship',
    description: 'Real, genuine friendships. People who know the real you and stand by you in ordinary life, completely independent of networking or career utility.',
    icon: 'Users'
  },
  {
    title: 'Meaningful Work',
    description: 'Work pursued for the honest satisfaction of creating value and providing for your family, rather than chasing hollow titles, applause, or endless hoarding.',
    icon: 'Sparkle'
  }
];

export const SCENARIOS = [
  {
    id: 1,
    chapter: 'I',
    category: 'Career Direction',
    title: 'The Career Crossroads',
    scenario: 'You are evaluating your next career chapter and have four very different opportunities in front of you. Which path appeals to you most?',
    options: [
      {
        idol: 'pleasure',
        title: 'The Low-Stress, High-Balance Role',
        description: 'A steady role with great benefits, generous paid time off, realistic expectations, and an established culture where everyone logs off cleanly at 5:00 PM.'
      },
      {
        idol: 'money',
        title: 'The Compensation Accelerator',
        description: 'A demanding position offering a substantial salary boost and bonuses, allowing you to pay down debt, build savings, and invest aggressively for your family.'
      },
      {
        idol: 'power',
        title: 'The Autonomous Leadership Post',
        description: 'A position with wide latitude where you run your own department, set your own priorities, and have the freedom to make key decisions without being micromanaged.'
      },
      {
        idol: 'fame',
        title: 'The Prestigious Industry Opportunity',
        description: 'A visible role with a well-known organization where your contributions will be widely recognized and respected by colleagues and peers in your field.'
      }
    ]
  },
  {
    id: 2,
    chapter: 'II',
    category: 'Daily Boundaries',
    title: 'The Evening Interruption',
    scenario: 'It’s 8:30 PM. The house is busy, dinner dishes are in the sink, you’re helping with bedtime routines, and your phone buzzes with an urgent work ping marked "action required." What is your immediate gut reaction?',
    options: [
      {
        idol: 'pleasure',
        title: 'Craving Quiet and Relief',
        description: 'Pure exhaustion: you feel an overwhelming desire to put the phone away, shut off the screens, and enjoy an hour of quiet, uninterrupted peace.'
      },
      {
        idol: 'money',
        title: 'Security and Income Anxiety',
        description: 'A sudden worry: in an unpredictable economy, you fear that not being responsive could jeopardize your standing, future raises, or job security.'
      },
      {
        idol: 'power',
        title: 'Frustration Over Disrupted Autonomy',
        description: 'Irritation at poor planning: you resent that someone else’s crisis is imposing on your evening and taking away your control over your personal time.'
      },
      {
        idol: 'fame',
        title: 'Concern About Professional Reputation',
        description: 'Fear of falling short: you worry that your manager or team will see you as uncommitted or unreliable if you don’t step up right away.'
      }
    ]
  },
  {
    id: 3,
    chapter: 'III',
    category: 'Free Time',
    title: 'The Rare Free Saturday',
    scenario: 'By an unexpected stroke of luck, all family errands, household chores, and obligations are cleared. You have an entire Saturday afternoon completely to yourself. How do you instinctively spend it?',
    options: [
      {
        idol: 'pleasure',
        title: 'Comfort, Rest, and Total Relaxation',
        description: 'Sleep in with no alarm, order your favorite comfort food, watch a favorite movie or series, and enjoy hours of pure, guilt-free relaxation.'
      },
      {
        idol: 'money',
        title: 'Financial Review and Planning',
        description: 'Sit down with a coffee to organize your budget, evaluate family savings and investments, and optimize plans for your long-term financial security.'
      },
      {
        idol: 'power',
        title: 'Organizing and Personal Projects',
        description: 'Tackle a personal project you’ve been putting off, organize your living space or schedule, and take decisive charge of your upcoming priorities.'
      },
      {
        idol: 'fame',
        title: 'Creative or Social Expression',
        description: 'Work on a creative endeavor, attend an engaging social event, or do something rewarding that you look forward to sharing with friends or peers.'
      }
    ]
  },
  {
    id: 4,
    chapter: 'IV',
    category: 'Underlying Fears',
    title: 'The 3:00 AM Worry',
    scenario: 'You wake up in the middle of the night with a lingering knot of anxiety in your stomach. If you look past the immediate surface, what worry is typically lurking underneath?',
    options: [
      {
        idol: 'money',
        title: 'Financial Fragility and Loss',
        description: 'The anxiety of an unforeseen medical bill, housing cost, or job loss eating through your savings and leaving your family financially vulnerable.'
      },
      {
        idol: 'pleasure',
        title: 'Endless Exhaustion and Lost Youth',
        description: 'The dread that life is becoming a permanent loop of obligations, chores, and chronic tiredness, with no room left for real joy or vitality.'
      },
      {
        idol: 'power',
        title: 'Feeling Trapped and Powerless',
        description: 'The claustrophobia of feeling stuck in situations where others dictate your schedule and you don’t have real control over your own life.'
      },
      {
        idol: 'fame',
        title: 'Living an Unremarkable Life',
        description: 'The quiet fear of looking back years from now and realizing you settled into mediocrity, without ever achieving distinction or making a lasting mark.'
      }
    ]
  },
  {
    id: 5,
    chapter: 'V',
    category: 'Weekly Pressure',
    title: 'The Sunday Evening Slump',
    scenario: 'It’s 9:00 PM on Sunday night. The weekend is ending, chores are wrapping up, and the reality of Monday morning sets in. What thought generates the most dread?',
    options: [
      {
        idol: 'power',
        title: 'Facing a Schedule Dictated by Others',
        description: 'Knowing your coming week will be dictated by other people’s agendas, meetings, and deadlines, leaving you little say over your own time.'
      },
      {
        idol: 'pleasure',
        title: 'Starting the Week Already Depleted',
        description: 'Realizing you didn’t get enough real rest this weekend and face another five days of early alarms, daily routines, and mental fatigue.'
      },
      {
        idol: 'money',
        title: 'Questioning the Financial Return',
        description: 'Wondering whether the hard work and stress you pour into your job are translating into real financial headway or just paying current bills.'
      },
      {
        idol: 'fame',
        title: 'The Pressure to Prove Yourself',
        description: 'The anxiety of having to perform, stay visible, and continually prove your competence to your bosses, peers, and professional circle.'
      }
    ]
  },
  {
    id: 6,
    chapter: 'VI',
    category: 'Social Comparison',
    title: 'The Unexpected Envy',
    scenario: 'You run into an old friend or browse social media, and someone else’s life triggers an unexpected, quiet pang of jealousy. Whose reality strikes a chord?',
    options: [
      {
        idol: 'pleasure',
        title: 'The Unbothered, Relaxed Friend',
        description: 'The friend whose life seems remarkably simple and easy—they travel regularly, sleep well, and rarely appear stressed or overwhelmed.'
      },
      {
        idol: 'money',
        title: 'The Financially Independent Peer',
        description: 'The acquaintance who bought a beautiful home, carries no financial stress, and can comfortably afford things without checking price tags.'
      },
      {
        idol: 'power',
        title: 'The Self-Directed Leader',
        description: 'The person who works for themselves or runs their own team, calling all the shots and building something entirely on their own terms.'
      },
      {
        idol: 'fame',
        title: 'The Admired and Celebrated Peer',
        description: 'The colleague who seems universally liked and respected, frequently earning praise, awards, and widespread recognition in their circle.'
      }
    ]
  },
  {
    id: 7,
    chapter: 'VII',
    category: 'Home Life & Relationships',
    title: 'The Domestic Friction',
    scenario: 'When daily pressures build up at home between careers, chores, and family responsibilities, what recurring issue triggers your deepest internal irritation?',
    options: [
      {
        idol: 'pleasure',
        title: 'Lack of Personal Rest and Space',
        description: 'Feeling like you never get an uninterrupted moment to rest, recharge, or simply enjoy some quiet time without someone needing something.'
      },
      {
        idol: 'power',
        title: 'Disorganized Plans and Lack of Control',
        description: 'When household plans feel messy, uncoordinated, or constantly changing, making you feel like you have no control over the household flow.'
      },
      {
        idol: 'money',
        title: 'Budget Tension and Financial Strain',
        description: 'When unexpected household expenses, impulse purchases, or tight budgets threaten your monthly savings goals and financial buffer.'
      },
      {
        idol: 'fame',
        title: 'Feeling Taken for Granted',
        description: 'Feeling like your partner or family members don’t fully see or appreciate how hard you work and the daily sacrifices you make for everyone.'
      }
    ]
  },
  {
    id: 8,
    chapter: 'VIII',
    category: 'Resource Allocation',
    title: 'The Unexpected Windfall',
    scenario: 'You receive an unexpected $25,000 bonus or family gift after taxes. What is your most natural, instinctive impulse for how to use the bulk of it?',
    options: [
      {
        idol: 'money',
        title: 'Fortifying the Financial Buffer',
        description: 'Transfer it into savings, index funds, or emergency reserves to strengthen your safety net and buy peace of mind against the unexpected.'
      },
      {
        idol: 'pleasure',
        title: 'Restoration, Vacation, and Comfort',
        description: 'Book a memorable family trip, hire help with chores, and spend it on experiences and comfort that bring immediate relief and enjoyment.'
      },
      {
        idol: 'power',
        title: 'Investing in Personal Independence',
        description: 'Use it toward an independent business idea, real estate down payment, or venture where you have direct ownership and decision-making power.'
      },
      {
        idol: 'fame',
        title: 'A Notable Upgrade or Personal Project',
        description: 'Invest in a meaningful home improvement, creative project, or lifestyle enhancement that reflects your success and makes a great impression.'
      }
    ]
  },
  {
    id: 9,
    chapter: 'IX',
    category: 'Recognition & Feedback',
    title: 'The Meaningful Compliment',
    scenario: 'At this stage in your life, what kind of sincere compliment from someone you respect stays with you and brings you genuine satisfaction?',
    options: [
      {
        idol: 'money',
        title: '"You’ve Built Real Stability"',
        description: '"You’ve handled your responsibilities so well. You’re truly independent, secure, and prepared for whatever life brings."'
      },
      {
        idol: 'power',
        title: '"You Take Charge and Make Things Happen"',
        description: '"When things get difficult, everyone looks to you. You have the leadership and judgment to steer people through."'
      },
      {
        idol: 'pleasure',
        title: '"You Really Know How to Live Well"',
        description: '"You don’t let the stress get to you. You know how to balance hard work with enjoying life, and you seem genuinely at peace."'
      },
      {
        idol: 'fame',
        title: '"You’re Exceptionally Good at What You Do"',
        description: '"Your reputation is wonderful. People in your community and circle look up to your ability and respect your contributions."'
      }
    ]
  },
  {
    id: 10,
    chapter: 'X',
    category: 'Facing Uncertainty',
    title: 'The Workplace Shakeup',
    scenario: 'Your organization announces restructuring and cost-cutting measures. Your job is safe for now, but the atmosphere has become tense and uncertain. What is your reflex?',
    options: [
      {
        idol: 'money',
        title: 'Audit Your Emergency Runway',
        description: 'Immediately check your bank accounts and calculate how many months of expenses you have saved if things take a turn for the worse.'
      },
      {
        idol: 'power',
        title: 'Position Yourself for Influence',
        description: 'Step up to take on essential responsibilities, ensuring your role becomes indispensable and you have influence over the outcome.'
      },
      {
        idol: 'pleasure',
        title: 'Protect Your Mental Peace',
        description: 'The stress is draining: you feel a strong impulse to step back, avoid the workplace politics, and protect your personal peace and energy.'
      },
      {
        idol: 'fame',
        title: 'Guard Your Reputation and Options',
        description: 'Think about how this affects your resume and career standing, making sure your accomplishments remain visible and respected in your field.'
      }
    ]
  },
  {
    id: 11,
    chapter: 'XI',
    category: 'Life Milestones',
    title: 'Looking Ahead to 40',
    scenario: 'Looking ahead to your 40th birthday, which life scenario would make you feel most satisfied with where you’ve landed as an adult?',
    options: [
      {
        idol: 'money',
        title: 'Solid Financial Independence',
        description: 'Having a healthy savings cushion, well-managed debt, and investments steadily growing so money is no longer a daily stressor.'
      },
      {
        idol: 'pleasure',
        title: 'An Unhurried, Healthy Life',
        description: 'Enjoying good health, getting plenty of sleep, spending relaxed evenings with loved ones, and having time for personal hobbies.'
      },
      {
        idol: 'power',
        title: 'Freedom and Self-Direction',
        description: 'Having established genuine independence in your work and life, with the autonomy to decide how you spend your time every day.'
      },
      {
        idol: 'fame',
        title: 'Reputation and Personal Accomplishment',
        description: 'Being widely respected by your peers and community as someone who achieved real excellence and made an impact.'
      }
    ]
  },
  {
    id: 12,
    chapter: 'XII',
    category: 'End-of-Week Rhythm',
    title: 'Friday Evening Wrap-Up',
    scenario: 'It’s 6:00 PM on Friday after a relentless, exhausting week. The work responsibilities are done for the weekend. How do you naturally unwind?',
    options: [
      {
        idol: 'pleasure',
        title: 'Cozy Food, Drink, and Deep Rest',
        description: 'Order your favorite takeout, pour a drink, settle onto the couch with a good show or book, and look forward to sleeping in.'
      },
      {
        idol: 'money',
        title: 'Quiet Pride in Tangible Progress',
        description: 'Reflect on the week’s paycheck or savings progress, finding satisfaction in knowing your hard work is building security for the future.'
      },
      {
        idol: 'power',
        title: 'Reviewing and Organizing on Your Terms',
        description: 'Take a quiet moment to organize your upcoming schedule and set your own goals for the days ahead on your own terms.'
      },
      {
        idol: 'fame',
        title: 'Connecting and Sharing with Others',
        description: 'Catch up with friends, share highlights from your week, and enjoy feeling connected and recognized by your social circle.'
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
