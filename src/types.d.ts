type Field = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  errors?: string[];
};

type Form = { [key: string]: Field };
