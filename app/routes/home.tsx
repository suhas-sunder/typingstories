import type { Route } from "./+types/home";
import { json } from "@remix-run/node";

/* =========================================================
   META
========================================================= */
export function meta({}: Route.MetaArgs) {
  const title = "TypingStories | Fun Typing Games & Creative Story Practice";
  const description =
    "TypingStories turns typing practice into an adventure with interactive stories, speed-building games, and writing prompts for all ages. Improve typing speed while enjoying creative storytelling.";
  const url = "https://typingstories.com/";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: [
        "typing stories",
        "typing games",
        "typing practice online",
        "typing speed test",
        "interactive typing stories",
        "kids typing practice",
        "writing prompts",
        "improve typing speed",
        "touch typing drills",
        "typing lessons",
      ].join(", "),
    },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { rel: "canonical", href: url },
    { name: "theme-color", content: "#6366f1" }, // soft indigo
  ];
}

/* =========================================================
   LOADER
========================================================= */
export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

/* =========================================================
   UTIL
========================================================= */
const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-xl border border-indigo-100 bg-white p-6 shadow-sm ${className}`}
  >
    {children}
  </div>
);

/* =========================================================
   PAGE
========================================================= */
export default function Home({ loaderData: { nowISO } }: Route.ComponentProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "TypingStories",
        url: "https://typingstories.com/",
        description:
          "TypingStories helps students and writers improve typing speed with interactive stories, games, and creative challenges.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is TypingStories free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All basic typing stories, speed tests, and writing prompts are free. Optional premium packs may be added later.",
            },
          },
          {
            "@type": "Question",
            name: "Can beginners use TypingStories?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. The stories start with slow-paced easy words and grow in difficulty as your typing improves.",
            },
          },
          {
            "@type": "Question",
            name: "Is it kid-friendly?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. TypingStories includes family-safe stories, fairy-tale typing adventures, and classroom-friendly content.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to install any software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No downloads needed. TypingStories works online in your browser on desktop, tablet, and mobile.",
            },
          },
          {
            "@type": "Question",
            name: "Can I track my typing progress?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can save your scores, monitor speed (WPM), and revisit stories to beat your personal best.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-indigo-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP BAR */}
      <div className="w-full border-b border-indigo-100 bg-indigo-50/70">
        <div className="mx-auto max-w-7xl px-4 py-2 text-sm text-indigo-700">
          Fun typing practice • Last updated{" "}
          {new Date(nowISO).toLocaleDateString()}
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-indigo-800">
              Make Typing Practice Fun with Interactive Stories
            </h1>
            <p className="text-lg text-slate-800 leading-relaxed">
              <strong>TypingStories</strong> transforms boring drills into
              <strong> storytelling adventures</strong>. Improve typing speed
              and accuracy by typing along with fairy tales, mystery quests,
              sci-fi adventures, and custom writing prompts. Great for students,
              hobby writers, and anyone wanting to boost keyboard skills.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#stories"
                className="rounded-lg border border-indigo-300 bg-white px-4 py-2 text-indigo-800 shadow-sm hover:bg-indigo-100"
              >
                Explore Stories
              </a>
              <a
                href="#speed-test"
                className="rounded-lg border border-indigo-300 bg-white px-4 py-2 text-indigo-800 shadow-sm hover:bg-indigo-100"
              >
                Take a Speed Test
              </a>
            </div>
          </div>

          <Card>
            <h2 className="text-base font-semibold text-indigo-900">
              Highlights
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
              <li>📚 Typing adventure stories</li>
              <li>🎮 Typing games for all ages</li>
              <li>⚡ Speed & accuracy tracking</li>
              <li>✍️ Creative writing prompts</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* STORIES */}
      <section
        id="stories"
        className="mx-auto max-w-7xl px-4 py-10 space-y-8 leading-relaxed text-slate-800"
      >
        <h2 className="text-2xl font-bold text-indigo-800">
          Interactive Typing Stories
        </h2>
        <p>
          Type your way through fairy-tales, thrilling mysteries, and
          choose-your-own-adventure quests. Every typed word advances the story
          and improves your muscle memory.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-indigo-800">
              Fairy Tale Adventures
            </h3>
            <p className="text-sm">
              Perfect for younger learners, featuring short, fun stories with
              gradual speed progression.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-800">
              Mystery & Detective Quests
            </h3>
            <p className="text-sm">
              Solve riddles and unlock clues by typing dialogue and action
              scenes with increasing pace.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-800">
              Sci-Fi Galaxy Missions
            </h3>
            <p className="text-sm">
              Blast through alien worlds and star-ships while practicing speed
              typing with vivid storylines.
            </p>
          </Card>
        </div>
      </section>

      {/* SPEED TEST */}
      <section
        id="speed-test"
        className="mx-auto max-w-7xl px-4 py-10 space-y-8 leading-relaxed text-slate-800"
      >
        <h2 className="text-2xl font-bold text-indigo-800">
          Typing Speed Tests & Drills
        </h2>
        <p>
          Challenge yourself with timed tests, accuracy drills, and leaderboard
          competitions. Track <strong>WPM (words per minute)</strong>, accuracy
          percentage, and aim for new personal bests every week.
        </p>
      </section>

      {/* WRITING PROMPTS */}
      <section
        id="prompts"
        className="mx-auto max-w-7xl px-4 py-10 space-y-8 leading-relaxed text-slate-800"
      >
        <h2 className="text-2xl font-bold text-indigo-800">
          Creative Writing Prompts
        </h2>
        <p>
          Build both typing skills and imagination. Use daily prompts for
          poetry, micro-fiction, essays, or journaling while developing rhythm
          and speed on the keyboard.
        </p>
      </section>

      {/* SEO-RICH LONGFORM CONTENT */}
      <section
        id="typingstories-longform"
        className="mx-auto max-w-7xl px-4 py-12 space-y-12 leading-relaxed text-slate-800"
      >
        {/* INTRO */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-800">
            Boost Your Typing Skills While Enjoying Stories
          </h2>
          <p>
            <strong>TypingStories</strong> is more than just a typing test site.
            It blends
            <strong> interactive storytelling</strong>,{" "}
            <strong>touch typing drills</strong>, and
            <strong> creative writing prompts</strong> into a single platform
            that helps you type faster while having fun. Instead of dull
            repetitive words, you practice through
            <strong> meaningful sentences</strong> that hold your attention.
            This approach keeps learners engaged, whether they’re beginners
            discovering the keyboard or advanced users polishing their speed and
            accuracy.
          </p>
        </div>

        {/* WHY TYPING MATTERS */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Why Improving Typing Speed and Accuracy Matters
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Productivity boost:</strong> Faster typing saves hours for
              students, professionals, and writers.
            </li>
            <li>
              <strong>Better focus:</strong> Touch typing lets your eyes stay on
              the screen and your thoughts on your ideas.
            </li>
            <li>
              <strong>Creative flow:</strong> The quicker your fingers keep up
              with your brain, the more fluid your writing.
            </li>
            <li>
              <strong>Competitive edge:</strong> High WPM (words per minute) is
              an advantage in data entry jobs, coding, and real-time
              communication.
            </li>
            <li>
              <strong>Accessibility:</strong> Practicing through stories
              motivates even reluctant learners and kids.
            </li>
          </ul>
        </div>

        {/* ERGONOMICS */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Ergonomic Tips for Healthy Typing
          </h3>
          <p>
            Practicing typing for long sessions should never cause discomfort.
            Proper posture and ergonomics protect your wrists, shoulders, and
            back:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              🪑 Sit with feet flat on the ground and elbows at 90 degrees.
            </li>
            <li>
              ⌨️ Keep wrists straight, hovering slightly above the keyboard, not
              resting heavily.
            </li>
            <li>🖥️ Position the monitor at eye level to reduce neck strain.</li>
            <li>
              💡 Ensure good lighting to prevent eye fatigue during late-night
              practice sessions.
            </li>
            <li>
              ⏱️ Take a 2-minute break every 20 minutes to stretch hands and
              fingers.
            </li>
          </ul>
        </div>

        {/* TOUCH TYPING BASICS */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Mastering Touch Typing Basics
          </h3>
          <p>
            Learning to type without looking at the keyboard is the foundation
            of
            <strong> touch typing</strong>. Focus on:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Start with the <strong>home row keys</strong> (ASDF JKL;), keeping
              fingers lightly anchored.
            </li>
            <li>
              Memorize the <strong>correct finger placement</strong> for each
              letter to reduce unnecessary movement.
            </li>
            <li>
              Use short typing stories and drills to reinforce muscle memory.
            </li>
            <li>Track your WPM and accuracy weekly to see progress.</li>
          </ul>
        </div>

        {/* GAMIFIED LEARNING */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            How Gamified Story Practice Keeps You Motivated
          </h3>
          <p>
            TypingStories uses <strong>interactive narratives</strong> where
            each word typed advances a story scene. Gamification boosts
            motivation:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              🏆 Score points for completing stories quickly and accurately.
            </li>
            <li>
              🎯 Progress through levels-fairy tales for beginners, mysteries
              for intermediate learners, sci-fi quests for pros.
            </li>
            <li>
              🎮 Unlock achievements and badges for consistent practice streaks.
            </li>
            <li>
              📈 Visual charts help track typing speed improvements over time.
            </li>
          </ul>
          <p>
            This game-like structure keeps learners excited and encourages daily
            practice, which is key to building typing stamina.
          </p>
        </div>

        {/* CREATIVE WRITING BENEFITS */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Enhance Creativity with Writing Prompts
          </h3>
          <p>
            Practicing with <strong>creative writing prompts</strong> helps
            users not only type faster but also improve storytelling skills.
            Teachers often use writing prompts to encourage students to write
            paragraphs and essays, and TypingStories integrates them into typing
            sessions for dual benefits.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              ✍️ Daily micro-fiction prompts spark imagination while improving
              rhythm.
            </li>
            <li>
              📝 Themed prompts such as sci-fi battles or fairy-tale endings
              keep practice fun.
            </li>
            <li>
              🧠 Writing practice enhances vocabulary and critical thinking
              alongside typing skills.
            </li>
          </ul>
        </div>

        {/* ACCURACY STRATEGIES */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Tips to Improve Accuracy Before Speed
          </h3>
          <p>
            It’s better to type slower with fewer errors than to race ahead with
            mistakes. Accuracy builds the foundation for later speed increases:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>👀 Keep your eyes on the screen, not the keyboard.</li>
            <li>⌨️ Focus on finger memory to reduce missed keys.</li>
            <li>
              🔁 Repeat tricky words or phrases until they become second nature.
            </li>
            <li>
              📊 Use accuracy charts to identify weak spots-like punctuation or
              numbers.
            </li>
            <li>🧘 Slow down during complex passages to maintain control.</li>
          </ul>
        </div>

        {/* HISTORY OF TYPING */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            A Brief History of Typing and Keyboards
          </h3>
          <p>
            The journey of typing began with the invention of mechanical
            typewriters in the late 19th century. Early typists practiced on
            manual QWERTY layouts that shaped modern keyboard standards. With
            the digital revolution, touch typing became essential for computers,
            smartphones, and workplace communication.
          </p>
          <p>
            Understanding the origins of typing helps learners appreciate the
            progress from typewriters to ergonomic split keyboards and
            customizable key layouts like
            <strong> Dvorak</strong> and <strong>Colemak</strong>, often
            preferred by advanced typists for efficiency.
          </p>
        </div>

        {/* KEYBOARD SETUP */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Choosing the Right Keyboard Setup
          </h3>
          <p>A comfortable keyboard setup can make a significant difference:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              ⌨️ Opt for a keyboard with tactile feedback or mechanical switches
              for better control.
            </li>
            <li>💡 Ensure good backlighting for night practice sessions.</li>
            <li>🖐️ Use wrist rests and adjustable stands to prevent strain.</li>
            <li>
              ⚙️ Experiment with alternative layouts if you’re aiming for
              competitive typing speeds.
            </li>
          </ul>
        </div>

        {/* EXAM & CAREER BENEFITS */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Typing Skills for Exams, Work & Careers
          </h3>
          <p>
            Students benefit from typing speed when writing essays under timed
            conditions, while professionals save valuable minutes in email and
            documentation tasks. Careers in transcription, content writing, and
            data entry highly value strong typing skills. Competitive typists
            can even participate in online typing competitions and earn
            recognition for their WPM milestones.
          </p>
        </div>

        {/* CONSISTENCY */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Consistency Is Key to Improvement
          </h3>
          <p>
            The fastest way to reach 80–100+ WPM is through{" "}
            <strong>short, consistent practice</strong>
            every day rather than rare marathon sessions. Using TypingStories’
            streak trackers and daily goals helps learners develop a sustainable
            habit that leads to lasting progress.
          </p>
        </div>

        {/* CONCLUSION */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Transform Your Typing Journey
          </h3>
          <p>
            With <strong>TypingStories</strong>, you’ll never have to endure
            boring drills again. By blending gamified stories, accurate touch
            typing drills, ergonomic guidance, and creative writing exercises,
            the platform makes typing practice enjoyable for all ages. Every
            story you complete takes you a step closer to mastering the keyboard
            while unlocking your inner storyteller.
          </p>
        </div>
      </section>

      {/* ADDITIONAL SEO-RICH CONTENT */}
      <section
        id="typingstories-advanced"
        className="mx-auto max-w-7xl px-4 py-12 space-y-12 leading-relaxed text-slate-800"
      >
        {/* PSYCHOLOGY OF PRACTICE */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-800">
            The Psychology Behind Faster Typing
          </h2>
          <p>
            Typing improvement depends not only on muscle memory but also on
            <strong> mindset, focus, and motivation</strong>. Studies show that
            gamified repetition creates{" "}
            <strong>positive reinforcement loops</strong>-as players see scores
            rise, dopamine release encourages them to practice longer. Using{" "}
            <strong>story-driven practice</strong> also reduces mental fatigue
            by keeping the brain engaged in narrative context rather than
            abstract drills.
          </p>
          <p>
            Learners who set <strong>specific measurable goals</strong>-like
            adding 5 WPM each month-progress 30-50% faster than those without
            milestones. Keeping a<strong>practice journal</strong> or using
            TypingStories’ streak tracker sustains motivation over time.
          </p>
        </div>

        {/* MEMORY & VISUALIZATION */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Muscle Memory and Visualization Tricks
          </h3>
          <p>
            Speed gains come from converting keystrokes into{" "}
            <strong>automatic muscle memory</strong>. Visualization
            techniques-like mentally picturing the keyboard while away from the
            computer-help reinforce neural pathways. Short five-minute
            visualization sessions combined with{" "}
            <strong>daily 10-15 minute typing bursts</strong> accelerate
            progress without long tiring sessions.
          </p>
        </div>

        {/* ACCESSIBILITY & INCLUSION */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Accessibility-Friendly Typing Practice
          </h3>
          <p>
            TypingStories is designed to be <strong>inclusive</strong> for
            learners with varied needs. Large-font story mode, dark-theme
            options, adjustable color contrast, and
            <strong> screen-reader compatible UI</strong> support low-vision
            users. Break timers and ergonomic reminders reduce strain for people
            prone to repetitive-stress injuries.
          </p>
          <p>
            This inclusive approach ensures that typing improvement is open to
            students, seniors, and those in rehabilitation programs alike.
          </p>
        </div>

        {/* MULTILINGUAL PRACTICE */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Typing Practice in Multiple Languages
          </h3>
          <p>
            Beyond English, TypingStories plans to include{" "}
            <strong>multilingual stories</strong> such as Spanish, French,
            German, Hindi, and Japanese romaji. Practicing in different
            languages introduces new letter patterns, punctuation habits, and
            accent marks that boost <strong>keyboard agility</strong> and
            benefit polyglot learners or international typists preparing for
            language-specific tests.
          </p>
        </div>

        {/* COMPETITIVE TYPING */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Competitive Typing Challenges & Leaderboards
          </h3>
          <p>
            Many learners thrive on a competitive spark. Weekly{" "}
            <strong>speed races</strong> let players type identical passages to
            rank on global <strong>WPM leaderboards</strong>. Public challenges
            encourage consistency, while <strong>accuracy bonuses</strong>{" "}
            reward clean typing over reckless speed. These events gamify
            improvement for students and hobby typists aiming for 100+ WPM
            milestones.
          </p>
        </div>

        {/* ERGONOMIC STRETCH ROUTINES */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Finger & Wrist Health: Stretching Routines
          </h3>
          <p>
            Preventing fatigue keeps practice sustainable. Experts recommend:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>🖐️ Finger spreads and clenches every 15 minutes.</li>
            <li>
              💪 Wrist rotations clockwise and counter-clockwise during breaks.
            </li>
            <li>
              🧘 Shoulder shrugs and neck rolls to avoid upper-body stiffness.
            </li>
            <li>
              ⏱️ Micro-breaks: 20-second pauses for every 10 minutes of typing.
            </li>
          </ul>
          <p>
            These stretches are simple but reduce the risk of repetitive-strain
            injuries, especially for marathon writing sessions or long gaming
            nights.
          </p>
        </div>

        {/* STORY-BASED LEARNING SCIENCE */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Why Story-Based Typing Improves Retention
          </h3>
          <p>
            Cognitive science shows that humans remember{" "}
            <strong>contextual words</strong> inside stories far better than
            random strings. By associating keystrokes with a narrative,
            TypingStories encourages <strong>deeper encoding</strong> in memory
            and improves both accuracy and recall of tricky punctuation
            patterns.
          </p>
          <p>
            Teachers using story-based lessons in class report improved student
            engagement and longer sustained focus compared to standard typing
            drills.
          </p>
        </div>

        {/* KEYBOARD SHORTCUTS */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Keyboard Shortcuts for Power Typists
          </h3>
          <p>
            Improving speed isn’t limited to letters. Mastering{" "}
            <strong>common OS and editor shortcuts</strong> saves time:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Ctrl/⌘ + Backspace to delete whole words efficiently.</li>
            <li>Alt/Option + Arrow Keys for quick cursor navigation.</li>
            <li>Shift + Ctrl/⌘ + Arrow Keys to select text by word or line.</li>
            <li>
              Custom hotkeys in writing software for inserting frequent symbols.
            </li>
          </ul>
          <p>
            Practicing these within story mode can boost overall workflow
            productivity for students, programmers, and writers.
          </p>
        </div>

        {/* TYPING STYLES */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Comparing Typing Styles & Layouts
          </h3>
          <p>
            Advanced learners may experiment with alternative layouts like
            <strong> Dvorak</strong> or <strong> Colemak</strong> to reduce
            finger travel. Touch typists can also test split mechanical
            keyboards or ortholinear boards for ergonomic benefits.
            TypingStories will soon allow users to pick{" "}
            <strong>layout-specific lessons</strong> to ease the transition and
            measure speed gains.
          </p>
        </div>

        {/* WRITING COMMUNITY */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Join the Writing & Typing Community
          </h3>
          <p>
            A supportive community accelerates skill development. TypingStories
            encourages users to share{" "}
            <strong>
              custom prompts, story scripts, and personal WPM progress
            </strong>
            . Community challenges keep learners engaged, and collaborative
            storytelling games make practice both social and educational.
          </p>
        </div>

        {/* CONCLUSION */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Building Lifelong Typing Confidence
          </h3>
          <p>
            By combining <strong>psychology-driven practice</strong>, ergonomic
            awareness, multilingual support, community engagement, and fun story
            contexts,
            <strong> TypingStories</strong> helps learners turn daily exercises
            into a rewarding lifelong skill. The platform proves that typing
            practice can be as entertaining as any casual game while offering
            real-world benefits for school, work, and creative hobbies.
          </p>
        </div>
      </section>

      {/* ADDITIONAL SEO-RICH CONTENT */}
      <section
        id="typingstories-advanced"
        className="mx-auto max-w-7xl px-4 py-12 space-y-12 leading-relaxed text-slate-800"
      >
        {/* PSYCHOLOGY OF PRACTICE */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-800">
            The Psychology Behind Faster Typing
          </h2>
          <p>
            Typing improvement depends not only on muscle memory but also on
            <strong> mindset, focus, and motivation</strong>. Studies show that
            gamified repetition creates{" "}
            <strong>positive reinforcement loops</strong>-as players see scores
            rise, dopamine release encourages them to practice longer. Using{" "}
            <strong>story-driven practice</strong> also reduces mental fatigue
            by keeping the brain engaged in narrative context rather than
            abstract drills.
          </p>
          <p>
            Learners who set <strong>specific measurable goals</strong>-like
            adding 5 WPM each month-progress 30-50% faster than those without
            milestones. Keeping a<strong>practice journal</strong> or using
            TypingStories’ streak tracker sustains motivation over time.
          </p>
        </div>

        {/* MEMORY & VISUALIZATION */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Muscle Memory and Visualization Tricks
          </h3>
          <p>
            Speed gains come from converting keystrokes into{" "}
            <strong>automatic muscle memory</strong>. Visualization
            techniques-like mentally picturing the keyboard while away from the
            computer-help reinforce neural pathways. Short five-minute
            visualization sessions combined with{" "}
            <strong>daily 10-15 minute typing bursts</strong> accelerate
            progress without long tiring sessions.
          </p>
        </div>

        {/* ACCESSIBILITY & INCLUSION */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Accessibility-Friendly Typing Practice
          </h3>
          <p>
            TypingStories is designed to be <strong>inclusive</strong> for
            learners with varied needs. Large-font story mode, dark-theme
            options, adjustable color contrast, and
            <strong> screen-reader compatible UI</strong> support low-vision
            users. Break timers and ergonomic reminders reduce strain for people
            prone to repetitive-stress injuries.
          </p>
          <p>
            This inclusive approach ensures that typing improvement is open to
            students, seniors, and those in rehabilitation programs alike.
          </p>
        </div>

        {/* MULTILINGUAL PRACTICE */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Typing Practice in Multiple Languages
          </h3>
          <p>
            Beyond English, TypingStories plans to include{" "}
            <strong>multilingual stories</strong> such as Spanish, French,
            German, Hindi, and Japanese romaji. Practicing in different
            languages introduces new letter patterns, punctuation habits, and
            accent marks that boost <strong>keyboard agility</strong> and
            benefit polyglot learners or international typists preparing for
            language-specific tests.
          </p>
        </div>

        {/* COMPETITIVE TYPING */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Competitive Typing Challenges & Leaderboards
          </h3>
          <p>
            Many learners thrive on a competitive spark. Weekly{" "}
            <strong>speed races</strong> let players type identical passages to
            rank on global <strong>WPM leaderboards</strong>. Public challenges
            encourage consistency, while <strong>accuracy bonuses</strong>{" "}
            reward clean typing over reckless speed. These events gamify
            improvement for students and hobby typists aiming for 100+ WPM
            milestones.
          </p>
        </div>

        {/* ERGONOMIC STRETCH ROUTINES */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Finger & Wrist Health: Stretching Routines
          </h3>
          <p>
            Preventing fatigue keeps practice sustainable. Experts recommend:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>🖐️ Finger spreads and clenches every 15 minutes.</li>
            <li>
              💪 Wrist rotations clockwise and counter-clockwise during breaks.
            </li>
            <li>
              🧘 Shoulder shrugs and neck rolls to avoid upper-body stiffness.
            </li>
            <li>
              ⏱️ Micro-breaks: 20-second pauses for every 10 minutes of typing.
            </li>
          </ul>
          <p>
            These stretches are simple but reduce the risk of repetitive-strain
            injuries, especially for marathon writing sessions or long gaming
            nights.
          </p>
        </div>

        {/* STORY-BASED LEARNING SCIENCE */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Why Story-Based Typing Improves Retention
          </h3>
          <p>
            Cognitive science shows that humans remember{" "}
            <strong>contextual words</strong> inside stories far better than
            random strings. By associating keystrokes with a narrative,
            TypingStories encourages <strong>deeper encoding</strong> in memory
            and improves both accuracy and recall of tricky punctuation
            patterns.
          </p>
          <p>
            Teachers using story-based lessons in class report improved student
            engagement and longer sustained focus compared to standard typing
            drills.
          </p>
        </div>

        {/* KEYBOARD SHORTCUTS */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Keyboard Shortcuts for Power Typists
          </h3>
          <p>
            Improving speed isn’t limited to letters. Mastering{" "}
            <strong>common OS and editor shortcuts</strong> saves time:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Ctrl/⌘ + Backspace to delete whole words efficiently.</li>
            <li>Alt/Option + Arrow Keys for quick cursor navigation.</li>
            <li>Shift + Ctrl/⌘ + Arrow Keys to select text by word or line.</li>
            <li>
              Custom hotkeys in writing software for inserting frequent symbols.
            </li>
          </ul>
          <p>
            Practicing these within story mode can boost overall workflow
            productivity for students, programmers, and writers.
          </p>
        </div>

        {/* TYPING STYLES */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Comparing Typing Styles & Layouts
          </h3>
          <p>
            Advanced learners may experiment with alternative layouts like
            <strong> Dvorak</strong> or <strong> Colemak</strong> to reduce
            finger travel. Touch typists can also test split mechanical
            keyboards or ortholinear boards for ergonomic benefits.
            TypingStories will soon allow users to pick{" "}
            <strong>layout-specific lessons</strong> to ease the transition and
            measure speed gains.
          </p>
        </div>

        {/* WRITING COMMUNITY */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Join the Writing & Typing Community
          </h3>
          <p>
            A supportive community accelerates skill development. TypingStories
            encourages users to share{" "}
            <strong>
              custom prompts, story scripts, and personal WPM progress
            </strong>
            . Community challenges keep learners engaged, and collaborative
            storytelling games make practice both social and educational.
          </p>
        </div>

        {/* CONCLUSION */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Building Lifelong Typing Confidence
          </h3>
          <p>
            By combining <strong>psychology-driven practice</strong>, ergonomic
            awareness, multilingual support, community engagement, and fun story
            contexts,
            <strong> TypingStories</strong> helps learners turn daily exercises
            into a rewarding lifelong skill. The platform proves that typing
            practice can be as entertaining as any casual game while offering
            real-world benefits for school, work, and creative hobbies.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-7xl px-4 py-10 leading-relaxed text-slate-800"
      >
        <h2 className="text-2xl font-bold text-indigo-800">
          Frequently Asked Questions
        </h2>
        <dl className="mt-6 space-y-6">
          {(jsonLd["@graph"][1].mainEntity as any[]).map((q, i) => (
            <div key={i}>
              <dt className="font-semibold text-indigo-900">{q.name}</dt>
              <dd className="mt-1">{q.acceptedAnswer.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-indigo-200 bg-indigo-50/60 py-8 text-center text-sm text-indigo-800">
        © {new Date().getFullYear()} TypingStories • Type Faster, Tell Stories
        Better
      </footer>
    </main>
  );
}
