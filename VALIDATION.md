# Validation record

Checked November 5, 2026 using the Codex in-app browser and static source checks.

## Completed checks

| Area | Result |
| --- | --- |
| Source parity | All 34 original audience-specific entries and all 58 service-link occurrences match the captured source catalog exactly. |
| Rendered destination parity | Both concepts retain all 55 unique service/support destinations found in the current page’s directory and support section. |
| Desktop | Checked at 1440 × 1000. Classic uses stacked, full-width audience sections, each containing two card columns; Modern has three card columns. Quick links appear in the initial desktop viewport. |
| Tablet | Checked at 768 × 1024. Both directories use two columns with no horizontal overflow. |
| Phone | Checked at 375 × 812. Both directories stack into one column with no horizontal overflow. Modern’s four everyday essentials fit in the first screen, with the final essential ending at approximately 795 px. Classic now prioritizes larger branding and readable text; its quick links can require scrolling on phones. |
| Comparison | Both concept links work; the comparison page fits a 375 px viewport without horizontal overflow. |
| Search aliases | `email` returns Office 365; combined student + Academics + `registration` returns Self-Service. |
| Combined filters | Faculty & Staff + Academics returns AUAdvise, Bookstore, Canvas, Degree Audit uAchieve, Panopto, and Transferology. Adding an incompatible search produces the empty state. |
| Empty results and reset | No-match searches show clear recovery guidance. Reset restores all listings and search focus. |
| Empty saved list | Explains how to star a service and offers an action to restore the directory. |
| Favorites | Saving Canvas, Saved-only filtering, and persistence after reload work in both concepts. Classic’s student/faculty copies update together. Test favorites were removed afterward. |
| Storage unavailable | Tested Modern inside a sandboxed iframe without same-origin permission: directory and saving still work in memory; the fallback message appears. |
| Long names | University Credit Card Spend Management wraps on a 375 px viewport in both concepts without overflow. |
| Keyboard | `/` focuses search. The skip link receives the first Tab, shows a 3 px focus outline, and Enter focuses main content. |
| Images | Local official logos load successfully. |
| Contrast | Sampled text/background pairs pass 4.5:1. Secondary text on white: 5.90:1; captions on Modern essentials: 4.87:1; maroon links on white: 9.81:1. |
| Reduced motion | Inspected parsed stylesheet rules: animations, transitions, hover transforms, and smooth scrolling are disabled for reduced motion. |
| Portability structure | Every relative HTML asset/link resolves. Scripts parse successfully and use no modules, fetch, XHR, WebSocket, or remote runtime assets. |
| Screenshots | Desktop and mobile overviews, directory views, comparison views, and a Modern support view are included. |

Machine-readable browser observations are in `reference/browser-checks.json`. These are practical prototype checks, not a comprehensive accessibility audit or a cross-browser certification.

## Validation limits

The preview browser’s URL policy permits HTTP/HTTPS only and blocked `file://` navigation. **Direct-from-disk execution was not browser-tested.** The source uses ordinary deferred scripts, local images/styles, and relative paths specifically to support opening `index.html` directly. Static dependency checks pass. For the final local smoke test, extract the ZIP, double-click `index.html`, and try search and a saved link in the recipient’s browser; browser-specific local-storage behavior can vary for local files.

The OS reduced-motion preference was not changed; its CSS handling was verified through the stylesheet. Authenticated provider destinations were preserved rather than signed into or individually tested. No real credentials, university backend integration, CMS deployment, or live user study was involved.

## Classic copy refinement

Removed promotional wording from the selected Classic page and changed its section headings to Quick links, All campus services, Account support, and Technology support. Rechecked 1440 × 1000 desktop and 375 × 812 phone layouts: no horizontal overflow; all 34 audience listings and four quick links remain. Search for email returns Office 365 in both audience groups. Refreshed Classic and comparison screenshots.

## Homepage palette alignment

Classic’s colors were matched to the live Alvernia homepage theme: maroon #9B2743, gold #EAAA00, gray #F3F3F3, border #D1D3D4, and ink #19232B. Rendered desktop styles confirm those values, a maroon selected filter with white text, all 34 listings, and no horizontal overflow. Gold remains decorative; focus outlines use maroon on light backgrounds. New maroon/white and supporting-text/gray contrast pairs pass the existing source validation script. Screenshots and the portable archive were refreshed.

## Larger branding and balanced sections

Classic’s university logo is 260 px wide at 1440 px, with a 76 px Logins title. Service titles are 18 px, descriptions/primary links 14 px, and secondary links 13 px. The 20 Student listings and 14 Faculty & Staff listings occupy consecutive full-width sections with two columns each, eliminating the unequal parallel columns. Desktop geometry checks confirm both sections are 1200 px wide, with aligned final-row card bottoms. An odd last card spans both columns after filtering. Narrow screens keep a single-column directory.

Responsive follow-up: checked 768 px tablet (two cards per row), 375 px phone (one card per row, 195 px wordmark, 56 px title), and 320 px narrow screen. None showed horizontal overflow. With the email search, each audience’s single card spans the full section width. Selecting Faculty & Staff returns 14 listings and two quick links spread evenly across the available width.

## University dropdown navigation — November 9, 2026

All five desktop menus open correctly, with only one expanded at a time. Static comparison preserves all 87 primary-menu link occurrences from the current public page (including the documented local Logins shortcut). Keyboard checks cover Enter, Tab, ArrowDown, and Escape with focus return; an outside click closes menus. Find It returns Franco Library for library and distinct university-email/Canvas Catalog links for Canvas; an unknown query has clear no-results feedback.

Phone controls start collapsed and expand into accordions. A second Escape closes the full phone menu and restores focus to Menu. Checked 1440 px desktop, the 1300 px desktop breakpoint, 768 px tablet, 375 px phone, and 320 px narrow phone: no horizontal overflow. A first 320 px check found the Menu button wrapping under the logo; reducing only its horizontal padding fixed that while retaining the 195 px wordmark. Existing registration search returns Self-Service; empty-state recovery restores 34 listings.

See T11 in TEST_LOG.md and reference/navigation-browser-checks.json. The production destinations were compared, not individually navigated or signed into. Find It is bounded to the prototype's linked pages and services.

## Final presentation — November 9

Classic's top concept bar is absent on desktop and phone, with the university header at y=0 and no horizontal overflow. Its browser title and footer no longer contain version/comparison labels. All 34 listings remain and the Academics dropdown still opens. Refreshed current overviews: classic-desktop.jpg, classic-desktop-navigation.jpg, classic-mobile.jpg, and classic-navigation-full.jpg. Earlier directory/lower-page captures remain as evidence of prior layout checks.
