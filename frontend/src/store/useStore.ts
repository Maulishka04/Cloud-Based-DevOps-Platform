import create from 'zustand'

interface State {
  token?: string | null
  setToken: (t?: string | null) => void
}

export const useStore = create<State>((set)=>({
  token: null,
  setToken: (t) => set({ token: t })
}))
