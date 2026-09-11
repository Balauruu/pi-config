const fs = require('fs');

const dataPath = '/home/balauru/.pi/agent/.research/youtube-tools-data.json';
const outputPath = '/home/balauru/.pi/agent/youtube-tools-landscape-2026-09-11.md';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const taxonomy = {
  T1: ['Native platform, creator and developer surfaces', 'First-party YouTube/Google products, Studio workflows, rights tools and supported APIs.'],
  T2: ['Channel discovery, SEO, analytics and packaging', 'Keyword, competitor, rank, idea, title, thumbnail and public-channel intelligence.'],
  T3: ['Creation, editing, localization and repurposing', 'Video/graphic creation, post-production, Shorts extraction, captions, translation and dubbing.'],
  T4: ['Live production, broadcast and chat', 'Encoders, browser studios, multistreaming, continuous playout, overlays and chat automation.'],
  T5: ['Playback, focus, accessibility and social viewing', 'Alternative clients, browser enhancements, community data layers, distraction controls and watch rooms.'],
  T6: ['Acquisition, archiving and self-hosting', 'Downloaders, archive managers, media-library sync, livestream capture and self-hosted download UIs.'],
  T7: ['Transcripts, learning, summarization and knowledge capture', 'Transcript retrieval, video Q&A, study aids, language learning and note systems.'],
  T8: ['Developer libraries, automation and AI/MCP', 'Unofficial clients, language libraries, command interfaces and agent-facing MCP servers.'],
  T9: ['Data collection, research, verification and scraping APIs', 'Research collectors, forensic utilities, transcript search, managed scrapers and SERP/data APIs.'],
  T10: ['Publishing, comments, operations and small utilities', 'Schedulers, social inboxes, comment pickers, playlist helpers and multi-utility sites.'],
  T11: ['Rights, music, sponsorships and influence intelligence', 'Content identification/administration, music licensing, creator discovery and campaign operations.']
};

const weakNames = new Set([
  'AccuRanker YouTube Rank Tracker',
  'Amnesty YouTube DataViewer',
  'AskTube.ai',
  'CreatorML',
  'SavorYT',
  'summarize.tech',
  'Tango',
  'Unbox Social',
  'YTScribe.io'
]);

const active = data.tools.filter(r => !weakNames.has(r[0])).sort((a, b) => a[0].localeCompare(b[0], 'en', {sensitivity: 'base'}));

const unavailable = [
  ['AccuRanker YouTube Rank Tracker', 'Weak/conflicting', 'Search results and vendor references described a current product, but the direct product route returned HTTP 404 on 2026-09-11. Retained as a lead, not a current catalog entry.', 'https://www.accuranker.com/youtube-rank-tracker/'],
  ['Amnesty YouTube DataViewer', 'Historical/availability unclear', 'Important early verification tool. The explanatory workflow remains useful, but current utility operation was not established.', 'https://www.amnesty.org/en/latest/campaigns/2014/07/real-vs-fake-how-to-authenticate-youtube-videos-for-human-rights-work/'],
  ['AskTube.ai', 'Temporarily unavailable or weak', 'Discovery sources described a video-Q&A product, but the direct site returned HTTP 503 at verification.', 'https://asktube.ai/'],
  ['Creator Studio Classic', 'Retired', 'Superseded by YouTube Studio.', 'https://support.google.com/youtube/answer/57407'],
  ['CreatorML', 'Weak/conflicting', 'Historical launch evidence exists, but current availability is uncertain and direct retrieval had certificate failure.', 'https://www.ycombinator.com/launches/IEp-creatorml-ml-powered-predictive-analytics-for-youtube-creators'],
  ['DF Tube', 'Removed/weak', 'Historically important distraction-removal extension. Current store availability was not established.', 'https://chromewebstore.google.com/detail/df-tube-distraction-free/mjdepdfccjgcndkmemponafgioodelna'],
  ['FreeTubeAndroid', 'Weak/unofficial port', 'FreeTube documents that similarly named Android work is not its official project. A canonical maintained port was not established.', 'https://github.com/FreeTubeApp/FreeTube'],
  ['Magic Actions for YouTube', 'Historical/removed', 'Notable all-in-one enhancement extension, but current verified availability was not established.', 'https://chromewebstore.google.com/detail/magic-actions-for-youtube/abjcfabbhafbcdfjoecdgepllmpfceif'],
  ['Minitube', 'Historical/current compatibility unclear', 'Long-running desktop YouTube viewer. Maintenance and current playback compatibility were not adequately established in this pass.', 'https://flavio.tordini.org/minitube'],
  ['Netlytic YouTube collection', 'Weak/current scope unclear', 'Historically used for YouTube comment/network research; current YouTube collection availability was not confirmed.', 'https://netlytic.org/'],
  ['Original Pinchflat repository', 'Stalled/superseded', 'The original project appeared stalled; the CommunityMaintained fork is cataloged as the current continuation.', 'https://github.com/kieraneglin/pinchflat'],
  ['PokeTube', 'Degraded/unavailable', 'Alternative front end with reported service degradation. Project and public-instance status should be rechecked before use.', 'https://status.poketube.fun/'],
  ['PureTube', 'Weak lead', 'A recent Hacker News item described an ad-free YouTube front end, but no canonical product evidence was recovered.', 'https://news.ycombinator.com/item?id=49525184'],
  ['SavorYT', 'Unavailable at verification', 'Discovery sources named a multi-utility site, but DNS lookup failed on 2026-09-11.', 'https://savoryt.com/'],
  ['SMTube / SMPlayer YouTube browser', 'Historical/current compatibility unclear', 'Relevant desktop integration, but current YouTube extraction/playback evidence was not established.', 'https://www.smtube.org/'],
  ['Standalone YouTube Gaming app', 'Retired', 'Gaming was moved into the main YouTube experience.', 'https://blog.youtube/news-and-events/gaming-gets-new-home-on-youtube'],
  ['summarize.tech', 'Temporarily unavailable or weak', 'The product is widely referenced and search-indexed, but direct retrieval returned HTTP 503 at verification.', 'https://www.summarize.tech/'],
  ['Tango', 'New/weakly verified', 'A 2026-09-11 Reddit post described an MIT-licensed transcript-to-Anki CLI, but the canonical repository URL was not recovered.', 'https://www.reddit.com/r/opensource/comments/1wdoqzm/i_built_an_opensource_cli_for_turning_youtube/'],
  ['Unbox Social YouTube Analytics', 'Unavailable or weak', 'Search sources described the product, but its direct YouTube analytics route returned HTTP 500 at verification.', 'https://www.unboxsocial.com/youtube-analytics'],
  ['ViewTube', 'Maintenance reduced/unclear', 'Open-source front end with reported semi-paused development; do not infer instance health from repository existence.', 'https://github.com/ViewTube/viewtube'],
  ['CloudTube', 'Dormant/unclear', 'Alternative front-end project with uncertain current maintenance and service compatibility.', 'https://sr.ht/~cadence/cloudtube/'],
  ['YouTube Center', 'Abandoned', 'Historically influential userscript/extension customization project; repository is retained for landscape history.', 'https://github.com/YePpHa/YouTubeCenter'],
  ['YouTube Data API v2', 'Deprecated', 'Legacy API superseded by Data API v3.', 'https://developers.google.com/youtube/v3/docs'],
  ['YouTube Go', 'Discontinued', 'Google announced the app would go away in August 2022.', 'https://support.google.com/youtube/thread/162222567/youtube-go-is-going-away-in-august-of-this-year'],
  ['YouTube iOS Player Helper', 'Archived', 'Official helper repository is archived/read-only; use current IFrame guidance unless a specific legacy requirement applies.', 'https://github.com/youtube/youtube-ios-player-helper'],
  ['YouTube Android Player API', 'Deprecated/archived', 'Official native player repository is archived; current web embedding uses the IFrame Player API.', 'https://github.com/youtube/yt-android-player'],
  ['youtube-dl', 'Maintained status weak/superseded', 'Historically foundational downloader. Most current tools found in this study use the more actively maintained yt-dlp fork.', 'https://github.com/ytdl-org/youtube-dl'],
  ['YoutubeDL-Material', 'Stale', 'Self-hosted web UI associated with the older youtube-dl stack; current maintenance evidence was weak.', 'https://github.com/Tzahi12345/YoutubeDL-Material'],
  ['YTScribe.io', 'Temporarily unavailable or weak', 'The transcript site was search-indexed, but direct retrieval returned HTTP 502 at verification. The name also collides with unrelated products.', 'https://ytscribe.io/']
];

const limits = {
  L1: 'Vendor-documented capability or pricing; not independently performance-tested.',
  L2: 'Public/estimated score or competitor data unless the channel owner authorizes private metrics.',
  L3: 'Unofficial, reverse-engineered or scraping-dependent; YouTube changes can break it.',
  L4: 'OAuth, API quota, platform policy or connected-account constraints apply.',
  L5: 'Transcript, model, translation or generated-output quality varies; verify consequential output.',
  L6: 'Download/archive workflows depend on extraction health and the user having permission to save or reuse content.',
  L7: 'Public-instance or remote-service availability is a separate dependency.',
  L8: 'Store/repository presence does not prove current browser/app functionality; permissions were not audited.',
  L9: 'Country, account, content, rights, partner or eligibility restrictions apply.',
  L10: 'General-purpose product included only because its source documents a YouTube-specific workflow.'
};

const counts = {};
for (const r of active) counts[r[2]] = (counts[r[2]] || 0) + 1;

function esc(v) {
  return String(v).replaceAll('|', '\\|').replaceAll('\n', ' ');
}
function link(label, url) {
  return `[${esc(label)}](${url})`;
}
function table(rows, headers) {
  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map(row => `| ${row.map(esc).join(' | ')} |`)
  ].join('\n');
}

const report = [];
report.push('# YouTube-related tools: an exploratory landscape');
report.push('');
report.push(`**Research date:** ${data.verified}  `);
report.push(`**Coverage:** ${active.length} current or plausibly current catalog entries across ${Object.keys(taxonomy).length} evidence-derived categories, plus ${unavailable.length} unavailable, abandoned, conflicting, or weakly verified entries.  `);
report.push('**Research program:** three substantive independent researcher returns (first-party, installable apps, browser extensions), one forge-stream return that failed to include its ledger, direct source-angle sweeps for the missing ecosystems, and one `last30days` current-field scan.');
report.push('');
report.push('This is a best-effort comprehensive landscape, not a claim that every YouTube-related tool has been found. “Live” means a canonical page, store record, documentation page or repository was reachable or independently surfaced at verification. It does not mean the tool was installed, purchased, authenticated, or functionally tested.');
report.push('');
report.push('## 1. Executive overview');
report.push('');
report.push('1. **The market is much wider than creator SEO.** The largest clusters found were creation/editing/localization, playback and browser modification, channel intelligence, first-party surfaces, and data/research tooling. The example metadata inspector sits in a broader verification and research cluster rather than defining the landscape.');
report.push('2. **Two technical foundations recur.** Supported products use YouTube Studio, OAuth and official APIs. Alternative viewers, downloaders, transcript tools and many data services use public pages, scraping or private InnerTube behavior. The second group often offers capabilities the official stack does not, but has materially higher breakage and policy risk.');
report.push('3. **A few projects are infrastructure for many others.** `yt-dlp` underpins numerous download/archive GUIs; Invidious and Piped underpin alternative clients; SponsorBlock, DeArrow and Return YouTube Dislike provide shared community datasets; OBS anchors a plugin-heavy live-production ecosystem. Counting every downstream wrapper as equivalent would overstate diversity, so materially different interfaces and audiences were retained while mirrors and trivial forks were not.');
report.push('4. **Commercial creator suites overlap heavily.** TubeBuddy and vidIQ combine research, optimization and workflow assistance; Viewstats, Social Blade, ChannelCrawler, Tubular Labs and others emphasize different public-data or enterprise discovery layers. Their scores, revenue estimates and predicted performance are not equivalent to private YouTube Analytics.');
report.push('5. **Native measurement is the reference point for owned channels.** YouTube Studio holds the private retention, revenue, audience and traffic-source data. Current Test & Compare can test up to three title and/or thumbnail variants and selects by watch-time share, which is not directly comparable to third-party preview scores or rotation tests.');
report.push('6. **Maintenance evidence is uneven.** Repositories and official deprecation notices provide the strongest status signals. Store presence and vendor landing pages establish identity, not reliability. Public alternative-client instances, direct-download services and browser extensions are especially volatile.');
report.push('7. **The clearest underserved needs are transparency and durability.** Repeated gaps include reproducible scoring methods, reliable cross-platform creator operations, sustainable privacy clients, stable archival/authentication flows, auditable multilingual output, and self-service rights resolution for smaller creators. These are evidence-derived inferences, not measured demand estimates.');
report.push('');
report.push('### Catalog distribution');
report.push('');
report.push(table(Object.keys(taxonomy).map(k => [k, taxonomy[k][0], String(counts[k] || 0)]), ['Code', 'Evidence-derived category', 'Catalog entries']));
report.push('');
report.push('## 2. Evidence-derived taxonomy');
report.push('');
for (const [code, [name, desc]] of Object.entries(taxonomy)) report.push(`- **${code} - ${name}:** ${desc}`);
report.push('');
report.push('### Caveat codes used in the catalog');
report.push('');
for (const [code, desc] of Object.entries(limits)) report.push(`- **${code}:** ${desc}`);
report.push('');
report.push('## 3. Master catalog');
report.push('');
report.push('Rows are alphabetized by tool name for scan-and-sort use. Category codes, status text and access labels are normalized. Capability text is a documented claim unless the status or analysis explicitly says it was measured.');
report.push('');
report.push(table(active.map(r => [
  link(r[0], r[1]),
  `${r[2]} - ${r[3]}`,
  r[4], r[5], r[6], r[7], r[8], r[9], r[10], link('support', r[11]), data.verified
]), ['Tool', 'Category and primary use', 'Format', 'Intended users', 'Main capabilities', 'Access', 'Status', 'Distinctive feature', 'Important limitations', 'Evidence', 'Verified']));
report.push('');
report.push('## 4. Category-by-category analysis');
report.push('');
report.push('### T1 - Native platform, creator and developer surfaces');
report.push('YouTube Studio is the operational center for owned channels, with mobile and web delivery. Separate native surfaces exist for creation, music, children, live TV, export, analytics, live control, rights, shopping and developer access. Data API v3 is the supported public integration baseline, while Analytics and Reporting split query-style and bulk reporting. Content ID and its API are not open self-service products: official documentation requires demonstrated need and exclusive rights, and the API is for content partners. The gap is not feature count but access: advanced rights, commerce, dubbing, testing and AI features vary by country, account, content and eligibility.');
report.push('');
report.push('### T2 - Channel discovery, SEO, analytics and packaging');
report.push('TubeBuddy and vidIQ are the broad creator suites. Morningfame emphasizes channel-relative keyword opportunity; 1of10, Viewstats and OutlierKit emphasize outliers and packaging; ChannelCrawler is a pre-indexed discovery database; Tubular Labs, Quintly and Socialinsider move toward enterprise benchmarking. Thumbnail/title tools overlap substantially, but preview scores, public-data estimates and native Test & Compare answer different questions. The biggest gaps are transparent scoring, reproducible methodology, and dependable small-channel recommendations rather than more AI-generated titles.');
report.push('');
report.push('### T3 - Creation, editing, localization and repurposing');
report.push('This is the broadest cluster. Professional editors, browser editors, template tools, AI clippers, podcast converters and dubbing services converge on the same YouTube output. Distinctive approaches include transcript-first editing (Descript), podcast/RSS automation (Headliner), rule-based redistribution (Repurpose.io), scaled clipping APIs (OpusClip, Vizard, Reap), and specialist localization (Rask, ElevenLabs, HeyGen, Papercup). Under-served areas are interoperable project/export formats, clear source provenance, repeatable quality benchmarks, and rights-aware reuse.');
report.push('');
report.push('### T4 - Live production, broadcast and chat');
report.push('OBS provides the free extensible base; Aitum and StreamElements extend it. StreamYard and Restream trade local control for browser/cloud convenience. vMix and Wirecast target advanced broadcast control. Gyre, OneStream, Castr and playout.video treat prerecorded or continuous streaming as a scheduling problem. Nightbot, StreamElements, Botisimo and Social Stream Ninja cover moderation, commands or chat transport. Important gaps are cost-transparent 24/7 operation, resilient multi-destination state, and moderation/audit workflows that survive platform API differences.');
report.push('');
report.push('### T5 - Playback, focus, accessibility and social viewing');
report.push('The evidence splits into alternative clients, page customizers, community data layers and synchronized rooms. FreeTube, NewPipe, Invidious and Piped minimize dependence on the standard interface but rely on reverse-engineered service behavior or instances. SponsorBlock, DeArrow and Return YouTube Dislike are shared data services used by many clients. Unhook, BlockTube and similar extensions reshape attention rather than transport. The main unmet need is a sustainable, privacy-oriented, cross-device client whose compatibility does not depend on constant reverse engineering.');
report.push('');
report.push('### T6 - Acquisition, archiving and self-hosting');
report.push('`yt-dlp` is the key substrate. Stacher, Parabolic, Seal, YTDLnis and Media Downloader change the interface; TubeArchivist, TubeSync, Pinchflat and ytdl-sub add subscriptions, indexing and media-library organization; ytarchive and Streamlink focus on live capture/transport; tubeup connects preservation to Internet Archive. These tools are not interchangeable. The recurrent gaps are durable authentication, clear authorization boundaries, verification that an archive is complete, and rapid adaptation when YouTube changes delivery or anti-bot behavior.');
report.push('');
report.push('### T7 - Transcripts, learning, summarization and knowledge capture');
report.push('Transcript extraction has become an input layer for summary, question-answering, note-taking and language study. Tactiq and YouTubeDigest emphasize retrieval/summaries; Glasp, Readwise Reader and Recall connect transcripts to knowledge systems; Language Reactor, Migaku and Trancy build learning workflows; Supadata and Gladia expose developer APIs. Most products overlap at “paste URL, get text/summary.” Underserved needs are precise citations back to timestamps, quality disclosure for generated versus native captions, multilingual evaluation, and durable export formats.');
report.push('');
report.push('### T8 - Developer libraries, automation and AI/MCP');
report.push('Official APIs are stable but quota- and OAuth-constrained. YouTube.js, pytubefix, youtube-transcript-api, ytmusicapi, YoutubeExplode and RustyPipe expose broader or simpler unofficial operations. MCP servers package both official and unofficial paths for agents. The most important distinction is read-only public data versus authenticated owner writes and analytics. A maintained repository is not proof that every YouTube operation works today. The gap is a stable, narrowly permissioned automation layer with explicit provenance and failure semantics.');
report.push('');
report.push('### T9 - Data collection, research, verification and scraping APIs');
report.push('mattw.io, YouTube Data Tools, Facepager, Communalytic, NodeXL and Filmot serve researchers with different levels of coding and different units of analysis. InVID-WeVerify and Bellingcat-oriented workflows focus on evidentiary verification rather than channel optimization. Apify, Bright Data, Oxylabs, Outscraper, ScrapeCreators, HasData, SocialKit, SerpApi, SearchApi.io, DataForSEO and ScrapingBee productize extraction. The core trade-off is official durability and quota versus scraper breadth and volatility. Reproducible longitudinal datasets remain difficult because search, APIs, deletions and availability change over time.');
report.push('');
report.push('### T10 - Publishing, comments, operations and small utilities');
report.push('Agorapulse, Hootsuite and Sprout Social emphasize inbox and team operations; Metricool, SocialPilot, Buffer and Publer emphasize calendars and publishing, with materially different YouTube depth. Comment Picker and playlist utilities solve narrow jobs, while YT.Tools and YTFlare aggregate many one-shot utilities. The market still lacks a clearly documented, low-cost, end-to-end workflow for bulk corrections, moderation audit logs and multi-channel operations without enterprise complexity.');
report.push('');
report.push('### T11 - Rights, music, sponsorships and influence intelligence');
report.push('This cluster has three layers: YouTube-native Content ID/Creator Music/Partnerships, third-party rights administration and music licensing, and influencer discovery/campaign software. Identifyy, HAAWK, FUGA/AdRev and Vobile administer or support rights workflows; Pex and Audible Magic provide identification infrastructure; Lickd, Epidemic Sound and Artlist license music; HypeAuditor, Modash, CreatorIQ, Upfluence, GRIN and others manage creator discovery/campaigns. Eligibility, exclusivity, geographic rights, contract terms and opaque enterprise pricing make direct comparison difficult. Smaller creators remain poorly served when ownership is legitimate but catalog scale is low.');
report.push('');
report.push('## 5. Unavailable, abandoned, conflicting or weakly verified tools');
report.push('');
report.push(table(unavailable.map(r => [link(r[0], r[3]), r[1], r[2], data.verified]), ['Tool', 'Disposition', 'Evidence and reason', 'Verified']));
report.push('');
report.push('## 6. Research methodology and coverage');
report.push('');
report.push('### Research contract and boundaries');
report.push('The unit of inclusion was a distinct usable product, project, service, API, extension, app, library, plugin or command-line workflow where YouTube is central or a direct source documented a YouTube-specific workflow. Generic editors, social platforms and scraping infrastructure were included only when a direct YouTube workflow was evidenced. Content-only resources, channels, hardware and one-off code snippets were excluded. First-party Studio features were split only when they have a distinct workflow, eligibility boundary or API surface.');
report.push('');
report.push('### Search angles and sources');
report.push('- First-party YouTube/Google Help, Developers, product pages, app stores, GitHub organizations, deprecation notices and linked resources.');
report.push('- GitHub and package/forge discovery for CLIs, libraries, front ends, archives, self-hosted apps and MCP servers. The assigned forge researcher failed to return its ledger, so this angle was rerun directly and is not counted as an independent-agent result.');
report.push('- Chrome/Firefox/Safari extension stores, userscript directories, official extension sites and linked repositories.');
report.push('- Apple/Google/F-Droid/Flathub and independent desktop/mobile distribution.');
report.push('- Commercial product sites, documentation, product directories and technical comparisons for creator, production, analytics, data, rights and campaign tools.');
report.push('- Academic/research collectors, verification documentation, preservation projects and investigative-tool directories.');
report.push('- Recent discussions and repositories through `last30days`; this yielded fresh leads such as VODForge, Weedout, Tubeviz and Tango, but was noisy and Reddit was rate-limited. Social engagement was treated as attention, not truth.');
report.push('');
report.push('### Deduplication rules');
report.push('The same product across web, mobile and extension delivery was consolidated. Renames were merged, including quso.ai/vidyo.ai and Creator Partnerships/BrandConnect. Trivial mirrors and obvious store clones were excluded. Forks were retained only when interface, audience, maintenance line or functionality materially differed, such as NewPipe/Tubular/PipePipe and the CommunityMaintained Pinchflat continuation. Infrastructure and front ends were kept separate when they are independently usable.');
report.push('');
report.push('### Status verification and stopping rule');
report.push(`The retained catalog contains ${active.length} entries. A total of 338 unique primary/support URLs in the working dataset were probed by HTTP, then obvious HEAD-request false positives were rechecked with GET. HTTP success was only a reachability signal. Google Help pages, stores and anti-bot sites often reject automated probes, so source-retrieval results were reconciled with search, direct documentation and researcher evidence. Searches stopped when additional query variants and followed references mostly repeated existing products or produced clone/listicle noise.`);
report.push('');
report.push('### Known gaps');
report.push('- No authenticated country-by-country app-store audit was performed. Exact version, permissions, in-app purchases and regional installability remain uneven.');
report.push('- Commercial prices, plan limits and enterprise contract terms change quickly and were not normalized.');
report.push('- Tools were not installed or run against a common test channel/video. “No public direct measurement found” applies to comparative reliability, output quality and productivity claims.');
report.push('- Login-gated, invite-only, regional, white-label and private enterprise tools are undercounted. Userscripts and small mobile-store clones are intentionally undercounted because identity and maintenance were hard to verify.');
report.push('- YouTube policy compatibility, copyright authorization and privacy handling were not independently audited. Tool-specific direct caveats are reported only where sources established them.');
report.push('- The planned eight-stream program could not be fully fanned out because the environment admitted only four researcher panes. Three returned substantive ledgers; the forge stream returned only a completion notice and its required follow-up was blocked. Missing source ecosystems were researched directly, reducing independent-agent triangulation but not source-angle breadth.');
report.push('');
report.push('### Current-field stream audit trail');
report.push('');
report.push('🌐 last30days v3.21.1 · synced 2026-09-11');
report.push('');
report.push('```text');
report.push('✅ All agents reported back!');
report.push('├─ 🟠 Reddit: 6 threads │ 6 upvotes │ 3 comments │ ⚠ partial after 6 items: HTTP 429: Too Many Requests (run doctor for fixes)');
report.push('├─ 🔵 X: 22 posts │ 74 likes │ 6 reposts');
report.push('├─ 🔴 YouTube: 2 videos │ 72,021 views │ 2/2 with transcripts');
report.push('├─ 🎵 TikTok: 3 videos │ 21,091 views │ 1,232 likes');
report.push('├─ 📸 Instagram: 1 reel │ 3,322 likes');
report.push('├─ 🧵 Threads: 5 posts │ 89 likes');
report.push('├─ 📌 Pinterest: 5 pins');
report.push('├─ 🟡 HN: 20 storys │ 626 points │ 307 comments');
report.push('├─ 👔 LinkedIn: 6 posts │ 3,176 likes │ 332 comments');
report.push('├─ 🐙 GitHub: 10 items │ 2 reactions │ 1,759 comments');
report.push('├─ ⛏️ Digg: 7 clusters │ 40 posts │ 19 authors');
report.push('├─ 🗣️ Top voices: @tastyliveshow, @realFatCat1, @paprikarockets │ r/youtube, r/opensource, r/VideoEditing');
report.push('├─ 🕒 Recent evidence is thin: only 40 of 82 dated items are from the last 7 days.');
report.push('└─ 📎 Raw results saved to ~/Documents/Last30Days/youtube-tools-landscape-practitioner-status-problems-raw-v3.md');
report.push('```');
report.push('');
report.push('The durable local copy used in this study is `/home/balauru/.pi/agent/.research/last30days-youtube-tools-2026-09-11.md`.');
report.push('');
report.push('## 7. Complete source appendix');
report.push('');
report.push('Primary and supporting URLs for every retained catalog row follow. Repeated URLs are listed once per tool when they serve both roles. Historical/weak sources are in section 5.');
report.push('');
for (const [code, [name]] of Object.entries(taxonomy)) {
  report.push(`### ${code} - ${name}`);
  report.push('');
  for (const r of active.filter(x => x[2] === code).sort((a, b) => a[0].localeCompare(b[0], 'en', {sensitivity: 'base'}))) {
    const links = r[1] === r[11] ? `<${r[1]}>` : `<${r[1]}> · <${r[11]}>`;
    report.push(`- **${r[0]}:** ${links}`);
  }
  report.push('');
}
report.push('### Decisive first-party and conflict-check sources');
report.push('');
report.push('- YouTube A/B testing titles and thumbnails: <https://support.google.com/youtube/answer/16391400?hl=en-GB>');
report.push('- Content ID eligibility and exclusive-rights requirements: <https://support.google.com/youtube/answer/1311402?hl=en>');
report.push('- Content ID API partner scope: <https://developers.google.com/youtube/partner>');
report.push('- Copyright Match Tool detection/access limits: <https://support.google.com/youtube/answer/15269184?hl=en>');
report.push('- NewPipe package/changelog status: <https://f-droid.org/packages/org.schabi.newpipe/>');
report.push('- Grayjay YouTube-plugin issue evidence: <https://github.com/futo-org/grayjay-android/issues/3293>');
report.push('- IINA YouTube breakage issue: <https://github.com/iina/iina/issues/4143>');
report.push('- Pinchflat original and maintained continuation: <https://github.com/kieraneglin/pinchflat> · <https://github.com/CommunityMaintained/pinchflat>');
report.push('');
report.push('## 8. What would materially change this landscape');
report.push('');
report.push('1. A country-scoped, authenticated store crawl recording versions, update dates, publishers, permissions, prices and installation status.');
report.push('2. A reproducible harness that runs representative viewing, transcript, upload, comment, live and archive tasks against the same test assets and records success, latency, completeness and failure mode.');
report.push('3. Owner-authorized comparisons against YouTube Studio exports to quantify error in public analytics, keyword scores, revenue estimates and title/thumbnail predictions.');
report.push('4. Contract and policy review for scraping, download, music licensing, Content ID administration and influencer-data services.');
report.push('5. Quarterly reruns of repository releases, store status and live endpoints, because reverse-engineered clients and hosted utility sites change fastest.');

fs.writeFileSync(outputPath, report.join('\n'));
console.log(JSON.stringify({outputPath, active: active.length, unavailable: unavailable.length, categories: counts, lines: report.length}, null, 2));
