/**
 * wedding-data.js — Customer-facing editable data layer for wax-seal-royale
 * Edit this file to update couple names, dates, invitation note, schedule, venue, and media.
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Farhan Ahmed",
    groomParents: "Mr. & Mrs. Saleem Ahmed",
    bride: "Naila Abeer",
    bridePrefix: "Daughter of",
    brideParents: "Mr. & Mrs. Malik Muqtar Ahmed Khan",
    subtitle: "Two Souls One destiny A Lifetime written by Allah",
  },

  wedding: {
    dateLabel: "26 - 28 Nov 2026",
    dateISO: "2026-11-26T10:00:00+03:00",
    invitationNote: "With the divine blessings of Allah (SWT),<br /><span style=\"font-weight:700;letter-spacing:0.08em;color:#a67d2b;font-size:1.15em;display:inline-block;margin:6px 0;\">SALEEM AHMED &amp; FAMILY</span><br />cordially invite you to celebrate the auspicious Nikah &amp; Waleema ceremonies of their beloved son.",
  },

  schedule: [
    { date: "26 Nov", time: "10 AM", title: "Nikah Ceremony" },
    { date: "26 Nov", time: "2 PM", title: "Lunch" },
    { date: "28 Nov", time: "8 PM", title: "Waleema Dinner" },
    { date: "28 Nov", time: "11 PM", title: "Duas & Warm Wishes" },
  ],

  venue: {
    name: "Masjid Al-Haram & Al Rimal",
    address: "Nikah: Masjid Al-Haram, Makkah | Waleema: Al Rimal, Riyadh",
    mapsUrl: "https://maps.app.goo.gl/7BXh32y6bX7uHW429?g_st=iw",
    nikahVenue: "Masjid Al-Haram",
    nikahAddress: "Makkah Al-Mukarramah, Saudi Arabia",
    nikahDate: "Thursday, 26 Nov 2026",
    nikahMapsUrl: "https://www.google.com/maps/search/?api=1&query=Masjid+Al-Haram+Makkah",
    waleemaVenue: "Al Rimal Venue",
    waleemaAddress: "Al Rimal District, Riyadh, Saudi Arabia",
    waleemaDate: "Saturday, 28 Nov 2026",
    waleemaMapsUrl: "https://maps.app.goo.gl/7BXh32y6bX7uHW429?g_st=iw",
  },

  details: {
    giftPreference: "Warm compliments & heartfelt duas from SALEEM AHMED & FAMILY.",
    dressCode: "Traditional / Elegant Formal attire is requested for both celebrations.",
  },

  media: {
    overlayImage: "./editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png",
    sealVideo: "./editable/assets/1782224012851.mp4",
    heroVideo: "./editable/assets/Swans2.mov",
    audio: "./editable/assets/Einaudi_ Divenire (1) (1).mp3",
  },
};
