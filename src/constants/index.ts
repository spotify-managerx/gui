// Color constants
export const COLORS = {
  spotifyGreen: '#1ed760',
  spotifyBlack: '#121212',
  spotifyGray: '#181818',
  darkBg: '#1a1a1a',
  cardBg: '#1e1e1e',
  border: '#282828',
  borderLight: '#333',
  textPrimary: '#ffffff',
  textSecondary: '#b3b3b3',
  textTertiary: '#777',
} as const;

// Icon sizes
export const ICON_SIZES = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 26,
  xxxl: 48,
} as const;

// Grid configurations
export const GRID_COLS = {
  themes: 'grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6',
  apps: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  stats: 'grid-cols-4',
} as const;

// Routes
export const ROUTES = {
  home: '/home',
  plugins: '/plugins',
  apps: '/apps',
  library: '/library',
  updates: '/updates',
  backup: '/backup',
  settings: '/settings',
} as const;
