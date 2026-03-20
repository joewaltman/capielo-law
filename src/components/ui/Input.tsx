import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Input({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || props.name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-primary mb-1.5"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full px-4 py-3 rounded-lg border bg-white text-primary placeholder:text-text-light transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-cream-300 hover:border-cream-400',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-text-light">{helperText}</p>
      )}
    </div>
  );
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Textarea({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: TextareaProps) {
  const inputId = id || props.name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-primary mb-1.5"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        className={cn(
          'w-full px-4 py-3 rounded-lg border bg-white text-primary placeholder:text-text-light transition-colors resize-y min-h-[120px]',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-cream-300 hover:border-cream-400',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-text-light">{helperText}</p>
      )}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function Select({
  label,
  error,
  helperText,
  options,
  placeholder,
  className,
  id,
  ...props
}: SelectProps) {
  const inputId = id || props.name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-primary mb-1.5"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        id={inputId}
        className={cn(
          'w-full px-4 py-3 rounded-lg border bg-white text-primary transition-colors appearance-none cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
          'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2378716C\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem]',
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-cream-300 hover:border-cream-400',
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-text-light">{helperText}</p>
      )}
    </div>
  );
}
