import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up elements on scroll
      gsap.utils.toArray('.gsap-fade-up').forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // Fade in elements
      gsap.utils.toArray('.gsap-fade-in').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // Slide from left
      gsap.utils.toArray('.gsap-slide-left').forEach((el) => {
        gsap.fromTo(el,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // Slide from right
      gsap.utils.toArray('.gsap-slide-right').forEach((el) => {
        gsap.fromTo(el,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // Scale up
      gsap.utils.toArray('.gsap-scale').forEach((el) => {
        gsap.fromTo(el,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // Staggered children
      gsap.utils.toArray('.gsap-stagger').forEach((parent) => {
        const children = parent.children
        gsap.fromTo(children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // Line reveal (for decorative lines)
      gsap.utils.toArray('.gsap-line').forEach((el) => {
        gsap.fromTo(el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // Counter animation
      gsap.utils.toArray('.gsap-counter').forEach((el) => {
        const target = parseInt(el.getAttribute('data-target') || el.textContent)
        const suffix = el.getAttribute('data-suffix') || ''
        const prefix = el.getAttribute('data-prefix') || ''

        gsap.fromTo(el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            onUpdate: function() {
              el.textContent = prefix + Math.round(this.targets()[0].innerText) + suffix
            }
          }
        )
      })

      // Parallax effect
      gsap.utils.toArray('.gsap-parallax').forEach((el) => {
        const speed = el.getAttribute('data-speed') || 0.5
        gsap.to(el, {
          yPercent: -30 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      })

      // Image reveal
      gsap.utils.toArray('.gsap-img-reveal').forEach((el) => {
        const img = el.querySelector('img')
        if (img) {
          gsap.fromTo(el,
            { clipPath: 'inset(0 100% 0 0)' },
            {
              clipPath: 'inset(0 0% 0 0)',
              duration: 1.2,
              ease: 'power4.inOut',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none none'
              }
            }
          )
          gsap.fromTo(img,
            { scale: 1.3 },
            {
              scale: 1,
              duration: 1.4,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none none'
              }
            }
          )
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

// Hook for hero animations (runs immediately on mount)
export function useHeroAnimation() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for coordinated animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Hero title lines
      tl.fromTo('.hero-line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12 },
        0.3
      )

      // Hero subtitle and other elements
      tl.fromTo('.hero-fade',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        0.8
      )

      // Stats from right
      tl.fromTo('.hero-stat',
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
        1
      )

      // Bottom bar
      tl.fromTo('.hero-bottom',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.2
      )

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return heroRef
}

// Hook for page transitions
export function usePageTransition() {
  useEffect(() => {
    // Page enter animation
    gsap.fromTo('main',
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    )
  }, [])
}

export default useGsapAnimations
