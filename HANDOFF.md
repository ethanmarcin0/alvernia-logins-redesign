# Alvernia Logins — Design Handoff

## Purpose and audience

Help students, faculty, and staff reach the right campus service quickly. The proposals retain the university’s service destinations while improving visual hierarchy, filtering, keyboard access, and mobile use. Parent Access remains a clearly named resource under myAlvernia.

The package is a pair of local, interactive prototypes for class review and the university web designer. It does not modify or deploy to Alvernia’s website.

## Classic refinement

The selected Classic direction uses a more professional editorial tone: Quick links, Account support, and Technology support replace promotional headings and slogans. Maroon accents, warm neutrals, subtle hover treatments, and the familiar audience sections preserve its welcoming character. The Modern concept remains the alternative for comparison.

## Two directions

**01 · Classic, Refined** retains the older page’s university identity and Students / Faculty & Staff groupings. Each audience now has a full-width section with a two-column service grid on desktop and tablets. Students appear first, followed by Faculty & Staff; this prevents the former 20-versus-14 listing imbalance from leaving an empty lower-right column. Selecting one audience displays just that section. On phones the panels stack. The university logo is 260 px wide on desktop and 195 px on phones; the Logins title is 76 px and 56 px respectively. Service titles are 18 px, descriptions and primary links are 14 px, and secondary links are 13 px. A small maroon rule and gold title accent establish hierarchy without a large hero. Quick access, stronger search, and predictable hover feedback modernize a familiar experience.

**02 · Modern Campus Hub** uses a rich maroon welcome area, editorial serif title, and a three-column card directory. Cards use restrained category colors and original line icons. On tablets the grid has two columns; on phones it has one. Password reset and IT Help Desk actions use the desktop upper-right area and become compact links beneath search on smaller screens. Both designs give everyday links their own compact section.

### References

- Current content and destinations: https://www.alvernia.edu/logins (captured November 5, 2026).
- Confirmed older reference: https://web.archive.org/web/20260215195630/https://www.alvernia.edu/logins .
- The archived layout was inspected. Its original hover animation was **not verified**. New hover treatments interpret the clean, smooth experience described in the class brief.
- Official unmodified logo: https://www.alvernia.edu/themes/custom/bs5_alvernia/logo.svg .
- Official white logo: https://www.alvernia.edu/themes/custom/bs5_alvernia/logo-white.svg .
- Line icons are original SVG paths in `assets/icons.js`; decorative graphics are CSS. There are no external fonts, stock images, analytics, or runtime libraries.

## Homepage color alignment — selected Classic direction

Classic now uses the live homepage theme’s maroon `#9B2743`, gold `#EAAA00`, light gray `#F3F3F3`, border gray `#D1D3D4`, and dark ink `#19232B`. The source stylesheet was inspected at https://www.alvernia.edu/themes/custom/bs5_alvernia/css/style.css?tnqtu5 and the maroon/gold/gray values were confirmed through rendered homepage styles. `assets/classic-brand.css` applies the selected direction’s palette after the shared styles. Soft hover and saved-state tints are derived colors; `#565B5E` is a darker supporting text color for readability. Gold is used as an accent and star fill, with maroon focus outlines to retain contrast on light backgrounds. The Modern alternative retains its original palette.

## Visual system

The table below documents the initial shared palette used by the Modern alternative. Classic overrides those values with the homepage palette documented above. These are website theme values, not a claim of a separately approved institutional brand manual.

| Token | Value | Use |
| --- | --- | --- |
| Maroon | `#76283d` | Primary actions, active filters, Classic accents |
| Deep maroon | `#4b1829` | Modern hero, footer |
| Gold | `#ba8d42` | Decorative accents, hero search focus |
| Pale gold | `#e8c985` | Eyebrow text on maroon |
| Ink | `#292b2d` | Body and headings |
| Secondary text | `#63646a` | Descriptions and supporting text |
| Paper | `#faf9f6` | Main canvas |
| Border | `#deddd9` | Cards, separators, controls |
| White | `#ffffff` | Panels and search |

Arial/Helvetica/system sans-serif is used for body and UI text. Georgia/Times New Roman provides the Modern title and section headings. Classic’s main title stays sans-serif. These system stacks require no downloads. Desktop content is usually capped at 1,200 px, extending to 1,260 px on very wide screens. Main spacing uses 8–12 px for related items, 20–28 px for panels, and 30–54 px for sections. Classic panels have 7 px corners; Modern cards have 14 px corners. CSS variables are at the top of `assets/styles.css`.

Responsive rules switch at 1,100, 800, and 580 px; Modern uses three, two, then one card columns. Everyday essentials use four then two columns. Both have explicit 375 px checks.

## Content and interaction contract

`assets/catalog.js` is the one shared content source, loaded as a regular deferred script. It defines 27 unique services and retains 34 audience-specific variants, totaling 58 original service-link occurrences. Five technology-support destinations are also retained in the page markup. The original names, audiences, labels, and URLs are recorded in `reference/source-catalog.json` for comparison.

Each service has a stable `id`, a concise `name`, a `description`, a `category`, an `icon` key, search `aliases`, and `variants`. Each variant contains an `audience`, the original `sourceName`, and a list of `{label, url}` links. Stable service IDs are also the browser’s saved-link identifiers.

- Audiences: `Students` and `Faculty/Staff`; Everyone shows both.
- Categories: Academics, Campus Life, Student Services, University Operations. Each service has one category; these are proposed groupings, editable in the catalog.
- Search is instant and case/accent/punctuation-insensitive. All query words must occur in the combined service name, description, aliases, category, or original source names. It does not require an AI service or fuzzy-search library.
- Audience, category, text search, and Saved combine with AND. The visible count updates in a polite live region. Classic counts audience listings; Modern counts unique services.
- The essentials section follows the audience selection and hides during a nonempty search, specific category selection, or Saved-only view. Student-only essentials are omitted for Faculty & Staff.
- Everyone merges Modern’s shared services into one card while retaining distinct destinations. Classic displays a shared service in both relevant audience sections, stacked as full-width sections rather than unequal parallel columns. A star saves that service in both Classic sections.
- Canvas’s university-email sign-in and personal-email Catalog sign-in remain distinct. uAchieve retains both student and advisor instructions for Everyone, then limits them to the selected audience. Bookstore destinations are labeled Student bookstore and Faculty textbook adoptions.
- Main service links and supporting resources remain visible. There are no hover-only controls or links nested inside a clickable card. Outbound links use normal same-tab navigation; visitors can use browser commands to open a new tab.
- Clear filters restores Everyone, all categories, an empty query, and Saved off. It preserves the saved collection. Empty results provide an explicit reset action. An empty saved collection explains how to star a service.
- Favorites use `alvernia-logins-{classic|modern}-saved-v1` in `localStorage`, independently per concept. They store service IDs only. If storage is blocked, the set remains in memory and the page explains that it lasts for the visit.
- `/` focuses search when the user is not typing in a field. Buttons expose their pressed state; stars have specific accessible names. The page includes a skip link, search and category labels, visible focus rings, and live feedback for save actions.
- Pointer effects use about 180 ms: a 3 px Modern card lift, arrow movement, border/shadow changes, and underlines. Modern card entrance moves only 3 px, with no hidden-content delay. Reduced motion removes animation, transitions, and smooth scrolling.

## University header navigation — November 9 update

The selected Classic page now includes About, Academics, Admissions & Aid, Student Experience, and Resources dropdowns in the white header, followed by Find It and Inquire. The labels, link groups, and 87 primary-menu link occurrences were copied from the public login page's current navigation on November 9, 2026; the capture is in `reference/navigation-source.json`. Resources → Logins intentionally returns to local `classic.html`; its original source URL remains in a data attribute for comparison. Other university links remain ordinary outbound links.

The large wordmark is preserved. At widths of 1300 px and above, the menus sit beside it. Below 1300 px they collapse behind a Menu button, with native details/summary accordions. Only one dropdown opens at a time. Enter/Space and Tab use native disclosure/link behavior; ArrowDown from a summary enters its first link or search field; Escape closes a dropdown and restores focus. A second Escape on phones closes the full menu. Outside clicks and tabbing to a control outside the header dismiss it. An active dropdown stays available when resizing between desktop and phone widths. Menus use normal navigation landmarks and links, not application-menu roles.

Find It searches the university pages and campus-service links bundled in this prototype. It is not a replacement for Alvernia's full production search service. Results are deduplicated by destination, retain aliases, show at most eight matching links, and provide a recoverable no-results state. Canvas's university-email and personal-email destinations remain distinct. The feature uses no API or remote script. Inquire links to the university's existing information-request page.

Implementation: `classic.html` contains the accessible static header; `assets/navigation.js` enhances mobile disclosure and local link search; `assets/classic-brand.css` contains the header styling. `reference/classic-header.html` is the matching template fragment, not a standalone page. Native dropdown links remain available without JavaScript, while the mobile toggle and Find It filtering require it. In production, reuse the university's own CMS navigation/search components so links remain centrally maintained.

## Engineering and CMS integration

Open the HTML files directly; no modules, fetch requests, build tool, package manager, fonts CDN, or server are needed. Scripts are regular deferred scripts, and all assets have relative paths. JavaScript creates the directory using an escaped rendering path. The no-JavaScript message links to the current university directory.

For production integration, use Alvernia’s existing header/footer and approved global typography, then map CMS-managed service records to the catalog fields. Scope the prototype CSS to the integrated component to avoid global heading/body rules affecting other pages. Preserve the role-specific destination mappings and searchable aliases. Classic now omits the concept bar, design-version browser title, and comparison/proposal footer wording for a finished page presentation. The comparison page and Modern alternative retain their review framing. Choose one of the concepts for production rather than shipping the comparison navigation.

The web designer should render service links in server-generated HTML for no-JavaScript access and progressively enhance filters; the current client rendering is a prototype simplification. The exact original URLs, including existing HTTP destinations and time-sensitive document links, were preserved for review. The university should verify provider destinations and current term documents before production adoption; the prototypes do not test authenticated services or collect credentials.

For favorites, retain browser-only storage unless the university separately specifies account-based preferences. Do not infer sign-in state from the audience filter. Avoid adding a backend or SSO integration for this directory redesign.

## Suggested class review

Have a student find Canvas, email, housing, and a saved service on each concept; have a faculty reviewer find advisor instructions and payroll. Compare time to find a link, errors, confidence, and mobile comfort. The design recommendation can then be based on observed use as well as visual preference. No user research results or usage rankings are implied by this package.

## Final page presentation — November 9

At the student's request, Classic starts directly with the university header. Its concept bar was removed from the HTML, its browser title is Logins | Alvernia University, and its footer now links to Technology support instead of the comparison page. Project attribution, proposal status, and course records remain in the accompanying Markdown files. No hosting or production deployment is implied.
