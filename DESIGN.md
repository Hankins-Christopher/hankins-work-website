---
name: Hankins
description: Engineering field guide for security testing and practical AI integration.
colors:
  paper: "#f5f3ed"
  ink: "#252720"
  muted: "#606259"
  orange: "#bc3e19"
  line: "#d7d8ce"
  dark: "#242b24"
  action-text: "white"
  orange-hover: "#973012"
  approach-surface: "#e5e8db"
  approach-text: "#515c46"
  field-surface: "#fbfaf6"
  field-border: "#b6bbac"
  field-placeholder: "#6c7064"
  diagram-core: "#e2e9cd"
  diagram-ink: "#293322"
  diagram-integration: "#f8b093"
  diagram-integration-ink: "#402416"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(48px, 5.3vw, 76px)"
    fontWeight: 550
    lineHeight: 1.1
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(34px, 3.5vw, 49px)"
    fontWeight: 550
    lineHeight: 1.15
    letterSpacing: "-.035em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "25px"
    fontWeight: 550
    lineHeight: 1.35
    letterSpacing: "-.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
rounded:
  control: "4px"
  panel: "5px"
  circle: "50%"
spacing:
  button: "16px 22px"
  field: "12px 14px"
  panel: "24px 28px 20px"
  paired-columns: "100px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.action-text}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "{spacing.button}"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
  button-download:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "{spacing.button}"
    width: "100%"
  button-download-hover:
    backgroundColor: "{colors.orange}"
  field:
    backgroundColor: "{colors.field-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "{spacing.field}"
    width: "100%"
  boundary-panel:
    backgroundColor: "{colors.dark}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel}"
---

# Design System: Hankins

## Overview

**Creative North Star: “Engineering field guide.”**

Warm paper, measured rules, restrained typography, and an olive system diagram make technical work legible. The visual language is editorial and practical: generous section spacing gives the content room, while fine borders organize the details.

This is a code-led record of the implemented system, not a reconstruction of an approved visual comp. `styles.css` is the implementation source; the tokens above capture its reusable decisions. Product claims remain governed by `PRODUCT.md`.

**Key Characteristics:**

- Warm neutral reading surface and dark olive technical illustration.
- Orange action accent, compact labels, and gently rounded controls.
- Ruled service rows and numbered process steps.
- Self-hosted variable Manrope throughout.

## Colors

### Primary

**Burnt orange** marks the main action, word underline, brand punctuation, focus outlines, and brief status. Its darker hover shade belongs to the primary button.

### Secondary

**Olive** anchors the trust-boundary panel. Pale olive fills the security core and the approach band; peach distinguishes the integration core. Diagram line and label shades remain local illustration details in the stylesheet.

### Neutral

**Warm paper** is the page ground; **ink** carries headings and the download action; **muted** carries explanatory text. Fine neutral rules divide sections. Fields use a slightly lighter paper surface, a distinct stroke, and muted placeholder text.

**The Action Rule.** Keep orange tied to action, emphasis, and interaction feedback; retain olive for the system illustration and process context.

## Typography

All roles use the self-hosted Manrope variable font (`assets/manrope.ttf`, supported weights 200–800), with Arial and sans-serif fallbacks. The display and section headings are medium-weight rather than heavy; tight tracking gives the large type its editorial character.

The frontmatter records the desktop hierarchy. Supporting service copy uses smaller text (14px, line-height 1.85); hero copy is larger (17px, line-height 1.8). Labels, tags, notes, and diagram annotations use compact text (12px). Body paragraphs have a general reading limit (70ch), with narrower component-specific measures.

At the intermediate breakpoint the hero heading is fixed (54px). On mobile it becomes fluid (`clamp(44px, 9vw, 65px)`); at wide desktop it reaches (82px). Service titles step from desktop (25px) to intermediate (22px) and mobile (24px). Mobile fields use readable input text (16px), overriding desktop fields (13px).

## Layout

The centered container has a maximum width (1280px) and desktop side allowance (112px total). Intermediate layouts use (64px total); mobile uses (40px total). The hero pairs text with the diagram in an asymmetric grid (1.16fr / 1fr), separated by (64px). Section introductions, approach, and planner use equal columns with generous separation (100px).

Service rows use three columns (1fr / 1.18fr / 46px), a fine upper rule, and vertical padding (35px). The last row closes with a lower rule. Main service and planner sections use roughly (100–112px) vertical spacing.

At (1050px) gaps tighten. At (760px) the hero, introductions, approach, and planner become single-column; service titles and circular links share the first row while copy spans the next. Mobile section spacing becomes approximately (60–66px). Secondary header links are hidden while the project action remains visible. The service strip wraps, and the footer wraps naturally. At (1500px) the hero and diagram expand.

## Elevation & Depth

There are no box shadows. Depth comes from paper, pale olive, and dark olive planes, separated by thin rules and explicit boundaries. The diagram's concentric rings communicate containment rather than decorative elevation.

## Shapes

Controls have subtly softened corners; the diagram panel is only slightly rounder. Circles belong to diagram rings, nodes, service arrow links, and step counters. Borders are generally fine (1px); the selected diagram tab uses a stronger underline (2px). Inline SVG arrows and icons use rounded strokes and joins.

## Components

### Buttons

The primary button is orange with white text; the planner download button is full-width ink with paper text. Both use the control radius and button padding in frontmatter, with a trailing inline SVG (22px). Color transitions take (.2s). Keyboard focus uses an orange outline (3px) offset by (5px).

### Inputs / Fields

Labels sit above bordered light-paper fields. The textarea resizes vertically and starts at a minimum height (120px). Input caret and status text use orange. Field focus uses the shared outline; validation uses the browser's constraint UI. Form output is a local text download, with nearby explanatory copy and a live status message.

### Navigation

The header combines the compact wordmark, two section anchors, and an underlined project action. Desktop navigation uses medium emphasis (13px, weight 650); hover changes text to orange. The footer repeats a smaller wordmark and muted utility links. A keyboard-accessible skip link appears on focus.

### Service Rows

Ruled editorial rows pair a short service heading, explanatory copy, slash-separated focus tags, and a circular arrow link. Arrow hover fills the circle with ink and reverses its text to paper. Mobile retains the rule and row hierarchy rather than converting services into cards.

### Trust-Boundary Diagram

The dark panel contains concentric rings, vertical routes, small circular nodes, and a central labeled core. Two actual buttons expose security and integration views with `aria-pressed` state. The selected tab has a pale olive underline. Integration changes the core and route to peach and swaps which ring is dashed; labels, icon, and descriptive text change together. The illustration is explicitly conceptual, not live telemetry.

The diagram arrives with a clipped reveal (1s, `cubic-bezier(.16,1,.3,1)`); core color changes take (.3s). Reduced-motion preference removes animation and transitions and disables smooth scrolling. Mobile diagram buttons have a minimum height (44px).

### Process Steps

Numbered circular counters and a thin connecting line make an ordered vertical process. Titles are compact and semibold; explanatory text is muted olive. Keep the numbered sequence readable independently of the decorative connector.

## Do's and Don'ts

### Do:

- **Do** preserve the warm paper, olive, and orange relationship.
- **Do** organize service details with rules, deliberate columns, and readable text measures.
- **Do** use the self-hosted font and existing inline SVG stroke language.
- **Do** retain visible keyboard focus, mobile field sizing, and reduced-motion behavior.
- **Do** keep diagram state changes consistent across labels, icons, colors, and pressed state.

### Don't:

- **Don't** replace the flat editorial system with floating shadow cards.
- **Don't** style the conceptual diagram as verified live system status.
- **Don't** let decorative motion obscure content or override reduced-motion preference.
- **Don't** introduce visual badges that imply unconfirmed certifications, clients, or partnerships.
