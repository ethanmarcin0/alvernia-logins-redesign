# TEST_LOG — Alvernia Logins

**Selected design:** Classic, Refined (`classic.html`).  
**Log assembled:** November 6, 2026.  
**Evidence dates:** T01–T07 summarize agent checks performed November 5; T08 records a source/archive check performed November 6. T09 contains peer feedback reported November 6. This file was not present when the earlier tests ran.

Sources: [VALIDATION.md](VALIDATION.md), [browser observations](reference/browser-checks.json), [captured source catalog](reference/source-catalog.json), and the project chat. Browser results below are historical recorded observations, not fresh browser runs on November 6.

## T01 — AC1: Correct services and destinations

**Tester/date:** Codex, November 5, 2026.  
**Procedure:** Compare the service catalog against the captured university directory; compare rendered service/support destinations against the original page.  
**Expected:** Retain all services, audience-specific options, and links, including the distinct Canvas sign-ins.  
**Actual:** 27 unique services, 34 audience entries (20 Students and 14 Faculty/Staff), and 58 service-link occurrences were retained. Both designs included all 55 unique service/support destinations checked.  
**Result:** PASS for content preservation. Provider sign-in sessions were not tested.

## T02 — AC2: Search and combined filters

**Tester/date:** Codex, November 5, 2026.  
**Procedure:** Search `email`; then combine Students + Academics + `registration`; clear filters.  
**Expected:** Office 365 matches the email alias; the combined registration query returns Self-Service; reset restores all Classic listings.  
**Actual:** Expected matches were observed. Classic showed an Office 365 listing for each audience when Everyone was selected; the student registration combination returned one Self-Service listing. Reset restored 34 listings.  
**Result:** PASS. Later layout checks also confirmed that a single filtered card spans its section's width.

## T03 — AC3: Saved service and reload

**Tester/date:** Codex, November 5, 2026.  
**Procedure:** Save Canvas, select Saved, reload, and remove the saved selection.  
**Expected:** Canvas appears in Saved, remains saved after reload, and its student/faculty representations stay synchronized.  
**Actual:** Saved-only displayed Canvas; reload retained the selection; both Classic stars changed together. Test favorites were removed afterward.  
**Result:** PASS with supported browser storage. Saved selections are local to the browser and separate for each concept.

## T04 — Phone, tablet, and readability revision

**Tester/date:** Codex, November 5, 2026, including checks after the requested revisions.  
**Procedure:** Inspect 1440 × 1000 desktop, 768 × 1024 tablet, 375 × 812 phone, and 320 px narrow layouts. Check long names and the end of each audience section.  
**Expected:** Readable branding/text, no horizontal overflow, and no large blank column after a shorter audience list.  
**Actual:** No horizontal overflow was recorded. Final Classic desktop sections each measured 1200 px wide and had aligned final-row bottoms. Phone cards formed one column; the wordmark measured 195 px and the title 56 px. Desktop branding measured 260 px with a 76 px title. Larger phone text can require scrolling to see all quick links.  
**Result:** PASS for the inspected layouts. This does not establish usability for every vision condition or constitute a comprehensive accessibility audit.

After views: [desktop](screenshots/classic-desktop.jpg), [desktop directory](screenshots/classic-desktop-directory.jpg), [lower page](screenshots/classic-desktop-bottom.jpg), [phone](screenshots/classic-mobile.jpg), [phone directory](screenshots/classic-mobile-directory.jpg).

## T05 — Keyboard use

**Tester/date:** Codex, November 5, 2026.  
**Procedure:** Use the first Tab to reach Skip to main content, press Enter, and try `/` outside a text field.  
**Expected:** Visible focus, access to main content, and keyboard access to search.  
**Actual:** The skip link received focus with a 3 px outline; Enter focused `main`; `/` focused `service-search`.  
**Result:** PASS for these recorded checks. A complete manual Tab/Shift+Tab walkthrough of every control and service link after the final revisions is not recorded and should be added if required by the instructor.

## T06 — Failure/empty state and recovery

**Tester/date:** Codex, November 5, 2026.  
**Procedure:** Search for `zzzz-no-such-service`, then activate Show all services. Also open Saved with no saved services.  
**Expected:** Clear feedback rather than a blank unexplained page; a usable recovery action.  
**Actual:** The no-match query returned zero cards with an empty-state message. Reset restored 34 listings, cleared search, and returned focus to search. An empty saved collection displayed guidance for starring a service. The Classic heading was subsequently refined to No saved services.  
**Result:** PASS.

## T07 — Storage unavailable and source checks

**Tester/date:** Codex, November 5, 2026.  
**Procedure:** Run Modern in a sandboxed iframe without same-origin storage access; inspect source syntax, local dependencies, contrast pairs, and reduced-motion styles.  
**Actual:** The shared saving logic worked in memory and displayed its storage-unavailable message. Source checks passed. The final Classic maroon/white contrast measured 7.60:1 and supporting-text/gray 6.20:1. Reduced-motion rules were inspected; the OS preference itself was not changed.  
**Result:** PASS for the checks described. The storage-blocked browser test was on Modern's use of the shared script, not a separate Classic blocked-storage session. Direct-from-disk execution remains untested by the preview browser.

## T08 — Current files and archive check

**Tester/date:** Codex, November 6, 2026.  
**Procedure:** Compare the extracted project folder with the existing ZIP before adding these documents; repeat catalog-to-source comparison.  
**Expected:** Matching current files and preserved service destinations.  
**Actual:** No folder/ZIP differences were found. Catalog comparison passed for 27 services, 34 audience entries, and 58 service-link occurrences. This was a filesystem/source check, not a new browser test.  
**Result:** PASS. The ZIP is being rebuilt to add the course documentation without changing application code.

## T09 — Peer visual review, revisions, and visual retest

**Source/date:** Student report in the project chat, November 6, 2026. The peer sessions' dates were not supplied.  
**Activity:** The student and a classmate scrolled up and down to inspect the page's appearance and layout. They did not follow service links or test sign-ins.  
**Initial feedback:** The classmate described the page as a huge improvement and identified colors and whitespace as revision areas.  
**Relevant revisions:** Matched the homepage's maroon/gold/neutral colors and replaced unequal parallel audience columns with full-width audience sections and two-column card grids.  
**Visual retest:** The student confirmed that the classmate tried the page again after the fixes and considered it improved.  
**Agent retest:** The color, layout, phone, source, and geometry checks are recorded above and in the saved browser evidence.  
**Result:** Reported peer visual review and visual retest COMPLETED. No link-finding success, sign-in success, completion time, or functional peer task is claimed.

### Recommended functional peer follow-up

To strengthen the instructor's visitor-task evidence, ask the classmate to start at `classic.html` and find the Canvas sign-in for an Alvernia email address without directions. They do not need to enter credentials. Record whether they located the correct option, any confusion, and a revision/retest if needed.

- Date of functional task: Not yet performed/reported.
- What the peer did or found difficult: Not yet recorded.
- Revision needed: To be determined from the observation.
- Retest result after any revision: Not yet recorded.

## T10 — Course documentation and packaging checks

**Tester/date:** Codex, November 6, 2026.  
**Procedure:** Check local Markdown links; compare application assets and HTML against the previously verified ZIP; verify the rebuilt archive.  
**Expected:** Required course files are present, local documentation links resolve, application code remains unchanged, and the archive passes its integrity check.  
**Actual:** TASK.md, AI_USE.md, TEST_LOG.md, and REFLECTION.md were added; local Markdown links resolved; application HTML/assets matched the prior ZIP. The rebuilt archive includes the same application files plus the course documentation and updated README.  
**Result:** PASS. The rebuilt archive passed the packaging integrity and included-file checks. Documentation distinguishes historic agent checks, student-reported visual peer testing, and outstanding course requirements.

## Remaining evidence

Before screenshots of the original site and a 60–90 second demonstration recording/in-class equivalent have not been supplied in this package. All current screenshots are after views. Approval of the ZIP fallback or a live-site/repository submission still needs confirmation. See the checklist in [TASK.md](TASK.md).

## T11 — University header dropdowns and regression checks

**Tester/date:** Codex, November 9, 2026.  
**Request:** Add the original university menus to Classic's white header using the student's two screenshots. This is a new test entry, not a retimestamped November 5 check.

| Check | Observed result |
| --- | --- |
| Current navigation content | Static source comparison passed for all five groups and 87 primary-menu link occurrences. Resources → Logins is intentionally mapped to the local prototype. |
| Desktop dropdowns | About, Academics, Admissions & Aid, Student Experience, and Resources opened one at a time; outside click closed them. |
| Keyboard | Enter opened a menu; Tab entered its first link; ArrowDown from Academics focused Explore Academics; Escape closed it and returned focus. |
| Find It | Library returned Franco Library. Canvas returned the two distinct university-email and personal-email Catalog destinations without duplicate destinations. |
| Find It empty state | An unknown query showed No matching links and suggestions for recovery. |
| Phone navigation | Menu starts collapsed; opening it exposes the five accordions. Only one expands at a time. Escape closes the accordion and returns to its summary; a second Escape closes the mobile menu and focuses Menu. |
| Responsive layout | No horizontal overflow at 1440, 1300, 768, 375, or 320 px widths. At 1300 px the last navigation summary ended before Find It, with no overlap. |
| Discovered issue and retest | The first 320 px check placed Menu below the logo. Horizontal button padding was reduced; retest confirmed both stay on one row while the wordmark remains 195 px wide. |
| Responsive context | An open Academics dropdown stayed open and accessible when resizing from desktop to phone, with the phone Menu state expanded. |
| Directory regression | Registration search returned Self-Service. A no-match service search followed by Show all services restored 34 listings and search focus. |
| Static checks | JavaScript syntax, local asset resolution, catalog preservation, and existing sampled text contrast checks passed. |

**Result:** PASS for the checks listed. Screenshots and browser observations are packaged with the updated source. The menus were checked through the localhost preview; direct-file browser execution remains subject to the previously documented preview-tool limit. No new peer review or authenticated provider test is claimed.

## T12 — Final page presentation

**Tester/date:** Codex, November 9, 2026.  
**Request:** Remove the top design-concept bar so Classic presents as a finished page.  
**Checks:** Desktop 1440 × 1000 and phone 375 × 812 show zero concept-bar elements, the university header begins at y=0, and there is no horizontal overflow. All 34 directory listings remain. The browser title is Logins | Alvernia University. Footer review/comparison wording was replaced with university-resource and technology-support wording. Academics still opens correctly.  
**Result:** PASS. Current desktop, dropdown, phone, and full-page captures were refreshed. Project/course documentation remains separate from the page presentation.
