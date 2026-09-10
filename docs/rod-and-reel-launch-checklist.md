# Rod-and-reel launch checklist

The website work keeps rod-and-reel on the existing Hooked on Tails domain and
gives the service its own search, sales, and measurement path. Complete the
owner/account items below before judging performance.

## 1. Confirm the published offer with Captain John

- Confirm that most rod-and-reel trips run about five hours.
- Confirm that Hopedale and Lake Borgne are the correct public service-area
  references for inshore trips.
- Confirm the current inshore rate: $300 per person, three-person minimum, five
  maximum.
- Confirm the current offshore rate: $1,600 for four people, $200 per
  additional guest, six maximum.
- Decide what to tell one- and two-person parties. The site currently invites
  them to ask about availability without promising a lower minimum.
- Supply the exact deposit amount if it should be published. The site currently
  says that a deposit is required and that Captain John confirms it with
  availability.
- Confirm whether fish cleaning is always included or only available. The site
  currently uses “available,” matching the previous rod-and-reel page.

## 2. Turn on measurement

1. Add the production GA4 measurement ID as
   `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX` in the hosting environment.
2. Redeploy so the public environment variable is included in the browser
   bundle.
3. In GA4 Admin, mark `booking_request_submitted` as a key event.
4. Add the custom dimensions `trip_type`, `link_source`, `lead_source`, and
   `guest_count` if those breakdowns are needed in standard reports.
5. Test one internal inquiry and confirm the events in GA4 DebugView or
   Realtime. Do not use a real customer submission for testing.

The implemented funnel events are documented in the project README. They do
not include names, email addresses, phone numbers, preferred dates, or message
text.

## 3. Capture the search baseline

In Google Search Console, export the previous 90 days for these pages before
deployment and again 30, 60, and 90 days afterward:

- `/rod-and-reel`
- `/bowfishing`

Record impressions, clicks, click-through rate, and average position. Break the
rod-and-reel page down by queries containing “new orleans fishing charter,”
“hopedale fishing charter,” “redfish charter,” “speckled trout charter,” and
“red snapper charter.” Keep branded and non-branded queries separate.

## 4. Correct external positioning

- Ask Patriot Lodge to list Captain John for inshore/offshore fishing in
  addition to bowfishing, or add a separate Hooked on Tails rod-and-reel entry.
- Update the Google Business Profile services with distinct entries for
  “Inshore Fishing Charter,” “Redfish & Speckled Trout Charter,” and “Offshore
  Red Snapper Charter,” linking to `/rod-and-reel`.
- Review Facebook, Instagram, TikTok, charter directories, marina pages, and
  partner sites. Where possible, change bowfishing-only descriptions to
  “Bowfishing, Inshore & Offshore Fishing Charters.”
- Ask partners linking to the home page for rod-and-reel referrals to link
  directly to `/rod-and-reel`.
- Publish regular rod-and-reel catches and trip recaps so the social feed does
  not signal a bowfishing-only business.

## 5. Evaluate after enough traffic

Compare the two services on:

- Landing-page sessions
- `booking_cta_click` rate
- `booking_form_started` rate
- `booking_request_submitted` rate
- `booking_phone_click` rate
- Inquiry-to-confirmed-trip rate from Captain John's booking records

Avoid creating a second domain unless rod-and-reel becomes a genuinely separate
business with its own brand, reviews, booking operation, and content program.
