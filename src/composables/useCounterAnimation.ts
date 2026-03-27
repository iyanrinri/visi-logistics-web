import { ref, onMounted } from 'vue'

export function useCounterAnimation(targetValue: number, duration: number = 2000) {
  const count = ref(0)
  let animationId: number | null = null

  const startAnimation = () => {
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      count.value = Math.floor(startValue + (targetValue - startValue) * progress)

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animate()
  }

  onMounted(() => {
    startAnimation()
  })

  return {
    count
  }
}
