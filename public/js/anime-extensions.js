/**
 * Custom extensions for anime.js library
 * Provides additional utility functions that may be missing
 */

if (typeof anime !== 'undefined') {
    // Add the random function if it doesn't exist
    if (!anime.random) {
        anime.random = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    }
}
