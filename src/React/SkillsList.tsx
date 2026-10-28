import { useState, type ReactElement } from "react";

const CategoryIcons: Record<string, ReactElement> = {
  "Mobile": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
  ),
  "Architecture & Backend": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg>
  ),
  "Agentic AI": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
  ),
  "Testing & CI/CD": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><path d="M21 12a9 9 0 1 1-9-9"/><path d="m9 11 3 3L22 4"/></svg>
  ),
  "Accessibility & Design Systems": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><circle cx="12" cy="4" r="2"/><path d="M5 8h14"/><path d="M12 8v6"/><path d="m8 21 4-7 4 7"/></svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills: Record<string, string[]> = {
    Mobile: [
      "Platform: Modern Android Development (MAD), Android SDK, Kotlin & Java, Material Design, RecyclerView, ViewPager, Looper / Handler, DataBinding, deep linking",
      "Jetpack: Compose, Navigation (incl. Navigation 3 & type-safe routes), ViewModel, LiveData, Room, Paging, Lifecycle, WorkManager, Data Binding",
      "Compose UI: LazyColumn / nested lists, live search, drag & drop, Google Maps, Compose Multiplatform, accessibility semantics",
      "Multiplatform: Kotlin Multiplatform (KMP) and Compose Multiplatform for Android + iOS",
      "Async & reactive: Kotlin Coroutines & Flows, RxJava / RxAndroid, Arrow",
      "Networking: Retrofit, OkHttp, Volley, Ktor, GraphQL, REST, Moshi / Gson, MSAL & OAuth authentication",
      "Dependency injection: Dagger 2, Dagger Hilt, Koin",
      "Images & media: Coil, Glide, Picasso, MiSnap capture, barcode scanning",
      "Architecture: Clean Architecture, MVVM, MVI, MVP, multi-module projects, convention plugins & Gradle Kotlin DSL",
      "Quality: JUnit, Mockito, Robolectric, Espresso, Compose UI testing, TDD, TalkBack / WCAG 2.1 AA",
      "Firebase, Google Maps, Android Pay, Gemini and on-device / local LLM (Ollama) integrations",
    ],
    "Architecture & Backend": [
      "MVVM · MVI · MVP",
      "Kotlin Coroutines & Flows · RxJava",
      "Dagger 2 / Hilt · Spring Boot / JPA · Node.js",
      "REST (Retrofit / Volley) · GraphQL",
      "Kotlin · Java · Python · C# · Bash",
      "PostgreSQL · MySQL · Oracle · SQLite",
    ],
    "Agentic AI": [
      "Ollama · LangChain4j · Google ADK",
      "Claude Code · GitHub Copilot · Cursor · Windsurf",
      "n8n · LM Studio",
    ],
    "Testing & CI/CD": [
      "JUnit · Mockito · Robolectric · TDD",
      "Jenkins · Bitrise · GitHub · GitLab · Bitbucket",
      "JFrog Artifactory · LaunchDarkly · Datadog · PagerDuty",
    ],
    "Accessibility & Design Systems": [
      "ADA / WCAG 2.1 AA · TalkBack",
      "Enterprise design systems (AmxDS, MDS)",
      "Figma · Sketch · Miro · InVision",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[1200px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
