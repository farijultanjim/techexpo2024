// constants/index.js
export const navLinks = [
  {
    id: 0,
    name: 'Home',
    href: '/',
  },
  {
    id: 1,
    name: 'About BITE',
    href: '',
    subLinks: [
      { name: 'Buisiness Info', href: '/about-bite/buisiness-info' },
      { name: 'Organizers', href: '/about-bite/organizer' },
      { name: 'Display Profile', href: '/about-bite/display-profile' },
    ],
  },
  {
    id: 2,
    name: 'For Exhibitors',
    href: '',
    subLinks: [
      { name: 'Why Exhibit', href: '/for-exhibitor/why-exhibit' },
      { name: 'Online Stall Booking', href: '/for-exhibitor/online-stall-booking' },
      { name: 'Layout', href: '/for-exhibitor/layout' },
      { name: 'Sponsorship Plan', href: '/for-exhibitor/sponsorship-plan' },
    ],
  },
  {
    id: 3,
    name: 'For Visitors',
    href: '',
    subLinks: [
      { name: 'Why Visit', href: '/for-visitors/why-visit' },
      { name: 'Expo Flyer', href: '/for-visitors/expo-flyer' },
      { name: 'Floor Plan', href: '/for-visitors/floor-plan' },
      { name: 'Staying In Dhaka', href: '/for-visitors/staying-in-dhaka' },
      { name: 'Venue Location', href: '/for-visitors/venue-location' },
    ],
  },
  {
    id: 4,
    name: 'Media',
    href: '',
    subLinks: [
      { name: 'Photo Gallery', href: '/media/photo-gallery' },
      { name: 'Videos Gallery', href: '/media/video-gallery' },
      { name: 'Media & Publications', href: '/media/media-&-publications' },
      { name: 'Promo Video', href: '/media/promo-video' },
    ],
  },
  {
    id: 5,
    name: 'Seminar',
    href: '/seminar',
  },
  {
    id: 6,
    name: 'Contact Us',
    href: '/contact-us',
  },
];

export const sponsors = [
  { name: 'Sponsor 1', imageUrl: '/SponsorBrands/pepsi.png' },
  { name: 'Sponsor 2', imageUrl: '/SponsorBrands/basis.svg' },
  { name: 'Sponsor 3', imageUrl: '/SponsorBrands/nasa.png' },
  { name: 'Sponsor 4', imageUrl: '/SponsorBrands/mercedes.png' },
  { name: 'Sponsor 5', imageUrl: '/SponsorBrands/pepsi.png' },
  { name: 'Sponsor 6', imageUrl: '/SponsorBrands/nasa.png' },
];


export const FeaturedCardData = [
  {
    image: "/slider2.jpg",
    title: "Innovation Summit",
    description: "Join us for a day of inspiring talks and workshops on the latest tech trends.",
    buttons: [
      { label: "Learn More", onClick: () => console.log("Navigate to details page"), primary: true },
      { label: "Download PDF", onClick: () => console.log("Download PDF"), },
    ],
  },
  {
    image: "/slider3.jpg",
    title: "AI Workshop",
    description: "Hands-on session on implementing AI in your projects.",
    buttons: [
      { label: "Register Now", onClick: () => console.log("Navigate to registration page"), primary: true },
    ],
  },
  {
    image: "/slider2.jpg",
    title: "Networking Event",
    description: "Connect with industry leaders and innovators in a relaxed setting.",
    buttons: [
      { label: "RSVP", onClick: () => console.log("Navigate to RSVP page"), primary: true },
      { label: "View Attendees", onClick: () => console.log("Navigate to attendees list") },
    ],
  },
];