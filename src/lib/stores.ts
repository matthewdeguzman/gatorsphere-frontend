import { readable } from 'svelte/store';

export const communities = readable([
	"c/computer-science", "c/social", "c/pre-health", "c/law", "c/business", 
	"c/engineering", "c/arts", "c/science", "c/math", "c/humanities", 
	"c/education", "c/music", "c/dance", "c/theater", "c/film", "c/photography", 
	"c/design", "c/journalism", "c/writing", "c/fashion", "c/culinary", 
	"c/sports", "c/fitness", "c/gaming"
]);
