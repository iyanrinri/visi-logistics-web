import { ref, onMounted, computed } from 'vue'

export function useTextAnimation(text: string | { value: string }, duration: number = 1500) {
  const displayedText = ref('')
  let animationId: number | null = null

  const targetText = computed(() => {
    return typeof text === 'string' ? text : text.value
  })

  const startAnimation = () => {
    if (!targetText.value) return
    
    displayedText.value = ''
    const startTime = Date.now()
    const totalChars = targetText.value.length

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const charsToShow = Math.floor(totalChars * progress)
      displayedText.value = targetText.value.substring(0, charsToShow)

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      } else {
        displayedText.value = targetText.value
      }
    }

    animate()
  }

  onMounted(() => {
    startAnimation()
  })

  return {
    displayedText
  }
}
