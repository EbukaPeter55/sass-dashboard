export const passwordRules = {
  hasUpperCase: {
    test: (val: string) => /[A-Z]/.test(val),
    label: 'At least one upper case',
  },
  hasLowerCase: {
    test: (val: string) => /[a-z]/.test(val),
    label: 'At least one lower case',
  },
  hasNumber: {
    test: (val: string) => /[0-9]/.test(val),
    label: 'At least one number',
  },
  hasSpecialChar: {
    test: (val: string) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
    label: 'At least one special character',
  },
};

export const strengthColors = [
  'bg-gray-300',
  'bg-[#FF4B4B]',
  'bg-[#FFA500]',
  'bg-[#C964D9]',
  'bg-[#4CAF50]',
];
