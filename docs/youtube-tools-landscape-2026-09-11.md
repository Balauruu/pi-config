# YouTube-related tools: an exploratory landscape

**Research date:** 2026-09-11  
**Coverage:** 250 current or plausibly current catalog entries across 11 evidence-derived categories, plus 29 unavailable, abandoned, conflicting, or weakly verified entries.  
**Research program:** three substantive independent researcher returns (first-party, installable apps, browser extensions), one forge-stream return that failed to include its ledger, direct source-angle sweeps for the missing ecosystems, and one `last30days` current-field scan.

This is a best-effort comprehensive landscape, not a claim that every YouTube-related tool has been found. “Live” means a canonical page, store record, documentation page or repository was reachable or independently surfaced at verification. It does not mean the tool was installed, purchased, authenticated, or functionally tested.

## 1. Executive overview

1. **The market is much wider than creator SEO.** The largest clusters found were creation/editing/localization, playback and browser modification, channel intelligence, first-party surfaces, and data/research tooling. The example metadata inspector sits in a broader verification and research cluster rather than defining the landscape.
2. **Two technical foundations recur.** Supported products use YouTube Studio, OAuth and official APIs. Alternative viewers, downloaders, transcript tools and many data services use public pages, scraping or private InnerTube behavior. The second group often offers capabilities the official stack does not, but has materially higher breakage and policy risk.
3. **A few projects are infrastructure for many others.** `yt-dlp` underpins numerous download/archive GUIs; Invidious and Piped underpin alternative clients; SponsorBlock, DeArrow and Return YouTube Dislike provide shared community datasets; OBS anchors a plugin-heavy live-production ecosystem. Counting every downstream wrapper as equivalent would overstate diversity, so materially different interfaces and audiences were retained while mirrors and trivial forks were not.
4. **Commercial creator suites overlap heavily.** TubeBuddy and vidIQ combine research, optimization and workflow assistance; Viewstats, Social Blade, ChannelCrawler, Tubular Labs and others emphasize different public-data or enterprise discovery layers. Their scores, revenue estimates and predicted performance are not equivalent to private YouTube Analytics.
5. **Native measurement is the reference point for owned channels.** YouTube Studio holds the private retention, revenue, audience and traffic-source data. Current Test & Compare can test up to three title and/or thumbnail variants and selects by watch-time share, which is not directly comparable to third-party preview scores or rotation tests.
6. **Maintenance evidence is uneven.** Repositories and official deprecation notices provide the strongest status signals. Store presence and vendor landing pages establish identity, not reliability. Public alternative-client instances, direct-download services and browser extensions are especially volatile.
7. **The clearest underserved needs are transparency and durability.** Repeated gaps include reproducible scoring methods, reliable cross-platform creator operations, sustainable privacy clients, stable archival/authentication flows, auditable multilingual output, and self-service rights resolution for smaller creators. These are evidence-derived inferences, not measured demand estimates.

### Catalog distribution

| Code | Evidence-derived category | Catalog entries |
| --- | --- | --- |
| T1 | Native platform, creator and developer surfaces | 26 |
| T2 | Channel discovery, SEO, analytics and packaging | 26 |
| T3 | Creation, editing, localization and repurposing | 42 |
| T4 | Live production, broadcast and chat | 18 |
| T5 | Playback, focus, accessibility and social viewing | 34 |
| T6 | Acquisition, archiving and self-hosting | 21 |
| T7 | Transcripts, learning, summarization and knowledge capture | 16 |
| T8 | Developer libraries, automation and AI/MCP | 15 |
| T9 | Data collection, research, verification and scraping APIs | 20 |
| T10 | Publishing, comments, operations and small utilities | 14 |
| T11 | Rights, music, sponsorships and influence intelligence | 18 |

## 2. Evidence-derived taxonomy

- **T1 - Native platform, creator and developer surfaces:** First-party YouTube/Google products, Studio workflows, rights tools and supported APIs.
- **T2 - Channel discovery, SEO, analytics and packaging:** Keyword, competitor, rank, idea, title, thumbnail and public-channel intelligence.
- **T3 - Creation, editing, localization and repurposing:** Video/graphic creation, post-production, Shorts extraction, captions, translation and dubbing.
- **T4 - Live production, broadcast and chat:** Encoders, browser studios, multistreaming, continuous playout, overlays and chat automation.
- **T5 - Playback, focus, accessibility and social viewing:** Alternative clients, browser enhancements, community data layers, distraction controls and watch rooms.
- **T6 - Acquisition, archiving and self-hosting:** Downloaders, archive managers, media-library sync, livestream capture and self-hosted download UIs.
- **T7 - Transcripts, learning, summarization and knowledge capture:** Transcript retrieval, video Q&A, study aids, language learning and note systems.
- **T8 - Developer libraries, automation and AI/MCP:** Unofficial clients, language libraries, command interfaces and agent-facing MCP servers.
- **T9 - Data collection, research, verification and scraping APIs:** Research collectors, forensic utilities, transcript search, managed scrapers and SERP/data APIs.
- **T10 - Publishing, comments, operations and small utilities:** Schedulers, social inboxes, comment pickers, playlist helpers and multi-utility sites.
- **T11 - Rights, music, sponsorships and influence intelligence:** Content identification/administration, music licensing, creator discovery and campaign operations.

### Caveat codes used in the catalog

- **L1:** Vendor-documented capability or pricing; not independently performance-tested.
- **L2:** Public/estimated score or competitor data unless the channel owner authorizes private metrics.
- **L3:** Unofficial, reverse-engineered or scraping-dependent; YouTube changes can break it.
- **L4:** OAuth, API quota, platform policy or connected-account constraints apply.
- **L5:** Transcript, model, translation or generated-output quality varies; verify consequential output.
- **L6:** Download/archive workflows depend on extraction health and the user having permission to save or reuse content.
- **L7:** Public-instance or remote-service availability is a separate dependency.
- **L8:** Store/repository presence does not prove current browser/app functionality; permissions were not audited.
- **L9:** Country, account, content, rights, partner or eligibility restrictions apply.
- **L10:** General-purpose product included only because its source documents a YouTube-specific workflow.

## 3. Master catalog

Rows are alphabetized by tool name for scan-and-sort use. Category codes, status text and access labels are normalized. Capability text is a documented claim unless the status or analysis explicitly says it was measured.

| Tool | Category and primary use | Format | Intended users | Main capabilities | Access | Status | Distinctive feature | Important limitations | Evidence | Verified |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [1of10](https://1of10.com/) | T2 - Idea and packaging research | Web SaaS | Creators | Outlier discovery, title research, thumbnail preview and ideation | Paid/mixed | Live vendor page | Browse-led packaging rather than only keyword SEO | L1,L2 | [support](https://1of10.com/tools/youtube-thumbnail-preview) | 2026-09-11 |
| [2short.ai](https://www.2short.ai/) | T3 - Turn long videos into Shorts | Web SaaS | Creators and editors | AI-assisted highlight extraction, framing, captions and clip export | Mixed | Live vendor page | Purpose-built long-to-short workflow | L1,L5 | [support](https://www.2short.ai/) | 2026-09-11 |
| [3Play Media](https://www.3playmedia.com/) | T3 - Captioning, transcription and localization | Managed service and SaaS | Publishers and enterprises | Captions, transcription, translation, audio description and live accessibility services | Paid | Live vendor page | Enterprise accessibility workflow | L1,L5,L9 | [support](https://www.3playmedia.com/solutions/video-platforms/youtube/) | 2026-09-11 |
| [4CAT](https://4cat.nl/) | T9 - Reproducible social-data analysis | Self-hosted web app | Researchers | Imports and analyzes platform datasets; documented YouTube workflow uses YouTube Data Tools exports | OSS | Maintained project page | Separates collection from downstream analysis | L4,L10 | [support](https://wiki.digitalmethods.net/Dmi/Tool4CAT) | 2026-09-11 |
| [4K Video Downloader Plus](https://www.4kdownload.com/products/videodownloader-42) | T6 - Download videos, channels and playlists | Desktop app | Viewers and archivists | Video, playlist, channel, subtitle and audio downloads | Mixed | Live vendor page | Polished cross-platform commercial client | L1,L6 | [support](https://www.4kdownload.com/products/videodownloader-42) | 2026-09-11 |
| [Adobe Express](https://www.adobe.com/express/create/thumbnail/youtube) | T3 - Create thumbnails and channel graphics | Web and mobile app | Creators | YouTube thumbnail templates, graphics, resizing and simple video assets | Mixed | Live vendor page | Adobe template ecosystem | L1,L10 | [support](https://www.adobe.com/express/create/thumbnail/youtube) | 2026-09-11 |
| [Adobe Premiere Pro](https://www.adobe.com/products/premiere.html) | T3 - Professional video editing and YouTube export | Desktop app | Professional creators and teams | Timeline editing, captions, color, audio and publishing/export workflows | Paid | Live vendor page | Deep professional post-production ecosystem | L1,L10 | [support](https://helpx.adobe.com/premiere-pro/using/exporting-web-mobile-devices.html) | 2026-09-11 |
| [AdRev / FUGA](https://fuga.com/) | T11 - Administer Content ID and rights revenue | Managed commercial service | Music and media rights holders | YouTube asset delivery, claiming, conflict handling and monetization administration | Paid/revenue share | Live vendor page; AdRev technology integrated into FUGA | Managed rights operations rather than a self-service creator utility | L1,L9 | [support](https://support.fuga.com/hc/en-us/articles/39156341356564-Content-ID-Policy-Guidelines-YouTube) | 2026-09-11 |
| [Agorapulse](https://www.agorapulse.com/youtube-integration/) | T10 - Publish and manage YouTube engagement | Web SaaS | Social teams and agencies | Scheduling, inbox, replies, moderation and reporting for connected channels | Paid/mixed | Live vendor page | Unified social inbox with documented YouTube actions | L1,L4 | [support](https://www.agorapulse.com/youtube-integration/) | 2026-09-11 |
| [Ahrefs YouTube Keyword Tool](https://ahrefs.com/youtube-keyword-tool) | T2 - Generate YouTube keyword ideas | Hosted website | Creators and marketers | Keyword suggestions derived from YouTube search terms | Free/mixed | Live vendor page | Lightweight keyword discovery from an SEO vendor | L1,L2 | [support](https://ahrefs.com/youtube-keyword-tool) | 2026-09-11 |
| [Aitum Multistream](https://aitum.tv/products/multistream) | T4 - Multistream from OBS | OBS plugin | Live streamers | Multiple destinations and stream-output control inside OBS | Paid/mixed | Live vendor page | Extends OBS rather than replacing it | L1,L4 | [support](https://aitum.tv/products/multistream) | 2026-09-11 |
| [Amara](https://amara.org/) | T3 - Collaborative subtitles and translation | Web platform | Accessibility teams, communities and publishers | Caption creation, review, translation and team workflows | Mixed | Live product page | Community and team subtitle collaboration | L1,L5,L10 | [support](https://amara.org/) | 2026-09-11 |
| [Apify YouTube Scrapers](https://apify.com/store/categories/youtube) | T9 - Collect public YouTube data | Hosted actor marketplace and API | Developers and data teams | Actors for videos, channels, search, comments, transcripts and exports | Paid/mixed | Live marketplace | Many independently maintained actors and workflow integrations | L1,L3,L4 | [support](https://apify.com/streamers/youtube-scraper) | 2026-09-11 |
| [Artlist](https://artlist.io/) | T11 - License music and creative assets | Web subscription service | Video creators and teams | Music, sound effects, footage and licensing for published videos | Paid | Live vendor page | Broad creative-asset subscription | L1,L9 | [support](https://artlist.io/help-center/privacy-terms/artlist-license/) | 2026-09-11 |
| [Audible Magic](https://www.audiblemagic.com/) | T11 - Content identification and rights infrastructure | Enterprise service and API | Platforms and rights holders | Audio/video fingerprinting and rights-management infrastructure | Paid | Live vendor page | Platform-scale identification rather than creator SEO | L1,L9 | [support](https://www.audiblemagic.com/) | 2026-09-11 |
| [Axiom Works YouTube MCP](https://github.com/axiom-works-ai/axiomworks-youtube-mcp) | T8 - Expose YouTube workflows to MCP clients | Open-source MCP server | Developers and AI-agent users | Metadata, transcripts, uploads, comments and analytics via YouTube interfaces | OSS | Repository present; maintenance not independently tested | Broad agent-facing surface | L3,L4 | [support](https://github.com/axiom-works-ai/axiomworks-youtube-mcp) | 2026-09-11 |
| [Bellingcat Online Investigation Toolkit](https://bellingcat.gitbook.io/toolkit) | T9 - Corroborate YouTube media and locations | Web directory and workflow guide | Investigators and journalists | Links video, image, map, geolocation and chronology tools used with YouTube evidence | Free | Maintained documentation | Cross-tool verification workflow rather than one extractor | L5,L10 | [support](https://bellingcat.gitbook.io/toolkit) | 2026-09-11 |
| [BlockTube](https://chromewebstore.google.com/detail/blocktube/bbeaicapbccfllodepmimpkgecanonai) | T5 - Filter unwanted YouTube content | Browser extension | Viewers | Blocks channels, titles, keywords, Shorts, comments and watched items | Free/OSS | Current store listing evidence | Rule-based content filtering | L8 | [support](https://github.com/amitbl/blocktube) | 2026-09-11 |
| [Botisimo](https://botisimo.com/) | T4 - Cross-platform live-chat bot | Cloud bot and dashboard | Streamers and communities | Commands, moderation, engagement and multi-platform chat workflows including YouTube | Paid/mixed | Live vendor page | Cross-platform community automation | L1,L4 | [support](https://botisimo.com/) | 2026-09-11 |
| [Brandwatch](https://www.brandwatch.com/) | T11 - Monitor YouTube and broader social conversation | Enterprise SaaS | Brands and research teams | Social listening, analysis and authenticated platform-data workflows | Paid | Live vendor page | Enterprise listening across platforms | L1,L2,L4 | [support](https://www.brandwatch.com/) | 2026-09-11 |
| [Bright Data YouTube Scraper](https://brightdata.com/products/web-scraper/youtube) | T9 - Managed YouTube data extraction | API and datasets | Data teams and enterprises | Structured collection for videos, channels, comments and search surfaces | Paid | Live vendor page | Managed anti-blocking infrastructure | L1,L3,L4 | [support](https://brightdata.com/products/web-scraper/youtube) | 2026-09-11 |
| [Buffer](https://buffer.com/youtube) | T10 - Schedule YouTube Shorts | Web and mobile SaaS | Creators and social teams | Planning and publishing for Shorts in a cross-network calendar | Mixed | Live vendor page | Simple scheduling; documented scope is narrower than full channel management | L1,L9 | [support](https://buffer.com/youtube) | 2026-09-11 |
| [Camtasia](https://www.techsmith.com/camtasia.html) | T3 - Record, edit and share instructional videos | Desktop app | Educators and business creators | Screen capture, editing, captions and YouTube sharing | Paid | Live vendor page | Integrated screen-recording and editing workflow | L1,L10 | [support](https://www.techsmith.com/learn/tutorials/camtasia/share-youtube/) | 2026-09-11 |
| [Canva](https://www.canva.com/create/youtube-thumbnails/) | T3 - Create YouTube graphics and videos | Web and mobile design suite | Creators and teams | Thumbnail, banner, intro, Shorts and video templates with collaborative editing | Mixed | Live vendor page | Large template library and collaborative design | L1,L10 | [support](https://www.canva.com/create/youtube-thumbnails/) | 2026-09-11 |
| [CapCut](https://www.capcut.com/create/youtube-video-clip-editor) | T3 - Edit YouTube videos and clips | Web, desktop and mobile app | Creators | Timeline/template editing, captions, effects, resizing and clip creation | Mixed | Live vendor page | Cross-device editor with short-form templates | L1,L10 | [support](https://www.capcut.com/create/youtube-video-clip-editor) | 2026-09-11 |
| [Captiv8](https://www.captiv8.io/) | T11 - Influencer discovery and campaign measurement | Enterprise SaaS | Brands and agencies | Creator discovery, campaign operations, measurement and commerce workflows | Paid | Live vendor page | Enterprise campaign stack spanning YouTube and other networks | L1,L2 | [support](https://www.captiv8.io/) | 2026-09-11 |
| [Castr](https://castr.com/live-stream-pre-recorded-video/) | T4 - Multistream and scheduled playout | Cloud streaming SaaS | Broadcasters and live teams | Live multistreaming, prerecorded scheduling and continuous-channel workflows | Paid/mixed | Live vendor page | Broadcast and OTT orientation | L1,L4 | [support](https://castr.com/live-stream-pre-recorded-video/) | 2026-09-11 |
| [ChannelCrawler](https://channelcrawler.com/) | T2 - Search and export YouTube channels | Web SaaS and API | Brands, agencies and researchers | Creator database, filters, enrichment, exports and API access | Paid/mixed | Live vendor page | Pre-indexed channel discovery rather than per-query API search | L1,L2 | [support](https://channelcrawler.com/api) | 2026-09-11 |
| [ChatTube](https://chattube.io/) | T7 - Chat with YouTube videos | Web app and browser extension | Learners and researchers | Summaries, questions and transcript-grounded interaction | Mixed | Live product page | Video-specific conversational interface | L1,L5 | [support](https://develop.chattube.io/) | 2026-09-11 |
| [ClipGrab](https://clipgrab.org/) | T6 - Download and convert online video | Desktop app | Consumers | Search/download and format conversion with YouTube support | Free | Live vendor page; current extraction not tested | Simple desktop workflow | L6 | [support](https://clipgrab.org/) | 2026-09-11 |
| [Clipious](https://github.com/lamarios/clipious) | T5 - Use an Invidious-backed YouTube client | Android app | Privacy-oriented viewers | Playback, subscriptions and instance-based access | OSS | Canonical repository evidence; store identity not relied on | Invidious-native mobile interface | L3,L7,L8 | [support](https://github.com/lamarios/clipious) | 2026-09-11 |
| [Cobalt](https://cobalt.tools/) | T6 - Download media from shared links | Hosted website and self-hosted service | Consumers and self-hosters | Link-based media download with a minimal interface | Free/OSS | Live project page | No-account, minimal front end with self-host option | L3,L6 | [support](https://github.com/imputnet/cobalt) | 2026-09-11 |
| [Comment Picker](https://commentpicker.com/youtube.php) | T10 - Select or filter YouTube comments | Hosted website | Creators running giveaways | Loads comments for random selection and basic filtering | Mixed | Live vendor page | Purpose-built giveaway picker | L1,L4,L9 | [support](https://commentpicker.com/youtube.php) | 2026-09-11 |
| [Communalytic](https://communalytic.org/) | T9 - Collect and analyze YouTube comments | Web research platform | Researchers and analysts | No-code collection plus text, sentiment, civility and network analysis | Mixed | Live documentation | Integrated collection and analysis for research | L4,L5 | [support](https://communalytic.org/docs/youtube-video-comments-data-collector/) | 2026-09-11 |
| [Content ID and Studio Content Manager](https://support.google.com/youtube/answer/2797370) | T1 - Manage large rights catalogs and claims | Restricted first-party service and web UI | Eligible rights holders and partners | Reference files, automated matching, claims, policies, assets and linked channels | Restricted | Current; partner eligibility required | YouTube-native rights enforcement at catalog scale | L9 | [support](https://support.google.com/youtube/answer/6301087) | 2026-09-11 |
| [Creator Hooks](https://creatorhooks.com/youtube-title-analyzer) | T2 - Analyze and improve video titles | Hosted website and membership | Creators | Title analyzer, hook examples and title-focused education | Mixed | Live vendor page | Narrow focus on packaging hooks | L1 | [support](https://creatorhooks.com/youtube-title-analyzer) | 2026-09-11 |
| [Creator Music](https://support.google.com/youtube/answer/11623091) | T1 - License music inside YouTube Studio | First-party web workflow | Eligible monetizing creators | Search, license or revenue-share music for eligible videos | Restricted/mixed | Current; eligibility and country limits | Native licensing connected to upload monetization | L9 | [support](https://support.google.com/youtube/answer/11609509) | 2026-09-11 |
| [Creator Partnerships / BrandConnect](https://support.google.com/youtube/answer/9385307) | T1 - Connect eligible creators and brands | First-party Studio workflow | Eligible creators and brands | Brand-deal discovery and campaign collaboration | Restricted | Current; country and eligibility limits | Native creator-brand workflow | L9 | [support](https://support.google.com/youtube/answer/9385307) | 2026-09-11 |
| [CreatorIQ](https://www.creatoriq.com/influencer-marketing-solution) | T11 - Enterprise creator discovery and campaigns | Enterprise SaaS | Brands and agencies | Creator intelligence, workflows, measurement and first-party data connections | Paid | Live vendor page | Enterprise governance and integrations | L1,L2,L4 | [support](https://www.creatoriq.com/influencer-marketing-solution) | 2026-09-11 |
| [Crossclip](https://crossclip.com/) | T3 - Turn streams into social clips | Web and mobile service | Streamers and creators | Crop, caption and reformat stream/video clips for Shorts and other platforms | Mixed | Live vendor page | Streamer-focused cross-platform clipping | L1,L10 | [support](https://crossclip.com/) | 2026-09-11 |
| [DataForSEO YouTube SERP API](https://docs.dataforseo.com/v3/serp/youtube/overview/) | T9 - Collect YouTube search results | Queued API | SEO and data teams | Localized YouTube SERP tasks, pagination and structured results | Paid | Live documentation | Batch-oriented SERP collection | L1,L3,L4 | [support](https://docs.dataforseo.com/v3/serp/youtube/overview/) | 2026-09-11 |
| [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve) | T3 - Professional video post-production | Desktop app | Creators and professional editors | Editing, color, audio, effects, captions and web-delivery presets | Free/paid | Live vendor page | High-end all-in-one post-production with strong free edition | L1,L10 | [support](https://www.blackmagicdesign.com/products/davinciresolve) | 2026-09-11 |
| [DeArrow](https://dearrow.ajay.app/) | T5 - Replace clickbait titles and thumbnails | Browser extension and community service | Viewers | Crowdsourced alternative titles/thumbnails with cross-client integrations | Mixed/OSS | Current project evidence | Shared community dataset rather than per-browser rules | L8 | [support](https://github.com/ajayyy/DeArrow) | 2026-09-11 |
| [Descript](https://www.descript.com/) | T3 - Transcript-based editing and clipping | Desktop/web app | Creators, podcasters and teams | Text-based video editing, captions, screen recording and clip generation | Mixed | Live vendor page | Edits media through transcript text | L1,L5,L10 | [support](https://www.descript.com/tools/add-subtitles-video) | 2026-09-11 |
| [Ecamm Live](https://www.ecamm.com/mac/ecammlive/) | T4 - Produce livestreams on macOS | Desktop app | Mac streamers and presenters | Scenes, guests, overlays, recording and YouTube live output | Paid | Live vendor page | Mac-native production workflow | L1,L4 | [support](https://www.ecamm.com/mac/ecammlive/) | 2026-09-11 |
| [Eightify](https://eightify.app/) | T7 - Summarize and transcribe YouTube videos | Browser extension, web and mobile | Viewers and researchers | Video summaries, key points and transcript/export features | Mixed | Live vendor page | Multilingual summary workflow | L1,L5,L8 | [support](https://eightify.app/youtube-transcript-generator) | 2026-09-11 |
| [Eklipse](https://eklipse.gg/) | T3 - Generate gaming stream highlights | Web/mobile SaaS | Gaming streamers | AI-assisted highlight detection and vertical clip generation | Mixed | Live vendor page | Gaming-specific clipping | L1,L10 | [support](https://eklipse.gg/) | 2026-09-11 |
| [ElevenLabs Dubbing Studio](https://elevenlabs.io/dubbing) | T3 - Dub videos into other languages | Web SaaS and API | Creators and localization teams | Speech translation, voice generation and timing/edit workflows | Paid/mixed | Live vendor page | Voice-focused localization stack | L1,L5 | [support](https://elevenlabs.io/docs/overview/capabilities/dubbing) | 2026-09-11 |
| [Enhancer for YouTube](https://www.mrfdev.com/enhancer-for-youtube) | T5 - Customize playback and interface | Browser extension | Viewers | Player controls, volume/speed behavior, themes and automation | Free | Current official project page | Dense player-control customization | L8 | [support](https://www.mrfdev.com/enhancer-for-youtube) | 2026-09-11 |
| [Epidemic Sound](https://www.epidemicsound.com/) | T11 - License music and sound effects | Web subscription service | Creators and businesses | Music/SFX catalog, channel safelisting and licensing | Paid | Live vendor page | Subscription catalog with channel-clearance workflow | L1,L9 | [support](https://www.epidemicsound.com/pricing-and-plans/) | 2026-09-11 |
| [Facepager](https://github.com/strohne/Facepager) | T9 - Collect API and web data without coding | Desktop research app | Researchers | Configurable API/page collection including YouTube Data API workflows | OSS | Repository present | General research collector with reusable presets | L4,L10 | [support](https://github.com/strohne/Facepager/wiki) | 2026-09-11 |
| [Filmot](https://filmot.com/) | T9 - Search YouTube captions and metadata | Hosted search engine | Researchers, fact-checkers and viewers | Searches subtitle text and indexed video/channel metadata | Free/mixed | Live site evidence | Transcript-level discovery across many videos | L2,L5 | [support](https://filmot.com/about) | 2026-09-11 |
| [Final Cut Pro](https://www.apple.com/final-cut-pro/) | T3 - Professional video editing on Apple platforms | macOS and iPad app | Creators and professional editors | Editing, captions, color, audio and web-export workflows | Paid | Live vendor page | Apple-native professional editor | L1,L10 | [support](https://support.apple.com/guide/final-cut-pro/share-to-web-destinations-ver0192a47b8/mac) | 2026-09-11 |
| [Focus for YouTube](https://apps.apple.com/us/app/focus-for-youtube/id1514703160?mt=12) | T5 - Hide distracting YouTube surfaces | Safari extension for macOS | Focus-oriented viewers | Removes recommendations, comments and other selected UI | Free | Store listing evidence; older update history reported | Mac-only minimal distraction control | L8 | [support](https://apps.apple.com/us/app/focus-for-youtube/id1514703160?mt=12) | 2026-09-11 |
| [FocusTube](https://apps.apple.com/us/app/focustube-for-safari/id6799667312) | T5 - Reduce feeds and Shorts on Safari | Safari extension for iPhone/iPad | Mobile viewers | Hides selected YouTube web surfaces | Paid/mixed | Current store listing evidence | Targets mobile Safari rather than native app | L8,L9 | [support](https://apps.apple.com/us/app/focustube-for-safari/id6799667312) | 2026-09-11 |
| [Fotor YouTube Thumbnail Maker](https://www.fotor.com/design/youtube-thumbnail.html) | T3 - Create thumbnails | Hosted design app | Creators | Templates, image editing and AI-assisted graphic generation | Mixed | Live vendor page | Fast template-based artwork | L1,L10 | [support](https://www.fotor.com/design/youtube-thumbnail.html) | 2026-09-11 |
| [Fourthwall](https://fourthwall.com/) | T11 - Sell creator products and memberships | Hosted commerce platform | Creators | Storefronts, merchandise, memberships and creator integrations | Mixed | Live vendor page | Creator-owned commerce with YouTube-adjacent integrations | L1,L4,L9 | [support](https://fourthwall.com/) | 2026-09-11 |
| [FreeTube](https://freetubeapp.io/) | T5 - Privacy-oriented desktop viewing | Desktop app | Viewers | Subscriptions, local profiles, SponsorBlock, DeArrow and external-player support | OSS | Maintained repository and distributions | Local account-free workflow across major desktop OSes | L3 | [support](https://github.com/FreeTubeApp/FreeTube) | 2026-09-11 |
| [FreshView](https://chromewebstore.google.com/detail/freshview-for-youtube/eckknmnfoohbeklmjlidmfdlakndcfkm) | T5 - Hide already-watched videos | Browser extension | Viewers | Filters videos based on watch state | Free | Store listing evidence; current function not tested | Single-purpose feed cleanup | L8 | [support](https://chromewebstore.google.com/detail/freshview-for-youtube/eckknmnfoohbeklmjlidmfdlakndcfkm) | 2026-09-11 |
| [Gladia](https://www.gladia.io/) | T7 - Transcribe media including YouTube links | API | Developers and media teams | Speech-to-text, translation and diarization; docs accept supported remote media | Paid/mixed | Live documentation | Developer transcription pipeline | L1,L5,L9 | [support](https://docs.gladia.io/chapters/limits-and-specifications/supported-formats) | 2026-09-11 |
| [Glasp](https://glasp.co/youtube-transcript) | T7 - Read, highlight and summarize transcripts | Browser extension and web app | Learners and researchers | Transcript access, highlighting, notes, summaries and export | Mixed | Live vendor page | Connects video notes to a broader knowledge workflow | L1,L5,L8 | [support](https://glasp.co/youtube-transcript) | 2026-09-11 |
| [Google Takeout for YouTube](https://takeout.google.com/) | T1 - Export account-owned YouTube data | First-party hosted export service | YouTube account holders | Exports selected YouTube and YouTube Music account data | Free | Current Google service | First-party portability rather than public scraping | L9 | [support](https://support.google.com/accounts/answer/3024190) | 2026-09-11 |
| [Google Trends - YouTube Search](https://trends.google.com/trends/) | T2 - Compare YouTube search interest | Hosted first-party website | Creators, researchers and marketers | Relative query-interest exploration with a YouTube Search filter | Free | Current Google service | First-party relative trend index | L2,L10 | [support](https://support.google.com/trends/answer/4359550) | 2026-09-11 |
| [Grayjay](https://grayjay.app/) | T5 - Follow creators across video platforms | Android app | Viewers | Plugin-based multi-source feeds, subscriptions and playback including YouTube | Mixed/source-available | Live project; YouTube plugin issues reported | Creator-following model spans platforms | L3,L8 | [support](https://github.com/futo-org/grayjay-android/issues/3293) | 2026-09-11 |
| [GRIN](https://grin.co/) | T11 - Manage creator relationships and campaigns | Enterprise SaaS | Brands and ecommerce teams | Creator CRM, gifting, affiliate and campaign workflows across YouTube and other networks | Paid | Live vendor page | Ecommerce-oriented creator operations | L1,L2 | [support](https://grin.co/) | 2026-09-11 |
| [Gyre](https://gyre.pro/) | T4 - Run continuous prerecorded streams | Cloud streaming SaaS | Creators and media channels | Loops prerecorded videos to YouTube and other platforms | Paid/mixed | Live vendor page | YouTube-focused 24/7 stream workflow | L1,L4,L9 | [support](https://gyre.pro/) | 2026-09-11 |
| [HAAWK](https://www.haawk.com/products) | T11 - Administer Content ID and digital rights | Managed service | Music and media rights holders | Asset delivery, claims, rights administration and monetization | Revenue share/paid | Live vendor page | Rights administration for catalogs | L1,L9 | [support](https://www.haawk.com/products) | 2026-09-11 |
| [Happy Scribe](https://www.happyscribe.com/) | T3 - Transcribe, subtitle and translate videos | Web SaaS and human service | Creators and localization teams | Automatic/human transcription, subtitle editing, translation and exports | Paid/mixed | Live vendor page | Combines automation with human service tiers | L1,L5 | [support](https://www.happyscribe.com/subtitle-generator/youtube-subtitles) | 2026-09-11 |
| [HARPA AI](https://harpa.ai/) | T7 - Summarize and automate around web videos | Browser extension | Knowledge workers and creators | Page/video summarization, extraction and browser automation | Mixed | Live vendor page | General browser agent with YouTube workflows | L1,L5,L8,L10 | [support](https://harpa.ai/) | 2026-09-11 |
| [HasData YouTube API](https://hasdata.com/apis/youtube-scraper-api) | T9 - Retrieve public YouTube data | Hosted API | Developers and data teams | Search, videos, channels, comments, transcripts and related structured data | Paid/mixed | Live vendor page | Simplified unofficial API | L1,L3,L4 | [support](https://hasdata.com/apis/youtube-scraper-api) | 2026-09-11 |
| [HasData YouTube MCP](https://github.com/hasdata/youtube-mcp) | T8 - Expose YouTube data to MCP clients | MCP server | Developers and AI-agent users | Connects HasData YouTube extraction to MCP workflows | OSS/client plus paid API | Repository present | Hosted-data-backed MCP connector | L1,L3,L4 | [support](https://github.com/hasdata/youtube-mcp) | 2026-09-11 |
| [Headliner](https://www.headliner.app/features/youtube/) | T3 - Turn podcasts and audio into YouTube videos | Web SaaS | Podcasters and publishers | Audiograms, full-episode video creation and RSS-to-YouTube publishing | Mixed | Live vendor page | Podcast-native automated publishing | L1,L4,L10 | [support](https://www.headliner.app/features/youtube/) | 2026-09-11 |
| [HeyGen Video Translate](https://www.heygen.com/video-translate) | T3 - Translate and dub videos | Web SaaS | Creators and marketing teams | Speech translation, voice cloning and lip-synced localized versions | Paid/mixed | Live vendor page | Visual lip-sync localization | L1,L5 | [support](https://www.heygen.com/video-translate) | 2026-09-11 |
| [Hootsuite](https://www.hootsuite.com/youtube) | T10 - Schedule, monitor and analyze YouTube | Web SaaS | Social teams and agencies | Publishing, streams, comments, keyword monitoring and reporting | Paid | Live vendor page | Cross-network operations dashboard | L1,L4 | [support](https://www.hootsuite.com/youtube) | 2026-09-11 |
| [HypeAuditor](https://hypeauditor.com/) | T11 - Discover and assess YouTube influencers | Web SaaS | Brands and agencies | Creator search, audience-quality signals, fraud heuristics and campaign analytics | Paid/mixed | Live vendor page | Audience-quality and fraud-analysis positioning | L1,L2 | [support](https://help.hypeauditor.com/en/articles/3191975-what-is-youtube-influencer-discovery) | 2026-09-11 |
| [IINA](https://github.com/iina/iina) | T5 - Open online video in a native macOS player | Desktop app | Mac viewers | Plays URLs through integrations and external extraction tools | OSS | Maintained project; YouTube breakage reports exist | Native macOS playback shell | L3,L6 | [support](https://github.com/iina/iina/issues/4143) | 2026-09-11 |
| [Improve YouTube!](https://github.com/code-charity/youtube) | T5 - Customize YouTube UI and playback | Browser extension | Viewers | Large set of layout, playback, appearance and behavior controls | OSS | Current repository/store evidence | Broad open-source customization suite | L8 | [support](https://chromewebstore.google.com/detail/improve-youtube-%F0%9F%8E%A7-for-yo/bnomihfieiccainjcjblhegjgglakjdd) | 2026-09-11 |
| [Influencer Hero](https://www.influencer-hero.com/) | T11 - Discover creators and run campaigns | Web SaaS | Brands and agencies | Influencer search, outreach, affiliate, CRM and reporting workflows | Paid | Live vendor page | All-in-one campaign operations | L1,L2 | [support](https://www.influencer-hero.com/) | 2026-09-11 |
| [innertube (Python)](https://pypi.org/project/innertube/) | T8 - Access YouTube InnerTube from Python | Python library | Developers | Low-level calls to YouTube's internal client API | OSS | Package present; maintenance/function not fully tested | Minimal InnerTube building block | L3 | [support](https://pypi.org/project/innertube/) | 2026-09-11 |
| [innertubei](https://pypi.org/project/innertubei/) | T8 - Use higher-level async InnerTube operations | Python library | Python developers | Async unofficial YouTube operations over internal interfaces | OSS | Package present; weak independent verification | Async Python interface | L3 | [support](https://pypi.org/project/innertubei/) | 2026-09-11 |
| [InnerTune](https://github.com/z-huang/InnerTune) | T5 - Play YouTube Music in an alternative client | Android app | Music listeners | Search, playback, library and offline-oriented music features | OSS | Repository present; unofficial service dependency | Material-style YouTube Music client | L3,L8 | [support](https://github.com/z-huang/InnerTune) | 2026-09-11 |
| [Inspiration tab](https://support.google.com/youtube/answer/14145614) | T1 - Generate and research video ideas | First-party Studio feature | Creators | AI-assisted ideas, titles, thumbnails and outlines where available | Free/restricted | Current; availability and output quality vary | Native ideation tied to channel context | L5,L9 | [support](https://support.google.com/youtube/answer/14145614) | 2026-09-11 |
| [InVID-WeVerify Verification Plugin](https://weverify.eu/verification-plugin/) | T9 - Verify online video and images | Browser extension | Journalists and investigators | Keyframe extraction, reverse-image search, metadata and forensic checks | Free | Current project page/repository evidence | Bundles several verification methods | L5,L8,L10 | [support](https://github.com/AFP-Medialab/verification-plugin) | 2026-09-11 |
| [Invidious](https://invidious.io/) | T5 - Self-host an alternative YouTube front end | Self-hosted web app and public instances | Privacy-oriented users and operators | Search, playback, feeds, subscriptions and API without the normal YouTube UI | OSS | Maintained releases; instance reliability varies | Mature alternative front-end ecosystem | L3,L7 | [support](https://github.com/iv-org/invidious/releases) | 2026-09-11 |
| [JDownloader 2](https://jdownloader.org/jdownloader2) | T6 - Manage bulk link downloads | Desktop app | Power users | Link grabbing, queues, extraction and YouTube support through plugins | Free/source-available | Live project page; individual plugin behavior not tested | General download manager with automation | L3,L6,L10 | [support](https://jdownloader.org/jdownloader2) | 2026-09-11 |
| [Kapwing](https://www.kapwing.com/) | T3 - Edit, caption and translate social video | Web SaaS | Creators and teams | Browser editing, resizing, captions, translation, clips and templates | Mixed | Live vendor page | Collaborative browser production | L1,L5,L10 | [support](https://www.kapwing.com/tools/translate) | 2026-09-11 |
| [Keyword Tool for YouTube](https://keywordtool.io/youtube) | T2 - Generate YouTube autocomplete keywords | Hosted website | Creators and SEO teams | Keyword suggestions and paid search-volume metrics | Mixed | Live vendor page | Autocomplete-centric research | L1,L2 | [support](https://keywordtool.io/youtube) | 2026-09-11 |
| [Klap](https://klap.app/) | T3 - Create short clips from long videos | Web SaaS | Creators | AI highlight detection, reframing, captions and export | Paid/mixed | Live vendor page | Streamlined URL-to-clips workflow | L1,L5 | [support](https://klap.app/) | 2026-09-11 |
| [Kosmi](https://kosmi.io/watch-youtube-together/) | T5 - Watch YouTube together with video chat | Hosted web app | Friends and communities | Synchronized rooms, video chat and shared media | Mixed | Live vendor page | Social room adds communication without extension installation | L1,L7 | [support](https://kosmi.io/watch-youtube-together/) | 2026-09-11 |
| [Language Reactor](https://www.languagereactor.com/) | T7 - Learn languages with YouTube subtitles | Browser extension and web app | Language learners | Dual subtitles, dictionary, replay and vocabulary workflows | Mixed | Live vendor page | Purpose-built language-learning overlay | L1,L5,L8 | [support](https://dev.languagereactor.com/help/basic) | 2026-09-11 |
| [LibreTube](https://github.com/libre-tube/LibreTube) | T5 - Use a privacy front end on Android | Android app | Privacy-oriented viewers | Piped-backed playback, subscriptions and account-free use | OSS | Repository/store evidence; instance dependency | Native Android client for Piped | L3,L7,L8 | [support](https://f-droid.org/packages/com.github.libretube/) | 2026-09-11 |
| [Lickd](https://lickd.co/) | T11 - License commercial music for creator videos | Web marketplace | YouTube creators | Per-track licensing and channel/video clearance workflows | Paid | Live vendor page | Access to recognizable music under creator-specific licenses | L1,L9 | [support](https://lickd.co/) | 2026-09-11 |
| [Live Control Room](https://support.google.com/youtube/answer/9228389) | T1 - Configure and monitor YouTube livestreams | First-party Studio web UI | Live creators and broadcasters | Stream setup, scheduling, trailers, health monitoring and metrics | Free/restricted | Current; channel eligibility applies | Native operational control for YouTube Live | L9 | [support](https://support.google.com/youtube/answer/9228389) | 2026-09-11 |
| [Maekersuite](https://maekersuite.com/) | T2 - Research, script and plan video ideas | Web SaaS | Creators and marketing teams | Topic research, ideation, scripting and content planning | Paid/mixed | Live vendor page | Research-to-script workflow | L1,L2 | [support](https://maekersuite.com/) | 2026-09-11 |
| [mattw.io YouTube Metadata](https://mattw.io/youtube-metadata/) | T9 - Inspect YouTube metadata and thumbnails | Hosted website | Researchers, journalists and developers | Displays API-derived video/channel metadata and image assets | Free | Live page at retrieval | Transparent single-video metadata inspection | L4,L5 | [support](https://mattw.io/youtube-metadata/) | 2026-09-11 |
| [Media Downloader](https://github.com/mhogomchungu/media-downloader) | T6 - Batch-download media through extractor backends | Desktop app | Power users | GUI queues and backend selection including yt-dlp | OSS | Repository and Flathub evidence | Backend-agnostic graphical queue | L3,L6 | [support](https://flathub.org/apps/net.brinkervii.mediadownloader) | 2026-09-11 |
| [Meld Studio](https://meldstudio.co/) | T4 - Produce and multistream live video | Desktop app | Streamers | Scenes, sources, overlays, recording and multi-output streaming | Mixed | Live vendor page | Modern integrated broadcast UI | L1,L4 | [support](https://meldstudio.co/) | 2026-09-11 |
| [Meltwater](https://www.meltwater.com/) | T11 - Monitor media and run influencer programs | Enterprise SaaS | Brands and communications teams | Social listening, creator discovery, campaign measurement and reporting | Paid | Live vendor page | Combines media intelligence and influence operations | L1,L2,L4 | [support](https://www.meltwater.com/) | 2026-09-11 |
| [Metricool](https://metricool.com/youtube/) | T10 - Schedule and analyze YouTube content | Web/mobile SaaS | Creators and social teams | Publishes videos and Shorts with metadata, playlists and analytics | Mixed | Live vendor docs | Cross-network calendar with fuller YouTube publishing than Shorts-only tools | L1,L4 | [support](https://help.metricool.com/schedule-and-publish-on-youtube-gof0k) | 2026-09-11 |
| [MeTube](https://github.com/alexta69/metube) | T6 - Provide a self-hosted web UI for yt-dlp | Self-hosted web app | Home users and teams | URL queue, format choice and downloads through yt-dlp | OSS | Maintained repository evidence | Simple multi-user/browser front end | L3,L6 | [support](https://github.com/alexta69/metube) | 2026-09-11 |
| [Migaku](https://migaku.com/) | T7 - Mine vocabulary from YouTube and web media | Browser extension and apps | Language learners | Subtitle parsing, dictionary lookup, sentence capture and flashcard creation | Paid/mixed | Live vendor page | Integrated immersion-to-flashcard workflow | L1,L5,L8 | [support](https://migaku.com/) | 2026-09-11 |
| [Modash](https://www.modash.io/features/influencer-discovery) | T11 - Discover YouTube creators and manage campaigns | Web SaaS | Brands and agencies | Creator search, audience data, outreach, tracking and payments | Paid | Live vendor page | Commerce-oriented end-to-end workflow | L1,L2 | [support](https://www.modash.io/features/influencer-discovery) | 2026-09-11 |
| [Monica](https://monica.im/) | T7 - Summarize and chat with web/video content | Browser extension and apps | Knowledge workers | YouTube summary, transcript and conversational assistance among broader AI features | Mixed | Live vendor page | General assistant embedded in browser workflows | L1,L5,L8,L10 | [support](https://monica.im/) | 2026-09-11 |
| [Morningfame](https://morningfa.me/) | T2 - Guide small-channel SEO and analytics | Web SaaS | YouTube creators | Keyword research, video optimization and channel analytics | Paid/trial | Live vendor page | Scores keyword opportunity relative to channel size | L1,L2 | [support](https://morningfa.me/) | 2026-09-11 |
| [Munch](https://www.getmunch.com/) | T3 - Repurpose long video into social clips | Web SaaS | Creators and marketers | AI clipping, reframing, captions and trend-oriented suggestions | Paid/mixed | Live vendor page | Markets trend-aware clip selection | L1,L2,L5 | [support](https://www.getmunch.com/) | 2026-09-11 |
| [NewPipe](https://newpipe.net/) | T5 - Alternative Android viewing and downloading | Android app | Viewers | Playback, background/PiP, subscriptions and downloads without Google account/framework | OSS | Current F-Droid package; recurring extractor fixes | Direct site parsing without official API | L3,L6,L8 | [support](https://f-droid.org/packages/org.schabi.newpipe/) | 2026-09-11 |
| [Nightbot](https://nightbot.tv/) | T4 - Moderate and automate live chat | Cloud bot | Streamers and moderators | Commands, spam filters, timers, song requests and moderation for YouTube/Twitch | Free/mixed | Live service docs | Low-friction basic chatbot | L1,L4 | [support](https://docs.nightbot.tv/setup) | 2026-09-11 |
| [NodeXL Pro](https://nodexl.com/) | T9 - Analyze YouTube interaction networks | Excel add-in and cloud data services | Researchers and analysts | YouTube comment/user network collection and graph analysis | Paid | Live vendor page | Network analysis inside Excel | L1,L4,L10 | [support](https://nodexl.com/integration-youtube/) | 2026-09-11 |
| [NoteGPT](https://notegpt.io/youtube-transcript-downloader) | T7 - Extract, summarize and batch-process videos | Web SaaS | Students and researchers | Transcript download, multilingual processing, summaries and notes | Mixed | Live vendor page | Batch-oriented study workflow | L1,L5 | [support](https://notegpt.io/youtube-transcript-downloader) | 2026-09-11 |
| [NoxInfluencer](https://www.noxinfluencer.com/) | T2 - Public channel analytics and creator discovery | Web SaaS | Creators, brands and agencies | Channel comparisons, estimated metrics, rankings and influencer search | Mixed | Live vendor page; public API not verified | Broad public-channel database | L1,L2 | [support](https://www.noxinfluencer.com/) | 2026-09-11 |
| [OBS Studio](https://obsproject.com/) | T4 - Record and stream video to YouTube | Desktop app | Streamers and video producers | Scenes, sources, encoding, recording, plugins and YouTube streaming | OSS | Actively maintained project | Extensible free production standard | L4,L10 | [support](https://obsproject.com/) | 2026-09-11 |
| [OneStream Live](https://onestream.live/) | T4 - Schedule and multistream prerecorded/live content | Cloud and browser SaaS | Creators and businesses | Prerecorded scheduling, browser live, multistream and hosted pages | Paid/mixed | Live vendor page; plan details conflict across pages | Cloud-first scheduled streaming | L1,L4,L9 | [support](https://onestream.live/) | 2026-09-11 |
| [OpusClip](https://www.opus.pro/) | T3 - Create short clips from long video | Web SaaS and API | Creators, media teams and agencies | AI highlight selection, reframing, captions, branding and publishing integrations | Mixed | Live vendor page | Scaled clipping workflow and API | L1,L2,L5 | [support](https://www.opus.pro/tools/social-media-video-maker) | 2026-09-11 |
| [OutlierKit](https://outlierkit.com/) | T2 - Find outlier videos, niches and keywords | Web SaaS | Creators | Competitor/outlier discovery, keyword research and channel intelligence | Paid/mixed | Live vendor page | Combines outlier discovery with search research | L1,L2 | [support](https://outlierkit.com/) | 2026-09-11 |
| [Outscraper YouTube APIs](https://docs.outscraper.com/tags/youtube/) | T9 - Extract public YouTube data | Hosted scraper and API | Data teams and marketers | Channel, video, search, comment and transcript endpoints with exports | Paid/mixed | Live vendor documentation | No-code jobs plus API delivery | L1,L3,L4 | [support](https://docs.outscraper.com/tags/youtube/) | 2026-09-11 |
| [Oxylabs Video Data API](https://docs.oxylabs.io/video-data-api) | T9 - Collect structured video-platform data | Managed API | Enterprise data teams | Search, metadata, channels, transcripts and related YouTube extraction | Paid | Live documentation | Managed enterprise extraction | L1,L3,L4 | [support](https://docs.oxylabs.io/video-data-api) | 2026-09-11 |
| [Papercup](https://www.papercup.com/) | T3 - Localize videos with AI dubbing | Managed SaaS | Media companies and publishers | Translation, synthetic voices, review and distribution-oriented localization | Paid | Live vendor page | Managed media-localization service | L1,L5 | [support](https://www.papercup.com/) | 2026-09-11 |
| [Parabolic](https://github.com/NickvisionApps/Parabolic) | T6 - Download video through yt-dlp | Desktop app and Flathub package | Linux and desktop users | GUI download queue, formats and metadata through yt-dlp | OSS | Current repository/store evidence | Modern GNOME-oriented downloader UI | L3,L6 | [support](https://flathub.org/apps/org.nickvision.tubeconverter) | 2026-09-11 |
| [pauling-ai YouTube MCP Server](https://github.com/pauling-ai/youtube-mcp-server) | T8 - Use YouTube APIs through MCP | Open-source MCP server | Developers and AI-agent users | Metadata, transcripts, comments, publishing, analytics and reports | OSS | Repository present; OAuth required for owner operations | Combines public and authenticated YouTube APIs | L4 | [support](https://github.com/pauling-ai/youtube-mcp-server) | 2026-09-11 |
| [Pex](https://pex.com/) | T11 - Identify and license online media | Enterprise service | Platforms and rights holders | Content identification, attribution and licensing infrastructure | Paid | Live vendor page | Identification/licensing infrastructure rather than channel growth | L1,L9 | [support](https://pex.com/) | 2026-09-11 |
| [Pictory](https://pictory.ai/) | T3 - Generate and repurpose videos from text/long media | Web SaaS | Creators and marketers | Script-to-video, highlights, captions and branded clips | Paid/mixed | Live vendor page | Text-first automated video production | L1,L5,L10 | [support](https://pictory.ai/) | 2026-09-11 |
| [Pinchflat Community](https://github.com/CommunityMaintained/pinchflat) | T6 - Automatically archive YouTube channels and playlists | Self-hosted web app | Home archivists and media-server users | Subscription rules, yt-dlp downloads and media-library organization | OSS | Maintained community fork; original appears stalled | Successor fork preserves original workflow | L3,L6 | [support](https://github.com/CommunityMaintained/pinchflat) | 2026-09-11 |
| [Piped](https://piped.video/) | T5 - Run/use a privacy YouTube front end | Self-hosted web app, instances and API | Privacy users and operators | Playback, search, feeds, accounts and API through a proxy architecture | OSS | Project current; public instances vary | Split front end/backend ecosystem | L3,L7 | [support](https://github.com/TeamPiped/Piped) | 2026-09-11 |
| [PipePipe](https://github.com/InfinityLoop1308/PipePipe) | T5 - Use an enhanced NewPipe-family client | Android app | Viewers | Playback, subscriptions, downloads and additional-service features | OSS | Repository/F-Droid evidence | Feature-expanded NewPipe fork | L3,L6,L8 | [support](https://f-droid.org/packages/InfinityLoop1309.NewPipeEnhanced/) | 2026-09-11 |
| [PiPifier](https://github.com/arnoappenzeller/PiPifier) | T5 - Enable picture-in-picture for HTML5 video | iOS Safari extension/app | Mobile viewers | Invokes PiP for supported HTML5 video pages including YouTube contexts | OSS/free | Public source and store evidence | Small generic PiP utility used with YouTube | L8,L10 | [support](https://github.com/arnoappenzeller/PiPifier) | 2026-09-11 |
| [Pixlr YouTube Thumbnail Maker](https://pixlr.com/design/youtube-thumbnail-maker/) | T3 - Create thumbnails | Hosted and mobile design app | Creators | Templates, image editing and AI-assisted graphics | Mixed | Live vendor page | Browser-based image editor plus templates | L1,L10 | [support](https://pixlr.com/design/youtube-thumbnail-maker/) | 2026-09-11 |
| [Placeit](https://placeit.net/) | T3 - Create channel graphics and mockups | Hosted design service | Creators and marketers | YouTube thumbnail, banner, intro and branding templates | Paid/mixed | Live vendor home; prior YouTube-specific route returned 404 | Large template/mockup catalog | L1,L10 | [support](https://placeit.net/) | 2026-09-11 |
| [Playboard](https://playboard.co/) | T2 - Rank and analyze channels and live revenue signals | Hosted website | Creators, brands and viewers | Channel/video rankings, livestream and Super Chat-oriented public statistics | Mixed | Live site; public developer API not verified | Strong live/Super Chat orientation | L1,L2 | [support](https://playboard.co/) | 2026-09-11 |
| [Playlist Lens](https://playlistlens.com/) | T10 - Inspect playlist duration and structure | Hosted website | Viewers, students and creators | Playlist length, item counts and speed-adjusted duration | Free/mixed | Live vendor page | Playlist-focused inspection | L1 | [support](https://playlistlens.com/) | 2026-09-11 |
| [playlist-randomizer.com](https://playlist-randomizer.com/) | T10 - Shuffle YouTube playlists | Hosted website | Viewers | Loads a playlist and randomizes playback order | Free | Live site evidence | Simple external shuffler | L1,L7 | [support](https://playlist-randomizer.com/) | 2026-09-11 |
| [playout.video](https://playout.video/) | T4 - Run continuous browser-controlled channels | Cloud playout service | Creators and small broadcasters | 24/7 playlists, scheduling and live takeover into YouTube | Paid/mixed | Live vendor page | Low-friction linear playout | L1,L4,L9 | [support](https://playout.video/) | 2026-09-11 |
| [PocketTube](https://pockettube.io/) | T5 - Organize YouTube subscriptions | Browser extension and mobile apps | Heavy subscribers and creators | Groups, filters, bulk unsubscribe, notifications and channel organization | Mixed | Current official product evidence | Cross-platform subscription management | L1,L4,L8 | [support](https://pockettube.io/) | 2026-09-11 |
| [Powder](https://powder.gg/) | T3 - Generate gaming clips | Desktop/web app | Gaming creators | Detects gameplay highlights and formats clips for social video | Mixed | Live vendor page | Game-aware highlight generation | L1,L10 | [support](https://powder.gg/) | 2026-09-11 |
| [ProRankTracker](https://proranktracker.com/) | T2 - Track YouTube video keyword rankings | Web SaaS | SEO professionals and agencies | Scheduled YouTube rank checks, reporting and estimated search volume | Paid/mixed | Live vendor page | Agency reporting and rank tracking | L1,L2 | [support](https://proranktracker.com/features) | 2026-09-11 |
| [Publer](https://publer.io/integrations/youtube) | T10 - Schedule and manage YouTube posts | Web/mobile SaaS | Creators and social teams | Cross-network calendar, publishing and basic analytics for YouTube content | Mixed | Live vendor page | Calendar-centric multi-network workflow | L1,L4 | [support](https://publer.io/integrations/youtube) | 2026-09-11 |
| [pytubefix](https://github.com/JuanBindez/pytubefix) | T8 - Download and inspect YouTube media in Python | Python library | Developers | Streams, metadata, playlists and captions through unofficial interfaces | OSS | Repository active in search evidence | Maintained successor/fix path for pytube-family users | L3,L6 | [support](https://github.com/JuanBindez/pytubefix) | 2026-09-11 |
| [Quintly / Facelift Data Studio](https://www.quintly.com/youtube-analytics) | T2 - Enterprise YouTube analytics and reporting | Web SaaS and API | Brands and agencies | Channel metrics, benchmarking, dashboards, exports and API workflows | Paid | Live vendor page; documented data lag can occur | Customizable enterprise reporting | L1,L2,L4 | [support](https://www.quintly.com/youtube-analytics) | 2026-09-11 |
| [quso.ai (formerly vidyo.ai)](https://quso.ai/) | T3 - Repurpose, schedule and manage social video | Web SaaS | Creators and social teams | AI clips, captions, resizing, scheduling and multi-platform workflows | Mixed | Live vendor page; renamed from vidyo.ai | Broader distribution layer beyond clipping | L1,L5,L10 | [support](https://quso.ai/) | 2026-09-11 |
| [Rank Ranger](https://www.rankranger.com/youtube-rank-tracker) | T2 - Track YouTube rankings in agency reports | Web SaaS | SEO agencies | Keyword/video rank tracking and white-label dashboards | Paid | Live vendor page | Report customization and agency packaging | L1,L2 | [support](https://www.rankranger.com/youtube-rank-tracker) | 2026-09-11 |
| [Rask AI](https://www.rask.ai/) | T3 - Translate and dub creator videos | Web SaaS | Creators and localization teams | Translation, dubbing, voice cloning and subtitle workflows | Paid/mixed | Live vendor page | Creator-oriented multilingual production | L1,L5 | [support](https://www.rask.ai/) | 2026-09-11 |
| [Readwise Reader](https://readwise.io/read) | T7 - Save and annotate YouTube transcripts | Web/mobile reading app and extension | Researchers and knowledge workers | Imports YouTube transcripts, highlights and syncs notes into a reading system | Paid/trial | Live vendor page | Unifies video notes with articles and documents | L1,L5,L8 | [support](https://readwise.io/read) | 2026-09-11 |
| [Reap](https://reap.video/) | T3 - Clip, caption and dub long-form video | Web SaaS and API | Creators and media teams | Highlight generation, multilingual captions/dubbing and editing API | Paid/mixed | Live vendor page | API-accessible repurposing and localization | L1,L5 | [support](https://reap.video/api) | 2026-09-11 |
| [Recall (getrecall.ai)](https://www.getrecall.ai/) | T7 - Summarize videos into a knowledge base | Web app and browser extension | Learners and researchers | Video summaries, linked knowledge cards and spaced review | Mixed | Live vendor page; distinct from meeting API recall.ai | Knowledge-graph orientation | L1,L5,L8 | [support](https://www.getrecall.ai/) | 2026-09-11 |
| [Repurpose.io](https://repurpose.io/) | T3 - Automate cross-platform video distribution | Web SaaS | Creators and marketing teams | Rules that move and reformat content among YouTube and other networks | Paid/trial | Live vendor page | Workflow automation rather than manual editing | L1,L4,L10 | [support](https://support.repurpose.io/en/article/quick-start-guide-1aqbuu5/) | 2026-09-11 |
| [Restream](https://restream.io/) | T4 - Multistream and produce live video | Cloud SaaS and studio | Streamers, businesses and broadcasters | Browser studio, guests, multistreaming, chat aggregation and analytics | Mixed | Live vendor page | Cloud multistream distribution and unified chat | L1,L4 | [support](https://restream.io/integrations/youtube) | 2026-09-11 |
| [Return YouTube Dislike](https://returnyoutubedislike.com/) | T5 - Restore an estimated dislike signal | Browser extension, API and integrations | Viewers and developers | Displays modeled/community-derived dislike counts after YouTube hid public totals | Free/OSS | Current project/store evidence | Shared estimate used across clients | L2,L8 | [support](https://github.com/Anarios/return-youtube-dislike) | 2026-09-11 |
| [Rev](https://www.rev.com/) | T3 - Create captions, transcripts and subtitles | Web SaaS and human service | Creators, media and accessibility teams | Human/automatic transcription, captions, translation and exports | Paid | Live vendor page | Human service option alongside automation | L1,L5 | [support](https://www.rev.com/caption) | 2026-09-11 |
| [RiMusic](https://github.com/fast4x/RiMusic) | T5 - Play YouTube Music through an alternative client | Android app | Music listeners | Search, playback, playlists, lyrics and offline-oriented features | OSS | Repository present; unofficial service dependency | Feature-rich open-source music client | L3,L8 | [support](https://github.com/fast4x/RiMusic) | 2026-09-11 |
| [Riverside](https://riverside.fm/) | T3 - Record, edit and livestream interviews/podcasts | Web/desktop/mobile SaaS | Podcasters, interviewers and teams | Remote recording, transcript editing, clips and YouTube live/publishing workflows | Mixed | Live vendor page | High-quality remote recording plus repurposing | L1,L4,L5,L10 | [support](https://riverside.fm/) | 2026-09-11 |
| [RustyPipe](https://github.com/TeamPiped/rustypipe) | T8 - Access YouTube and YouTube Music from Rust | Rust library | Developers | Unofficial extraction/client operations across video and music surfaces | OSS | Repository present | Broad Rust implementation from Piped ecosystem | L3 | [support](https://github.com/TeamPiped/rustypipe) | 2026-09-11 |
| [ScrapeCreators YouTube API](https://scrapecreators.com/youtube-api) | T9 - Retrieve public YouTube content and creator data | Hosted API | Developers and marketers | Unofficial endpoints for channels, videos, comments, search and transcripts | Paid/mixed | Live vendor docs | Creator-platform API with explicit unofficial status | L1,L3,L4 | [support](https://scrapecreators.com/youtube-api) | 2026-09-11 |
| [ScrapingBee YouTube API](https://www.scrapingbee.com/documentation/youtube/) | T9 - Extract YouTube search, metadata and subtitle data | Hosted API | Developers | Structured YouTube-related endpoints through managed scraping infrastructure | Paid/mixed | Live vendor documentation | General scraping platform packaged for YouTube | L1,L3,L4 | [support](https://www.scrapingbee.com/documentation/youtube/) | 2026-09-11 |
| [ScreenPal](https://screenpal.com/) | T3 - Record, edit and publish screen video | Web, desktop and mobile app | Educators and business creators | Screen recording, editing, captions, hosting and YouTube sharing | Mixed | Live vendor page | Accessible capture-to-publish workflow | L1,L10 | [support](https://support.screenpal.com/portal/en/kb/articles/uploading-to-youtube) | 2026-09-11 |
| [Seal](https://github.com/JunkFood02/Seal) | T6 - Download video/audio on Android using yt-dlp | Android app | Mobile users | Share-link downloads, format controls and yt-dlp integration | OSS | Maintained repository evidence | Modern Material Android frontend | L3,L6,L8 | [support](https://github.com/JunkFood02/Seal) | 2026-09-11 |
| [SearchApi.io YouTube Search API](https://www.searchapi.io/docs/youtube) | T9 - Retrieve localized YouTube search results | Hosted API | Developers and SEO teams | Structured result pages, filters, pagination and localization | Paid/mixed | Live documentation | Search-engine-style YouTube results | L1,L3,L4 | [support](https://www.searchapi.io/docs/youtube) | 2026-09-11 |
| [SerpApi YouTube Search API](https://serpapi.com/youtube-search-api) | T9 - Retrieve structured YouTube search results | Hosted API | Developers and data teams | Search results, filters, pagination and localization | Paid/mixed | Live documentation | Mature SERP API interface | L1,L3,L4 | [support](https://serpapi.com/youtube-search-api) | 2026-09-11 |
| [SkyTube](https://github.com/SkyTubeTeam/SkyTube) | T5 - Use an account-free Android viewer | Android app | Viewers | Subscriptions, blocking and playback without a Google account | OSS | Repository present; current compatibility not tested | Account-free client with blocking controls | L3,L8 | [support](https://github.com/SkyTubeTeam/SkyTube) | 2026-09-11 |
| [Snappa](https://snappa.com/create/youtube-thumbnails) | T3 - Create thumbnails and channel graphics | Hosted design app | Creators and marketers | Templates, graphics, resizing and collaboration | Mixed | Live vendor page | Simple template workflow for non-designers | L1,L10 | [support](https://snappa.com/create/youtube-thumbnails) | 2026-09-11 |
| [Social Blade](https://socialblade.com/) | T2 - View public channel statistics and rankings | Hosted website and API | Creators, viewers and marketers | Historical public metrics, projections, rankings and comparisons | Mixed | Live site and developer docs | Widely used public-statistics baseline | L1,L2 | [support](https://socialblade.com/developers/docs) | 2026-09-11 |
| [Social Stream Ninja](https://socialstream.ninja/) | T4 - Aggregate live chat into overlays | Browser extension and self-hostable web app | Streamers and producers | Collects chats from many services and outputs overlays/docks | Free/OSS | Current project page | Local/cross-platform chat bridge | L3,L4,L8 | [support](https://github.com/steveseguin/social_stream) | 2026-09-11 |
| [Socialinsider](https://www.socialinsider.io/youtube-analytics) | T2 - Benchmark YouTube channels and content | Web SaaS | Brands and agencies | Owned-channel analytics, competitor benchmarking and reports | Paid/trial | Live vendor page | Cross-network competitive reporting | L1,L2,L4 | [support](https://www.socialinsider.io/youtube-analytics) | 2026-09-11 |
| [SocialKit YouTube APIs](https://www.socialkit.dev/youtube-apis) | T9 - Retrieve public YouTube data | Hosted API | Developers and agencies | Transcript, metadata, comment, channel, playlist, search, Shorts and download endpoints | Paid/mixed | Live vendor page | Broad family of unofficial endpoints | L1,L3,L4 | [support](https://www.socialkit.dev/youtube-apis) | 2026-09-11 |
| [SocialPilot](https://www.socialpilot.co/) | T10 - Schedule YouTube videos and Shorts | Web/mobile SaaS | Creators and agencies | Publishing calendar, metadata, thumbnails and team workflows | Paid/trial | Live vendor page | Agency/team scheduling across networks | L1,L4 | [support](https://help.socialpilot.co/article/861-how-to-schedule-youtube-videos-and-shorts-with-socialpilot) | 2026-09-11 |
| [Spikes Studio](https://spikes.studio/) | T3 - Generate short clips from long media | Web SaaS | Creators and streamers | AI highlight extraction, reframing, captions and high-volume clip processing | Mixed | Live vendor page | High-volume creator positioning | L1,L5 | [support](https://spikes.studio/) | 2026-09-11 |
| [SponsorBlock](https://sponsor.ajay.app/) | T5 - Skip sponsored and repetitive video segments | Browser extension, API, dataset and integrations | Viewers and developers | Crowdsourced timestamps for sponsors, intros, outros, reminders and highlights | Free/OSS | Current project evidence | Shared segment database integrated by many clients | L8 | [support](https://github.com/ajayyy/SponsorBlock) | 2026-09-11 |
| [Sprout Social](https://sproutsocial.com/integrations/youtube/) | T10 - Manage YouTube comments and analytics | Web SaaS | Social teams and enterprises | Smart Inbox, replies/moderation, reporting and connected-channel workflows | Paid | Live vendor docs; polling/scope limits documented | Enterprise inbox and governance | L1,L4,L9 | [support](https://support.sproutsocial.com/hc/en-us/articles/8206924306829-How-do-I-respond-to-YouTube-comments-in-the-Smart-Inbox) | 2026-09-11 |
| [Stacher](https://stacher.io/) | T6 - Use yt-dlp through a desktop GUI | Desktop app | Non-command-line users | URL downloads, format choices and queues backed by yt-dlp | Free/mixed | Live vendor page; open-source status unverified | Friendly cross-platform frontend | L1,L3,L6 | [support](https://stacher.io/) | 2026-09-11 |
| [StreamElements](https://streamelements.com/) | T4 - Run overlays, alerts and chat automation | Cloud SaaS, bot and OBS plugin | Streamers | Overlays, alerts, chatbot, tipping and SE.Live workflows including YouTube | Mixed | Live vendor page | Cloud overlay/bot ecosystem | L1,L4 | [support](https://streamelements.com/) | 2026-09-11 |
| [Streamlabs](https://streamlabs.com/) | T4 - Produce streams and automate engagement | Desktop app and cloud services | Streamers | Broadcasting, alerts, overlays, multistreaming and Cloudbot | Mixed | Live vendor page | Integrated creator monetization/overlay suite | L1,L4 | [support](https://streamlabs.com/) | 2026-09-11 |
| [StreamLadder](https://streamladder.com/) | T3 - Reformat stream clips for Shorts | Hosted website | Streamers | Vertical layouts, captions and clip export for short-form platforms | Mixed | Live vendor page | Fast streamer-specific reframing | L1,L10 | [support](https://streamladder.com/) | 2026-09-11 |
| [Streamlink](https://streamlink.github.io/) | T6 - Pipe livestreams into local players/files | CLI and Python library | Technical viewers and archivists | Extracts stream URLs from supported sites including YouTube and hands them to players/output | OSS | Maintained project; plugin behavior varies | Live-stream transport rather than full archive manager | L3,L6,L10 | [support](https://streamlink.github.io/plugins.html) | 2026-09-11 |
| [StreamYard](https://streamyard.com/) | T4 - Host browser-based live shows | Web SaaS | Interviewers, creators and businesses | Guests, scenes, branding, recording and multistreaming to YouTube | Mixed | Live vendor page | Low-setup guest production | L1,L4 | [support](https://streamyard.com/) | 2026-09-11 |
| [Subscribr](https://subscribr.ai/) | T2 - Research and script YouTube videos | Web AI SaaS | Creators | Idea research, channel context, outlines and script generation | Paid/mixed | Live vendor page | Long-form YouTube scripting focus | L1,L2,L5 | [support](https://subscribr.ai/) | 2026-09-11 |
| [Supadata](https://supadata.ai/) | T7 - Retrieve or generate transcripts through an API | Hosted API | Developers and AI builders | Accepts YouTube URLs, returns native captions or generated transcripts depending on availability | Paid/mixed | Live documentation | Direct URL-to-transcript developer interface | L1,L3,L5 | [support](https://docs.supadata.ai/api-reference/endpoint/transcript/transcript) | 2026-09-11 |
| [SyncTube](https://github.com/RblSb/SyncTube) | T5 - Host synchronized watch rooms | Hosted/self-hosted web app | Groups and communities | Synchronized playback, room control, subtitles and supported media | OSS | Repository present; domain/name ambiguity exists | Self-hostable watch-together stack | L3,L7 | [support](https://github.com/RblSb/SyncTube) | 2026-09-11 |
| [Tactiq YouTube Transcript Generator](https://tactiq.io/tools/youtube-transcript) | T7 - Extract existing YouTube transcripts | Hosted website | Students, creators and researchers | Fetches and exports captions/transcript text from supported videos | Free/mixed | Live vendor page | Simple transcript copy/download workflow | L1,L5 | [support](https://tactiq.io/tools/youtube-transcript) | 2026-09-11 |
| [Taja AI](https://www.taja.ai/) | T2 - Generate YouTube packaging and metadata | Web SaaS | Creators | Titles, descriptions, chapters, tags, thumbnails and publishing assistance | Paid/mixed | Live vendor page | Metadata and packaging automation in one workflow | L1,L2,L5 | [support](https://www.taja.ai/) | 2026-09-11 |
| [Tartube](https://github.com/axcore/tartube) | T6 - Manage subscriptions and archives through yt-dlp | Desktop app | Archivists and power users | Channel/playlist monitoring, organized downloads, livestream alerts and audio extraction | OSS | Maintained; stable 2026-05-24 and dev 2026-07-13 cited by project | Archive manager rather than one-off downloader | L3,L6 | [support](https://github.com/axcore/tartube) | 2026-09-11 |
| [Teleparty](https://www.teleparty.com/youtube) | T5 - Synchronize YouTube viewing with chat | Browser extension | Friends and remote groups | Shared playback and chat across YouTube and other supported services | Mixed | Live vendor page | Cross-service watch-party extension | L1,L7,L8 | [support](https://www.teleparty.com/youtube) | 2026-09-11 |
| [TestMyThumb](https://www.testmythumb.com/) | T2 - Preview and test thumbnail/title concepts | Hosted website | Creators | Thumbnail comparison, preview and feedback workflows | Mixed | Live vendor page | Packaging feedback outside native Studio | L1,L2 | [support](https://www.testmythumb.com/) | 2026-09-11 |
| [TestMyThumbnails](https://www.testmythumbnails.com/) | T2 - Create, preview and test thumbnails | Hosted website | Creators | Thumbnail mockups, comparison and rotation/testing tools | Mixed | Live vendor page | DIY thumbnail testing suite | L1,L2 | [support](https://www.testmythumbnails.com/thumbnail-ideas) | 2026-09-11 |
| [Thumblytics](https://thumblytics.com/) | T2 - Test YouTube thumbnails and titles | Managed service and web product | Established creators | Packaging experiments and analysis | Paid | Live vendor page | Higher-touch testing service | L1,L2 | [support](https://thumblytics.com/) | 2026-09-11 |
| [tldr.yt](https://tldr.yt/) | T7 - Summarize YouTube videos | Hosted website and extension | Viewers | Concise video summaries and quick consumption | Free/mixed | Live product page | Minimal summary-first experience | L1,L5 | [support](https://tldr.yt/) | 2026-09-11 |
| [Trancy](https://www.trancy.org/) | T7 - Learn languages with bilingual subtitles | Browser extension and web app | Language learners | Dual subtitles, lookup, shadowing and speaking practice on YouTube and streaming sites | Mixed | Live vendor page | Combines subtitle study and speaking practice | L1,L5,L8 | [support](https://www.trancy.org/) | 2026-09-11 |
| [TubeArchivist](https://www.tubearchivist.com/) | T6 - Build a searchable self-hosted YouTube archive | Self-hosted web app | Archivists and home media users | Downloads, indexes, searches, plays and manages channels/playlists | OSS | Maintained repository evidence | Archive plus media-server-style index | L3,L6 | [support](https://github.com/tubearchivist/tubearchivist) | 2026-09-11 |
| [TubeBuddy](https://www.tubebuddy.com/) | T2 - Optimize and manage a YouTube channel | Browser extension, web SaaS and mobile companion | Creators and teams | Keyword research, bulk metadata, SEO, thumbnails, A/B tests and workflow tools | Mixed | Live vendor/store evidence | Deep in-Studio creator workflow and bulk operations | L1,L2,L4,L8 | [support](https://support.tubebuddy.com/hc/en-us/articles/9318692935195-How-can-TubeBuddy-help-me) | 2026-09-11 |
| [TubeSync](https://github.com/meeb/tubesync) | T6 - Synchronize channels/playlists into a media library | Self-hosted web app | Home media users and archivists | Scheduled channel/playlist downloads and media-server-compatible organization | OSS | Maintained repository evidence | Continuous sync rather than ad hoc downloads | L3,L6 | [support](https://github.com/meeb/tubesync) | 2026-09-11 |
| [Tubeviz](https://github.com/interrupt21h/tubeviz) | T3 - Automatically edit YouTube footage to music | Open-source project | Developers and experimental creators | Automated audiovisual edit workflow around YouTube footage | OSS | New project surfaced 2026-08-31; weak functional verification | Unusual music-driven automatic editing | L3,L5 | [support](https://github.com/interrupt21h/tubeviz) | 2026-09-11 |
| [Tubics](https://www.tubics.com/) | T2 - YouTube SEO and channel strategy | Agency/service with software workflows | Brands and enterprise channels | SEO research, optimization, strategy and channel operations | Paid | Live vendor page | Services-led enterprise optimization | L1,L2 | [support](https://www.tubics.com/) | 2026-09-11 |
| [Tubular (NewPipe fork)](https://github.com/polymorphicshade/Tubular) | T5 - Use NewPipe with SponsorBlock-oriented additions | Android app | Viewers | NewPipe-family playback/download plus integrated community features | OSS | Canonical repository evidence | Fork integrates SponsorBlock-related workflow | L3,L6,L8 | [support](https://github.com/polymorphicshade/Tubular) | 2026-09-11 |
| [Tubular Labs](https://tubularlabs.com/) | T2 - Analyze cross-platform video audiences | Enterprise SaaS | Media companies, brands and agencies | Video intelligence, audience measurement, benchmarking and creator data | Paid | Live vendor page | Enterprise cross-platform video intelligence | L1,L2 | [support](https://tubularlabs.com/) | 2026-09-11 |
| [TunePocket Playlist Calculator](https://www.tunepocket.com/youtube-playlist-length-calculator/) | T10 - Calculate playlist duration | Hosted website | Viewers, students and creators | Computes playlist duration and speed-adjusted watch time | Free | Live vendor page | Simple planning utility | L1 | [support](https://www.tunepocket.com/youtube-playlist-length-calculator/) | 2026-09-11 |
| [Tweaks for YouTube](https://chromewebstore.google.com/detail/tweaks-for-youtube/ogkoifddpkoabehfemkolflcjhklmkge) | T5 - Customize player and page behavior | Browser extension | Viewers | Playback controls, shortcuts, filters and interface tweaks | Mixed | Current store listing evidence | Broad but configurable enhancement set | L8 | [support](https://chromewebstore.google.com/detail/tweaks-for-youtube/ogkoifddpkoabehfemkolflcjhklmkge) | 2026-09-11 |
| [Unhook](https://unhook.app/) | T5 - Remove distracting YouTube elements | Browser extension | Focus-oriented viewers | Hides home feed, recommendations, Shorts, comments and other selected surfaces | Free/mixed | Current official product evidence | Granular distraction removal | L1,L8 | [support](https://unhook.app/) | 2026-09-11 |
| [UnTrap for YouTube](https://chromewebstore.google.com/detail/untrap-for-youtube/enboaomnljigfhfjfoalacienlhjlfil) | T5 - Customize and declutter YouTube | Browser extension | Viewers | Feed, Shorts, comments, layout and playback controls | Mixed | Current store listing evidence | Very broad decluttering surface | L8 | [support](https://chromewebstore.google.com/detail/untrap-for-youtube/enboaomnljigfhfjfoalacienlhjlfil) | 2026-09-11 |
| [Upfluence](https://www.upfluence.com/) | T11 - Discover influencers and manage creator commerce | Web SaaS | Brands and agencies | Creator search, outreach, affiliate, gifting and campaign analytics | Paid | Live vendor page | Commerce and affiliate orientation | L1,L2 | [support](https://www.upfluence.com/) | 2026-09-11 |
| [Vaizle YouTube Analytics](https://vaizle.com/youtube-analytics-tool/) | T2 - Create simple YouTube reports | Hosted website/SaaS | Creators and marketers | Channel analytics, comparisons and reporting | Mixed | Live vendor page | Lower-complexity reporting | L1,L2 | [support](https://vaizle.com/youtube-analytics-tool/) | 2026-09-11 |
| [VEED](https://www.veed.io/tools/video-editor/youtube-video-editor) | T3 - Edit, caption and repurpose YouTube video | Web SaaS | Creators and teams | Browser editing, subtitles, translation, resizing, cleanup and export | Mixed | Live vendor page | All-browser production and collaboration | L1,L5,L10 | [support](https://www.veed.io/tools/video-editor/youtube-video-editor) | 2026-09-11 |
| [vidIQ](https://vidiq.com/) | T2 - Research, optimize and monitor a YouTube channel | Browser extension, web SaaS and mobile apps | Creators and teams | Keywords, competitors, ideas, audits, analytics and AI assistance | Mixed | Live vendor/store evidence | Broad growth suite with strong research positioning | L1,L2,L8 | [support](https://vidiq.com/extension) | 2026-09-11 |
| [Vinegar - Tube Cleaner](https://apps.apple.com/us/app/vinegar-tube-cleaner/id1591303229) | T5 - Replace YouTube's web player in Safari | Safari extension/app | Apple-device viewers | Minimal HTML player, PiP and background-playback-oriented behavior | Paid | Current App Store listing evidence | Player replacement rather than UI-only tweaks | L8,L9 | [support](https://apps.apple.com/us/app/vinegar-tube-cleaner/id1591303229) | 2026-09-11 |
| [Vizard](https://vizard.ai/) | T3 - Repurpose long videos into clips | Web SaaS and API | Creators and media teams | AI clipping, captions, reframing, team workflows and API automation | Mixed | Live vendor page | Team/API-oriented repurposing | L1,L5 | [support](https://vizard.ai/) | 2026-09-11 |
| [vMix](https://www.vmix.com/) | T4 - Produce advanced live broadcasts | Windows desktop app | Professional streamers and broadcasters | Multi-input switching, replay, titles, guests, recording and YouTube output | Paid/trial | Live vendor page | High-control Windows broadcast production | L1,L4,L10 | [support](https://www.vmix.com/) | 2026-09-11 |
| [Vobile RightsID](https://us.vobile.com/rights_id) | T11 - Find and manage copyrighted media at scale | Enterprise service | Film, TV, sports and large rights holders | Fingerprinting, monitoring, claims and monetization workflows | Paid | Live vendor page | Enterprise audiovisual rights focus | L1,L9 | [support](https://us.vobile.com/rights_id) | 2026-09-11 |
| [VODForge](https://getvodforge.com/) | T6 - Download YouTube videos and playlists locally | Desktop app | Desktop users | Local GUI for video/playlist downloads | Free | New live project surfaced 2026-09-06; Windows/macOS evidence | Recent focused local downloader | L1,L6 | [support](https://getvodforge.com/) | 2026-09-11 |
| [Watch2Gether](https://w2g.tv/) | T5 - Watch YouTube in synchronized rooms | Hosted web app | Friends, classrooms and communities | Shared playback, rooms, chat and queues without account requirement for basic use | Mixed | Live product page | Low-friction room creation | L1,L7 | [support](https://w2g.tv/) | 2026-09-11 |
| [Wavve](https://wavve.co/) | T3 - Turn audio into social video | Web SaaS | Podcasters and audio creators | Audiograms, captions, branding and video exports for YouTube/social use | Paid/mixed | Live vendor page | Audio-first visualizer workflow | L1,L5,L10 | [support](https://wavve.co/) | 2026-09-11 |
| [Weedout](https://masteranza.github.io/weedout/) | T5 - Hide YouTube videos labeled as AI-generated | Safari extension | Safari viewers | Filters AI-labeled content from YouTube surfaces | Unclear/free | New project surfaced 2026-09-01; direct page present | Targets YouTube's AI-content labels | L3,L8 | [support](https://masteranza.github.io/weedout/) | 2026-09-11 |
| [Wirecast](https://www.telestream.net/wirecast/) | T4 - Produce professional livestreams | Desktop app | Broadcasters, educators and houses of worship | Switching, guests, graphics, recording and output to YouTube | Paid/trial | Live vendor page | Long-standing professional production package | L1,L4,L10 | [support](https://www.telestream.net/wirecast/) | 2026-09-11 |
| [Wisecut](https://www.wisecut.video/) | T3 - Automatically edit talking-head videos | Web SaaS | Creators and educators | Silence removal, jump cuts, captions, music and short-form outputs | Paid/mixed | Live vendor page | Speech-oriented automatic editing | L1,L5 | [support](https://www.wisecut.video/) | 2026-09-11 |
| [XSplit Broadcaster](https://www.xsplit.com/broadcaster) | T4 - Produce and stream live video | Windows desktop app | Streamers and presenters | Scenes, sources, recording, virtual camera and YouTube streaming | Paid/mixed | Live vendor page | Accessible commercial Windows broadcaster | L1,L4,L10 | [support](https://www.xsplit.com/broadcaster) | 2026-09-11 |
| [Yattee](https://github.com/yattee/yattee) | T5 - Use Invidious/Piped on Apple devices | iOS, iPadOS, macOS and tvOS app | Privacy-oriented viewers | Playback, subscriptions and instance-based front-end access | OSS | Canonical repository evidence | Native Apple-platform alternative client | L3,L7,L8 | [support](https://github.com/yattee/yattee) | 2026-09-11 |
| [YouTube](https://www.youtube.com/) | T1 - Watch, upload and interact with video | First-party web/mobile/TV service | Viewers, creators and advertisers | Playback, upload, subscriptions, comments, Shorts, live and account features | Free/mixed | Current first-party service | Platform itself is the baseline tool surface | L9 | [support](https://support.google.com/youtube/) | 2026-09-11 |
| [YouTube AI Ask / conversational tool](https://support.google.com/youtube/answer/14110396) | T1 - Ask questions about eligible videos | First-party in-product AI feature | Eligible viewers | Conversational questions and generated summaries on eligible content | Free/restricted | Current experiment; limited videos/users/regions | Native context-aware video Q&A | L5,L9 | [support](https://support.google.com/youtube/answer/14110396) | 2026-09-11 |
| [YouTube Analytics API](https://developers.google.com/youtube/analytics) | T1 - Query authorized channel/content analytics | First-party REST API | Developers and channel owners | Custom analytics queries and dimensions/metrics for authorized resources | Free/quota-limited | Current official API | Programmatic private analytics | L4 | [support](https://developers.google.com/youtube/analytics/v2/api_overview) | 2026-09-11 |
| [YouTube Analytics in Studio](https://support.google.com/youtube/answer/9002587) | T1 - Analyze an owned channel | First-party Studio web/mobile UI | Creators and channel teams | Reach, engagement, audience, revenue and Advanced mode reports | Free/restricted | Current; requires channel access | Authoritative private owned-channel data | L9 | [support](https://support.google.com/youtube/answer/9002587) | 2026-09-11 |
| [YouTube API Samples](https://github.com/youtube/api-samples) | T1 - Learn and bootstrap YouTube API integrations | Official open-source sample repository | Developers | Samples for Data, Analytics, Reporting and related APIs | OSS | Official repository present | Canonical examples across languages/APIs | L4 | [support](https://github.com/youtube/api-samples) | 2026-09-11 |
| [YouTube Audio Library](https://www.youtube.com/audiolibrary) | T1 - Find music and sound effects for videos | First-party Studio web library | Creators | Search, preview and download tracks/SFX under stated attribution terms | Free/restricted | Current Studio workflow | Native creator-safe asset source | L9 | [support](https://support.google.com/youtube/answer/3376882) | 2026-09-11 |
| [YouTube Auto Dubbing](https://support.google.com/youtube/answer/15569972) | T1 - Generate alternate-language audio | First-party creator feature | Eligible creators and multilingual viewers | Automatic dubbed tracks with review/publication controls where available | Free/restricted | Current; availability and editability limits | Native multilingual distribution | L5,L9 | [support](https://support.google.com/youtube/answer/15569972) | 2026-09-11 |
| [YouTube Content ID API](https://developers.google.com/youtube/partner) | T1 - Automate rights-management operations | Restricted first-party API | Approved Content ID partners | Assets, claims, policies, references and ownership operations | Restricted | Current; partner-only | Programmatic Content ID administration | L4,L9 | [support](https://developers.google.com/youtube/partner) | 2026-09-11 |
| [YouTube Copyright Match Tool](https://support.google.com/youtube/answer/15269184?hl=en) | T1 - Find full or near-full reuploads | First-party Studio feature | Eligible rights owners | Surfaces matching uploads and supports contact/removal/archive actions | Free/restricted | Current; access criteria and match-scope limits | Creator-accessible match workflow below full Content ID | L9 | [support](https://support.google.com/youtube/answer/15269184?hl=en) | 2026-09-11 |
| [YouTube Create](https://apps.apple.com/us/app/youtube-create/id6476327393) | T1 - Edit videos on mobile | First-party Android/iOS app | Creators | Editing, audio, voiceover, effects, auto-captions and cleanup tools | Free | Current official stores; OS/region limits | Standalone YouTube-branded editor | L5,L8,L9 | [support](https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.producer) | 2026-09-11 |
| [YouTube Data API v3](https://developers.google.com/youtube/v3) | T1 - Read and manage YouTube resources programmatically | First-party REST API | Developers and organizations | Videos, channels, playlists, search, comments, captions and authorized writes | Free/quota-limited | Current official API | Supported public integration baseline | L4 | [support](https://developers.google.com/youtube/v3/docs) | 2026-09-11 |
| [YouTube Data Tools](https://ytdt.digitalmethods.net/) | T9 - Collect YouTube data without programming | Hosted research tool | Researchers and students | API-backed collection and export of videos, channels, comments and networks | Free | Live research service; server-side temporary storage documented | Purpose-built digital-methods interface | L4,L5 | [support](https://ytdt.digitalmethods.net/faq.php) | 2026-09-11 |
| [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference) | T1 - Embed and control YouTube playback | First-party JavaScript API | Web developers | Programmatic embedded-player loading, events and controls | Free/policy-limited | Current official API | Supported web playback integration | L4 | [support](https://developers.google.com/youtube/iframe_api_reference) | 2026-09-11 |
| [YouTube Kids](https://www.youtubekids.com/) | T1 - Provide a child-oriented viewing experience | First-party mobile/TV/web app | Children and families | Curated/filtered viewing, parental controls and profiles | Free/mixed | Current official product | Separate child-focused interface and controls | L8,L9 | [support](https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.kids) | 2026-09-11 |
| [YouTube Live Streaming API](https://developers.google.com/youtube/v3/live/getting-started) | T1 - Schedule and control YouTube broadcasts | First-party API surface within Data API v3 | Developers and broadcasters | Broadcast, stream, cuepoint and binding operations | Free/quota-limited | Current; part of Data API v3 | Programmatic live-control surface | L4,L9 | [support](https://developers.google.com/youtube/v3/live/getting-started) | 2026-09-11 |
| [YouTube Music](https://music.youtube.com/) | T1 - Listen to music and podcasts | First-party web/mobile/TV service | Listeners and music creators | Music search, library, playlists, recommendations and Premium offline/background features | Free/mixed | Current official product | YouTube-native music catalog and account graph | L9 | [support](https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.music) | 2026-09-11 |
| [YouTube Playlist Randomizer](https://github.com/remixer-dec/YouTubePlaylistRandomizer) | T10 - Randomize playlist playback | Hosted/open-source web app | Viewers | Loads and shuffles YouTube playlists externally | OSS | Repository present; hosted status not fully tested | Transparent open-source shuffler | L3,L7 | [support](https://github.com/remixer-dec/YouTubePlaylistRandomizer) | 2026-09-11 |
| [YouTube Reporting API](https://developers.google.com/youtube/reporting) | T1 - Download bulk analytics reports | First-party REST API | Developers, channel owners and content partners | Scheduled bulk report jobs and downloadable datasets | Free/quota-limited | Current official API | Bulk complement to query-based Analytics API | L4 | [support](https://developers.google.com/youtube/reporting/v1/reports/) | 2026-09-11 |
| [YouTube Shopping](https://support.google.com/youtube/answer/12257682) | T1 - Tag and promote products in videos | First-party Studio workflow | Eligible creators and merchants | Store connection, product tagging and affiliate shopping features | Restricted/mixed | Current; country/channel eligibility applies | Commerce embedded in video surfaces | L9 | [support](https://support.google.com/youtube/answer/12257682) | 2026-09-11 |
| [YouTube Studio](https://studio.youtube.com/) | T1 - Manage a YouTube channel | First-party web/mobile app | Creators and channel teams | Uploads, metadata, comments, analytics, permissions, monetization and live controls | Free/restricted | Current first-party tool | Central authoritative creator operations surface | L9 | [support](https://support.google.com/youtube/answer/2976814) | 2026-09-11 |
| [YouTube Test & Compare](https://support.google.com/youtube/answer/16391400?hl=en-GB) | T1 - A/B test titles and thumbnails | First-party Studio feature | Eligible creators | Tests up to three title and/or thumbnail variants and selects using watch-time share | Free/restricted | Current; desktop, advanced-feature and content-format limits | Native outcome metric tied to actual YouTube viewing | L2,L9 | [support](https://support.google.com/youtube/answer/16391400?hl=en-GB) | 2026-09-11 |
| [YouTube TV](https://tv.youtube.com/) | T1 - Watch subscription live television | First-party web/mobile/TV service | Households in supported markets | Live TV, DVR and on-demand viewing | Paid | Current; country availability limits | Separate paid television bundle | L9 | [support](https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.unplugged) | 2026-09-11 |
| [youtube-ai](https://github.com/vibheksoni/youtube-ai) | T8 - Use public YouTube data in AI workflows | Open-source project | Developers and AI builders | Search, metadata, comments/transcripts or agent-oriented functions without standard API keys | OSS | Repository present; claims not independently tested | AI-oriented public-data interface | L3,L5 | [support](https://github.com/vibheksoni/youtube-ai) | 2026-09-11 |
| [youtube-transcript-api](https://github.com/jdepoix/youtube-transcript-api) | T8 - Retrieve YouTube captions from Python | Python library and CLI | Developers and researchers | Manual/auto captions, language selection, translation and formatters | OSS | Maintained repository evidence; IP blocking documented | Focused caption retrieval without browser automation | L3,L5 | [support](https://github.com/jdepoix/youtube-transcript-api) | 2026-09-11 |
| [YouTube.js / youtubei.js](https://github.com/LuanRT/YouTube.js) | T8 - Access YouTube InnerTube from JavaScript/TypeScript | JS/TS library | Developers | Search, metadata, playback and authenticated operations over internal interfaces | OSS | Maintained repository evidence | Broad unofficial typed client | L3,L4 | [support](https://github.com/LuanRT/YouTube.js) | 2026-09-11 |
| [YouTubeDigest](https://www.youtubedigest.app/) | T7 - Summarize YouTube videos in-browser | Browser extension | Viewers and researchers | Generated summaries and export formats for watched videos | Mixed | Live product page; extension status not deeply checked | In-page summary workflow | L1,L5,L8 | [support](https://www.youtubedigest.app/) | 2026-09-11 |
| [YoutubeExplode](https://github.com/Tyrrrz/YoutubeExplode) | T8 - Access metadata, streams and captions from .NET | .NET library | Developers | Video/channel/playlist metadata, streams, downloads and captions | OSS | Repository present/maintained in search evidence | Idiomatic .NET API | L3,L6 | [support](https://github.com/Tyrrrz/YoutubeExplode) | 2026-09-11 |
| [yt-dlp](https://github.com/yt-dlp/yt-dlp) | T6 - Extract and download media and metadata | CLI and Python package | Developers, archivists and power users | Formats, playlists, subtitles, metadata, post-processing and broad site support | OSS | Actively maintained canonical project | De facto extraction backend for many other tools | L3,L6 | [support](https://github.com/yt-dlp/yt-dlp) | 2026-09-11 |
| [yt-search-python](https://github.com/BillaSpace/yt-search-python) | T8 - Search YouTube without a Google API key | Python library | Developers | Search videos, channels and playlists through unofficial interfaces | OSS | Repository present; maintenance/function not fully verified | Simple keyless search wrapper | L3 | [support](https://github.com/BillaSpace/yt-search-python) | 2026-09-11 |
| [YT.Tools](https://yt.tools/) | T10 - Use a suite of small YouTube utilities | Hosted tool suite | Creators, viewers and researchers | Metadata, transcript, thumbnail, playlist and repurposing utilities as documented by vendor | Free/mixed | Live site evidence | Wide one-stop utility catalog | L1,L5 | [support](https://yt.tools/tools?goal=repurpose-content) | 2026-09-11 |
| [ytarchive](https://github.com/Kethsar/ytarchive) | T6 - Record YouTube livestreams | CLI | Archivists and technical users | Captures live video/audio streams and can wait for scheduled broadcasts | OSS | Repository present; live compatibility not independently tested | YouTube-live-specific recorder | L3,L6 | [support](https://github.com/Kethsar/ytarchive) | 2026-09-11 |
| [ytb-cli](https://github.com/tamnd/ytb-cli) | T8 - Browse/search YouTube from a terminal | CLI | Technical users and developers | Search, metadata, transcripts/comments or playback workflows depending on version | OSS | Repository present; capabilities from README not tested | Terminal-first public-data interface | L3 | [support](https://github.com/tamnd/ytb-cli) | 2026-09-11 |
| [ytdl-sub](https://github.com/jmbannon/ytdl-sub) | T6 - Automate subscription downloads into media libraries | CLI/configuration tool | Home media and automation users | Declarative yt-dlp downloads with Plex/Jellyfin/Kodi metadata layouts | OSS | Very active project in search evidence | Reproducible configuration-driven archives | L3,L6 | [support](https://github.com/jmbannon/ytdl-sub) | 2026-09-11 |
| [YTDLnis](https://github.com/deniscerri/ytdlnis) | T6 - Use yt-dlp on Android with advanced controls | Android app | Power users | Formats, command templates, queues, playlists and share-sheet downloads | OSS | Maintained repository evidence | Advanced Android yt-dlp frontend | L3,L6,L8 | [support](https://github.com/deniscerri/ytdlnis) | 2026-09-11 |
| [YTFlare](https://ytflare.com/) | T10 - Use small YouTube metadata and creator utilities | Hosted tool suite | Creators and viewers | Vendor-reported thumbnail, metadata, playlist and related utilities | Free/mixed | Live site; weak independent verification | Many one-shot tools in one domain | L1,L5 | [support](https://ytflare.com/) | 2026-09-11 |
| [ytfzf](https://github.com/pystardust/ytfzf) | T6 - Search and play YouTube from a terminal | Shell CLI | Unix power users | Terminal search, selection, playback and optional download through external tools | OSS | Repository present | Composable terminal UI | L3,L6 | [support](https://github.com/pystardust/ytfzf) | 2026-09-11 |
| [ytmusicapi](https://github.com/sigma67/ytmusicapi) | T8 - Automate YouTube Music | Python library | Developers | Search, libraries, playlists, uploads and account operations through unofficial APIs | OSS | Repository present/maintained in search evidence | Dedicated YouTube Music API wrapper | L3,L4 | [support](https://github.com/sigma67/ytmusicapi) | 2026-09-11 |
| [ytubeup / tubeup](https://github.com/bibanon/tubeup) | T6 - Archive videos and metadata to Internet Archive | CLI | Archivists and researchers | Downloads with youtube-dl/yt-dlp-family tooling and uploads items/metadata to Internet Archive | OSS | Repository present; current backend compatibility not fully tested | Bridges extraction and public preservation | L3,L6 | [support](https://github.com/bibanon/tubeup) | 2026-09-11 |
| [Yutu YouTube MCP](https://github.com/eat-pray-ai/yutu) | T8 - Operate YouTube channels through MCP | Open-source MCP server/CLI | Developers and AI-agent users | Channel, upload, playlist, comment and analytics workflows via Google OAuth | OSS | Repository present | Agent-oriented full channel operations | L4 | [support](https://github.com/eat-pray-ai/yutu) | 2026-09-11 |

## 4. Category-by-category analysis

### T1 - Native platform, creator and developer surfaces
YouTube Studio is the operational center for owned channels, with mobile and web delivery. Separate native surfaces exist for creation, music, children, live TV, export, analytics, live control, rights, shopping and developer access. Data API v3 is the supported public integration baseline, while Analytics and Reporting split query-style and bulk reporting. Content ID and its API are not open self-service products: official documentation requires demonstrated need and exclusive rights, and the API is for content partners. The gap is not feature count but access: advanced rights, commerce, dubbing, testing and AI features vary by country, account, content and eligibility.

### T2 - Channel discovery, SEO, analytics and packaging
TubeBuddy and vidIQ are the broad creator suites. Morningfame emphasizes channel-relative keyword opportunity; 1of10, Viewstats and OutlierKit emphasize outliers and packaging; ChannelCrawler is a pre-indexed discovery database; Tubular Labs, Quintly and Socialinsider move toward enterprise benchmarking. Thumbnail/title tools overlap substantially, but preview scores, public-data estimates and native Test & Compare answer different questions. The biggest gaps are transparent scoring, reproducible methodology, and dependable small-channel recommendations rather than more AI-generated titles.

### T3 - Creation, editing, localization and repurposing
This is the broadest cluster. Professional editors, browser editors, template tools, AI clippers, podcast converters and dubbing services converge on the same YouTube output. Distinctive approaches include transcript-first editing (Descript), podcast/RSS automation (Headliner), rule-based redistribution (Repurpose.io), scaled clipping APIs (OpusClip, Vizard, Reap), and specialist localization (Rask, ElevenLabs, HeyGen, Papercup). Under-served areas are interoperable project/export formats, clear source provenance, repeatable quality benchmarks, and rights-aware reuse.

### T4 - Live production, broadcast and chat
OBS provides the free extensible base; Aitum and StreamElements extend it. StreamYard and Restream trade local control for browser/cloud convenience. vMix and Wirecast target advanced broadcast control. Gyre, OneStream, Castr and playout.video treat prerecorded or continuous streaming as a scheduling problem. Nightbot, StreamElements, Botisimo and Social Stream Ninja cover moderation, commands or chat transport. Important gaps are cost-transparent 24/7 operation, resilient multi-destination state, and moderation/audit workflows that survive platform API differences.

### T5 - Playback, focus, accessibility and social viewing
The evidence splits into alternative clients, page customizers, community data layers and synchronized rooms. FreeTube, NewPipe, Invidious and Piped minimize dependence on the standard interface but rely on reverse-engineered service behavior or instances. SponsorBlock, DeArrow and Return YouTube Dislike are shared data services used by many clients. Unhook, BlockTube and similar extensions reshape attention rather than transport. The main unmet need is a sustainable, privacy-oriented, cross-device client whose compatibility does not depend on constant reverse engineering.

### T6 - Acquisition, archiving and self-hosting
`yt-dlp` is the key substrate. Stacher, Parabolic, Seal, YTDLnis and Media Downloader change the interface; TubeArchivist, TubeSync, Pinchflat and ytdl-sub add subscriptions, indexing and media-library organization; ytarchive and Streamlink focus on live capture/transport; tubeup connects preservation to Internet Archive. These tools are not interchangeable. The recurrent gaps are durable authentication, clear authorization boundaries, verification that an archive is complete, and rapid adaptation when YouTube changes delivery or anti-bot behavior.

### T7 - Transcripts, learning, summarization and knowledge capture
Transcript extraction has become an input layer for summary, question-answering, note-taking and language study. Tactiq and YouTubeDigest emphasize retrieval/summaries; Glasp, Readwise Reader and Recall connect transcripts to knowledge systems; Language Reactor, Migaku and Trancy build learning workflows; Supadata and Gladia expose developer APIs. Most products overlap at “paste URL, get text/summary.” Underserved needs are precise citations back to timestamps, quality disclosure for generated versus native captions, multilingual evaluation, and durable export formats.

### T8 - Developer libraries, automation and AI/MCP
Official APIs are stable but quota- and OAuth-constrained. YouTube.js, pytubefix, youtube-transcript-api, ytmusicapi, YoutubeExplode and RustyPipe expose broader or simpler unofficial operations. MCP servers package both official and unofficial paths for agents. The most important distinction is read-only public data versus authenticated owner writes and analytics. A maintained repository is not proof that every YouTube operation works today. The gap is a stable, narrowly permissioned automation layer with explicit provenance and failure semantics.

### T9 - Data collection, research, verification and scraping APIs
mattw.io, YouTube Data Tools, Facepager, Communalytic, NodeXL and Filmot serve researchers with different levels of coding and different units of analysis. InVID-WeVerify and Bellingcat-oriented workflows focus on evidentiary verification rather than channel optimization. Apify, Bright Data, Oxylabs, Outscraper, ScrapeCreators, HasData, SocialKit, SerpApi, SearchApi.io, DataForSEO and ScrapingBee productize extraction. The core trade-off is official durability and quota versus scraper breadth and volatility. Reproducible longitudinal datasets remain difficult because search, APIs, deletions and availability change over time.

### T10 - Publishing, comments, operations and small utilities
Agorapulse, Hootsuite and Sprout Social emphasize inbox and team operations; Metricool, SocialPilot, Buffer and Publer emphasize calendars and publishing, with materially different YouTube depth. Comment Picker and playlist utilities solve narrow jobs, while YT.Tools and YTFlare aggregate many one-shot utilities. The market still lacks a clearly documented, low-cost, end-to-end workflow for bulk corrections, moderation audit logs and multi-channel operations without enterprise complexity.

### T11 - Rights, music, sponsorships and influence intelligence
This cluster has three layers: YouTube-native Content ID/Creator Music/Partnerships, third-party rights administration and music licensing, and influencer discovery/campaign software. Identifyy, HAAWK, FUGA/AdRev and Vobile administer or support rights workflows; Pex and Audible Magic provide identification infrastructure; Lickd, Epidemic Sound and Artlist license music; HypeAuditor, Modash, CreatorIQ, Upfluence, GRIN and others manage creator discovery/campaigns. Eligibility, exclusivity, geographic rights, contract terms and opaque enterprise pricing make direct comparison difficult. Smaller creators remain poorly served when ownership is legitimate but catalog scale is low.

## 5. Unavailable, abandoned, conflicting or weakly verified tools

| Tool | Disposition | Evidence and reason | Verified |
| --- | --- | --- | --- |
| [AccuRanker YouTube Rank Tracker](https://www.accuranker.com/youtube-rank-tracker/) | Weak/conflicting | Search results and vendor references described a current product, but the direct product route returned HTTP 404 on 2026-09-11. Retained as a lead, not a current catalog entry. | 2026-09-11 |
| [Amnesty YouTube DataViewer](https://www.amnesty.org/en/latest/campaigns/2014/07/real-vs-fake-how-to-authenticate-youtube-videos-for-human-rights-work/) | Historical/availability unclear | Important early verification tool. The explanatory workflow remains useful, but current utility operation was not established. | 2026-09-11 |
| [AskTube.ai](https://asktube.ai/) | Temporarily unavailable or weak | Discovery sources described a video-Q&A product, but the direct site returned HTTP 503 at verification. | 2026-09-11 |
| [Creator Studio Classic](https://support.google.com/youtube/answer/57407) | Retired | Superseded by YouTube Studio. | 2026-09-11 |
| [CreatorML](https://www.ycombinator.com/launches/IEp-creatorml-ml-powered-predictive-analytics-for-youtube-creators) | Weak/conflicting | Historical launch evidence exists, but current availability is uncertain and direct retrieval had certificate failure. | 2026-09-11 |
| [DF Tube](https://chromewebstore.google.com/detail/df-tube-distraction-free/mjdepdfccjgcndkmemponafgioodelna) | Removed/weak | Historically important distraction-removal extension. Current store availability was not established. | 2026-09-11 |
| [FreeTubeAndroid](https://github.com/FreeTubeApp/FreeTube) | Weak/unofficial port | FreeTube documents that similarly named Android work is not its official project. A canonical maintained port was not established. | 2026-09-11 |
| [Magic Actions for YouTube](https://chromewebstore.google.com/detail/magic-actions-for-youtube/abjcfabbhafbcdfjoecdgepllmpfceif) | Historical/removed | Notable all-in-one enhancement extension, but current verified availability was not established. | 2026-09-11 |
| [Minitube](https://flavio.tordini.org/minitube) | Historical/current compatibility unclear | Long-running desktop YouTube viewer. Maintenance and current playback compatibility were not adequately established in this pass. | 2026-09-11 |
| [Netlytic YouTube collection](https://netlytic.org/) | Weak/current scope unclear | Historically used for YouTube comment/network research; current YouTube collection availability was not confirmed. | 2026-09-11 |
| [Original Pinchflat repository](https://github.com/kieraneglin/pinchflat) | Stalled/superseded | The original project appeared stalled; the CommunityMaintained fork is cataloged as the current continuation. | 2026-09-11 |
| [PokeTube](https://status.poketube.fun/) | Degraded/unavailable | Alternative front end with reported service degradation. Project and public-instance status should be rechecked before use. | 2026-09-11 |
| [PureTube](https://news.ycombinator.com/item?id=49525184) | Weak lead | A recent Hacker News item described an ad-free YouTube front end, but no canonical product evidence was recovered. | 2026-09-11 |
| [SavorYT](https://savoryt.com/) | Unavailable at verification | Discovery sources named a multi-utility site, but DNS lookup failed on 2026-09-11. | 2026-09-11 |
| [SMTube / SMPlayer YouTube browser](https://www.smtube.org/) | Historical/current compatibility unclear | Relevant desktop integration, but current YouTube extraction/playback evidence was not established. | 2026-09-11 |
| [Standalone YouTube Gaming app](https://blog.youtube/news-and-events/gaming-gets-new-home-on-youtube) | Retired | Gaming was moved into the main YouTube experience. | 2026-09-11 |
| [summarize.tech](https://www.summarize.tech/) | Temporarily unavailable or weak | The product is widely referenced and search-indexed, but direct retrieval returned HTTP 503 at verification. | 2026-09-11 |
| [Tango](https://www.reddit.com/r/opensource/comments/1wdoqzm/i_built_an_opensource_cli_for_turning_youtube/) | New/weakly verified | A 2026-09-11 Reddit post described an MIT-licensed transcript-to-Anki CLI, but the canonical repository URL was not recovered. | 2026-09-11 |
| [Unbox Social YouTube Analytics](https://www.unboxsocial.com/youtube-analytics) | Unavailable or weak | Search sources described the product, but its direct YouTube analytics route returned HTTP 500 at verification. | 2026-09-11 |
| [ViewTube](https://github.com/ViewTube/viewtube) | Maintenance reduced/unclear | Open-source front end with reported semi-paused development; do not infer instance health from repository existence. | 2026-09-11 |
| [CloudTube](https://sr.ht/~cadence/cloudtube/) | Dormant/unclear | Alternative front-end project with uncertain current maintenance and service compatibility. | 2026-09-11 |
| [YouTube Center](https://github.com/YePpHa/YouTubeCenter) | Abandoned | Historically influential userscript/extension customization project; repository is retained for landscape history. | 2026-09-11 |
| [YouTube Data API v2](https://developers.google.com/youtube/v3/docs) | Deprecated | Legacy API superseded by Data API v3. | 2026-09-11 |
| [YouTube Go](https://support.google.com/youtube/thread/162222567/youtube-go-is-going-away-in-august-of-this-year) | Discontinued | Google announced the app would go away in August 2022. | 2026-09-11 |
| [YouTube iOS Player Helper](https://github.com/youtube/youtube-ios-player-helper) | Archived | Official helper repository is archived/read-only; use current IFrame guidance unless a specific legacy requirement applies. | 2026-09-11 |
| [YouTube Android Player API](https://github.com/youtube/yt-android-player) | Deprecated/archived | Official native player repository is archived; current web embedding uses the IFrame Player API. | 2026-09-11 |
| [youtube-dl](https://github.com/ytdl-org/youtube-dl) | Maintained status weak/superseded | Historically foundational downloader. Most current tools found in this study use the more actively maintained yt-dlp fork. | 2026-09-11 |
| [YoutubeDL-Material](https://github.com/Tzahi12345/YoutubeDL-Material) | Stale | Self-hosted web UI associated with the older youtube-dl stack; current maintenance evidence was weak. | 2026-09-11 |
| [YTScribe.io](https://ytscribe.io/) | Temporarily unavailable or weak | The transcript site was search-indexed, but direct retrieval returned HTTP 502 at verification. The name also collides with unrelated products. | 2026-09-11 |

## 6. Research methodology and coverage

### Research contract and boundaries
The unit of inclusion was a distinct usable product, project, service, API, extension, app, library, plugin or command-line workflow where YouTube is central or a direct source documented a YouTube-specific workflow. Generic editors, social platforms and scraping infrastructure were included only when a direct YouTube workflow was evidenced. Content-only resources, channels, hardware and one-off code snippets were excluded. First-party Studio features were split only when they have a distinct workflow, eligibility boundary or API surface.

### Search angles and sources
- First-party YouTube/Google Help, Developers, product pages, app stores, GitHub organizations, deprecation notices and linked resources.
- GitHub and package/forge discovery for CLIs, libraries, front ends, archives, self-hosted apps and MCP servers. The assigned forge researcher failed to return its ledger, so this angle was rerun directly and is not counted as an independent-agent result.
- Chrome/Firefox/Safari extension stores, userscript directories, official extension sites and linked repositories.
- Apple/Google/F-Droid/Flathub and independent desktop/mobile distribution.
- Commercial product sites, documentation, product directories and technical comparisons for creator, production, analytics, data, rights and campaign tools.
- Academic/research collectors, verification documentation, preservation projects and investigative-tool directories.
- Recent discussions and repositories through `last30days`; this yielded fresh leads such as VODForge, Weedout, Tubeviz and Tango, but was noisy and Reddit was rate-limited. Social engagement was treated as attention, not truth.

### Deduplication rules
The same product across web, mobile and extension delivery was consolidated. Renames were merged, including quso.ai/vidyo.ai and Creator Partnerships/BrandConnect. Trivial mirrors and obvious store clones were excluded. Forks were retained only when interface, audience, maintenance line or functionality materially differed, such as NewPipe/Tubular/PipePipe and the CommunityMaintained Pinchflat continuation. Infrastructure and front ends were kept separate when they are independently usable.

### Status verification and stopping rule
The retained catalog contains 250 entries. A total of 338 unique primary/support URLs in the working dataset were probed by HTTP, then obvious HEAD-request false positives were rechecked with GET. HTTP success was only a reachability signal. Google Help pages, stores and anti-bot sites often reject automated probes, so source-retrieval results were reconciled with search, direct documentation and researcher evidence. Searches stopped when additional query variants and followed references mostly repeated existing products or produced clone/listicle noise.

### Known gaps
- No authenticated country-by-country app-store audit was performed. Exact version, permissions, in-app purchases and regional installability remain uneven.
- Commercial prices, plan limits and enterprise contract terms change quickly and were not normalized.
- Tools were not installed or run against a common test channel/video. “No public direct measurement found” applies to comparative reliability, output quality and productivity claims.
- Login-gated, invite-only, regional, white-label and private enterprise tools are undercounted. Userscripts and small mobile-store clones are intentionally undercounted because identity and maintenance were hard to verify.
- YouTube policy compatibility, copyright authorization and privacy handling were not independently audited. Tool-specific direct caveats are reported only where sources established them.
- The planned eight-stream program could not be fully fanned out because the environment admitted only four researcher panes. Three returned substantive ledgers; the forge stream returned only a completion notice and its required follow-up was blocked. Missing source ecosystems were researched directly, reducing independent-agent triangulation but not source-angle breadth.

### Current-field stream audit trail

🌐 last30days v3.21.1 · synced 2026-09-11

```text
✅ All agents reported back!
├─ 🟠 Reddit: 6 threads │ 6 upvotes │ 3 comments │ ⚠ partial after 6 items: HTTP 429: Too Many Requests (run doctor for fixes)
├─ 🔵 X: 22 posts │ 74 likes │ 6 reposts
├─ 🔴 YouTube: 2 videos │ 72,021 views │ 2/2 with transcripts
├─ 🎵 TikTok: 3 videos │ 21,091 views │ 1,232 likes
├─ 📸 Instagram: 1 reel │ 3,322 likes
├─ 🧵 Threads: 5 posts │ 89 likes
├─ 📌 Pinterest: 5 pins
├─ 🟡 HN: 20 storys │ 626 points │ 307 comments
├─ 👔 LinkedIn: 6 posts │ 3,176 likes │ 332 comments
├─ 🐙 GitHub: 10 items │ 2 reactions │ 1,759 comments
├─ ⛏️ Digg: 7 clusters │ 40 posts │ 19 authors
├─ 🗣️ Top voices: @tastyliveshow, @realFatCat1, @paprikarockets │ r/youtube, r/opensource, r/VideoEditing
├─ 🕒 Recent evidence is thin: only 40 of 82 dated items are from the last 7 days.
└─ 📎 Raw results saved to ~/Documents/Last30Days/youtube-tools-landscape-practitioner-status-problems-raw-v3.md
```

The durable local copy used in this study is `/home/balauru/.pi/agent/.research/last30days-youtube-tools-2026-09-11.md`.

## 7. Complete source appendix

Primary and supporting URLs for every retained catalog row follow. Repeated URLs are listed once per tool when they serve both roles. Historical/weak sources are in section 5.

### T1 - Native platform, creator and developer surfaces

- **Content ID and Studio Content Manager:** <https://support.google.com/youtube/answer/2797370> · <https://support.google.com/youtube/answer/6301087>
- **Creator Music:** <https://support.google.com/youtube/answer/11623091> · <https://support.google.com/youtube/answer/11609509>
- **Creator Partnerships / BrandConnect:** <https://support.google.com/youtube/answer/9385307>
- **Google Takeout for YouTube:** <https://takeout.google.com/> · <https://support.google.com/accounts/answer/3024190>
- **Inspiration tab:** <https://support.google.com/youtube/answer/14145614>
- **Live Control Room:** <https://support.google.com/youtube/answer/9228389>
- **YouTube:** <https://www.youtube.com/> · <https://support.google.com/youtube/>
- **YouTube AI Ask / conversational tool:** <https://support.google.com/youtube/answer/14110396>
- **YouTube Analytics API:** <https://developers.google.com/youtube/analytics> · <https://developers.google.com/youtube/analytics/v2/api_overview>
- **YouTube Analytics in Studio:** <https://support.google.com/youtube/answer/9002587>
- **YouTube API Samples:** <https://github.com/youtube/api-samples>
- **YouTube Audio Library:** <https://www.youtube.com/audiolibrary> · <https://support.google.com/youtube/answer/3376882>
- **YouTube Auto Dubbing:** <https://support.google.com/youtube/answer/15569972>
- **YouTube Content ID API:** <https://developers.google.com/youtube/partner>
- **YouTube Copyright Match Tool:** <https://support.google.com/youtube/answer/15269184?hl=en>
- **YouTube Create:** <https://apps.apple.com/us/app/youtube-create/id6476327393> · <https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.producer>
- **YouTube Data API v3:** <https://developers.google.com/youtube/v3> · <https://developers.google.com/youtube/v3/docs>
- **YouTube IFrame Player API:** <https://developers.google.com/youtube/iframe_api_reference>
- **YouTube Kids:** <https://www.youtubekids.com/> · <https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.kids>
- **YouTube Live Streaming API:** <https://developers.google.com/youtube/v3/live/getting-started>
- **YouTube Music:** <https://music.youtube.com/> · <https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.music>
- **YouTube Reporting API:** <https://developers.google.com/youtube/reporting> · <https://developers.google.com/youtube/reporting/v1/reports/>
- **YouTube Shopping:** <https://support.google.com/youtube/answer/12257682>
- **YouTube Studio:** <https://studio.youtube.com/> · <https://support.google.com/youtube/answer/2976814>
- **YouTube Test & Compare:** <https://support.google.com/youtube/answer/16391400?hl=en-GB>
- **YouTube TV:** <https://tv.youtube.com/> · <https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.unplugged>

### T2 - Channel discovery, SEO, analytics and packaging

- **1of10:** <https://1of10.com/> · <https://1of10.com/tools/youtube-thumbnail-preview>
- **Ahrefs YouTube Keyword Tool:** <https://ahrefs.com/youtube-keyword-tool>
- **ChannelCrawler:** <https://channelcrawler.com/> · <https://channelcrawler.com/api>
- **Creator Hooks:** <https://creatorhooks.com/youtube-title-analyzer>
- **Google Trends - YouTube Search:** <https://trends.google.com/trends/> · <https://support.google.com/trends/answer/4359550>
- **Keyword Tool for YouTube:** <https://keywordtool.io/youtube>
- **Maekersuite:** <https://maekersuite.com/>
- **Morningfame:** <https://morningfa.me/>
- **NoxInfluencer:** <https://www.noxinfluencer.com/>
- **OutlierKit:** <https://outlierkit.com/>
- **Playboard:** <https://playboard.co/>
- **ProRankTracker:** <https://proranktracker.com/> · <https://proranktracker.com/features>
- **Quintly / Facelift Data Studio:** <https://www.quintly.com/youtube-analytics>
- **Rank Ranger:** <https://www.rankranger.com/youtube-rank-tracker>
- **Social Blade:** <https://socialblade.com/> · <https://socialblade.com/developers/docs>
- **Socialinsider:** <https://www.socialinsider.io/youtube-analytics>
- **Subscribr:** <https://subscribr.ai/>
- **Taja AI:** <https://www.taja.ai/>
- **TestMyThumb:** <https://www.testmythumb.com/>
- **TestMyThumbnails:** <https://www.testmythumbnails.com/> · <https://www.testmythumbnails.com/thumbnail-ideas>
- **Thumblytics:** <https://thumblytics.com/>
- **TubeBuddy:** <https://www.tubebuddy.com/> · <https://support.tubebuddy.com/hc/en-us/articles/9318692935195-How-can-TubeBuddy-help-me>
- **Tubics:** <https://www.tubics.com/>
- **Tubular Labs:** <https://tubularlabs.com/>
- **Vaizle YouTube Analytics:** <https://vaizle.com/youtube-analytics-tool/>
- **vidIQ:** <https://vidiq.com/> · <https://vidiq.com/extension>

### T3 - Creation, editing, localization and repurposing

- **2short.ai:** <https://www.2short.ai/>
- **3Play Media:** <https://www.3playmedia.com/> · <https://www.3playmedia.com/solutions/video-platforms/youtube/>
- **Adobe Express:** <https://www.adobe.com/express/create/thumbnail/youtube>
- **Adobe Premiere Pro:** <https://www.adobe.com/products/premiere.html> · <https://helpx.adobe.com/premiere-pro/using/exporting-web-mobile-devices.html>
- **Amara:** <https://amara.org/>
- **Camtasia:** <https://www.techsmith.com/camtasia.html> · <https://www.techsmith.com/learn/tutorials/camtasia/share-youtube/>
- **Canva:** <https://www.canva.com/create/youtube-thumbnails/>
- **CapCut:** <https://www.capcut.com/create/youtube-video-clip-editor>
- **Crossclip:** <https://crossclip.com/>
- **DaVinci Resolve:** <https://www.blackmagicdesign.com/products/davinciresolve>
- **Descript:** <https://www.descript.com/> · <https://www.descript.com/tools/add-subtitles-video>
- **Eklipse:** <https://eklipse.gg/>
- **ElevenLabs Dubbing Studio:** <https://elevenlabs.io/dubbing> · <https://elevenlabs.io/docs/overview/capabilities/dubbing>
- **Final Cut Pro:** <https://www.apple.com/final-cut-pro/> · <https://support.apple.com/guide/final-cut-pro/share-to-web-destinations-ver0192a47b8/mac>
- **Fotor YouTube Thumbnail Maker:** <https://www.fotor.com/design/youtube-thumbnail.html>
- **Happy Scribe:** <https://www.happyscribe.com/> · <https://www.happyscribe.com/subtitle-generator/youtube-subtitles>
- **Headliner:** <https://www.headliner.app/features/youtube/>
- **HeyGen Video Translate:** <https://www.heygen.com/video-translate>
- **Kapwing:** <https://www.kapwing.com/> · <https://www.kapwing.com/tools/translate>
- **Klap:** <https://klap.app/>
- **Munch:** <https://www.getmunch.com/>
- **OpusClip:** <https://www.opus.pro/> · <https://www.opus.pro/tools/social-media-video-maker>
- **Papercup:** <https://www.papercup.com/>
- **Pictory:** <https://pictory.ai/>
- **Pixlr YouTube Thumbnail Maker:** <https://pixlr.com/design/youtube-thumbnail-maker/>
- **Placeit:** <https://placeit.net/>
- **Powder:** <https://powder.gg/>
- **quso.ai (formerly vidyo.ai):** <https://quso.ai/>
- **Rask AI:** <https://www.rask.ai/>
- **Reap:** <https://reap.video/> · <https://reap.video/api>
- **Repurpose.io:** <https://repurpose.io/> · <https://support.repurpose.io/en/article/quick-start-guide-1aqbuu5/>
- **Rev:** <https://www.rev.com/> · <https://www.rev.com/caption>
- **Riverside:** <https://riverside.fm/>
- **ScreenPal:** <https://screenpal.com/> · <https://support.screenpal.com/portal/en/kb/articles/uploading-to-youtube>
- **Snappa:** <https://snappa.com/create/youtube-thumbnails>
- **Spikes Studio:** <https://spikes.studio/>
- **StreamLadder:** <https://streamladder.com/>
- **Tubeviz:** <https://github.com/interrupt21h/tubeviz>
- **VEED:** <https://www.veed.io/tools/video-editor/youtube-video-editor>
- **Vizard:** <https://vizard.ai/>
- **Wavve:** <https://wavve.co/>
- **Wisecut:** <https://www.wisecut.video/>

### T4 - Live production, broadcast and chat

- **Aitum Multistream:** <https://aitum.tv/products/multistream>
- **Botisimo:** <https://botisimo.com/>
- **Castr:** <https://castr.com/live-stream-pre-recorded-video/>
- **Ecamm Live:** <https://www.ecamm.com/mac/ecammlive/>
- **Gyre:** <https://gyre.pro/>
- **Meld Studio:** <https://meldstudio.co/>
- **Nightbot:** <https://nightbot.tv/> · <https://docs.nightbot.tv/setup>
- **OBS Studio:** <https://obsproject.com/>
- **OneStream Live:** <https://onestream.live/>
- **playout.video:** <https://playout.video/>
- **Restream:** <https://restream.io/> · <https://restream.io/integrations/youtube>
- **Social Stream Ninja:** <https://socialstream.ninja/> · <https://github.com/steveseguin/social_stream>
- **StreamElements:** <https://streamelements.com/>
- **Streamlabs:** <https://streamlabs.com/>
- **StreamYard:** <https://streamyard.com/>
- **vMix:** <https://www.vmix.com/>
- **Wirecast:** <https://www.telestream.net/wirecast/>
- **XSplit Broadcaster:** <https://www.xsplit.com/broadcaster>

### T5 - Playback, focus, accessibility and social viewing

- **BlockTube:** <https://chromewebstore.google.com/detail/blocktube/bbeaicapbccfllodepmimpkgecanonai> · <https://github.com/amitbl/blocktube>
- **Clipious:** <https://github.com/lamarios/clipious>
- **DeArrow:** <https://dearrow.ajay.app/> · <https://github.com/ajayyy/DeArrow>
- **Enhancer for YouTube:** <https://www.mrfdev.com/enhancer-for-youtube>
- **Focus for YouTube:** <https://apps.apple.com/us/app/focus-for-youtube/id1514703160?mt=12>
- **FocusTube:** <https://apps.apple.com/us/app/focustube-for-safari/id6799667312>
- **FreeTube:** <https://freetubeapp.io/> · <https://github.com/FreeTubeApp/FreeTube>
- **FreshView:** <https://chromewebstore.google.com/detail/freshview-for-youtube/eckknmnfoohbeklmjlidmfdlakndcfkm>
- **Grayjay:** <https://grayjay.app/> · <https://github.com/futo-org/grayjay-android/issues/3293>
- **IINA:** <https://github.com/iina/iina> · <https://github.com/iina/iina/issues/4143>
- **Improve YouTube!:** <https://github.com/code-charity/youtube> · <https://chromewebstore.google.com/detail/improve-youtube-%F0%9F%8E%A7-for-yo/bnomihfieiccainjcjblhegjgglakjdd>
- **InnerTune:** <https://github.com/z-huang/InnerTune>
- **Invidious:** <https://invidious.io/> · <https://github.com/iv-org/invidious/releases>
- **Kosmi:** <https://kosmi.io/watch-youtube-together/>
- **LibreTube:** <https://github.com/libre-tube/LibreTube> · <https://f-droid.org/packages/com.github.libretube/>
- **NewPipe:** <https://newpipe.net/> · <https://f-droid.org/packages/org.schabi.newpipe/>
- **Piped:** <https://piped.video/> · <https://github.com/TeamPiped/Piped>
- **PipePipe:** <https://github.com/InfinityLoop1308/PipePipe> · <https://f-droid.org/packages/InfinityLoop1309.NewPipeEnhanced/>
- **PiPifier:** <https://github.com/arnoappenzeller/PiPifier>
- **PocketTube:** <https://pockettube.io/>
- **Return YouTube Dislike:** <https://returnyoutubedislike.com/> · <https://github.com/Anarios/return-youtube-dislike>
- **RiMusic:** <https://github.com/fast4x/RiMusic>
- **SkyTube:** <https://github.com/SkyTubeTeam/SkyTube>
- **SponsorBlock:** <https://sponsor.ajay.app/> · <https://github.com/ajayyy/SponsorBlock>
- **SyncTube:** <https://github.com/RblSb/SyncTube>
- **Teleparty:** <https://www.teleparty.com/youtube>
- **Tubular (NewPipe fork):** <https://github.com/polymorphicshade/Tubular>
- **Tweaks for YouTube:** <https://chromewebstore.google.com/detail/tweaks-for-youtube/ogkoifddpkoabehfemkolflcjhklmkge>
- **Unhook:** <https://unhook.app/>
- **UnTrap for YouTube:** <https://chromewebstore.google.com/detail/untrap-for-youtube/enboaomnljigfhfjfoalacienlhjlfil>
- **Vinegar - Tube Cleaner:** <https://apps.apple.com/us/app/vinegar-tube-cleaner/id1591303229>
- **Watch2Gether:** <https://w2g.tv/>
- **Weedout:** <https://masteranza.github.io/weedout/>
- **Yattee:** <https://github.com/yattee/yattee>

### T6 - Acquisition, archiving and self-hosting

- **4K Video Downloader Plus:** <https://www.4kdownload.com/products/videodownloader-42>
- **ClipGrab:** <https://clipgrab.org/>
- **Cobalt:** <https://cobalt.tools/> · <https://github.com/imputnet/cobalt>
- **JDownloader 2:** <https://jdownloader.org/jdownloader2>
- **Media Downloader:** <https://github.com/mhogomchungu/media-downloader> · <https://flathub.org/apps/net.brinkervii.mediadownloader>
- **MeTube:** <https://github.com/alexta69/metube>
- **Parabolic:** <https://github.com/NickvisionApps/Parabolic> · <https://flathub.org/apps/org.nickvision.tubeconverter>
- **Pinchflat Community:** <https://github.com/CommunityMaintained/pinchflat>
- **Seal:** <https://github.com/JunkFood02/Seal>
- **Stacher:** <https://stacher.io/>
- **Streamlink:** <https://streamlink.github.io/> · <https://streamlink.github.io/plugins.html>
- **Tartube:** <https://github.com/axcore/tartube>
- **TubeArchivist:** <https://www.tubearchivist.com/> · <https://github.com/tubearchivist/tubearchivist>
- **TubeSync:** <https://github.com/meeb/tubesync>
- **VODForge:** <https://getvodforge.com/>
- **yt-dlp:** <https://github.com/yt-dlp/yt-dlp>
- **ytarchive:** <https://github.com/Kethsar/ytarchive>
- **ytdl-sub:** <https://github.com/jmbannon/ytdl-sub>
- **YTDLnis:** <https://github.com/deniscerri/ytdlnis>
- **ytfzf:** <https://github.com/pystardust/ytfzf>
- **ytubeup / tubeup:** <https://github.com/bibanon/tubeup>

### T7 - Transcripts, learning, summarization and knowledge capture

- **ChatTube:** <https://chattube.io/> · <https://develop.chattube.io/>
- **Eightify:** <https://eightify.app/> · <https://eightify.app/youtube-transcript-generator>
- **Gladia:** <https://www.gladia.io/> · <https://docs.gladia.io/chapters/limits-and-specifications/supported-formats>
- **Glasp:** <https://glasp.co/youtube-transcript>
- **HARPA AI:** <https://harpa.ai/>
- **Language Reactor:** <https://www.languagereactor.com/> · <https://dev.languagereactor.com/help/basic>
- **Migaku:** <https://migaku.com/>
- **Monica:** <https://monica.im/>
- **NoteGPT:** <https://notegpt.io/youtube-transcript-downloader>
- **Readwise Reader:** <https://readwise.io/read>
- **Recall (getrecall.ai):** <https://www.getrecall.ai/>
- **Supadata:** <https://supadata.ai/> · <https://docs.supadata.ai/api-reference/endpoint/transcript/transcript>
- **Tactiq YouTube Transcript Generator:** <https://tactiq.io/tools/youtube-transcript>
- **tldr.yt:** <https://tldr.yt/>
- **Trancy:** <https://www.trancy.org/>
- **YouTubeDigest:** <https://www.youtubedigest.app/>

### T8 - Developer libraries, automation and AI/MCP

- **Axiom Works YouTube MCP:** <https://github.com/axiom-works-ai/axiomworks-youtube-mcp>
- **HasData YouTube MCP:** <https://github.com/hasdata/youtube-mcp>
- **innertube (Python):** <https://pypi.org/project/innertube/>
- **innertubei:** <https://pypi.org/project/innertubei/>
- **pauling-ai YouTube MCP Server:** <https://github.com/pauling-ai/youtube-mcp-server>
- **pytubefix:** <https://github.com/JuanBindez/pytubefix>
- **RustyPipe:** <https://github.com/TeamPiped/rustypipe>
- **youtube-ai:** <https://github.com/vibheksoni/youtube-ai>
- **youtube-transcript-api:** <https://github.com/jdepoix/youtube-transcript-api>
- **YouTube.js / youtubei.js:** <https://github.com/LuanRT/YouTube.js>
- **YoutubeExplode:** <https://github.com/Tyrrrz/YoutubeExplode>
- **yt-search-python:** <https://github.com/BillaSpace/yt-search-python>
- **ytb-cli:** <https://github.com/tamnd/ytb-cli>
- **ytmusicapi:** <https://github.com/sigma67/ytmusicapi>
- **Yutu YouTube MCP:** <https://github.com/eat-pray-ai/yutu>

### T9 - Data collection, research, verification and scraping APIs

- **4CAT:** <https://4cat.nl/> · <https://wiki.digitalmethods.net/Dmi/Tool4CAT>
- **Apify YouTube Scrapers:** <https://apify.com/store/categories/youtube> · <https://apify.com/streamers/youtube-scraper>
- **Bellingcat Online Investigation Toolkit:** <https://bellingcat.gitbook.io/toolkit>
- **Bright Data YouTube Scraper:** <https://brightdata.com/products/web-scraper/youtube>
- **Communalytic:** <https://communalytic.org/> · <https://communalytic.org/docs/youtube-video-comments-data-collector/>
- **DataForSEO YouTube SERP API:** <https://docs.dataforseo.com/v3/serp/youtube/overview/>
- **Facepager:** <https://github.com/strohne/Facepager> · <https://github.com/strohne/Facepager/wiki>
- **Filmot:** <https://filmot.com/> · <https://filmot.com/about>
- **HasData YouTube API:** <https://hasdata.com/apis/youtube-scraper-api>
- **InVID-WeVerify Verification Plugin:** <https://weverify.eu/verification-plugin/> · <https://github.com/AFP-Medialab/verification-plugin>
- **mattw.io YouTube Metadata:** <https://mattw.io/youtube-metadata/>
- **NodeXL Pro:** <https://nodexl.com/> · <https://nodexl.com/integration-youtube/>
- **Outscraper YouTube APIs:** <https://docs.outscraper.com/tags/youtube/>
- **Oxylabs Video Data API:** <https://docs.oxylabs.io/video-data-api>
- **ScrapeCreators YouTube API:** <https://scrapecreators.com/youtube-api>
- **ScrapingBee YouTube API:** <https://www.scrapingbee.com/documentation/youtube/>
- **SearchApi.io YouTube Search API:** <https://www.searchapi.io/docs/youtube>
- **SerpApi YouTube Search API:** <https://serpapi.com/youtube-search-api>
- **SocialKit YouTube APIs:** <https://www.socialkit.dev/youtube-apis>
- **YouTube Data Tools:** <https://ytdt.digitalmethods.net/> · <https://ytdt.digitalmethods.net/faq.php>

### T10 - Publishing, comments, operations and small utilities

- **Agorapulse:** <https://www.agorapulse.com/youtube-integration/>
- **Buffer:** <https://buffer.com/youtube>
- **Comment Picker:** <https://commentpicker.com/youtube.php>
- **Hootsuite:** <https://www.hootsuite.com/youtube>
- **Metricool:** <https://metricool.com/youtube/> · <https://help.metricool.com/schedule-and-publish-on-youtube-gof0k>
- **Playlist Lens:** <https://playlistlens.com/>
- **playlist-randomizer.com:** <https://playlist-randomizer.com/>
- **Publer:** <https://publer.io/integrations/youtube>
- **SocialPilot:** <https://www.socialpilot.co/> · <https://help.socialpilot.co/article/861-how-to-schedule-youtube-videos-and-shorts-with-socialpilot>
- **Sprout Social:** <https://sproutsocial.com/integrations/youtube/> · <https://support.sproutsocial.com/hc/en-us/articles/8206924306829-How-do-I-respond-to-YouTube-comments-in-the-Smart-Inbox>
- **TunePocket Playlist Calculator:** <https://www.tunepocket.com/youtube-playlist-length-calculator/>
- **YouTube Playlist Randomizer:** <https://github.com/remixer-dec/YouTubePlaylistRandomizer>
- **YT.Tools:** <https://yt.tools/> · <https://yt.tools/tools?goal=repurpose-content>
- **YTFlare:** <https://ytflare.com/>

### T11 - Rights, music, sponsorships and influence intelligence

- **AdRev / FUGA:** <https://fuga.com/> · <https://support.fuga.com/hc/en-us/articles/39156341356564-Content-ID-Policy-Guidelines-YouTube>
- **Artlist:** <https://artlist.io/> · <https://artlist.io/help-center/privacy-terms/artlist-license/>
- **Audible Magic:** <https://www.audiblemagic.com/>
- **Brandwatch:** <https://www.brandwatch.com/>
- **Captiv8:** <https://www.captiv8.io/>
- **CreatorIQ:** <https://www.creatoriq.com/influencer-marketing-solution>
- **Epidemic Sound:** <https://www.epidemicsound.com/> · <https://www.epidemicsound.com/pricing-and-plans/>
- **Fourthwall:** <https://fourthwall.com/>
- **GRIN:** <https://grin.co/>
- **HAAWK:** <https://www.haawk.com/products>
- **HypeAuditor:** <https://hypeauditor.com/> · <https://help.hypeauditor.com/en/articles/3191975-what-is-youtube-influencer-discovery>
- **Influencer Hero:** <https://www.influencer-hero.com/>
- **Lickd:** <https://lickd.co/>
- **Meltwater:** <https://www.meltwater.com/>
- **Modash:** <https://www.modash.io/features/influencer-discovery>
- **Pex:** <https://pex.com/>
- **Upfluence:** <https://www.upfluence.com/>
- **Vobile RightsID:** <https://us.vobile.com/rights_id>

### Decisive first-party and conflict-check sources

- YouTube A/B testing titles and thumbnails: <https://support.google.com/youtube/answer/16391400?hl=en-GB>
- Content ID eligibility and exclusive-rights requirements: <https://support.google.com/youtube/answer/1311402?hl=en>
- Content ID API partner scope: <https://developers.google.com/youtube/partner>
- Copyright Match Tool detection/access limits: <https://support.google.com/youtube/answer/15269184?hl=en>
- NewPipe package/changelog status: <https://f-droid.org/packages/org.schabi.newpipe/>
- Grayjay YouTube-plugin issue evidence: <https://github.com/futo-org/grayjay-android/issues/3293>
- IINA YouTube breakage issue: <https://github.com/iina/iina/issues/4143>
- Pinchflat original and maintained continuation: <https://github.com/kieraneglin/pinchflat> · <https://github.com/CommunityMaintained/pinchflat>

## 8. What would materially change this landscape

1. A country-scoped, authenticated store crawl recording versions, update dates, publishers, permissions, prices and installation status.
2. A reproducible harness that runs representative viewing, transcript, upload, comment, live and archive tasks against the same test assets and records success, latency, completeness and failure mode.
3. Owner-authorized comparisons against YouTube Studio exports to quantify error in public analytics, keyword scores, revenue estimates and title/thumbnail predictions.
4. Contract and policy review for scraping, download, music licensing, Content ID administration and influencer-data services.
5. Quarterly reruns of repository releases, store status and live endpoints, because reverse-engineered clients and hosted utility sites change fastest.