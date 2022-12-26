import { useCallback } from 'react';
import { useTheme } from '../hooks/use-theme/use-theme';
import { Theme } from '../providers/theme-provider';

export function ThemeButton() {
  const { theme, changeTheme } = useTheme();

  const handleThemeChange = useCallback(() => {
    changeTheme(theme === Theme.dark ? Theme.light : Theme.dark);
  }, [changeTheme, theme]);

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      className="rounded-md p-[8px] hover:bg-gray-900/10 dark:hover:bg-gray-100/10"
    >
      <span className="sr-only">Change theme</span>

      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            theme === Theme.dark
              ? 'M12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM2 13H4C4.55 13 5 12.55 5 12C5 11.45 4.55 11 4 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13ZM20 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20C19.45 11 19 11.45 19 12C19 12.55 19.45 13 20 13ZM11 2V4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2ZM11 20V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20C13 19.45 12.55 19 12 19C11.45 19 11 19.45 11 20ZM5.99 4.58C5.6 4.19 4.96 4.19 4.58 4.58C4.19 4.97 4.19 5.61 4.58 5.99L5.64 7.05C6.03 7.44 6.67 7.44 7.05 7.05C7.43 6.66 7.44 6.02 7.05 5.64L5.99 4.58ZM18.36 16.95C17.97 16.56 17.33 16.56 16.95 16.95C16.56 17.34 16.56 17.98 16.95 18.36L18.01 19.42C18.4 19.81 19.04 19.81 19.42 19.42C19.81 19.03 19.81 18.39 19.42 18.01L18.36 16.95ZM19.42 5.99C19.81 5.6 19.81 4.96 19.42 4.58C19.03 4.19 18.39 4.19 18.01 4.58L16.95 5.64C16.56 6.03 16.56 6.67 16.95 7.05C17.34 7.43 17.98 7.44 18.36 7.05L19.42 5.99ZM7.05 18.36C7.44 17.97 7.44 17.33 7.05 16.95C6.66 16.56 6.02 16.56 5.64 16.95L4.58 18.01C4.19 18.4 4.19 19.04 4.58 19.42C4.97 19.8 5.61 19.81 5.99 19.42L7.05 18.36Z'
              : 'M13.1029 7.74566C13.1908 7.74566 13.2468 7.68401 13.2627 7.59923C13.5105 6.31985 13.5025 6.28902 14.8931 6.03468C14.981 6.01156 15.045 5.96532 15.045 5.87283C15.045 5.77264 14.981 5.7264 14.8931 5.71098C13.5025 5.44123 13.5425 5.4104 13.2627 4.13873C13.2468 4.05395 13.1908 4 13.1029 4C13.007 4 12.951 4.05395 12.9351 4.13873C12.6553 5.4104 12.7033 5.44123 11.3047 5.71098C11.2168 5.7264 11.1608 5.77264 11.1608 5.87283C11.1608 5.96532 11.2168 6.01156 11.3047 6.03468C12.7033 6.30443 12.6793 6.31985 12.9351 7.59923C12.951 7.68401 13.007 7.74566 13.1029 7.74566ZM16.9231 12.9557C17.0669 12.9557 17.1708 12.8555 17.1948 12.7091C17.4505 10.6435 17.5624 10.5973 19.7283 10.2582C19.8961 10.2351 20 10.1503 20 9.99615C20 9.84971 19.8961 9.76493 19.7602 9.7341C17.5784 9.33333 17.4505 9.34875 17.1948 7.28324C17.1708 7.1368 17.0669 7.03661 16.9231 7.03661C16.7792 7.03661 16.6673 7.1368 16.6513 7.27553C16.3796 9.36416 16.2997 9.43353 14.0859 9.7341C13.95 9.75723 13.8462 9.84971 13.8462 9.99615C13.8462 10.1426 13.95 10.2351 14.0859 10.2582C16.2997 10.6667 16.3716 10.6667 16.6513 12.7245C16.6673 12.8555 16.7792 12.9557 16.9231 12.9557ZM10.9051 20C13.7902 20 16.1319 18.6127 17.2028 16.2158C17.3227 15.9383 17.3067 15.7071 17.1628 15.5607C17.043 15.4528 16.8272 15.4297 16.5794 15.5222C15.9241 15.7765 15.1648 15.8921 14.2937 15.8921C10.6813 15.8921 8.33966 13.711 8.33966 10.2813C8.33966 9.41041 8.50749 8.43931 8.77922 7.90751C8.92308 7.63006 8.91508 7.39884 8.7952 7.25241C8.65934 7.09827 8.41159 7.07514 8.09191 7.19846C5.63836 8.13873 4 10.6127 4 13.4412C4 17.1869 6.86114 20 10.9051 20Z'
          }
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}