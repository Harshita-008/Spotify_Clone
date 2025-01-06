# Spotify Clone

A responsive web application that replicates core features of Spotify's user interface and music playback functionality. Built using vanilla JavaScript, HTML, and CSS.

## Features

### 1. User Interface
- Responsive design that adapts to different screen sizes (desktop, tablet, and mobile)
- Dark theme matching Spotify's aesthetic
- Two-panel layout:
  - Left sidebar for navigation and library
  - Main content area for playlists and music cards
- Hamburger menu for mobile responsiveness
- Custom scrollbar styling for better user experience

### 2. Music Playback
- Full-featured audio player with:
  - Play/Pause functionality
  - Next/Previous track controls
  - Seekbar for track navigation
  - Real-time progress tracking
  - Volume control
  - Time display (current time / total duration)
- Continuous playback while navigating
- Playlist management with song listings

### 3. Library Management
- Dynamic song list generation
- Click-to-play functionality for each track
- Song information display
- Play Now button for each track

### 4. Navigation
- Home and Search options in sidebar
- Collapsible sidebar for mobile view
- Forward/Back navigation buttons

### 5. Visual Elements
- Interactive cards with hover effects
- Play button overlay on hover
- Custom-styled buttons and controls
- Font Awesome icons integration
- Playlist cover images

## Technical Implementation

### 1. Core Technologies
- HTML5 for structure
- CSS3 for styling
- Vanilla JavaScript for functionality
- Font Awesome for icons
- Google Fonts for typography

### 2. CSS Architecture
- Modular CSS with separate files:
  - `style.css` for main styling
  - `utility.css` for reusable classes
- Mobile-first responsive design
- CSS Variables for theme consistency
- Flexbox for layouts
- Custom animations and transitions

### 3. JavaScript Features
- Audio API for music playback
- Asynchronous functions for song loading
- Event listeners for user interactions
- Time formatting utilities
- Dynamic DOM manipulation
- State management for current song

### 4. File Structure
```
project/
├── index.html
├── style.css
├── utility.css
├── script.js
├── songs/
│   └── [music files]
└── svg/
    └── [icon files]
```

### 5. Performance Optimization
- Efficient event handling
- Optimized image loading
- Smooth animations
- Debounced user interactions

## Responsive Design Breakpoints

- Desktop: > 1200px
- Tablet/Mobile: <= 1200px
- Small Mobile: <= 400px

## Setup Instructions

1. Clone the repository
2. Place your MP3 files in the `songs` directory
3. Update the `SONGS_LIST` array in `script.js` with your song filenames
4. Open `index.html` in a web browser

## Usage

1. Click on any song in the library to start playback
2. Use the playbar controls to:
   - Play/Pause music
   - Skip to next/previous tracks
   - Adjust volume
   - Seek through the current track
3. Use the hamburger menu on mobile to access the sidebar
4. Click on playlist cards to view detailed information

## Future Improvements

1. User authentication system
2. Playlist creation and management
3. Search functionality
4. Social features (likes, shares)
5. Cross-device synchronization
6. Offline mode
7. Advanced audio visualizations
8. Keyboard shortcuts

## Dependencies

- Font Awesome (6.7.2)
- Google Fonts (Roboto)
- Modern web browser with JavaScript enabled

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Notes

- The project uses local storage for maintaining state
- All songs should be in MP3 format
- Supports common audio codecs
- Requires internet connection for font loading