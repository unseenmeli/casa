import { useState, useEffect } from 'react'

/**
 * Preload images before they're needed to prevent lag during scroll
 * @param {Array} imageUrls - Array of image URLs to preload
 * @returns {boolean} - Whether all images are loaded
 */
export function useImagePreloader(imageUrls) {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    let isMounted = true
    const imagePromises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.onload = resolve
        img.onerror = reject
      })
    })

    Promise.all(imagePromises)
      .then(() => {
        if (isMounted) {
          setImagesLoaded(true)
        }
      })
      .catch(err => {
        console.warn('Some images failed to preload:', err)
        if (isMounted) {
          setImagesLoaded(true) // Still set to true to show content
        }
      })

    return () => {
      isMounted = false
    }
  }, [imageUrls])

  return imagesLoaded
}
