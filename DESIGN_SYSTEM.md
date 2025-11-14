# 🎨 Portfolio Design System & Customization Guide

## Color Palette

### Primary Colors
- **Purple Gradient Start**: `#667eea`
- **Purple Gradient End**: `#764ba2`
- **Light Purple**: `#b0b9ff`

### Background Colors
- **Darkest**: `#0a0a1a`
- **Dark**: `#0f0c29`
- **Darker**: `#1a1a2e`
- **Medium Dark**: `#16213e`
- **Accent**: `#302b63`

### Transparency Variants
All colors use `rgba()` for glassmorphism effects:
- Light overlay: `rgba(102, 126, 234, 0.08)`
- Medium overlay: `rgba(102, 126, 234, 0.1)`
- Border: `rgba(102, 126, 234, 0.2-0.6)`

## Typography

### Font Family
```css
'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
```

### Font Sizes
- **Hero Title**: 4.5rem (desktop), 2.5rem (mobile)
- **Section Titles**: 3rem (desktop), 2rem (mobile)
- **Headings (h3)**: 1.5rem
- **Body Text**: 1rem - 1.1rem
- **Small Text**: 0.85rem - 0.95rem

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extra Bold**: 800

## Components

### Buttons
```css
/* Primary Button */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
padding: 16px 40px;
border-radius: 50px;
box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
```

### Cards
```css
/* Glassmorphism Card */
background: rgba(102, 126, 234, 0.1);
border: 1px solid rgba(102, 126, 234, 0.3);
border-radius: 15-20px;
backdrop-filter: blur(10px);
```

### Hover Effects
- `transform: translateY(-5px)` - Lift effect
- `transform: translateX(10px)` - Slide effect
- Border color: increase opacity from 0.3 to 0.6
- Box shadow enhancement

## Animation Values

### Keyframe Animations
- **fadeInUp**: opacity 0 → 1, translateY 30px → 0
- **slideInRight**: opacity 0 → 1, translateX 50px → 0
- **float**: translateY 0px ↔ -20px (6s cycle)
- **bounce**: translateY 0 ↔ -10px (2s cycle)

### Transition Speeds
- **Fast**: 0.2s - 0.3s (hover effects)
- **Medium**: 0.4s (card interactions)
- **Slow**: 1s+ (page entrance animations)

### Easing Functions
- `ease` - Default smooth
- `ease-out` - Starts fast, ends slow
- `cubic-bezier(0.34, 1.56, 0.64, 1)` - Bouncy effect

## Spacing

### Padding
- **Large sections**: 100px (top/bottom), 20px (sides)
- **Container padding**: 20-40px (responsive)
- **Component padding**: 25-40px
- **Element spacing**: 10-30px

### Gaps
- **Grid gaps**: 30-60px (responsive)
- **Flex gaps**: 10-40px

### Margins
- **Section margins**: 40-60px between elements
- **Vertical spacing**: 20-50px

## Responsive Design

### Mobile First Approach
```css
/* Default = Mobile */
/* Then use @media (min-width: 768px) for tablets/desktop */

/* Breakpoints */
- 768px: Tablet
- 1024px: Large screens
```

### Key Changes
- Grid columns: single → multi
- Font sizes: reduce 20-30%
- Padding: reduce 30-50%
- Hide hamburger menu on desktop

## Glassmorphism Technique

```css
background: rgba(102, 126, 234, 0.1);      /* Transparent color */
border: 1px solid rgba(102, 126, 234, 0.3);/* Subtle border */
border-radius: 15px;                        /* Rounded corners */
backdrop-filter: blur(10px);                /* Blur effect */
```

## Customization Checklist

- [ ] Update color scheme primary gradient
- [ ] Change section background gradients
- [ ] Modify button colors and hover states
- [ ] Adjust font sizes for brand preference
- [ ] Update spacing and padding values
- [ ] Customize animation durations
- [ ] Modify shadow intensities
- [ ] Change border radius values
- [ ] Update scrollbar colors
- [ ] Adjust opacity values

## Performance Tips

1. **Animations**: Use `transform` and `opacity` only (GPU accelerated)
2. **Shadows**: Use `box-shadow` for depth
3. **Hover States**: Apply to interactive elements
4. **Transitions**: Keep under 500ms for best UX
5. **Gradients**: Use 2-3 colors maximum

## Accessibility

- **Color Contrast**: Ensure WCAG AA compliance
- **Focus States**: Visible keyboard navigation
- **Reduced Motion**: Respect `prefers-reduced-motion`
- **Semantic HTML**: Use proper heading hierarchy
- **Alt Text**: Include for images and icons

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (use `-webkit-` prefixes where noted)
- Mobile browsers: Responsive design

---

**Tips for Best Results:**
- Keep animations subtle and purposeful
- Maintain visual hierarchy with size and color
- Use whitespace generously
- Test on real devices and browsers
- Optimize images and assets
