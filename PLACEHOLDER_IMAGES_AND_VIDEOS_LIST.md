# Placeholder Images and Videos - Replacement List

## 📸 IMAGES TO REPLACE

### 1. **Homepage - Hero Section**
- **File**: `/public/photos/background.png`
- **Location**: Hero section background
- **Description**: Background image for the hero section (main landing area)
- **Current**: Placeholder background
- **Recommended Size**: 1920x1080px or larger (landscape)
- **Content**: Village landscape, village entrance, or scenic view of Ramarampeta

### 2. **Homepage - Sarpanch Photo**
- **File**: `/public/photos/sarpanch.png`
- **Location**: Large circular photo in hero section
- **Description**: Official photo of the Sarpanch
- **Current**: Placeholder
- **Recommended Size**: 800x800px (square, will be cropped to circle)
- **Content**: Professional/formal photo of the Sarpanch

### 3. **Homepage - Acting Leader/Village Guide Photo**
- **File**: `/public/photos/sarpanchhusband.png`
- **Location**: Smaller circular photo overlapping in hero section
- **Description**: Photo of the Acting Leader/Village Guide
- **Current**: Placeholder
- **Recommended Size**: 600x600px (square, will be cropped to circle)
- **Content**: Professional/formal photo of the Acting Leader

### 4. **Leadership Page - Sarpanch Photo**
- **File**: `/public/photos/sarpanch.png` (same as homepage)
- **Location**: Leadership page - Sarpanch card
- **Description**: Same photo as homepage
- **Status**: ✅ Same file as #2 above

### 5. **Leadership Page - Acting Leader Photo**
- **File**: `/public/photos/sarpanchhusband.png` (same as homepage)
- **Location**: Leadership page - Acting Leader card
- **Description**: Same photo as homepage
- **Status**: ✅ Same file as #3 above

### 6-15. **Leadership Page - Ward Member Photos (10 photos)**
- **Files**: 
  - `/public/photos/ward1.png`
  - `/public/photos/ward2.png`
  - `/public/photos/ward3.png`
  - `/public/photos/ward4.png`
  - `/public/photos/ward5.png`
  - `/public/photos/ward6.png`
  - `/public/photos/ward7.png`
  - `/public/photos/ward8.png`
  - `/public/photos/ward9.png`
  - `/public/photos/ward10.png`
- **Location**: Leadership page - Ward members section
- **Description**: Individual photos of each ward member (Ward 1-10)
- **Current**: Placeholders
- **Recommended Size**: 400x400px (square, will be cropped to circle)
- **Content**: Professional/formal photos of each ward member

### 16-18. **Gallery Page - Photo Gallery (3 photos)**
- **Files**: Check `data/somaram-pet.json` → `placeholders.photos` array
- **Location**: Gallery page - Photos section
- **Description**: 
  - Photo 1: "Village Entrance" / "గ్రామ ప్రవేశ ద్వారం"
  - Photo 2: "Annual Sankranti Festival" / "సంక్రాంతి ఉత్సవం"
  - Photo 3: "School Renovation" / "పాఠశాల మరమ్మతు"
- **Current**: Placeholders
- **Recommended Size**: 1200x800px (landscape)
- **Content**: 
  - Village entrance gate/arch
  - Sankranti festival celebration photos
  - School renovation work photos

### 19-20. **Works Page - Ongoing Works (1 photo)**
- **File**: Check `data/somaram-pet.json` → `worksPage.ongoing[0].image`
- **Location**: Works page - Ongoing Works section
- **Description**: "BT Road to Main Junction" / "మెయిన్ జంక్షన్‌కు బీటి రోడ్"
- **Current**: Placeholder (`/placeholders/work1.png`)
- **Recommended Size**: 1200x600px (landscape)
- **Content**: Road construction work in progress

### 21. **Works Page - Completed Works (1 photo)**
- **File**: Check `data/somaram-pet.json` → `worksPage.completed[0].image`
- **Location**: Works page - Completed Works section
- **Description**: "East Street Borewell" / "ఈస్ట్ వీధి బోర్‌వెల్"
- **Current**: Placeholder (`/placeholders/work2.png`)
- **Recommended Size**: 1200x600px (landscape)
- **Content**: Completed borewell installation

### 22. **Ward Pages - Additional Photos (Future)**
- **Location**: Individual ward pages (`/ward/[id]`)
- **Description**: Space available for ward-specific photos
- **Status**: ⚠️ Not yet implemented, but structure exists
- **Content**: Ward-specific activities, events, or development work

---

## 🎥 VIDEOS TO REPLACE

### 1-2. **Gallery Page - YouTube Videos (2 videos)**
- **Location**: Gallery page - Videos section
- **Description**: 
  - Video 1: "Sarpanch message on Swachh Bharat" / "స్వచ్ఛ భారత్ పై సర్పంచ్ సందేశం"
  - Video 2: "Youth Sports Day" / "యువత క్రీడా దినం"
- **Current**: Placeholder YouTube ID (`YOUTUBE_ID_1`)
- **Action Required**: 
  1. Upload videos to YouTube
  2. Get YouTube video IDs
  3. Update `data/somaram-pet.json` → `placeholders.videos[0].youtubeId` and `placeholders.videos[1].youtubeId`
- **Content**: 
  - Video of Sarpanch speaking about Swachh Bharat
  - Video of youth sports day event

---

## 📋 SUMMARY CHECKLIST

### Images (Total: 20+ images)
- [ ] Background image (hero section)
- [ ] Sarpanch photo (homepage + leadership)
- [ ] Acting Leader photo (homepage + leadership)
- [ ] 10 Ward member photos (ward1.png to ward10.png)
- [ ] 3 Gallery photos (village entrance, festival, school)
- [ ] 2 Works photos (ongoing + completed)

### Videos (Total: 2 videos)
- [ ] 2 YouTube videos (upload and get IDs)

### Other Updates Needed
- [ ] Update Google Maps embed in `data/somaram-pet.json` → `contactPage.mapEmbed`
- [ ] Update names in `data/somaram-pet.json` (remove `[Name]` placeholders)
- [ ] Update ward member names and descriptions in `data/wards.json`

---

## 📝 NOTES

1. **Image Format**: Use PNG or JPG format
2. **Image Optimization**: Images will be optimized by Next.js automatically
3. **File Naming**: Keep exact file names as listed above
4. **File Location**: All images go in `/public/photos/` directory
5. **Video Format**: Upload to YouTube and use video IDs (not direct file uploads)
6. **Accessibility**: Ensure all images have proper alt text (already configured in code)

---

## 🎨 COLOR THEME UPDATE

The website color theme is being updated from **Pink** to **Purplish Blue Gradient (Peacock Feather)** across all components.

