export const STATS = [
  { num: 4200, label: 'Attendees' },
  { num: 38, label: 'Events' },
  { num: 12, label: 'Prize Pool (₹L)' },
  { num: 72, label: 'Hackathon Hours' },
]

export const EVENTS = [
  {
    i: '01',
    name: 'Hackathon',
    desc: '72-hour non-stop build sprint. Ship a working product from zero, judged by industry engineers.',
    tag: '72 HRS · TEAMS OF 4',
  },
  {
    i: '02',
    name: 'Robotics Arena',
    desc: 'Autonomous bots navigate a live obstacle course under stage lighting and a packed crowd.',
    tag: 'AUTONOMOUS · LIVE',
  },
  {
    i: '03',
    name: 'AI Challenge',
    desc: 'Model-building sprint against a hidden leaderboard. Highest accuracy wins the core.',
    tag: 'ML · 24 HRS',
  },
  {
    i: '04',
    name: 'Drone Racing',
    desc: 'FPV drones run a lit gate circuit across the main quad at night.',
    tag: 'FPV · NIGHT RUN',
  },
  {
    i: '05',
    name: 'Gaming Arena',
    desc: 'Bracket-style esports across three titles, streamed live from the main hall.',
    tag: 'BRACKET · STREAMED',
  },
  {
    i: '06',
    name: 'Innovation Hub',
    desc: 'Pitch a hardware or software concept to a panel of founders and VCs.',
    tag: 'PITCH · 8 MIN',
  },
]

export const TIMELINE = [
  { t: 'DAY 1 · 09:00', h: 'Opening Ceremony', p: 'Main stage lights up. The AI Core activates for the first time this year.' },
  { t: 'DAY 1 · 11:00', h: 'Hackathon Kickoff', p: 'Teams lock in and the 72-hour clock starts running.' },
  { t: 'DAY 2 · 14:00', h: 'Robotics Finals', p: 'Top 8 bots run the obstacle course live for the crowd.' },
  { t: 'DAY 2 · 20:00', h: 'Drone Racing Night Run', p: 'FPV circuit lit up across the quad under full stage rigs.' },
  { t: 'DAY 3 · 19:00', h: 'Awards Night', p: 'Winners across all six arenas take the main stage.' },
]

export const SPEAKERS = [
  { name: 'Ariana Cole', role: 'Robotics Lead, Vantage Labs', init: 'AC', bio: 'Builds autonomous navigation stacks for warehouse robotics fleets.' },
  { name: 'Devan Okoro', role: 'Founder, Orbital AI', init: 'DO', bio: 'Ships applied ML tooling for climate and energy systems.' },
  { name: 'Priya Shenoy', role: 'Staff Engineer, Meridian', init: 'PS', bio: 'Leads real-time systems for large-scale distributed infra.' },
  { name: 'Marcus Lindqvist', role: 'CTO, Halcyon Drones', init: 'ML', bio: 'Designs flight control firmware for competitive FPV racing.' },
]

// Target date for the registration countdown. Edit this to your real event date.
export const EVENT_DATE = '2026-03-27T09:00:00'
