const images = import.meta.glob('../assets/skillimages/*.{png,jpg,jpeg,webp}', { eager: true });

// Convert the object to an array of image URLs
const imageArray = Object.values(images).map(img => img.default);

export default imageArray;