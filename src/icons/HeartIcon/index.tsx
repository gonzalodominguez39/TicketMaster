interface HeartIconProps {
  className?: string;
  size?: number;
  color?: string;
  filled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const HeartIcon = ({
  className = "",
  size = 24,
  color = "#ef4444",
  filled = false,
  onClick,
}: HeartIconProps) => {
  return (
    <svg
      viewBox="0 0 1025.00 1025.00"
      className={`icon cursor-pointer transition-all duration-200 hover:scale-110 ${className}`}
      width={size}
      height={size}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      onClick={onClick}
      style={{ filter: filled ? 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))' : 'none' }}
    >
      {filled ? (
        // Corazón relleno
        <path
          d="M512.8 977.4c-26.1 0-50.1-7.3-71.5-21.7C323.5 897 0 675.3 0 400.5 0 212 153.4 58.6 341.9 58.6c60.5 0 119 15.8 170.9 45.9 51.9-30.1 110.5-45.9 170.9-45.9 188.5 0 341.9 153.4 341.9 341.9 0 274.8-323.5 496.6-441.3 555.2-21.4 14.4-45.4 21.7-71.5 21.7z"
          fill={color}
          stroke={color}
          strokeWidth="2"
        />
      ) : (
        // Corazón vacío (solo contorno)
        <path
          d="M512.8 977.4c-26.1 0-50.1-7.3-71.5-21.7C323.5 897 0 675.3 0 400.5 0 212 153.4 58.6 341.9 58.6c60.5 0 119 15.8 170.9 45.9 51.9-30.1 110.5-45.9 170.9-45.9 188.5 0 341.9 153.4 341.9 341.9 0 274.8-323.5 496.6-441.3 555.2-21.4 14.4-45.4 21.7-71.5 21.7zM341.9 144.1c-141.4 0-256.4 115-256.4 256.4 0 117.2 80.6 225.2 148.2 295.1 86.1 89 187.5 155.2 248.1 184.8l6.1 3.7c15.1 10.8 34.6 10.8 49.7 0l6.1-3.7C604.4 850.7 705.8 784.6 791.8 695.6c67.6-69.9 148.2-177.8 148.2-295.1 0-141.4-115-256.4-256.4-256.4-52.6 0-103.2 16-146.5 46.1L512.8 207.3l-24.5-17.1c-43.2-30.2-93.9-46.1-146.4-46.1z"
          fill="none"
          stroke={color}
          strokeWidth="40"
        />
      )}
    </svg>
  );
};
