import { useTheme } from '../../context/ThemeContext'
import './ThemeSwitcher.css'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="theme-switcher" role="group" aria-label="Theme selector">
      <button
        className={`theme-switcher__swatch theme-switcher__swatch--navy-orange${theme === 'navy-orange' ? ' theme-switcher__swatch--active' : ''}`}
        onClick={() => setTheme('navy-orange')}
        aria-label="Switch to Friendly theme"
        aria-pressed={theme === 'navy-orange'}
      />
      <button
        className={`theme-switcher__swatch theme-switcher__swatch--nightclub${theme === 'nightclub' ? ' theme-switcher__swatch--active' : ''}`}
        onClick={() => setTheme('nightclub')}
        aria-label="Switch to Nightclub theme"
        aria-pressed={theme === 'nightclub'}
      />
    </div>
  )
}
