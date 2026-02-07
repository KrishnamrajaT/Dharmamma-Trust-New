# Dharmamma Trust Website - Page Reference Guide

## 📋 Overview of All Pages

This guide provides detailed information about each page, including what content can be customized.

---

## 🏠 Homepage (`/`)

### Sections

#### 1. Hero Section
- **Location**: Lines 60-80 in `Home.js`
- **Customizable Elements**:
  - Main heading: "Welcome to Dharmamma Trust"
  - Subheading: "Serving Communities with Compassion and Dedication"
  - Two buttons: "Learn More About Us" and "Get Involved"

#### 2. Mission & Vision
- **Location**: Lines 85-130
- **Customizable**:
  - Mission statement
  - Vision statement

#### 3. Key Services Cards
- **Location**: Lines 135-200
- **4 Service Cards**:
  1. Uniforms for Children (SchoolIcon)
  2. Pilgrim Accommodations (HotelIcon)
  3. Event Organization (EventIcon)
  4. Community Service (VolunteerActivismIcon)
- **Editable**: Title, description, link

#### 4. Impact Numbers
- **Location**: Lines 205-245
- **Customize These Numbers**:
  - 5000+ Children Supported
  - 150+ Events Organized
  - 10000+ Pilgrims Served
  - 500+ Active Volunteers

#### 5. Call-to-Action Section
- **Location**: Lines 250-270
- **Customizable**:
  - Heading: "Be Part of Our Mission"
  - Subtext
  - Button text and link

### SEO Elements
- Title: "Dharmamma Trust - Community Service & Religious Initiatives"
- Description: Brief overview of trust
- Keywords: trust, religious service, community service, education

---

## ℹ️ About Us (`/about`)

### Sections

#### 1. Header
- **Customizable**:
  - Page title
  - Subtitle

#### 2. History Section
- **Location**: Lines 60-85
- **3 Paragraphs** about trust history
- Update with actual trust founding and growth story

#### 3. Core Values
- **Location**: Lines 100-135
- **4 Values**:
  1. Compassion (EmojiPeopleIcon)
  2. Integrity (AccountBalanceIcon)
  3. Sustainability (StorageIcon)
  4. Inclusivity (PublicIcon)
- Each with description

#### 4. Goals Section
- **Location**: Lines 140-165
- **Two Columns**:
  - Short-term Goals (4 bullet points)
  - Long-term Vision (4 bullet points)

#### 5. Team Members
- **Location**: Lines 175-210
- **6 Team Members Required**:
  ```javascript
  {
    name: 'Person Name',
    role: 'Position',
    initials: 'PN',
    description: 'Role description'
  }
  ```
- Edit in the `teamMembers` array

### SEO Elements
- Title: "About Dharmamma Trust - History, Mission & Team"
- Description: Comprehensive about us information

---

## 🎯 Services (`/services`)

### Sections

#### 1. Header
- **Customizable**:
  - Page title
  - Subtitle

#### 2. Main Services Grid
- **Location**: Lines 130-210
- **6 Services** (2 columns on desktop):
  1. **Uniform Distribution**
     - Icon: SchoolIcon
     - Details about the program
     - List of 4 benefits
  2. **Pilgrim Accommodations**
     - Icon: HotelIcon
     - Details about facilities
     - List of 5 benefits
  3. **Event Organization**
     - Icon: EventIcon
     - Event planning details
     - List of 4 benefits
  4. **Health & Wellness Programs**
     - Icon: HealthAndSafetyIcon
     - Health initiative details
     - List of 4 benefits
  5. **Educational Support**
     - Icon: BookIcon
     - Education program details
     - List of 4 benefits
  6. **Meal & Food Distribution**
     - Icon: LocalDiningIcon
     - Meal program details
     - List of 4 benefits

Each service card includes:
- Icon
- Title
- Short description
- Detailed explanation
- Key benefits (bulleted list)

#### 3. How to Access Services
- **Location**: Lines 215-250
- **4 Steps**:
  1. Contact
  2. Verify
  3. Register
  4. Benefit
- Each with explanation

#### 4. FAQs Section
- **Location**: Lines 255-295
- **5 Common Questions**:
  1. Uniform distribution eligibility
  2. Accommodation rates
  3. School partnerships
  4. Health program costs
  5. Scholarship program details
- Uses Accordion component for expandable questions

### To Add a New Service

1. Add to `mainServices` array:
```javascript
{
  icon: <YourIcon sx={{ fontSize: 56 }} />,
  title: 'Service Title',
  description: 'Brief description',
  details: 'Detailed explanation',
  benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
}
```

2. Add FAQ:
```javascript
{
  question: 'Your question?',
  answer: 'Your answer'
}
```

### SEO Elements
- Title: "Our Services - Dharmamma Trust"
- Description: Comprehensive service descriptions
- Keywords: services, uniforms, accommodations, events, health, education

---

## 🎉 Events (`/events`)

### Sections

#### 1. Header
- Page title and subtitle

#### 2. Tabs Section
- **Two Tabs**:
  1. Upcoming Events
  2. Past Events

### Upcoming Events Tab
- **Location**: Lines 120-200
- **Card Layout** (2 columns on desktop)
- Each event displays:
  - Category (Chip)
  - Title with emoji icon
  - Date and time
  - Location
  - Expected attendees
  - Description
  - Register and Share buttons

**Current Events** (4 events shown):
1. Diwali Celebration 2024 (🪔)
2. Uniform Distribution Drive (👕)
3. Health Camp (⚕️)
4. Annual Charity Gala (🎭)

### Past Events Tab
- **Location**: Lines 205-280
- **Card Layout** for each event:
  - Event title
  - Date, location, attendees
  - Testimonial quote
  - "View Gallery" button with photo count

**Current Past Events** (4 events shown):
1. Holi Festival 2024 (4 photos)
2. Uniform Distribution - Spring 2024 (8 photos)
3. Navratri Celebration (12 photos)
4. Summer Health Camp 2024 (6 photos)

### Gallery Dialog
- Opens when clicking "View Gallery"
- Shows testimonial quote
- Displays photo placeholders

### To Add Events

**Upcoming Event**:
```javascript
{
  id: 5,
  title: 'Event Title',
  date: 'Date',
  time: 'Time',
  location: 'Location',
  category: 'Category',
  description: 'Description',
  attendees: '500+',
  image: '🎉'
}
```

**Past Event**:
```javascript
{
  title: 'Event Title',
  date: 'Date',
  location: 'Location',
  attendees: '500+',
  photos: 5,
  testimonials: ['Testimonial text']
}
```

### SEO Elements
- Title: "Events & Activities - Dharmamma Trust"
- Description: Events calendar and gallery information

---

## 🤝 Get Involved (`/get-involved`)

### Sections

#### 1. Ways to Contribute (3 Cards)
- **Cards** (1 per column on mobile, 3 on desktop):
  1. Volunteer (VolunteerActivismIcon)
  2. Donate (MonetizationOnIcon)
  3. Partner (BusinessIcon)
- Clicking opens relevant form

#### 2. Volunteer Section
- **Location**: Lines 135-290
- **6 Volunteer Opportunity Cards**:
  1. Education Support
  2. Health Programs
  3. Event Organization
  4. Community Service
  5. Digital Support
  6. Administrative
- Each shows active volunteer count

**Volunteer Form Fields**:
- Full Name (required)
- Email (required)
- Phone
- Volunteer Type (dropdown)
- Areas of Interest (checkboxes - 5 options)
- Availability (dropdown)
- Message (textarea)

**Interest Options**:
- Education Support
- Health Programs
- Event Organization
- Community Service
- Digital Support

**Availability Options**:
- Full-time
- Part-time
- Weekends Only
- Flexible

#### 3. Donation Section
- **Form Fields**:
- Full Name (required)
- Email (required)
- Donation Type (radio buttons):
  - One-time
  - Monthly
  - Quarterly
- Donation Amount:
  - Quick buttons: ₹100, ₹500, ₹1000, ₹5000
  - Custom amount field
- Message (textarea)

#### 4. Partnership Section
- **Form Fields**:
- Business Name (required)
- Contact Person Name (required)
- Email (required)
- Phone
- Partnership Proposal (textarea, required)

### To Add Volunteer Opportunities

Add to `volunteerOpportunities` array:
```javascript
{
  icon: '🎓',
  title: 'New Opportunity',
  description: 'Description',
  volunteers: '50+'
}
```

### SEO Elements
- Title: "Get Involved - Dharmamma Trust"
- Description: Information on volunteering, donating, and partnerships
- Keywords: volunteer, donate, partnership, contribute

---

## 📞 Contact Us (`/contact`)

### Sections

#### 1. Contact Information Panel
- **Main Office**:
  - Address: 123 Religious Street, Spiritual City
  - Phone numbers
  - Email addresses
  - Office hours

**Contact Email Addresses**:
- General: contact@dharmamma.org
- Donations: donate@dharmamma.org
- Volunteering: volunteer@dharmamma.org

**Office Hours**:
- Monday - Friday: 9:00 AM - 6:00 PM
- Saturday: 10:00 AM - 4:00 PM
- Sunday & Holidays: Closed

#### 2. Contact Form
- **Fields**:
  - Full Name (required)
  - Email Address (required)
  - Phone Number
  - Subject (required)
  - Message (required, 5-line textarea)
- Submit button sends success alert

#### 3. Location Section
- Placeholder for Google Maps embed
- "View on Google Maps" button

#### 4. Branch Offices
- **3 Branches Shown**:
  1. North Branch
  2. South Branch
  3. East Branch
- Each with address, phone, and email

### Map Integration

Replace the placeholder with:
```javascript
<iframe 
  src="https://www.google.com/maps/embed?pb=..." 
  width="100%" 
  height="400" 
  style={{borderRadius: '12px'}}
  allowFullScreen=""
  loading="lazy"
/>
```

### To Update Contact Info

Edit in `Contact.js`:
- Line 25-35: Main office address
- Line 38-50: Contact phone and emails
- Line 53-60: Office hours
- Line 120-160: Branch offices
- Line 290-310: Google Maps iframe

Also update in `Footer.js`:
- Lines 50-70: Contact information
- Lines 75-85: Social media links

### SEO Elements
- Title: "Contact Us - Dharmamma Trust"
- Description: Contact form, address, phone, email
- Keywords: contact, location, address, inquiry

---

## 🧭 Navigation & Footer

### Navigation (`Navigation.js`)
- **Fixed header** with logo
- **Desktop**: Horizontal menu with 6 links
- **Mobile**: Hamburger menu (auto-hides on desktop)
- **Active page indicator**: Bottom border on current page

**Menu Items**:
1. Home
2. About Us
3. Services
4. Events
5. Get Involved
6. Contact

### Footer (`Footer.js`)
- **4 Columns**:
  1. About (Short description)
  2. Quick Links (4 links)
  3. Contact (Phone, email, address)
  4. Social Media (Facebook, Twitter, Instagram, LinkedIn)

**Bottom Section**:
- Copyright notice with year
- Privacy Policy link
- Terms & Conditions link

---

## 🎨 Theme Customization (`theme.js`)

### Colors
```javascript
palette: {
  primary: {
    main: '#2E5090',     // Dark Blue
    light: '#5A7FB5',    // Light Blue
    dark: '#1B3057',     // Very Dark Blue
  },
  secondary: {
    main: '#FF9800',     // Orange
    light: '#FFB74D',    // Light Orange
    dark: '#E65100',     // Dark Orange
  },
  success: {
    main: '#4CAF50',     // Green
  },
  background: {
    default: '#F5F5F5',  // Light Gray
    paper: '#FFFFFF',    // White
  },
  text: {
    primary: '#333333',  // Dark Text
    secondary: '#666666' // Gray Text
  }
}
```

### Typography
- **Font Family**: Roboto (Google Font)
- **Heading Styles**: H1, H2, H3 with consistent colors
- **Body Text**: 1rem default size
- **Line Height**: 1.6 for readability

### Components
- **Buttons**: Rounded, with box-shadow
- **Cards**: Rounded, with hover lift effect
- **Inputs**: Rounded, professional styling

---

## 📱 Responsive Breakpoints

The site is responsive using Material-UI breakpoints:

- **xs**: 0px (Mobile)
- **sm**: 600px (Small tablet)
- **md**: 960px (Tablet)
- **lg**: 1280px (Desktop)
- **xl**: 1920px (Large desktop)

**Example Usage**:
```javascript
sx={{
  display: { xs: 'none', md: 'flex' }  // Hide on mobile, show on desktop+
}}
```

---

## 🔗 Internal Links

All navigation uses React Router:

```javascript
<Link to="/">Home</Link>
<Link to="/about">About Us</Link>
<Link to="/services">Services</Link>
<Link to="/events">Events</Link>
<Link to="/get-involved">Get Involved</Link>
<Link to="/contact">Contact Us</Link>
```

---

## 📊 Component Structure

### Page Layout Pattern

Every page follows this structure:
```
┌─────────────────────────────────────┐
│      Navigation Component            │
├─────────────────────────────────────┤
│     Helmet (SEO Meta Tags)          │
├─────────────────────────────────────┤
│     Hero/Header Section              │
├─────────────────────────────────────┤
│     Main Content (Multiple sections) │
├─────────────────────────────────────┤
│     Footer Component                 │
└─────────────────────────────────────┘
```

---

## 🔐 Form Submission

Currently, forms show success messages but don't send data.

**To enable submissions**:
1. Create backend endpoint
2. Add fetch call in handleSubmit
3. Add error handling
4. Add loading states

Example:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

## 🌟 Key Features Summary

✅ **6 Professional Pages**
✅ **Fully Responsive Design**
✅ **SEO Optimized**
✅ **Modern Material-UI Design**
✅ **Smooth Animations**
✅ **Easy Forms**
✅ **Photo Galleries**
✅ **Event Management**
✅ **Mobile Navigation**
✅ **Professional Branding**

---

**Last Updated**: February 2026
**Website Status**: Active & Running on localhost:3001
