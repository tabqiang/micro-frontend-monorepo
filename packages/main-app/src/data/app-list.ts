export interface MicroApp {
  name: string
  entry: string
  activeRule: string
}

export const subAppReact18 = import.meta.env.SUB_APP_REACT18_ENTRY

export const apps = [
  {
    name: 'Sub App React18',
    entry: subAppReact18,
    activeRule: '#/subAppReact18'
  }
]
