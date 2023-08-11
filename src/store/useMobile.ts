import { create } from 'zustand'

interface useMobileProps {
  menuIsOpen: boolean
  isMobile: boolean
  toggleMenu: () => void
  setIsMobile: (width: number) => void
  addResizeListener: () => void
}

export const useMobile = create<useMobileProps>((set, get) => ({
  menuIsOpen: false,
  isMobile: false,
  toggleMenu: () => set((state) => ({ menuIsOpen: !state.menuIsOpen })),
  setIsMobile: (width) => set(() => ({ isMobile: width < 768 })),
  addResizeListener: () => {
    const handleResize = () => {
      get().setIsMobile(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },
}))
