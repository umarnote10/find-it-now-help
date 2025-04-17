
# Found It: Lost-and-Found Web Application

Found It is a serverless lost-and-found web application that helps people reunite with their lost belongings. The platform allows users to report lost items and post found items, facilitating direct communication between both parties via WhatsApp.

## Project Setup

### Prerequisites

- Node.js (v16 or higher)
- Supabase account
- Google Maps API key
- Custom domain: foundit.help

### Environment Variables

The following environment variables are required:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Installation Steps

1. Clone the repository:
```bash
git clone <your-repo-url>
cd found-it
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the required environment variables (see above)

4. Start the development server:
```bash
npm run dev
```

## Supabase Setup

1. Create a new project in Supabase
2. Set up the following tables:
   - users
   - lost_items
   - found_items
3. Configure storage for image uploads
4. Set up authentication with email/password and phone number providers
5. Add appropriate Row Level Security policies

## Google Maps Integration

1. Obtain a Google Maps API key from the Google Cloud Console
2. Enable the following APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
3. Add the API key to your environment variables

## Deployment on lovable.dev

1. Push your code to your Lovable repository
2. In the Lovable dashboard, navigate to your project
3. Click on the "Publish" button
4. Configure your environment variables in the Lovable dashboard

## Custom Domain Setup

To connect the foundit.help domain to your Lovable project:

1. In the Lovable dashboard, go to Project > Settings > Domains
2. Click "Connect Domain" and enter "foundit.help"
3. Update your DNS settings with the following records:
   - A record pointing to Lovable's IP address
   - CNAME record for "www" pointing to your Lovable subdomain

## Adding/Editing Static Pages and Markdown Posts

### Static Pages

Static pages are stored in the `src/pages` directory. To add or edit a static page:

1. Create a new file in the `src/pages` directory, e.g., `NewPage.tsx`
2. Add the page to the routes in `src/App.tsx`
3. Push your changes to the repository

### Markdown Posts

For community/news/tip posts:

1. Create Markdown files in the `content` directory
2. Use the following frontmatter format:
```markdown
---
title: "Post Title"
date: "2025-04-17"
author: "Author Name"
category: "tips"
---

Your content here...
```
3. Manually publish the changes through lovable.dev

## Project Structure

```
found-it/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── forms/           # Form components
│   │   ├── items/           # Item-related components
│   │   ├── layout/          # Layout components
│   │   └── ui/              # UI components from shadcn/ui
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components
│   ├── types/               # TypeScript type definitions
│   ├── App.tsx              # App component with routes
│   └── main.tsx             # Entry point
└── content/                 # Markdown content for posts
```

## Features

- User authentication (email/password and phone/password)
- Lost item posting with map location, photos, and contact information
- Found item posting with description, photos, and contact information
- WhatsApp integration for direct communication
- Google Maps integration for precise location pinpointing
- Search and filter functionality
- Mobile-first, responsive design

## Contact

For any questions or issues, please contact:

- support@foundit.help
- dev@foundit.help
- info@foundit.help
